/**
 * Preset & Palette System Type Definitions
 * Audio-Reactive Visual Studio
 */

import { VisualLayerConfig } from './visual';
import { GlobalReactivitySettings } from './reactivity';

/**
 * Curated preset categories / style archetypes
 */
export type PresetCategory =
  | 'minimal'
  | 'neon'
  | 'cyberpunk'
  | 'darkTechno'
  | 'liquid'
  | 'organic'
  | 'futuristic'
  | 'abstract'
  | 'custom';

/**
 * Harmonious color palette definition
 */
export interface ColorPalette {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  glow: string;
}

/**
 * Global post-processing & camera settings associated with a visual preset
 */
export interface GlobalPostProcessingSettings {
  /** Unreal bloom pass intensity [0, 5] */
  bloomIntensity: number;
  /** Bloom radius / diffusion */
  bloomRadius: number;
  /** Bloom luminance threshold [0, 1] */
  bloomThreshold: number;
  /** Chromatic aberration lens fringe [0, 0.05] */
  chromaticAberration: number;
  /** Film grain noise intensity [0, 1] */
  grainIntensity: number;
  /** Vignette darkening around canvas borders [0, 1] */
  vignetteIntensity: number;
  /** Tone mapping exposure [0.1, 3.0] */
  toneMappingExposure: number;
}

/**
 * Complete Preset definition capturing a full visual scene
 */
export interface VisualPreset {
  /** Unique preset identifier */
  id: string;
  /** Human-readable title */
  name: string;
  /** Preset category archetype */
  category: PresetCategory;
  /** Short aesthetic description */
  description: string;
  /** Preview thumbnail image (base64 data URL or path) */
  thumbnailUrl?: string;
  /** Whether this is a read-only built-in default preset */
  isBuiltIn: boolean;
  /** Timestamp created or modified */
  updatedAt: number;
  /** Color palette */
  palette: ColorPalette;
  /** Global audio reactivity configuration */
  reactivity: GlobalReactivitySettings;
  /** Global post-processing shader stack */
  postProcessing: GlobalPostProcessingSettings;
  /** Ordered list of visual layers that compose this preset */
  layers: VisualLayerConfig[];
}

/**
 * Constraints applied during randomization to guarantee cohesive, beautiful output
 */
export interface RandomizationRules {
  /** Maximum number of layers to generate simultaneously (e.g. 2 to 4) */
  maxLayers: number;
  /** Always ensure exactly one background layer is present */
  requireBackground: boolean;
  /** Color harmony model to enforce when generating palettes */
  colorHarmony: 'analogous' | 'complementary' | 'triadic' | 'cyberpunkNeon' | 'monochromeDark';
  /** Range of bloom intensity */
  bloomRange: [number, number];
  /** Minimum and maximum particle counts */
  particleCountRange: [number, number];
  /** Allowed geometry shapes during randomization */
  allowedShapes?: string[];
}

