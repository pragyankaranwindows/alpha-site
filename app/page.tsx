import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Terminal, Shield, Cpu, Activity } from "lucide-react";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Albums", href: "/albums" },
  { name: "Credentials", href: "/credentials" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      
      {/* TOP SYSTEM TELEMETRY */}
      <div className="absolute top-8 left-8 hidden md:flex flex-col gap-1 animate-fade-in">
        <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-emerald-500 font-mono">
          <Activity className="w-3 h-3 animate-pulse" />
          SYSTEM: OPERATIONAL
        </div>
        <div className="text-[10px] tracking-[0.2em] text-zinc-500 font-mono">
          LOCATION: INDIA // SECTOR-02
        </div>
      </div>

      <nav className="my-16 animate-fade-in z-20">
        <ul className="flex items-center justify-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-widest duration-500 text-zinc-500 hover:text-zinc-300 font-mono"
            >
              [{item.name}]
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={150}
      />
      
      <div className="z-10 text-center">
        {/* ENHANCED NAME SECTION */}
        <h1 className="py-3.5 px-0.5 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-7xl md:text-9xl whitespace-nowrap bg-clip-text">
          PRAGYAN
        </h1>
        
        <div className="flex items-center justify-center gap-3 mt-[-10px] md:mt-[-25px] animate-fade-in">
          <div className="h-px w-8 bg-emerald-500/50" />
          <h3 className="text-zinc-400 tracking-[0.6em] uppercase text-[10px] md:text-xs font-mono">
            IDENT: <span className="text-emerald-500 font-bold">Alpha-02</span>
          </h3>
          <div className="h-px w-8 bg-emerald-500/50" />
        </div>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <div className="my-16 text-center animate-fade-in max-w-xl z-20">
        <h2 className="text-sm font-mono text-zinc-500 mx-6 leading-relaxed">
          {">"} AI & Robotics Educator // <span className="text-zinc-300">Stem Innovation</span> <br />
          {">"} Building autonomous systems and open-source tactical tools on{" "}
          <Link
            target="_blank"
            href="https://github.com/pragyankaranwindows"
            className="text-emerald-500 underline decoration-emerald-500/30 duration-500 hover:text-emerald-400"
          >
            GitHub
          </Link>
        </h2>
      </div>

      {/* BOTTOM STATUS BAR */}
      <div className="absolute bottom-8 w-full px-8 flex justify-between items-end animate-fade-in">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-zinc-600" />
            <span className="text-[10px] text-zinc-600 font-mono tracking-tighter">ENCRYPTION: AES-256</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-zinc-600" />
            <span className="text-[10px] text-zinc-600 font-mono tracking-tighter">CORE: ACTIVE</span>
          </div>
        </div>
        
        <div className="hidden md:block">
          <span className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
            Designed by Alpha-02 // 2026
          </span>
        </div>
      </div>

      {/* TACTICAL SCANLINE OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-50 opacity-20" />
    </div>
  );
}