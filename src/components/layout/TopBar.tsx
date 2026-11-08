/**
 * Studio Top Toolbar
 * Audio-Reactive Visual Studio
 */

import React, { useRef, useState } from 'react';
import {
  Sparkles,
  Download,
  Sliders,
  Music,
  Save,
  Layers,
  FileDown,
  FileUp,
  Trash2,
} from 'lucide-react';
import { useStudioStore } from '../../store/useStudioStore';
import { AspectRatio } from '../../types/export';
import { visualEngine } from '../../visual/VisualEngine';
import { PresetModal } from '../presets/PresetModal';

export const TopBar: React.FC = () => {
  const {
    project,
    availablePresets,
    activePreset,
    applyPreset,
    randomizeParameters,
    setAspectRatio,
    setProjectName,
    setIsExportModalOpen,
    audioMetadata,
  } = useStudioStore();

  const [isPresetModalOpen, setIsPresetModalOpen] = useState(false);
  const [presetModalMode, setPresetModalMode] = useState<'save' | 'delete'>('save');

  const jsonInputRef = useRef<HTMLInputElement>(null);

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    applyPreset(e.target.value);
  };

  const handleRatioChange = (ratio: AspectRatio) => {
    setAspectRatio(ratio);
  };

  const handleOpenSaveModal = () => {
    setPresetModalMode('save');
    setIsPresetModalOpen(true);
  };

  const handleOpenDeleteModal = () => {
    setPresetModalMode('delete');
    setIsPresetModalOpen(true);
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(project, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = `${project.name.replace(/\s+/g, '_')}_project.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const loaded = JSON.parse(event.target?.result as string);
        if (loaded && loaded.layers) {
          useStudioStore.setState({
            project: loaded,
            selectedLayerId: loaded.layers[0]?.id || null,
          });
          visualEngine.syncLayers(loaded.layers);
          visualEngine.updatePostProcessing(loaded.postProcessing || {});
        }
      } catch (err) {
        alert('Invalid project JSON file');
      }
    };
    reader.readAsText(file);
  };

  return (
    <header className="h-14 bg-studio-900 border-b border-studio-800 px-4 flex items-center justify-between select-none z-30">
      <input
        ref={jsonInputRef}
        type="file"
        accept=".json,application/json"
        onChange={handleImportJson}
        className="hidden"
      />

      {/* Brand & Project Name */}
      <div className="flex items-center space-x-3.5">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-studio-accent to-pink-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Layers className="w-4 h-4 text-black font-bold" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-wider text-slate-100 flex items-center gap-1.5">
              <span>VISUAL</span>
              <span className="text-studio-accent">STUDIO</span>
            </h1>
          </div>
        </div>

        <div className="h-5 w-px bg-studio-750" />

        <input
          type="text"
          value={project.name}
          onChange={(e) => setProjectName(e.target.value)}
          className="bg-transparent hover:bg-studio-850 focus:bg-studio-850 px-2.5 py-1 rounded text-xs font-medium text-slate-300 hover:text-slate-100 focus:text-white border border-transparent focus:border-studio-700 transition-all outline-none w-44"
          placeholder="Project Title"
        />

        {/* Project Import / Export JSON */}
        <div className="flex items-center space-x-1 border-l border-studio-800 pl-2">
          <button
            onClick={() => jsonInputRef.current?.click()}
            title="Import Project from JSON file"
            className="p-1.5 rounded hover:bg-studio-800 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <FileUp className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleExportJson}
            title="Export Project to JSON file"
            className="p-1.5 rounded hover:bg-studio-800 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <FileDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {audioMetadata && (
          <div className="hidden lg:flex items-center space-x-1.5 text-xs text-studio-accent bg-studio-950/80 px-2.5 py-1 rounded-full border border-studio-800">
            <Music className="w-3 h-3 animate-pulse" />
            <span className="truncate max-w-[160px]">{audioMetadata.fileName}</span>
          </div>
        )}
      </div>

      {/* Center: Presets & Randomizer */}
      <div className="flex items-center space-x-2.5">
        <div className="flex items-center space-x-1.5 bg-studio-950 px-2.5 py-1 rounded-lg border border-studio-800">
          <Sliders className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-xs text-slate-400 font-medium">Template:</span>
          <select
            value={activePreset?.id || ''}
            onChange={handlePresetChange}
            aria-label="Preset Selection"
            className="bg-transparent text-xs font-bold text-studio-accent outline-none cursor-pointer pr-1 transition-colors max-w-[150px] truncate"
          >
            {availablePresets.map((preset) => (
              <option key={preset.id} value={preset.id} className="bg-studio-900 text-slate-200 font-normal">
                {preset.name} {preset.isBuiltIn ? '' : '(Custom)'}
              </option>
            ))}
          </select>

          {/* Save / Update Preset Button */}
          <button
            onClick={handleOpenSaveModal}
            title={`Save or update preset "${activePreset?.name || ''}"`}
            className="p-1 hover:bg-studio-800 text-slate-400 hover:text-studio-accent rounded transition-colors ml-0.5"
          >
            <Save className="w-3.5 h-3.5" />
          </button>

          {/* Delete Preset Button */}
          <button
            onClick={handleOpenDeleteModal}
            disabled={availablePresets.length <= 1}
            title={
              availablePresets.length <= 1
                ? 'Cannot delete the only available preset'
                : `Delete preset "${activePreset?.name || ''}"`
            }
            className="p-1 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 disabled:opacity-25 disabled:cursor-not-allowed rounded transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={randomizeParameters}
          title="Generate full cohesive random preset"
          className="flex items-center space-x-1.5 bg-gradient-to-r from-purple-900/60 to-pink-900/60 hover:from-purple-800/80 hover:to-pink-800/80 text-pink-300 hover:text-pink-100 border border-pink-700/50 hover:border-pink-500 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin-slow" />
          <span>Randomize All</span>
        </button>
      </div>

      {/* Right: Aspect Ratio & Export */}
      <div className="flex items-center space-x-3">
        {/* Aspect Ratio Switcher */}
        <div className="flex items-center bg-studio-950 p-0.5 rounded-lg border border-studio-800 text-xs">
          <button
            onClick={() => handleRatioChange('16:9')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              project.aspectRatio === '16:9'
                ? 'bg-studio-700 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="16:9 Landscape (YouTube)"
          >
            16:9
          </button>
          <button
            onClick={() => handleRatioChange('9:16')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              project.aspectRatio === '9:16'
                ? 'bg-studio-700 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="9:16 Vertical (Reels / TikTok / Shorts)"
          >
            9:16
          </button>
          <button
            onClick={() => handleRatioChange('1:1')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              project.aspectRatio === '1:1'
                ? 'bg-studio-700 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="1:1 Square (Instagram Post)"
          >
            1:1
          </button>
        </div>

        {/* Export Button */}
        <button
          onClick={() => setIsExportModalOpen(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-95"
        >
          <Download className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Export Video</span>
        </button>
      </div>

      {/* Preset Save / Update / Delete Modal */}
      <PresetModal
        isOpen={isPresetModalOpen}
        mode={presetModalMode}
        onClose={() => setIsPresetModalOpen(false)}
      />
    </header>
  );
};
