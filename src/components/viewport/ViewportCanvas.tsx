/**
 * Center Viewport & WebGL Canvas Container
 * Handles dynamic aspect framing (16:9, 9:16, 1:1), 60 FPS animation loop, and empty state
 * Audio-Reactive Visual Studio
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Upload, Radio, Sparkles } from 'lucide-react';
import { audioEngine } from '../../audio/AudioEngine';
import { useStudioStore } from '../../store/useStudioStore';
import { visualEngine } from '../../visual/VisualEngine';

export const ViewportCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 1280,
    height: 720,
  });

  const {
    project,
    isPlaying,
    duration,
    isLooping,
    loadAudioFile,
    play,
    updateCurrentTime,
    setAudioAnalysisData,
  } = useStudioStore();

  // Compute maximum canvas bounding box that fits inside the container for the active aspect ratio
  const computeFittedDimensions = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pad = 32; // 16px padding on each side
    const availWidth = Math.max(200, rect.width - pad);
    const availHeight = Math.max(150, rect.height - pad);

    let targetAspect = 16 / 9;
    if (project.aspectRatio === '9:16') targetAspect = 9 / 16;
    else if (project.aspectRatio === '1:1') targetAspect = 1.0;

    let w: number;
    let h: number;

    if (availWidth / availHeight > targetAspect) {
      // Height is constraining
      h = Math.floor(availHeight);
      w = Math.floor(h * targetAspect);
    } else {
      // Width is constraining
      w = Math.floor(availWidth);
      h = Math.floor(w / targetAspect);
    }

    setDimensions({ width: w, height: h });
    visualEngine.resize(w, h);
    visualEngine.setAspectRatio(project.aspectRatio);
  }, [project.aspectRatio]);

  // Mount visual engine on canvas
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    visualEngine.mount(containerRef.current, canvasRef.current);
    visualEngine.syncLayers(project.layers);
    visualEngine.setAspectRatio(project.aspectRatio);

    computeFittedDimensions();

    const resizeObserver = new ResizeObserver(() => {
      computeFittedDimensions();
    });
    resizeObserver.observe(containerRef.current);

    // 60 FPS Animation Loop
    let animId: number;
    const loop = () => {
      const audioData = audioEngine.getRealtimeAnalysis();

      // Render frame
      visualEngine.renderPreviewFrame(audioData);

      // Check looping
      if (audioEngine.isPlaying()) {
        const cur = audioEngine.getCurrentTime();
        updateCurrentTime(cur);
        setAudioAnalysisData(audioData);

        if (isLooping && duration > 0 && cur >= duration - 0.05) {
          audioEngine.seek(0);
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, []);

  // Update fitted dimensions & aspect ratio whenever project.aspectRatio changes
  useEffect(() => {
    computeFittedDimensions();
  }, [project.aspectRatio, computeFittedDimensions]);

  // Sync layer configuration updates
  useEffect(() => {
    visualEngine.syncLayers(project.layers);
  }, [project.layers]);

  // Handle Drag & Drop of audio file
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('audio/')) {
      loadAudioFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleLoadDemo = async () => {
    try {
      const metadata = await audioEngine.generateDemoTrack();
      useStudioStore.setState({
        audioMetadata: metadata,
        audioBuffer: audioEngine.getAudioBuffer(),
        duration: metadata.duration,
        currentTime: 0,
        isPlaying: false,
      });
      play();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main
      ref={containerRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="flex-1 bg-studio-950 flex items-center justify-center p-4 relative overflow-hidden select-none"
    >
      {/* Aspect Ratio Canvas Framing */}
      <div
        style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
        className="relative shadow-2xl shadow-black/90 rounded-xl overflow-hidden border border-studio-800/80 bg-black flex items-center justify-center transition-all duration-150"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />

        {/* Empty State Overlay if no audio loaded */}
        {duration === 0 && (
          <div className="absolute inset-0 bg-studio-950/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-10">
            <div className="w-14 h-14 rounded-2xl bg-studio-900 border border-studio-750 flex items-center justify-center mb-4 shadow-xl shadow-cyan-500/10">
              <Sparkles className="w-7 h-7 text-studio-accent animate-pulse" />
            </div>

            <h2 className="text-base font-bold text-white tracking-wide">
              Audio-Reactive Visual Studio
            </h2>
            <p className="text-xs text-slate-400 max-w-xs mt-1 mb-5 leading-relaxed">
              Drop an MP3 or WAV audio track here, or load the electronic synthesizer demo loop to start visualizing.
            </p>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleLoadDemo}
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <Radio className="w-4 h-4" />
                <span>Load Demo Track</span>
              </button>

              <label className="flex items-center space-x-2 bg-studio-800 hover:bg-studio-700 text-slate-200 hover:text-white px-4 py-2 rounded-lg text-xs font-semibold border border-studio-700 cursor-pointer transition-all hover:scale-105">
                <Upload className="w-4 h-4 text-studio-accent" />
                <span>Upload Audio</span>
                <input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) loadAudioFile(f);
                  }}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

