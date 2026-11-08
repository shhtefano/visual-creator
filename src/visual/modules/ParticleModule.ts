/**
 * Audio-Reactive Particle System Module
 * Fixed and optimized for dynamic particle count updates, zero crashes, and robust memory management
 * Audio-Reactive Visual Studio
 */

import * as THREE from 'three';
import { AudioAnalysisData } from '../../types/audio';
import { IVisualModule, ParticleConfig, RenderContext } from '../../types/visual';

interface ParticleData {
  ox: number; // original pos
  oy: number;
  oz: number;
  vx: number; // velocity
  vy: number;
  vz: number;
}

export class ParticleModule implements IVisualModule<ParticleConfig> {
  public config: ParticleConfig;
  private group: THREE.Group;
  private points: THREE.Points | null = null;
  private geometry: THREE.BufferGeometry | null = null;
  private material: THREE.PointsMaterial | null = null;
  private particleTexture: THREE.CanvasTexture | null = null;
  private positions: Float32Array = new Float32Array(0);
  private colors: Float32Array = new Float32Array(0);
  private particleState: ParticleData[] = [];

  // Constellation lines
  private linesMesh: THREE.LineSegments | null = null;
  private linesGeometry: THREE.BufferGeometry | null = null;
  private linesMaterial: THREE.LineBasicMaterial | null = null;
  private linePositions: Float32Array = new Float32Array(2000 * 6);

  constructor(config: ParticleConfig) {
    this.config = config;
    this.group = new THREE.Group();
  }

  public init(context: RenderContext): void {
    this.createPointTexture();
    this.rebuildParticles();
    this.applyTransform();
    context.scene.add(this.group);
  }

  private createPointTexture(): void {
    if (this.particleTexture) return;
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.35, 'rgba(255, 255, 255, 0.85)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    this.particleTexture = new THREE.CanvasTexture(canvas);
  }

  /**
   * Rebuild particle buffers and geometries without removing this.group from the scene
   */
  private rebuildParticles(): void {
    // 1. Clean up existing points and lines
    if (this.points) {
      this.group.remove(this.points);
      this.points = null;
    }
    if (this.geometry) {
      this.geometry.dispose();
      this.geometry = null;
    }
    if (this.material) {
      this.material.dispose();
      this.material = null;
    }
    if (this.linesMesh) {
      this.group.remove(this.linesMesh);
      this.linesMesh = null;
    }
    if (this.linesGeometry) {
      this.linesGeometry.dispose();
      this.linesGeometry = null;
    }
    if (this.linesMaterial) {
      this.linesMaterial.dispose();
      this.linesMaterial = null;
    }

    // 2. Allocate new typed arrays
    const count = Math.max(10, Math.min(10000, this.config.count || 1000));
    this.positions = new Float32Array(count * 3);
    this.colors = new Float32Array(count * 3);
    this.particleState = [];

    const primaryCol = new THREE.Color(this.config.color || '#00f0ff');
    const secondaryCol = new THREE.Color(this.config.secondaryColor || '#ff007f');
    const disp = Math.max(0.5, this.config.dispersion || 4.5);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = Math.pow(Math.random(), 0.5) * disp;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      this.positions[i * 3] = x;
      this.positions[i * 3 + 1] = y;
      this.positions[i * 3 + 2] = z;

      const t = Math.random();
      const col = primaryCol.clone().lerp(secondaryCol, t);
      this.colors[i * 3] = col.r;
      this.colors[i * 3 + 1] = col.g;
      this.colors[i * 3 + 2] = col.b;

      this.particleState.push({
        ox: x,
        oy: y,
        oz: z,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        vz: (Math.random() - 0.5) * 0.1,
      });
    }

    // 3. Create Points Geometry & Material
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));

    this.material = new THREE.PointsMaterial({
      size: (this.config.size || 1.2) * 0.08,
      vertexColors: true,
      map: this.particleTexture || undefined,
      transparent: true,
      opacity: this.config.opacity ?? 0.85,
      blending: this.config.blendMode === 'additive' ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.group.add(this.points);

    // 4. Create Constellation Lines if enabled
    if (this.config.connectLines) {
      this.linePositions = new Float32Array(2000 * 6);
      this.linesGeometry = new THREE.BufferGeometry();
      this.linesGeometry.setAttribute('position', new THREE.BufferAttribute(this.linePositions, 3));
      this.linesMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color(this.config.color || '#00f0ff'),
        transparent: true,
        opacity: this.config.connectionOpacity ?? 0.3,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      this.linesMesh = new THREE.LineSegments(this.linesGeometry, this.linesMaterial);
      this.group.add(this.linesMesh);
    }
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

    const count = Math.min(
      this.config.count || 1000,
      this.particleState.length,
      Math.floor(this.positions.length / 3)
    );
    if (count === 0) return;

    const pos = this.positions;
    const bass = audioData.bands?.bass || 0;
    const treble = audioData.bands?.treble || 0;
    const isBeat = audioData.beat?.isBeat || false;
    const beatIntensity = audioData.beat?.beatIntensity || 0;

    const speed = (this.config.speed || 1.0) * (0.8 + (audioData.rms || 0) * 1.5);
    const explosionForce = isBeat ? beatIntensity * (this.config.beatExplosionForce || 3.5) * 4.0 : 0;

    // Treble modulates particle size / twinkle
    if (this.material) {
      this.material.size = (this.config.size || 1.2) * 0.08 * (1.0 + treble * (this.config.trebleTwinkle || 1.5) * 0.6);
    }

    for (let i = 0; i < count; i++) {
      const p = this.particleState[i];
      if (!p) continue;

      let x = pos[i * 3];
      let y = pos[i * 3 + 1];
      let z = pos[i * 3 + 2];

      if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
        x = p.ox;
        y = p.oy;
        z = p.oz;
      }

      if (this.config.behavior === 'ambientVortex') {
        const angle = speed * deltaTime * 1.5;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const nx = x * cos - y * sin;
        const ny = x * sin + y * cos;
        x = nx;
        y = ny;
        z += Math.sin(elapsedTime * 2 + i) * deltaTime * speed * 0.5;
      } else if (this.config.behavior === 'radialExplosion') {
        const dist = Math.sqrt(x * x + y * y + z * z) || 1;
        const dirX = x / dist;
        const dirY = y / dist;
        const dirZ = z / dist;

        if (explosionForce > 0) {
          p.vx += dirX * explosionForce * 0.35;
          p.vy += dirY * explosionForce * 0.35;
          p.vz += dirZ * explosionForce * 0.35;
        }

        x += p.vx * deltaTime;
        y += p.vy * deltaTime;
        z += p.vz * deltaTime;

        // Friction and spring back to origin
        p.vx = p.vx * 0.92 + (p.ox - x) * 0.05;
        p.vy = p.vy * 0.92 + (p.oy - y) * 0.05;
        p.vz = p.vz * 0.92 + (p.oz - z) * 0.05;
      } else {
        // Flow field
        x += Math.sin(y * 0.5 + elapsedTime * speed) * deltaTime * 0.8;
        y += Math.cos(x * 0.5 + elapsedTime * speed) * deltaTime * 0.8;
        z += Math.sin(elapsedTime * speed + i) * deltaTime * 0.4;

        const bound = (this.config.dispersion || 4.5) * 1.5;
        if (x > bound) x = -bound;
        if (x < -bound) x = bound;
        if (y > bound) y = -bound;
        if (y < -bound) y = bound;
      }

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }

    this.geometry.attributes.position.needsUpdate = true;

    // Constellation lines update
    if (this.config.connectLines && this.linesGeometry && this.linesMesh) {
      let lineVertexIndex = 0;
      const maxLines = 1000;
      const connDist = this.config.connectionDistance || 0.8;
      const maxDistSq = connDist * connDist;
      const sampleStep = Math.max(1, Math.floor(count / 150));

      for (let i = 0; i < count; i += sampleStep) {
        const x1 = pos[i * 3];
        const y1 = pos[i * 3 + 1];
        const z1 = pos[i * 3 + 2];

        for (let j = i + sampleStep; j < count; j += sampleStep) {
          const x2 = pos[j * 3];
          const y2 = pos[j * 3 + 1];
          const z2 = pos[j * 3 + 2];

          const dx = x2 - x1;
          const dy = y2 - y1;
          const dz = z2 - z1;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxDistSq && lineVertexIndex < maxLines * 6) {
            this.linePositions[lineVertexIndex++] = x1;
            this.linePositions[lineVertexIndex++] = y1;
            this.linePositions[lineVertexIndex++] = z1;
            this.linePositions[lineVertexIndex++] = x2;
            this.linePositions[lineVertexIndex++] = y2;
            this.linePositions[lineVertexIndex++] = z2;
          }
        }
      }

      this.linesGeometry.setDrawRange(0, lineVertexIndex / 3);
      this.linesGeometry.attributes.position.needsUpdate = true;
    }
  }

  public resize(width: number, height: number, pixelRatio: number): void {}

  public updateConfig(newConfig: Partial<ParticleConfig>): void {
    const countChanged = newConfig.count !== undefined && newConfig.count !== this.config.count;
    const linesChanged = newConfig.connectLines !== undefined && newConfig.connectLines !== this.config.connectLines;
    const colorChanged =
      (newConfig.color && newConfig.color !== this.config.color) ||
      (newConfig.secondaryColor && newConfig.secondaryColor !== this.config.secondaryColor);

    this.config = { ...this.config, ...newConfig };
    this.applyTransform();

    if (countChanged || linesChanged || colorChanged) {
      this.rebuildParticles();
    } else if (this.material) {
      this.material.opacity = this.config.opacity ?? 0.85;
      this.material.size = (this.config.size || 1.2) * 0.08;
      this.material.blending =
        this.config.blendMode === 'additive' ? THREE.AdditiveBlending : THREE.NormalBlending;
      this.material.needsUpdate = true;
    }
  }

  public dispose(): void {
    if (this.points) {
      this.group.remove(this.points);
      this.points = null;
    }
    if (this.geometry) {
      this.geometry.dispose();
      this.geometry = null;
    }
    if (this.material) {
      this.material.dispose();
      this.material = null;
    }
    if (this.linesMesh) {
      this.group.remove(this.linesMesh);
      this.linesMesh = null;
    }
    if (this.linesGeometry) {
      this.linesGeometry.dispose();
      this.linesGeometry = null;
    }
    if (this.linesMaterial) {
      this.linesMaterial.dispose();
      this.linesMaterial = null;
    }
    if (this.particleTexture) {
      this.particleTexture.dispose();
      this.particleTexture = null;
    }
    if (this.group.parent) {
      this.group.parent.remove(this.group);
    }
  }
}
