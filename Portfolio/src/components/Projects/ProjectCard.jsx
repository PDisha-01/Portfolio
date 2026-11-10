import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
          className={project.id === 3 ? "portfolio-image" : ""}
          loading="lazy"
        />
      </div>

      <div className="project-content">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <span className="project-category">
            {project.category}
          </span>

          {project.status && (
            <span className="project-status">
              ● {project.status}
            </span>
          )}
        </div>

        {project.team && (
          <div className="mb-2">
            <span className="project-team">
              {project.team}
            </span>
          </div>
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
            Case Study →
          </Link>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-btn"
              title="Open Live Deployed Application"
            >
              <span>Live Demo</span>
              <HiArrowTopRightOnSquare className="text-base" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
              title="View Source on GitHub"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
