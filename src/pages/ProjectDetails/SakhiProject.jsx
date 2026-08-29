import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./SakhiProject.css";

import sakhiHome from "../../assets/Sakhi/home.png";
import sakhiLogin from "../../assets/Sakhi/login.png";
import sakhiSafety from "../../assets/Sakhi/safety.png";
import sakhiEntrepreneur from "../../assets/Sakhi/entrepreneur.png";

export default function SakhiProject() {
  return (
    <section className="sakhi-project">

      {/* Back Button */}
      <Link to="/#projects" className="back-project">
        ← Back to Projects
      </Link>

      {/* Hero */}
      <motion.div
        className="sakhi-project-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="project-label">
          WEB DEVELOPMENT • WOMEN EMPOWERMENT
        </span>

        <h1>Sakhi — Women Empowerment</h1>

        <p>
          A digital platform created to support women through
          empowerment, safety awareness, career opportunities,
          and accessible resources in one user-friendly web
          experience.
        </p>

        <div className="project-client">
          <span>Client Name </span>
          <strong>Personal Project</strong>
        </div>
      </motion.div>

      {/* Content */}
      <div className="sakhi-project-content">

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
            Creating a platform that brings together women's
            safety, empowerment, career opportunities, and
            useful resources while keeping the experience
            simple, accessible, and easy to navigate.
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
            I developed Sakhi as a responsive web platform that
            brings together safety resources, empowerment
            opportunities, career-focused information, and
            user-focused features within a single digital
            experience.
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
          href="https://sakhi-women-empowerment.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="live-demo-btn"
        >
          Live Demo ↗
        </a>

        <a
          href="https://github.com/PDisha-01/Sakhi---women-empowerment-platform"
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
          Sakhi features a responsive and intuitive interface
          designed to make women's safety, empowerment,
          career opportunities, and essential resources
          easy to discover and access.
        </p>

        <div className="interface-gallery">

          {/* Main Screenshot */}
          <div className="interface-main">
            <img
              src={sakhiHome}
              alt="Sakhi Women Empowerment Home Interface"
            />
          </div>

          {/* Supporting Screenshots */}
          <div className="interface-small">

            <img
              src={sakhiLogin}
              alt="Sakhi Login Interface"
            />

            <img
              src={sakhiSafety}
              alt="Sakhi Women Safety Interface"
            />

            <img
              src={sakhiEntrepreneur}
              alt="Sakhi Entrepreneurship Interface"
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
          <span>HTML</span>
          <span>CSS</span>
          <span>Responsive Design</span>
          <span>Vercel</span>
          <span>Typescript</span>
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
          <span>05</span>

          <h2>Achievements</h2>

          <p>
            Key outcomes achieved while designing and developing
            the Sakhi women empowerment platform.
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
              Developed a responsive interface that adapts
              across desktop, tablet, and mobile devices.
            </p>
          </motion.div>

          <motion.div
            className="achievement-card"
            whileHover={{ y: -8 }}
          >
            <span className="achievement-number">02</span>

            <h3>Women Safety</h3>

            <p>
              Integrated safety-focused information and
              resources to make essential support easier
              to discover.
            </p>
          </motion.div>

          <motion.div
            className="achievement-card"
            whileHover={{ y: -8 }}
          >
            <span className="achievement-number">03</span>

            <h3>Empowerment & Opportunities</h3>

            <p>
              Created dedicated content and resources focused
              on women's empowerment, entrepreneurship, and
              personal growth.
            </p>
          </motion.div>

          <motion.div
            className="achievement-card"
            whileHover={{ y: -8 }}
          >
            <span className="achievement-number">04</span>

            <h3>Live Deployment</h3>

            <p>
              Successfully deployed Sakhi online, making the
              project accessible as a live web application.
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