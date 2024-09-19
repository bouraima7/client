const ProjectCard = ({ project }) => {
    return (
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <img src={project.image} alt={project.title} width={100} height={100}/>
      </div>
    );
  };
  
  export default ProjectCard;
  