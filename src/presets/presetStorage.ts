/**
 * Preset Storage Manager
 * Handles permanent persistence of built-in (standard) and custom presets in LocalStorage
 * Audio-Reactive Visual Studio
 */

import { DEFAULT_PRESETS } from './defaultPresets';
import { ColorPalette, VisualPreset } from '../types/presets';
import { VisualLayerConfig } from '../types/visual';

export const PRESET_STORAGE_KEY = 'audio_reactive_studio_presets_v2';
export const LAST_ACTIVE_PRESET_KEY = 'audio_reactive_studio_last_preset_id';

/**
 * Load all presets with permanent storage backing
 * Merges standard presets with user overrides and custom presets
 */
export function loadPersistedPresets(): VisualPreset[] {
  if (typeof window === 'undefined') {
    return JSON.parse(JSON.stringify(DEFAULT_PRESETS));
  }

  try {
    const raw = localStorage.getItem(PRESET_STORAGE_KEY);
    if (!raw) {
      // First run: persist default presets to storage so they are immediately permanent
      savePersistedPresets(DEFAULT_PRESETS);
      return JSON.parse(JSON.stringify(DEFAULT_PRESETS));
    }

    const storedPresets: VisualPreset[] = JSON.parse(raw);
    if (!Array.isArray(storedPresets) || storedPresets.length === 0) {
      savePersistedPresets(DEFAULT_PRESETS);
      return JSON.parse(JSON.stringify(DEFAULT_PRESETS));
    }

    // Preserve all custom presets while keeping built-in standard templates up to date
    const customUserPresets = storedPresets.filter((p) => !p.isBuiltIn);
    const customIds = new Set(customUserPresets.map((p) => p.id));

    const merged: VisualPreset[] = [];
    // 1. Always load latest built-in templates
    for (const def of DEFAULT_PRESETS) {
      merged.push(JSON.parse(JSON.stringify(def)));
    }
    // 2. Append all user custom presets
    for (const custom of customUserPresets) {
      merged.push(custom);
    }

    return merged;
  } catch (err) {
    console.warn('Failed to load presets from localStorage, using default presets:', err);
    return JSON.parse(JSON.stringify(DEFAULT_PRESETS));
  }
}

/**
 * Permanently save the full list of presets to LocalStorage
 */
export function savePersistedPresets(presets: VisualPreset[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PRESET_STORAGE_KEY, JSON.stringify(presets));
  } catch (err) {
    console.error('Failed to save presets to localStorage:', err);
  }
}

/**
 * Permanently save the last active preset id
 */
export function saveLastActivePresetId(presetId: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LAST_ACTIVE_PRESET_KEY, presetId);
  } catch (err) {
    // ignore
  }
}

/**
 * Get last active preset id
 */
export function getLastActivePresetId(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(LAST_ACTIVE_PRESET_KEY);
  } catch {
    return null;
  }
}

/**
 * Factory reset: restores all presets back to original factory defaults
 */
export function restoreFactoryPresets(): VisualPreset[] {
  const defaults = JSON.parse(JSON.stringify(DEFAULT_PRESETS));
  savePersistedPresets(defaults);
  return defaults;
}

/**
 * Helper to extract or construct a harmonious ColorPalette from current layers
 */
export function extractPaletteFromLayers(
  layers: VisualLayerConfig[],
  paletteName: string
): ColorPalette {
  let primary = '#00f0ff';
  let secondary = '#ff007f';
  let accent = '#fcee0a';
  let background = '#080810';
  let glow = '#00f0ff';

  for (const layer of layers) {
    const l = layer as any;
    if (l.primaryColor) primary = l.primaryColor;
    if (l.secondaryColor) secondary = l.secondaryColor;
    if (l.accentColor) accent = l.accentColor;
    if (l.glowColor) glow = l.glowColor;
    if (layer.type === 'background' && l.primaryColor) {
      background = l.primaryColor;
    }
  }

  return {
    id: `pal-${Date.now()}`,
    name: paletteName,
    primary,
    secondary,
    accent,
    background,
    glow,
  };
}

