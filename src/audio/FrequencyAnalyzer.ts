/**
 * Frequency Analyzer & Feature Extractor
 * Audio-Reactive Visual Studio
 */

import { AudioAnalysisConfig, BeatInfo, FrequencyBands } from '../types/audio';

export class FrequencyAnalyzer {
  private config: AudioAnalysisConfig;
  private prevSpectrum: Float32Array | null = null;
  private smoothedBands: FrequencyBands = {
    subBass: 0,
    bass: 0,
    lowMid: 0,
    mid: 0,
    highMid: 0,
    treble: 0,
  };
  private smoothedRms = 0;
  private smoothedPeak = 0;

  // Beat & Transient detection state
  private fluxHistory: number[] = [];
  private readonly maxFluxHistory = 40;
  private lastBeatTime = -1;
  private beatIntervals: number[] = [];
  private estimatedBpm = 120;
  private bpmConfidence = 0.5;
  private beatPhase = 0;
  private isBpmLocked = false;

  public setBpm(bpm: number): void {
    if (bpm >= 40 && bpm <= 260) {
      this.estimatedBpm = Math.round(bpm);
      this.bpmConfidence = 1.0;
      this.isBpmLocked = true;
    }
  }

  public getBpm(): number {
    return this.estimatedBpm;
  }

  public unlockBpm(): void {
    this.isBpmLocked = false;
  }

  constructor(config?: Partial<AudioAnalysisConfig>) {
    this.config = {
      fftSize: 2048,
      smoothingTimeConstant: 0.8,
      minDecibels: -90,
      maxDecibels: -10,
      attackSmoothing: 0.2, // fast attack
      decaySmoothing: 0.85,  // gradual decay
      beatSensitivity: 1.5,
      beatCooldownSeconds: 0.18,
      ...config,
    };
  }

  public updateConfig(newConfig: Partial<AudioAnalysisConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Helper: maps a frequency in Hz to an FFT frequency bin index
   */
  private freqToBin(freqHz: number, sampleRate: number, fftSize: number): number {
    const binCount = fftSize / 2;
    const bin = Math.round((freqHz * fftSize) / sampleRate);
    return Math.max(0, Math.min(binCount - 1, bin));
  }

  /**
   * Average energy across a range of FFT bins, normalized to [0, 1]
   */
  private getBandEnergy(
    spectrum: Float32Array,
    sampleRate: number,
    startFreq: number,
    endFreq: number
  ): number {
    const fftSize = spectrum.length * 2;
    const startBin = this.freqToBin(startFreq, sampleRate, fftSize);
    const endBin = Math.max(startBin + 1, this.freqToBin(endFreq, sampleRate, fftSize));

    let sum = 0;
    for (let i = startBin; i < endBin; i++) {
      sum += spectrum[i];
    }
    const avg = sum / (endBin - startBin);
    return Math.max(0, Math.min(1, avg));
  }

  /**
   * Calculate Root-Mean-Square (RMS) amplitude of waveform data
   */
  public calculateRms(waveform: Float32Array): number {
    let sumSquares = 0;
    for (let i = 0; i < waveform.length; i++) {
      const val = waveform[i];
      sumSquares += val * val;
    }
    return Math.min(1, Math.sqrt(sumSquares / waveform.length) * 1.8);
  }

  /**
   * Calculate peak instantaneous amplitude of waveform data
   */
  public calculatePeak(waveform: Float32Array): number {
    let max = 0;
    for (let i = 0; i < waveform.length; i++) {
      const abs = Math.abs(waveform[i]);
      if (abs > max) max = abs;
    }
    return Math.min(1, max);
  }

  /**
   * Asymmetric attack/decay smoothing
   */
  private smoothValue(current: number, target: number): number {
    const rate = target >= current ? 1 - this.config.attackSmoothing : 1 - this.config.decaySmoothing;
    return current + (target - current) * rate;
  }

  /**
   * Detect transients and beats using spectral flux
   */
  private processBeat(
    spectrum: Float32Array,
    currentTime: number,
    bassEnergy: number
  ): BeatInfo {
    let spectralFlux = 0;

    if (this.prevSpectrum && this.prevSpectrum.length === spectrum.length) {
      // Focus flux calculation on lower/mid frequencies for rhythmic punch
      const focusLimit = Math.floor(spectrum.length * 0.45);
      for (let i = 0; i < focusLimit; i++) {
        const diff = spectrum[i] - this.prevSpectrum[i];
        if (diff > 0) {
          spectralFlux += diff;
        }
      }
      spectralFlux /= focusLimit;
    }

    // Keep history of spectral flux
    this.fluxHistory.push(spectralFlux);
    if (this.fluxHistory.length > this.maxFluxHistory) {
      this.fluxHistory.shift();
    }

    // Calculate mean and standard deviation of recent flux
    let mean = 0;
    for (const f of this.fluxHistory) mean += f;
    mean /= this.fluxHistory.length || 1;

    let variance = 0;
    for (const f of this.fluxHistory) {
      const d = f - mean;
      variance += d * d;
    }
    const stdDev = Math.sqrt(variance / (this.fluxHistory.length || 1));

    const threshold = mean + stdDev * this.config.beatSensitivity;
    const timeSinceLast = currentTime - this.lastBeatTime;
    const isCooldownElapsed = timeSinceLast >= this.config.beatCooldownSeconds;

    let isBeat = false;
    let beatIntensity = 0;

    // Trigger beat if flux spiked or bass energy had a sudden peak
    if (spectralFlux > threshold && spectralFlux > 0.05 && isCooldownElapsed && bassEnergy > 0.25) {
      isBeat = true;
      beatIntensity = Math.min(1, (spectralFlux - threshold) / (stdDev || 1) + bassEnergy * 0.5);

      if (this.lastBeatTime > 0) {
        const interval = timeSinceLast;
        if (interval >= 0.25 && interval <= 1.5) { // 40 BPM to 240 BPM range
          this.beatIntervals.push(interval);
          if (this.beatIntervals.length > 10) this.beatIntervals.shift();

          // Estimate BPM
          let avgInterval = 0;
          for (const iv of this.beatIntervals) avgInterval += iv;
          avgInterval /= this.beatIntervals.length;

          const calculatedBpm = Math.round(60 / avgInterval);
          if (!this.isBpmLocked && calculatedBpm >= 60 && calculatedBpm <= 200) {
            this.estimatedBpm = Math.round(this.estimatedBpm * 0.8 + calculatedBpm * 0.2);
            this.bpmConfidence = Math.min(1, this.beatIntervals.length / 10);
          }
        }
      }

      this.lastBeatTime = currentTime;
    }

    // Continuous beat phase (cycles 0 to 1 based on estimated BPM)
    const beatPeriod = 60 / this.estimatedBpm;
    if (this.lastBeatTime > 0) {
      this.beatPhase = ((currentTime - this.lastBeatTime) % beatPeriod) / beatPeriod;
    } else {
      this.beatPhase = (currentTime % beatPeriod) / beatPeriod;
    }

    return {
      isBeat,
      beatIntensity: isBeat ? beatIntensity : Math.max(0, this.smoothValue(0, beatIntensity)),
      beatPhase: this.beatPhase,
      bpm: this.estimatedBpm,
      bpmConfidence: this.bpmConfidence,
      timeSinceLastBeat: timeSinceLast,
      spectralFlux,
    };
  }

  /**
   * Main analysis execution: processes raw spectrum & waveform into structured AudioAnalysisData
   */
  public analyze(
    spectrum: Float32Array,
    waveform: Float32Array,
    sampleRate: number,
    timestamp: number
  ): {
    bands: FrequencyBands;
    rms: number;
    peak: number;
    beat: BeatInfo;
  } {
    // 1. Extract raw frequency bands
    const rawSubBass = this.getBandEnergy(spectrum, sampleRate, 20, 60);
    const rawBass = this.getBandEnergy(spectrum, sampleRate, 60, 250);
    const rawLowMid = this.getBandEnergy(spectrum, sampleRate, 250, 500);
    const rawMid = this.getBandEnergy(spectrum, sampleRate, 500, 2000);
    const rawHighMid = this.getBandEnergy(spectrum, sampleRate, 2000, 4000);
    const rawTreble = this.getBandEnergy(spectrum, sampleRate, 4000, 18000);

    // 2. Smooth frequency bands
    this.smoothedBands.subBass = this.smoothValue(this.smoothedBands.subBass, rawSubBass);
    this.smoothedBands.bass = this.smoothValue(this.smoothedBands.bass, rawBass);
    this.smoothedBands.lowMid = this.smoothValue(this.smoothedBands.lowMid, rawLowMid);
    this.smoothedBands.mid = this.smoothValue(this.smoothedBands.mid, rawMid);
    this.smoothedBands.highMid = this.smoothValue(this.smoothedBands.highMid, rawHighMid);
    this.smoothedBands.treble = this.smoothValue(this.smoothedBands.treble, rawTreble);

    // 3. RMS & Peak
    const rawRms = this.calculateRms(waveform);
    const rawPeak = this.calculatePeak(waveform);
    this.smoothedRms = this.smoothValue(this.smoothedRms, rawRms);
    this.smoothedPeak = this.smoothValue(this.smoothedPeak, rawPeak);

    // 4. Beat and Transient Detection
    const beat = this.processBeat(spectrum, timestamp, this.smoothedBands.bass);

    // 5. Store current spectrum for next frame flux calculation
    if (!this.prevSpectrum || this.prevSpectrum.length !== spectrum.length) {
      this.prevSpectrum = new Float32Array(spectrum.length);
    }
    this.prevSpectrum.set(spectrum);

    return {
      bands: { ...this.smoothedBands },
      rms: this.smoothedRms,
      peak: this.smoothedPeak,
      beat,
    };
  }

  public reset(): void {
    this.prevSpectrum = null;
    this.smoothedBands = { subBass: 0, bass: 0, lowMid: 0, mid: 0, highMid: 0, treble: 0 };
    this.smoothedRms = 0;
    this.smoothedPeak = 0;
    this.fluxHistory = [];
    this.lastBeatTime = -1;
    this.beatIntervals = [];
  }
}

