import React from 'react';
import confetti from 'canvas-confetti';

interface HeaderProps {
  onOpenConsole: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsole }) => {
  const handleNameClick = () => {
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.1 },
      colors: ['#38bdf8', '#7dd3fc', '#bae6fd', '#34d399', '#ffffff']
    });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#bae6fd] py-3.5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleNameClick}
            title="Harshit"
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <span className="font-bold text-sm text-[#0369a1] group-hover:text-[#0284c7] transition-colors flex items-center gap-1.5">
              <span>໒꒱</span>
              <span>Harshit</span>
            </span>
          </button>
        </div>

        {/* Minimal Navigation */}
        <nav className="flex items-center gap-4 sm:gap-6 text-xs text-[#0284c7] font-mono">
          <a href="#about" className="hover:text-[#0369a1] transition-colors hidden sm:inline font-medium">
            About
          </a>
          <a href="#ventures" className="hover:text-[#0369a1] transition-colors font-medium">
            Ventures
          </a>
          <a href="#projects" className="hover:text-[#0369a1] transition-colors font-medium">
            Projects
          </a>
          <a href="#stack" className="hover:text-[#0369a1] transition-colors hidden sm:inline font-medium">
            Stack
          </a>
          <a href="#contact" className="hover:text-[#0369a1] transition-colors font-medium">
            Contact
          </a>

          {/* Easter Egg Console Button */}
          <button
            onClick={onOpenConsole}
            title="Open hidden console (~)"
            className="px-2.5 py-1 rounded-xl bg-white border-2 border-[#bae6fd] hover:border-[#38bdf8] text-[#38bdf8] hover:text-[#0284c7] text-[11px] font-mono transition-all cursor-pointer shadow-sm"
          >
            ~
          </button>
        </nav>
      </div>
    </header>
  );
};
