import React, { useState } from 'react';
import { ArrowLeft, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Nav = ({ isProjectView }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // If in project view, show a simpler nav
  if (isProjectView) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-gray-800 backdrop-blur-sm h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
           <Link 
             to="/?section=projects"
             className="flex items-center gap-2 text-[#4ade80] hover:text-white font-bold font-mono uppercase tracking-wider transition-colors"
           >
             <ArrowLeft className="w-5 h-5" /> Back to Projects
           </Link>
        </div>
      </nav>
    );
  }

  const links = [
    { name: 'Home', to: '/?section=hero' },
    { name: 'Projects', to: '/?section=projects' },
    { name: 'About', to: '/?section=about' },
    { name: 'Contact', to: '/?section=contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/" className="text-white font-black text-xl tracking-tighter italic">CHAMODH<span className="text-[#4ade80]">.DATA</span></Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map(link => (
                <Link key={link.name} to={link.to} className="text-gray-300 hover:text-[#4ade80] px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="bg-black p-2 rounded-md text-gray-400 hover:text-white border border-gray-800">
              <span className="sr-only">Open menu</span>
              <Code className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(link => (
              <Link key={link.name} to={link.to} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-bold uppercase" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
