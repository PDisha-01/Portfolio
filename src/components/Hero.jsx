import heroPhoto from "../assets/hero photo.jpeg";
import resume from "../assets/disha_resume.pdf";

import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero-section">

      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>


      {/* =========================
          GRID BACKGROUND
      ========================== */}

      <div className="hero-grid"></div>


      {/* =========================
          HERO CONTENT
      ========================== */}

      <div className="hero-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}

        <div className="hero-content">

          <span className="hero-small-text">
            HELLO, I'M
          </span>


          <h1 className="hero-name">
            Disha
            <span> Mallick</span>
          </h1>


          {/* Typing Animation */}

          <div className="hero-role">

            <TypeAnimation
              sequence={[
                "AI/ML Enthusiast",
                1200,
                "Full Stack Developer",
                1200,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>


          {/* Description */}

          <p className="hero-description">
            I build modern web applications and AI-powered solutions using
            React, Python, Flask and Machine Learning. Passionate about solving
            real-world problems through technology.
          </p>


          {/* =========================
              BUTTONS
          ========================== */}

          <div className="hero-buttons">

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-primary"
            >
              Download Resume
            </a>


            <a
              href="#contact"
              className="hero-btn hero-btn-outline"
            >
              Contact Me
            </a>

          </div>


          {/* =========================
              SOCIAL ICONS
          ========================== */}

          <div className="hero-socials">

            <a
              href="https://github.com/PDisha-01"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>


            <a
              href="https://www.linkedin.com/in/dishamallick"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>


            <a
              href="mailto:mallickdisha186@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>


        {/* =========================
            RIGHT IMAGE
        ========================== */}

        <div className="hero-image-wrapper">

          {/* Outer glow */}

          <div className="hero-image-glow"></div>


          {/* Decorative rings */}

          <div className="hero-ring hero-ring-one"></div>
          <div className="hero-ring hero-ring-two"></div>


          {/* Image */}

          <div className="hero-image-box">

            <img
              src={heroPhoto}
              alt="Disha Mallick"
              className="hero-image"
            />

          </div>

        </div>

      </div>


      {/* =========================
          SCROLL INDICATOR
      ========================== */}

      <a href="#about" className="hero-scroll">

        <span>SCROLL</span>

        <FaArrowDown />

      </a>

    </section>
  );
}

export default Hero;