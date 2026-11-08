/**
 * Audio Engine Implementation
 * Supports real-time Web Audio API playback & preview analysis,
 * deterministic offline mathematical FFT analysis, and synthetic demo track generation.
 * Audio-Reactive Visual Studio
 */

import { AudioAnalysisData, AudioTrackMetadata, IAudioEngine } from '../types/audio';
import { FrequencyAnalyzer } from './FrequencyAnalyzer';

export class AudioEngine implements IAudioEngine {
  private audioContext: AudioContext | null = null;
  private audioBuffer: AudioBuffer | null = null;
  private sourceNode: AudioBufferSourceNode | null = null;
  private gainNode: GainNode | null = null;
  private analyserNode: AnalyserNode | null = null;
  private frequencyAnalyzer: FrequencyAnalyzer;

  private metadata: AudioTrackMetadata | null = null;
  private volume = 0.8;
  private playbackStartTime = 0;
  private pauseOffset = 0;
  private _isPlaying = false;

  // Realtime buffers
  private freqByteData: Uint8Array = new Uint8Array(1024);
  private timeByteData: Uint8Array = new Uint8Array(1024);
  private normSpectrum: Float32Array = new Float32Array(512);
  private normWaveform: Float32Array = new Float32Array(1024);

  // Offline FFT tables
  private fftCosTable: Float32Array | null = null;
  private fftSinTable: Float32Array | null = null;
  private hannWindowTable: Float32Array | null = null;

  constructor() {
    this.frequencyAnalyzer = new FrequencyAnalyzer();
  }

  public async init(): Promise<void> {
    if (!this.audioContext) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioContext = new AudioContextClass();

      this.gainNode = this.audioContext.createGain();
      this.gainNode.gain.value = this.volume;

      this.analyserNode = this.audioContext.createAnalyser();
      this.analyserNode.fftSize = 2048;
      this.analyserNode.smoothingTimeConstant = 0.75;
      this.analyserNode.minDecibels = -90;
      this.analyserNode.maxDecibels = -10;

      this.gainNode.connect(this.analyserNode);
      this.analyserNode.connect(this.audioContext.destination);

      this.freqByteData = new Uint8Array(this.analyserNode.frequencyBinCount);
      this.timeByteData = new Uint8Array(this.analyserNode.fftSize);
      this.normSpectrum = new Float32Array(this.analyserNode.frequencyBinCount);
      this.normWaveform = new Float32Array(this.analyserNode.fftSize);

      this.initFftTables(2048);
    }

    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  /**
   * Pre-compute trigonometry and windowing tables for fast offline FFT
   */
  private initFftTables(size: number): void {
    this.fftCosTable = new Float32Array(size / 2);
    this.fftSinTable = new Float32Array(size / 2);
    this.hannWindowTable = new Float32Array(size);

    for (let i = 0; i < size / 2; i++) {
      this.fftCosTable[i] = Math.cos((-2 * Math.PI * i) / size);
      this.fftSinTable[i] = Math.sin((-2 * Math.PI * i) / size);
    }

    for (let i = 0; i < size; i++) {
      this.hannWindowTable[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / (size - 1)));
    }
  }

  /**
   * Load and decode an audio file (MP3, WAV, FLAC, OGG, etc.)
   */
  public async loadAudioFile(file: File | Blob): Promise<AudioTrackMetadata> {
    await this.init();
    if (!this.audioContext) throw new Error('AudioContext not initialized');

    this.stop();

    const arrayBuffer = await file.arrayBuffer();
    // Use audioContext.decodeAudioData
    this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer.slice(0));

    this.metadata = {
      id: `audio-${Date.now()}`,
      fileName: file instanceof File ? file.name : 'Sample_Electronic_Track.wav',
      mimeType: file.type || 'audio/mpeg',
      duration: this.audioBuffer.duration,
      sampleRate: this.audioBuffer.sampleRate,
      numberOfChannels: this.audioBuffer.numberOfChannels,
      fileSizeBytes: file.size,
    };

    this.pauseOffset = 0;
    this.frequencyAnalyzer.reset();

    return this.metadata;
  }

  /**
   * Generates a high-energy electronic synthesizer demo loop (128 BPM)
   * Includes kick, snare, rolling bassline, and lead synth chords
   */
  public async generateDemoTrack(): Promise<AudioTrackMetadata> {
    await this.init();
    if (!this.audioContext) throw new Error('AudioContext not initialized');

    this.stop();

    const sampleRate = this.audioContext.sampleRate;
    const duration = 30; // 30 second loop
    const totalSamples = Math.floor(sampleRate * duration);
    const audioBuffer = this.audioContext.createBuffer(2, totalSamples, sampleRate);

    const left = audioBuffer.getChannelData(0);
    const right = audioBuffer.getChannelData(1);

    const bpm = 128;
    const secondsPerBeat = 60 / bpm;
    const samplesPerBeat = Math.floor(sampleRate * secondsPerBeat);

    for (let i = 0; i < totalSamples; i++) {
      const time = i / sampleRate;
      const beat = time / secondsPerBeat;
      const beatIndex = Math.floor(beat);
      const beatFraction = beat - beatIndex;
      const subBeat = (beat * 4) % 1; // 16th notes

      let sample = 0;

      // 1. Kick Drum (every beat: 0, 1, 2, 3...)
      const kickTime = beatFraction * secondsPerBeat;
      if (kickTime < 0.22) {
        const kickPitch = 140 * Math.exp(-kickTime * 28) + 45;
        const kickAmp = Math.max(0, 1 - kickTime * 4.5);
        sample += Math.sin(2 * Math.PI * kickPitch * kickTime) * kickAmp * 0.7;
      }

      // 2. Snare / Clap (on beats 1 and 3 in 4-beat bar)
      const barBeat = beatIndex % 4;
      if (barBeat === 1 || barBeat === 3) {
        const snareTime = beatFraction * secondsPerBeat;
        if (snareTime < 0.25) {
          const noise = (Math.random() * 2 - 1) * Math.exp(-snareTime * 14);
          const tone = Math.sin(2 * Math.PI * 220 * snareTime) * Math.exp(-snareTime * 18);
          sample += (noise * 0.4 + tone * 0.3) * 0.6;
        }
      }

      // 3. Hi-Hats (every 16th note, accented on off-beats)
      const hatFraction = subBeat;
      const hatTime = hatFraction * (secondsPerBeat / 4);
      if (hatTime < 0.06) {
        const isOffbeat = Math.floor(beat * 4) % 2 === 1;
        const hatAmp = (isOffbeat ? 0.35 : 0.15) * Math.exp(-hatTime * 45);
        sample += (Math.random() * 2 - 1) * hatAmp;
      }

      // 4. Rolling Bassline (16th notes: F - G# - Bb - C progression)
      const barIndex = Math.floor(beatIndex / 4) % 4;
      const bassNotes = [55, 65.41, 73.42, 65.41]; // A1, C2, D2, C2
      const bassFreq = bassNotes[barIndex];
      const bassEnv = Math.exp(-hatTime * 12);
      const bassSaw = ((hatTime * bassFreq * 2) % 2) - 1;
      sample += bassSaw * bassEnv * 0.35;

      // 5. Synth Arpeggio / Chords
      const arpNotes = [220, 261.63, 329.63, 440, 523.25];
      const arpFreq = arpNotes[Math.floor(beat * 2) % arpNotes.length];
      const arpTone = Math.sin(2 * Math.PI * arpFreq * time);
      sample += arpTone * 0.12 * (0.8 + 0.2 * Math.sin(time * 3));

      // Clip preventer
      sample = Math.max(-0.95, Math.min(0.95, sample));

      left[i] = sample;
      right[i] = sample;
    }

    this.audioBuffer = audioBuffer;
    this.metadata = {
      id: `demo-${Date.now()}`,
      fileName: 'Electro_Drive_128BPM_Demo.wav',
      mimeType: 'audio/wav',
      duration,
      sampleRate,
      numberOfChannels: 2,
      fileSizeBytes: totalSamples * 4,
    };

    this.pauseOffset = 0;
    this.frequencyAnalyzer.reset();

    return this.metadata;
  }

  public play(startTime?: number): void {
    if (!this.audioBuffer || !this.audioContext || !this.gainNode) return;

    if (this._isPlaying) {
      this.pause();
    }

    if (startTime !== undefined) {
      this.pauseOffset = Math.max(0, Math.min(startTime, this.audioBuffer.duration));
    }

    this.sourceNode = this.audioContext.createBufferSource();
    this.sourceNode.buffer = this.audioBuffer;
    this.sourceNode.connect(this.gainNode);

    this.sourceNode.onended = () => {
      if (this._isPlaying && this.getCurrentTime() >= this.getDuration()) {
        this._isPlaying = false;
        this.pauseOffset = 0;
      }
    };

    this.playbackStartTime = this.audioContext.currentTime - this.pauseOffset;
    this.sourceNode.start(0, this.pauseOffset);
    this._isPlaying = true;
  }

  public pause(): void {
    if (!this._isPlaying) return;

    if (this.sourceNode) {
      try {
        this.sourceNode.stop();
        this.sourceNode.disconnect();
      } catch {
        // ignore
      }
      this.sourceNode = null;
    }

    this.pauseOffset = this.getCurrentTime();
    this._isPlaying = false;
  }

  public stop(): void {
    this.pause();
    this.pauseOffset = 0;
  }

  public seek(timeInSeconds: number): void {
    const wasPlaying = this._isPlaying;
    if (wasPlaying) {
      this.pause();
    }
    const maxDur = this.getDuration();
    this.pauseOffset = Math.max(0, Math.min(timeInSeconds, maxDur));
    if (wasPlaying) {
      this.play(this.pauseOffset);
    }
  }

  public setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(1, volume));
    if (this.gainNode) {
      this.gainNode.gain.setValueAtTime(this.volume, this.audioContext?.currentTime || 0);
    }
  }

  public getCurrentTime(): number {
    if (!this.audioBuffer) return 0;
    if (!this._isPlaying) return this.pauseOffset;
    if (!this.audioContext) return 0;

    const time = this.audioContext.currentTime - this.playbackStartTime;
    return Math.min(time, this.audioBuffer.duration);
  }

  public getDuration(): number {
    return this.audioBuffer ? this.audioBuffer.duration : 0;
  }

  public isPlaying(): boolean {
    return this._isPlaying;
  }

  public getAudioBuffer(): AudioBuffer | null {
    return this.audioBuffer;
  }

  public getAudioContext(): AudioContext | null {
    return this.audioContext;
  }

  public connectMediaStreamDestination(): MediaStreamAudioDestinationNode | null {
    if (!this.audioContext || !this.gainNode) return null;
    const dest = this.audioContext.createMediaStreamDestination();
    this.gainNode.connect(dest);
    return dest;
  }

  public disconnectMediaStreamDestination(dest: MediaStreamAudioDestinationNode): void {
    if (this.gainNode && dest) {
      try {
        this.gainNode.disconnect(dest);
      } catch {
        // ignore
      }
    }
  }

  /**
   * Advanced multi-pass autocorrelation BPM detector
   * Scans audio buffer onsets across tempo range [70, 185]
   */
  public async detectBpmFromBuffer(): Promise<number> {
    if (!this.audioBuffer) return 128;

    const channelData = this.audioBuffer.getChannelData(0);
    const sampleRate = this.audioBuffer.sampleRate;
    const duration = this.audioBuffer.duration;

    // Analyze up to 45 seconds, starting at 10% into the song to skip quiet intros
    const startOffset = Math.floor(Math.min(5, duration * 0.1) * sampleRate);
    const maxSamples = Math.floor(Math.min(45, duration * 0.8) * sampleRate);
    const endOffset = Math.min(channelData.length, startOffset + maxSamples);

    // 1. Compute sub-band energy envelope in 512-sample blocks (~86 Hz frame rate)
    const hopSize = 512;
    const totalBlocks = Math.floor((endOffset - startOffset) / hopSize);
    if (totalBlocks < 200) return 128;

    const envelope = new Float32Array(totalBlocks);
    let prevEnergy = 0;

    for (let b = 0; b < totalBlocks; b++) {
      const idx = startOffset + b * hopSize;
      let sum = 0;
      for (let j = 0; j < hopSize; j += 2) {
        const val = channelData[idx + j] || 0;
        sum += val * val;
      }
      const energy = Math.sqrt(sum / (hopSize / 2));
      // Rectified difference (onset flux)
      const diff = Math.max(0, energy - prevEnergy);
      envelope[b] = diff;
      prevEnergy = energy;
    }

    const frameRate = sampleRate / hopSize;

    // 2. Autocorrelation over BPM range [70, 180]
    let bestBpm = 128;
    let maxCorrelation = -1;

    for (let candidateBpm = 70; candidateBpm <= 180; candidateBpm++) {
      const lag = Math.round((60 * frameRate) / candidateBpm);
      if (lag <= 0 || lag >= totalBlocks / 2) continue;

      let corr = 0;
      const count = totalBlocks - lag;
      for (let i = 0; i < count; i++) {
        corr += envelope[i] * envelope[i + lag];
      }
      corr /= count;

      // Slight perceptual weighting toward common dance tempos (120 - 132 BPM)
      const tempoWeight = 1.0 - Math.abs(candidateBpm - 128) * 0.0015;
      const weightedCorr = corr * tempoWeight;

      if (weightedCorr > maxCorrelation) {
        maxCorrelation = weightedCorr;
        bestBpm = candidateBpm;
      }
    }

    this.frequencyAnalyzer.setBpm(bestBpm);
    return bestBpm;
  }

  public setManualBpm(bpm: number): void {
    this.frequencyAnalyzer.setBpm(bpm);
  }

  public multiplyBpm(factor: number): number {
    const newBpm = Math.round(this.frequencyAnalyzer.getBpm() * factor);
    this.frequencyAnalyzer.setBpm(newBpm);
    return newBpm;
  }

  /**
   * Real-time analysis for preview playback
   */
  public getRealtimeAnalysis(): AudioAnalysisData {
    const defaultData: AudioAnalysisData = {
      timestamp: this.getCurrentTime(),
      bands: { subBass: 0, bass: 0, lowMid: 0, mid: 0, highMid: 0, treble: 0 },
      spectrum: this.normSpectrum,
      waveform: this.normWaveform,
      rms: 0,
      peak: 0,
      beat: {
        isBeat: false,
        beatIntensity: 0,
        beatPhase: 0,
        bpm: 120,
        bpmConfidence: 0,
        timeSinceLastBeat: 0,
        spectralFlux: 0,
      },
    };

    if (!this.analyserNode || !this._isPlaying) {
      return defaultData;
    }

    this.analyserNode.getByteFrequencyData(this.freqByteData as any);
    this.analyserNode.getByteTimeDomainData(this.timeByteData as any);

    const freqLen = this.freqByteData.length;
    for (let i = 0; i < freqLen; i++) {
      this.normSpectrum[i] = this.freqByteData[i] / 255.0;
    }

    const timeLen = this.timeByteData.length;
    for (let i = 0; i < timeLen; i++) {
      // Convert [0, 255] to [-1.0, 1.0]
      this.normWaveform[i] = (this.timeByteData[i] - 128) / 128.0;
    }

    const timestamp = this.getCurrentTime();
    const sampleRate = this.audioContext?.sampleRate || 44100;
    const analysis = this.frequencyAnalyzer.analyze(
      this.normSpectrum,
      this.normWaveform,
      sampleRate,
      timestamp
    );

    return {
      timestamp,
      bands: analysis.bands,
      spectrum: this.normSpectrum,
      waveform: this.normWaveform,
      rms: analysis.rms,
      peak: analysis.peak,
      beat: analysis.beat,
    };
  }

  /**
   * Deterministic offline mathematical analysis for export frames
   * Computes exact windowed FFT on raw audio buffer at timestamp
   */
  public getOfflineAnalysis(timestamp: number, windowDuration = 0.046): AudioAnalysisData {
    if (!this.audioBuffer) {
      return this.getRealtimeAnalysis();
    }

    const sampleRate = this.audioBuffer.sampleRate;
    const fftSize = 2048;
    const centerSample = Math.floor(timestamp * sampleRate);
    const halfWindow = Math.floor(fftSize / 2);
    const startSample = centerSample - halfWindow;

    const channelData = this.audioBuffer.getChannelData(0);
    const totalSamples = channelData.length;

    const offlineWaveform = new Float32Array(fftSize);
    const real = new Float32Array(fftSize);
    const imag = new Float32Array(fftSize);

    // Extract time slice with Hann window
    for (let i = 0; i < fftSize; i++) {
      const idx = startSample + i;
      const rawSample = idx >= 0 && idx < totalSamples ? channelData[idx] : 0;
      offlineWaveform[i] = rawSample;
      const windowCoeff = this.hannWindowTable ? this.hannWindowTable[i] : 1;
      real[i] = rawSample * windowCoeff;
      imag[i] = 0;
    }

    // Radix-2 Cooley-Tukey FFT
    this.cooleyTukeyFft(real, imag);

    // Compute normalized magnitudes
    const binCount = fftSize / 2;
    const offlineSpectrum = new Float32Array(binCount);
    for (let i = 0; i < binCount; i++) {
      const mag = Math.sqrt(real[i] * real[i] + imag[i] * imag[i]) / (fftSize / 4);
      offlineSpectrum[i] = Math.min(1, mag * 2.5); // normalization factor
    }

    const analysis = this.frequencyAnalyzer.analyze(
      offlineSpectrum,
      offlineWaveform,
      sampleRate,
      timestamp
    );

    return {
      timestamp,
      bands: analysis.bands,
      spectrum: offlineSpectrum,
      waveform: offlineWaveform,
      rms: analysis.rms,
      peak: analysis.peak,
      beat: analysis.beat,
    };
  }

  /**
   * High performance in-place Radix-2 Cooley-Tukey Fast Fourier Transform
   */
  private cooleyTukeyFft(real: Float32Array, imag: Float32Array): void {
    const n = real.length;
    let j = 0;

    // Bit-reversal permutation
    for (let i = 0; i < n - 1; i++) {
      if (i < j) {
        const tr = real[i];
        real[i] = real[j];
        real[j] = tr;
        const ti = imag[i];
        imag[i] = imag[j];
        imag[j] = ti;
      }
      let k = n >> 1;
      while (k <= j) {
        j -= k;
        k >>= 1;
      }
      j += k;
    }

    // Butterfly computations
    let l = 1;
    while (l < n) {
      const step = l << 1;
      for (let m = 0; m < l; m++) {
        const angle = (-Math.PI * m) / l;
        const wReal = Math.cos(angle);
        const wImag = Math.sin(angle);

        for (let i = m; i < n; i += step) {
          const idx = i + l;
          const tr = wReal * real[idx] - wImag * imag[idx];
          const ti = wReal * imag[idx] + wImag * real[idx];

          real[idx] = real[i] - tr;
          imag[idx] = imag[i] - ti;
          real[i] += tr;
          imag[i] += ti;
        }
      }
      l = step;
    }
  }

  public dispose(): void {
    this.stop();
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    this.audioBuffer = null;
    this.metadata = null;
  }
}

// Global audio engine singleton
export const audioEngine = new AudioEngine();
