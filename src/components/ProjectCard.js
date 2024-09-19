const ProjectCard = ({ project }) => {
    return (
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <img src={project.image} alt={project.title} />
      </div>
    );
  };
  
  export default ProjectCard;
  