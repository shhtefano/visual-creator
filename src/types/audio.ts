/**
 * Audio Analysis & Processing Type Definitions
 * Audio-Reactive Visual Studio
 */

/**
 * Frequency bands extracted from FFT spectrum analysis
 * All energy values normalized to [0, 1] range
 */
export interface FrequencyBands {
  /** Sub-bass frequencies: ~20Hz - 60Hz (deep rumble, kick sub) */
  subBass: number;
  /** Bass frequencies: ~60Hz - 250Hz (kick drum punch, bass guitar/synth) */
  bass: number;
  /** Low-mid frequencies: ~250Hz - 500Hz (warmth, snare body, bass harmonics) */
  lowMid: number;
  /** Mid frequencies: ~500Hz - 2000Hz (lead synths, vocals, instruments) */
  mid: number;
  /** High-mid frequencies: ~2000Hz - 4000Hz (presence, percussion attack) */
  highMid: number;
  /** Treble frequencies: ~4000Hz - 20000Hz (hi-hats, cymbals, air, sparkles) */
  treble: number;
}

/**
 * Real-time and offline beat/transient detection metrics
 */
export interface BeatInfo {
  /** True if a rhythmic or transient beat was triggered on the current frame */
  isBeat: boolean;
  /** Peak normalized intensity of the current beat impulse [0, 1] */
  beatIntensity: number;
  /** Continuous beat phase [0, 1] for synced cycling animations */
  beatPhase: number;
  /** Estimated tempo in Beats Per Minute (BPM) */
  bpm: number;
  /** Confidence rating of the estimated tempo [0, 1] */
  bpmConfidence: number;
  /** Milliseconds elapsed since the last detected beat */
  timeSinceLastBeat: number;
  /** Energy onset flux (spectral change rate) */
  spectralFlux: number;
}

/**
 * Complete normalized audio analysis frame exposed to all visual components
 */
export interface AudioAnalysisData {
  /** Timestamp in seconds of this audio sample */
  timestamp: number;
  /** Normalized discrete frequency bands [0, 1] */
  bands: FrequencyBands;
  /** Raw normalized frequency spectrum (FFT magnitudes, e.g. 64 to 1024 bins, values [0, 1]) */
  spectrum: Float32Array;
  /** Raw normalized time-domain waveform (-1.0 to 1.0 or normalized 0.0 to 1.0) */
  waveform: Float32Array;
  /** Overall Root Mean Square (RMS) audio energy [0, 1] */
  rms: number;
  /** Instantaneous audio peak amplitude [0, 1] */
  peak: number;
  /** Beat, transient, and tempo metrics */
  beat: BeatInfo;
}

/**
 * Audio analysis configuration and smoothing options
 */
export interface AudioAnalysisConfig {
  /** FFT size for frequency analysis (must be power of 2: 128, 256, 512, 1024, 2048, 4096) */
  fftSize: number;
  /** Smoothing time constant for Web Audio AnalyserNode [0, 1] */
  smoothingTimeConstant: number;
  /** Minimum decibels for FFT analysis (default: -90dB) */
  minDecibels: number;
  /** Maximum decibels for FFT analysis (default: -10dB) */
  maxDecibels: number;
  /** Attack smoothing factor: faster response for audio transients [0, 1] */
  attackSmoothing: number;
  /** Decay smoothing factor: gradual release to prevent visual flickering [0, 1] */
  decaySmoothing: number;
  /** Beat detection sensitivity threshold multiplier [1.0, 3.0] */
  beatSensitivity: number;
  /** Minimum time in seconds between consecutive detected beats */
  beatCooldownSeconds: number;
}

/**
 * Metadata for a loaded audio track
 */
export interface AudioTrackMetadata {
  /** Unique track identifier */
  id: string;
  /** Original file name */
  fileName: string;
  /** MIME type (e.g. 'audio/mpeg', 'audio/wav', 'audio/flac') */
  mimeType: string;
  /** Total duration in seconds */
  duration: number;
  /** Sample rate in Hz (e.g. 44100, 48000) */
  sampleRate: number;
  /** Number of audio channels (1 = mono, 2 = stereo) */
  numberOfChannels: number;
  /** File size in bytes */
  fileSizeBytes: number;
}

/**
 * Audio Engine Interface for real-time preview and deterministic offline analysis
 */
export interface IAudioEngine {
  /** Initialize the audio context and analysis graph */
  init(): Promise<void>;
  /** Load and decode an audio file */
  loadAudioFile(file: File | Blob): Promise<AudioTrackMetadata>;
  /** Start or resume playback at a given timestamp */
  play(startTime?: number): void;
  /** Pause playback */
  pause(): void;
  /** Stop playback and reset to start */
  stop(): void;
  /** Seek to a specific timestamp in seconds */
  seek(timeInSeconds: number): void;
  /** Set output volume [0, 1] */
  setVolume(volume: number): void;
  /** Get current playback position in seconds */
  getCurrentTime(): number;
  /** Get total track duration in seconds */
  getDuration(): number;
  /** Check if audio is currently playing */
  isPlaying(): boolean;
  /** Extract real-time normalized audio features for the current playback frame */
  getRealtimeAnalysis(): AudioAnalysisData;
  /** Extract deterministic offline audio features for a specific timestamp and window duration */
  getOfflineAnalysis(timestamp: number, windowDuration?: number): AudioAnalysisData;
  /** Get the decoded AudioBuffer for offline rendering and waveform overview generation */
  getAudioBuffer(): AudioBuffer | null;
  /** Clean up resources, disconnect nodes, and close AudioContext */
  dispose(): void;
}

