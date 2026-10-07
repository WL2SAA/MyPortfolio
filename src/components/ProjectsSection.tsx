import React from 'react';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-14 border-t border-[#bae6fd] space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-[#0369a1] flex items-center gap-2">
            <span>Shipped Software & Projects</span>
            <span className="text-xs text-[#38bdf8] font-normal font-mono">✧</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#0284c7] mt-1">
            Agentic AI systems, desktop wrappers, games, hosting managers, and tools.
          </p>
        </div>
        <span className="text-xs font-mono text-[#38bdf8]">
          07 Projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#bae6fd] hover:border-[#38bdf8] hover:shadow-[0_8px_30px_rgba(56,189,248,0.16)] transition-all duration-200 flex flex-col justify-between space-y-3.5"
          >
            <div className="space-y-2">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-[11px] font-mono text-[#06b6d4] font-bold">
                  {project.category}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  project.status === 'Live'
                    ? 'bg-[#ecfdf5] border-[#a7f3d0] text-[#059669]'
                    : 'bg-[#f0f9ff] border-[#bae6fd] text-[#0284c7]'
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#0369a1] group-hover:text-[#2563eb] transition-colors">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#0284c7] leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#bae6fd] space-y-2.5 font-mono">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-[#0284c7] px-2 py-0.5 rounded-lg bg-[#f0f9ff] border border-[#bae6fd]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0284c7] hover:text-[#0369a1] underline decoration-[#bae6fd] hover:decoration-[#38bdf8] transition-colors font-medium"
                  >
                    GitHub ↗
                  </a>
                ) : <span />}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563eb] hover:text-[#1d4ed8] underline decoration-[#7dd3fc] hover:decoration-[#38bdf8] font-semibold transition-colors"
                >
                  Launch App ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
