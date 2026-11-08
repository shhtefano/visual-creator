/**
 * Master Application State Store (Zustand)
 * Audio-Reactive Visual Studio
 */

import { create } from 'zustand';
import { audioEngine } from '../audio/AudioEngine';
import { exportManager } from '../export/ExportManager';
import { DEFAULT_PRESETS, generateRandomPreset } from '../presets/defaultPresets';
import {
  loadPersistedPresets,
  savePersistedPresets,
  saveLastActivePresetId,
  getLastActivePresetId,
  extractPaletteFromLayers,
  restoreFactoryPresets,
} from '../presets/presetStorage';
import { AudioAnalysisData, AudioTrackMetadata } from '../types/audio';
import { AspectRatio, ExportProgress, ResolutionQuality, VideoExportConfig } from '../types/export';
import { GlobalPostProcessingSettings, VisualPreset } from '../types/presets';
import { StudioState, VisualProject } from '../types/project';
import { GlobalReactivitySettings } from '../types/reactivity';
import { VisualLayerConfig, VisualModuleType } from '../types/visual';
import { visualEngine } from '../visual/VisualEngine';

const persistedPresets = loadPersistedPresets();
const lastActiveId = getLastActivePresetId();
const initialPreset =
  (lastActiveId ? persistedPresets.find((p) => p.id === lastActiveId) : null) ||
  persistedPresets[0] ||
  DEFAULT_PRESETS[0];

const initialProject: VisualProject = {
  id: `proj-${Date.now()}`,
  name: initialPreset.name,
  version: '1.0.0',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  aspectRatio: '16:9',
  previewQuality: '1080p',
  reactivity: { ...initialPreset.reactivity },
  postProcessing: { ...initialPreset.postProcessing },
  layers: JSON.parse(JSON.stringify(initialPreset.layers)),
  activePresetId: initialPreset.id,
};

export const useStudioStore = create<StudioState>((set, get) => ({
  // --- PROJECT STATE ---
  project: initialProject,
  isProjectDirty: false,

  // --- AUDIO STATE ---
  audioMetadata: null,
  audioBuffer: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 0.8,
  isMuted: false,
  isLooping: true,

  // --- REALTIME AUDIO ANALYSIS SNAPSHOT ---
  currentAudioData: null,

  // --- PRESETS ---
  availablePresets: [...DEFAULT_PRESETS],
  activePreset: initialPreset,

  // --- UI INTERACTION STATE ---
  selectedLayerId: initialProject.layers[0]?.id || null,
  activeInspectorTab: 'visual',
  showGridGuides: false,
  canvasScaleMode: 'fit',
  isExportModalOpen: false,
  exportProgress: null,

  // --- AUDIO ACTIONS ---
  loadAudioFile: async (file: File) => {
    try {
      const metadata = await audioEngine.loadAudioFile(file);
      set({
        audioMetadata: metadata,
        audioBuffer: audioEngine.getAudioBuffer(),
        duration: metadata.duration,
        currentTime: 0,
        isPlaying: false,
      });
      visualEngine.syncLayers(get().project.layers);
      // Run automatic multi-pass BPM scan in background
      audioEngine.detectBpmFromBuffer().catch(() => {});
    } catch (err) {
      console.error('Failed to load audio file:', err);
    }
  },

  play: () => {
    audioEngine.play();
    set({ isPlaying: true });
  },

  pause: () => {
    audioEngine.pause();
    set({ isPlaying: false, currentTime: audioEngine.getCurrentTime() });
  },

  stop: () => {
    audioEngine.stop();
    set({ isPlaying: false, currentTime: 0 });
  },

  seek: (time: number) => {
    audioEngine.seek(time);
    set({ currentTime: time });
  },

  setVolume: (volume: number) => {
    audioEngine.setVolume(volume);
    set({ volume, isMuted: volume === 0 });
  },

  toggleMute: () => {
    const isMuted = !get().isMuted;
    if (isMuted) {
      audioEngine.setVolume(0);
      set({ isMuted: true });
    } else {
      audioEngine.setVolume(get().volume || 0.8);
      set({ isMuted: false });
    }
  },

  toggleLoop: () => {
    set((state) => ({ isLooping: !state.isLooping }));
  },

  updateCurrentTime: (time: number) => {
    set({ currentTime: time });
  },

  setAudioAnalysisData: (data: AudioAnalysisData) => {
    set({ currentAudioData: data });
  },

  recheckBpm: async () => {
    const detected = await audioEngine.detectBpmFromBuffer();
    // Update snapshot with new detected BPM
    const current = get().currentAudioData;
    if (current) {
      set({
        currentAudioData: {
          ...current,
          beat: { ...current.beat, bpm: detected, bpmConfidence: 1.0 },
        },
      });
    }
    return detected;
  },

  setManualBpm: (bpm: number) => {
    audioEngine.setManualBpm(bpm);
    const current = get().currentAudioData;
    if (current) {
      set({
        currentAudioData: {
          ...current,
          beat: { ...current.beat, bpm, bpmConfidence: 1.0 },
        },
      });
    }
  },

  multiplyBpm: (factor: number) => {
    const newBpm = audioEngine.multiplyBpm(factor);
    const current = get().currentAudioData;
    if (current) {
      set({
        currentAudioData: {
          ...current,
          beat: { ...current.beat, bpm: newBpm, bpmConfidence: 1.0 },
        },
      });
    }
  },

  // --- LAYER ACTIONS ---
  addLayer: (type: VisualModuleType) => {
    const id = `layer-${type}-${Date.now()}`;
    let newLayer: VisualLayerConfig;

    if (type === 'waveform') {
      newLayer = {
        id,
        name: 'Waveform Layer',
        type: 'waveform',
        enabled: true,
        opacity: 1.0,
        blendMode: 'additive',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        mode: 'circular',
        thickness: 2.0,
        amplitude: 1.5,
        sampleCount: 256,
        glowIntensity: 2.0,
        primaryColor: '#00f0ff',
        secondaryColor: '#ff007f',
        colorGradientType: 'radial',
        radius: 1.8,
        depth3D: 0.5,
        waveformSmoothing: 0.2,
        displacementIntensity: 1.2,
        mirror: false,
      };
    } else if (type === 'spectrum') {
      newLayer = {
        id,
        name: 'Frequency Spectrum',
        type: 'spectrum',
        enabled: true,
        opacity: 0.9,
        blendMode: 'additive',
        transform: { position: [0, -1.5, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        mode: 'verticalBars',
        barCount: 40,
        barWidth: 0.8,
        maxHeight: 1.8,
        innerRadius: 1.2,
        minFrequencyHz: 20,
        maxFrequencyHz: 16000,
        logarithmicScale: true,
        primaryColor: '#00f0ff',
        secondaryColor: '#a855f7',
        barRoundness: 0.5,
        glowIntensity: 1.8,
        mirror: true,
        showPeaks: true,
        peakDecaySpeed: 1.5,
      };
    } else if (type === 'particles') {
      newLayer = {
        id,
        name: 'Particle System',
        type: 'particles',
        enabled: true,
        opacity: 0.85,
        blendMode: 'additive',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        count: 1000,
        size: 1.2,
        speed: 1.0,
        behavior: 'ambientVortex',
        dispersion: 4.5,
        color: '#00f0ff',
        secondaryColor: '#ff007f',
        connectLines: false,
        connectionDistance: 0.8,
        connectionOpacity: 0.3,
        beatExplosionForce: 3.5,
        trebleTwinkle: 1.8,
        lifetime: 4.0,
        particleShape: 'circle',
      };
    } else if (type === 'geometry') {
      newLayer = {
        id,
        name: '3D Geometry',
        type: 'geometry',
        enabled: true,
        opacity: 0.9,
        blendMode: 'normal',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        shape: 'icosahedron',
        shadingStyle: 'faceted',
        subdivisions: 2,
        wireframeThickness: 1.5,
        noiseDistortion: 0.6,
        distortionBand: 'bass',
        rotationSpeed: [0.2, 0.4, 0.1],
        pulseIntensity: 0.7,
        primaryColor: '#00f0ff',
        accentColor: '#ff007f',
        metallicRoughness: 0.3,
        glowIntensity: 1.5,
      };
    } else {
      newLayer = {
        id,
        name: 'Background Layer',
        type: 'background',
        enabled: true,
        opacity: 1.0,
        blendMode: 'normal',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        mode: 'animatedNebula',
        primaryColor: '#070814',
        secondaryColor: '#1a052b',
        accentColor: '#00f0ff',
        gradientAngle: 45,
        grainIntensity: 0.2,
        vignetteStrength: 0.5,
        animationSpeed: 1.0,
        audioReactiveZoom: 0.4,
        mediaBlur: 0,
      };
    }

    const updatedLayers = [...get().project.layers, newLayer];
    set({
      project: { ...get().project, layers: updatedLayers },
      selectedLayerId: id,
      activeInspectorTab: 'visual',
      isProjectDirty: true,
    });
    visualEngine.syncLayers(updatedLayers);

    return id;
  },

  removeLayer: (layerId: string) => {
    const updatedLayers = get().project.layers.filter((l) => l.id !== layerId);
    const nextSelected =
      get().selectedLayerId === layerId ? updatedLayers[0]?.id || null : get().selectedLayerId;

    set({
      project: { ...get().project, layers: updatedLayers },
      selectedLayerId: nextSelected,
      isProjectDirty: true,
    });
    visualEngine.syncLayers(updatedLayers);
  },

  duplicateLayer: (layerId: string) => {
    const layer = get().project.layers.find((l) => l.id === layerId);
    if (!layer) return '';

    const newId = `layer-${layer.type}-${Date.now()}`;
    const cloned: VisualLayerConfig = {
      ...JSON.parse(JSON.stringify(layer)),
      id: newId,
      name: `${layer.name} (Copy)`,
    };

    const updatedLayers = [...get().project.layers, cloned];
    set({
      project: { ...get().project, layers: updatedLayers },
      selectedLayerId: newId,
      activeInspectorTab: 'visual',
      isProjectDirty: true,
    });
    visualEngine.syncLayers(updatedLayers);

    return newId;
  },

  reorderLayers: (sourceIndex: number, destinationIndex: number) => {
    const layers = [...get().project.layers];
    const [removed] = layers.splice(sourceIndex, 1);
    layers.splice(destinationIndex, 0, removed);

    set({
      project: { ...get().project, layers },
      isProjectDirty: true,
    });
    visualEngine.syncLayers(layers);
  },

  updateLayerConfig: <T extends VisualLayerConfig>(layerId: string, partialConfig: Partial<T>) => {
    const updatedLayers = get().project.layers.map((l) => {
      if (l.id === layerId) {
        return { ...l, ...partialConfig };
      }
      return l;
    });

    set({
      project: { ...get().project, layers: updatedLayers },
      isProjectDirty: true,
    });
    visualEngine.syncLayers(updatedLayers);
  },

  toggleLayerEnabled: (layerId: string) => {
    const updatedLayers = get().project.layers.map((l) => {
      if (l.id === layerId) {
        return { ...l, enabled: !l.enabled };
      }
      return l;
    });

    set({
      project: { ...get().project, layers: updatedLayers },
      isProjectDirty: true,
    });
    visualEngine.syncLayers(updatedLayers);
  },

  setSelectedLayerId: (layerId: string | null) => {
    set((state) => ({
      selectedLayerId: layerId,
      // If was viewing global settings, automatically switch back to layer controls
      activeInspectorTab: state.activeInspectorTab === 'global' ? 'visual' : state.activeInspectorTab,
    }));
  },

  // --- GLOBAL SETTINGS ACTIONS ---
  setAspectRatio: (aspectRatio: AspectRatio) => {
    visualEngine.setAspectRatio(aspectRatio);
    set((state) => ({
      project: { ...state.project, aspectRatio },
      isProjectDirty: true,
    }));
  },

  setPreviewQuality: (quality: ResolutionQuality) => {
    set((state) => ({
      project: { ...state.project, previewQuality: quality },
      isProjectDirty: true,
    }));
  },

  updateGlobalReactivity: (partial: Partial<GlobalReactivitySettings>) => {
    set((state) => ({
      project: {
        ...state.project,
        reactivity: { ...state.project.reactivity, ...partial },
      },
      isProjectDirty: true,
    }));
  },

  updatePostProcessing: (partial: Partial<GlobalPostProcessingSettings>) => {
    visualEngine.updatePostProcessing(partial);
    set((state) => ({
      project: {
        ...state.project,
        postProcessing: { ...state.project.postProcessing, ...partial },
      },
      isProjectDirty: true,
    }));
  },

  setProjectName: (name: string) => {
    set((state) => ({
      project: { ...state.project, name },
      isProjectDirty: true,
    }));
  },

  // --- PRESET ACTIONS ---
  applyPreset: (presetId: string) => {
    const preset = get().availablePresets.find((p) => p.id === presetId);
    if (!preset) return;

    const clonedLayers = JSON.parse(JSON.stringify(preset.layers));
    visualEngine.syncLayers(clonedLayers);
    visualEngine.updatePostProcessing(preset.postProcessing);
    saveLastActivePresetId(preset.id);

    set((state) => ({
      activePreset: preset,
      project: {
        ...state.project,
        name: preset.name,
        reactivity: { ...preset.reactivity },
        postProcessing: { ...preset.postProcessing },
        layers: clonedLayers,
        activePresetId: preset.id,
      },
      selectedLayerId: clonedLayers[0]?.id || null,
      activeInspectorTab: 'visual',
      isProjectDirty: false,
    }));
  },

  updateActivePreset: () => {
    const state = get();
    const currentActive = state.activePreset;
    if (!currentActive) return null;

    const updatedLayers = JSON.parse(JSON.stringify(state.project.layers));
    const updatedPalette = extractPaletteFromLayers(updatedLayers, currentActive.name);

    const updatedPreset: VisualPreset = {
      ...currentActive,
      updatedAt: Date.now(),
      palette: updatedPalette,
      reactivity: { ...state.project.reactivity },
      postProcessing: { ...state.project.postProcessing },
      layers: updatedLayers,
    };

    const updatedList = state.availablePresets.map((p) =>
      p.id === currentActive.id ? updatedPreset : p
    );

    savePersistedPresets(updatedList);
    saveLastActivePresetId(updatedPreset.id);

    set({
      activePreset: updatedPreset,
      availablePresets: updatedList,
      isProjectDirty: false,
    });

    return updatedPreset;
  },

  saveCurrentAsPreset: (name: string, category = 'custom') => {
    const state = get();
    const clonedLayers = JSON.parse(JSON.stringify(state.project.layers));
    const palette = extractPaletteFromLayers(clonedLayers, `${name} Palette`);

    const newPreset: VisualPreset = {
      id: `custom-preset-${Date.now()}`,
      name,
      category: category as any,
      description: 'Custom user visual preset',
      isBuiltIn: false,
      updatedAt: Date.now(),
      palette,
      reactivity: { ...state.project.reactivity },
      postProcessing: { ...state.project.postProcessing },
      layers: clonedLayers,
    };

    const updatedList = [...state.availablePresets, newPreset];
    savePersistedPresets(updatedList);
    saveLastActivePresetId(newPreset.id);

    set((s) => ({
      availablePresets: updatedList,
      activePreset: newPreset,
      project: {
        ...s.project,
        name: newPreset.name,
        activePresetId: newPreset.id,
      },
      isProjectDirty: false,
    }));

    return newPreset;
  },

  deletePreset: (presetId: string) => {
    const state = get();
    const remaining = state.availablePresets.filter((p) => p.id !== presetId);

    // Ensure there is always at least one preset available
    const finalList = remaining.length > 0 ? remaining : JSON.parse(JSON.stringify(DEFAULT_PRESETS));
    savePersistedPresets(finalList);

    if (state.activePreset?.id === presetId) {
      const nextPreset = finalList[0];
      const clonedLayers = JSON.parse(JSON.stringify(nextPreset.layers));
      visualEngine.syncLayers(clonedLayers);
      visualEngine.updatePostProcessing(nextPreset.postProcessing);
      saveLastActivePresetId(nextPreset.id);

      set((s) => ({
        availablePresets: finalList,
        activePreset: nextPreset,
        project: {
          ...s.project,
          name: nextPreset.name,
          reactivity: { ...nextPreset.reactivity },
          postProcessing: { ...nextPreset.postProcessing },
          layers: clonedLayers,
          activePresetId: nextPreset.id,
        },
        selectedLayerId: clonedLayers[0]?.id || null,
        isProjectDirty: false,
      }));
    } else {
      set({ availablePresets: finalList });
    }
  },

  deleteUserPreset: (presetId: string) => {
    get().deletePreset(presetId);
  },

  resetAllPresetsToDefault: () => {
    const defaults = restoreFactoryPresets();
    const first = defaults[0];
    const clonedLayers = JSON.parse(JSON.stringify(first.layers));
    visualEngine.syncLayers(clonedLayers);
    visualEngine.updatePostProcessing(first.postProcessing);
    saveLastActivePresetId(first.id);

    set((s) => ({
      availablePresets: defaults,
      activePreset: first,
      project: {
        ...s.project,
        name: first.name,
        reactivity: { ...first.reactivity },
        postProcessing: { ...first.postProcessing },
        layers: clonedLayers,
        activePresetId: first.id,
      },
      selectedLayerId: clonedLayers[0]?.id || null,
      isProjectDirty: false,
    }));
  },

  randomizeParameters: () => {
    const randomPreset = generateRandomPreset();
    visualEngine.syncLayers(randomPreset.layers);
    visualEngine.updatePostProcessing(randomPreset.postProcessing);

    set((state) => ({
      activePreset: randomPreset,
      project: {
        ...state.project,
        reactivity: { ...randomPreset.reactivity },
        postProcessing: { ...randomPreset.postProcessing },
        layers: randomPreset.layers,
        activePresetId: randomPreset.id,
      },
      selectedLayerId: randomPreset.layers[0]?.id || null,
      activeInspectorTab: 'visual',
      isProjectDirty: true,
    }));
  },

  // --- UI ACTIONS ---
  setActiveInspectorTab: (tab) => set({ activeInspectorTab: tab }),
  setShowGridGuides: (show) => set({ showGridGuides: show }),
  setCanvasScaleMode: (mode) => set({ canvasScaleMode: mode }),
  setIsExportModalOpen: (open) => set({ isExportModalOpen: open }),
  setExportProgress: (progress) => set({ exportProgress: progress }),

  // --- EXPORT TRIGGER ---
  startExport: async (config: VideoExportConfig) => {
    try {
      const blob = await exportManager.startExport(config, (progress) => {
        set({ exportProgress: progress });
      });
      return blob;
    } catch (err) {
      console.error('Export failed:', err);
      throw err;
    }
  },

  cancelExport: () => {
    exportManager.cancelExport();
    set({ exportProgress: null });
  },
}));
