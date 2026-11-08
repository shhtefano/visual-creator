/**
 * Project Configuration & Application State Type Definitions
 * Audio-Reactive Visual Studio
 */

import { AudioAnalysisData, AudioTrackMetadata } from './audio';
import { VisualLayerConfig, VisualModuleType } from './visual';
import { GlobalReactivitySettings } from './reactivity';
import { GlobalPostProcessingSettings, VisualPreset } from './presets';
import { AspectRatio, ExportProgress, ResolutionQuality, VideoExportConfig } from './export';

/**
 * Persisted Project Document
 */
export interface VisualProject {
  /** Unique project UUID */
  id: string;
  /** User-defined project title */
  name: string;
  /** Version of the project schema */
  version: string;
  /** ISO timestamp created */
  createdAt: string;
  /** ISO timestamp last modified */
  updatedAt: string;
  /** Audio track metadata (if loaded) */
  audioMetadata?: AudioTrackMetadata;
  /** Target aspect ratio for canvas framing */
  aspectRatio: AspectRatio;
  /** Target preview resolution quality */
  previewQuality: ResolutionQuality;
  /** Global audio reactivity settings */
  reactivity: GlobalReactivitySettings;
  /** Global post-processing bloom and effects */
  postProcessing: GlobalPostProcessingSettings;
  /** Stack of visual layers ordered bottom to top */
  layers: VisualLayerConfig[];
  /** ID of active preset if derived from one */
  activePresetId?: string;
}

/**
 * Zustand Master Application Store Interface
 */
export interface StudioState {
  // --- PROJECT STATE ---
  project: VisualProject;
  isProjectDirty: boolean;

  // --- AUDIO PLAYBACK STATE ---
  audioMetadata: AudioTrackMetadata | null;
  audioBuffer: AudioBuffer | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  isLooping: boolean;

  // --- REALTIME AUDIO ANALYSIS SNAPSHOT ---
  /** Current frame audio features accessed by UI meters (meters, peak lights, waveforms) */
  currentAudioData: AudioAnalysisData | null;

  // --- PRESETS & THEMES ---
  availablePresets: VisualPreset[];
  activePreset: VisualPreset | null;

  // --- UI INTERACTION STATE ---
  selectedLayerId: string | null;
  activeInspectorTab: 'visual' | 'reactivity' | 'appearance' | 'animation' | 'global';
  showGridGuides: boolean;
  canvasScaleMode: 'fit' | 'fill' | 'actual';
  isExportModalOpen: boolean;
  exportProgress: ExportProgress | null;

  // --- ACTIONS: AUDIO ---
  loadAudioFile: (file: File) => Promise<void>;
  play: () => void;
  pause: () => void;
  stop: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  toggleLoop: () => void;
  updateCurrentTime: (time: number) => void;
  setAudioAnalysisData: (data: AudioAnalysisData) => void;
  recheckBpm: () => Promise<number>;
  setManualBpm: (bpm: number) => void;
  multiplyBpm: (factor: number) => void;

  // --- ACTIONS: LAYERS ---
  addLayer: (type: VisualModuleType) => string;
  removeLayer: (layerId: string) => void;
  duplicateLayer: (layerId: string) => string;
  reorderLayers: (sourceIndex: number, destinationIndex: number) => void;
  updateLayerConfig: <T extends VisualLayerConfig>(layerId: string, partialConfig: Partial<T>) => void;
  toggleLayerEnabled: (layerId: string) => void;
  setSelectedLayerId: (layerId: string | null) => void;

  // --- ACTIONS: GLOBAL SETTINGS ---
  setAspectRatio: (aspectRatio: AspectRatio) => void;
  setPreviewQuality: (quality: ResolutionQuality) => void;
  updateGlobalReactivity: (partial: Partial<GlobalReactivitySettings>) => void;
  updatePostProcessing: (partial: Partial<GlobalPostProcessingSettings>) => void;
  setProjectName: (name: string) => void;

  // --- ACTIONS: PRESETS ---
  applyPreset: (presetId: string) => void;
  saveCurrentAsPreset: (name: string, category?: string) => VisualPreset;
  updateActivePreset: () => VisualPreset | null;
  deletePreset: (presetId: string) => void;
  deleteUserPreset: (presetId: string) => void;
  resetAllPresetsToDefault: () => void;
  randomizeParameters: () => void;

  // --- ACTIONS: UI ---
  setActiveInspectorTab: (tab: 'visual' | 'reactivity' | 'appearance' | 'animation' | 'global') => void;
  setShowGridGuides: (show: boolean) => void;
  setCanvasScaleMode: (mode: 'fit' | 'fill' | 'actual') => void;
  setIsExportModalOpen: (open: boolean) => void;
  setExportProgress: (progress: ExportProgress | null) => void;

  // --- EXPORT TRIGGER ---
  startExport: (config: VideoExportConfig) => Promise<Blob>;
  cancelExport: () => void;
}

