/**
 * Procedural & Cinematic Background Module
 * Supports 8 Distinct Aesthetic Modes:
 * 0: Minimal Solid Studio (clean, zero noise, audio-reactive breathing backlight)
 * 1: Directional Studio Gradient (smooth linear/chromatic gradient with audio waves)
 * 2: Cosmic Deep Nebula (multi-octave simplex smoke & space plasma flares)
 * 3: Synthwave Cyber Grid (perspective floor grid, retro raster sun, horizon glow)
 * 4: Hypnotic Warp Tunnel (infinite 3D zoom tunnel & neon spiral vortex)
 * 5: Liquid Aurora Waves (flowing organic Northern Lights / liquid silk waves)
 * 6: Cyber Matrix Rain (cascading vertical digital code streams with treble sparkles)
 * 7: Analog VHS / CRT Studio (subtle CRT curvature, phosphor scanlines, tape noise)
 * Audio-Reactive Visual Studio
 */

import * as THREE from 'three';
import { AudioAnalysisData } from '../../types/audio';
import { BackgroundConfig, IVisualModule, RenderContext } from '../../types/visual';

const BACKGROUND_VERTEX_SHADER = `
varying vec2 vUv;
void main() {
  vUv = uv;
  // Fullscreen quad at z = -10 (behind all 3D content, edge-to-edge NDC)
  gl_Position = vec4(position.xy, 0.9999, 1.0);
}
`;

const BACKGROUND_FRAGMENT_SHADER = `
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform int uMode; // 0=solid, 1=gradient, 2=nebula, 3=synthwaveGrid, 4=tunnel, 5=aurora, 6=matrixRain, 7=retroCRT
uniform float uBass;
uniform float uMid;
uniform float uTreble;
uniform float uGrainIntensity;
uniform float uVignetteStrength;
uniform float uGradientAngle;
uniform float uShowStars; // 0.0 or 1.0
uniform float uStarDensity; // 0.1 to 1.0
uniform float uStarSpeed; // 0.1 to 3.0
uniform float uSeed; // Unique procedural random seed
uniform float uGridDensity; // 10.0 to 60.0
uniform float uScanlineIntensity; // 0.0 to 1.0
varying vec2 vUv;

// Pseudo-random noise for film grain & stardust
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// High-frequency triangular dither to guarantee zero 8-bit/OLED color banding
float getDither(vec2 coord) {
  return (fract(sin(dot(coord, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 128.0;
}

// Sub-pixel, aspect-ratio corrected, seedable micro-starfield
float getStardust(vec2 uv, float time, float treble, float aspect, float seed, float density, float speed) {
  float gridSize = 100.0 * max(0.2, density);
  vec2 p = vec2(uv.x * gridSize * max(1.0, aspect), uv.y * gridSize * max(1.0, 1.0 / aspect));
  vec2 id = floor(p);
  vec2 f = fract(p) - 0.5;

  // Seedable pseudo-random hash
  float h = fract(sin(dot(id + vec2(seed * 17.13, seed * 31.41), vec2(127.1, 311.7))) * 43758.5453123);

  if (h > 0.93) {
    float dist = length(f);
    // Smooth Gaussian sub-pixel circular glint
    float glint = exp(-dist * dist * 42.0);
    float twinkle = sin(time * speed * (2.2 + h * 3.8) + h * 6.28) * 0.5 + 0.5;
    return glint * (0.35 + 0.65 * twinkle) * (1.0 + treble * 1.2);
  }
  return 0.0;
}

// 2D Simplex/Perlin Noise approximation
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(1.0, uResolution.y);
  vec3 finalColor = uColorA;

  // Aspect-corrected radial coordinates from screen center
  vec2 radialCoord = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);
  float centerDist = length(radialCoord);

  if (uMode == 0) {
    // 0: Minimal Solid Studio (Clean obsidian, audio-reactive soft backlight, zero noise)
    float radial = exp(-centerDist * centerDist * 3.2);
    finalColor = mix(uColorA, uColorB * 0.42, radial * (0.35 + uBass * 0.4));
  } else if (uMode == 1) {
    // 1: Directional Studio Gradient (Linear gradient with angle and audio modulation)
    float rad = radians(uGradientAngle);
    vec2 dir = vec2(cos(rad), sin(rad));
    float t = dot(uv - 0.5, dir) + 0.5;
    t = clamp(t, 0.0, 1.0);
    // Subtle audio wave modulation
    t += sin(t * 6.28 + uTime * 1.5) * 0.03 * (uMid + uBass);
    t = clamp(t, 0.0, 1.0);
    finalColor = mix(uColorA, uColorB, t);
    finalColor += uColorC * (0.06 + uBass * 0.09) * (1.0 - t);
  } else if (uMode == 2) {
    // 2: Animated Cosmic Deep Nebula (Multi-octave fluid space plasma)
    vec2 p = vec2(radialCoord.x * 2.8, radialCoord.y * 2.8) + vec2(sin(uSeed), cos(uSeed * 1.3));
    float t = uTime * 0.22;
    float n1 = snoise(p + vec2(t * 0.35, -t * 0.25));
    float n2 = snoise(p * 2.2 - vec2(t * 0.45, t * 0.35) + vec2(n1 * 1.5));
    float n3 = snoise(p * 4.4 + vec2(n2 * 0.7, -t * 0.25));
    float nebula = clamp(n1 * 0.45 + n2 * 0.35 + n3 * 0.2 + 0.5, 0.0, 1.0);

    // Audio-reactive central plasma flare
    nebula += (uBass * 0.45 + uMid * 0.25) * (1.0 - smoothstep(0.0, 0.75, centerDist));

    finalColor = mix(uColorA, uColorB, nebula);
    finalColor += uColorC * pow(nebula, 2.6) * (0.9 + uMid * 0.9);
  } else if (uMode == 3) {
    // 3: Retro Synthwave Cyber Grid (Outrun perspective floor grid & raster sun)
    vec2 p = uv;
    p.y = 1.0 - p.y;
    if (p.y > 0.485) {
      // Sky gradient with horizon glow
      float skyT = (p.y - 0.485) * 1.94;
      finalColor = mix(uColorB * 0.45, uColorA, skyT);

      // Retro Sun (aspect-corrected circular raster)
      vec2 sunUv = vec2((p.x - 0.5) * aspect, (p.y - 0.52) * 1.7);
      float sunDist = length(sunUv);
      if (sunDist < 0.28) {
        float sunIntensity = smoothstep(0.28, 0.04, sunDist);
        float raster = step(0.3, fract(p.y * 36.0 + uTime * 0.5));
        finalColor += uColorC * sunIntensity * raster * (1.0 + uBass * 0.6);
      }
    } else {
      // Perspective Floor Grid with depth antialiasing
      float depth = 1.0 / max(0.001, (0.49 - p.y));
      float density = max(12.0, uGridDensity);
      vec2 gridUv = vec2((p.x - 0.5) * depth * (density * 0.018) * aspect, depth * 0.16 + uTime * (1.2 + uBass * 1.4));
      vec2 grid = abs(fract(gridUv - 0.5) - 0.5) / fwidth(gridUv);
      float line = min(grid.x, grid.y);
      float gridIntensity = 1.0 - min(line, 1.0);
      float fade = smoothstep(0.485, 0.0, p.y);

      finalColor = mix(uColorA, uColorB * 1.35, gridIntensity * fade * (0.85 + uTreble * 0.85));
    }
  } else if (uMode == 4) {
    // 4: Hypnotic Warp Tunnel (Infinite perspective cyber tunnel & neon vortex)
    vec2 p = radialCoord;
    float r = length(p);
    float theta = atan(p.y, p.x);
    float tunnelDepth = 1.0 / max(0.02, r);
    float speed = uTime * (1.6 + uBass * 2.2);

    float rings = sin(tunnelDepth * 2.6 - speed * 4.0) * 0.5 + 0.5;
    float spirals = sin(theta * 6.0 + tunnelDepth * 1.2 - speed * 2.0) * 0.5 + 0.5;
    float tunnelPattern = smoothstep(0.32, 0.95, rings * 0.6 + spirals * 0.55);
    float depthFade = clamp(r * 2.2, 0.0, 1.0);

    finalColor = mix(uColorA, uColorB * 1.5, tunnelPattern * depthFade * (0.8 + uTreble * 0.8));
    finalColor += uColorC * (1.0 - depthFade) * (0.45 + uBass * 0.65); // Central light flare
  } else if (uMode == 5) {
    // 5: Liquid Aurora Waves (Flowing organic iridescent ribbons)
    vec2 p = uv;
    float wave1 = sin(p.x * 4.5 + uTime * 1.3 + uSeed) * 0.12 * (1.0 + uBass * 0.5);
    float wave2 = cos(p.x * 7.5 - uTime * 0.85 + uSeed * 1.7) * 0.08 * (1.0 + uMid * 0.6);
    float wave3 = sin(p.x * 12.0 + uTime * 1.6) * 0.04 * (1.0 + uTreble * 0.8);
    float auroraY = p.y + wave1 + wave2 + wave3;

    float band1 = exp(-pow((auroraY - 0.45) * 4.2, 2.0));
    float band2 = exp(-pow((auroraY - 0.62) * 5.0, 2.0));
    float band3 = exp(-pow((auroraY - 0.28) * 4.8, 2.0));

    finalColor = uColorA;
    finalColor += uColorB * band1 * (1.0 + uBass * 0.7);
    finalColor += uColorC * band2 * (1.1 + uMid * 0.8);
    finalColor += mix(uColorB, uColorC, 0.5) * band3 * 0.6;
  } else if (uMode == 6) {
    // 6: Cyber Matrix Rain (Cascading digital data streams & code sparkles)
    float cols = max(24.0, uGridDensity * 1.1);
    vec2 gridUv = vec2(uv.x * cols, uv.y);
    float colId = floor(gridUv.x) + uSeed * 37.0;

    float colHash = fract(sin(colId * 78.233) * 43758.5453);
    float colSpeed = 0.9 + colHash * 1.5 + uBass * 1.2;
    float streamY = fract(gridUv.y * 3.5 - uTime * colSpeed);
    float trail = pow(1.0 - streamY, 3.5);
    float dropHead = smoothstep(0.06, 0.0, streamY);
    float code = step(0.35, fract(sin(dot(floor(vec2(gridUv.x, uv.y * 55.0)), vec2(12.9898, 78.233))) * 43758.5453));

    float streamIntensity = (trail * 0.7 + dropHead * 1.6) * code * (0.8 + uTreble * 0.9);
    finalColor = mix(uColorA, uColorB * 1.6, streamIntensity);
    finalColor += uColorC * dropHead * streamIntensity * 1.3;
  } else if (uMode == 7) {
    // 7: Analog VHS / CRT Studio (Screen curvature, phosphor scanlines, subtle tape glow)
    vec2 crtUv = uv * 2.0 - 1.0;
    crtUv += crtUv * dot(crtUv, crtUv) * 0.035;
    vec2 normCrt = crtUv * 0.5 + 0.5;

    float scanlines = sin(normCrt.y * uResolution.y * 1.2) * 0.5 + 0.5;
    float scanIntensity = mix(1.0, 0.65 + scanlines * 0.35, max(0.1, uScanlineIntensity));

    finalColor = mix(uColorA, uColorB * 0.35, centerDist * 0.55);
    finalColor *= scanIntensity;
    finalColor += uColorC * (0.04 + uBass * 0.07);
  }

  // 1. Audio-reactive ambient backlight / atmosphere breathing
  float ambientPulse = exp(-centerDist * centerDist * 3.0);
  finalColor += uColorB * ambientPulse * (0.15 + uBass * 0.25);

  // 2. Procedural twinkling micro-stardust (ONLY if enabled by showStars toggle)
  if (uShowStars > 0.5) {
    float stars = getStardust(uv, uTime, uTreble, aspect, uSeed, uStarDensity, uStarSpeed);
    finalColor += vec3(stars) * mix(vec3(1.0), uColorC, 0.55);
  }

  // 3. Smooth non-destructive vignette (gentle corner falloff, never cuts off sides)
  vec2 vigCoord = vec2((uv.x - 0.5) * min(1.0, aspect * 1.4), (uv.y - 0.5) * min(1.0, (1.0 / aspect) * 1.4));
  float vigDist = length(vigCoord);
  float vignette = 1.0 - smoothstep(0.45, 0.95, vigDist) * (uVignetteStrength * 0.7);
  finalColor *= clamp(vignette, 0.1, 1.0);

  // 4. Subtle cinematic film grain noise
  if (uGrainIntensity > 0.001) {
    float grain = (random(uv + vec2(uTime * 8.0, -uTime * 6.0)) - 0.5) * uGrainIntensity * 0.25;
    finalColor += vec3(grain);
  }

  // 5. High-frequency triangular dither to guarantee ZERO banding on OLED / 8-bit screens
  finalColor += vec3(getDither(gl_FragCoord.xy));

  gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
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

  private getModeIndex(mode: string): number {
    switch (mode) {
      case 'solid':
        return 0;
      case 'gradient':
        return 1;
      case 'animatedNebula':
        return 2;
      case 'synthwaveGrid':
        return 3;
      case 'hypnoticTunnel':
        return 4;
      case 'liquidAurora':
        return 5;
      case 'digitalRain':
        return 6;
      case 'retroCRT':
        return 7;
      default:
        return 1;
    }
  }

  public init(context: RenderContext): void {
    this.geometry = new THREE.PlaneGeometry(2, 2);

    const modeIndex = this.getModeIndex(this.config.mode);

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
        uGrainIntensity: { value: this.config.grainIntensity ?? 0.2 },
        uVignetteStrength: { value: this.config.vignetteStrength ?? 0.45 },
        uGradientAngle: { value: this.config.gradientAngle ?? 45 },
        uShowStars: { value: this.config.showStars ? 1.0 : 0.0 },
        uStarDensity: { value: this.config.starDensity ?? 0.35 },
        uStarSpeed: { value: this.config.starSpeed ?? 1.0 },
        uSeed: { value: this.config.seed ?? 42.0 },
        uGridDensity: { value: this.config.gridDensity ?? 32.0 },
        uScanlineIntensity: { value: this.config.scanlineIntensity ?? 0.45 },
      },
      depthWrite: false,
      depthTest: false,
    });

    this.quadMesh = new THREE.Mesh(this.geometry, this.material);
    this.quadMesh.renderOrder = -1000;
    this.group.add(this.quadMesh);

    context.scene.add(this.group);
  }

  public update(audioData: AudioAnalysisData, deltaTime: number, elapsedTime: number): void {
    if (!this.material || !this.config.enabled) return;

    const u = this.material.uniforms;
    const speed = this.config.animationSpeed ?? 1.0;
    u.uTime.value = elapsedTime * speed;

    const reactivity = this.config.reactivityIntensity ?? 1.0;
    u.uBass.value = (audioData.bands?.bass || 0) * reactivity;
    u.uMid.value = (audioData.bands?.mid || 0) * reactivity;
    u.uTreble.value = (audioData.bands?.treble || 0) * reactivity;

    // Optional audio-reactive background zoom pulse
    if (this.config.audioReactiveZoom > 0 && this.quadMesh) {
      const zoom = 1.0 + (audioData.bands?.bass || 0) * this.config.audioReactiveZoom * 0.1;
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

      u.uMode.value = this.getModeIndex(this.config.mode);
      u.uGrainIntensity.value = this.config.grainIntensity ?? 0.2;
      u.uVignetteStrength.value = this.config.vignetteStrength ?? 0.45;
      u.uGradientAngle.value = this.config.gradientAngle ?? 45;

      u.uShowStars.value = this.config.showStars ? 1.0 : 0.0;
      u.uStarDensity.value = this.config.starDensity ?? 0.35;
      u.uStarSpeed.value = this.config.starSpeed ?? 1.0;
      u.uSeed.value = this.config.seed ?? 42.0;
      u.uGridDensity.value = this.config.gridDensity ?? 32.0;
      u.uScanlineIntensity.value = this.config.scanlineIntensity ?? 0.45;
    }
    this.group.visible = this.config.enabled ?? true;
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
