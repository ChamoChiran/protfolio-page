import React from 'react';

const GlitchText = ({ text, className = "text-6xl md:text-8xl" }) => {
  return (
    <div className="glitch-wrapper relative inline-block">
      <h1 
        className={`glitch-text font-black italic tracking-tighter text-white leading-[0.9] relative z-10 ${className}`} 
        data-text={text}
      >
        {text}
      </h1>
      <style>{`
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.1s;
        }
        .glitch-text::before {
          color: #ff003c;
          transform: translate(3px, 2px);
          mix-blend-mode: screen;
        }
        .glitch-text::after {
          color: #00f0ff;
          transform: translate(-3px, -2px);
          mix-blend-mode: screen;
        }
        .glitch-wrapper:hover .glitch-text::before,
        .glitch-wrapper:hover .glitch-text::after {
          opacity: 1;
          animation: glitch-anim 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        }
        @keyframes glitch-anim {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
};

export default GlitchText;
