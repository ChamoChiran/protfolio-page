import React from 'react';
import { THEMES } from '../../constants/theme';

const Section = ({ id, theme = 'green', children, className = '' }) => {
  const t = THEMES[theme];
  return (
    <section 
      id={id} 
      className={`relative py-20 px-4 md:px-8 border-b-4 border-black overflow-hidden bg-[#0a0a0a] ${t.selection} ${className}`}
    >
      {/* Halftone Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 z-0"
        style={{
          backgroundImage: `radial-gradient(${t.bg.replace('bg-[', '').replace(']', '')} 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to bottom, black, transparent)'
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
