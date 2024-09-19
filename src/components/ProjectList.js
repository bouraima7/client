import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects').then((response) => {
      console.log('API response:', response.data); //log the data
      setProjects(response.data);
    }).catch((error) => {
      console.error('Error fetching projects:', error); //log any errors
    });
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
