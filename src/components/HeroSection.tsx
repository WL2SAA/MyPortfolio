import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PHOTOS } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [characterClicks, setCharacterClicks] = useState(0);
  const [wpmTestActive, setWpmTestActive] = useState(false);
  const [testInput, setTestInput] = useState('');
  const [testWpm, setTestWpm] = useState<number | null>(null);

  const heroPhoto = PHOTOS.find((p) => p.id === 4) || PHOTOS[PHOTOS.length - 1];

  const characterQuotes = [
    "໒꒱ Tenshi Kawaii Core • Crescent.ai",
    "✩˚ Autonomous Agent Systems Active 🩹",
    "✧ Dual-Model Routing: Gemini 3.8 Flash & 3.1 Pro",
    "𓆩♡𓆪 Lossless Soundscapes & High-Fidelity Audio",
    "✟ Dreaming Big & Building The Future!"
  ];

  const handleCharacterClick = () => {
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#7dd3fc', '#bae6fd', '#34d399', '#ffffff']
    });
    setCharacterClicks((prev) => prev + 1);
  };

  const handleWpmInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTestInput(val);
    const target = "Dreaming big since day one.";
    if (val === target) {
      setTestWpm(52);
      confetti({ particleCount: 50, spread: 80, colors: ['#38bdf8', '#7dd3fc', '#34d399', '#ffffff'] });
    }
  };

  return (
    <section id="about" className="py-10 sm:py-16 space-y-12">
      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Clean Editorial Bio with Blue, Light Blue, Aqua & Green Highlights */}
        <div className="lg:col-span-6 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
              <span className="text-[#0284c7] font-semibold flex items-center gap-1">
                <span>໒꒱</span> Harshit
              </span>
            </div>

            {/* Headline is simply Harshit - no self-taught or AI architect highlighting */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0369a1] leading-tight">
              Harshit
            </h1>

            <p className="text-sm sm:text-base text-[#0284c7] leading-relaxed font-normal">
              Building intelligent software platforms, modern tools, and minimal web applications.
              Founder of Crescent.ai.
            </p>

            {/* Prominent Email Contact Button */}
            <div className="pt-2">
              <a
                href="mailto:cubiexzz@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border-2 border-[#38bdf8] hover:border-[#0284c7] hover:bg-[#f0f9ff] text-[#0284c7] hover:text-[#0369a1] font-mono text-xs sm:text-sm font-bold shadow-[0_4px_16px_rgba(56,189,248,0.18)] transition-all cursor-pointer group"
              >
                <span>✉️</span>
                <span>Contact via Email</span>
                <span className="text-[#38bdf8] group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#bae6fd] shadow-sm space-y-2 text-xs sm:text-sm text-[#0284c7] leading-relaxed">
            <p>
              Designing layered context frameworks for autonomous agents, high-efficiency system daemons, and clean digital experiences.
            </p>
            <p className="text-[#38bdf8] text-xs font-mono pt-1">
              Traits: Hardware Lover &bull; Gamer at Heart &bull; Audiophile &bull; Genderfluid &bull; Femboy &bull; 45 WPM Benchmark.
            </p>
          </div>

          {/* Interactive Typing Easter Egg */}
          <div className="p-4 rounded-xl bg-white border-2 border-[#bae6fd] space-y-2 font-mono text-xs shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[#0284c7] font-semibold flex items-center gap-1.5">
                <span>✧</span> Typing Benchmark: 45 WPM
              </span>
              <button
                onClick={() => setWpmTestActive(!wpmTestActive)}
                className="text-[#2563eb] hover:underline cursor-pointer text-[11px] font-semibold"
              >
                {wpmTestActive ? 'Close challenge' : 'Test your speed'}
              </button>
            </div>

            {wpmTestActive ? (
              <div className="space-y-2 pt-1">
                <p className="text-[11px] text-[#0284c7]">
                  Type: <span className="text-[#0369a1] font-bold">Dreaming big since day one.</span>
                </p>
                <input
                  type="text"
                  value={testInput}
                  onChange={handleWpmInput}
                  placeholder="Type the target phrase here..."
                  className="w-full bg-[#f6faff] border-2 border-[#bae6fd] px-3 py-2 rounded-lg text-[#0369a1] placeholder:text-[#7dd3fc] outline-none focus:border-[#38bdf8] text-xs font-mono"
                />
                {testWpm && (
                  <div className="text-[#10b981] font-bold pt-1 text-[11px] flex items-center gap-1">
                    <span>✓</span> Goal passed! Harshit's personal velocity is 45 WPM.
                  </div>
                )}
              </div>
            ) : (
              <p className="text-[11px] text-[#38bdf8]">
                Calibrated against Harshit's personal 45 WPM typing pace.
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Big, Mobile-Friendly Rectangular Box for Character Image */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-end">
          <div className="w-full max-w-xl space-y-3">
            {/* The Tenshi Kawaii Rectangular Frame */}
            <div
              onClick={handleCharacterClick}
              title="Click to interact with Harshit's avatar!"
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-2xl bg-white border-2 border-[#38bdf8] hover:border-[#0284c7] transition-all duration-300 shadow-[0_8px_30px_rgba(56,189,248,0.2)] cursor-pointer group"
            >
              <img
                src={heroPhoto.url}
                alt="Harshit"
                className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#38bdf8] text-[11px] font-mono text-[#0284c7] font-semibold shadow-sm flex items-center gap-1">
                <span>໒꒱</span>
                <span>tenshi ✩˚</span>
              </div>
            </div>

            {/* Harshit's Name Mentioned Below It */}
            <div className="text-left space-y-0.5 px-1">
              <h2 className="text-lg sm:text-xl font-bold text-[#0369a1] tracking-tight">
                Harshit
              </h2>
              {/* Only Founder of Crescent.ai (NOT as a link) */}
              <p className="text-xs sm:text-sm text-[#0284c7] font-mono">
                Founder of Crescent.ai
              </p>

              {/* Status Quote on Click */}
              <div className="text-xs font-mono text-[#2563eb] pt-1 min-h-[1.5rem] font-medium">
                {characterQuotes[characterClicks % characterQuotes.length]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
