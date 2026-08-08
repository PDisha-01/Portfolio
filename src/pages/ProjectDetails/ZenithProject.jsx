import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ZenithProject.css";
import zenithHome from "../../assets/ZenithProject/home.png";
import zenithProjects from "../../assets/ZenithProject/projects.png";
import zenithAbout from "../../assets/ZenithProject/about.png";

export default function ZenithProject() {
  return (
    <section className="zenith-project">

      {/* Back Button */}
      <Link to="/#projects" className="back-project">
        ← Back to Projects
      </Link>

      {/* Hero */}
      <motion.div
        className="zenith-project-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="project-label">
          WEB DEVELOPMENT • UI/UX
        </span>

        <h1>Personal Portfolio</h1>

        <p>
          A modern developer portfolio designed to showcase my
          technical journey, projects, skills, and passion for
          building intelligent digital experiences.
        </p>
<div className="project-client">
  <span>Client</span>
  <strong>Personal Project</strong>
</div>
      </motion.div>

      {/* Content */}
      <div className="zenith-project-content">

        {/* Challenges */}
        <motion.div
          className="project-detail-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span>01</span>

          <h2>Challenges</h2>

          <p>
            Creating a personal portfolio that feels distinctive,
            responsive, and professional while presenting multiple
            projects, technical skills, and personal information
            without making the interface feel overloaded.
          </p>
        </motion.div>

        {/* Solution */}
        <motion.div
          className="project-detail-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span>02</span>

          <h2>Solution</h2>

          <p>
            I developed a responsive portfolio using React with a
            modern dark visual system, interactive animations,
            reusable components, project showcases, and a clean
            navigation experience.
          </p>
        </motion.div>

      </div>

      {/* Actions */}
      <motion.div
        className="project-actions"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="https://portfolio-sigma-rose-67.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="live-demo-btn"
        >
          Live Demo ↗
        </a>

        <a
  href="https://github.com/PDisha-01/Portfolio"
  target="_blank"
  rel="noopener noreferrer"
  className="github-project-btn"
>
  GitHub ↗
</a>
      </motion.div>
      {/* Interface */}
<motion.div
  className="interface-section"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <span>03</span>

  <h2>Interface</h2>

  <p>
    A modern, responsive interface featuring a dark visual
    system, interactive navigation, animated sections, and
    a clean project showcase designed for a professional
    developer portfolio.
  </p>

  <div className="interface-gallery">

  <div className="interface-main">
    <img
      src={zenithHome}
      alt="Zenith Portfolio Home Interface"
    />
  </div>

  <div className="interface-small">

    <img
      src={zenithProjects}
      alt="Zenith Portfolio Projects Interface"
    />

    <img
      src={zenithAbout}
      alt="Zenith Portfolio About Interface"
    />

  </div>

</div>
</motion.div>

{/* Tech Stack */}
<motion.div
  className="project-detail-card"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.3 }}
>
  <span>04</span>

  <h2>Tech Stack</h2>

  <div className="tech-stack-list">
    <span>React</span>
    <span>JavaScript</span>
    <span>Tailwind CSS</span>
    <span>Framer Motion</span>
    <span>React Router</span>
    <span>Vercel</span>
  </div>
</motion.div>
{/* Achievements */}
<motion.div
  className="achievements-section"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="achievement-heading">
    <span>04</span>

    <h2>Achievements</h2>

    <p>
      Key outcomes achieved while designing and developing
      the Zenith personal portfolio.
    </p>
  </div>

  <div className="achievements-grid">

    <motion.div
      className="achievement-card"
      whileHover={{ y: -8 }}
    >
      <span className="achievement-number">01</span>
      <h3>Responsive Design</h3>
      <p>
        Built a responsive portfolio experience that adapts
        across desktop, tablet, and mobile devices.
      </p>
    </motion.div>

    <motion.div
      className="achievement-card"
      whileHover={{ y: -8 }}
    >
      <span className="achievement-number">02</span>
      <h3>Interactive Experience</h3>
      <p>
        Added smooth animations, transitions, hover effects,
        and interactive navigation using modern frontend tools.
      </p>
    </motion.div>

    <motion.div
      className="achievement-card"
      whileHover={{ y: -8 }}
    >
      <span className="achievement-number">03</span>
      <h3>Project Showcase</h3>
      <p>
        Created dedicated project pages to present technical
        work, interfaces, challenges, solutions, and outcomes.
      </p>
    </motion.div>

    <motion.div
      className="achievement-card"
      whileHover={{ y: -8 }}
    >
      <span className="achievement-number">04</span>
      <h3>Live Deployment</h3>
      <p>
        Successfully deployed the portfolio online, making
        the project accessible as a live professional showcase.
      </p>
    </motion.div>

  </div>
</motion.div>
{/* Back To Top */}
<motion.div
  className="back-to-top-wrapper"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <a href="#" className="back-to-top">
    Back to Top ↑
  </a>
</motion.div>

    </section>
    
  );
}