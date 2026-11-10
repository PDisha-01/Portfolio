import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiAcademicCap,
  HiTrophy,
  HiChatBubbleBottomCenterText,
  HiCheckBadge,
  HiSparkles,
} from "react-icons/hi2";
import "./Certifications.css";

const credentialsData = [
  // Certifications
  {
    id: "cert-1",
    type: "cert",
    category: "CLOUD TECHNOLOGY",
    title: "AWS Certified Solutions Architecture",
    issuer: "Forage • Cloud Systems",
    year: "2025",
    skills: ["AWS Cloud", "Architecture", "Cloud Design"],
  },
  {
    id: "cert-2",
    type: "cert",
    category: "LANGUAGE CERTIFICATION",
    title: "Fit in Deutsch (German A1)",
    issuer: "Goethe Institut Kolkata",
    year: "Level 1",
    skills: ["German Language", "A1 Goethe", "Communication"],
  },
  {
    id: "cert-3",
    type: "cert",
    category: "NATIONAL EVENT",
    title: "78th Independence Day Ceremonial Parade",
    issuer: "National Ceremonial Event",
    year: "2025",
    skills: ["Discipline", "Team Leadership", "Precision"],
  },
  {
    id: "cert-4",
    type: "cert",
    category: "PHOTOGRAPHY ACHIEVEMENT",
    title: "3rd Position in Photography",
    issuer: "NSS Wing • AASHA 2024",
    year: "2024",
    skills: ["Visual Arts", "Composition", "Storytelling"],
  },
  {
    id: "cert-5",
    type: "cert",
    category: "COMPETITION ACHIEVEMENT",
    title: "2nd Position in Memory Race",
    issuer: "Athlika 2024 • BCET",
    year: "2024",
    skills: ["Cognitive Focus", "Speed", "Problem Solving"],
  },

  // Hackathons
  {
    id: "hack-1",
    type: "hackathon",
    category: "HACKATHON FINALIST",
    title: "PANTHEON TECHFEST '25",
    issuer: "BIT Mesra, Ranchi",
    year: "2025",
    skills: ["TrafficOps+", "YOLOv8", "Streamlit", "OpenCV"],
  },

  // Testimonials / Recommendations
  {
    id: "test-1",
    type: "testimonial",
    category: "PEER RECOMMENDATION",
    title: "Tanay Sinha",
    issuer: "JSCO, Robonixx Club @ BCET",
    year: "2025",
    quote:
      "Responsible with patience, integrity & accountability. Consistently demonstrates perseverance, professionalism and genuine commitment towards engineering excellence.",
    skills: ["Accountability", "Leadership"],
  },
  {
    id: "test-2",
    type: "testimonial",
    category: "INDUSTRY PEER",
    title: "Ananya Rout",
    issuer: "Vocational Intern @ SAIL Bokaro",
    year: "2025",
    quote:
      "Approached every ML task with enthusiasm and professionalism, making her a highly dependable and supportive technical teammate.",
    skills: ["Teamwork", "Problem Solving"],
  },
  {
    id: "test-3",
    type: "testimonial",
    category: "COLLEAGUE",
    title: "Harshvardhan Raj",
    issuer: "B.Tech CSE @ BCET",
    year: "2025",
    quote:
      "Brings a positive attitude, reliability, and strong sense of responsibility to collaborations with great creative discipline.",
    skills: ["Collaboration", "Engineering"],
  },
];

export default function Certifications() {
  const [activeTab, setActiveTab] = useState("cert");

  const filteredData = credentialsData.filter((item) => item.type === activeTab);

  const certCount = credentialsData.filter((i) => i.type === "cert").length;
  const hackCount = credentialsData.filter((i) => i.type === "hackathon").length;
  const testCount = credentialsData.filter((i) => i.type === "testimonial").length;

  return (
    <section
      id="credentials"
      className="portfolio-section relative py-12 md:py-14 px-4 md:px-8 bg-[#09090b] text-[#f4f4f5] overflow-hidden"
    >
      {/* Soft Ambient Light (No Grid Lines) */}
      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-cyan-500/[0.025] blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header (Tasteful & Balanced) */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 shadow-sm mb-2.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] uppercase tracking-[2px] font-mono font-semibold text-zinc-300">
              CREDENTIALS &amp; RECOGNITION
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-1.5">
            Credentials &amp; Achievements
          </h2>

          <p className="text-xs md:text-sm text-zinc-400">
            Verified certifications, hackathon projects, and professional endorsements.
          </p>
        </div>

        {/* Filter Switcher Tabs (Only Certificates, Hackathons, Endorsements) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
          <button
            type="button"
            onClick={() => setActiveTab("cert")}
            className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "cert"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
            }`}
          >
            Certificates ({certCount})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("hackathon")}
            className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "hackathon"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
            }`}
          >
            Hackathons ({hackCount})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("testimonial")}
            className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "testimonial"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
            }`}
          >
            Endorsements ({testCount})
          </button>
        </div>

        {/* Small Compact Cards Grid (Zero Endless Scrolling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="group relative flex flex-col justify-between p-4.5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-cyan-500/50 hover:bg-zinc-900/95 transition-all duration-300 backdrop-blur-md shadow-sm"
              >
                <div>
                  {/* Top: Category Pill + Year */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-cyan-400 truncate">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                      {item.year}
                    </span>
                  </div>

                  {/* Title / Name */}
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-1">
                    {item.title}
                  </h3>

                  {/* Issuer or Role */}
                  <p className="text-xs text-zinc-400 font-medium mb-2.5 truncate">
                    {item.issuer}
                  </p>

                  {/* Quote if Testimonial */}
                  {item.quote && (
                    <p className="text-xs text-zinc-300 italic leading-relaxed mb-3 line-clamp-3 bg-zinc-950/50 p-2.5 rounded-xl border border-zinc-800/60">
                      "{item.quote}"
                    </p>
                  )}
                </div>

                {/* Bottom: Skills Tags */}
                <div className="pt-2.5 border-t border-zinc-800/60 flex flex-wrap gap-1">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
