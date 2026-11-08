/**
 * Procedural & Media Background Module
 * Supports Animated Cosmic Nebula, Synthwave Grid, Gradients, and Film Grain Shaders
 * Audio-Reactive Visual Studio
 */

import * as THREE from 'three';
import { AudioAnalysisData } from '../../types/audio';
import { BackgroundConfig, IVisualModule, RenderContext } from '../../types/visual';

const BACKGROUND_VERTEX_SHADER = `
varying vec2 vUv;
void main() {
  vUv = uv;
  // Fullscreen quad at z = -10 (behind all 3D content)
  gl_Position = vec4(position.xy, 0.9999, 1.0);
}
`;

const BACKGROUND_FRAGMENT_SHADER = `
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform int uMode; // 0=solid, 1=gradient, 2=nebula, 3=synthwaveGrid
uniform float uBass;
uniform float uMid;
uniform float uTreble;
uniform float uGrainIntensity;
uniform float uVignetteStrength;
uniform float uGradientAngle;
varying vec2 vUv;

// Pseudo-random noise for film grain
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// 2D Simplex/Perlin Noise approximation
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  vec3 finalColor = uColorA;

  if (uMode == 0) {
    // Solid color
    finalColor = uColorA;
  } else if (uMode == 1) {
    // Linear Gradient with angle
    float rad = radians(uGradientAngle);
    vec2 dir = vec2(cos(rad), sin(rad));
    float t = dot(uv - 0.5, dir) + 0.5;
    t = clamp(t, 0.0, 1.0);
    finalColor = mix(uColorA, uColorB, t);
  } else if (uMode == 2) {
    // Animated Cosmic Nebula
    vec2 p = uv * 3.0 - vec2(1.5);
    float t = uTime * 0.25;
    float n1 = snoise(p + vec2(t * 0.4, -t * 0.3));
    float n2 = snoise(p * 2.0 - vec2(t * 0.6, t * 0.5) + vec2(n1 * 1.5));
    float nebula = clamp(n1 * 0.5 + n2 * 0.5 + 0.5, 0.0, 1.0);

    // Audio reactive flare
    nebula += uBass * 0.35 * (1.0 - length(uv - 0.5));

    finalColor = mix(uColorA, uColorB, nebula);
    finalColor += uColorC * pow(nebula, 3.0) * (0.8 + uMid * 0.8);
  } else if (uMode == 3) {
    // Synthwave Cyber Grid
    vec2 p = uv;
    p.y = 1.0 - p.y; // flip y
    if (p.y > 0.5) {
      // Sky gradient
      float skyT = (p.y - 0.5) * 2.0;
      finalColor = mix(uColorB * 0.3, uColorA, skyT);
      // Sun/Glow
      float sunDist = length(vec2(p.x - 0.5, (p.y - 0.55) * 1.8));
      if (sunDist < 0.25) {
        float sunIntensity = smoothstep(0.25, 0.05, sunDist);
        finalColor += uColorC * sunIntensity * (1.0 + uBass * 0.5);
      }
    } else {
      // Perspective Floor Grid
      float depth = 1.0 / (0.501 - p.y);
      vec2 gridUv = vec2((p.x - 0.5) * depth * 0.5, depth * 0.15 + uTime * (1.2 + uBass * 1.5));
      vec2 grid = abs(fract(gridUv - 0.5) - 0.5) / fwidth(gridUv);
      float line = min(grid.x, grid.y);
      float gridIntensity = 1.0 - min(line, 1.0);
      float fade = smoothstep(0.5, 0.0, p.y);

      finalColor = mix(uColorA, uColorB, gridIntensity * fade * (0.8 + uTreble * 0.7));
    }
  }

  // Vignette effect
  vec2 d = uv - vec2(0.5);
  float vignette = 1.0 - dot(d, d) * (uVignetteStrength * 2.5);
  finalColor *= clamp(vignette, 0.0, 1.0);

  // Film Grain Noise
  if (uGrainIntensity > 0.001) {
    float grain = (random(uv + vec2(uTime * 10.0, -uTime * 7.0)) - 0.5) * uGrainIntensity * 0.35;
    finalColor += vec3(grain);
  }

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

export class BackgroundModule implements IVisualModule<BackgroundConfig> {
  public config: BackgroundConfig;
  private group: THREE.Group;
  private quadMesh: THREE.Mesh | null = null;
  private material: THREE.ShaderMaterial | null = null;
  private geometry: THREE.PlaneGeometry | null = null;

  constructor(config: BackgroundConfig) {
    this.config = config;
    this.group = new THREE.Group();
  }

  public init(context: RenderContext): void {
    this.geometry = new THREE.PlaneGeometry(2, 2);

    let modeIndex = 1;
    if (this.config.mode === 'solid') modeIndex = 0;
    else if (this.config.mode === 'gradient') modeIndex = 1;
    else if (this.config.mode === 'animatedNebula') modeIndex = 2;
    else if (this.config.mode === 'synthwaveGrid') modeIndex = 3;

    this.material = new THREE.ShaderMaterial({
      vertexShader: BACKGROUND_VERTEX_SHADER,
      fragmentShader: BACKGROUND_FRAGMENT_SHADER,
      uniforms: {
        uResolution: { value: new THREE.Vector2(context.width, context.height) },
        uTime: { value: 0 },
        uColorA: { value: new THREE.Color(this.config.primaryColor) },
        uColorB: { value: new THREE.Color(this.config.secondaryColor) },
        uColorC: { value: new THREE.Color(this.config.accentColor || '#ff007f') },
        uMode: { value: modeIndex },
        uBass: { value: 0 },
        uMid: { value: 0 },
        uTreble: { value: 0 },
        uGrainIntensity: { value: this.config.grainIntensity },
        uVignetteStrength: { value: this.config.vignetteStrength },
        uGradientAngle: { value: this.config.gradientAngle },
      },
      depthWrite: false,
      depthTest: false,
    });

    this.quadMesh = new THREE.Mesh(this.geometry, this.material);
    // Background renders first
    this.quadMesh.renderOrder = -1000;
    this.group.add(this.quadMesh);

    context.scene.add(this.group);
  }

  public update(audioData: AudioAnalysisData, deltaTime: number, elapsedTime: number): void {
    if (!this.material || !this.config.enabled) return;

    const u = this.material.uniforms;
    u.uTime.value = elapsedTime * this.config.animationSpeed;
    u.uBass.value = audioData.bands.bass;
    u.uMid.value = audioData.bands.mid;
    u.uTreble.value = audioData.bands.treble;

    // Optional audio-reactive background zoom pulse
    if (this.config.audioReactiveZoom > 0 && this.quadMesh) {
      const zoom = 1.0 + audioData.bands.bass * this.config.audioReactiveZoom * 0.1;
      this.quadMesh.scale.set(zoom, zoom, 1.0);
    }
  }

  public resize(width: number, height: number, pixelRatio: number): void {
    if (this.material) {
      this.material.uniforms.uResolution.value.set(width * pixelRatio, height * pixelRatio);
    }
  }

  public updateConfig(newConfig: Partial<BackgroundConfig>): void {
    this.config = { ...this.config, ...newConfig };

    if (this.material) {
      const u = this.material.uniforms;
      u.uColorA.value.set(this.config.primaryColor);
      u.uColorB.value.set(this.config.secondaryColor);
      u.uColorC.value.set(this.config.accentColor || '#ff007f');

      let modeIndex = 1;
      if (this.config.mode === 'solid') modeIndex = 0;
      else if (this.config.mode === 'gradient') modeIndex = 1;
      else if (this.config.mode === 'animatedNebula') modeIndex = 2;
      else if (this.config.mode === 'synthwaveGrid') modeIndex = 3;
      u.uMode.value = modeIndex;

      u.uGrainIntensity.value = this.config.grainIntensity;
      u.uVignetteStrength.value = this.config.vignetteStrength;
      u.uGradientAngle.value = this.config.gradientAngle;
    }
    this.group.visible = this.config.enabled;
  }

  public dispose(): void {
    if (this.quadMesh) {
      this.group.remove(this.quadMesh);
      this.quadMesh = null;
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

