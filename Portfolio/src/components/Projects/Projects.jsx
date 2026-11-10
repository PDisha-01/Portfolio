import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiArrowTopRightOnSquare,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";
import projects from "./ProjectsData";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeProject = projects[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleSelect = (idx) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 280 : -280,
      opacity: 0,
      scale: 0.94,
    }),
    center: {
      zIndex: 10,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 28 },
        opacity: { duration: 0.28 },
        scale: { duration: 0.28 },
      },
    },
    exit: (dir) => ({
      zIndex: 1,
      x: dir < 0 ? 280 : -280,
      opacity: 0,
      scale: 0.94,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 28 },
        opacity: { duration: 0.22 },
      },
    }),
  };

  // Peek index for stacked card effect
  const nextIndex = (currentIndex + 1) % projects.length;
  const peekProject = projects[nextIndex];

  return (
    <section id="projects" className="projects-glider-section relative py-12 md:py-14 px-4 md:px-8 bg-[#09090b] text-[#f4f4f5] overflow-hidden">
      {/* Subtle Ambient Light (No Grid Lines) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header (Adjusted Font Size - Tasteful & Balanced) */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 shadow-sm mb-2.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] uppercase tracking-[2px] font-mono font-semibold text-zinc-300">
              FEATURED PROJECTS
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-1.5">
            Featured Projects
          </h2>

          <p className="text-xs md:text-sm text-zinc-400">
            Glide through production systems, AI vision pipelines, and full-stack platforms.
          </p>
        </div>

        {/* Quick Project Select Tabs (Direct Access Without Scrolling) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 mb-4">
          {projects.map((proj, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`
                  px-3 py-1.5 rounded-xl font-mono text-[11px] md:text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5
                  ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
                  }
                `}
              >
                <span className="opacity-60 text-[10px]">0{idx + 1}.</span>
                <span className="truncate max-w-[110px] md:max-w-none">
                  {proj.title.split("—")[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Glider Container (Cards Glide On Top Of Each Other) */}
        <div
          className="relative min-h-[460px] md:min-h-[420px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Stacked Card Preview (Peek Effect) */}
          <div
            className="hidden md:block absolute inset-0 max-w-4xl mx-auto rounded-3xl bg-zinc-900/40 border border-zinc-800/40 transform translate-x-3 translate-y-3 scale-[0.98] pointer-events-none opacity-40 blur-[0.5px]"
            aria-hidden="true"
          />

          {/* Active Gliding Card with Framer Motion AnimatePresence */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative w-full max-w-4xl rounded-2xl md:rounded-3xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700/80 shadow-2xl backdrop-blur-xl overflow-hidden p-5 md:p-7 flex flex-col md:flex-row gap-6 items-center"
            >
              {/* Left Column: Image Thumbnail & Badges */}
              <div className="w-full md:w-5/12 flex-shrink-0 relative group">
                <div className="relative aspect-[16/10] w-full rounded-xl md:rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  {/* Status Badge */}
                  {activeProject.status && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-cyan-300 font-mono text-[10px] font-semibold flex items-center gap-1.5 shadow">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      {activeProject.status}
                    </span>
                  )}

                  {/* Counter Badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-zinc-300 font-mono text-[10px] font-semibold">
                    0{currentIndex + 1} / 0{projects.length}
                  </span>
                </div>
              </div>

              {/* Right Column: Project Details & Quick Actions */}
              <div className="w-full md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] md:text-[11px] font-mono tracking-widest uppercase font-semibold text-cyan-400">
                      {activeProject.category}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2 leading-snug">
                    {activeProject.title}
                  </h3>

                  <p className="text-xs md:text-sm text-zinc-300 leading-relaxed mb-4 line-clamp-3">
                    {activeProject.tagline}
                  </p>

                  {/* Tech Arsenal Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {activeProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-zinc-200 font-mono text-[10px] md:text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-2.5">
                  {activeProject.live && (
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-mono text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shadow-md shadow-cyan-500/10"
                      title="Open Live Deployment"
                    >
                      <span>Live Demo</span>
                      <HiArrowTopRightOnSquare className="text-sm" />
                    </a>
                  )}

                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 font-mono text-xs font-semibold transition-all duration-200 flex items-center gap-1.5"
                      title="Inspect Source Code"
                    >
                      <FaGithub className="text-xs" />
                      <span>GitHub</span>
                    </a>
                  )}

                  <Link
                    to={`/projects/${activeProject.slug}`}
                    className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/70 text-zinc-300 font-mono text-xs font-semibold transition-all duration-200 flex items-center gap-1 ml-auto"
                  >
                    <span>Details →</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Glider Control Arrows (Glide Prev & Next) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Project"
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-zinc-900/95 border border-zinc-700 text-zinc-200 hover:text-white hover:bg-zinc-800 hover:border-cyan-500 transition-all duration-200 flex items-center justify-center shadow-xl cursor-pointer"
          >
            <HiChevronLeft className="text-xl" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Project"
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-zinc-900/95 border border-zinc-700 text-zinc-200 hover:text-white hover:bg-zinc-800 hover:border-cyan-500 transition-all duration-200 flex items-center justify-center shadow-xl cursor-pointer"
          >
            <HiChevronRight className="text-xl" />
          </button>
        </div>

        {/* Glider Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`
                h-1.5 rounded-full transition-all duration-300 cursor-pointer
                ${
                  idx === currentIndex
                    ? "w-8 bg-cyan-400"
                    : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
