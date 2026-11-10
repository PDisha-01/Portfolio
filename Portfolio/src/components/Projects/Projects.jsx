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
        <span>ENGINEERING PORTFOLIO</span>

        <h2>Featured Projects</h2>

        <p>
          Architecting intelligent solutions across multimodal AI, computer vision,
          and modern full-stack systems with real-world impact.
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
          All Projects ({projects.length})
        </button>

        <button
          className={`filter-tab-btn ${activeFilter === "ai" ? "active" : ""}`}
          onClick={() => setActiveFilter("ai")}
          type="button"
        >
          ⚡ AI &amp; Machine Learning ({aiCount})
        </button>

        <button
          className={`filter-tab-btn ${activeFilter === "web" ? "active" : ""}`}
          onClick={() => setActiveFilter("web")}
          type="button"
        >
          🌐 Full-Stack &amp; Web ({webCount})
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-row">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
