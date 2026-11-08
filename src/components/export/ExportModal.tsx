/**
 * Video Export Modal
 * Configures resolution, aspect ratio, frame rate, and displays deterministic rendering progress
 * Audio-Reactive Visual Studio
 */

import React, { useState } from 'react';
import {
  X,
  Download,
  Film,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock,
  Sparkles,
  RefreshCw,
} from 'lucide-react';
import { useStudioStore } from '../../store/useStudioStore';
import { AspectRatio, ResolutionQuality, VideoExportConfig } from '../../types/export';

export const ExportModal: React.FC = () => {
  const {
    isExportModalOpen,
    setIsExportModalOpen,
    project,
    duration,
    exportProgress,
    startExport,
    cancelExport,
  } = useStudioStore();

  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(project.aspectRatio);
  const [resolution, setResolution] = useState<ResolutionQuality>('1080p');
  const [fps, setFps] = useState<24 | 30 | 60>(30);
  const [fileName, setFileName] = useState<string>(project.name.replace(/\s+/g, '_'));
  const [durationMode, setDurationMode] = useState<'full' | '30s' | '60s'>('full');

  if (!isExportModalOpen) return null;

  const isRendering =
    exportProgress &&
    (exportProgress.status === 'preparing' ||
      exportProgress.status === 'renderingFrames' ||
      exportProgress.status === 'encodingVideo' ||
      exportProgress.status === 'muxingAudio');

  const isComplete = exportProgress?.status === 'completed';
  const isError = exportProgress?.status === 'error';

  const effectiveDuration = duration > 0 ? duration : 10;
  const targetDuration =
    durationMode === '30s'
      ? Math.min(30, effectiveDuration)
      : durationMode === '60s'
      ? Math.min(60, effectiveDuration)
      : effectiveDuration;

  const handleStartExport = async () => {
    const config: VideoExportConfig = {
      aspectRatio,
      resolution,
      fps,
      format: 'mp4',
      bitrate: resolution === '4k' ? 24_000_000 : resolution === '1440p' ? 16_000_000 : 10_000_000,
      startTime: 0,
      endTime: targetDuration,
      includeAudio: duration > 0,
      outputFileName: fileName || 'visual_output',
    };

    try {
      await startExport(config);
    } catch (err) {
      console.error('Export failed:', err);
    }
  };

  const handleDownload = () => {
    if (exportProgress?.outputBlobUrl) {
      const a = document.createElement('a');
      a.href = exportProgress.outputBlobUrl;
      a.download = `${fileName || 'visualization'}.mp4`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const handleResetError = () => {
    useStudioStore.setState({ exportProgress: null });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 select-none animate-fade-in">
      <div className="bg-studio-900 border border-studio-750 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-studio-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-studio-accent">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide">Export Video</h3>
              <p className="text-[11px] text-slate-400">
                Deterministic, frame-accurate offline MP4 rendering
              </p>
            </div>
          </div>

          {!isRendering && (
            <button
              onClick={() => {
                handleResetError();
                setIsExportModalOpen(false);
              }}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-studio-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-xs text-slate-300">
          {/* 1. Error View */}
          {isError && exportProgress && (
            <div className="space-y-4 py-4 text-center">
              <div className="inline-flex p-3 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 mb-1">
                <AlertCircle className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-sm font-bold text-white">Export Failed</h4>
                <p className="text-xs text-red-400 mt-1 max-w-sm mx-auto">
                  {exportProgress.errorMessage || 'An error occurred during video encoding.'}
                </p>
                <p className="text-[11px] text-slate-500 mt-2">
                  Try selecting 720p or 1080p with 30 FPS for maximum hardware compatibility.
                </p>
              </div>

              <div className="flex items-center justify-center space-x-3 pt-2">
                <button
                  onClick={handleResetError}
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-studio-800 hover:bg-studio-700 text-slate-200 font-semibold transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Adjust Settings</span>
                </button>
              </div>
            </div>
          )}

          {/* 2. Active Rendering Progress View */}
          {isRendering && exportProgress && (
            <div className="space-y-4 py-4 text-center">
              <div className="inline-flex p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-studio-accent animate-pulse mb-1">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>

              <div>
                <div className="text-sm font-bold text-white capitalize">
                  {exportProgress.status === 'preparing' && 'Preparing Offscreen Pipeline...'}
                  {exportProgress.status === 'renderingFrames' && 'Rendering Deterministic Frames...'}
                  {exportProgress.status === 'muxingAudio' && 'Finalizing MP4 & Preparing Download...'}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {exportProgress.status === 'muxingAudio' ? (
                    <span className="text-cyan-400 animate-pulse font-medium">
                      Assembling video & synchronized audio tracks... download will begin in a moment.
                    </span>
                  ) : (
                    <span>
                      Frame {exportProgress.currentFrame} of {exportProgress.totalFrames} (
                      {(exportProgress.progress * 100).toFixed(1)}%)
                    </span>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-studio-950 h-2.5 rounded-full overflow-hidden border border-studio-800">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full transition-all duration-150"
                  style={{ width: `${Math.min(100, Math.max(2, exportProgress.progress * 100))}%` }}
                />
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-400 font-mono bg-studio-950 p-3 rounded-xl border border-studio-800">
                <div className="flex items-center justify-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ETA: {exportProgress.estimatedTimeRemainingSeconds > 0 ? `${exportProgress.estimatedTimeRemainingSeconds.toFixed(0)}s` : 'Calculating...'}</span>
                </div>
                <div>Speed: {exportProgress.renderingFps.toFixed(0)} FPS</div>
              </div>

              <button
                onClick={cancelExport}
                className="px-4 py-1.5 rounded-lg bg-red-950/60 border border-red-800/80 text-red-300 hover:text-white text-xs font-semibold"
              >
                Cancel Export
              </button>
            </div>
          )}

          {/* 3. Finished View */}
          {isComplete && exportProgress && (
            <div className="space-y-4 py-4 text-center">
              <div className="inline-flex p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-1">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-sm font-bold text-white">Export Completed Successfully!</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Your deterministic audio-reactive MP4 video is ready for download.
                </p>
                {exportProgress.fileSizeBytes && (
                  <p className="text-[11px] font-mono text-cyan-400 mt-1">
                    Size: {(exportProgress.fileSizeBytes / (1024 * 1024)).toFixed(2)} MB
                  </p>
                )}
              </div>

              <div className="flex items-center justify-center space-x-3 pt-2">
                <button
                  onClick={handleDownload}
                  className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-emerald-500/20"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Download MP4</span>
                </button>
                <button
                  onClick={() => {
                    handleResetError();
                    setIsExportModalOpen(false);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-studio-800 hover:bg-studio-700 text-slate-300 font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* 4. Initial Settings View */}
          {!isRendering && !isComplete && !isError && (
            <>
              {duration === 0 && (
                <div className="bg-amber-950/40 border border-amber-800/60 rounded-xl p-3 text-amber-300 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-400" />
                  <span>
                    No audio file is loaded. Export will generate a 10-second sample animation video.
                  </span>
                </div>
              )}

              {/* File Name */}
              <div>
                <label className="text-slate-400 text-[11px] font-bold uppercase tracking-wider block mb-1">
                  File Name
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    className="flex-1 bg-studio-950 border border-studio-800 rounded-lg px-3 py-2 text-white outline-none focus:border-cyan-500"
                    placeholder="my_visualization"
                  />
                  <span className="text-slate-500 font-mono">.mp4</span>
                </div>
              </div>

              {/* Aspect Ratio */}
              <div>
                <label className="text-slate-400 text-[11px] font-bold uppercase tracking-wider block mb-1.5">
                  Aspect Ratio
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setAspectRatio('16:9')}
                    className={`py-2 rounded-lg font-semibold border transition-all text-center ${
                      aspectRatio === '16:9'
                        ? 'bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm'
                        : 'bg-studio-950 border-studio-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    16:9 (YouTube)
                  </button>
                  <button
                    onClick={() => setAspectRatio('9:16')}
                    className={`py-2 rounded-lg font-semibold border transition-all text-center ${
                      aspectRatio === '9:16'
                        ? 'bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm'
                        : 'bg-studio-950 border-studio-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    9:16 (Shorts/Reels)
                  </button>
                  <button
                    onClick={() => setAspectRatio('1:1')}
                    className={`py-2 rounded-lg font-semibold border transition-all text-center ${
                      aspectRatio === '1:1'
                        ? 'bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm'
                        : 'bg-studio-950 border-studio-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    1:1 (Square)
                  </button>
                </div>
              </div>

              {/* Clip Duration Selector */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                    Clip Duration
                  </label>
                  <span className="text-[11px] font-mono text-cyan-400">
                    {Math.floor(targetDuration / 60)}:
                    {Math.floor(targetDuration % 60)
                      .toString()
                      .padStart(2, '0')}{' '}
                    ({Math.floor(targetDuration * fps)} frames)
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setDurationMode('full')}
                    className={`py-2 px-2 rounded-lg font-semibold border transition-all text-center text-xs truncate ${
                      durationMode === 'full'
                        ? 'bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm'
                        : 'bg-studio-950 border-studio-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Full Track ({Math.floor(effectiveDuration / 60)}:
                    {Math.floor(effectiveDuration % 60)
                      .toString()
                      .padStart(2, '0')})
                  </button>
                  <button
                    onClick={() => setDurationMode('30s')}
                    className={`py-2 px-2 rounded-lg font-semibold border transition-all text-center text-xs truncate ${
                      durationMode === '30s'
                        ? 'bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm'
                        : 'bg-studio-950 border-studio-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    30s (Reel / TikTok)
                  </button>
                  <button
                    onClick={() => setDurationMode('60s')}
                    className={`py-2 px-2 rounded-lg font-semibold border transition-all text-center text-xs truncate ${
                      durationMode === '60s'
                        ? 'bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm'
                        : 'bg-studio-950 border-studio-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    60s (YouTube Short)
                  </button>
                </div>
              </div>

              {/* Resolution & FPS */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-[11px] font-bold uppercase tracking-wider block mb-1">
                    Resolution
                  </label>
                  <select
                    value={resolution}
                    onChange={(e) => setResolution(e.target.value as any)}
                    className="w-full bg-studio-950 border border-studio-800 rounded-lg px-3 py-2 text-white outline-none cursor-pointer"
                  >
                    <option value="720p">720p HD (Fast)</option>
                    <option value="1080p">1080p Full HD (Recommended)</option>
                    <option value="1440p">1440p 2K QHD</option>
                    <option value="4k">4K Ultra HD</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 text-[11px] font-bold uppercase tracking-wider block mb-1">
                    Frame Rate
                  </label>
                  <select
                    value={fps}
                    onChange={(e) => setFps(parseInt(e.target.value) as any)}
                    className="w-full bg-studio-950 border border-studio-800 rounded-lg px-3 py-2 text-white outline-none cursor-pointer"
                  >
                    <option value={24}>24 FPS (Cinematic)</option>
                    <option value={30}>30 FPS (Standard - Recommended)</option>
                    <option value={60}>60 FPS (Ultra Smooth)</option>
                  </select>
                </div>
              </div>

              {/* Notice */}
              <div className="bg-studio-950 p-3 rounded-xl border border-studio-800 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center space-x-1.5 text-cyan-400 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Deterministic In-Browser Rendering</span>
                </div>
                <p>
                  Frames are computed deterministically from exact audio sample slices. Zero dropped frames, perfect audio/video synchronization.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end space-x-3 pt-3 border-t border-studio-800">
                <button
                  onClick={() => setIsExportModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-studio-800 hover:bg-studio-750 text-slate-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleStartExport}
                  className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-5 py-2 rounded-lg font-bold shadow-lg shadow-cyan-500/20 active:scale-95"
                >
                  <Film className="w-4 h-4 stroke-[2.5]" />
                  <span>Start Export</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
