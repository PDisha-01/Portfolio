import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >

      <img
        src={project.image}
        alt={project.title}
        className={project.id === 3 ? "portfolio-image" : ""}
      />

      <div className="project-content">

        <span className="project-category">
          {project.category}
        </span>

        {project.status && (
          <span className="project-status">
            ● {project.status}
          </span>
        )}

        <h3>{project.title}</h3>

        <p>{project.tagline}</p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-buttons">

          <Link
            to={`/projects/${project.slug}`}
            className="case-study-btn"
          >
            View Project →
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub ↗
            </a>
          )}

        </div>

      </div>
    </motion.div>
  );
}