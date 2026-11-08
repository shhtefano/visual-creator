# Audio-Reactive Visual Studio

A modern, professional web application designed for DJs, electronic music producers, and content creators to generate high-quality, audio-reactive music visualization videos with deterministic MP4 export.

---

## Features

- **Audio Analysis Engine:**
  - Real-time Web Audio API FFT analysis.
  - Multi-band frequency separation calibrated for dance and electronic music:
    - **Sub-Bass (20 - 60 Hz):** Kick drum fundamental & sub rumble.
    - **Bass (60 - 250 Hz):** Kick punch & bassline drive.
    - **Low-Mids (250 - 500 Hz):** Snare body & synth warmth.
    - **Mids (500 - 2000 Hz):** Lead melodies & vocals.
    - **High-Mids (2000 - 4000 Hz):** Percussion attack & presence.
    - **Treble (4000 - 20000 Hz):** Hi-hats, cymbals, air & sparkle.
  - Asymmetric attack/decay temporal smoothing.
  - Transient and beat onset detection using spectral flux with dynamic variance gating.
  - Automatic BPM estimation and real-time beat pulse indicator.
  - Built-in 128 BPM electronic synthesizer demo loop generator for instant testing without uploading files.

- **Modular Visual Library (Three.js & GLSL Shaders):**
  - **Waveform Visualizer:** Horizontal wave, circular oscilloscope, and 3D extruded ribbon with normal displacement and neon glow.
  - **Frequency Spectrum:** Vertical graphic equalizer bars with floating peak-decay indicators, circular radial spikes, and concentric radial rings.
  - **Particle System:** GPU-accelerated 3D particles with ambient vortex, radial bass explosion shockwaves, treble twinkle, and constellation connection lines.
  - **3D Abstract Geometry:** Icosahedron, Torus Knot, Morphing Geosphere, and Cyber Cube with audio-reactive Perlin noise vertex displacement, wireframe and metallic PBR shading.
  - **Procedural Backgrounds:** Animated Cosmic Nebula (raymarched GLSL), 80s Synthwave Cyber Grid, multi-stop directional gradients, and film grain & vignette.

- **Creative Workstation UI (Blender / DAW Aesthetic):**
  - Dark-themed workstation layout.
  - Left sidebar layer stack with ordering, visibility toggling, duplication, and module additions.
  - Right sidebar inspector with tabs for Visual properties, Audio Reactivity profiles, Colors & Appearance, and Global Bloom/Post-Processing.
  - Bottom audio transport bar with play/pause, stop, loop, volume, time elapsed/duration, real-time beat pulse light, and interactive waveform scrubber.
  - Center viewport with responsive letterboxing/pillarboxing for 16:9, 9:16, and 1:1 aspect ratios.

- **Presets & Constrained Generative Randomization:**
  - Handcrafted built-in aesthetic archetypes: *Neon Cyber*, *Minimal Dark*, *Cyber Grid 80s*, *Dark Techno Industrial*, *Liquid Hologram*, *Futuristic Ribbon*.
  - Ability to save custom user presets.
  - **Randomize Engine:** Generates mathematically harmonious color palettes (analogous, complementary, triadic, neon) and balanced layer compositions without chaotic visual artifacts.

- **Deterministic Video Export System:**
  - Offline mathematical windowed FFT computed directly on decoded audio samples at exact frame timestamps $t = \frac{\text{frame}}{\text{FPS}}$.
  - Guarantees sample-accurate audio/video synchronization and zero dropped frames.
  - Uses hardware-accelerated **WebCodecs `VideoEncoder` (H.264)** + **`mp4-muxer`** (with MediaRecorder fallback).
  - Configurable aspect ratios: 16:9 (YouTube), 9:16 (Shorts / Reels / TikTok), 1:1 (Instagram).
  - Configurable resolutions: 720p, 1080p, 1440p, 4K.
  - Configurable frame rates: 24, 30, 60 FPS.
  - Live progress display with current frame counter, percentage bar, rendering FPS, and ETA countdown.

---

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Lucide React
- **Graphics & 3D:** Three.js, WebGL, custom GLSL shaders
- **Audio Processing:** Web Audio API, real-time AnalyserNode, offline Cooley-Tukey FFT & Hann windowing
- **State Management:** Zustand
- **Video Export:** WebCodecs API (`VideoEncoder`), `mp4-muxer` (H.264/AVC in MP4 container)

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or pnpm

### Installation

```bash
# Clone or navigate to the project directory
cd visual-creator

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run preview
```

