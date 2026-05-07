"use client";
import { Navigation } from "../components/nav";
import React from "react";
import Particles from "../components/particles"; // Unified telemetry
import { Camera, ShieldCheck, Cpu } from "lucide-react";

const tacticalPhotos = [
  {
    title: "Neural Interface",
    description: "Visualizing AI processing and deep learning nodes.",
    category: "Cyber Security",
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600", 
  },
  {
    title: "Autonomous Frame",
    description: "Close-up of a high-precision STEM robotic arm assembly.",
    category: "Robotics",
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600", 
  },
  {
    title: "The Denali Range",
    description: "Arctic reconnaissance imagery from the North Slope.",
    category: "Environment",
    url: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Encrypted Corridor",
    description: "Data stream visualization and network defense protocols.",
    category: "Cyber Security",
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Logic Controller",
    description: "Integrated circuit design for autonomous navigation.",
    category: "Robotics",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Glacial Horizon",
    description: "Infinite white plains from the northern territories.",
    category: "Environment",
    url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=1600",
  },
];

export default function Albums() {
  return (
    <div className="relative pb-16 min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-hidden">
      <Navigation />
      
      {/* PARTICLE FIELD: Unified with Home Terminal */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 z-10 relative">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display uppercase">
              Visual Archives
            </h2>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-medium tracking-widest text-emerald-500 uppercase">
                4K Render Active
              </span>
            </div>
          </div>
          <p className="mt-4 text-zinc-400">
            A visual log of <span className="text-zinc-200">Robotics</span>, <span className="text-zinc-200">Cyber Security</span>, and <span className="text-zinc-200">Northern Exploration</span>. Tactical studies captured in ultra-detail.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800 z-10 relative" />

        <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {tacticalPhotos.map((photo, index) => (
            <div 
              key={index} 
              className="overflow-hidden relative duration-700 border rounded-xl bg-zinc-900/40 hover:bg-zinc-900 group border-zinc-800 hover:border-emerald-500/50 transition-all shadow-2xl"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  loading="lazy"
                  className="object-cover w-full h-full grayscale-[0.8] group-hover:grayscale-0 transition duration-1000 group-hover:scale-105"
                />
                {/* HUD Overlay on hover */}
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-center text-[9px] text-zinc-500 uppercase tracking-[0.3em] font-mono">
                  <span>[{photo.category}]</span>
                  <span className="text-emerald-500/70 animate-pulse">Scanning...</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-zinc-100 group-hover:text-white duration-500 font-display">
                  {photo.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-500 line-clamp-2 leading-relaxed font-mono italic">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TACTICAL SCANLINE OVERLAY: Matches Main Terminal */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-50 opacity-10" />
    </div>
  );
}