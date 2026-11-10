import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card-compact"
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      {/* Thumbnail */}
      <div className="project-thumb-box">
        <img
          src={project.image}
          alt={project.title}
          className="project-thumb-img"
          loading="lazy"
        />
        {project.status && (
          <span className="project-status-pill">
            ● {project.status}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="project-compact-content">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="project-compact-category">
            {project.category}
          </span>
        </div>

        <h3 className="project-compact-title">{project.title}</h3>

        <p className="project-compact-tagline">{project.tagline}</p>

        {/* Tech Chips */}
        <div className="project-compact-tech">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-more">+{project.tech.length - 4}</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="project-compact-actions">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn-live"
              title="Open Live Deployment"
            >
              <span>Live Demo</span>
              <HiArrowTopRightOnSquare className="text-sm" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn-github"
              title="View Source on GitHub"
            >
              GitHub ↗
            </a>
          )}

          <Link
            to={`/projects/${project.slug}`}
            className="action-btn-details"
            title="Read Case Study"
          >
            Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
