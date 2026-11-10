import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import projects from "./ProjectsData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.filterType === activeFilter;
  });

  const aiCount = projects.filter((p) => p.filterType === "ai").length;
  const webCount = projects.filter((p) => p.filterType === "web").length;

  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading">
        <span className="projects-subtitle">ENGINEERING PORTFOLIO</span>

        <h2>Featured Projects</h2>

        <p className="projects-intro-text">
          Compact, production-grade applications across full-stack engineering,
          computer vision, and machine learning.
        </p>

        <div className="heading-line"></div>
      </div>

      {/* Filter Tabs */}
      <div className="projects-filter-bar">
        <button
          className={`filter-tab-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
          type="button"
        >
          All ({projects.length})
        </button>

        <button
          className={`filter-tab-btn ${activeFilter === "ai" ? "active" : ""}`}
          onClick={() => setActiveFilter("ai")}
          type="button"
        >
          AI &amp; Vision ({aiCount})
        </button>

        <button
          className={`filter-tab-btn ${activeFilter === "web" ? "active" : ""}`}
          onClick={() => setActiveFilter("web")}
          type="button"
        >
          Full-Stack &amp; Web ({webCount})
        </button>
      </div>

      {/* Compact Responsive Grid */}
      <div className="projects-compact-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
