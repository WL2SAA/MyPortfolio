import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    confetti({
      particleCount: 30,
      spread: 60,
      colors: ['#38bdf8', '#7dd3fc', '#bae6fd', '#34d399', '#ffffff']
    });
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-14 border-t border-[#bae6fd] space-y-8">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-[#0369a1] flex items-center gap-2">
          <span>Initiate Contact & Channels</span>
          <span className="text-xs text-[#38bdf8] font-normal font-mono">✟</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#0284c7] mt-1">
          Have an AI agent project, software inquiry, or just want to chat about hardware and tech? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Direct Email Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#bae6fd] hover:border-[#38bdf8] shadow-sm space-y-3 transition-all">
          <span className="text-[11px] font-mono text-[#06b6d4] uppercase tracking-wider block font-bold">
            Primary Email
          </span>
          <div className="flex items-center justify-between">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-sm sm:text-base font-mono text-[#0369a1] hover:text-[#2563eb] underline decoration-[#bae6fd] hover:decoration-[#38bdf8] transition-colors font-bold"
            >
              {PERSONAL_INFO.email}
            </a>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
              className="text-xs font-mono text-[#0284c7] hover:text-[#0369a1] px-3.5 py-1.5 rounded-xl bg-[#f0f9ff] border border-[#bae6fd] hover:border-[#38bdf8] transition-colors cursor-pointer font-semibold"
            >
              {copied === 'email' ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Discord Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#bae6fd] hover:border-[#38bdf8] shadow-sm space-y-3 transition-all">
          <span className="text-[11px] font-mono text-[#06b6d4] uppercase tracking-wider block font-bold">
            Discord Handle
          </span>
          <div className="flex items-center justify-between">
            <span className="text-sm sm:text-base font-mono text-[#0369a1] font-bold">
              @cubiexz
            </span>
            <button
              onClick={() => handleCopy('@cubiexz', 'discord')}
              className="text-xs font-mono text-[#0284c7] hover:text-[#0369a1] px-3.5 py-1.5 rounded-xl bg-[#f0f9ff] border border-[#bae6fd] hover:border-[#38bdf8] transition-colors cursor-pointer font-semibold"
            >
              {copied === 'discord' ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
        </div>
      </div>

      {/* Social Links List */}
      <div className="pt-2 flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono text-[#0284c7]">
        {SOCIAL_LINKS.filter((s) => s.name !== 'Email' && s.name !== 'Discord').map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2563eb] underline decoration-[#bae6fd] hover:decoration-[#38bdf8] transition-colors font-medium"
          >
            {social.name} ↗
          </a>
        ))}
      </div>
    </section>
  );
};
