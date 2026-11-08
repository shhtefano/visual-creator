/**
 * Video Export & Deterministic Rendering Type Definitions
 * Audio-Reactive Visual Studio
 */

/**
 * Supported video aspect ratios
 */
export type AspectRatio = '16:9' | '9:16' | '1:1';

/**
 * Export resolution standard identifiers
 */
export type ResolutionQuality = '720p' | '1080p' | '1440p' | '4k';

/**
 * Video container and codec formats
 */
export type VideoFormat = 'mp4' | 'webm';

/**
 * Pixel dimensions for an export configuration
 */
export interface VideoDimensions {
  width: number;
  height: number;
}

/**
 * Resolution Presets mapped by Aspect Ratio and Quality
 */
export const RESOLUTION_MAP: Record<AspectRatio, Record<ResolutionQuality, VideoDimensions>> = {
  '16:9': {
    '720p': { width: 1280, height: 720 },
    '1080p': { width: 1920, height: 1080 },
    '1440p': { width: 2560, height: 1440 },
    '4k': { width: 3840, height: 2160 },
  },
  '9:16': {
    '720p': { width: 720, height: 1280 },
    '1080p': { width: 1080, height: 1920 },
    '1440p': { width: 1440, height: 2560 },
    '4k': { width: 2160, height: 3840 },
  },
  '1:1': {
    '720p': { width: 720, height: 720 },
    '1080p': { width: 1080, height: 1080 },
    '1440p': { width: 1440, height: 1440 },
    '4k': { width: 2160, height: 2160 },
  },
};

/**
 * Configuration for video rendering and encoding
 */
export interface VideoExportConfig {
  /** Target aspect ratio */
  aspectRatio: AspectRatio;
  /** Resolution preset */
  resolution: ResolutionQuality;
  /** Frame rate (24, 30, or 60 FPS) */
  fps: 24 | 30 | 60;
  /** Output video container format */
  format: VideoFormat;
  /** Target video bitrate in bits/second (e.g. 15_000_000 for 1080p60) */
  bitrate: number;
  /** Start export timestamp in seconds (default: 0) */
  startTime: number;
  /** End export timestamp in seconds (default: audio duration) */
  endTime: number;
  /** Include audio track in final muxed video */
  includeAudio: boolean;
  /** Output file name without extension */
  outputFileName: string;
}

/**
 * Real-time progress status during offline video rendering & encoding
 */
export type ExportStatus =
  | 'idle'
  | 'preparing'
  | 'renderingFrames'
  | 'encodingVideo'
  | 'muxingAudio'
  | 'completed'
  | 'error'
  | 'cancelled';

export interface ExportProgress {
  /** Current state in the export pipeline */
  status: ExportStatus;
  /** Normalized progress from 0.0 to 1.0 */
  progress: number;
  /** Current frame being rendered */
  currentFrame: number;
  /** Total frames to render */
  totalFrames: number;
  /** Elapsed encoding time in seconds */
  elapsedTimeSeconds: number;
  /** Estimated time remaining in seconds */
  estimatedTimeRemainingSeconds: number;
  /** Current rendering speed in frames per second (FPS) */
  renderingFps: number;
  /** Error message if export failed */
  errorMessage?: string;
  /** Finished downloadable Blob URL once export completes */
  outputBlobUrl?: string;
  /** Finished video file size in bytes */
  fileSizeBytes?: number;
}

/**
 * Render context passed for each individual deterministic offline frame
 */
export interface RenderFrameContext {
  /** Integer frame index (0, 1, 2, ... totalFrames - 1) */
  frameIndex: number;
  /** Exact audio time in seconds (frameIndex / fps) */
  timestamp: number;
  /** Target frame duration in seconds (1 / fps) */
  frameDuration: number;
  /** Total frames in the export job */
  totalFrames: number;
  /** Canvas width in pixels */
  width: number;
  /** Canvas height in pixels */
  height: number;
}

/**
 * Deterministic Render & Export Engine Interface
 */
export interface IExportEngine {
  /**
   * Start deterministic offline video export
   * Renders canvas frame-by-frame and muxes with audio
   */
  startExport(
    config: VideoExportConfig,
    onProgress: (progress: ExportProgress) => void
  ): Promise<Blob>;

  /** Cancel ongoing export */
  cancelExport(): void;

  /** Check if browser supports hardware-accelerated WebCodecs VideoEncoder */
  isWebCodecsSupported(): boolean;
}

