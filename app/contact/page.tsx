"use client";
import { Github, Instagram, Send, Mail, Radio } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";

const socials = [
  {
    icon: <Send size={20} />,
    href: "https://t.me/Pragyan_karan",
    label: "Telegram",
    handle: "Alpha-02",
    status: "Priority",
  },
  {
    icon: <Instagram size={20} />,
    href: "https://www.instagram.com/pragyan_karan",
    label: "Instagram",
    handle: "@pragyan_karan",
    status: "Visual Log",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/pragyankaranwindows",
    label: "Github",
    handle: "pragyankaranwindows",
    status: "Codebase",
  },
  {
    icon: <Mail size={20} />,
    href: "#",
    label: "Business Email",
    handle: "Secure Line Coming Soon",
    status: "Encrypted",
  },
];

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-hidden">
      <Navigation />
      
      {/* PARTICLE FIELD: Comm-Link Telemetry */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto relative z-10">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 mb-12 sm:mt-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {socials.map((s) => (
            <Card key={s.label}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
              >
                {/* Tactical Vertical Line */}
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 duration-1000"
                  aria-hidden="true"
                />

                <span className={`relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full bg-zinc-900 border-zinc-500 group-hover:border-emerald-500 group-hover:text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]`}>
                  {s.icon}
                </span>

                <div className="z-10 flex flex-col items-center">
                  <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 duration-500 flex items-center gap-2">
                    <Radio className="w-3 h-3 animate-pulse" />
                    {s.status}
                  </span>
                  
                  <span className="text-lg font-bold duration-150 xl:text-xl text-zinc-200 group-hover:text-white font-display text-center">
                    {s.handle}
                  </span>
                  
                  <span className="mt-4 text-[10px] text-center font-mono uppercase tracking-widest duration-1000 text-zinc-500 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* TACTICAL SCANLINE OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-50 opacity-10" />
    </div>
  );
}