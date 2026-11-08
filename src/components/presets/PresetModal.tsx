/**
 * Preset Management Modal Dialog
 * Allows users to choose between updating the active preset or saving as a new custom preset,
 * and handles permanent preset deletion confirmation.
 * Audio-Reactive Visual Studio
 */

import React, { useState, useEffect } from 'react';
import { X, Save, RefreshCw, PlusCircle, Trash2, CheckCircle2, AlertTriangle, Layers, Palette } from 'lucide-react';
import { useStudioStore } from '../../store/useStudioStore';
import { PresetCategory } from '../../types/presets';

interface PresetModalProps {
  isOpen: boolean;
  mode: 'save' | 'delete';
  onClose: () => void;
}

const CATEGORIES: { id: PresetCategory; label: string }[] = [
  { id: 'custom', label: 'Custom' },
  { id: 'cyberpunk', label: 'Cyberpunk' },
  { id: 'neon', label: 'Neon' },
  { id: 'darkTechno', label: 'Dark Techno' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'liquid', label: 'Liquid' },
  { id: 'organic', label: 'Organic' },
  { id: 'futuristic', label: 'Futuristic' },
  { id: 'abstract', label: 'Abstract' },
];

export const PresetModal: React.FC<PresetModalProps> = ({ isOpen, mode, onClose }) => {
  const {
    activePreset,
    saveCurrentAsPreset,
    updateActivePreset,
    deletePreset,
    project,
  } = useStudioStore();

  const [activeTab, setActiveTab] = useState<'update' | 'new'>('update');
  const [newPresetName, setNewPresetName] = useState('');
  const [newCategory, setNewCategory] = useState<PresetCategory>('custom');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSuccessMessage(null);
      if (activePreset) {
        setNewPresetName(`${activePreset.name} (Copy)`);
        setNewCategory(activePreset.category || 'custom');
        // Default tab: if active preset exists, offer update by default
        setActiveTab('update');
      } else {
        setNewPresetName(`${project.name || 'My Visual'} Preset`);
        setActiveTab('new');
      }
    }
  }, [isOpen, activePreset, project.name]);

  if (!isOpen) return null;

  const handleUpdate = () => {
    const updated = updateActivePreset();
    if (updated) {
      setSuccessMessage(`Successfully updated "${updated.name}"!`);
      setTimeout(() => {
        onClose();
      }, 750);
    }
  };

  const handleSaveNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPresetName.trim()) return;

    const created = saveCurrentAsPreset(newPresetName.trim(), newCategory);
    setSuccessMessage(`Successfully saved new preset "${created.name}"!`);
    setTimeout(() => {
      onClose();
    }, 750);
  };

  const handleDelete = () => {
    if (!activePreset) return;
    const name = activePreset.name;
    deletePreset(activePreset.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-studio-900 border border-studio-750 rounded-2xl w-full max-w-md shadow-2xl shadow-black/80 overflow-hidden text-slate-200">
        {/* Header */}
        <div className="px-5 py-4 border-b border-studio-800 flex items-center justify-between bg-studio-950/60">
          <div className="flex items-center space-x-2.5">
            <div className={`p-2 rounded-lg ${mode === 'delete' ? 'bg-rose-500/20 text-rose-400' : 'bg-cyan-500/20 text-studio-accent'}`}>
              {mode === 'delete' ? <Trash2 className="w-5 h-5" /> : <Save className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-wide">
                {mode === 'delete' ? 'Delete Preset' : 'Preset Management'}
              </h2>
              <p className="text-[11px] text-slate-400">
                {mode === 'delete'
                  ? 'Permanently remove preset from storage'
                  : 'Update current preset or create a new custom preset'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-studio-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Success Banner */}
        {successMessage ? (
          <div className="p-8 flex flex-col items-center justify-center text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
            <p className="text-sm font-semibold text-emerald-300">{successMessage}</p>
            <p className="text-xs text-slate-400">Saved permanently in LocalStorage.</p>
          </div>
        ) : mode === 'delete' ? (
          /* Delete Confirmation */
          <div className="p-6 space-y-5">
            <div className="bg-rose-950/30 border border-rose-800/50 rounded-xl p-4 flex items-start space-x-3 text-xs text-rose-200">
              <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-rose-300">Permanent Action</p>
                <p className="mt-1 text-slate-300 leading-relaxed">
                  Are you sure you want to delete preset{' '}
                  <span className="font-bold text-white">"{activePreset?.name}"</span>?
                  It will be permanently removed from your studio storage.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-studio-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="flex items-center space-x-1.5 bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-lg shadow-rose-600/30 transition-all active:scale-95"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Preset</span>
              </button>
            </div>
          </div>
        ) : (
          /* Save / Update Mode */
          <div className="p-5 space-y-5">
            {/* Mode Tabs */}
            <div className="grid grid-cols-2 p-1 bg-studio-950 rounded-xl border border-studio-800">
              <button
                type="button"
                onClick={() => setActiveTab('update')}
                className={`flex items-center justify-center space-x-2 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'update'
                    ? 'bg-studio-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Update Active</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('new')}
                className={`flex items-center justify-center space-x-2 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'new'
                    ? 'bg-studio-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Save as New</span>
              </button>
            </div>

            {activeTab === 'update' ? (
              /* Tab 1: Update Existing Preset */
              <div className="space-y-4">
                <div className="bg-studio-950/80 rounded-xl p-4 border border-studio-800/80 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Target Preset:</span>
                    <span className="text-xs font-bold text-studio-accent px-2 py-0.5 bg-cyan-950/50 border border-cyan-800/50 rounded-full">
                      {activePreset?.name || 'Current'}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-[11px] text-slate-400 pt-1 border-t border-studio-850">
                    <span className="flex items-center gap-1">
                      <Layers className="w-3 h-3 text-slate-400" />
                      {project.layers.length} Layers
                    </span>
                    <span className="flex items-center gap-1">
                      <Palette className="w-3 h-3 text-slate-400" />
                      {activePreset?.isBuiltIn ? 'Standard Template' : 'Custom Preset'}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                    This will overwrite <span className="text-slate-200 font-medium">{activePreset?.name}</span> with your
                    active layer parameters, colors, audio reactivity curves, and bloom settings permanently.
                  </p>
                </div>

                <div className="flex items-center justify-end space-x-2.5 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-studio-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="flex items-center space-x-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-md shadow-cyan-500/20 transition-all active:scale-95"
                  >
                    <RefreshCw className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Update Preset</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Tab 2: Save as Brand New Preset */
              <form onSubmit={handleSaveNew} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Preset Title</label>
                  <input
                    type="text"
                    required
                    value={newPresetName}
                    onChange={(e) => setNewPresetName(e.target.value)}
                    placeholder="e.g. Neon Cyber Odyssey"
                    className="w-full bg-studio-950 border border-studio-750 focus:border-studio-accent rounded-lg px-3 py-2 text-xs font-medium text-white outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Category Archetype</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setNewCategory(cat.id)}
                        className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold border transition-all truncate ${
                          newCategory === cat.id
                            ? 'bg-studio-accent text-slate-950 border-studio-accent shadow-sm'
                            : 'bg-studio-950 text-slate-400 border-studio-800 hover:border-studio-700 hover:text-slate-200'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end space-x-2.5 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-studio-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!newPresetName.trim()}
                    className="flex items-center space-x-1.5 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-md shadow-pink-500/20 transition-all disabled:opacity-50 active:scale-95"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Save New Preset</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

