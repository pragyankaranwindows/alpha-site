import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Eye, Github, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import Particles from "../components/particles"; // Importing the particle engine

const projects = [
  {
    title: "Cyber Dodge",
    slug: "cyber-dodge",
    date: "2026-04-06",
    description: "Tactical survival game featuring advanced collision logic and movement mechanics. Developed as a professional demonstration for STEM innovation.",
    repository: "pragyankaranwindows/cyber-dodge",
    url: "#",
    tech: ["TypeScript", "Next.js", "Logic"],
  },
  {
    title: "STEM Robotics Alpha",
    slug: "stem-robotics",
    date: "2026-05-01",
    description: "Comprehensive robotics curriculum and sensor logic demonstrations for Grades 1-10 at Mount Litera Zee School.",
    repository: "",
    url: "#",
    tech: ["Arduino", "Sensors", "C++"],
  }
];

export default function ProjectsPage() {
  return (
    <div className="relative pb-16 min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-hidden">
      <Navigation />
      
      {/* PARTICLE FIELD: Tracking active */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 z-10 relative">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
              The Alpha Log
            </h2>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-medium tracking-widest text-emerald-500 uppercase">
                Pro Hacker Verified
              </span>
            </div>
          </div>
          
          <p className="mt-4 text-zinc-400 leading-relaxed">
            A 12-module verified archive of <span className="text-zinc-200">Cyber Security</span>, 
            <span className="text-zinc-200"> App Development</span>, and 
            <span className="text-zinc-200"> STEM Education</span> expertise.
          </p>
        </div>
        
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 relative z-10">
          {projects.map((project) => (
            <Card key={project.slug}>
              <article className="relative w-full h-full p-4 md:p-8 group">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-200">
                    <Calendar className="w-4 h-4 text-emerald-500" />
                    {project.date}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" /> 0
                  </span>
                </div>

                <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display transition-colors">
                  {project.title}
                </h2>
                
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-[10px] font-medium text-zinc-300 border border-zinc-800 rounded bg-zinc-900/50">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-8">
                  {project.repository && (
                    <Link href={`https://github.com/${project.repository}`} target="_blank" className="hover:scale-110 transition-transform">
                      <Github className="w-6 h-6 text-zinc-400 hover:text-zinc-100" />
                    </Link>
                  )}
                  {project.url !== "#" && (
                    <Link href={project.url} target="_blank" className="hover:scale-110 transition-transform">
                      <ExternalLink className="w-6 h-6 text-zinc-400 hover:text-zinc-100" />
                    </Link>
                  )}
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>

      {/* TACTICAL OVERLAY: Matches Home Page Terminal */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-50 opacity-10" />
    </div>
  );
}