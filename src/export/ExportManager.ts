/**
 * Deterministic Video Export Manager
 * High-performance, frame-accurate offline rendering with sample-accurate audio sync
 * Uses WebCodecs VideoEncoder + mp4-muxer with MediaRecorder fallback
 * Audio-Reactive Visual Studio
 */

import { Muxer, ArrayBufferTarget } from 'mp4-muxer';
import { audioEngine } from '../audio/AudioEngine';
import {
  ExportProgress,
  IExportEngine,
  RESOLUTION_MAP,
  VideoExportConfig,
} from '../types/export';
import { visualEngine } from '../visual/VisualEngine';

export class ExportManager implements IExportEngine {
  private isCancelled = false;

  public isWebCodecsSupported(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof (window as any).VideoEncoder === 'function' &&
      typeof (window as any).VideoFrame === 'function'
    );
  }

  public cancelExport(): void {
    this.isCancelled = true;
  }

  /**
   * Main export method: renders frame-by-frame deterministically and muxes audio
   */
  public async startExport(
    config: VideoExportConfig,
    onProgress: (progress: ExportProgress) => void
  ): Promise<Blob> {
    this.isCancelled = false;
    const startTimeMs = performance.now();

    const dims = RESOLUTION_MAP[config.aspectRatio][config.resolution];
    // Ensure dimensions are even numbers (required by H.264)
    const width = dims.width % 2 === 0 ? dims.width : dims.width - 1;
    const height = dims.height % 2 === 0 ? dims.height : dims.height - 1;
    const fps = config.fps || 30;

    const audioDuration = audioEngine.getDuration();
    const effectiveStartTime = Math.max(0, config.startTime || 0);
    const effectiveEndTime =
      config.endTime > effectiveStartTime ? config.endTime : audioDuration > 0 ? audioDuration : 10;
    const duration = Math.max(1, effectiveEndTime - effectiveStartTime);
    const totalFrames = Math.max(1, Math.floor(duration * fps));

    const progressState: ExportProgress = {
      status: 'preparing',
      progress: 0,
      currentFrame: 0,
      totalFrames,
      elapsedTimeSeconds: 0,
      estimatedTimeRemainingSeconds: 0,
      renderingFps: 0,
    };
    onProgress({ ...progressState });

    // Switch visual engine to dedicated export mode (1.0 pixel ratio at exact dimensions)
    visualEngine.setExportMode(true, width, height);

    try {
      if (this.isWebCodecsSupported()) {
        try {
          return await this.exportWithWebCodecs(
            config,
            width,
            height,
            fps,
            effectiveStartTime,
            totalFrames,
            startTimeMs,
            progressState,
            onProgress
          );
        } catch (webcodecsErr: any) {
          console.warn('WebCodecs export failed:', webcodecsErr);
          if (this.isCancelled) throw webcodecsErr;

          // Never silently switch to MediaRecorder if frames have already been rendered
          if (progressState.currentFrame > 0) {
            throw webcodecsErr;
          }

          return await this.exportWithMediaRecorder(
            config,
            width,
            height,
            fps,
            effectiveStartTime,
            duration,
            progressState,
            onProgress
          );
        }
      } else {
        return await this.exportWithMediaRecorder(
          config,
          width,
          height,
          fps,
          effectiveStartTime,
          duration,
          progressState,
          onProgress
        );
      }
    } catch (err: any) {
      progressState.status = 'error';
      progressState.errorMessage = err.message || 'An error occurred during video export';
      onProgress({ ...progressState });
      throw err;
    } finally {
      // Always restore preview mode when export finishes or fails
      visualEngine.setExportMode(false);
    }
  }

  /**
   * High-speed WebCodecs + MP4 Muxer deterministic export
   */
  private async exportWithWebCodecs(
    config: VideoExportConfig,
    width: number,
    height: number,
    fps: number,
    startTime: number,
    totalFrames: number,
    startTimeMs: number,
    progressState: ExportProgress,
    onProgress: (progress: ExportProgress) => void
  ): Promise<Blob> {
    const VideoEncoderClass = (window as any).VideoEncoder;

    // Detect supported codec
    const candidateCodecs = [
      'avc1.420034', // Baseline Profile 5.2
      'avc1.4d002a', // Main Profile 4.2
      'avc1.640028', // High Profile 4.0
      'avc1.42E01E', // Baseline 3.0
      'vp8',
    ];

    let selectedCodec = 'avc1.420034';
    let isSupported = false;

    for (const codec of candidateCodecs) {
      try {
        const support = await VideoEncoderClass.isConfigSupported({
          codec,
          width,
          height,
          bitrate: config.bitrate || 12_000_000,
          framerate: fps,
        });
        if (support && support.supported) {
          selectedCodec = codec;
          isSupported = true;
          break;
        }
      } catch {
        // try next
      }
    }

    if (!isSupported) {
      throw new Error(`No compatible video codec supported for ${width}x${height}`);
    }

    const audioBuffer = audioEngine.getAudioBuffer();
    const AudioEncoderClass = (window as any).AudioEncoder;
    const AudioDataClass = (window as any).AudioData;

    let useAudio = false;

    if (
      config.includeAudio !== false &&
      audioBuffer &&
      typeof AudioEncoderClass === 'function' &&
      typeof AudioDataClass === 'function'
    ) {
      try {
        const support = await AudioEncoderClass.isConfigSupported({
          codec: 'mp4a.40.2',
          sampleRate: audioBuffer.sampleRate,
          numberOfChannels: Math.min(2, audioBuffer.numberOfChannels),
          bitrate: 192_000,
        });
        if (support && support.supported) {
          useAudio = true;
        }
      } catch (e) {
        console.warn('AudioEncoder AAC config check:', e);
      }
    }

    const muxerTarget = new ArrayBufferTarget();
    const isAvc = selectedCodec.startsWith('avc');

    const muxer = new Muxer({
      target: muxerTarget,
      video: {
        codec: isAvc ? 'avc' : 'vp9',
        width,
        height,
      },
      audio:
        useAudio && audioBuffer
          ? {
              codec: 'aac',
              numberOfChannels: Math.min(2, audioBuffer.numberOfChannels),
              sampleRate: audioBuffer.sampleRate,
            }
          : undefined,
      fastStart: false,
      firstTimestampBehavior: 'offset',
    });

    let encoderError: Error | null = null;
    const videoEncoder = new VideoEncoderClass({
      output: (chunk: any, meta: any) => {
        try {
          muxer.addVideoChunk(chunk, meta);
        } catch (e: any) {
          encoderError = e;
        }
      },
      error: (e: any) => {
        encoderError = e;
      },
    });

    videoEncoder.configure({
      codec: selectedCodec,
      width,
      height,
      bitrate: config.bitrate || 12_000_000,
      framerate: fps,
    });

    // 1. Encode all audio chunks if audio is active (before rendering video frames)
    if (useAudio && audioBuffer) {
      try {
        let audioChunksAdded = 0;
        const audioEncoder = new AudioEncoderClass({
          output: (chunk: any, meta: any) => {
            try {
              muxer.addAudioChunk(chunk, meta);
              audioChunksAdded++;
            } catch (chunkErr) {
              console.warn('Audio chunk mux error:', chunkErr);
            }
          },
          error: (e: any) => {
            console.warn('AudioEncoder warning:', e);
          },
        });

        audioEncoder.configure({
          codec: 'mp4a.40.2',
          sampleRate: audioBuffer.sampleRate,
          numberOfChannels: Math.min(2, audioBuffer.numberOfChannels),
          bitrate: 192_000,
        });

        const sampleRate = audioBuffer.sampleRate;
        const numberOfChannels = Math.min(2, audioBuffer.numberOfChannels);
        const startSample = Math.floor(startTime * sampleRate);
        const totalAudioSamples = Math.floor((totalFrames / fps) * sampleRate);
        const endSample = Math.min(audioBuffer.length, startSample + totalAudioSamples);

        const ch0 = audioBuffer.getChannelData(0);
        const ch1 = audioBuffer.numberOfChannels > 1 ? audioBuffer.getChannelData(1) : ch0;

        const CHUNK_SIZE = 1024; // Exact AAC frame size
        let sampleOffset = startSample;
        let frameOffset = 0;

        while (sampleOffset < endSample) {
          if (this.isCancelled) break;
          const planar = new Float32Array(CHUNK_SIZE * numberOfChannels);

          for (let i = 0; i < CHUNK_SIZE; i++) {
            const idx = sampleOffset + i;
            if (idx < endSample) {
              planar[i] = ch0[idx];
              if (numberOfChannels > 1) {
                planar[CHUNK_SIZE + i] = ch1[idx];
              }
            } else {
              planar[i] = 0;
              if (numberOfChannels > 1) planar[CHUNK_SIZE + i] = 0;
            }
          }

          const timestampMicros = Math.floor((frameOffset / sampleRate) * 1_000_000);
          const audioData = new AudioDataClass({
            format: 'f32-planar',
            sampleRate,
            numberOfFrames: CHUNK_SIZE,
            numberOfChannels,
            timestamp: timestampMicros,
            data: planar,
          });

          audioEncoder.encode(audioData);
          audioData.close();

          sampleOffset += CHUNK_SIZE;
          frameOffset += CHUNK_SIZE;

          if (audioEncoder.encodeQueueSize > 20) {
            await new Promise((r) => setTimeout(r, 0));
          }
        }

        await audioEncoder.flush();
        audioEncoder.close();
        console.log(`Audio successfully encoded: ${audioChunksAdded} AAC chunks added to MP4.`);
      } catch (audioErr) {
        console.warn('Audio encoding failed, proceeding with video only:', audioErr);
      }
    }

    progressState.status = 'renderingFrames';
    onProgress({ ...progressState });

    const frameDurationMicros = 1_000_000 / fps;
    const VideoFrameClass = (window as any).VideoFrame;
    const renderCanvas = visualEngine.getCanvas();
    if (!renderCanvas) throw new Error('Render canvas not available');

    for (let frame = 0; frame < totalFrames; frame++) {
      if (this.isCancelled) {
        progressState.status = 'cancelled';
        onProgress({ ...progressState });
        throw new Error('Export cancelled by user');
      }
      if (encoderError) {
        throw encoderError;
      }

      const timestamp = startTime + frame / fps;
      const audioData = audioEngine.getOfflineAnalysis(timestamp);

      // 1. Render deterministic frame to WebGL canvas
      visualEngine.renderOfflineFrame(audioData, timestamp, frame, fps);

      // 2. Capture video frame
      const videoFrame = new VideoFrameClass(renderCanvas, {
        timestamp: frame * frameDurationMicros,
        duration: frameDurationMicros,
      });

      const isKeyFrame = frame % (fps * 2) === 0;
      videoEncoder.encode(videoFrame, { keyFrame: isKeyFrame });
      videoFrame.close();

      // 3. Keep encoder queue healthy to prevent GPU stalls and out-of-memory
      while (videoEncoder.encodeQueueSize > 5) {
        await new Promise((r) => setTimeout(r, 4));
      }

      // 4. Update progress metrics
      const now = performance.now();
      const elapsed = (now - startTimeMs) / 1000;
      const currentFps = frame > 0 ? frame / elapsed : fps;
      const remainingFrames = totalFrames - frame;
      const eta = remainingFrames / (currentFps || 1);

      progressState.currentFrame = frame + 1;
      progressState.progress = (frame + 1) / totalFrames;
      progressState.elapsedTimeSeconds = elapsed;
      progressState.estimatedTimeRemainingSeconds = eta;
      progressState.renderingFps = currentFps;

      // Yield to UI thread on every frame or two so progress updates visibly
      if (frame % 2 === 0 || frame === totalFrames - 1) {
        onProgress({ ...progressState });
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
    }

    progressState.status = 'muxingAudio';
    onProgress({ ...progressState });

    // Allow UI to render the 100% progress state before flushing
    await new Promise((resolve) => setTimeout(resolve, 30));

    // 1. Flush video encoder with 25s timeout guard
    await Promise.race([
      videoEncoder.flush(),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Video encoder flush timed out')), 25000)
      ),
    ]);
    videoEncoder.close();

    // 2. Finalize MP4 muxing safely
    try {
      muxer.finalize();
    } catch (mErr: any) {
      console.error('Muxer finalize error:', mErr);
      throw new Error(`Failed to finalize MP4 file: ${mErr.message || 'Muxing error'}`);
    }

    const buffer = muxerTarget.buffer;
    if (!buffer || buffer.byteLength === 0) {
      throw new Error('Generated MP4 file is empty');
    }

    const outputBlob = new Blob([buffer], { type: 'video/mp4' });
    const blobUrl = URL.createObjectURL(outputBlob);

    // 3. Complete progress
    progressState.status = 'completed';
    progressState.progress = 1.0;
    progressState.outputBlobUrl = blobUrl;
    progressState.fileSizeBytes = outputBlob.size;
    onProgress({ ...progressState });

    // 4. Auto-trigger browser download
    try {
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `${config.outputFileName || 'visualization'}.mp4`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        if (a.parentNode) document.body.removeChild(a);
      }, 500);
    } catch (dlErr) {
      console.warn('Auto download trigger error (user can still click button):', dlErr);
    }

    return outputBlob;
  }

  /**
   * Fallback export using MediaRecorder for environments without WebCodecs
   */
  private async exportWithMediaRecorder(
    config: VideoExportConfig,
    width: number,
    height: number,
    fps: number,
    startTime: number,
    duration: number,
    progressState: ExportProgress,
    onProgress: (progress: ExportProgress) => void
  ): Promise<Blob> {
    const canvas = visualEngine.getCanvas();
    if (!canvas) throw new Error('Canvas not found');

    const stream = canvas.captureStream(fps);
    const audioDest = audioEngine.connectMediaStreamDestination();
    if (audioDest && audioDest.stream.getAudioTracks().length > 0) {
      stream.addTrack(audioDest.stream.getAudioTracks()[0]);
    }

    const mimeType = MediaRecorder.isTypeSupported('video/mp4; codecs="avc1.424028"')
      ? 'video/mp4'
      : 'video/webm;codecs=vp9';

    const recorder = new MediaRecorder(stream, {
      mimeType,
      videoBitsPerSecond: config.bitrate || 10_000_000,
    });

    const chunks: Blob[] = [];
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) chunks.push(e.data);
    };

    return new Promise((resolve, reject) => {
      const startTimeMs = performance.now();

      const cleanupAudio = () => {
        if (audioDest) {
          audioEngine.disconnectMediaStreamDestination(audioDest);
        }
      };

      recorder.onstop = () => {
        cleanupAudio();
        const blob = new Blob(chunks, { type: mimeType });
        progressState.status = 'completed';
        progressState.progress = 1.0;
        progressState.outputBlobUrl = URL.createObjectURL(blob);
        progressState.fileSizeBytes = blob.size;
        onProgress({ ...progressState });
        resolve(blob);
      };

      recorder.onerror = (e) => {
        cleanupAudio();
        progressState.status = 'error';
        progressState.errorMessage = 'MediaRecorder error occurred during export';
        onProgress({ ...progressState });
        reject(e);
      };

      recorder.start(100);
      audioEngine.play(startTime);

      const checkInterval = setInterval(() => {
        const cur = audioEngine.getCurrentTime();
        const elapsed = (performance.now() - startTimeMs) / 1000;
        const progress = Math.min(1.0, (cur - startTime) / duration);
        const eta = Math.max(0, duration - (cur - startTime));

        progressState.progress = progress;
        progressState.status = 'renderingFrames';
        progressState.currentFrame = Math.floor(progress * duration * fps);
        progressState.elapsedTimeSeconds = elapsed;
        progressState.estimatedTimeRemainingSeconds = eta;
        progressState.renderingFps = fps;
        onProgress({ ...progressState });

        if (cur >= startTime + duration || this.isCancelled) {
          clearInterval(checkInterval);
          audioEngine.pause();
          recorder.stop();
        }
      }, 100);
    });
  }
}

// Global export manager singleton
export const exportManager = new ExportManager();
