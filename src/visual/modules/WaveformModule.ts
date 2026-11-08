/**
 * High-End Waveform Visualizer Module
 * Ultra-smooth ribbon geometry with procedural glow shader, Catmull-Rom smoothing,
 * true thickness extrusion, and multi-layered neon core.
 * Audio-Reactive Visual Studio
 */

import * as THREE from 'three';
import { AudioAnalysisData } from '../../types/audio';
import { IVisualModule, RenderContext, WaveformConfig } from '../../types/visual';

const WAVEFORM_VERTEX_SHADER = `
attribute vec3 aColor;
attribute float aVCoord; // -1.0 (bottom) to +1.0 (top)
varying vec3 vColor;
varying float vVCoord;
varying vec2 vUv;

void main() {
  vColor = aColor;
  vVCoord = aVCoord;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const WAVEFORM_FRAGMENT_SHADER = `
uniform float uOpacity;
uniform float uGlowIntensity;
varying vec3 vColor;
varying float vVCoord;
varying vec2 vUv;

void main() {
  float distFromCenter = abs(vVCoord); // 0.0 at center, 1.0 at edge
  
  // 1. Ultra-bright neon/white core in the center of the ribbon
  float coreIntensity = exp(-distFromCenter * distFromCenter * 14.0);
  vec3 coreColor = mix(vColor, vec3(1.0), coreIntensity * 0.85);

  // 2. Smooth exponential luminous falloff toward outer edges (antialiasing)
  float alphaFalloff = exp(-distFromCenter * distFromCenter * 3.2);
  alphaFalloff *= smoothstep(1.0, 0.75, distFromCenter);

  // 3. Boost overall radiance with glow intensity
  vec3 finalColor = coreColor * (1.0 + uGlowIntensity * 0.6);
  float finalAlpha = alphaFalloff * uOpacity;

  gl_FragColor = vec4(finalColor, finalAlpha);
}
`;

const HALO_FRAGMENT_SHADER = `
uniform float uOpacity;
varying vec3 vColor;
varying float vVCoord;

void main() {
  float distFromCenter = abs(vVCoord);
  // Very soft diffuse atmospheric halo
  float halo = exp(-distFromCenter * distFromCenter * 2.0);
  halo *= (1.0 - smoothstep(0.7, 1.0, distFromCenter));
  
  gl_FragColor = vec4(vColor * 1.2, halo * uOpacity * 0.45);
}
`;

export class WaveformModule implements IVisualModule<WaveformConfig> {
  public config: WaveformConfig;
  private group: THREE.Group;

  // Primary ribbon mesh & geometry
  private ribbonMesh: THREE.Mesh | null = null;
  private ribbonGeometry: THREE.BufferGeometry | null = null;
  private ribbonMaterial: THREE.ShaderMaterial | null = null;

  // Secondary soft outer glow halo mesh
  private haloMesh: THREE.Mesh | null = null;
  private haloGeometry: THREE.BufferGeometry | null = null;
  private haloMaterial: THREE.ShaderMaterial | null = null;

  // Mirror reflection / underglow mesh
  private mirrorMesh: THREE.Mesh | null = null;
  private mirrorGeometry: THREE.BufferGeometry | null = null;
  private mirrorMaterial: THREE.ShaderMaterial | null = null;

  // Buffer arrays
  private positions: Float32Array = new Float32Array(0);
  private haloPositions: Float32Array = new Float32Array(0);
  private mirrorPositions: Float32Array = new Float32Array(0);
  private colors: Float32Array = new Float32Array(0);

  // Audio temporal smoothing cache
  private smoothedWave: Float32Array = new Float32Array(0);
  private sampleCount = 256;
  private currentAspect = 16 / 9;

  constructor(config: WaveformConfig) {
    this.config = config;
    this.group = new THREE.Group();
  }

  public init(context: RenderContext): void {
    this.currentAspect = context.width / (context.height || 1);
    this.rebuildWaveform();
    this.applyTransform();
    context.scene.add(this.group);
  }

  private rebuildWaveform(): void {
    // Clean up previous meshes
    if (this.ribbonMesh) {
      this.group.remove(this.ribbonMesh);
      this.ribbonMesh.geometry.dispose();
      this.ribbonMesh = null;
    }
    if (this.haloMesh) {
      this.group.remove(this.haloMesh);
      this.haloMesh.geometry.dispose();
      this.haloMesh = null;
    }
    if (this.mirrorMesh) {
      this.group.remove(this.mirrorMesh);
      this.mirrorMesh.geometry.dispose();
      this.mirrorMesh = null;
    }

    this.sampleCount = Math.max(64, Math.min(1024, this.config.sampleCount || 256));
    const count = this.sampleCount;

    this.smoothedWave = new Float32Array(count);

    // Each ribbon segment has 2 vertices per slice: top and bottom (total 2 * count vertices)
    const vertexCount = count * 2;
    this.positions = new Float32Array(vertexCount * 3);
    this.haloPositions = new Float32Array(vertexCount * 3);
    this.mirrorPositions = new Float32Array(vertexCount * 3);
    this.colors = new Float32Array(vertexCount * 3);
    const uvs = new Float32Array(vertexCount * 2);
    const vCoords = new Float32Array(vertexCount);

    // Build UVs and vCoords
    for (let i = 0; i < count; i++) {
      const u = i / (count - 1);
      const topIdx = i * 2;
      const botIdx = i * 2 + 1;

      uvs[topIdx * 2] = u;
      uvs[topIdx * 2 + 1] = 1.0;
      vCoords[topIdx] = 1.0; // top edge

      uvs[botIdx * 2] = u;
      uvs[botIdx * 2 + 1] = 0.0;
      vCoords[botIdx] = -1.0; // bottom edge
    }

    // Build triangle indices (2 triangles per quad)
    const quadCount = count - 1;
    const indices = new Uint16Array(quadCount * 6);
    for (let i = 0; i < quadCount; i++) {
      const a = i * 2;
      const b = i * 2 + 1;
      const c = (i + 1) * 2;
      const d = (i + 1) * 2 + 1;

      const idx = i * 6;
      indices[idx] = a;
      indices[idx + 1] = b;
      indices[idx + 2] = c;

      indices[idx + 3] = c;
      indices[idx + 4] = b;
      indices[idx + 5] = d;
    }

    // 1. Primary Core Ribbon
    this.ribbonGeometry = new THREE.BufferGeometry();
    this.ribbonGeometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.ribbonGeometry.setAttribute('aColor', new THREE.BufferAttribute(this.colors, 3));
    this.ribbonGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    this.ribbonGeometry.setAttribute('aVCoord', new THREE.BufferAttribute(vCoords, 1));
    this.ribbonGeometry.setIndex(new THREE.BufferAttribute(indices, 1));

    this.ribbonMaterial = new THREE.ShaderMaterial({
      vertexShader: WAVEFORM_VERTEX_SHADER,
      fragmentShader: WAVEFORM_FRAGMENT_SHADER,
      uniforms: {
        uOpacity: { value: this.config.opacity ?? 1.0 },
        uGlowIntensity: { value: this.config.glowIntensity ?? 2.0 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this.ribbonMesh = new THREE.Mesh(this.ribbonGeometry, this.ribbonMaterial);
    this.group.add(this.ribbonMesh);

    // 2. Secondary Diffuse Halo Ribbon
    this.haloGeometry = new THREE.BufferGeometry();
    this.haloGeometry.setAttribute('position', new THREE.BufferAttribute(this.haloPositions, 3));
    this.haloGeometry.setAttribute('aColor', new THREE.BufferAttribute(this.colors, 3));
    this.haloGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    this.haloGeometry.setAttribute('aVCoord', new THREE.BufferAttribute(vCoords, 1));
    this.haloGeometry.setIndex(new THREE.BufferAttribute(indices, 1));

    this.haloMaterial = new THREE.ShaderMaterial({
      vertexShader: WAVEFORM_VERTEX_SHADER,
      fragmentShader: HALO_FRAGMENT_SHADER,
      uniforms: {
        uOpacity: { value: this.config.opacity ?? 1.0 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this.haloMesh = new THREE.Mesh(this.haloGeometry, this.haloMaterial);
    this.group.add(this.haloMesh);

    // 3. Mirror Reflection Ribbon
    this.mirrorGeometry = new THREE.BufferGeometry();
    this.mirrorGeometry.setAttribute('position', new THREE.BufferAttribute(this.mirrorPositions, 3));
    this.mirrorGeometry.setAttribute('aColor', new THREE.BufferAttribute(this.colors, 3));
    this.mirrorGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    this.mirrorGeometry.setAttribute('aVCoord', new THREE.BufferAttribute(vCoords, 1));
    this.mirrorGeometry.setIndex(new THREE.BufferAttribute(indices, 1));

    this.mirrorMaterial = new THREE.ShaderMaterial({
      vertexShader: WAVEFORM_VERTEX_SHADER,
      fragmentShader: HALO_FRAGMENT_SHADER,
      uniforms: {
        uOpacity: { value: (this.config.opacity ?? 1.0) * 0.4 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this.mirrorMesh = new THREE.Mesh(this.mirrorGeometry, this.mirrorMaterial);
    this.group.add(this.mirrorMesh);
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
    if (!this.ribbonGeometry || !this.config.enabled) return;

    const waveform = audioData.waveform || new Float32Array(1024);
    const count = this.sampleCount;
    const wfLen = waveform.length;
    if (wfLen === 0 || count === 0) return;

    const step = wfLen / count;
    const bass = audioData.bands?.bass || 0;
    const treble = audioData.bands?.treble || 0;

    // Amplitude & displacement scaling
    const amp =
      (this.config.amplitude || 1.6) *
      (1.0 + bass * (this.config.displacementIntensity || 1.0) * 0.65);

    // True visible ribbon thickness in world coordinates (e.g. 0.08 to 0.35)
    const baseThickness = Math.max(0.04, Math.min(0.5, (this.config.thickness || 3.0) * 0.025));
    const ribbonHalfThickness = baseThickness * 0.5 * (1.0 + bass * 0.25);
    const haloHalfThickness = ribbonHalfThickness * 2.8;

    const primaryCol = new THREE.Color(this.config.primaryColor || '#00f0ff');
    const secondaryCol = new THREE.Color(this.config.secondaryColor || '#ff007f');

    // 1. Spatial 7-point Gaussian Smoothing on the raw audio waveform
    const tempWave = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      let sum = 0;
      let weightSum = 0;
      const kernel = [0.05, 0.1, 0.2, 0.3, 0.2, 0.1, 0.05];

      for (let k = -3; k <= 3; k++) {
        const rawIdx = Math.max(0, Math.min(wfLen - 1, Math.floor((i + k) * step)));
        const w = kernel[k + 3];
        sum += (waveform[rawIdx] || 0) * w;
        weightSum += w;
      }
      tempWave[i] = sum / weightSum;
    }

    // 2. Temporal Smoothing Filter (Lerp with previous frame for liquid analog feel)
    const smoothFactor = Math.max(0.2, Math.min(0.85, this.config.waveformSmoothing ?? 0.65));
    for (let i = 0; i < count; i++) {
      this.smoothedWave[i] += (tempWave[i] - this.smoothedWave[i]) * (1.0 - smoothFactor * 0.65);
    }

    const pos = this.positions;
    const haloPos = this.haloPositions;
    const mirrorPos = this.mirrorPositions;
    const col = this.colors;

    // 3. Generate Smooth Ribbon Geometry with True Extrusion
    const aspect = this.currentAspect || (16 / 9);

    if (this.config.mode === 'circular') {
      const baseRadius = aspect < 0.8 ? Math.min(this.config.radius || 2.0, 1.6) : (this.config.radius || 2.0);
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const waveVal = this.smoothedWave[i] * amp * (0.85 + bass * 0.4);

        const r = Math.max(0.2, baseRadius + waveVal);
        const cx = Math.cos(angle) * r;
        const cy = Math.sin(angle) * r;
        const cz = Math.sin(angle * 3.0 + elapsedTime * 2.0) * (bass * 0.2);

        // Radial normal vector
        const nx = Math.cos(angle);
        const ny = Math.sin(angle);

        // Core ribbon vertices
        const topIdx = i * 2;
        const botIdx = i * 2 + 1;

        pos[topIdx * 3] = cx + nx * ribbonHalfThickness;
        pos[topIdx * 3 + 1] = cy + ny * ribbonHalfThickness;
        pos[topIdx * 3 + 2] = cz;

        pos[botIdx * 3] = cx - nx * ribbonHalfThickness;
        pos[botIdx * 3 + 1] = cy - ny * ribbonHalfThickness;
        pos[botIdx * 3 + 2] = cz;

        // Diffuse Halo vertices
        haloPos[topIdx * 3] = cx + nx * haloHalfThickness;
        haloPos[topIdx * 3 + 1] = cy + ny * haloHalfThickness;
        haloPos[topIdx * 3 + 2] = cz;

        haloPos[botIdx * 3] = cx - nx * haloHalfThickness;
        haloPos[botIdx * 3 + 1] = cy - ny * haloHalfThickness;
        haloPos[botIdx * 3 + 2] = cz;

        // Inner harmonic mirror ring
        const mr = Math.max(0.1, baseRadius * 0.6 - waveVal * 0.5);
        mirrorPos[topIdx * 3] = Math.cos(angle) * mr + nx * ribbonHalfThickness * 0.7;
        mirrorPos[topIdx * 3 + 1] = Math.sin(angle) * mr + ny * ribbonHalfThickness * 0.7;
        mirrorPos[topIdx * 3 + 2] = cz * 0.5;

        mirrorPos[botIdx * 3] = Math.cos(angle) * mr - nx * ribbonHalfThickness * 0.7;
        mirrorPos[botIdx * 3 + 1] = Math.sin(angle) * mr - ny * ribbonHalfThickness * 0.7;
        mirrorPos[botIdx * 3 + 2] = cz * 0.5;

        // Vibrant color blend
        const t = (Math.sin(angle) + 1.0) * 0.5;
        const c = primaryCol.clone().lerp(secondaryCol, t);
        col[topIdx * 3] = c.r;
        col[topIdx * 3 + 1] = c.g;
        col[topIdx * 3 + 2] = c.b;

        col[botIdx * 3] = c.r;
        col[botIdx * 3 + 1] = c.g;
        col[botIdx * 3 + 2] = c.b;
      }
    } else if (this.config.mode === 'ribbon3d') {
      const length = aspect < 0.8 ? 4.2 : aspect < 1.3 ? 6.5 : 8.5;
      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        const waveVal = this.smoothedWave[i] * amp;

        const x = (t - 0.5) * length;
        const y = Math.sin(t * Math.PI * 3.0 + elapsedTime * 2.5) * 0.4 + waveVal;
        const z = Math.cos(t * Math.PI * 2.0 + elapsedTime * 1.8) * (this.config.depth3D || 1.0);

        // 3D ribbon normal (upwards and depth)
        const ny = Math.cos(t * Math.PI * 2.0);
        const nz = Math.sin(t * Math.PI * 2.0);

        const topIdx = i * 2;
        const botIdx = i * 2 + 1;

        pos[topIdx * 3] = x;
        pos[topIdx * 3 + 1] = y + ny * ribbonHalfThickness;
        pos[topIdx * 3 + 2] = z + nz * ribbonHalfThickness;

        pos[botIdx * 3] = x;
        pos[botIdx * 3 + 1] = y - ny * ribbonHalfThickness;
        pos[botIdx * 3 + 2] = z - nz * ribbonHalfThickness;

        haloPos[topIdx * 3] = x;
        haloPos[topIdx * 3 + 1] = y + ny * haloHalfThickness;
        haloPos[topIdx * 3 + 2] = z + nz * haloHalfThickness;

        haloPos[botIdx * 3] = x;
        haloPos[botIdx * 3 + 1] = y - ny * haloHalfThickness;
        haloPos[botIdx * 3 + 2] = z - nz * haloHalfThickness;

        // Mirror
        mirrorPos[topIdx * 3] = x;
        mirrorPos[topIdx * 3 + 1] = -y + ny * ribbonHalfThickness * 0.6;
        mirrorPos[topIdx * 3 + 2] = -z * 0.5;

        mirrorPos[botIdx * 3] = x;
        mirrorPos[botIdx * 3 + 1] = -y - ny * ribbonHalfThickness * 0.6;
        mirrorPos[botIdx * 3 + 2] = -z * 0.5;

        const c = primaryCol.clone().lerp(secondaryCol, t);
        col[topIdx * 3] = c.r;
        col[topIdx * 3 + 1] = c.g;
        col[topIdx * 3 + 2] = c.b;

        col[botIdx * 3] = c.r;
        col[botIdx * 3 + 1] = c.g;
        col[botIdx * 3 + 2] = c.b;
      }
    } else {
      // Horizontal Waveform (Default) - Aspect-ratio aware width
      let halfWidth = 5.2;
      if (aspect < 0.8) {
        // 9:16 vertical mobile: spans 92% of screen width cleanly without clipping
        halfWidth = 2.15;
      } else if (aspect < 1.3) {
        // 1:1 square: spans 88% of screen width
        halfWidth = 3.65;
      }

      for (let i = 0; i < count; i++) {
        const normX = (i / (count - 1)) * 2.0 - 1.0;
        const x = normX * halfWidth;

        // Smooth tapering envelope at both ends
        const envelope = Math.sin((i / (count - 1)) * Math.PI);
        const waveVal = this.smoothedWave[i] * amp * envelope;

        const y = waveVal;
        const z = Math.sin(normX * 4.0 + elapsedTime * 1.5) * (bass * 0.15);

        // Compute local curve tangent for precise orthogonal ribbon extrusion
        let tx = 1.0;
        let ty = 0.0;
        if (i > 0 && i < count - 1) {
          const nextWave = this.smoothedWave[i + 1] * amp * Math.sin(((i + 1) / (count - 1)) * Math.PI);
          const prevWave = this.smoothedWave[i - 1] * amp * Math.sin(((i - 1) / (count - 1)) * Math.PI);
          const dx = (2.0 / (count - 1)) * halfWidth;
          const dy = nextWave - prevWave;
          const len = Math.sqrt(dx * dx + dy * dy) || 1.0;
          tx = dx / len;
          ty = dy / len;
        }

        // Normal perpendicular to curve
        const nx = -ty;
        const ny = tx;

        const topIdx = i * 2;
        const botIdx = i * 2 + 1;

        // Core ribbon extrusion
        pos[topIdx * 3] = x + nx * ribbonHalfThickness;
        pos[topIdx * 3 + 1] = y + ny * ribbonHalfThickness;
        pos[topIdx * 3 + 2] = z;

        pos[botIdx * 3] = x - nx * ribbonHalfThickness;
        pos[botIdx * 3 + 1] = y - ny * ribbonHalfThickness;
        pos[botIdx * 3 + 2] = z;

        // Diffuse atmospheric glow halo
        haloPos[topIdx * 3] = x + nx * haloHalfThickness;
        haloPos[topIdx * 3 + 1] = y + ny * haloHalfThickness;
        haloPos[topIdx * 3 + 2] = z;

        haloPos[botIdx * 3] = x - nx * haloHalfThickness;
        haloPos[botIdx * 3 + 1] = y - ny * haloHalfThickness;
        haloPos[botIdx * 3 + 2] = z;

        // Underglow mirror reflection
        const my = -y * 0.45 - 0.2;
        mirrorPos[topIdx * 3] = x;
        mirrorPos[topIdx * 3 + 1] = my + ribbonHalfThickness * 0.7;
        mirrorPos[topIdx * 3 + 2] = z * 0.5;

        mirrorPos[botIdx * 3] = x;
        mirrorPos[botIdx * 3 + 1] = my - ribbonHalfThickness * 0.7;
        mirrorPos[botIdx * 3 + 2] = z * 0.5;

        // Color gradient across the waveform
        const t = i / (count - 1);
        const c = primaryCol.clone().lerp(secondaryCol, t);
        col[topIdx * 3] = c.r;
        col[topIdx * 3 + 1] = c.g;
        col[topIdx * 3 + 2] = c.b;

        col[botIdx * 3] = c.r;
        col[botIdx * 3 + 1] = c.g;
        col[botIdx * 3 + 2] = c.b;
      }
    }

    this.ribbonGeometry.attributes.position.needsUpdate = true;
    this.ribbonGeometry.attributes.aColor.needsUpdate = true;

    if (this.haloGeometry) {
      this.haloGeometry.attributes.position.needsUpdate = true;
      this.haloGeometry.attributes.aColor.needsUpdate = true;
    }
    if (this.mirrorGeometry) {
      this.mirrorGeometry.attributes.position.needsUpdate = true;
      this.mirrorGeometry.attributes.aColor.needsUpdate = true;
    }

    if (this.ribbonMaterial) {
      this.ribbonMaterial.uniforms.uOpacity.value = this.config.opacity ?? 1.0;
      this.ribbonMaterial.uniforms.uGlowIntensity.value = (this.config.glowIntensity ?? 2.0) * (1.0 + treble * 0.4);
    }
    if (this.haloMaterial) {
      this.haloMaterial.uniforms.uOpacity.value = (this.config.opacity ?? 1.0) * (1.0 + bass * 0.3);
    }
  }

  public resize(width: number, height: number, pixelRatio: number): void {
    this.currentAspect = width / (height || 1);
  }

  public updateConfig(newConfig: Partial<WaveformConfig>): void {
    const sampleCountChanged =
      newConfig.sampleCount !== undefined && newConfig.sampleCount !== this.config.sampleCount;
    const modeChanged = newConfig.mode !== undefined && newConfig.mode !== this.config.mode;

    this.config = { ...this.config, ...newConfig };
    this.applyTransform();

    if (sampleCountChanged || modeChanged) {
      this.rebuildWaveform();
    }
  }

  public dispose(): void {
    if (this.ribbonMesh) {
      this.group.remove(this.ribbonMesh);
      this.ribbonMesh.geometry.dispose();
      this.ribbonMesh = null;
    }
    if (this.haloMesh) {
      this.group.remove(this.haloMesh);
      this.haloMesh.geometry.dispose();
      this.haloMesh = null;
    }
    if (this.mirrorMesh) {
      this.group.remove(this.mirrorMesh);
      this.mirrorMesh.geometry.dispose();
      this.mirrorMesh = null;
    }
    if (this.ribbonMaterial) {
      this.ribbonMaterial.dispose();
      this.ribbonMaterial = null;
    }
    if (this.haloMaterial) {
      this.haloMaterial.dispose();
      this.haloMaterial = null;
    }
    if (this.mirrorMaterial) {
      this.mirrorMaterial.dispose();
      this.mirrorMaterial = null;
    }
    if (this.group.parent) {
      this.group.parent.remove(this.group);
    }
  }
}
