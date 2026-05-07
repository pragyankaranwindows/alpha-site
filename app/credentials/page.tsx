import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Shield, Cpu, Zap, Binary, Code, Database, Globe, Smartphone, Gamepad, BookOpen, Layers, Terminal } from "lucide-react";
import Particles from "../components/particles";

const credentials = [
  {
    type: "Offensive Security",
    title: "Penetration Testing & Exploitation",
    organization: "Red Team Ops",
    date: "2026",
    badges: ["Kill Chain Expert", "Infiltration", "System Breach"],
    icon: <Terminal className="w-6 h-6 text-emerald-500" />,
    description: "Expertise in the 'Kill Chain': Reconnaissance, scanning, and gaining access. Skilled in exploiting system misconfigurations and software vulnerabilities.",
  },
  {
    type: "Defensive Security",
    title: "Ethical Hacking & Hardening",
    organization: "Blue Team Defense",
    date: "2026",
    badges: ["Guardian", "DDoS Mitigation", "Net-Hardening"],
    icon: <Shield className="w-6 h-6 text-emerald-500" />,
    description: "Implementing proactive defense. Configuring Firewalls, IDS/IPS, and securing endpoints to mitigate SQLi, XSS, and DDoS threats.",
  },
  {
    type: "Malware Analysis",
    title: "Threat Intelligence & Reverse Engineering",
    organization: "Security Research",
    date: "2026",
    badges: ["Signature Hunter", "Sandboxing", "Reversing"],
    icon: <Binary className="w-6 h-6 text-emerald-500" />,
    description: "Analyzing how malware, trojans, and ransomware propagate. Identifying signatures and neutralizing digital threats through sandboxing.",
  },
  {
    type: "STEM Educator",
    title: "AI & Robotics Master Trainer",
    organization: "Mount Litera Zee School",
    date: "2025 - Present",
    badges: ["Master Trainer", "Robotics Lead", "Curriculum Architect"],
    icon: <Cpu className="w-6 h-6 text-emerald-500" />,
    description: "Leading STEM Innovation for Grades 1-10. Expert in Arduino, sensor integration (IR, Ultrasonic), and building logical analytical thinking.",
  },
  {
    type: "Blockchain",
    title: "Crypto Assets & Ledger Security",
    organization: "Distributed Systems",
    date: "2026",
    badges: ["Cold Storage", "DeFi Security", "Ledger Guard"],
    icon: <Layers className="w-6 h-6 text-emerald-500" />,
    description: "In-depth knowledge of cryptographic hashing, private key safety, cold storage, and decentralized finance (DeFi) security protocols.",
  },
  {
    type: "App Development",
    title: "Bot Architecture & Automation",
    organization: "Alpha-02 Systems",
    date: "2026",
    badges: ["Automation Elite", "Bot-Logic", "Dockerized"],
    icon: <Code className="w-6 h-6 text-emerald-500" />,
    description: "Building automated systems. Expertise in Python-based Telegram bots (Telethon/Pyrogram), yt-dlp integration, and Docker deployment.",
  },
  {
    type: "Web Development",
    title: "Full-Stack Web Engineering",
    organization: "Dev Ops",
    date: "2026",
    badges: ["Next.js Pro", "Stack Architect", "UI Operative"],
    icon: <Globe className="w-6 h-6 text-emerald-500" />,
    description: "Building scalable web solutions. Proficient in Next.js, React, Tailwind CSS, and backend logic for high-performance sites.",
  },
  {
    type: "Legacy Tech",
    title: "PHP & Database Management",
    organization: "System Architecture",
    date: "2025",
    badges: ["Server-Side", "SQL Master", "Legacy Support"],
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    description: "Skilled in PHP for server-side scripting and MySQL for relational database management. Experience in building custom web applications.",
  },
  {
    type: "Hardware",
    title: "BMS & Power Electronics",
    organization: "EV Systems",
    date: "2026",
    badges: ["Power Engineer", "LiFePO4 Expert", "Cell Balancing"],
    icon: <Zap className="w-6 h-6 text-emerald-500" />,
    description: "Developing safe power systems for EVs. Specializing in 72V LiFePO4 battery management, cell balancing, and high-current hardware.",
  },
  {
    type: "Mobile Dev",
    title: "App Inventor & Hardware Control",
    organization: "Robotics Interface",
    date: "2026",
    badges: ["Interface Designer", "BT-Control", "Mobile-Hardware"],
    icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
    description: "Creating mobile interfaces for physical robots. Proficient in MIT App Inventor for Bluetooth-controlled robotics and sensor monitoring.",
  },
  {
    type: "Game Dev",
    title: "Cyber Dodge Development",
    organization: "Game Engine Research",
    date: "2026",
    badges: ["Game Lead", "Physics Logic", "Mechanic Architect"],
    icon: <Gamepad className="w-6 h-6 text-emerald-500" />,
    description: "Project Lead for Cyber Dodge. Designing movement mechanics, collision logic, and technical documentation for commercial reporting.",
  },
  {
    type: "Education",
    title: "Computer Science Degree",
    organization: "Aisect University",
    date: "2024 - 2028",
    badges: ["Engineering Core", "Data Structures", "OS Expert"],
    icon: <BookOpen className="w-6 h-6 text-emerald-500" />,
    description: "Core engineering education focusing on advanced data structures, operating systems, and professional software engineering.",
  },
];

export default function CredentialsPage() {
  return (
    <div className="relative pb-16 min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-hidden">
      <Navigation />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 z-10 relative">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display uppercase">
              Service Record
            </h2>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Zap className="w-3 h-3 text-emerald-500 fill-emerald-500 animate-pulse" />
              <span className="text-[10px] font-medium tracking-widest text-emerald-500 uppercase">
                Alpha Level Clearance
              </span>
            </div>
          </div>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Verified expertise in <span className="text-emerald-500 text-sm italic font-mono">"The Art of Problem Solving"</span>. 
            Full 12-module tactical history across robotics, security, and engineering.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800 z-10 relative" />

        <div className="grid grid-cols-1 gap-6 mx-auto lg:grid-cols-1 relative z-10">
          {credentials.map((cred, index) => (
            <Card key={index}>
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start group">
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 group-hover:border-emerald-500/50 transition-all duration-500 min-w-[140px] shadow-xl">
                  {cred.icon}
                  <span className="mt-2 text-[10px] text-zinc-500 font-mono tracking-tighter uppercase">{cred.date}</span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-zinc-100 font-display group-hover:text-white transition-colors">
                      {cred.title}
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-500/80 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 uppercase tracking-widest">
                      // {cred.type}
                    </span>
                  </div>
                  <div className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-tighter">
                    Managed by: {cred.organization}
                  </div>

                  <p className="mt-4 text-zinc-400 leading-relaxed max-w-4xl text-sm font-mono italic">
                    {">"} {cred.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {cred.badges.map((badge) => (
                      <span key={badge} className="px-3 py-1 text-[9px] font-bold tracking-widest text-emerald-400 border border-emerald-500/20 rounded-full bg-emerald-500/10 uppercase hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-50 opacity-10" />
    </div>
  );
}