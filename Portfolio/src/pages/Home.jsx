import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiSparkles, HiChatBubbleLeftRight, HiArrowUpRight } from "react-icons/hi2";
import resume from "../assets/disha resume.pdf";
import profile from "../assets/hero photo.jpeg";
import About from "./about";

function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-bg-glow hero-bg-glow-left" aria-hidden="true" />
        <div className="hero-bg-glow hero-bg-glow-right" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
              <span>B.TECH CSE '26 • FULL-STACK &amp; AI/ML ENGINEER</span>
            </div>

            <h1 className="hero-name">
              Disha <span>Mallick</span>
            </h1>

            <div className="hero-role" aria-label="Professional roles">
              <TypeAnimation
                sequence={[
                  "Full-Stack Web Developer",
                  2200,
                  "AI & Machine Learning Engineer",
                  2200,
                  "Computer Vision Specialist (CLIP & YOLO)",
                  2200,
                  "Robonixx Club Event Head",
                  2200,
                  "B.Tech CSE '26 @ BCET",
                  2200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="hero-description">
              Final-year Computer Science engineer building intelligent multimodal
              systems, responsive full-stack applications, and real-time computer vision
              models that bridge creative design and high-performance engineering.
            </p>

            <div className="hero-buttons">
              <a className="primary-btn" href="#projects">
                <span>Explore Projects</span>
                <HiArrowUpRight aria-hidden="true" className="text-lg" />
              </a>

              <a
                className="secondary-btn"
                href={resume}
                download="Disha_Mallick_Resume.pdf"
                aria-label="Download Disha Mallick's resume"
              >
                <FaFileAlt aria-hidden="true" />
                <span>Download Resume</span>
              </a>

              <a
                className="secondary-btn hero-connect-btn"
                href="#contact"
                aria-label="Contact Disha"
              >
                <HiChatBubbleLeftRight aria-hidden="true" />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="hero-stats-strip" aria-label="Key highlights">
              <div className="hero-stat-item">
                <span className="hero-stat-num">5+</span>
                <span className="hero-stat-text">Projects Built</span>
              </div>
              <div className="hero-stat-divider" aria-hidden="true" />
              <div className="hero-stat-item">
                <span className="hero-stat-num">2</span>
                <span className="hero-stat-text">Industry Internships</span>
              </div>
              <div className="hero-stat-divider" aria-hidden="true" />
              <div className="hero-stat-item">
                <span className="hero-stat-num">7.5</span>
                <span className="hero-stat-text">B.Tech CGPA</span>
              </div>
              <div className="hero-stat-divider" aria-hidden="true" />
              <div className="hero-stat-item">
                <span className="hero-stat-num">Top 3</span>
                <span className="hero-stat-text">Techfest &amp; NSS</span>
              </div>
            </div>

            {/* Social Connect Icons */}
            <div className="hero-icons" aria-label="Social links">
              <a
                href="https://github.com/PDisha-01"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dishamallick"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>

              <a href="mailto:mallickdisha186@gmail.com" aria-label="Email Disha">
                <MdEmail />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Holographic 3D Profile Showcase */}
          <div className="hero-image" aria-label="Disha Mallick profile showcase">
            <div className="hero-visual">
              <div className="hero-visual-glow" aria-hidden="true" />

              {/* Floating Pill - Top Left */}
              <div className="floating-card floating-card-one">
                <span>SPECIALIZATION</span>
                <strong>⚡ AI/ML &amp; React 19</strong>
              </div>

              {/* Holographic Profile Frame */}
              <div className="hero-image-frame">
                <img
                  src={profile}
                  alt="Disha Mallick - Full-Stack Developer & AI/ML Engineer"
                  className="hero-computer-image"
                />
                <div className="hero-image-overlay" />
                <div className="hero-image-label">
                  <span className="status-dot" />
                  <span>DISHA MALLICK • BCET '26</span>
                </div>
              </div>

              {/* Floating Pill - Bottom Right */}
              <div className="floating-card floating-card-two">
                <span>HACKATHON</span>
                <strong>🏆 Pantheon '25 BIT Mesra</strong>
              </div>

              {/* Floating Pill - Bottom Left */}
              <div className="floating-card floating-card-three">
                <span>LOCATION</span>
                <strong>📍 West Bengal, India</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
    </>
  );
}

export default Home;
