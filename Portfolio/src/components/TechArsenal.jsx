import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaBrain,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFlask,
  SiMongodb,
  SiHibernate,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiSpringboot,
  SiMysql,
  SiTypescript,
  SiPrisma,
  SiVercel,
  SiFastapi,
  SiPytorch,
  SiOpencv,
  SiPostgresql,
  SiFramer,
  SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const categories = [
  "All",
  "Languages",
  "AI & Vision",
  "Frontend",
  "Backend",
  "Databases & Tools",
];

const allTech = [
  // Languages
  { name: "Python", category: "Languages", icon: FaPython, highlight: true },
  { name: "Java", category: "Languages", icon: FaJava, highlight: true },
  { name: "JavaScript", category: "Languages", icon: FaJsSquare },
  { name: "TypeScript", category: "Languages", icon: SiTypescript },
  { name: "SQL", category: "Languages", icon: SiMysql },
  { name: "HTML5", category: "Languages", icon: FaHtml5 },
  { name: "CSS3", category: "Languages", icon: FaCss3Alt },

  // AI & Vision
  { name: "PyTorch", category: "AI & Vision", icon: SiPytorch, highlight: true },
  { name: "OpenAI CLIP", category: "AI & Vision", icon: FaBrain, highlight: true },
  { name: "OpenCV", category: "AI & Vision", icon: SiOpencv, highlight: true },
  { name: "Scikit-learn", category: "AI & Vision", icon: SiScikitlearn },
  { name: "NumPy", category: "AI & Vision", icon: SiNumpy },
  { name: "Pandas", category: "AI & Vision", icon: SiPandas },

  // Frontend
  { name: "React 19", category: "Frontend", icon: FaReact, highlight: true },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, highlight: true },
  { name: "Framer Motion", category: "Frontend", icon: SiFramer },
  { name: "Responsive UI", category: "Frontend", icon: FaCss3Alt },

  // Backend
  { name: "FastAPI", category: "Backend", icon: SiFastapi, highlight: true },
  { name: "Spring Boot", category: "Backend", icon: SiSpringboot, highlight: true },
  { name: "Flask", category: "Backend", icon: SiFlask },
  { name: "Hibernate", category: "Backend", icon: SiHibernate },
  { name: "RESTful APIs", category: "Backend", icon: SiPostman },

  // Databases & Tools
  { name: "PostgreSQL", category: "Databases & Tools", icon: SiPostgresql, highlight: true },
  { name: "MongoDB", category: "Databases & Tools", icon: SiMongodb },
  { name: "Prisma ORM", category: "Databases & Tools", icon: SiPrisma },
  { name: "Git", category: "Databases & Tools", icon: FaGitAlt },
  { name: "GitHub", category: "Databases & Tools", icon: FaGithub },
  { name: "VS Code", category: "Databases & Tools", icon: VscCode },
  { name: "Postman", category: "Databases & Tools", icon: SiPostman },
  { name: "Vercel", category: "Databases & Tools", icon: SiVercel },
];

export default function TechArsenal() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTech = allTech.filter((tech) => {
    if (activeCategory === "All") return true;
    return tech.category === activeCategory;
  });

  return (
    <section className="tech-section py-12 md:py-14 px-5 md:px-8" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Compact Header (No long explanation) */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-[11px] uppercase tracking-[3px] font-mono font-bold text-zinc-500 dark:text-zinc-400 block mb-2">
              SKILLS &amp; TECHNOLOGIES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight m-0 text-zinc-950 dark:text-white">
              Technical Arsenal
            </h2>
          </div>

          <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
            <span>← Sideways Scrollable →</span>
          </div>
        </motion.div>

        {/* Adjustable Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? allTech.length
                : allTech.filter((t) => t.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4 py-2 rounded-full font-mono text-xs font-bold tracking-wider whitespace-nowrap transition-all cursor-pointer
                  ${
                    isActive
                      ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-md border dark:border-white border-zinc-950"
                      : "bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600"
                  }
                `}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Sideways Rail & Compact Grid */}
        <div className="relative">
          {/* Sideways Scrollable Rail */}
          <motion.div
            layout
            className="
              flex
              gap-3.5
              overflow-x-auto
              pb-4
              pt-2
              px-1
              scrollbar-thin
              scrollbar-thumb-zinc-700
              scrollbar-track-transparent
            "
          >
            <AnimatePresence mode="popLayout">
              {filteredTech.map((tech) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -4, scale: 1.04 }}
                    transition={{ duration: 0.2 }}
                    className={`
                      flex-shrink-0
                      flex
                      items-center
                      gap-3
                      px-4
                      py-3
                      rounded-xl
                      border
                      backdrop-blur-md
                      transition-all
                      cursor-default
                      ${
                        tech.highlight
                          ? "bg-zinc-200/80 dark:bg-zinc-800/80 border-zinc-300 dark:border-zinc-700 text-zinc-950 dark:text-white shadow-sm"
                          : "bg-zinc-100/70 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-300"
                      }
                    `}
                  >
                    <Icon className="text-xl text-zinc-800 dark:text-zinc-200 flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-semibold text-xs tracking-wide">
                        {tech.name}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                        {tech.category}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
