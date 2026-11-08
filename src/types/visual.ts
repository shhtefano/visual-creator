/**
 * Visual Engine & Module Type Definitions
 * Audio-Reactive Visual Studio
 */

import { AudioAnalysisData } from './audio';
import { AudioReactiveMapping } from './reactivity';

/**
 * Visual Module Type identifiers
 */
export type VisualModuleType =
  | 'waveform'
  | 'spectrum'
  | 'particles'
  | 'geometry'
  | 'background';

/**
 * Layer Blend Modes supported by the visual compositor
 */
export type LayerBlendMode =
  | 'normal'
  | 'additive'
  | 'screen'
  | 'multiply'
  | 'overlay';

/**
 * Common 2D/3D transform parameters for visual modules
 */
export interface Transform3D {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}

/**
 * Base configuration shared by all visual layers
 */
export interface BaseVisualLayerConfig {
  /** Unique layer identifier */
  id: string;
  /** Human-readable layer name */
  name: string;
  /** Module type */
  type: VisualModuleType;
  /** Whether the layer is visible in preview and export */
  enabled: boolean;
  /** Layer opacity [0, 1] */
  opacity: number;
  /** Blend mode used when compositing over underlying layers */
  blendMode: LayerBlendMode;
  /** Spatial transform */
  transform: Transform3D;
  /** Audio-reactive modulation mappings configured for this layer */
  reactivityMappings: AudioReactiveMapping[];
}

/* ========================================================================= */
/* MODULE A: WAVEFORM VISUALIZER                                              */
/* ========================================================================= */

export type WaveformMode = 'horizontal' | 'circular' | 'ribbon3d';

export interface WaveformConfig extends BaseVisualLayerConfig {
  type: 'waveform';
  /** Waveform geometry layout */
  mode: WaveformMode;
  /** Base line or tube thickness */
  thickness: number;
  /** Amplitude displacement scale */
  amplitude: number;
  /** Number of waveform sample points */
  sampleCount: number;
  /** Primary glow / neon bloom intensity [0, 5] */
  glowIntensity: number;
  /** Primary line color (hex string) */
  primaryColor: string;
  /** Secondary gradient color (hex string) */
  secondaryColor: string;
  /** Gradient style */
  colorGradientType: 'linear' | 'radial' | 'frequency';
  /** Circular mode radius */
  radius: number;
  /** 3D ribbon depth / extrusion */
  depth3D: number;
  /** Smoothing iterations applied to raw audio waveform points */
  waveformSmoothing: number;
  /** Audio reactivity: displacement strength along normals driven by audio */
  displacementIntensity: number;
  /** Mirroring across axis for symmetrical aesthetic */
  mirror: boolean;
}

/* ========================================================================= */
/* MODULE B: FREQUENCY SPECTRUM                                              */
/* ========================================================================= */

export type SpectrumMode = 'verticalBars' | 'circularRadial' | 'radialRings';

export interface SpectrumConfig extends BaseVisualLayerConfig {
  type: 'spectrum';
  /** Spectrum display mode */
  mode: SpectrumMode;
  /** Number of frequency bins / bars displayed (e.g. 16 to 128) */
  barCount: number;
  /** Bar width ratio relative to spacing [0.1, 1.0] */
  barWidth: number;
  /** Maximum bar height / radius expansion */
  maxHeight: number;
  /** Inner radius for circular / radial modes */
  innerRadius: number;
  /** Minimum frequency in Hz to display (default: 20Hz) */
  minFrequencyHz: number;
  /** Maximum frequency in Hz to display (default: 16000Hz) */
  maxFrequencyHz: number;
  /** Logarithmic frequency distribution (human hearing standard) vs Linear */
  logarithmicScale: boolean;
  /** Primary bar color */
  primaryColor: string;
  /** Secondary bar / peak tip color */
  secondaryColor: string;
  /** Bar corner rounding radius */
  barRoundness: number;
  /** Glow intensity */
  glowIntensity: number;
  /** Mirror vertically or horizontally */
  mirror: boolean;
  /** Show floating peak decay indicators above bars */
  showPeaks: boolean;
  /** Peak decay rate */
  peakDecaySpeed: number;
}

/* ========================================================================= */
/* MODULE C: PARTICLE SYSTEM                                                 */
/* ========================================================================= */

export type ParticleBehavior = 'ambientVortex' | 'radialExplosion' | 'flowField' | 'constellation';

export interface ParticleConfig extends BaseVisualLayerConfig {
  type: 'particles';
  /** Total particle count (instanced rendering, up to 50,000) */
  count: number;
  /** Particle size in pixels/world units */
  size: number;
  /** Base particle movement speed */
  speed: number;
  /** Particle motion pattern */
  behavior: ParticleBehavior;
  /** Spatial dispersion radius / spread */
  dispersion: number;
  /** Particle color or color palette */
  color: string;
  /** Secondary highlight color */
  secondaryColor: string;
  /** Enable dynamic connection lines between nearby particles */
  connectLines: boolean;
  /** Max distance threshold to draw connection lines */
  connectionDistance: number;
  /** Max connection line opacity */
  connectionOpacity: number;
  /** Bass reactivity: impulse explosion force on beat detection [0, 10] */
  beatExplosionForce: number;
  /** Treble reactivity: high frequency twinkle and shimmer factor [0, 5] */
  trebleTwinkle: number;
  /** Particle lifetime in seconds */
  lifetime: number;
  /** Particle shape (circle, square, spark, ring) */
  particleShape: 'circle' | 'square' | 'spark' | 'ring';
}

/* ========================================================================= */
/* MODULE D: ABSTRACT GEOMETRY                                               */
/* ========================================================================= */

export type GeometryShape =
  | 'icosahedron'
  | 'torusKnot'
  | 'dodecahedron'
  | 'sphere'
  | 'cyberCube'
  | 'morphingGeosphere';

export type ShadingStyle =
  | 'wireframe'
  | 'faceted'
  | 'metallicPBR'
  | 'holographic'
  | 'iridescentShader';

export interface GeometryConfig extends BaseVisualLayerConfig {
  type: 'geometry';
  /** Base geometric shape */
  shape: GeometryShape;
  /** Shading and material style */
  shadingStyle: ShadingStyle;
  /** Polygon / subdivision detail */
  subdivisions: number;
  /** Wireframe line width */
  wireframeThickness: number;
  /** Audio-reactive vertex displacement via Perlin/Simplex noise */
  noiseDistortion: number;
  /** Audio frequency driving the noise distortion */
  distortionBand: 'bass' | 'mid' | 'treble' | 'rms';
  /** Continuous rotation speed vector [x, y, z] */
  rotationSpeed: [number, number, number];
  /** Audio-reactive scale pulse intensity */
  pulseIntensity: number;
  /** Primary material color */
  primaryColor: string;
  /** Accent / rim light color */
  accentColor: string;
  /** Roughness / shininess [0, 1] */
  metallicRoughness: number;
  /** Glow intensity */
  glowIntensity: number;
}

/* ========================================================================= */
/* MODULE E: BACKGROUND EFFECTS                                              */
/* ========================================================================= */

export type BackgroundMode =
  | 'solid'
  | 'gradient'
  | 'animatedNebula'
  | 'synthwaveGrid'
  | 'audioReactiveNoise'
  | 'customImage'
  | 'customVideo';

export interface BackgroundConfig extends BaseVisualLayerConfig {
  type: 'background';
  /** Background rendering mode */
  mode: BackgroundMode;
  /** Primary background color (hex) */
  primaryColor: string;
  /** Secondary color for gradients or shader effects (hex) */
  secondaryColor: string;
  /** Tertiary accent color for cosmic/grid shaders (hex) */
  accentColor: string;
  /** Gradient direction in degrees (0 - 360) */
  gradientAngle: number;
  /** Film grain & analog noise opacity [0, 1] */
  grainIntensity: number;
  /** Vignette edge darkening [0, 1] */
  vignetteStrength: number;
  /** Speed of procedural shader animation */
  animationSpeed: number;
  /** Audio reactivity: background zoom / pulse with kick bass */
  audioReactiveZoom: number;
  /** URL or base64 of uploaded custom background image/video */
  mediaUrl?: string;
  /** Custom media blur amount [0, 20px] */
  mediaBlur: number;
}

/**
 * Union type of all concrete visual layer configurations
 */
export type VisualLayerConfig =
  | WaveformConfig
  | SpectrumConfig
  | ParticleConfig
  | GeometryConfig
  | BackgroundConfig;

/**
 * Standard lifecycle interface that every visual module in the engine implements
 */
export interface IVisualModule<TConfig extends VisualLayerConfig = VisualLayerConfig> {
  /** The module layer configuration */
  config: TConfig;
  /** Initialize Three.js objects, geometries, materials, and shaders */
  init(rendererContext: RenderContext): Promise<void> | void;
  /** Update visual state per frame using normalized audio analysis data */
  update(audioData: AudioAnalysisData, deltaTime: number, elapsedTime: number): void;
  /** Handle viewport or export resolution resizing */
  resize(width: number, height: number, pixelRatio: number): void;
  /** Update runtime layer configuration parameters without re-creating WebGL resources */
  updateConfig(newConfig: Partial<TConfig>): void;
  /** Clean up Three.js geometries, textures, materials, and remove from scene */
  dispose(): void;
}

/**
 * Context provided to visual modules during initialization and rendering
 */
export interface RenderContext {
  scene: any; // THREE.Scene
  camera: any; // THREE.PerspectiveCamera | THREE.OrthographicCamera
  renderer: any; // THREE.WebGLRenderer
  width: number;
  height: number;
  aspectRatio: number;
}

