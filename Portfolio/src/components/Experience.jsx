import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiBriefcase,
  HiChevronDown,
  HiChevronUp,
  HiSparkles,
  HiCheckCircle,
  HiOutlineUserGroup,
} from "react-icons/hi2";

import aicteLogo from "../assets/aicte.jpeg";
import downloadLogo from "../assets/download.png";
import nssLogo from "../assets/nss.png";
import robonixLogo from "../assets/robonix.jpeg";

const experiences = [
  {
    id: "exp-1",
    logo: downloadLogo,
    company: "Infosys Springboard",
    role: "Virtual Intern",
    duration: "2026 – Present (Ongoing)",
    location: "Virtual / Remote, India",
    domain: "Software Engineering & Cloud Architecture",
    summary:
      "Gaining industry-grade software development experience covering modern architecture patterns, cloud deployment, and scalable code design.",
    toolkit: ["Java", "Python", "Cloud Fundamentals", "Agile Engineering"],
    highlight: "Enterprise Cloud & Software Systems",
  },
  {
    id: "exp-2",
    logo: aicteLogo,
    company: "EDUSKILLS powered by AICTE",
    role: "Java Full Stack Developer",
    duration: "Jan 2026 – Mar 2026",
    location: "Durgapur, West Bengal",
    domain: "Full-Stack Java Enterprise",
    summary:
      "Engineered backend integration, RESTful microservices, and database persistence using Spring Boot and Hibernate ORM.",
    toolkit: ["Java", "Spring Boot", "Hibernate", "REST APIs", "Bootstrap"],
    highlight: "Backend APIs & Microservices",
  },
  {
    id: "exp-3",
    logo: downloadLogo,
    company: "Steel Authority of India (SAIL)",
    role: "Vocational Trainee (Intern)",
    duration: "Jun 2025 – Jul 2025",
    location: "Bokaro Steel Plant, Jharkhand",
    domain: "Machine Learning & Python Analytics",
    summary:
      "Constructed Python data pipelines, automated preprocessing scripts, and trained supervised classification models on industrial datasets.",
    toolkit: ["Python", "Scikit-learn", "Pandas", "NumPy", "OS Scripting"],
    highlight: "Supervised ML & Industrial Analytics",
  },
  {
    id: "exp-4",
    logo: robonixLogo,
    company: "Robonixx Club @ BCET",
    role: "Event Management Head",
    duration: "Aug 2024 – Present",
    location: "BCET, Durgapur, West Bengal",
    domain: "Technical Leadership & Operations",
    summary:
      "Leading executive operations for BCET's robotics club, orchestrating tech fests, robotics seminars, and college-wide hackathons.",
    toolkit: ["Team Leadership", "Event Logistics", "Public Speaking", "Tech Fests"],
    highlight: "500+ Participants Coordinated",
  },
];

const communityRole = {
  logo: nssLogo,
  company: "National Service Scheme (NSS)",
  role: "NSS Community Volunteer",
  duration: "2023 – Present",
  location: "BCET Chapter, West Bengal",
  summary:
    "Organizing social awareness drives, youth health campaigns, and community welfare initiatives. Awarded 3rd Prize in Photography @ AASHA 2024.",
  toolkit: ["Community Welfare", "Social Outreach", "Visual Storytelling"],
  highlight: "3rd Prize Photography • AASHA '24",
};

export default function Experience() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section
      id="experience"
      className="portfolio-section relative overflow-hidden px-5 py-16 md:px-10 lg:px-14 bg-[#09090b] text-[#f4f4f5]"
    >
      {/* Background Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Subtle Glows */}
      <div
        className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-cyan-500/[0.03] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-zinc-400/[0.02] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 shadow-sm mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] uppercase tracking-[2.5px] font-mono font-semibold text-zinc-300">
              CAREER &amp; INTERNSHIPS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-2"
          >
            Experiences
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm text-zinc-400 leading-relaxed"
          >
            Hands-on internships, enterprise full-stack development, and technical operations
            built with industry standards.
          </motion.p>
        </div>

        {/* Small Compact Cards Grid (Identical in scale & feel to Education Journey) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="group relative flex flex-col justify-between p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/50 hover:bg-zinc-900/90 transition-all duration-300 backdrop-blur-md shadow-sm"
            >
              <div>
                {/* Card Top: Logo + Meta */}
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-xl border border-zinc-700/60 bg-white p-1.5 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-800/50 font-mono text-[10px] font-semibold tracking-wider">
                        {exp.duration}
                      </span>
                    </div>

                    <h3 className="text-[15px] font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {exp.role}
                    </h3>

                    <p className="text-xs text-zinc-400 font-medium truncate">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Location & Brief Summary */}
                <div className="mb-3">
                  <p className="text-[11px] text-zinc-500 font-mono mb-1.5">
                    📍 {exp.location}
                  </p>
                  <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2">
                    {exp.summary}
                  </p>
                </div>
              </div>

              {/* Bottom: Highlight Pill & Tech Tags */}
              <div className="pt-2.5 border-t border-zinc-800/70 flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-cyan-400">
                  <HiCheckCircle className="text-xs flex-shrink-0" />
                  <span>{exp.highlight}</span>
                </span>

                <div className="flex flex-wrap gap-1">
                  {exp.toolkit.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 text-[10px] rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 font-mono"
                    >
                      {item}
                    </span>
                  ))}
                  {exp.toolkit.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] rounded-md bg-zinc-800/40 text-zinc-400 font-mono">
                      +{exp.toolkit.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle Button for See More / Community */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-mono text-xs font-semibold tracking-wide border border-zinc-700/80 bg-zinc-800/80 text-zinc-200 hover:text-white hover:bg-zinc-700/80 hover:border-zinc-600 transition-all duration-200 shadow-sm cursor-pointer"
          >
            <span>
              {showDetails ? "Hide Community & Outcomes" : "See More & Community Impact"}
            </span>
            {showDetails ? (
              <HiChevronUp className="text-sm" />
            ) : (
              <HiChevronDown className="text-sm" />
            )}
          </button>
        </div>

        {/* Expanded Community Engagement Card */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 md:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl border border-zinc-700/60 bg-white p-1.5 flex items-center justify-center flex-shrink-0">
                    <img
                      src={communityRole.logo}
                      alt={communityRole.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                        COMMUNITY LEADERSHIP
                      </span>
                      <span className="text-[11px] font-mono text-cyan-400">
                        {communityRole.duration}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mt-0.5">
                      {communityRole.role} — {communityRole.company}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1 max-w-xl">
                      {communityRole.summary}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 items-center justify-end">
                  <span className="px-2.5 py-1 text-xs rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 font-medium">
                    🏆 {communityRole.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
