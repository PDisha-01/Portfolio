import "./Projects.css";
import ProjectCard from "./ProjectCard";
import projects from "./ProjectsData";

export default function Projects() {
  
  return (
    <section 
  id="projects"
  className="projects-section"
>

      <div className="projects-heading">
        <span>MY WORKSPACE</span>

        <h2>Featured Projects</h2>

        <p>
          Building intelligent solutions through AI,
          Machine Learning and modern web technologies.
        </p>

        <div className="heading-line"></div>
      </div>

      <div className="projects-row">

  {projects.map((project) => (

    <ProjectCard
      key={project.id}
      project={project}
    />

  ))}

</div>

    </section>
    
  );
}