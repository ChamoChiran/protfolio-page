import React from 'react';
import { 
  Layout, 
  Calendar, 
  User, 
  Wrench, 
  Github, 
  Terminal, 
  CheckCircle 
} from 'lucide-react';
import { THEMES } from '../constants/theme';
import Section from './ui/Section';
import GlitchText from './ui/GlitchText';
import ComicButton from './ui/ComicButton';

const ProjectDetail = ({ project }) => {
  const theme = THEMES[project.theme || 'pink'];

  // If no details exist, show a placeholder
  if (!project.details) return (
    <div className="pt-32 pb-20 px-8 text-center min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl text-white font-black italic mb-4">WORK IN PROGRESS</h2>
      <p className="text-gray-400">Details for this project are being compiled...</p>
    </div>
  );

  const { details } = project;

  return (
    <div className="pt-24 min-h-screen animate-in fade-in zoom-in duration-300">
      
      {/* Detail Hero */}
      <Section theme={project.theme} className="!py-12 border-b-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Title & Images */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className={`inline-block border ${theme.border} px-4 py-1 ${theme.text} font-mono text-sm tracking-widest uppercase mb-4`}>
                Project Detail
              </div>
              <GlitchText text={project.title} className="text-5xl md:text-7xl" />
            </div>

            {/* Comic Image Panel */}
            <div className="relative group">
               {/* Decorative Panel Border */}
               <div className={`absolute inset-0 border-4 ${theme.border} translate-x-2 translate-y-2 bg-black z-0`}></div>
               <div className={`relative z-10 border-4 border-black bg-gray-800 aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500`}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain bg-gray-900"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                       <div className="text-center opacity-30">
                          <Layout className="w-16 h-16 mx-auto mb-4" />
                          <span className="font-mono font-bold uppercase text-2xl">Project Preview</span>
                       </div>
                    </div>
                  )}
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`}></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-mono text-xs md:text-sm bg-black/80 inline-block px-2 py-1">
                      // {project.subtitle}
                    </p>
                  </div>
               </div>
            </div>

            {/* Objective & Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
               <div className={`bg-neutral-900/50 p-6 border-l-4 ${theme.border}`}>
                  <h3 className="text-xl font-bold text-white mb-4 uppercase font-mono flex items-center gap-2">
                     <span className={theme.text}>01.</span> Objective
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{details.objective}</p>
               </div>
               <div className={`bg-neutral-900/50 p-6 border-l-4 ${theme.border}`}>
                  <h3 className="text-xl font-bold text-white mb-4 uppercase font-mono flex items-center gap-2">
                     <span className={theme.text}>02.</span> Results
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{details.results}</p>
               </div>
            </div>
          </div>

          {/* Sidebar Info (HUD Style) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Project Stats Card */}
            <div className={`bg-black border-2 ${theme.border} p-6 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]`}>
              <h4 className={`text-xl font-black italic text-white mb-6 border-b-2 border-gray-800 pb-2`}>
                DATA SHEET
              </h4>
              
              <div className="space-y-6 font-mono text-sm">
                 <div>
                    <span className="block text-gray-500 text-xs uppercase mb-1 flex items-center gap-2"><Calendar className="w-3 h-3"/> Date</span>
                    <span className="text-white font-bold">{details.date}</span>
                 </div>
                 <div>
                    <span className="block text-gray-500 text-xs uppercase mb-1 flex items-center gap-2"><User className="w-3 h-3"/> Role</span>
                    <span className="text-white font-bold">{details.role}</span>
                 </div>
                 <div>
                    <span className="block text-gray-500 text-xs uppercase mb-1 flex items-center gap-2"><Wrench className="w-3 h-3"/> Core Tools</span>
                    <span className="text-white font-bold">{details.tools}</span>
                 </div>
                 <div>
                    <span className="block text-gray-500 text-xs uppercase mb-3 flex items-center gap-2"><Github className="w-3 h-3"/> Repository</span>
                    <ComicButton href={details.repo} variant="outline" className="w-full !mr-0 !mb-0 text-xs">
                        View Code
                    </ComicButton>
                 </div>
              </div>
            </div>

            {/* Tech Stack List */}
            <div className="bg-neutral-900/30 p-6 border border-gray-800">
               <h4 className="text-white font-bold uppercase mb-4 flex items-center gap-2">
                 <Terminal className={`w-4 h-4 ${theme.text}`} /> Tech Stack
               </h4>
               <ul className="space-y-3">
                 {details.techStack.map((tech, i) => (
                   <li key={i} className="flex justify-between items-start text-sm border-b border-gray-800 pb-2 last:border-0">
                     <span className={`font-bold ${theme.text}`}>{tech.name}</span>
                     <span className="text-gray-500 text-xs text-right max-w-[120px]">{tech.desc}</span>
                   </li>
                 ))}
               </ul>
            </div>

          </div>
        </div>
      </Section>

      {/* Key Steps Section */}
      <Section theme="green" className="border-b-0">
         <h3 className="text-3xl font-black italic text-white mb-8 flex items-center gap-3">
             KEY <span className="text-[#4ade80]">STEPS</span>
         </h3>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.steps.map((step, i) => (
              <div key={i} className="relative group">
                 {/* Step Number Background */}
                 <div className="absolute -top-6 -left-2 text-8xl font-black text-[#4ade80]/10 select-none z-0">
                    {i + 1}
                 </div>
                 <div className="relative z-10 bg-black border border-gray-700 p-6 h-full hover:border-[#4ade80] transition-colors">
                    <CheckCircle className="w-6 h-6 text-[#4ade80] mb-4" />
                    <p className="text-gray-300 font-medium leading-relaxed">
                       {step}
                    </p>
                 </div>
              </div>
            ))}
         </div>
      </Section>

    </div>
  );
};

export default ProjectDetail;
