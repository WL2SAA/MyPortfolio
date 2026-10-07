import { Project, Venture, SkillCategory, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: "Harshit",
  tagline: "Founder of Crescent.ai",
  location: "India",
  age: 12,
  typingSpeed: 45, // WPM
  email: "cubiexzz@gmail.com",
  gender: "Male",
  trait: "Genderfluid • Femboy",
  vibe: "Developer, audiophile, hardware enthusiast, and gamer at heart.",
  bio: "Hey, I'm Harshit. I design intelligent software systems, cloud applications, and minimal digital tools. Founder of Crescent.ai."
};

export const PHOTOS = [
  {
    id: 1,
    url: "/images/photo-1.jpg",
    caption: "Workspace & hardware tinkering"
  },
  {
    id: 2,
    url: "/images/photo-2.jpg",
    caption: "Hardware setup & homelab nodes"
  },
  {
    id: 3,
    url: "/images/photo-3.jpg",
    caption: "Tech & audio exploration"
  },
  {
    id: 4,
    url: "/images/photo-4.jpg",
    caption: "Creative identity & illustration"
  }
];

export const VENTURES: Venture[] = [
  {
    id: "crescent-cloud",
    name: "Crescent Cloud",
    tagline: "Infrastructure & Ecosystem Parent Entity",
    description: "Originally founded as a cloud hosting company; now evolved into the parent enterprise umbrella powering every next-gen sub-project and platform.",
    link: "https://crescentcloud.vercel.app/",
    status: "Parent Company",
    role: "Founder & Architect",
    tags: ["Parent Entity", "Cloud Infrastructure", "Systems Hosting"],
    accent: "from-cyan-500/20 to-blue-600/20"
  },
  {
    id: "astro-ai",
    name: "astro",
    tagline: "Autonomous Agentic AI Operating Assistant",
    description: "An AI assistant built for natural conversation, Discord integration, live web research, and tool automation with automatic failover between Gemini 3.8 Flash and 3.1 Pro. Equipped with Discord bot capabilities, WhatsApp (coming soon), its own virtual computer with full internet access and autonomous multi-agent spawning.",
    link: "#",
    status: "In Development",
    role: "Lead Creator",
    tags: ["Agentic AI", "Gemini 3.8 Flash", "3.1 Pro Failover", "Agent Swarms", "Discord Bot"],
    metrics: "Dual Model Failover",
    accent: "from-purple-500/20 to-violet-700/20"
  },
  {
    id: "crescent-ai",
    name: "Crescent.ai",
    tagline: "Helping Businesses Grow & Making The Future!",
    description: "The AI acceleration wing dedicated to enterprise agentic workflows, automation, and intelligent systems engineering.",
    link: "#",
    status: "In Development",
    role: "Founder",
    tags: ["Enterprise AI", "Automation", "Future Tech"],
    accent: "from-emerald-500/20 to-teal-700/20"
  },
  {
    id: "studio-luna",
    name: "Studio Luna",
    tagline: "Minecraft Server Development Agency",
    description: "A Minecraft server developing agency offering server development and custom configurations at budget-friendly rates. A beloved early chapter that laid the groundwork for server management and sysadmin mastery.",
    link: "https://studioluna.crustmc.fun/",
    status: "Shut Down",
    role: "Founder (Sunsetted)",
    tags: ["Minecraft Servers", "Sysadmin", "Community Dev", "Legacy"],
    accent: "from-sky-400/20 to-cyan-500/20"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-tiramisu",
    title: "Project Tiramisu",
    description: "Layered Context Architecture & Multi-Model Orchestration Framework for Agentic AI.",
    longDescription: "An advanced open-source orchestration framework engineered for agentic AI pipelines, featuring modular context layering and multi-model failover routing.",
    category: "AI & Agents",
    link: "https://github.com/WL2SAA/tiramisu",
    github: "https://github.com/WL2SAA/tiramisu",
    tags: ["Agentic AI", "Context Architecture", "Multi-Model Orchestration", "Python"],
    featured: true,
    status: "Open Source",
    highlight: "Core AI Framework"
  },
  {
    id: "vibegen",
    title: "VibeGen",
    description: "AI-powered creative platform allowing users to generate high-aesthetic custom wallpapers.",
    category: "AI & Agents",
    link: "https://vibegen.wl2sa.bond/",
    tags: ["Generative AI", "Wallpapers", "Creative Tool", "Web App"],
    featured: true,
    status: "Live",
    highlight: "AI Wallpaper Suite"
  },
  {
    id: "neondash",
    title: "NeonDash",
    description: "A classic arcade game remade with vibrant cyberpunk aesthetics and 100% ad-free gameplay.",
    category: "Games & Web",
    link: "https://neondash.wl2sa.bond/",
    tags: ["Cyberpunk Game", "Ad-Free", "HTML5 Canvas", "Interactive"],
    featured: true,
    status: "Live",
    highlight: "Gamer at Heart"
  },
  {
    id: "droiddeck",
    title: "DroidDeck",
    description: "Intuitive GUI wrapper built around scrcpy to deliver effortless Android screen mirroring and control to everyone.",
    category: "Tools & Platforms",
    link: "https://github.com/WL2SAA/DroidDeck/",
    github: "https://github.com/WL2SAA/DroidDeck/",
    tags: ["scrcpy GUI", "Android Utility", "Hardware Control", "Desktop Tool"],
    featured: true,
    status: "Open Source",
    highlight: "Hardware & Tools"
  },
  {
    id: "hostmgr",
    title: "hostmgr",
    description: "Game server hosting manager enabling gamers to spin up and orchestrate their own custom game servers.",
    category: "Tools & Platforms",
    link: "https://hostmgr.wl2sa.bond/",
    tags: ["Game Server Hosting", "DevOps", "Infrastructure", "Automation"],
    featured: false,
    status: "Live"
  },
  {
    id: "astro-walls",
    title: "astro walls",
    description: "A hand-curated collection of minimalist and high-resolution wallpapers, refreshed on a monthly cadence.",
    category: "Wallpapers",
    link: "https://wl2saa.github.io/astro-walls/",
    tags: ["Curated Gallery", "Minimalist Design", "Wallpaper Hub"],
    featured: false,
    status: "Live"
  },
  {
    id: "breathwell",
    title: "Breathwell",
    description: "Harshit's inaugural project! A calming mindfulness web tool designed for guided breathing exercises.",
    category: "Games & Web",
    link: "https://breathwell-eta.vercel.app/",
    tags: ["Mindfulness", "First Project Ever", "Health Tech", "Minimal Web"],
    featured: false,
    status: "Live",
    highlight: "Origins • Project #1"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI, Agents & Intelligence",
    icon: "Brain",
    skills: [
      { name: "Gemini 3.8 / 3.1 Pro", featured: true },
      { name: "Google Deepmind", featured: true },
      { name: "Antigravity", featured: true },
      { name: "Superagents", featured: true },
      { name: "Prompt Engineering", featured: true },
      { name: "n8n Automation" },
      { name: "Retell AI" }
    ]
  },
  {
    title: "Languages & Frameworks",
    icon: "Code",
    skills: [
      { name: "Python", featured: true },
      { name: "Bash Scripting", featured: true },
      { name: "React", featured: true },
      { name: "Flutter", featured: true },
      { name: "Material You 3" }
    ]
  },
  {
    title: "Systems, Linux & OS",
    icon: "Server",
    skills: [
      { name: "Debian Linux", featured: true },
      { name: "Ubuntu Linux", featured: true },
      { name: "Linux Administration", featured: true },
      { name: "Networking & Daemons", featured: true },
      { name: "Codespaces" },
      { name: "Replit" }
    ]
  },
  {
    title: "Cloud, Database & Tooling",
    icon: "Database",
    skills: [
      { name: "Google Cloud", featured: true },
      { name: "Supabase", featured: true },
      { name: "Firebase", featured: true },
      { name: "MySQL" },
      { name: "Git & GitHub", featured: true },
      { name: "VS Code", featured: true }
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Discord",
    handle: "@cubiexz",
    url: "https://discord.com",
    icon: "MessageSquare",
    copyable: true,
    badge: "Chat Directly"
  },
  {
    name: "GitHub",
    handle: "WL2SAA",
    url: "https://github.com/WL2SAA",
    icon: "Github",
    badge: "Check Code"
  },
  {
    name: "YouTube",
    handle: "@buildwharshit",
    url: "https://youtube.com/@buildwharshit",
    icon: "Youtube",
    badge: "Videos & Demos"
  },
  {
    name: "Instagram",
    handle: "@buildwharshit",
    url: "https://instagram.com/buildwharshit",
    icon: "Instagram",
    badge: "Follow Journey"
  },
  {
    name: "Email",
    handle: "cubiexzz@gmail.com",
    url: "mailto:cubiexzz@gmail.com",
    icon: "Mail",
    copyable: true,
    badge: "Direct Inquiry"
  }
];

export const HOMELAB_SPECS = [
  { label: "Core Node OS", value: "Debian 12 / Ubuntu Server" },
  { label: "Dev Orchestration", value: "Antigravity & Superagents" },
  { label: "Network Protocol", value: "Custom homelab tunneling & reverse proxies" },
  { label: "Hardware Philosophy", value: "Self-hosted, resource-efficient, low-latency" },
  { label: "Audio Gear", value: "High-fidelity DAC & Lossless monitors" },
  { label: "Editor of Choice", value: "VS Code with custom cyber minimal theme" }
];

export const TYPING_QUOTES = [
  "Building autonomous agent swarms and minimal software systems.",
  "Building minimal platforms, exploring ideas, dreaming big.",
  "From Minecraft servers to layered context AI architectures.",
  "Failure is just an unhandled exception waiting for a try-catch.",
  "Simplicity is the ultimate sophistication in software design."
];
