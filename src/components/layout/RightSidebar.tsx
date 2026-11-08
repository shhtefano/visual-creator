/**
 * Right Sidebar: Comprehensive Inspector & Customization Panel
 * Guarantees exact property mappings for every layer type with zero desynchronization
 * Audio-Reactive Visual Studio
 */

import React from 'react';
import {
  Sliders,
  Zap,
  Palette,
  Eye,
  Sun,
  Move,
  Activity,
  BarChart2,
  Sparkles,
  Box,
  Image as ImageIcon,
} from 'lucide-react';
import { useStudioStore } from '../../store/useStudioStore';
import {
  BackgroundConfig,
  GeometryConfig,
  ParticleConfig,
  SpectrumConfig,
  Transform3D,
  VisualModuleType,
  WaveformConfig,
} from '../../types/visual';
import {
  randomizeVisualSection,
  randomizeStyleSection,
  randomizeAudioSection,
  randomizeGlobalOptics,
} from '../../presets/defaultPresets';

export const RightSidebar: React.FC = () => {
  const {
    project,
    selectedLayerId,
    activeInspectorTab,
    setActiveInspectorTab,
    updateLayerConfig,
    updateGlobalReactivity,
    updatePostProcessing,
  } = useStudioStore();

  const selectedLayer = project.layers.find((l) => l.id === selectedLayerId);

  const getLayerIcon = (type: VisualModuleType) => {
    switch (type) {
      case 'waveform':
        return <Activity className="w-4 h-4 text-cyan-400" />;
      case 'spectrum':
        return <BarChart2 className="w-4 h-4 text-purple-400" />;
      case 'particles':
        return <Sparkles className="w-4 h-4 text-pink-400" />;
      case 'geometry':
        return <Box className="w-4 h-4 text-amber-400" />;
      case 'background':
        return <ImageIcon className="w-4 h-4 text-emerald-400" />;
    }
  };

  if (!selectedLayer && activeInspectorTab !== 'global') {
    return (
      <aside className="w-80 bg-studio-900 border-l border-studio-800 flex flex-col h-full p-6 text-center select-none text-slate-500 text-xs justify-center items-center">
        <Sliders className="w-8 h-8 mb-2 opacity-30 text-studio-accent" />
        <p className="font-semibold text-slate-400">No Layer Selected</p>
        <p className="mt-1 text-[11px] text-slate-600">Select a layer from the left stack to edit its properties.</p>
        <button
          onClick={() => setActiveInspectorTab('global')}
          className="mt-4 px-3 py-1.5 rounded-lg bg-studio-800 text-slate-300 hover:text-white text-xs font-semibold border border-studio-700"
        >
          Open Global Optics & Bloom
        </button>
      </aside>
    );
  }

  return (
    <aside className="w-80 bg-studio-900 border-l border-studio-800 flex flex-col h-full select-none z-20">
      {/* Header showing Selected Layer Info */}
      {selectedLayer && (
        <div className="px-3.5 py-2.5 bg-studio-950/70 border-b border-studio-800 flex items-center justify-between">
          <div className="flex items-center space-x-2 min-w-0">
            <div className="p-1 rounded bg-studio-900 border border-studio-750">
              {getLayerIcon(selectedLayer.type)}
            </div>
            <div className="truncate">
              <span className="text-xs font-bold text-white block truncate leading-tight">
                {selectedLayer.name}
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                {selectedLayer.type} layer
              </span>
            </div>
          </div>

          <label className="flex items-center space-x-1.5 text-[11px] text-slate-400 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedLayer.enabled}
              onChange={(e) => updateLayerConfig(selectedLayer.id, { enabled: e.target.checked })}
              className="rounded border-studio-700 bg-studio-950 text-studio-accent"
            />
            <span>Active</span>
          </label>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="h-10 border-b border-studio-800 px-2 flex items-center justify-between bg-studio-900">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveInspectorTab('visual')}
            className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition-all ${
              activeInspectorTab === 'visual'
                ? 'bg-studio-800 text-studio-accent shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Visual</span>
          </button>
          <button
            onClick={() => setActiveInspectorTab('appearance')}
            className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition-all ${
              activeInspectorTab === 'appearance'
                ? 'bg-studio-800 text-studio-accent shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Style</span>
          </button>
          <button
            onClick={() => setActiveInspectorTab('reactivity')}
            className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition-all ${
              activeInspectorTab === 'reactivity'
                ? 'bg-studio-800 text-studio-accent shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Audio</span>
          </button>
          <button
            onClick={() => setActiveInspectorTab('global')}
            className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition-all ${
              activeInspectorTab === 'global'
                ? 'bg-studio-800 text-studio-accent shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Global Post-Processing & Optics"
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Global</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs text-slate-300">
        {/* ========================================================================= */}
        {/* TAB 1: VISUAL PARAMETERS                                                   */}
        {/* ========================================================================= */}
        {activeInspectorTab === 'visual' && selectedLayer && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-studio-800 pb-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Visual Geometry
              </span>
              <button
                onClick={() => {
                  const rand = randomizeVisualSection(selectedLayer);
                  updateLayerConfig(selectedLayer.id, rand);
                }}
                className="flex items-center space-x-1.5 px-2 py-1 rounded bg-studio-800 hover:bg-studio-750 text-studio-accent border border-studio-700 font-semibold text-[11px] transition-all active:scale-95 shadow-sm"
                title="Randomize shape and visual properties for this layer"
              >
                <Sparkles className="w-3 h-3 text-studio-accent" />
                <span>Randomize Visual</span>
              </button>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Layer Name
              </label>
              <input
                type="text"
                value={selectedLayer.name}
                onChange={(e) => updateLayerConfig(selectedLayer.id, { name: e.target.value })}
                className="w-full bg-studio-950 border border-studio-800 focus:border-studio-accent rounded-lg px-3 py-1.5 text-xs text-slate-100 outline-none"
              />
            </div>

            {/* WAVEFORM CONTROLS */}
            {selectedLayer.type === 'waveform' && (
              <WaveformControls
                config={selectedLayer as WaveformConfig}
                onChange={(p) => updateLayerConfig(selectedLayer.id, p)}
              />
            )}

            {/* SPECTRUM CONTROLS */}
            {selectedLayer.type === 'spectrum' && (
              <SpectrumControls
                config={selectedLayer as SpectrumConfig}
                onChange={(p) => updateLayerConfig(selectedLayer.id, p)}
              />
            )}

            {/* PARTICLE CONTROLS */}
            {selectedLayer.type === 'particles' && (
              <ParticleControls
                config={selectedLayer as ParticleConfig}
                onChange={(p) => updateLayerConfig(selectedLayer.id, p)}
              />
            )}

            {/* GEOMETRY CONTROLS */}
            {selectedLayer.type === 'geometry' && (
              <GeometryControls
                config={selectedLayer as GeometryConfig}
                onChange={(p) => updateLayerConfig(selectedLayer.id, p)}
              />
            )}

            {/* BACKGROUND CONTROLS */}
            {selectedLayer.type === 'background' && (
              <BackgroundControls
                config={selectedLayer as BackgroundConfig}
                onChange={(p) => updateLayerConfig(selectedLayer.id, p)}
              />
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: STYLE, COLORS & TRANSFORM                                          */}
        {/* ========================================================================= */}
        {activeInspectorTab === 'appearance' && selectedLayer && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-studio-800 pb-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Colors & Material
              </span>
              <button
                onClick={() => {
                  const rand = randomizeStyleSection(selectedLayer);
                  updateLayerConfig(selectedLayer.id, rand);
                }}
                className="flex items-center space-x-1.5 px-2 py-1 rounded bg-studio-800 hover:bg-studio-750 text-pink-400 border border-studio-700 font-semibold text-[11px] transition-all active:scale-95 shadow-sm"
                title="Randomize colors and styling for this layer"
              >
                <Sparkles className="w-3 h-3 text-pink-400" />
                <span>Randomize Style</span>
              </button>
            </div>

            {/* Quick 1-Click Palette Chips */}
            <div>
              <label className="text-[11px] text-slate-400 block mb-1.5 font-medium">Quick Color Palettes</label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { name: 'Neon Cyber', p: '#00f0ff', s: '#ff007f', a: '#a855f7' },
                  { name: 'Cyber Acid', p: '#fcee0a', s: '#ff007f', a: '#00f0ff' },
                  { name: 'Amber Rave', p: '#f59e0b', s: '#ef4444', a: '#94a3b8' },
                  { name: 'Deep Violet', p: '#8b5cf6', s: '#06b6d4', a: '#ec4899' },
                  { name: 'Emerald', p: '#10b981', s: '#06b6d4', a: '#3b82f6' },
                  { name: 'Monochrome', p: '#ffffff', s: '#64748b', a: '#94a3b8' },
                ].map((pal) => (
                  <button
                    key={pal.name}
                    onClick={() => {
                      const update: any = {};
                      if ('color' in selectedLayer) update.color = pal.p;
                      if ('primaryColor' in selectedLayer) update.primaryColor = pal.p;
                      if ('secondaryColor' in selectedLayer) update.secondaryColor = pal.s;
                      if ('accentColor' in selectedLayer) update.accentColor = pal.a;
                      updateLayerConfig(selectedLayer.id, update);
                    }}
                    className="flex items-center space-x-1.5 px-2 py-1.5 rounded-lg bg-studio-950 hover:bg-studio-800 border border-studio-800 hover:border-studio-700 text-left transition-all"
                  >
                    <div className="flex -space-x-1">
                      <div className="w-2.5 h-2.5 rounded-full border border-black" style={{ backgroundColor: pal.p }} />
                      <div className="w-2.5 h-2.5 rounded-full border border-black" style={{ backgroundColor: pal.s }} />
                    </div>
                    <span className="text-[10px] text-slate-300 truncate">{pal.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Color (Handles both 'primaryColor' and 'color' for particles) */}
            {('primaryColor' in selectedLayer || 'color' in selectedLayer) && (
              <div>
                <label className="text-xs mb-1 block">Primary Color</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={
                      (selectedLayer as any).primaryColor ||
                      (selectedLayer as any).color ||
                      '#00f0ff'
                    }
                    onChange={(e) => {
                      if ('color' in selectedLayer) {
                        updateLayerConfig(selectedLayer.id, { color: e.target.value });
                      } else {
                        updateLayerConfig(selectedLayer.id, { primaryColor: e.target.value });
                      }
                    }}
                    className="w-8 h-8 rounded border border-studio-700 bg-transparent cursor-pointer"
                  />
                  <input
                    type="text"
                    value={
                      (selectedLayer as any).primaryColor ||
                      (selectedLayer as any).color ||
                      '#00f0ff'
                    }
                    onChange={(e) => {
                      if ('color' in selectedLayer) {
                        updateLayerConfig(selectedLayer.id, { color: e.target.value });
                      } else {
                        updateLayerConfig(selectedLayer.id, { primaryColor: e.target.value });
                      }
                    }}
                    className="flex-1 bg-studio-950 border border-studio-800 rounded px-2.5 py-1 text-xs font-mono"
                  />
                </div>
              </div>
            )}

            {/* Secondary Color */}
            {'secondaryColor' in selectedLayer && (
              <div>
                <label className="text-xs mb-1 block">Secondary Color</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={(selectedLayer as any).secondaryColor || '#ff007f'}
                    onChange={(e) =>
                      updateLayerConfig(selectedLayer.id, { secondaryColor: e.target.value })
                    }
                    className="w-8 h-8 rounded border border-studio-700 bg-transparent cursor-pointer"
                  />
                  <input
                    type="text"
                    value={(selectedLayer as any).secondaryColor || '#ff007f'}
                    onChange={(e) =>
                      updateLayerConfig(selectedLayer.id, { secondaryColor: e.target.value })
                    }
                    className="flex-1 bg-studio-950 border border-studio-800 rounded px-2.5 py-1 text-xs font-mono"
                  />
                </div>
              </div>
            )}

            {/* Accent Rim Color */}
            {'accentColor' in selectedLayer && (
              <div>
                <label className="text-xs mb-1 block">Accent Rim Color</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={(selectedLayer as any).accentColor || '#a855f7'}
                    onChange={(e) =>
                      updateLayerConfig(selectedLayer.id, { accentColor: e.target.value })
                    }
                    className="w-8 h-8 rounded border border-studio-700 bg-transparent cursor-pointer"
                  />
                  <input
                    type="text"
                    value={(selectedLayer as any).accentColor || '#a855f7'}
                    onChange={(e) =>
                      updateLayerConfig(selectedLayer.id, { accentColor: e.target.value })
                    }
                    className="flex-1 bg-studio-950 border border-studio-800 rounded px-2.5 py-1 text-xs font-mono"
                  />
                </div>
              </div>
            )}

            {/* Opacity */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Layer Opacity</span>
                <span className="font-mono text-studio-accent">
                  {((selectedLayer.opacity ?? 1) * 100).toFixed(0)}%
                </span>
              </div>
              <input
                type="range"
                min="0.0"
                max="1.0"
                step="0.02"
                value={selectedLayer.opacity ?? 1}
                onChange={(e) =>
                  updateLayerConfig(selectedLayer.id, { opacity: parseFloat(e.target.value) })
                }
                className="w-full"
              />
            </div>

            {/* Blend Mode */}
            <div>
              <label className="text-xs mb-1 block">Layer Blend Mode</label>
              <select
                value={selectedLayer.blendMode || 'normal'}
                onChange={(e) =>
                  updateLayerConfig(selectedLayer.id, { blendMode: e.target.value as any })
                }
                className="w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none"
              >
                <option value="normal">Normal</option>
                <option value="additive">Additive (Glowing)</option>
                <option value="screen">Screen</option>
              </select>
            </div>

            {/* Spatial Transform (Position & Scale) */}
            <div className="pt-3 border-t border-studio-800">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                <Move className="w-3.5 h-3.5 text-studio-accent" />
                <span>Spatial Transform</span>
              </div>

              {/* Position X / Y */}
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span>Pos X</span>
                    <span className="font-mono text-studio-accent">
                      {selectedLayer.transform?.position[0].toFixed(1) || '0.0'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="-6.0"
                    max="6.0"
                    step="0.1"
                    value={selectedLayer.transform?.position[0] || 0}
                    onChange={(e) => {
                      const pos: [number, number, number] = [
                        parseFloat(e.target.value),
                        selectedLayer.transform?.position[1] || 0,
                        selectedLayer.transform?.position[2] || 0,
                      ];
                      updateLayerConfig(selectedLayer.id, {
                        transform: { ...selectedLayer.transform, position: pos },
                      });
                    }}
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span>Pos Y</span>
                    <span className="font-mono text-studio-accent">
                      {selectedLayer.transform?.position[1].toFixed(1) || '0.0'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="-6.0"
                    max="6.0"
                    step="0.1"
                    value={selectedLayer.transform?.position[1] || 0}
                    onChange={(e) => {
                      const pos: [number, number, number] = [
                        selectedLayer.transform?.position[0] || 0,
                        parseFloat(e.target.value),
                        selectedLayer.transform?.position[2] || 0,
                      ];
                      updateLayerConfig(selectedLayer.id, {
                        transform: { ...selectedLayer.transform, position: pos },
                      });
                    }}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Scale Uniform */}
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span>Scale</span>
                  <span className="font-mono text-studio-accent">
                    {selectedLayer.transform?.scale[0].toFixed(2) || '1.00'}x
                  </span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3.0"
                  step="0.05"
                  value={selectedLayer.transform?.scale[0] || 1}
                  onChange={(e) => {
                    const s = parseFloat(e.target.value);
                    const scale: [number, number, number] = [s, s, s];
                    updateLayerConfig(selectedLayer.id, {
                      transform: { ...selectedLayer.transform, scale },
                    });
                  }}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: AUDIO REACTIVITY PROFILE                                           */}
        {/* ========================================================================= */}
        {activeInspectorTab === 'reactivity' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-studio-800 pb-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Audio Sensitivities
              </span>
              <button
                onClick={() => {
                  const rand = randomizeAudioSection();
                  updateGlobalReactivity(rand);
                }}
                className="flex items-center space-x-1.5 px-2 py-1 rounded bg-studio-800 hover:bg-studio-750 text-purple-400 border border-studio-700 font-semibold text-[11px] transition-all active:scale-95 shadow-sm"
                title="Randomize audio sensitivities"
              >
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>Randomize Audio</span>
              </button>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Master Sensitivity</span>
                <span className="font-mono text-studio-accent">
                  {project.reactivity.masterSensitivity.toFixed(2)}x
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="3.0"
                step="0.05"
                value={project.reactivity.masterSensitivity}
                onChange={(e) =>
                  updateGlobalReactivity({ masterSensitivity: parseFloat(e.target.value) })
                }
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Bass / Kick Reactivity</span>
                <span className="font-mono text-studio-accent">
                  {project.reactivity.bassSensitivity.toFixed(2)}x
                </span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.05"
                value={project.reactivity.bassSensitivity}
                onChange={(e) =>
                  updateGlobalReactivity({ bassSensitivity: parseFloat(e.target.value) })
                }
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Mid-Range Reactivity</span>
                <span className="font-mono text-studio-accent">
                  {project.reactivity.midSensitivity.toFixed(2)}x
                </span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.05"
                value={project.reactivity.midSensitivity}
                onChange={(e) =>
                  updateGlobalReactivity({ midSensitivity: parseFloat(e.target.value) })
                }
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Treble / Highs Reactivity</span>
                <span className="font-mono text-studio-accent">
                  {project.reactivity.trebleSensitivity.toFixed(2)}x
                </span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.05"
                value={project.reactivity.trebleSensitivity}
                onChange={(e) =>
                  updateGlobalReactivity({ trebleSensitivity: parseFloat(e.target.value) })
                }
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Temporal Smoothing</span>
                <span className="font-mono text-studio-accent">
                  {(project.reactivity.globalSmoothing * 100).toFixed(0)}%
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="0.95"
                step="0.01"
                value={project.reactivity.globalSmoothing}
                onChange={(e) =>
                  updateGlobalReactivity({ globalSmoothing: parseFloat(e.target.value) })
                }
                className="w-full"
              />
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: GLOBAL POST-PROCESSING & BLOOM                                      */}
        {/* ========================================================================= */}
        {activeInspectorTab === 'global' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-studio-800 pb-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Post-Processing & Bloom Glow
              </span>
              <button
                onClick={() => {
                  const rand = randomizeGlobalOptics();
                  updatePostProcessing(rand);
                }}
                className="flex items-center space-x-1.5 px-2 py-1 rounded bg-studio-800 hover:bg-studio-750 text-amber-400 border border-studio-700 font-semibold text-[11px] transition-all active:scale-95 shadow-sm"
                title="Randomize bloom, grain, and optics"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Randomize Optics</span>
              </button>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Bloom Glow Intensity</span>
                <span className="font-mono text-studio-accent">
                  {project.postProcessing.bloomIntensity.toFixed(1)}
                </span>
              </div>
              <input
                type="range"
                min="0.0"
                max="4.0"
                step="0.1"
                value={project.postProcessing.bloomIntensity}
                onChange={(e) =>
                  updatePostProcessing({ bloomIntensity: parseFloat(e.target.value) })
                }
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Bloom Diffusion Radius</span>
                <span className="font-mono text-studio-accent">
                  {project.postProcessing.bloomRadius.toFixed(2)}
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.5"
                step="0.05"
                value={project.postProcessing.bloomRadius}
                onChange={(e) =>
                  updatePostProcessing({ bloomRadius: parseFloat(e.target.value) })
                }
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Film Grain Noise</span>
                <span className="font-mono text-studio-accent">
                  {(project.postProcessing.grainIntensity * 100).toFixed(0)}%
                </span>
              </div>
              <input
                type="range"
                min="0.0"
                max="0.8"
                step="0.02"
                value={project.postProcessing.grainIntensity}
                onChange={(e) =>
                  updatePostProcessing({ grainIntensity: parseFloat(e.target.value) })
                }
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Vignette Border Darkening</span>
                <span className="font-mono text-studio-accent">
                  {(project.postProcessing.vignetteIntensity * 100).toFixed(0)}%
                </span>
              </div>
              <input
                type="range"
                min="0.0"
                max="1.0"
                step="0.05"
                value={project.postProcessing.vignetteIntensity}
                onChange={(e) =>
                  updatePostProcessing({ vignetteIntensity: parseFloat(e.target.value) })
                }
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

/* ========================================================================= */
/* MODULE SPECIFIC PARAMETER CONTROLS                                         */
/* ========================================================================= */

const WaveformControls: React.FC<{
  config: WaveformConfig;
  onChange: (p: Partial<WaveformConfig>) => void;
}> = ({ config, onChange }) => (
  <div className="space-y-3 pt-2">
    <div>
      <label className="text-xs mb-1 block">Geometry Layout</label>
      <select
        value={config.mode}
        onChange={(e) => onChange({ mode: e.target.value as any })}
        className="w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none"
      >
        <option value="circular">Circular Oscilloscope</option>
        <option value="horizontal">Horizontal Wave</option>
        <option value="ribbon3d">3D Ribbon Wave</option>
      </select>
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Amplitude</span>
        <span className="font-mono text-studio-accent">{(config.amplitude || 1.5).toFixed(1)}</span>
      </div>
      <input
        type="range"
        min="0.2"
        max="3.5"
        step="0.1"
        value={config.amplitude || 1.5}
        onChange={(e) => onChange({ amplitude: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Line Thickness</span>
        <span className="font-mono text-studio-accent">{(config.thickness || 2.0).toFixed(1)}px</span>
      </div>
      <input
        type="range"
        min="1.0"
        max="6.0"
        step="0.5"
        value={config.thickness || 2.0}
        onChange={(e) => onChange({ thickness: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Sample Count</span>
        <span className="font-mono text-studio-accent">{config.sampleCount || 256}</span>
      </div>
      <input
        type="range"
        min="64"
        max="512"
        step="64"
        value={config.sampleCount || 256}
        onChange={(e) => onChange({ sampleCount: parseInt(e.target.value) })}
        className="w-full"
      />
    </div>

    {config.mode === 'circular' && (
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span>Circle Radius</span>
          <span className="font-mono text-studio-accent">{(config.radius || 1.8).toFixed(1)}</span>
        </div>
        <input
          type="range"
          min="0.8"
          max="3.5"
          step="0.1"
          value={config.radius || 1.8}
          onChange={(e) => onChange({ radius: parseFloat(e.target.value) })}
          className="w-full"
        />
      </div>
    )}

    {config.mode === 'ribbon3d' && (
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span>3D Ribbon Depth</span>
          <span className="font-mono text-studio-accent">{(config.depth3D || 0.8).toFixed(1)}</span>
        </div>
        <input
          type="range"
          min="0.2"
          max="2.5"
          step="0.1"
          value={config.depth3D || 0.8}
          onChange={(e) => onChange({ depth3D: parseFloat(e.target.value) })}
          className="w-full"
        />
      </div>
    )}

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Displacement Intensity</span>
        <span className="font-mono text-studio-accent">{(config.displacementIntensity || 1.0).toFixed(1)}</span>
      </div>
      <input
        type="range"
        min="0.0"
        max="3.0"
        step="0.1"
        value={config.displacementIntensity || 1.0}
        onChange={(e) => onChange({ displacementIntensity: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>
  </div>
);

const SpectrumControls: React.FC<{
  config: SpectrumConfig;
  onChange: (p: Partial<SpectrumConfig>) => void;
}> = ({ config, onChange }) => (
  <div className="space-y-3 pt-2">
    <div>
      <label className="text-xs mb-1 block">Display Mode</label>
      <select
        value={config.mode}
        onChange={(e) => onChange({ mode: e.target.value as any })}
        className="w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none"
      >
        <option value="verticalBars">Vertical Equalizer Bars</option>
        <option value="circularRadial">Circular Radial Spikes</option>
        <option value="radialRings">Concentric Frequency Rings</option>
      </select>
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Bar Count</span>
        <span className="font-mono text-studio-accent">{config.barCount}</span>
      </div>
      <input
        type="range"
        min="16"
        max="96"
        step="8"
        value={config.barCount}
        onChange={(e) => onChange({ barCount: parseInt(e.target.value) })}
        className="w-full"
      />
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Bar Width Ratio</span>
        <span className="font-mono text-studio-accent">{((config.barWidth || 0.8) * 100).toFixed(0)}%</span>
      </div>
      <input
        type="range"
        min="0.2"
        max="1.0"
        step="0.05"
        value={config.barWidth || 0.8}
        onChange={(e) => onChange({ barWidth: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Max Height</span>
        <span className="font-mono text-studio-accent">{config.maxHeight.toFixed(1)}</span>
      </div>
      <input
        type="range"
        min="0.5"
        max="3.5"
        step="0.1"
        value={config.maxHeight}
        onChange={(e) => onChange({ maxHeight: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>

    {config.mode === 'circularRadial' && (
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span>Inner Circle Radius</span>
          <span className="font-mono text-studio-accent">{(config.innerRadius || 1.2).toFixed(1)}</span>
        </div>
        <input
          type="range"
          min="0.5"
          max="3.0"
          step="0.1"
          value={config.innerRadius || 1.2}
          onChange={(e) => onChange({ innerRadius: parseFloat(e.target.value) })}
          className="w-full"
        />
      </div>
    )}

    <div className="flex items-center space-x-2 pt-1">
      <input
        type="checkbox"
        id="showPeaks"
        checked={config.showPeaks}
        onChange={(e) => onChange({ showPeaks: e.target.checked })}
        className="rounded border-studio-700 bg-studio-950 text-studio-accent"
      />
      <label htmlFor="showPeaks" className="text-xs text-slate-300 cursor-pointer">
        Show floating peak indicators
      </label>
    </div>
  </div>
);

const ParticleControls: React.FC<{
  config: ParticleConfig;
  onChange: (p: Partial<ParticleConfig>) => void;
}> = ({ config, onChange }) => (
  <div className="space-y-3 pt-2">
    <div>
      <label className="text-xs mb-1 block">Motion Pattern</label>
      <select
        value={config.behavior || 'ambientVortex'}
        onChange={(e) => onChange({ behavior: e.target.value as any })}
        className="w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none"
      >
        <option value="ambientVortex">Ambient Vortex Spiral</option>
        <option value="radialExplosion">Bass Kick Shockwaves</option>
        <option value="flowField">3D Noise Flow Field</option>
      </select>
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Particle Count</span>
        <span className="font-mono text-studio-accent">{config.count || 1000}</span>
      </div>
      <input
        type="range"
        min="100"
        max="4000"
        step="100"
        value={config.count || 1000}
        onChange={(e) => onChange({ count: parseInt(e.target.value) })}
        className="w-full"
      />
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Particle Size</span>
        <span className="font-mono text-studio-accent">{(config.size || 1.2).toFixed(1)}</span>
      </div>
      <input
        type="range"
        min="0.2"
        max="3.5"
        step="0.1"
        value={config.size || 1.2}
        onChange={(e) => onChange({ size: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Movement Speed</span>
        <span className="font-mono text-studio-accent">{(config.speed || 1.0).toFixed(1)}</span>
      </div>
      <input
        type="range"
        min="0.2"
        max="3.0"
        step="0.1"
        value={config.speed || 1.0}
        onChange={(e) => onChange({ speed: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Spatial Dispersion</span>
        <span className="font-mono text-studio-accent">{(config.dispersion || 4.5).toFixed(1)}</span>
      </div>
      <input
        type="range"
        min="1.0"
        max="8.0"
        step="0.5"
        value={config.dispersion || 4.5}
        onChange={(e) => onChange({ dispersion: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Bass Explosion Impulse</span>
        <span className="font-mono text-studio-accent">{(config.beatExplosionForce || 3.5).toFixed(1)}</span>
      </div>
      <input
        type="range"
        min="0.0"
        max="8.0"
        step="0.5"
        value={config.beatExplosionForce || 3.5}
        onChange={(e) => onChange({ beatExplosionForce: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Treble Twinkle Shimmer</span>
        <span className="font-mono text-studio-accent">{(config.trebleTwinkle || 1.5).toFixed(1)}</span>
      </div>
      <input
        type="range"
        min="0.0"
        max="4.0"
        step="0.2"
        value={config.trebleTwinkle || 1.5}
        onChange={(e) => onChange({ trebleTwinkle: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>

    <div className="flex items-center space-x-2 pt-1">
      <input
        type="checkbox"
        id="connectLines"
        checked={config.connectLines || false}
        onChange={(e) => onChange({ connectLines: e.target.checked })}
        className="rounded border-studio-700 bg-studio-950 text-studio-accent"
      />
      <label htmlFor="connectLines" className="text-xs text-slate-300 cursor-pointer">
        Enable Constellation Connection Lines
      </label>
    </div>
  </div>
);

const GeometryControls: React.FC<{
  config: GeometryConfig;
  onChange: (p: Partial<GeometryConfig>) => void;
}> = ({ config, onChange }) => (
  <div className="space-y-3 pt-2">
    <div>
      <label className="text-xs mb-1 block">Geometric Polyhedron</label>
      <select
        value={config.shape}
        onChange={(e) => onChange({ shape: e.target.value as any })}
        className="w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none"
      >
        <option value="icosahedron">Icosahedron</option>
        <option value="torusKnot">Torus Knot</option>
        <option value="morphingGeosphere">Morphing Geosphere</option>
        <option value="dodecahedron">Dodecahedron</option>
        <option value="cyberCube">Cyber Cube</option>
        <option value="sphere">Sphere</option>
      </select>
    </div>

    <div>
      <label className="text-xs mb-1 block">Material Shading</label>
      <select
        value={config.shadingStyle}
        onChange={(e) => onChange({ shadingStyle: e.target.value as any })}
        className="w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none"
      >
        <option value="wireframe">Wireframe Holographic</option>
        <option value="faceted">Faceted Low-Poly</option>
        <option value="metallicPBR">Metallic PBR</option>
      </select>
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Audio Noise Distortion</span>
        <span className="font-mono text-studio-accent">{(config.noiseDistortion || 0.6).toFixed(2)}</span>
      </div>
      <input
        type="range"
        min="0.0"
        max="1.5"
        step="0.05"
        value={config.noiseDistortion || 0.6}
        onChange={(e) => onChange({ noiseDistortion: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>

    <div>
      <label className="text-xs mb-1 block">Distortion Driving Band</label>
      <select
        value={config.distortionBand || 'bass'}
        onChange={(e) => onChange({ distortionBand: e.target.value as any })}
        className="w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none"
      >
        <option value="bass">Bass / Kick</option>
        <option value="mid">Mid-Range / Synths</option>
        <option value="treble">Treble / Cymbals</option>
        <option value="rms">Overall Energy (RMS)</option>
      </select>
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Bass Pulse Intensity</span>
        <span className="font-mono text-studio-accent">{(config.pulseIntensity || 0.7).toFixed(2)}</span>
      </div>
      <input
        type="range"
        min="0.0"
        max="2.0"
        step="0.1"
        value={config.pulseIntensity || 0.7}
        onChange={(e) => onChange({ pulseIntensity: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Rotation Speed</span>
        <span className="font-mono text-studio-accent">{(config.rotationSpeed?.[1] || 0.4).toFixed(2)}</span>
      </div>
      <input
        type="range"
        min="0.0"
        max="1.5"
        step="0.05"
        value={config.rotationSpeed?.[1] || 0.4}
        onChange={(e) => {
          const sp = parseFloat(e.target.value);
          onChange({ rotationSpeed: [sp * 0.5, sp, sp * 0.25] });
        }}
        className="w-full"
      />
    </div>
  </div>
);

const BackgroundControls: React.FC<{
  config: BackgroundConfig;
  onChange: (p: Partial<BackgroundConfig>) => void;
}> = ({ config, onChange }) => (
  <div className="space-y-3 pt-2">
    <div>
      <label className="text-xs mb-1 block">Background Mode</label>
      <select
        value={config.mode}
        onChange={(e) => onChange({ mode: e.target.value as any })}
        className="w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none"
      >
        <option value="animatedNebula">Animated Cosmic Nebula</option>
        <option value="synthwaveGrid">Synthwave Cyber Grid</option>
        <option value="gradient">Directional Gradient</option>
        <option value="solid">Minimal Solid Color</option>
      </select>
    </div>

    {config.mode === 'gradient' && (
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span>Gradient Angle</span>
          <span className="font-mono text-studio-accent">{(config.gradientAngle || 0)}°</span>
        </div>
        <input
          type="range"
          min="0"
          max="360"
          step="5"
          value={config.gradientAngle || 0}
          onChange={(e) => onChange({ gradientAngle: parseInt(e.target.value) })}
          className="w-full"
        />
      </div>
    )}

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Animation Speed</span>
        <span className="font-mono text-studio-accent">{(config.animationSpeed || 1.0).toFixed(1)}x</span>
      </div>
      <input
        type="range"
        min="0.1"
        max="3.0"
        step="0.1"
        value={config.animationSpeed || 1.0}
        onChange={(e) => onChange({ animationSpeed: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Audio Reactive Zoom Pulse</span>
        <span className="font-mono text-studio-accent">{(config.audioReactiveZoom || 0.4).toFixed(1)}</span>
      </div>
      <input
        type="range"
        min="0.0"
        max="1.5"
        step="0.1"
        value={config.audioReactiveZoom || 0.4}
        onChange={(e) => onChange({ audioReactiveZoom: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Film Grain Intensity</span>
        <span className="font-mono text-studio-accent">
          {((config.grainIntensity || 0.2) * 100).toFixed(0)}%
        </span>
      </div>
      <input
        type="range"
        min="0.0"
        max="0.8"
        step="0.02"
        value={config.grainIntensity || 0.2}
        onChange={(e) => onChange({ grainIntensity: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>

    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>Vignette Edge Darkening</span>
        <span className="font-mono text-studio-accent">
          {((config.vignetteStrength || 0.5) * 100).toFixed(0)}%
        </span>
      </div>
      <input
        type="range"
        min="0.0"
        max="1.0"
        step="0.05"
        value={config.vignetteStrength || 0.5}
        onChange={(e) => onChange({ vignetteStrength: parseFloat(e.target.value) })}
        className="w-full"
      />
    </div>
  </div>
);
