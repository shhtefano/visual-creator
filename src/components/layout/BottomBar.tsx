/**
 * Studio Bottom Bar: Audio Transport & Interactive Waveform Canvas Timeline
 * Audio-Reactive Visual Studio
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  Play,
  Pause,
  Square,
  Repeat,
  Volume2,
  VolumeX,
  Upload,
  Radio,
  Zap,
  RefreshCw,
} from 'lucide-react';
import { audioEngine } from '../../audio/AudioEngine';
import { useStudioStore } from '../../store/useStudioStore';

export const BottomBar: React.FC = () => {
  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    isLooping,
    play,
    pause,
    stop,
    seek,
    setVolume,
    toggleMute,
    toggleLoop,
    loadAudioFile,
    currentAudioData,
    audioBuffer,
  } = useStudioStore();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const waveformCanvasRef = useRef<HTMLCanvasElement>(null);
  const [waveformPeaks, setWaveformPeaks] = useState<Float32Array | null>(null);
  const [isDetectingBpm, setIsDetectingBpm] = useState(false);

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Compute waveform peaks when audioBuffer changes
  useEffect(() => {
    if (!audioBuffer) {
      setWaveformPeaks(null);
      return;
    }

    const channelData = audioBuffer.getChannelData(0);
    const totalSamples = channelData.length;
    const numBars = 350;
    const step = Math.floor(totalSamples / numBars);
    const peaks = new Float32Array(numBars);

    for (let i = 0; i < numBars; i++) {
      const start = i * step;
      const end = Math.min(start + step, totalSamples);
      let max = 0;
      for (let j = start; j < end; j += 4) {
        const abs = Math.abs(channelData[j]);
        if (abs > max) max = abs;
      }
      peaks[i] = Math.min(1.0, max * 1.4);
    }

    setWaveformPeaks(peaks);
  }, [audioBuffer]);

  // Render waveform peaks with real-time played/unplayed coloring
  useEffect(() => {
    const canvas = waveformCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    if (!waveformPeaks) {
      // Draw idle line
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();
      return;
    }

    const progressRatio = duration > 0 ? Math.min(1.0, currentTime / duration) : 0;
    const progressX = progressRatio * width;
    const numBars = waveformPeaks.length;
    const barWidth = width / numBars;
    const centerY = height / 2;

    for (let i = 0; i < numBars; i++) {
      const x = i * barWidth;
      const barH = Math.max(2, waveformPeaks[i] * (height * 0.88));
      const top = centerY - barH / 2;

      if (x <= progressX) {
        // Played: Neon Cyan to Magenta Gradient
        const t = x / width;
        ctx.fillStyle = t < 0.5 ? '#00f0ff' : '#ff007f';
      } else {
        // Unplayed: Sleek dark slate
        ctx.fillStyle = '#334155';
      }

      ctx.fillRect(x, top, Math.max(1, barWidth - 1), barH);
    }

    // Draw playhead vertical line
    if (duration > 0) {
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 8;
      ctx.fillRect(progressX - 1, 0, 2, height);
      ctx.shadowBlur = 0;
    }
  }, [waveformPeaks, currentTime, duration]);

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    seek(ratio * duration);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      loadAudioFile(file);
    }
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
      console.error('Failed to generate demo track:', err);
    }
  };

  const isBeat = currentAudioData?.beat?.isBeat || false;
  const bpm = currentAudioData?.beat?.bpm || 128;

  return (
    <footer className="h-16 bg-studio-900 border-t border-studio-800 px-4 flex items-center justify-between select-none z-30">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Left: Playback Transport Controls */}
      <div className="flex items-center space-x-3">
        {/* Play/Pause */}
        <button
          onClick={isPlaying ? pause : play}
          disabled={duration === 0}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            duration === 0
              ? 'bg-studio-800 text-slate-600 cursor-not-allowed'
              : isPlaying
              ? 'bg-studio-accent text-slate-950 shadow-md shadow-studio-accent/30 hover:scale-105 active:scale-95'
              : 'bg-white text-slate-950 shadow-md hover:scale-105 active:scale-95'
          }`}
          title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
        </button>

        {/* Stop */}
        <button
          onClick={stop}
          disabled={duration === 0}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-studio-800 disabled:opacity-20 transition-all"
          title="Stop and return to start"
        >
          <Square className="w-4 h-4 fill-current" />
        </button>

        {/* Loop */}
        <button
          onClick={toggleLoop}
          className={`p-2 rounded-lg transition-all ${
            isLooping ? 'text-studio-accent bg-studio-800/80' : 'text-slate-500 hover:text-slate-300 hover:bg-studio-800'
          }`}
          title={isLooping ? 'Looping enabled' : 'Looping disabled'}
        >
          <Repeat className="w-4 h-4" />
        </button>

        {/* Time display */}
        <div className="font-mono text-xs text-slate-300 tracking-wider">
          <span className="text-white font-semibold">{formatTime(currentTime)}</span>
          <span className="text-slate-600 mx-1">/</span>
          <span className="text-slate-400">{formatTime(duration)}</span>
        </div>

        {/* Beat Pulse Indicator & BPM Controls */}
        <div className="hidden sm:flex items-center space-x-2 pl-2 border-l border-studio-800">
          <div
            className={`w-3 h-3 rounded-full border transition-all duration-75 ${
              isBeat
                ? 'bg-studio-neonPink border-pink-300 scale-125 shadow-md shadow-pink-500/80'
                : 'bg-studio-950 border-studio-700 scale-100'
            }`}
            title="Real-time Beat Transient Detection"
          />
          <div className="flex items-center space-x-1.5 text-[11px] font-mono text-slate-300 bg-studio-950 px-2 py-1 rounded-md border border-studio-800">
            <Zap className="w-3 h-3 text-studio-neonPink" />
            <button
              onClick={() => {
                const manual = prompt('Enter exact BPM (e.g. 128, 140, 174):', `${bpm}`);
                if (manual) {
                  const num = parseInt(manual);
                  if (!isNaN(num) && num >= 40 && num <= 240) {
                    useStudioStore.getState().setManualBpm(num);
                  }
                }
              }}
              className="font-bold hover:text-studio-accent transition-colors cursor-pointer"
              title="Click to manually edit BPM"
            >
              {bpm} BPM
            </button>

            {/* Recheck BPM Button */}
            <button
              onClick={async () => {
                setIsDetectingBpm(true);
                try {
                  await useStudioStore.getState().recheckBpm();
                } finally {
                  setIsDetectingBpm(false);
                }
              }}
              disabled={isDetectingBpm || duration === 0}
              className="p-0.5 text-slate-400 hover:text-studio-accent transition-colors disabled:opacity-30 ml-1"
              title="Re-analyze track to calculate accurate BPM"
            >
              <RefreshCw className={`w-3 h-3 ${isDetectingBpm ? 'animate-spin text-studio-accent' : ''}`} />
            </button>

            {/* 0.5x / 2x Multipliers */}
            <button
              onClick={() => useStudioStore.getState().multiplyBpm(0.5)}
              className="px-1 text-[9px] text-slate-500 hover:text-slate-200 rounded hover:bg-studio-850"
              title="Half-time (BPM / 2)"
            >
              /2
            </button>
            <button
              onClick={() => useStudioStore.getState().multiplyBpm(2.0)}
              className="px-1 text-[9px] text-slate-500 hover:text-slate-200 rounded hover:bg-studio-850"
              title="Double-time (BPM * 2)"
            >
              x2
            </button>
          </div>
        </div>
      </div>

      {/* Center: Waveform Peaks Timeline Scrubber */}
      <div className="flex-1 max-w-2xl mx-6">
        <div
          onClick={handleTimelineClick}
          className="h-10 flex items-center cursor-pointer group relative bg-studio-950/80 rounded-lg px-2 border border-studio-800/80 hover:border-studio-700 transition-colors"
          title="Click to seek"
        >
          <canvas
            ref={waveformCanvasRef}
            width={600}
            height={32}
            className="w-full h-8 block"
          />
        </div>
      </div>

      {/* Right: Audio Source & Volume */}
      <div className="flex items-center space-x-3">
        {/* Upload Audio Button */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center space-x-1.5 bg-studio-800 hover:bg-studio-750 text-slate-200 hover:text-white px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-studio-700 transition-all"
          title="Upload audio track (MP3, WAV, FLAC, OGG)"
        >
          <Upload className="w-3.5 h-3.5 text-studio-accent" />
          <span>Upload Audio</span>
        </button>

        {/* Demo Electronic Loop */}
        <button
          onClick={handleLoadDemo}
          className="flex items-center space-x-1.5 bg-gradient-to-r from-purple-950 to-indigo-950 hover:from-purple-900 hover:to-indigo-900 text-purple-300 hover:text-purple-100 border border-purple-800/60 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all"
          title="Load high-energy electronic synthesizer demo loop"
        >
          <Radio className="w-3.5 h-3.5 text-purple-400" />
          <span>Demo Loop</span>
        </button>

        {/* Volume Control */}
        <div className="flex items-center space-x-2 pl-2 border-l border-studio-800">
          <button
            onClick={toggleMute}
            className="text-slate-400 hover:text-white transition-colors"
          >
            {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.02"
            value={isMuted ? 0 : volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-16"
            title="Volume"
          />
        </div>
      </div>
    </footer>
  );
};
