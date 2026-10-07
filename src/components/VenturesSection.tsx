import React from 'react';
import { VENTURES } from '../data/portfolioData';

export const VenturesSection: React.FC = () => {
  return (
    <section id="ventures" className="py-14 border-t border-[#bae6fd] space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-[#0369a1] flex items-center gap-2">
            <span>Ventures & Organizations</span>
            <span className="text-xs text-[#38bdf8] font-normal font-mono">໒꒱</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#0284c7] mt-1">
            Entities founded and managed by Harshit across hosting, agentic AI, and server infrastructure.
          </p>
        </div>
        <span className="text-xs font-mono text-[#38bdf8]">
          04 Entities
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {VENTURES.map((venture) => (
          <div
            key={venture.id}
            className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#bae6fd] hover:border-[#38bdf8] hover:shadow-[0_8px_30px_rgba(56,189,248,0.16)] transition-all duration-200 space-y-3.5 flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0369a1]">
                    {venture.name}
                  </h3>
                  <span className="text-xs font-mono text-[#06b6d4] font-semibold">
                    {venture.role}
                  </span>
                </div>

                <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${
                  venture.status === 'Active'
                    ? 'bg-[#ecfdf5] border-[#a7f3d0] text-[#059669]'
                    : venture.status === 'In Development'
                    ? 'bg-[#f0f9ff] border-[#bae6fd] text-[#0284c7]'
                    : 'bg-[#f8fafc] border-[#bae6fd] text-[#38bdf8]'
                }`}>
                  {venture.status}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#0284c7] leading-relaxed">
                {venture.description}
              </p>

              {venture.id === 'astro-ai' && (
                <div className="p-3.5 rounded-xl bg-[#f0f9ff] border-2 border-[#bae6fd] text-xs font-mono space-y-1.5">
                  <div className="text-[#0284c7] font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                    <span>Dual-Model Failover Architecture</span>
                  </div>
                  <p className="text-[11px] text-[#0369a1] leading-relaxed">
                    Automated failover between <span className="text-[#0284c7] font-bold">Gemini 3.8 Flash</span> and{' '}
                    <span className="text-[#2563eb] font-bold">Gemini 3.1 Pro</span>. Discord bot integration,
                    virtual sandbox computer with internet access, and autonomous agent swarms.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-[#bae6fd] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                {venture.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-lg bg-[#f0f9ff] border border-[#bae6fd] text-[#0284c7]">
                    {tag}
                  </span>
                ))}
              </div>

              {venture.link && venture.link !== '#' ? (
                <a
                  href={venture.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563eb] hover:text-[#1d4ed8] underline decoration-[#7dd3fc] hover:decoration-[#38bdf8] transition-colors font-semibold"
                >
                  Visit Platform ↗
                </a>
              ) : (
                <span className="text-[#38bdf8] text-[11px]">
                  {venture.status === 'In Development' ? 'Internal Engine' : 'Archived'}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
