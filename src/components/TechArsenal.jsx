import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaGitAlt, FaGithub, FaJava } from "react-icons/fa";
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
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { techData } from "../data/techData";

const stackGroups = [
  {
    title: "Languages",
    items: [
      ["Java", "java", FaJava],
      ["JavaScript", "javascript", FaJsSquare],
      ["Python", "python", FaPython],
      ["SQL", "mysql", SiMysql],
    ],
  },
  {
    title: "Frontend",
    items: [
      ["React", "react", FaReact],
      ["HTML5", "html", FaHtml5],
      ["CSS3", "css", FaCss3Alt],
      ["Tailwind CSS", "tailwind", SiTailwindcss],
    ],
  },
  {
    title: "Backend & Database",
    items: [
      ["Spring Boot", "springboot", SiSpringboot],
      ["Flask", "flask", SiFlask],
      ["MongoDB", "mongodb", SiMongodb],
      ["Hibernate", "hibernate", SiHibernate],
    ],
  },
  {
    title: "Tools & AI/ML",
    items: [
      ["Git", "git", FaGitAlt],
      ["GitHub", "github", FaGithub],
      ["VS Code", "vscode", VscCode],
      ["NumPy", "numpy", SiNumpy],
      ["Pandas", "pandas", SiPandas],
      ["Scikit-learn", "sklearn", SiScikitlearn],
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
        <span>CHAPTER 03</span>

        <h2>TECHNICAL STACK</h2>

        <p>
          Technologies and tools I use to design, develop, integrate,
          and build practical applications.
        </p>
      </motion.div>

      <div className="tech-stack-wrapper">
        <div className="tech-stack-intro">
          <span>CORE SKILLS</span>

          <h3>What I Work With</h3>

          <p>
            A focused overview of my technical skills across programming,
            frontend development, backend development, databases, tools,
            and AI/ML.
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
                delay: groupIndex * 0.1,
              }}
              viewport={{ once: true }}
            >
              <h4>{group.title}</h4>

              <div className="tech-pills-grid">
                {group.items.map(([label, id, Icon]) => (
                  <motion.div
                    className="tech-stack-pill"
                    key={id}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon aria-hidden="true" />

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