import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const FooterSection: React.FC = () => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setIstTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12 border-t border-[#bae6fd] text-xs font-mono text-[#38bdf8] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <span className="text-[#0369a1] font-bold">໒꒱ {PERSONAL_INFO.name}</span>
        <span className="mx-2 text-[#bae6fd]">&bull;</span>
        <span className="text-[#0284c7] font-semibold">Crescent.ai</span>
      </div>

      <div className="flex items-center gap-4 text-[#0284c7]">
        <span>IST: {istTime || 'Live'}</span>
        <span className="text-[#bae6fd]">&bull;</span>
        <a
          href="#"
          className="hover:text-[#2563eb] transition-colors font-medium"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};
