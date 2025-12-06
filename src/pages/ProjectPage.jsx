import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data';
import ProjectDetail from '../components/ProjectDetail';

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the project based on the ID from the URL
  // We're using the index as the ID for now since the data structure doesn't have unique IDs
  // In a real app, you'd want unique IDs for each project
  const projectIndex = parseInt(id);
  const project = PROJECTS[projectIndex];

  useEffect(() => {
    // If project doesn't exist, redirect to home
    if (!project && id) {
      navigate('/');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [project, id, navigate]);

  if (!project) {
    return <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <ProjectDetail 
      project={project} 
      onBack={() => navigate('/#projects')} 
    />
  );
};

export default ProjectPage;
