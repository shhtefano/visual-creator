/**
 * Main Studio Layout Wrapper
 * Audio-Reactive Visual Studio
 */

import React, { useEffect } from 'react';
import { TopBar } from './TopBar';
import { LeftSidebar } from './LeftSidebar';
import { RightSidebar } from './RightSidebar';
import { BottomBar } from './BottomBar';
import { ViewportCanvas } from '../viewport/ViewportCanvas';
import { ExportModal } from '../export/ExportModal';
import { useStudioStore } from '../../store/useStudioStore';

export const StudioLayout: React.FC = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT')
      ) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        const state = useStudioStore.getState();
        if (state.duration > 0) {
          if (state.isPlaying) state.pause();
          else state.play();
        }
      } else if (e.code === 'KeyR' && !e.ctrlKey && !e.metaKey) {
        useStudioStore.getState().randomizeParameters();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-studio-950 text-slate-100 select-none">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Middle Workstation Viewport */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left: Layer Manager */}
        <LeftSidebar />

        {/* Center: High-DPI WebGL Viewport */}
        <ViewportCanvas />

        {/* Right: Inspector & Reactivity Panel */}
        <RightSidebar />
      </div>

      {/* 3. Bottom Audio Player & Scrubber */}
      <BottomBar />

      {/* 4. Export Modal Overlay */}
      <ExportModal />
    </div>
  );
};

