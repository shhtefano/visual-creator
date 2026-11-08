/**
 * Abstract 3D Audio-Reactive Geometry Module
 * Supports Icosahedron, Torus Knot, Morphing Geosphere, and Cyber Cube with noise displacement
 * Audio-Reactive Visual Studio
 */

import * as THREE from 'three';
import { AudioAnalysisData } from '../../types/audio';
import { GeometryConfig, IVisualModule, RenderContext } from '../../types/visual';

export class GeometryModule implements IVisualModule<GeometryConfig> {
  public config: GeometryConfig;
  private group: THREE.Group;
  private mesh: THREE.Mesh | null = null;
  private wireframeMesh: THREE.LineSegments | null = null;
  private geometry: THREE.BufferGeometry | null = null;
  private originalPositions: Float32Array | null = null;
  private normals: Float32Array | null = null;

  constructor(config: GeometryConfig) {
    this.config = config;
    this.group = new THREE.Group();
  }

  public init(context: RenderContext): void {
    this.rebuildMesh();
    this.applyTransform();
    context.scene.add(this.group);
  }

  private rebuildMesh(): void {
    if (this.mesh) {
      this.group.remove(this.mesh);
      this.mesh.geometry.dispose();
      (this.mesh.material as THREE.Material).dispose();
      this.mesh = null;
    }
    if (this.wireframeMesh) {
      this.group.remove(this.wireframeMesh);
      this.wireframeMesh.geometry.dispose();
      (this.wireframeMesh.material as THREE.Material).dispose();
      this.wireframeMesh = null;
    }

    let geom: THREE.BufferGeometry;
    const shape = this.config.shape;
    const subs = Math.min(4, Math.max(0, this.config.subdivisions));

    if (shape === 'icosahedron' || shape === 'morphingGeosphere') {
      geom = new THREE.IcosahedronGeometry(2.0, subs + 1);
    } else if (shape === 'torusKnot') {
      geom = new THREE.TorusKnotGeometry(1.6, 0.45, 100, 16);
    } else if (shape === 'dodecahedron') {
      geom = new THREE.DodecahedronGeometry(2.0, subs);
    } else if (shape === 'cyberCube') {
      geom = new THREE.BoxGeometry(2.6, 2.6, 2.6, subs + 2, subs + 2, subs + 2);
    } else {
      geom = new THREE.SphereGeometry(2.0, 32, 32);
    }

    geom.computeVertexNormals();
    this.geometry = geom;

    // Cache original positions and normals for vertex displacement
    const posAttr = geom.getAttribute('position');
    this.originalPositions = new Float32Array(posAttr.array);
    const normAttr = geom.getAttribute('normal');
    this.normals = new Float32Array(normAttr.array);

    const primaryCol = new THREE.Color(this.config.primaryColor);
    const accentCol = new THREE.Color(this.config.accentColor);

    let mat: THREE.Material;
    if (this.config.shadingStyle === 'wireframe') {
      mat = new THREE.MeshBasicMaterial({
        color: primaryCol,
        wireframe: true,
        transparent: true,
        opacity: this.config.opacity,
        blending: this.config.blendMode === 'additive' ? THREE.AdditiveBlending : THREE.NormalBlending,
      });
    } else if (this.config.shadingStyle === 'faceted') {
      mat = new THREE.MeshStandardMaterial({
        color: primaryCol,
        roughness: this.config.metallicRoughness,
        metalness: 0.5,
        flatShading: true,
        transparent: true,
        opacity: this.config.opacity,
        emissive: accentCol,
        emissiveIntensity: this.config.glowIntensity * 0.3,
      });
    } else {
      // Metallic PBR / Holographic
      mat = new THREE.MeshStandardMaterial({
        color: primaryCol,
        roughness: 0.2,
        metalness: 0.85,
        transparent: true,
        opacity: this.config.opacity,
        emissive: accentCol,
        emissiveIntensity: 0.2 + this.config.glowIntensity * 0.4,
      });
    }

    this.mesh = new THREE.Mesh(this.geometry, mat);
    this.group.add(this.mesh);

    // Optional subtle wireframe overlay for tech / cyberpunk feel
    if (this.config.shadingStyle !== 'wireframe') {
      const wireGeom = new THREE.WireframeGeometry(this.geometry);
      const wireMat = new THREE.LineBasicMaterial({
        color: accentCol,
        transparent: true,
        opacity: this.config.opacity * 0.35,
        blending: THREE.AdditiveBlending,
      });
      this.wireframeMesh = new THREE.LineSegments(wireGeom, wireMat);
      this.group.add(this.wireframeMesh);
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
    if (!this.geometry || !this.mesh || !this.config.enabled) return;

    // Continuous rotation
    const [rx, ry, rz] = this.config.rotationSpeed;
    const speedBoost = 1.0 + audioData.bands.mid * 1.5;
    this.mesh.rotation.x += rx * deltaTime * speedBoost;
    this.mesh.rotation.y += ry * deltaTime * speedBoost;
    this.mesh.rotation.z += rz * deltaTime * speedBoost;

    if (this.wireframeMesh) {
      this.wireframeMesh.rotation.copy(this.mesh.rotation);
    }

    // Audio-reactive scale pulse on kick / bass
    const bass = audioData.bands.bass;
    const pulse = 1.0 + bass * this.config.pulseIntensity * 0.45;
    const [sx, sy, sz] = this.config.transform.scale;
    this.group.scale.set(sx * pulse, sy * pulse, sz * pulse);

    // Audio-reactive noise vertex displacement
    if (this.originalPositions && this.normals && this.config.noiseDistortion > 0) {
      let energy = 0;
      if (this.config.distortionBand === 'bass') energy = audioData.bands.bass;
      else if (this.config.distortionBand === 'mid') energy = audioData.bands.mid;
      else if (this.config.distortionBand === 'treble') energy = audioData.bands.treble;
      else energy = audioData.rms;

      const distortion = this.config.noiseDistortion * energy * 0.8;
      const posAttr = this.geometry.getAttribute('position') as THREE.BufferAttribute;
      const posArr = posAttr.array as Float32Array;
      const orig = this.originalPositions;
      const norm = this.normals;
      const len = orig.length / 3;

      for (let i = 0; i < len; i++) {
        const ox = orig[i * 3];
        const oy = orig[i * 3 + 1];
        const oz = orig[i * 3 + 2];

        const nx = norm[i * 3];
        const ny = norm[i * 3 + 1];
        const nz = norm[i * 3 + 2];

        // Harmonic trigonometric 3D noise simulation
        const noise =
          Math.sin(ox * 2.5 + elapsedTime * 3.0) *
          Math.cos(oy * 2.5 + elapsedTime * 2.5) *
          Math.sin(oz * 2.5 + elapsedTime * 2.0);

        const disp = noise * distortion;
        posArr[i * 3] = ox + nx * disp;
        posArr[i * 3 + 1] = oy + ny * disp;
        posArr[i * 3 + 2] = oz + nz * disp;
      }

      posAttr.needsUpdate = true;
      this.geometry.computeVertexNormals();
    }
  }

  public resize(width: number, height: number, pixelRatio: number): void {}

  public updateConfig(newConfig: Partial<GeometryConfig>): void {
    const shapeChanged = newConfig.shape && newConfig.shape !== this.config.shape;
    const styleChanged = newConfig.shadingStyle && newConfig.shadingStyle !== this.config.shadingStyle;
    const subsChanged = newConfig.subdivisions !== undefined && newConfig.subdivisions !== this.config.subdivisions;

    this.config = { ...this.config, ...newConfig };
    this.applyTransform();

    if (shapeChanged || styleChanged || subsChanged) {
      this.rebuildMesh();
    } else if (this.mesh) {
      const mat = this.mesh.material as any;
      if (mat.color) mat.color.set(this.config.primaryColor);
      if (mat.emissive) mat.emissive.set(this.config.accentColor);
      mat.opacity = this.config.opacity;
      mat.needsUpdate = true;
    }
  }

  public dispose(): void {
    if (this.mesh) {
      this.group.remove(this.mesh);
      this.mesh.geometry.dispose();
      (this.mesh.material as THREE.Material).dispose();
      this.mesh = null;
    }
    if (this.wireframeMesh) {
      this.group.remove(this.wireframeMesh);
      this.wireframeMesh.geometry.dispose();
      (this.wireframeMesh.material as THREE.Material).dispose();
      this.wireframeMesh = null;
    }
    if (this.group.parent) {
      this.group.parent.remove(this.group);
    }
  }
}

