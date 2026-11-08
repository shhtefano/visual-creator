/**
 * Default Aesthetic Presets & Constrained Generative Randomizer
 * Audio-Reactive Visual Studio
 */

import { VisualPreset } from '../types/presets';
import { BackgroundConfig, GeometryConfig, ParticleConfig, SpectrumConfig, WaveformConfig } from '../types/visual';

export const DEFAULT_PRESETS: VisualPreset[] = [
  // 1. CYBER HORIZON 2077
  {
    id: 'preset-cyberpunk',
    name: 'Cyber Horizon 2077',
    category: 'cyberpunk',
    description: '80s Synthwave grid horizon, audio-reactive wireframe torus & graphic equalizer',
    isBuiltIn: true,
    updatedAt: Date.now(),
    palette: {
      id: 'pal-cyber',
      name: 'Cyberpunk Neon',
      primary: '#fcee0a',
      secondary: '#ff007f',
      accent: '#00f0ff',
      background: '#0a0017',
      glow: '#fcee0a',
    },
    reactivity: {
      masterSensitivity: 1.35,
      bassSensitivity: 1.45,
      midSensitivity: 1.1,
      trebleSensitivity: 1.25,
      globalSmoothing: 0.74,
      autoGainControl: true,
    },
    postProcessing: {
      bloomIntensity: 2.2,
      bloomRadius: 0.65,
      bloomThreshold: 0.22,
      chromaticAberration: 0.008,
      grainIntensity: 0.18,
      vignetteIntensity: 0.42,
      toneMappingExposure: 1.15,
    },
    layers: [
      {
        id: 'layer-bg-cyber',
        name: 'Synthwave Horizon Grid',
        type: 'background',
        enabled: true,
        opacity: 1.0,
        blendMode: 'normal',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        mode: 'synthwaveGrid',
        primaryColor: '#0a0017',
        secondaryColor: '#ff007f',
        accentColor: '#fcee0a',
        gradientAngle: 0,
        grainIntensity: 0.2,
        vignetteStrength: 0.45,
        animationSpeed: 1.2,
        audioReactiveZoom: 0.5,
        mediaBlur: 0,
      } as BackgroundConfig,
      {
        id: 'layer-geom-cyber',
        name: 'Wireframe Torus Knot',
        type: 'geometry',
        enabled: true,
        opacity: 0.95,
        blendMode: 'additive',
        transform: { position: [0, 0.5, 0], rotation: [0.4, 0, 0], scale: [1.1, 1.1, 1.1] },
        reactivityMappings: [],
        shape: 'torusKnot',
        shadingStyle: 'wireframe',
        subdivisions: 2,
        wireframeThickness: 1.8,
        noiseDistortion: 0.7,
        distortionBand: 'bass',
        rotationSpeed: [0.2, 0.45, 0.15],
        pulseIntensity: 0.9,
        primaryColor: '#fcee0a',
        accentColor: '#00f0ff',
        metallicRoughness: 0.25,
        glowIntensity: 2.2,
      } as GeometryConfig,
      {
        id: 'layer-spec-cyber',
        name: 'Graphic Equalizer Bars',
        type: 'spectrum',
        enabled: true,
        opacity: 0.9,
        blendMode: 'additive',
        transform: { position: [0, -1.8, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        mode: 'verticalBars',
        barCount: 48,
        barWidth: 0.75,
        maxHeight: 1.8,
        innerRadius: 1.2,
        minFrequencyHz: 20,
        maxFrequencyHz: 16000,
        logarithmicScale: true,
        primaryColor: '#ff007f',
        secondaryColor: '#00f0ff',
        barRoundness: 0.5,
        glowIntensity: 1.8,
        mirror: true,
        showPeaks: true,
        peakDecaySpeed: 1.5,
      } as SpectrumConfig,
    ],
  },

  // 2. DEEP SPACE NEBULA
  {
    id: 'preset-neon',
    name: 'Deep Space Nebula',
    category: 'neon',
    description: 'Swirling raymarched cosmic clouds, 3D wave ribbon, and starry particle vortex',
    isBuiltIn: true,
    updatedAt: Date.now(),
    palette: {
      id: 'pal-nebula',
      name: 'Cosmic Violet',
      primary: '#00f0ff',
      secondary: '#8b5cf6',
      accent: '#ec4899',
      background: '#05060f',
      glow: '#00f0ff',
    },
    reactivity: {
      masterSensitivity: 1.2,
      bassSensitivity: 1.35,
      midSensitivity: 1.1,
      trebleSensitivity: 1.2,
      globalSmoothing: 0.8,
      autoGainControl: true,
    },
    postProcessing: {
      bloomIntensity: 1.9,
      bloomRadius: 0.65,
      bloomThreshold: 0.28,
      chromaticAberration: 0.005,
      grainIntensity: 0.15,
      vignetteIntensity: 0.45,
      toneMappingExposure: 1.1,
    },
    layers: [
      {
        id: 'layer-bg-nebula',
        name: 'Cosmic Nebula',
        type: 'background',
        enabled: true,
        opacity: 1.0,
        blendMode: 'normal',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        mode: 'animatedNebula',
        primaryColor: '#05060f',
        secondaryColor: '#1d0b38',
        accentColor: '#00f0ff',
        gradientAngle: 45,
        grainIntensity: 0.2,
        vignetteStrength: 0.5,
        animationSpeed: 1.0,
        audioReactiveZoom: 0.5,
        mediaBlur: 0,
      } as BackgroundConfig,
      {
        id: 'layer-particles-nebula',
        name: 'Ambient Stellar Vortex',
        type: 'particles',
        enabled: true,
        opacity: 0.88,
        blendMode: 'additive',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        count: 1600,
        size: 1.3,
        speed: 1.1,
        behavior: 'ambientVortex',
        dispersion: 4.8,
        color: '#00f0ff',
        secondaryColor: '#8b5cf6',
        connectLines: true,
        connectionDistance: 0.85,
        connectionOpacity: 0.28,
        beatExplosionForce: 3.2,
        trebleTwinkle: 2.2,
        lifetime: 4.0,
        particleShape: 'circle',
      } as ParticleConfig,
      {
        id: 'layer-waveform-nebula',
        name: '3D Wave Ribbon',
        type: 'waveform',
        enabled: true,
        opacity: 1.0,
        blendMode: 'additive',
        transform: { position: [0, 0, 0], rotation: [0.25, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        mode: 'ribbon3d',
        thickness: 2.4,
        amplitude: 1.6,
        sampleCount: 384,
        glowIntensity: 2.4,
        primaryColor: '#00f0ff',
        secondaryColor: '#ec4899',
        colorGradientType: 'linear',
        radius: 1.8,
        depth3D: 1.1,
        waveformSmoothing: 0.2,
        displacementIntensity: 1.3,
        mirror: false,
      } as WaveformConfig,
    ],
  },

  // 3. INDUSTRIAL RAVE
  {
    id: 'preset-darktechno',
    name: 'Industrial Rave',
    category: 'darkTechno',
    description: 'Aggressive circular oscilloscope with fiery amber bass shockwaves and underground club aesthetic',
    isBuiltIn: true,
    updatedAt: Date.now(),
    palette: {
      id: 'pal-techno',
      name: 'Industrial Fire',
      primary: '#f59e0b',
      secondary: '#ffffff',
      accent: '#ef4444',
      background: '#05070a',
      glow: '#f59e0b',
    },
    reactivity: {
      masterSensitivity: 1.5,
      bassSensitivity: 1.8,
      midSensitivity: 0.85,
      trebleSensitivity: 1.0,
      globalSmoothing: 0.68,
      autoGainControl: true,
    },
    postProcessing: {
      bloomIntensity: 1.6,
      bloomRadius: 0.52,
      bloomThreshold: 0.38,
      chromaticAberration: 0.004,
      grainIntensity: 0.35,
      vignetteIntensity: 0.68,
      toneMappingExposure: 1.08,
    },
    layers: [
      {
        id: 'layer-bg-techno',
        name: 'Industrial Slate Gradient',
        type: 'background',
        enabled: true,
        opacity: 1.0,
        blendMode: 'normal',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        mode: 'gradient',
        primaryColor: '#05070a',
        secondaryColor: '#1e293b',
        accentColor: '#f59e0b',
        gradientAngle: 135,
        grainIntensity: 0.38,
        vignetteStrength: 0.72,
        animationSpeed: 0.8,
        audioReactiveZoom: 0.65,
        mediaBlur: 0,
      } as BackgroundConfig,
      {
        id: 'layer-particles-techno',
        name: 'Amber Shockwave Particles',
        type: 'particles',
        enabled: true,
        opacity: 0.95,
        blendMode: 'additive',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        count: 2000,
        size: 1.4,
        speed: 1.6,
        behavior: 'radialExplosion',
        dispersion: 5.2,
        color: '#f59e0b',
        secondaryColor: '#ef4444',
        connectLines: true,
        connectionDistance: 0.75,
        connectionOpacity: 0.3,
        beatExplosionForce: 5.5,
        trebleTwinkle: 1.2,
        lifetime: 3.5,
        particleShape: 'circle',
      } as ParticleConfig,
      {
        id: 'layer-wf-techno',
        name: 'Bass Ring Oscilloscope',
        type: 'waveform',
        enabled: true,
        opacity: 1.0,
        blendMode: 'additive',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        mode: 'circular',
        thickness: 3.2,
        amplitude: 1.9,
        sampleCount: 256,
        glowIntensity: 2.2,
        primaryColor: '#f59e0b',
        secondaryColor: '#ffffff',
        colorGradientType: 'radial',
        radius: 1.7,
        depth3D: 0,
        waveformSmoothing: 0.15,
        displacementIntensity: 1.7,
        mirror: false,
      } as WaveformConfig,
    ],
  },

  // 4. LIQUID HOLOGRAM
  {
    id: 'preset-liquid',
    name: 'Liquid Hologram',
    category: 'liquid',
    description: 'Iridescent Simplex-deformed geosphere with concentric frequency rings & dreamy glow',
    isBuiltIn: true,
    updatedAt: Date.now(),
    palette: {
      id: 'pal-liquid',
      name: 'Iridescent Lagoon',
      primary: '#06b6d4',
      secondary: '#8b5cf6',
      accent: '#ec4899',
      background: '#040d1a',
      glow: '#06b6d4',
    },
    reactivity: {
      masterSensitivity: 1.15,
      bassSensitivity: 1.25,
      midSensitivity: 1.35,
      trebleSensitivity: 1.05,
      globalSmoothing: 0.82,
      autoGainControl: true,
    },
    postProcessing: {
      bloomIntensity: 1.5,
      bloomRadius: 0.65,
      bloomThreshold: 0.32,
      chromaticAberration: 0.006,
      grainIntensity: 0.1,
      vignetteIntensity: 0.35,
      toneMappingExposure: 1.2,
    },
    layers: [
      {
        id: 'layer-bg-liquid',
        name: 'Liquid Aurora',
        type: 'background',
        enabled: true,
        opacity: 1.0,
        blendMode: 'normal',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        mode: 'animatedNebula',
        primaryColor: '#040d1a',
        secondaryColor: '#2e1065',
        accentColor: '#06b6d4',
        gradientAngle: 60,
        grainIntensity: 0.15,
        vignetteStrength: 0.45,
        animationSpeed: 0.7,
        audioReactiveZoom: 0.35,
        mediaBlur: 0,
      } as BackgroundConfig,
      {
        id: 'layer-geom-liquid',
        name: 'Morphing Geosphere',
        type: 'geometry',
        enabled: true,
        opacity: 0.95,
        blendMode: 'normal',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1.15, 1.15, 1.15] },
        reactivityMappings: [],
        shape: 'morphingGeosphere',
        shadingStyle: 'metallicPBR',
        subdivisions: 3,
        wireframeThickness: 1.0,
        noiseDistortion: 0.95,
        distortionBand: 'mid',
        rotationSpeed: [0.15, 0.28, 0.1],
        pulseIntensity: 0.75,
        primaryColor: '#06b6d4',
        accentColor: '#8b5cf6',
        metallicRoughness: 0.18,
        glowIntensity: 1.6,
      } as GeometryConfig,
      {
        id: 'layer-spec-liquid',
        name: 'Concentric Rings',
        type: 'spectrum',
        enabled: true,
        opacity: 0.8,
        blendMode: 'additive',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        mode: 'radialRings',
        barCount: 16,
        barWidth: 0.8,
        maxHeight: 1.5,
        innerRadius: 1.4,
        minFrequencyHz: 20,
        maxFrequencyHz: 16000,
        logarithmicScale: true,
        primaryColor: '#06b6d4',
        secondaryColor: '#ec4899',
        barRoundness: 0.5,
        glowIntensity: 1.5,
        mirror: false,
        showPeaks: false,
        peakDecaySpeed: 1.0,
      } as SpectrumConfig,
    ],
  },

  // 5. MINIMALIST STUDIO
  {
    id: 'preset-minimal',
    name: 'Minimalist Studio',
    category: 'minimal',
    description: 'Clean obsidian studio aesthetic with razor-sharp mirrored waveform and understated tape grain',
    isBuiltIn: true,
    updatedAt: Date.now(),
    palette: {
      id: 'pal-minimal',
      name: 'Monochrome Slate',
      primary: '#ffffff',
      secondary: '#64748b',
      accent: '#94a3b8',
      background: '#08090d',
      glow: '#ffffff',
    },
    reactivity: {
      masterSensitivity: 1.0,
      bassSensitivity: 1.0,
      midSensitivity: 0.9,
      trebleSensitivity: 0.95,
      globalSmoothing: 0.86,
      autoGainControl: true,
    },
    postProcessing: {
      bloomIntensity: 0.7,
      bloomRadius: 0.38,
      bloomThreshold: 0.6,
      chromaticAberration: 0.0,
      grainIntensity: 0.22,
      vignetteIntensity: 0.58,
      toneMappingExposure: 1.0,
    },
    layers: [
      {
        id: 'layer-bg-min',
        name: 'Obsidian Studio Background',
        type: 'background',
        enabled: true,
        opacity: 1.0,
        blendMode: 'normal',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        mode: 'solid',
        primaryColor: '#08090d',
        secondaryColor: '#11141c',
        accentColor: '#334155',
        gradientAngle: 90,
        grainIntensity: 0.25,
        vignetteStrength: 0.65,
        animationSpeed: 0.5,
        audioReactiveZoom: 0.0,
        mediaBlur: 0,
      } as BackgroundConfig,
      {
        id: 'layer-wf-min',
        name: 'Mirrored Waveform Line',
        type: 'waveform',
        enabled: true,
        opacity: 0.95,
        blendMode: 'normal',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        reactivityMappings: [],
        mode: 'horizontal',
        thickness: 1.6,
        amplitude: 1.6,
        sampleCount: 512,
        glowIntensity: 0.9,
        primaryColor: '#ffffff',
        secondaryColor: '#64748b',
        colorGradientType: 'linear',
        radius: 2.0,
        depth3D: 0,
        waveformSmoothing: 0.3,
        displacementIntensity: 0.8,
        mirror: true,
      } as WaveformConfig,
    ],
  },
];

/**
 * Constrained Generative Randomizer
 * Generates an aesthetically coherent preset respecting color theory and balanced layer composition
 */
export function generateRandomPreset(): VisualPreset {
  // 1. Pick a random base hue in [0, 360)
  const baseHue = Math.floor(Math.random() * 360);
  const harmonyTypes = ['complementary', 'analogous', 'triadic', 'neon'];
  const harmony = harmonyTypes[Math.floor(Math.random() * harmonyTypes.length)];

  let primaryHue = baseHue;
  let secondaryHue = (baseHue + 180) % 360;
  let accentHue = (baseHue + 90) % 360;

  if (harmony === 'analogous') {
    secondaryHue = (baseHue + 35) % 360;
    accentHue = (baseHue - 35 + 360) % 360;
  } else if (harmony === 'triadic') {
    secondaryHue = (baseHue + 120) % 360;
    accentHue = (baseHue + 240) % 360;
  } else if (harmony === 'neon') {
    primaryHue = 185; // cyan
    secondaryHue = 325; // hot pink
    accentHue = 270; // purple
  }

  const primaryCol = hslToHex(primaryHue, 95, 55);
  const secondaryCol = hslToHex(secondaryHue, 90, 55);
  const accentCol = hslToHex(accentHue, 90, 60);

  // Background modes
  const bgModes: ('solid' | 'gradient' | 'animatedNebula' | 'synthwaveGrid')[] = [
    'solid',
    'gradient',
    'animatedNebula',
    'synthwaveGrid',
  ];
  const chosenBg = bgModes[Math.floor(Math.random() * bgModes.length)];

  // Signal mode: waveform or spectrum
  const signalTypes: ('waveform' | 'spectrum')[] = ['waveform', 'spectrum'];
  const chosenSignal = signalTypes[Math.floor(Math.random() * signalTypes.length)];

  const layers: any[] = [];

  // Always add background
  layers.push({
    id: `rand-bg-${Date.now()}`,
    name: 'Background Layer',
    type: 'background',
    enabled: true,
    opacity: 1.0,
    blendMode: 'normal',
    transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
    reactivityMappings: [],
    mode: chosenBg,
    primaryColor: '#080a12',
    secondaryColor: hslToHex(primaryHue, 70, 15),
    accentColor: accentCol,
    gradientAngle: Math.floor(Math.random() * 360),
    grainIntensity: 0.15 + Math.random() * 0.2,
    vignetteStrength: 0.4 + Math.random() * 0.3,
    animationSpeed: 0.8 + Math.random() * 0.5,
    audioReactiveZoom: 0.3 + Math.random() * 0.3,
    mediaBlur: 0,
  } as BackgroundConfig);

  // Add particles with 70% probability
  if (Math.random() > 0.3) {
    const behaviors: ('ambientVortex' | 'radialExplosion' | 'flowField')[] = [
      'ambientVortex',
      'radialExplosion',
      'flowField',
    ];
    layers.push({
      id: `rand-part-${Date.now()}`,
      name: 'Ambient Particles',
      type: 'particles',
      enabled: true,
      opacity: 0.85,
      blendMode: 'additive',
      transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      reactivityMappings: [],
      count: 800 + Math.floor(Math.random() * 800),
      size: 1.0 + Math.random() * 0.6,
      speed: 0.8 + Math.random() * 0.8,
      behavior: behaviors[Math.floor(Math.random() * behaviors.length)],
      dispersion: 4.0 + Math.random() * 1.5,
      color: primaryCol,
      secondaryColor: secondaryCol,
      connectLines: Math.random() > 0.5,
      connectionDistance: 0.8,
      connectionOpacity: 0.3,
      beatExplosionForce: 2.5 + Math.random() * 2.5,
      trebleTwinkle: 1.5 + Math.random() * 1.0,
      lifetime: 3.5,
      particleShape: 'circle',
    } as ParticleConfig);
  }

  // Add primary visualizer
  if (chosenSignal === 'waveform') {
    const modes: ('horizontal' | 'circular' | 'ribbon3d')[] = ['horizontal', 'circular', 'ribbon3d'];
    layers.push({
      id: `rand-wf-${Date.now()}`,
      name: 'Reactive Waveform',
      type: 'waveform',
      enabled: true,
      opacity: 1.0,
      blendMode: 'additive',
      transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      reactivityMappings: [],
      mode: modes[Math.floor(Math.random() * modes.length)],
      thickness: 2.0 + Math.random() * 1.5,
      amplitude: 1.2 + Math.random() * 0.6,
      sampleCount: 256,
      glowIntensity: 1.5 + Math.random() * 1.5,
      primaryColor: primaryCol,
      secondaryColor: secondaryCol,
      colorGradientType: 'radial',
      radius: 1.6 + Math.random() * 0.4,
      depth3D: 0.8,
      waveformSmoothing: 0.2,
      displacementIntensity: 1.0 + Math.random() * 0.5,
      mirror: Math.random() > 0.5,
    } as WaveformConfig);
  } else {
    layers.push({
      id: `rand-spec-${Date.now()}`,
      name: 'Reactive Spectrum',
      type: 'spectrum',
      enabled: true,
      opacity: 0.95,
      blendMode: 'additive',
      transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      reactivityMappings: [],
      mode: Math.random() > 0.5 ? 'circularRadial' : 'verticalBars',
      barCount: 32 + Math.floor(Math.random() * 32),
      barWidth: 0.7 + Math.random() * 0.2,
      maxHeight: 1.5 + Math.random() * 0.5,
      innerRadius: 1.3,
      minFrequencyHz: 20,
      maxFrequencyHz: 16000,
      logarithmicScale: true,
      primaryColor: primaryCol,
      secondaryColor: secondaryCol,
      barRoundness: 0.5,
      glowIntensity: 1.8,
      mirror: true,
      showPeaks: true,
      peakDecaySpeed: 1.5,
    } as SpectrumConfig);
  }

  return {
    id: `rand-preset-${Date.now()}`,
    name: `Generative ${harmony.toUpperCase()} #${Math.floor(Math.random() * 900 + 100)}`,
    category: 'abstract',
    description: `Aesthetically constrained generative preset with ${harmony} palette`,
    isBuiltIn: false,
    updatedAt: Date.now(),
    palette: {
      id: `pal-rand-${Date.now()}`,
      name: 'Generative Palette',
      primary: primaryCol,
      secondary: secondaryCol,
      accent: accentCol,
      background: '#080a12',
      glow: primaryCol,
    },
    reactivity: {
      masterSensitivity: 1.0 + Math.random() * 0.4,
      bassSensitivity: 1.1 + Math.random() * 0.5,
      midSensitivity: 0.9 + Math.random() * 0.3,
      trebleSensitivity: 1.0 + Math.random() * 0.3,
      globalSmoothing: 0.78 + Math.random() * 0.1,
      autoGainControl: true,
    },
    postProcessing: {
      bloomIntensity: 1.2 + Math.random() * 1.0,
      bloomRadius: 0.5 + Math.random() * 0.3,
      bloomThreshold: 0.3 + Math.random() * 0.2,
      chromaticAberration: 0.003 + Math.random() * 0.004,
      grainIntensity: 0.12 + Math.random() * 0.15,
      vignetteIntensity: 0.35 + Math.random() * 0.25,
      toneMappingExposure: 1.05 + Math.random() * 0.2,
    },
    layers,
  };
}

export function randomizeVisualSection(layer: any): any {
  if (layer.type === 'waveform') {
    const modes = ['circular', 'horizontal', 'ribbon3d'];
    return {
      mode: modes[Math.floor(Math.random() * modes.length)],
      amplitude: parseFloat((0.8 + Math.random() * 1.8).toFixed(1)),
      thickness: parseFloat((1.5 + Math.random() * 3.5).toFixed(1)),
      sampleCount: [128, 256, 384, 512][Math.floor(Math.random() * 4)],
      radius: parseFloat((1.2 + Math.random() * 1.4).toFixed(1)),
      depth3D: parseFloat((0.4 + Math.random() * 1.2).toFixed(1)),
      displacementIntensity: parseFloat((0.5 + Math.random() * 1.8).toFixed(1)),
      mirror: Math.random() > 0.5,
    };
  } else if (layer.type === 'spectrum') {
    const modes = ['verticalBars', 'circularRadial', 'radialRings'];
    return {
      mode: modes[Math.floor(Math.random() * modes.length)],
      barCount: [24, 32, 48, 64][Math.floor(Math.random() * 4)],
      barWidth: parseFloat((0.4 + Math.random() * 0.55).toFixed(2)),
      maxHeight: parseFloat((1.0 + Math.random() * 1.8).toFixed(1)),
      innerRadius: parseFloat((0.8 + Math.random() * 1.4).toFixed(1)),
      showPeaks: Math.random() > 0.4,
      mirror: Math.random() > 0.5,
    };
  } else if (layer.type === 'particles') {
    const behaviors = ['ambientVortex', 'radialExplosion', 'flowField'];
    return {
      behavior: behaviors[Math.floor(Math.random() * behaviors.length)],
      count: Math.floor(600 + Math.random() * 2000),
      size: parseFloat((0.8 + Math.random() * 1.2).toFixed(1)),
      speed: parseFloat((0.6 + Math.random() * 1.4).toFixed(1)),
      dispersion: parseFloat((3.0 + Math.random() * 3.5).toFixed(1)),
      beatExplosionForce: parseFloat((2.0 + Math.random() * 4.5).toFixed(1)),
      trebleTwinkle: parseFloat((1.0 + Math.random() * 2.0).toFixed(1)),
      connectLines: Math.random() > 0.6,
      connectionDistance: parseFloat((0.6 + Math.random() * 1.0).toFixed(1)),
    };
  } else if (layer.type === 'geometry') {
    const shapes = ['icosahedron', 'torusKnot', 'morphingGeosphere', 'cyberCube', 'dodecahedron'];
    const styles = ['wireframe', 'faceted', 'metallicPBR'];
    const bands = ['bass', 'mid', 'treble', 'rms'];
    return {
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      shadingStyle: styles[Math.floor(Math.random() * styles.length)],
      noiseDistortion: parseFloat((0.3 + Math.random() * 1.0).toFixed(2)),
      distortionBand: bands[Math.floor(Math.random() * bands.length)],
      pulseIntensity: parseFloat((0.4 + Math.random() * 1.4).toFixed(2)),
      rotationSpeed: [
        parseFloat((Math.random() * 0.6 - 0.3).toFixed(2)),
        parseFloat((0.2 + Math.random() * 0.8).toFixed(2)),
        parseFloat((Math.random() * 0.4 - 0.2).toFixed(2)),
      ],
    };
  } else if (layer.type === 'background') {
    const modes = ['animatedNebula', 'synthwaveGrid', 'gradient', 'solid'];
    return {
      mode: modes[Math.floor(Math.random() * modes.length)],
      gradientAngle: Math.floor(Math.random() * 360),
      animationSpeed: parseFloat((0.5 + Math.random() * 1.5).toFixed(1)),
      audioReactiveZoom: parseFloat((0.2 + Math.random() * 0.8).toFixed(1)),
      grainIntensity: parseFloat((0.1 + Math.random() * 0.3).toFixed(2)),
      vignetteStrength: parseFloat((0.3 + Math.random() * 0.4).toFixed(2)),
    };
  }
  return {};
}

export function randomizeStyleSection(layer: any): any {
  const baseHue = Math.floor(Math.random() * 360);
  const harmony = Math.random() > 0.5 ? 180 : 120; // complementary or triadic
  const primary = hslToHex(baseHue, 95, 55);
  const secondary = hslToHex((baseHue + harmony) % 360, 90, 55);
  const accent = hslToHex((baseHue + 90) % 360, 90, 60);

  const res: any = {
    opacity: parseFloat((0.8 + Math.random() * 0.2).toFixed(2)),
    blendMode: Math.random() > 0.3 ? 'additive' : 'normal',
  };

  if ('color' in layer) {
    res.color = primary;
    res.secondaryColor = secondary;
  }
  if ('primaryColor' in layer) {
    res.primaryColor = primary;
  }
  if ('secondaryColor' in layer) {
    res.secondaryColor = secondary;
  }
  if ('accentColor' in layer) {
    res.accentColor = accent;
  }

  return res;
}

export function randomizeAudioSection(): any {
  return {
    masterSensitivity: parseFloat((0.9 + Math.random() * 0.8).toFixed(2)),
    bassSensitivity: parseFloat((1.0 + Math.random() * 1.2).toFixed(2)),
    midSensitivity: parseFloat((0.8 + Math.random() * 0.7).toFixed(2)),
    trebleSensitivity: parseFloat((0.8 + Math.random() * 0.8).toFixed(2)),
    globalSmoothing: parseFloat((0.72 + Math.random() * 0.16).toFixed(2)),
  };
}

export function randomizeGlobalOptics(): any {
  return {
    bloomIntensity: parseFloat((0.9 + Math.random() * 1.8).toFixed(1)),
    bloomRadius: parseFloat((0.35 + Math.random() * 0.45).toFixed(2)),
    bloomThreshold: parseFloat((0.2 + Math.random() * 0.3).toFixed(2)),
    grainIntensity: parseFloat((0.1 + Math.random() * 0.25).toFixed(2)),
    vignetteIntensity: parseFloat((0.3 + Math.random() * 0.35).toFixed(2)),
  };
}

function hslToHex(h: number, s: number, l: number): string {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

