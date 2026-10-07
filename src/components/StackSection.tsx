import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const StackSection: React.FC = () => {
  return (
    <section id="stack" className="py-14 border-t border-[#bae6fd] space-y-8">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-[#0369a1] flex items-center gap-2">
          <span>Technical Stack</span>
          <span className="text-xs text-[#38bdf8] font-normal font-mono">✩˚</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#0284c7] mt-1">
          Core technical competencies across autonomous agent systems, cloud services, and Linux administration.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#bae6fd] hover:border-[#38bdf8] shadow-sm space-y-3.5 transition-all"
          >
            <h3 className="text-xs font-mono text-[#06b6d4] uppercase tracking-wider font-bold">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#f0f9ff] border border-[#bae6fd] text-[#0284c7] hover:border-[#38bdf8] hover:text-[#0369a1] transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
