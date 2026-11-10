import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

import aicteLogo from "../assets/aicte.jpeg";
import downloadLogo from "../assets/download.png";
import nssLogo from "../assets/nss.png";
import robonixLogo from "../assets/robonix.jpeg";

const experiences = [
  {
    logo: downloadLogo,
    company: "Infosys Springboard",
    role: "Virtual Intern",
    duration: "2026 – Present (Ongoing)",
    location: "Virtual / Remote, India",
    domain: "Software Engineering & Cloud Computing",
    project: "Enterprise Application Development & Cloud Architecture",
    toolkit: [
      "Java",
      "Python",
      "Cloud Fundamentals",
      "Database Architecture",
      "Agile Engineering",
    ],
    goal:
      "Gaining industry-grade software development experience covering modern architecture patterns, cloud deployment, and scalable code design.",
  },
  {
    logo: aicteLogo,
    company: "EDUSKILLS powered by AICTE",
    role: "Java Full Stack Developer",
    duration: "Jan 2026 – Mar 2026 (Remote)",
    location: "Durgapur, West Bengal, India",
    domain: "Full Stack Development (Java)",
    project: "Non-project internship covering Java Full Stack concepts",
    toolkit: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Spring Boot",
      "Hibernate",
    ],
    goal:
      "Learnt backend integration, REST APIs, and responsive UI development.",
  },
  {
    logo: downloadLogo,
    company: "Steel India Authority Limited (SAIL)",
    role: "Vocational Trainee (Internship)",
    duration: "Jun 2025 - July 2025 (On-site)",
    location: "Bokaro Steel Plant, Jharkhand, India",
    domain: "Machine Learning & AI",
    project: "ML-Laboratory & study on Python data science",
    toolkit: [
      "Python Pillow",
      "OS & Shutil",
      "Scikit-learn",
      "Iris & Titanic ML Datasets",
    ],
    goal:
      "Built a foundational understanding of Python scripting, data processing pipelines, and supervised machine learning.",
  },
  {
    logo: robonixLogo,
    company: "Robonixx Club @ BCET",
    role: "Event Management Head",
    duration: "Aug 2024 – Present",
    location: "Durgapur, West Bengal, India",
    domain: "Leadership & Technical Operations",
    project: "Robotics workshops, tech fests, college hackathons, and participant coordination",
    toolkit: [
      "Team Leadership",
      "Event Logistics",
      "Public Speaking",
      "Cross-Functional Coordination",
      "Student Outreach",
    ],
    goal:
      "Leading executive operations for BCET's robotics and tech club, orchestrating college fests and technical seminars.",
  },
];

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  // Initial visible experiences (first 2)
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <section
      id="experience"
      className="
        portfolio-section
        relative
        overflow-hidden
        px-6
        py-20
        md:px-10
        lg:px-16

        bg-slate-50
        text-slate-900

        dark:bg-[#050816]
        dark:text-white

        transition-colors
        duration-500
      "
    >
      {/* Background Glows */}
      <div
        className="
          absolute
          -top-40
          -left-32
          w-96
          h-96
          rounded-full
          bg-cyan-400/10
          dark:bg-cyan-400/10
          blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          -right-32
          w-[420px]
          h-[420px]
          rounded-full
          bg-purple-400/10
          dark:bg-purple-500/10
          blur-[150px]
          pointer-events-none
        "
      />

      {/* Blueprint Grid */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.035]
          dark:opacity-[0.04]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-1.5
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            shadow-[0_0_20px_rgba(34,211,238,0.08)]
          "
        >
          <span
            className="
              w-2
              h-2
              rounded-full
              bg-cyan-400
              animate-pulse
              shadow-[0_0_10px_#22d3ee]
            "
          />

          <span
            className="
              text-[11px]
              uppercase
              tracking-[3px]
              font-mono
              font-semibold
              text-cyan-600
              dark:text-cyan-400
            "
          >
            CAREER &amp; WORK HISTORY
          </span>
        </motion.div>

        {/* Main Heading - Clean Font Size */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mt-6
            text-3xl
            md:text-5xl
            font-extrabold
            tracking-tight
            bg-gradient-to-r
            from-slate-900
            via-slate-700
            to-slate-400
            dark:from-white
            dark:via-gray-200
            dark:to-gray-400
            bg-clip-text
            text-transparent
          "
        >
          Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mt-4
            max-w-3xl
            text-base
            md:text-lg
            leading-relaxed
            text-slate-600
            dark:text-gray-400
            transition-colors
            duration-500
          "
        >
          Hands-on internships, industrial vocational training, and technical club leadership
          that have built my engineering discipline and problem-solving mindset.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="
            origin-left
            mt-10
            h-px
            bg-gradient-to-r
            from-cyan-500
            via-purple-500
            to-transparent
          "
        />

        {/* Experience Cards Grid */}
        <div className="mt-12 pb-8">
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-6
            "
          >
            <AnimatePresence mode="popLayout">
              {visibleExperiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative"
                >
                  <ExperienceCard {...exp} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* See More Toggle Button */}
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="
                px-8
                py-3.5
                rounded-full
                font-mono
                text-xs
                md:text-sm
                font-bold
                tracking-wider
                uppercase
                border
                border-cyan-500/40
                bg-cyan-500/10
                text-cyan-600
                dark:text-cyan-400
                hover:bg-cyan-500/20
                hover:border-cyan-400
                transition-all
                duration-300
                shadow-[0_0_20px_rgba(6,182,212,0.12)]
                cursor-pointer
                flex
                items-center
                gap-2
              "
            >
              <span>
                {showAll
                  ? "Show Less ↑"
                  : `See More Experiences & Activities (${experiences.length - 2} More) ↓`}
              </span>
            </button>
          </div>

          {/* Community Engagement Section (Visible when expanded or always subtle) */}
          <AnimatePresence>
            {showAll && (
              <motion.section
                className="community-section mt-16"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="community-heading">
                  <span className="heading-line" />
                  <h3
                    className="
                      text-center
                      font-bold
                      tracking-[2.5px]
                      text-sm
                      md:text-base
                      text-slate-800
                      dark:text-white
                      transition-colors
                      duration-500
                    "
                  >
                    ✦ COMMUNITY SERVICE &amp; OUTREACH ✦
                  </h3>
                  <span className="heading-line" />
                </div>

                <div
                  className="
                    nss-card
                    mt-8
                    bg-white/80
                    dark:bg-white/[0.035]
                    border
                    border-slate-200
                    dark:border-white/10
                    backdrop-blur-xl
                    shadow-md
                    dark:shadow-none
                    transition-all
                    duration-500
                    p-6
                    md:p-8
                    rounded-2xl
                  "
                >
                  <div className="nss-content">
                    <div className="nss-title flex items-center gap-4">
                      <img
                        src={nssLogo}
                        alt="NSS Logo"
                        className="nss-logo w-14 h-14 object-contain"
                      />
                      <div>
                        <h4
                          className="
                            font-bold
                            text-lg
                            md:text-xl
                            text-slate-900
                            dark:text-white
                            transition-colors
                            duration-500
                            m-0
                          "
                        >
                          National Service Scheme (NSS) Volunteer
                        </h4>
                        <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-1 block">
                          Community Outreach &amp; Welfare Initiatives
                        </span>
                      </div>
                    </div>

                    <ul
                      className="
                        mt-5
                        space-y-2.5
                        text-sm
                        text-slate-600
                        dark:text-gray-400
                        leading-relaxed
                      "
                    >
                      <li>
                        • Dedicated volunteer contributing to community service, social awareness drives, and rural outreach campaigns.
                      </li>
                      <li>
                        • Awarded <strong>3rd Position in Photography — AASHA 2024</strong> (NSS Wing) for creative visual storytelling.
                      </li>
                      <li>
                        • Cultivated leadership, cross-functional collaboration, and civic responsibility through grassroots initiatives.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
