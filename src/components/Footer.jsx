import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/index';

const Footer = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm border-t border-gray-800 pt-12">
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-black italic text-white mb-4">CHAMODH<span className="text-[#4ade80]">.</span></div>
          <p className="text-gray-500 max-w-xs">
            Building practical models and clear visualizations that turn messy data into actionable insights.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Socials</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#4ade80]"><Linkedin className="w-4 h-4"/> LinkedIn</a></li>
            <li><a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#4ade80]"><Github className="w-4 h-4"/> GitHub</a></li>
            <li><a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-2 hover:text-[#4ade80]"><Mail className="w-4 h-4"/> Email</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-600 text-xs font-mono">
        © 2025 Chamodh Wijayawardana. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
