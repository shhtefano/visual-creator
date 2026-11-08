/**
 * Audio Reactivity & Mapping System Type Definitions
 * Audio-Reactive Visual Studio
 */

/**
 * Audio source channels available for visual property modulation
 */
export type AudioSourceBand =
  | 'subBass'
  | 'bass'
  | 'lowMid'
  | 'mid'
  | 'highMid'
  | 'treble'
  | 'rms'
  | 'peak'
  | 'beatIntensity'
  | 'beatPhase'
  | 'spectralFlux';

/**
 * Transfer / Response curve types to shape how audio dynamics transform visual parameters
 */
export type CurveType =
  | 'linear'       // f(x) = x
  | 'exponential'  // f(x) = x^2 or x^3 (punches on peaks, silences quieter parts)
  | 'logarithmic'  // f(x) = log(1 + x) (boosts subtle sounds, compresses peaks)
  | 'sCurve'        // Smoothstep / sigmoid (emphasizes middle transitions, smooth caps)
  | 'step'         // Threshold trigger (0 below gate, 1 above gate)
  | 'pulse';       // Transient impulse generator (spikes on beat, decays exponentially)

/**
 * Rule configuration to map an audio source band to a target visual parameter
 */
export interface AudioReactiveMapping {
  /** Target property identifier (e.g. 'scale', 'displacement', 'glowIntensity', 'particleSpeed') */
  targetProperty: string;
  /** Audio frequency band or metric driving this property */
  source: AudioSourceBand;
  /** Multiplier sensitivity factor [0.0, 5.0] (default: 1.0) */
  sensitivity: number;
  /** Minimum base value when audio energy is 0 */
  minOutput: number;
  /** Maximum peak value when audio energy is 1 */
  maxOutput: number;
  /** Noise gate / energy floor below which reactivity is 0 [0, 1] */
  threshold: number;
  /** Attack smoothing [0, 1] (0 = instant snap, 1 = ultra slow) */
  attack: number;
  /** Decay smoothing [0, 1] (0 = instant release, 1 = slow fade) */
  decay: number;
  /** Mathematical curve to shape the normalized response */
  curve: CurveType;
  /** Optional inversion: high audio energy decreases parameter instead of increasing */
  invert?: boolean;
}

/**
 * Global audio reactivity profile applied across the entire visualization
 */
export interface GlobalReactivitySettings {
  /** Master sensitivity multiplier applied to all audio reactive mappings [0.0, 3.0] */
  masterSensitivity: number;
  /** Sub-bass & Bass sensitivity boost/cut [-1.0, 2.0] */
  bassSensitivity: number;
  /** Mid-frequency sensitivity boost/cut [-1.0, 2.0] */
  midSensitivity: number;
  /** Treble & High-frequency sensitivity boost/cut [-1.0, 2.0] */
  trebleSensitivity: number;
  /** Global temporal smoothing factor [0.0, 0.95] */
  globalSmoothing: number;
  /** Whether to enable automatic gain control (AGC) to prevent clipping or over-saturation */
  autoGainControl: boolean;
}

