import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EasterEggModal: React.FC<EasterEggModalProps> = ({ isOpen, onClose }) => {
  const [cmd, setCmd] = useState('');
  const [log, setLog] = useState<string[]>([
    '໒꒱ Harshit Tenshi Console [v3.0] ✩˚',
    'Type "quotes", "neofetch", "hardware", "skills", or "clear"',
  ]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = cmd.trim().toLowerCase();
    if (!input) return;

    if (input === 'clear') {
      setLog([]);
      setCmd('');
      return;
    }

    let output = '';
    switch (input) {
      case 'neofetch':
        output = '໒꒱ OS: Linux | Host: Crescent.ai | WPM: 45 | Status: Active';
        confetti({ particleCount: 40, spread: 70, colors: ['#38bdf8', '#7dd3fc', '#bae6fd', '#34d399', '#ffffff'] });
        break;
      case 'quotes':
        output = '✧ "Building autonomous agent swarms and minimal software systems." - Harshit';
        break;
      case 'hardware':
        output = '𓆩♡𓆪 Tech: Lossless audio gear, high-fidelity soundscapes, minimal mechanical boards.';
        break;
      case 'skills':
        output = '✩˚ Gemini 3.8/3.1 Pro failover, Antigravity, Superagents, Python, Bash, Debian, React, Flutter.';
        break;
      case 'easteregg':
      case 'konami':
        output = '✟ Secret gamer unlock! Tenshi Kawaii power activated! (Zero Black)';
        confetti({ particleCount: 80, spread: 80, colors: ['#38bdf8', '#7dd3fc', '#bae6fd', '#34d399', '#ffffff'] });
        break;
      default:
        output = `Command not recognized: "${input}". Try "quotes", "neofetch", "hardware"`;
    }

    setLog((prev) => [...prev, `> ${cmd}`, output]);
    setCmd('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0369a1]/15 backdrop-blur-md">
      <div className="w-full max-w-xl bg-white border-2 border-[#38bdf8] rounded-2xl shadow-[0_16px_50px_rgba(56,189,248,0.25)] p-5 font-mono text-xs space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#bae6fd] text-[#0369a1] font-bold">
          <span className="flex items-center gap-1.5">
            <span>໒꒱</span>
            <span>tenshi_console.sh ✩˚</span>
          </span>
          <button
            onClick={onClose}
            className="text-[#0284c7] hover:text-[#0369a1] px-2.5 py-1 rounded-lg bg-[#f0f9ff] border border-[#bae6fd] hover:border-[#38bdf8] transition-colors cursor-pointer font-semibold"
          >
            Esc to close
          </button>
        </div>

        <div className="h-44 overflow-y-auto space-y-1.5 p-3 rounded-xl bg-[#f6faff] border border-[#bae6fd] text-xs">
          {log.map((line, idx) => (
            <div
              key={idx}
              className={line.startsWith('>') ? 'text-[#2563eb] font-bold' : 'text-[#0369a1]'}
            >
              {line}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 pt-2 border-t border-[#bae6fd]">
          <span className="text-[#0284c7] font-bold">໒꒱ $</span>
          <input
            autoFocus
            type="text"
            value={cmd}
            onChange={(e) => setCmd(e.target.value)}
            placeholder="type 'neofetch', 'quotes', 'clear'..."
            className="flex-1 bg-white border border-[#bae6fd] focus:border-[#38bdf8] rounded-lg px-2.5 py-1 text-[#0369a1] placeholder:text-[#7dd3fc] outline-none text-xs"
          />
        </form>
      </div>
    </div>
  );
};
