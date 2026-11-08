/**
 * Waveform Visualizer Module
 * Supports Horizontal, Circular, and 3D Ribbon modes with glow and audio reactivity
 * Audio-Reactive Visual Studio
 */

import * as THREE from 'three';
import { AudioAnalysisData } from '../../types/audio';
import { IVisualModule, RenderContext, WaveformConfig } from '../../types/visual';

export class WaveformModule implements IVisualModule<WaveformConfig> {
  public config: WaveformConfig;
  private group: THREE.Group;
  private lineMesh: THREE.Line | null = null;
  private geometry: THREE.BufferGeometry | null = null;
  private material: THREE.LineBasicMaterial | null = null;
  private positions: Float32Array = new Float32Array(0);
  private colors: Float32Array = new Float32Array(0);

  constructor(config: WaveformConfig) {
    this.config = config;
    this.group = new THREE.Group();
  }

  public init(context: RenderContext): void {
    this.rebuildWaveform();
    this.applyTransform();
    context.scene.add(this.group);
  }

  private rebuildWaveform(): void {
    if (this.lineMesh) {
      this.group.remove(this.lineMesh);
      this.lineMesh = null;
    }
    if (this.geometry) {
      this.geometry.dispose();
      this.geometry = null;
    }
    if (this.material) {
      this.material.dispose();
      this.material = null;
    }

    const count = Math.max(32, Math.min(2048, this.config.sampleCount || 256));
    this.positions = new Float32Array(count * 3);
    this.colors = new Float32Array(count * 3);

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));

    this.material = new THREE.LineBasicMaterial({
      vertexColors: true,
      linewidth: this.config.thickness || 2.0,
      transparent: true,
      opacity: this.config.opacity ?? 1.0,
      blending: this.config.blendMode === 'additive' ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    });

    this.lineMesh = new THREE.Line(this.geometry, this.material);
    this.group.add(this.lineMesh);
  }

  private applyTransform(): void {
    const [px, py, pz] = this.config.transform?.position || [0, 0, 0];
    const [rx, ry, rz] = this.config.transform?.rotation || [0, 0, 0];
    const [sx, sy, sz] = this.config.transform?.scale || [1, 1, 1];

    this.group.position.set(px, py, pz);
    this.group.rotation.set(rx, ry, rz);
    this.group.scale.set(sx, sy, sz);
    this.group.visible = this.config.enabled ?? true;
  }

  public update(audioData: AudioAnalysisData, deltaTime: number, elapsedTime: number): void {
    if (!this.geometry || !this.config.enabled) return;

    const waveform = audioData.waveform || new Float32Array(1024);
    const count = this.config.sampleCount || 256;
    const wfLen = waveform.length;
    if (wfLen === 0 || count === 0) return;

    const step = wfLen / count;
    const bass = audioData.bands?.bass || 0;
    const amp = (this.config.amplitude || 1.5) * (1.0 + bass * (this.config.displacementIntensity || 1.0) * 0.8);

    const primaryCol = new THREE.Color(this.config.primaryColor || '#00f0ff');
    const secondaryCol = new THREE.Color(this.config.secondaryColor || '#ff007f');

    const pos = this.positions;
    const col = this.colors;
    if (pos.length < count * 3 || col.length < count * 3) return;

    if (this.config.mode === 'horizontal') {
      const halfWidth = 5.0;
      for (let i = 0; i < count; i++) {
        const sampleIdx = Math.min(wfLen - 1, Math.floor(i * step));
        const rawVal = waveform[sampleIdx] || 0;
        const normX = (i / (count - 1)) * 2 - 1;
        const x = normX * halfWidth;

        const envelope = Math.sin((i / (count - 1)) * Math.PI);
        const y = rawVal * amp * envelope;
        const z = 0;

        pos[i * 3] = x;
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = z;

        const t = i / (count - 1);
        const mixedCol = primaryCol.clone().lerp(secondaryCol, t);
        col[i * 3] = mixedCol.r;
        col[i * 3 + 1] = mixedCol.g;
        col[i * 3 + 2] = mixedCol.b;
      }
    } else if (this.config.mode === 'circular') {
      const baseRadius = this.config.radius || 1.8;
      for (let i = 0; i < count; i++) {
        const angle = (i / (count - 1)) * Math.PI * 2;
        const sampleIdx = Math.min(wfLen - 1, Math.floor(i * step));
        const rawVal = waveform[sampleIdx] || 0;

        const r = Math.max(0.1, baseRadius + rawVal * amp * (0.8 + bass * 0.5));
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        const z = Math.sin(angle * 4 + elapsedTime * 2) * (bass * 0.2);

        pos[i * 3] = x;
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = z;

        const t = Math.abs(Math.sin(angle));
        const mixedCol = primaryCol.clone().lerp(secondaryCol, t);
        col[i * 3] = mixedCol.r;
        col[i * 3 + 1] = mixedCol.g;
        col[i * 3 + 2] = mixedCol.b;
      }
    } else if (this.config.mode === 'ribbon3d') {
      const length = 8.0;
      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        const sampleIdx = Math.min(wfLen - 1, Math.floor(i * step));
        const rawVal = waveform[sampleIdx] || 0;

        const x = (t - 0.5) * length;
        const y = Math.sin(t * Math.PI * 4 + elapsedTime * 3) * 0.4 + rawVal * amp;
        const z = Math.cos(t * Math.PI * 2 + elapsedTime * 2) * (this.config.depth3D || 0.8);

        pos[i * 3] = x;
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = z;

        const mixedCol = primaryCol.clone().lerp(secondaryCol, t);
        col[i * 3] = mixedCol.r;
        col[i * 3 + 1] = mixedCol.g;
        col[i * 3 + 2] = mixedCol.b;
      }
    }

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.color.needsUpdate = true;
  }

  public resize(width: number, height: number, pixelRatio: number): void {}

  public updateConfig(newConfig: Partial<WaveformConfig>): void {
    const sampleCountChanged = newConfig.sampleCount !== undefined && newConfig.sampleCount !== this.config.sampleCount;
    const modeChanged = newConfig.mode !== undefined && newConfig.mode !== this.config.mode;

    this.config = { ...this.config, ...newConfig };
    this.applyTransform();

    if (sampleCountChanged || modeChanged) {
      this.rebuildWaveform();
    } else if (this.material) {
      this.material.opacity = this.config.opacity ?? 1.0;
      this.material.blending =
        this.config.blendMode === 'additive' ? THREE.AdditiveBlending : THREE.NormalBlending;
      this.material.needsUpdate = true;
    }
  }

  public dispose(): void {
    if (this.lineMesh) {
      this.group.remove(this.lineMesh);
      this.lineMesh = null;
    }
    if (this.geometry) {
      this.geometry.dispose();
      this.geometry = null;
    }
    if (this.material) {
      this.material.dispose();
      this.material = null;
    }
    if (this.group.parent) {
      this.group.parent.remove(this.group);
    }
  }
}
