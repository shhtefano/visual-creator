/**
 * Core Visual Engine
 * Orchestrates WebGL rendering, Three.js scene graph, modular layer stack,
 * cinematic UnrealBloomPass post-processing, and aspect ratio framing
 * Audio-Reactive Visual Studio
 */

import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { AudioAnalysisData } from '../types/audio';
import { AspectRatio } from '../types/export';
import { GlobalPostProcessingSettings } from '../types/presets';
import { IVisualModule, RenderContext, VisualLayerConfig } from '../types/visual';
import { BackgroundModule } from './modules/BackgroundModule';
import { GeometryModule } from './modules/GeometryModule';
import { ParticleModule } from './modules/ParticleModule';
import { SpectrumModule } from './modules/SpectrumModule';
import { WaveformModule } from './modules/WaveformModule';

export class VisualEngine {
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private container: HTMLElement | null = null;
  private canvas: HTMLCanvasElement | null = null;

  // Post-processing pipeline
  private composer: EffectComposer | null = null;
  private bloomPass: UnrealBloomPass | null = null;
  private postProcessingSettings: GlobalPostProcessingSettings = {
    bloomIntensity: 1.5,
    bloomRadius: 0.5,
    bloomThreshold: 0.3,
    chromaticAberration: 0.005,
    grainIntensity: 0.15,
    vignetteIntensity: 0.4,
    toneMappingExposure: 1.1,
  };

  // Active module instances mapped by layer id
  private modulesMap = new Map<string, IVisualModule>();
  private activeLayers: VisualLayerConfig[] = [];

  private clock = new THREE.Clock();
  private width = 1280;
  private height = 720;
  private savedWidth = 1280;
  private savedHeight = 720;
  private pixelRatio = 1;
  private aspectRatio: AspectRatio = '16:9';
  private isExporting = false;

  // Interactive camera orbit state
  private cameraAngleX = 0;
  private cameraAngleY = 0;
  private targetAngleX = 0;
  private targetAngleY = 0;
  private cameraDistance = 7.0;
  private targetDistance = 7.0;

  // Ambient & directional lights for 3D geometry
  private ambientLight: THREE.AmbientLight;
  private dirLight1: THREE.DirectionalLight;
  private dirLight2: THREE.PointLight;

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, 16 / 9, 0.1, 1000);
    this.camera.position.set(0, 0, 7.0);

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(this.ambientLight);

    this.dirLight1 = new THREE.DirectionalLight(0x00f0ff, 1.2);
    this.dirLight1.position.set(5, 5, 5);
    this.scene.add(this.dirLight1);

    this.dirLight2 = new THREE.PointLight(0xff007f, 1.5, 20);
    this.dirLight2.position.set(-5, -3, 3);
    this.scene.add(this.dirLight2);
  }

  /**
   * Mount the WebGL canvas into a container element and initialize EffectComposer
   */
  public mount(container: HTMLElement, canvas?: HTMLCanvasElement): void {
    this.container = container;
    const rect = container.getBoundingClientRect();
    this.width = Math.max(300, Math.floor(rect.width || 1280));
    this.height = Math.max(200, Math.floor(rect.height || 720));
    this.savedWidth = this.width;
    this.savedHeight = this.height;
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    if (canvas) {
      this.canvas = canvas;
      this.renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance',
      });
    } else {
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance',
      });
      this.canvas = this.renderer.domElement;
      container.appendChild(this.canvas);
    }

    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.setClearColor(0x000000, 0);

    this.setupPostProcessing(this.width, this.height);
    this.updateCameraAspect();

    // Initialize all existing modules with the render context
    const context = this.getRenderContext();
    for (const mod of this.modulesMap.values()) {
      mod.init(context);
    }

    this.clock.start();
  }

  private setupPostProcessing(width: number, height: number): void {
    if (!this.renderer) return;

    try {
      this.composer = new EffectComposer(this.renderer);
      this.composer.setSize(width, height);

      const renderPass = new RenderPass(this.scene, this.camera);
      this.composer.addPass(renderPass);

      this.bloomPass = new UnrealBloomPass(
        new THREE.Vector2(width, height),
        this.postProcessingSettings.bloomIntensity,
        this.postProcessingSettings.bloomRadius,
        this.postProcessingSettings.bloomThreshold
      );
      this.composer.addPass(this.bloomPass);

      const outputPass = new OutputPass();
      this.composer.addPass(outputPass);
    } catch (err) {
      console.warn('Post-processing setup failed, using standard rendering:', err);
      this.composer = null;
      this.bloomPass = null;
    }
  }

  public updatePostProcessing(settings: Partial<GlobalPostProcessingSettings>): void {
    this.postProcessingSettings = { ...this.postProcessingSettings, ...settings };
    if (this.bloomPass) {
      if (settings.bloomIntensity !== undefined) {
        this.bloomPass.strength = settings.bloomIntensity;
      }
      if (settings.bloomRadius !== undefined) {
        this.bloomPass.radius = settings.bloomRadius;
      }
      if (settings.bloomThreshold !== undefined) {
        this.bloomPass.threshold = settings.bloomThreshold;
      }
    }
  }

  public getRenderContext(): RenderContext {
    return {
      scene: this.scene,
      camera: this.camera,
      renderer: this.renderer,
      width: this.width,
      height: this.height,
      aspectRatio: this.camera.aspect,
    };
  }

  public getCanvas(): HTMLCanvasElement | null {
    return this.canvas;
  }

  public setAspectRatio(aspect: AspectRatio): void {
    this.aspectRatio = aspect;
    this.updateCameraAspect();
  }

  private updateCameraAspect(): void {
    let targetAspect = 16 / 9;
    if (this.aspectRatio === '9:16') targetAspect = 9 / 16;
    else if (this.aspectRatio === '1:1') targetAspect = 1.0;

    this.camera.aspect = targetAspect;
    this.camera.updateProjectionMatrix();
  }

  public resize(width: number, height: number): void {
    if (this.isExporting) return;
    this.width = width;
    this.height = height;
    this.savedWidth = width;
    this.savedHeight = height;

    if (this.renderer) {
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(this.pixelRatio);
    }

    if (this.composer) {
      this.composer.setSize(width, height);
    }
    if (this.bloomPass) {
      this.bloomPass.resolution.set(width, height);
    }

    this.updateCameraAspect();

    for (const mod of this.modulesMap.values()) {
      mod.resize(width, height, this.pixelRatio);
    }
  }

  /**
   * Set dedicated deterministic export mode with exact 1.0 pixel ratio
   */
  public setExportMode(exporting: boolean, width?: number, height?: number): void {
    this.isExporting = exporting;
    if (!this.renderer) return;

    if (exporting && width && height) {
      this.width = width;
      this.height = height;
      this.renderer.setPixelRatio(1.0);
      this.renderer.setSize(width, height, false);

      if (this.composer) {
        this.composer.setPixelRatio(1.0);
        this.composer.setSize(width, height);
      }
      if (this.bloomPass) {
        this.bloomPass.resolution.set(width, height);
      }

      this.updateCameraAspect();

      for (const mod of this.modulesMap.values()) {
        mod.resize(width, height, 1.0);
      }
    } else {
      // Restore preview mode
      this.width = this.savedWidth;
      this.height = this.savedHeight;
      this.renderer.setPixelRatio(this.pixelRatio);
      this.renderer.setSize(this.savedWidth, this.savedHeight);

      if (this.composer) {
        this.composer.setPixelRatio(this.pixelRatio);
        this.composer.setSize(this.savedWidth, this.savedHeight);
      }
      if (this.bloomPass) {
        this.bloomPass.resolution.set(this.savedWidth, this.savedHeight);
      }

      this.updateCameraAspect();

      for (const mod of this.modulesMap.values()) {
        mod.resize(this.savedWidth, this.savedHeight, this.pixelRatio);
      }
    }
  }

  /**
   * Factory method to create concrete module instance from configuration
   */
  private createModuleInstance(config: VisualLayerConfig): IVisualModule {
    switch (config.type) {
      case 'waveform':
        return new WaveformModule(config);
      case 'spectrum':
        return new SpectrumModule(config);
      case 'particles':
        return new ParticleModule(config);
      case 'geometry':
        return new GeometryModule(config);
      case 'background':
        return new BackgroundModule(config);
      default:
        return new WaveformModule(config as any);
    }
  }

  /**
   * Synchronize layer stack with Zustand store without recreating unaffected modules
   */
  public syncLayers(layers: VisualLayerConfig[]): void {
    this.activeLayers = layers;
    const currentIds = new Set(layers.map((l) => l.id));

    // 1. Remove obsolete modules
    for (const [id, mod] of this.modulesMap.entries()) {
      if (!currentIds.has(id)) {
        mod.dispose();
        this.modulesMap.delete(id);
      }
    }

    // 2. Add new modules or update existing
    const context = this.getRenderContext();
    for (const config of layers) {
      let mod = this.modulesMap.get(config.id);

      if (!mod || mod.config.type !== config.type) {
        if (mod) {
          mod.dispose();
          this.modulesMap.delete(config.id);
        }
        mod = this.createModuleInstance(config);
        if (this.renderer) {
          mod.init(context);
        }
        this.modulesMap.set(config.id, mod);
      } else {
        mod.updateConfig(config);
      }
    }
  }

  /**
   * Real-time preview render frame
   */
  public renderPreviewFrame(audioData: AudioAnalysisData): void {
    if (!this.renderer || this.isExporting) return;

    const deltaTime = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // Subtle audio reaction on lights and camera
    const bass = audioData.bands?.bass || 0;
    this.dirLight1.intensity = 1.0 + bass * 0.8;
    this.dirLight2.intensity = 1.2 + (audioData.bands?.treble || 0) * 1.0;

    // Update each layer module
    for (const config of this.activeLayers) {
      const mod = this.modulesMap.get(config.id);
      if (mod && config.enabled) {
        mod.update(audioData, deltaTime, elapsedTime);
      }
    }

    if (this.composer && this.postProcessingSettings.bloomIntensity > 0.05) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  /**
   * Deterministic offline frame render for video export
   */
  public renderOfflineFrame(
    audioData: AudioAnalysisData,
    timestamp: number,
    frameIndex: number,
    fps = 60
  ): void {
    if (!this.renderer) return;

    const deltaTime = 1.0 / fps;
    const elapsedTime = timestamp;

    const bass = audioData.bands?.bass || 0;
    this.dirLight1.intensity = 1.0 + bass * 0.8;
    this.dirLight2.intensity = 1.2 + (audioData.bands?.treble || 0) * 1.0;

    for (const config of this.activeLayers) {
      const mod = this.modulesMap.get(config.id);
      if (mod && config.enabled) {
        mod.update(audioData, deltaTime, elapsedTime);
      }
    }

    if (this.composer && this.postProcessingSettings.bloomIntensity > 0.05) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  public dispose(): void {
    for (const mod of this.modulesMap.values()) {
      mod.dispose();
    }
    this.modulesMap.clear();

    if (this.composer) {
      this.composer.dispose();
      this.composer = null;
    }

    if (this.renderer) {
      this.renderer.dispose();
      if (this.canvas && this.canvas.parentElement) {
        this.canvas.parentElement.removeChild(this.canvas);
      }
      this.renderer = null;
      this.canvas = null;
    }
  }
}

// Global visual engine singleton
export const visualEngine = new VisualEngine();
