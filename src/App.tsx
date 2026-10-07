import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VenturesSection } from './components/VenturesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { StackSection } from './components/StackSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { EasterEggModal } from './components/EasterEggs';

export const App: React.FC = () => {
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);

  // ENSURE ZERO BLACK ANYWHERE: purge any previous dark mode remnants immediately
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
      localStorage.removeItem('theme_tenshi_mode');
    }
  }, []);

  // Konami Code Easter Egg Listener
  useEffect(() => {
    const konamiSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];
    let currentIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle console on backtick / tilde key
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsConsoleOpen((prev) => !prev);
        return;
      }

      // Check Konami code sequence
      if (e.key.toLowerCase() === konamiSequence[currentIndex].toLowerCase()) {
        currentIndex++;
        if (currentIndex === konamiSequence.length) {
          setKonamiUnlocked(true);
          confetti({
            particleCount: 120,
            spread: 90,
            origin: { y: 0.5 },
            colors: ['#38bdf8', '#7dd3fc', '#bae6fd', '#2563eb', '#ffffff', '#34d399']
          });
          currentIndex = 0;
          setTimeout(() => setKonamiUnlocked(false), 5000);
        }
      } else {
        currentIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6faff] text-[#0369a1] font-sans selection:bg-[#bae6fd] selection:text-[#0369a1] transition-colors duration-200">
      {/* Toast Notification */}
      {konamiUnlocked && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-white border-2 border-[#38bdf8] text-[#0284c7] font-mono text-xs shadow-[0_8px_30px_rgba(56,189,248,0.25)] animate-bounce">
          ໒꒱ Gamer Easter Egg: Konami Code Unlocked! Tenshi Kawaii Mode Active!
        </div>
      )}

      {/* Sticky header with Tenshi branding */}
      <Header
        onOpenConsole={() => setIsConsoleOpen(true)}
      />

      {/* Main Expansive Layout (Extends to the screen) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <HeroSection />
        <VenturesSection />
        <ProjectsSection />
        <StackSection />
        <ContactSection />
        <FooterSection />
      </main>

      {/* Hidden Console Easter Egg */}
      <EasterEggModal
        isOpen={isConsoleOpen}
        onClose={() => setIsConsoleOpen(false)}
      />
    </div>
  );
};

export default App;
