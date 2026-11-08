/**
 * Left Sidebar: Visual Layers Stack & Composition
 * Audio-Reactive Visual Studio
 */

import React, { useState } from 'react';
import {
  Layers,
  Plus,
  Eye,
  EyeOff,
  Trash2,
  Copy,
  ChevronUp,
  ChevronDown,
  Activity,
  BarChart2,
  Sparkles,
  Box,
  Image as ImageIcon,
} from 'lucide-react';
import { useStudioStore } from '../../store/useStudioStore';
import { VisualModuleType } from '../../types/visual';

export const LeftSidebar: React.FC = () => {
  const {
    project,
    selectedLayerId,
    setSelectedLayerId,
    addLayer,
    removeLayer,
    duplicateLayer,
    reorderLayers,
    toggleLayerEnabled,
  } = useStudioStore();

  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);

  const getLayerIcon = (type: VisualModuleType) => {
    switch (type) {
      case 'waveform':
        return <Activity className="w-3.5 h-3.5 text-cyan-400" />;
      case 'spectrum':
        return <BarChart2 className="w-3.5 h-3.5 text-purple-400" />;
      case 'particles':
        return <Sparkles className="w-3.5 h-3.5 text-pink-400" />;
      case 'geometry':
        return <Box className="w-3.5 h-3.5 text-amber-400" />;
      case 'background':
        return <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />;
    }
  };

  const handleAdd = (type: VisualModuleType) => {
    addLayer(type);
    setIsAddMenuOpen(false);
  };

  return (
    <aside className="w-64 bg-studio-900 border-r border-studio-800 flex flex-col h-full select-none z-20">
      {/* Header */}
      <div className="h-11 px-3.5 border-b border-studio-800 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-200 tracking-wider">
          <Layers className="w-4 h-4 text-studio-accent" />
          <span>VISUAL LAYERS</span>
          <span className="text-[10px] bg-studio-800 text-slate-400 px-1.5 py-0.2 rounded-full">
            {project.layers.length}
          </span>
        </div>

        {/* Add Layer Menu */}
        <div className="relative">
          <button
            onClick={() => setIsAddMenuOpen(!isAddMenuOpen)}
            className="flex items-center space-x-1 bg-studio-800 hover:bg-studio-700 text-slate-200 hover:text-white px-2 py-1 rounded text-xs font-semibold transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-studio-accent" />
            <span>Add</span>
          </button>

          {isAddMenuOpen && (
            <div className="absolute right-0 mt-1.5 w-48 bg-studio-850 border border-studio-700 rounded-lg shadow-xl py-1 z-50">
              <button
                onClick={() => handleAdd('waveform')}
                className="w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2"
              >
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Waveform Visualizer</span>
              </button>
              <button
                onClick={() => handleAdd('spectrum')}
                className="w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2"
              >
                <BarChart2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Frequency Spectrum</span>
              </button>
              <button
                onClick={() => handleAdd('particles')}
                className="w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span>Particle System</span>
              </button>
              <button
                onClick={() => handleAdd('geometry')}
                className="w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2"
              >
                <Box className="w-3.5 h-3.5 text-amber-400" />
                <span>3D Geometry</span>
              </button>
              <button
                onClick={() => handleAdd('background')}
                className="w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2"
              >
                <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Background Effect</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Layer Stack (Reversed display: top layer first like Photoshop/Blender) */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
        {project.layers.length === 0 ? (
          <div className="text-center py-10 px-4 text-slate-500 text-xs">
            No layers active. Click "+ Add" above to add a visual module.
          </div>
        ) : (
          project.layers
            .map((layer, index) => ({ layer, index }))
            .reverse()
            .map(({ layer, index }) => {
              const isSelected = selectedLayerId === layer.id;

              return (
                <div
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`group relative rounded-lg border px-2.5 py-2 flex items-center justify-between cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-studio-800/90 border-studio-accent/70 shadow-sm shadow-studio-accent/10'
                      : 'bg-studio-850/60 hover:bg-studio-850 border-studio-800/80 hover:border-studio-750'
                  }`}
                >
                  {/* Left: Icon & Name */}
                  <div className="flex items-center space-x-2.5 min-w-0 flex-1">
                    <div className="p-1 rounded bg-studio-950/60 border border-studio-800">
                      {getLayerIcon(layer.type)}
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-semibold text-slate-200 truncate leading-tight">
                        {layer.name}
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                        {layer.type}
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions (Visibility, Reorder, Duplicate, Delete) */}
                  <div className="flex items-center space-x-1 text-slate-400">
                    {/* Reorder Buttons */}
                    <div className="flex flex-col">
                      <button
                        disabled={index === project.layers.length - 1}
                        onClick={(e) => {
                          e.stopPropagation();
                          reorderLayers(index, index + 1);
                        }}
                        title="Move layer up"
                        className="p-0.5 hover:text-white disabled:opacity-20 transition-opacity"
                      >
                        <ChevronUp className="w-3 h-3" />
                      </button>
                      <button
                        disabled={index === 0}
                        onClick={(e) => {
                          e.stopPropagation();
                          reorderLayers(index, index - 1);
                        }}
                        title="Move layer down"
                        className="p-0.5 hover:text-white disabled:opacity-20 transition-opacity"
                      >
                        <ChevronDown className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Visibility Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLayerEnabled(layer.id);
                      }}
                      title={layer.enabled ? 'Hide layer' : 'Show layer'}
                      className={`p-1 rounded hover:bg-studio-750 transition-colors ${
                        layer.enabled ? 'text-slate-300 hover:text-white' : 'text-slate-600'
                      }`}
                    >
                      {layer.enabled ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    </button>

                    {/* Duplicate */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        duplicateLayer(layer.id);
                      }}
                      title="Duplicate layer"
                      className="p-1 rounded hover:bg-studio-750 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Copy className="w-3 h-3" />
                    </button>

                    {/* Delete */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeLayer(layer.id);
                      }}
                      title="Delete layer"
                      className="p-1 rounded hover:bg-red-950/60 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })
        )}
      </div>
    </aside>
  );
};

