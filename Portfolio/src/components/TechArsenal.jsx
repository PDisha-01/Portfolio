import { motion } from "framer-motion";
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

const stackGroups = [
  {
    title: "Programming Languages",
    badge: "Core",
    items: [
      ["Python", "python", FaPython],
      ["Java", "java", FaJava],
      ["JavaScript", "javascript", FaJsSquare],
      ["TypeScript", "typescript", SiTypescript],
      ["SQL", "sql", SiMysql],
      ["HTML5", "html", FaHtml5],
      ["CSS3", "css", FaCss3Alt],
    ],
  },
  {
    title: "AI, ML & Computer Vision",
    badge: "Specialization",
    items: [
      ["PyTorch", "pytorch", SiPytorch],
      ["OpenAI CLIP", "clip", FaBrain],
      ["OpenCV", "opencv", SiOpencv],
      ["Scikit-learn", "sklearn", SiScikitlearn],
      ["NumPy", "numpy", SiNumpy],
      ["Pandas", "pandas", SiPandas],
    ],
  },
  {
    title: "Frontend Engineering",
    badge: "UI/UX",
    items: [
      ["React 19", "react", FaReact],
      ["Tailwind CSS", "tailwind", SiTailwindcss],
      ["Framer Motion", "framer", SiFramer],
      ["Responsive UI", "responsive", FaCss3Alt],
    ],
  },
  {
    title: "Backend & Systems",
    badge: "Architecture",
    items: [
      ["FastAPI", "fastapi", SiFastapi],
      ["Spring Boot", "springboot", SiSpringboot],
      ["Flask", "flask", SiFlask],
      ["Hibernate", "hibernate", SiHibernate],
      ["RESTful APIs", "rest", SiPostman],
    ],
  },
  {
    title: "Databases, Cloud & Dev Tools",
    badge: "Ecosystem",
    items: [
      ["PostgreSQL", "postgres", SiPostgresql],
      ["MongoDB", "mongodb", SiMongodb],
      ["Prisma ORM", "prisma", SiPrisma],
      ["Git", "git", FaGitAlt],
      ["GitHub", "github", FaGithub],
      ["VS Code", "vscode", VscCode],
      ["Postman", "postman", SiPostman],
      ["Vercel", "vercel", SiVercel],
    ],
  },
];

export default function TechArsenal() {
  return (
    <section className="tech-section" id="skills">
      <motion.div
        className="tech-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>CHAPTER • 03</span>

        <h2>Technical Arsenal</h2>

        <p>
          Production-tested technologies, machine learning frameworks, and modern
          engineering tools I use to build scalable, intelligent applications.
        </p>
      </motion.div>

      <div className="tech-stack-wrapper">
        <div className="tech-stack-intro">
          <span>CORE COMPETENCIES</span>

          <h3>What I Build With</h3>

          <p>
            A comprehensive spectrum across computer vision, full-stack web
            development, backend microservices, data science pipelines, and cloud
            deployment.
          </p>
        </div>

        <div className="tech-groups">
          {stackGroups.map((group, groupIndex) => (
            <motion.div
              className="tech-group"
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: groupIndex * 0.08,
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="m-0">{group.title}</h4>
                <span className="text-[10px] uppercase tracking-widest font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {group.badge}
                </span>
              </div>

              <div className="tech-pills-grid">
                {group.items.map(([label, id, Icon]) => (
                  <motion.div
                    className="tech-stack-pill"
                    key={id}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon aria-hidden="true" className="text-cyan-400" />
                    <span>{label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
