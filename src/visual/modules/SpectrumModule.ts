/**
 * Frequency Spectrum Visualizer Module
 * Supports Vertical Bars, Circular Radial Spikes, and Radial Rings
 * Audio-Reactive Visual Studio
 */

import * as THREE from 'three';
import { AudioAnalysisData } from '../../types/audio';
import { IVisualModule, RenderContext, SpectrumConfig } from '../../types/visual';

export class SpectrumModule implements IVisualModule<SpectrumConfig> {
  public config: SpectrumConfig;
  private group: THREE.Group;
  private barsGroup: THREE.Group;
  private peakMarkersGroup: THREE.Group;
  private barMeshes: THREE.Mesh[] = [];
  private peakMeshes: THREE.Mesh[] = [];
  private peakValues: number[] = [];
  private barMaterial: THREE.MeshBasicMaterial | null = null;
  private peakMaterial: THREE.MeshBasicMaterial | null = null;
  private currentAspect = 16 / 9;

  constructor(config: SpectrumConfig) {
    this.config = config;
    this.group = new THREE.Group();
    this.barsGroup = new THREE.Group();
    this.peakMarkersGroup = new THREE.Group();
    this.group.add(this.barsGroup);
    this.group.add(this.peakMarkersGroup);
  }

  public init(context: RenderContext): void {
    this.currentAspect = context.width / (context.height || 1);
    this.rebuildMeshes();
    this.applyTransform();
    context.scene.add(this.group);
  }

  public resize(width: number, height: number, pixelRatio: number): void {
    const newAspect = width / (height || 1);
    if (Math.abs(newAspect - this.currentAspect) > 0.05) {
      this.currentAspect = newAspect;
      this.rebuildMeshes();
    }
  }

  private rebuildMeshes(): void {
    // Clean up existing meshes
    for (const mesh of this.barMeshes) {
      this.barsGroup.remove(mesh);
      mesh.geometry.dispose();
    }
    for (const mesh of this.peakMeshes) {
      this.peakMarkersGroup.remove(mesh);
      mesh.geometry.dispose();
    }
    this.barMeshes = [];
    this.peakMeshes = [];
    this.peakValues = [];

    const barCount = this.config.barCount;
    this.peakValues = new Array(barCount).fill(0);

    const primaryCol = new THREE.Color(this.config.primaryColor);
    const secondaryCol = new THREE.Color(this.config.secondaryColor);
    const aspect = this.currentAspect || (16 / 9);

    if (this.config.mode === 'verticalBars') {
      let totalWidth = 8.0;
      if (aspect < 0.8) {
        totalWidth = 4.2;
      } else if (aspect < 1.3) {
        totalWidth = 6.4;
      }
      const barSpacing = totalWidth / barCount;
      const barWidth = barSpacing * this.config.barWidth;

      for (let i = 0; i < barCount; i++) {
        const t = i / (barCount - 1 || 1);
        const col = primaryCol.clone().lerp(secondaryCol, t);

        const geom = new THREE.BoxGeometry(barWidth, 1.0, 0.1);
        // Anchor geometry base to y=0
        geom.translate(0, 0.5, 0);

        const mat = new THREE.MeshBasicMaterial({
          color: col,
          transparent: true,
          opacity: this.config.opacity,
          blending: this.config.blendMode === 'additive' ? THREE.AdditiveBlending : THREE.NormalBlending,
        });

        const mesh = new THREE.Mesh(geom, mat);
        const x = -totalWidth / 2 + i * barSpacing + barSpacing / 2;
        mesh.position.set(x, 0, 0);
        this.barsGroup.add(mesh);
        this.barMeshes.push(mesh);

        // Peak marker
        const peakGeom = new THREE.BoxGeometry(barWidth, 0.06, 0.1);
        const peakMat = new THREE.MeshBasicMaterial({
          color: secondaryCol,
          transparent: true,
          opacity: this.config.opacity * 0.9,
        });
        const peakMesh = new THREE.Mesh(peakGeom, peakMat);
        peakMesh.position.set(x, 0, 0);
        peakMesh.visible = this.config.showPeaks;
        this.peakMarkersGroup.add(peakMesh);
        this.peakMeshes.push(peakMesh);
      }
    } else if (this.config.mode === 'circularRadial') {
      const radius = aspect < 0.8 ? Math.min(this.config.innerRadius, 1.2) : this.config.innerRadius;
      const barWidth = 0.08;

      for (let i = 0; i < barCount; i++) {
        const angle = (i / barCount) * Math.PI * 2;
        const t = Math.abs(Math.sin(angle));
        const col = primaryCol.clone().lerp(secondaryCol, t);

        const geom = new THREE.BoxGeometry(barWidth, 1.0, 0.08);
        geom.translate(0, 0.5, 0);

        const mat = new THREE.MeshBasicMaterial({
          color: col,
          transparent: true,
          opacity: this.config.opacity,
          blending: this.config.blendMode === 'additive' ? THREE.AdditiveBlending : THREE.NormalBlending,
        });

        const mesh = new THREE.Mesh(geom, mat);
        mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
        mesh.rotation.z = angle - Math.PI / 2;

        this.barsGroup.add(mesh);
        this.barMeshes.push(mesh);
      }
    } else if (this.config.mode === 'radialRings') {
      const ringCount = Math.min(16, barCount);
      for (let i = 0; i < ringCount; i++) {
        const t = i / (ringCount - 1 || 1);
        const col = primaryCol.clone().lerp(secondaryCol, t);
        const geom = new THREE.RingGeometry(0.8 + i * 0.25, 0.85 + i * 0.25, 64);
        const mat = new THREE.MeshBasicMaterial({
          color: col,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: this.config.opacity,
          blending: this.config.blendMode === 'additive' ? THREE.AdditiveBlending : THREE.NormalBlending,
        });
        const mesh = new THREE.Mesh(geom, mat);
        this.barsGroup.add(mesh);
        this.barMeshes.push(mesh);
      }
    }
  }

  private applyTransform(): void {
    const [px, py, pz] = this.config.transform.position;
    const [rx, ry, rz] = this.config.transform.rotation;
    const [sx, sy, sz] = this.config.transform.scale;

    this.group.position.set(px, py, pz);
    this.group.rotation.set(rx, ry, rz);
    this.group.scale.set(sx, sy, sz);
    this.group.visible = this.config.enabled;
  }

  public update(audioData: AudioAnalysisData, deltaTime: number, elapsedTime: number): void {
    if (!this.config.enabled) return;

    const spectrum = audioData.spectrum;
    const barCount = this.barMeshes.length;
    if (barCount === 0) return;

    const maxHeight = this.config.maxHeight;
    const specLen = spectrum.length;

    // Gentle slow rotation for circular modes
    if (this.config.mode === 'circularRadial') {
      this.barsGroup.rotation.z += deltaTime * 0.2 * (1.0 + audioData.bands.bass * 0.5);
    }

    for (let i = 0; i < barCount; i++) {
      let val = 0;
      if (this.config.logarithmicScale) {
        // Logarithmic distribution: human auditory perception
        const logIndex = Math.floor(Math.pow(i / barCount, 2.0) * (specLen - 1));
        val = spectrum[logIndex] || 0;
      } else {
        const linIndex = Math.floor((i / barCount) * (specLen * 0.8));
        val = spectrum[linIndex] || 0;
      }

      // Boost higher frequencies to balance energy visually
      const freqBoost = 1.0 + (i / barCount) * 1.8;
      val = Math.min(1.0, val * freqBoost);

      const targetHeight = Math.max(0.04, val * maxHeight);

      const mesh = this.barMeshes[i];
      if (this.config.mode === 'verticalBars') {
        mesh.scale.set(1, targetHeight, 1);

        // Update floating peaks
        if (this.config.showPeaks && this.peakMeshes[i]) {
          const peakMesh = this.peakMeshes[i];
          if (targetHeight >= this.peakValues[i]) {
            this.peakValues[i] = targetHeight;
          } else {
            this.peakValues[i] = Math.max(0.04, this.peakValues[i] - deltaTime * this.config.peakDecaySpeed * 2.5);
          }
          peakMesh.position.y = this.peakValues[i] + 0.04;
          peakMesh.visible = true;
        }
      } else if (this.config.mode === 'circularRadial') {
        mesh.scale.set(1, targetHeight, 1);
      } else if (this.config.mode === 'radialRings') {
        const ringScale = 1.0 + val * 0.4;
        mesh.scale.set(ringScale, ringScale, 1);
      }
    }
  }

  public updateConfig(newConfig: Partial<SpectrumConfig>): void {
    const modeChanged = newConfig.mode && newConfig.mode !== this.config.mode;
    const countChanged = newConfig.barCount && newConfig.barCount !== this.config.barCount;

    this.config = { ...this.config, ...newConfig };
    this.applyTransform();

    if (modeChanged || countChanged) {
      this.rebuildMeshes();
    } else {
      const primaryCol = new THREE.Color(this.config.primaryColor);
      const secondaryCol = new THREE.Color(this.config.secondaryColor);

      for (let i = 0; i < this.barMeshes.length; i++) {
        const mesh = this.barMeshes[i];
        const t = i / (this.barMeshes.length - 1 || 1);
        const col = primaryCol.clone().lerp(secondaryCol, t);
        const mat = mesh.material as THREE.MeshBasicMaterial;
        mat.color = col;
        mat.opacity = this.config.opacity;
        mat.blending = this.config.blendMode === 'additive' ? THREE.AdditiveBlending : THREE.NormalBlending;
        mat.needsUpdate = true;
      }
    }
  }

  public dispose(): void {
    for (const mesh of this.barMeshes) {
      this.barsGroup.remove(mesh);
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
    }
    for (const mesh of this.peakMeshes) {
      this.peakMarkersGroup.remove(mesh);
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
    }
    this.barMeshes = [];
    this.peakMeshes = [];
    if (this.group.parent) {
      this.group.parent.remove(this.group);
    }
  }
}

