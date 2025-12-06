import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

export default function App() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-sans selection:bg-[#4ade80] selection:text-black overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=JetBrains+Mono:wght@400;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>
      
      <Nav isProjectView={isProjectPage} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}
