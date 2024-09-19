// src/components/Projects.js
import React, { useState } from 'react';

const projects = [
  {
    title: 'Penetration Testing Simulation',
    description: 'An interactive simulation of a penetration testing process using Metasploit.',
    image: '/path-to-image/penetration-testing.png',
  },
  {
    title: 'Cloud Security Visualization',
    description: 'A 3D visualization of cloud security architecture.',
    image: '/path-to-image/cloud-security.png',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-details">
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.description}</p>
          {/* Add a 3D Scene */}
          <ThreeDScene />
        </div>
      )}
    </div>
  );
};

export default Projects;
