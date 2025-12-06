import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { THEMES } from '../constants/theme';

const ProjectCard = ({ project, index }) => {
  const theme = THEMES[project.theme];
  return (
    <Link 
      to={`/project/${index}`}
      className={`
      relative bg-black border-2 ${theme.border} 
      flex flex-col h-full p-6 cursor-pointer
      transition-all duration-200 
      hover:-translate-y-2 hover:translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]
      active:translate-y-0 active:translate-x-0 active:shadow-none
      group
      overflow-hidden
    `}>

      {/* Texture Overlay */}
      <div className={`absolute inset-0 ${theme.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none mix-blend-overlay z-0`} />
      
      <div className="relative z-10 flex justify-between items-start mb-2">
        <h3 className={`text-xl font-bold uppercase ${theme.text} font-mono tracking-tighter break-words`}>
          {project.title}
        </h3>
        <ExternalLink className={`w-5 h-5 ${theme.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
      </div>

      <p className="relative z-10 text-gray-400 text-sm mb-4 font-mono">{project.subtitle}</p>
      <p className="relative z-10 text-gray-300 text-sm flex-grow mb-4 leading-relaxed font-medium">
        {project.desc}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {project.tags.map((tag, i) => (
          <span key={i} className={`text-xs uppercase px-2 py-1 border ${theme.border} ${theme.text} font-bold tracking-wider`}>
            {tag}
          </span>
        ))}
      </div>

      {/* Corner Decoration */}
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${theme.border} z-10`} />
    </Link>
  );
};

export default ProjectCard;
