import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowUpRight, HiChatBubbleLeftRight } from "react-icons/hi2";
import resume from "../assets/disha resume.pdf";
import profile from "../assets/hero photo.jpeg";
import About from "./about";

function Home() {
  return (
    <>
      <section className="hero hero-engineer-theme" id="home">
        {/* Full Engineering Blueprint Grid & Crosshair Markers */}
        <div className="hero-blueprint-grid" aria-hidden="true" />
        <div className="hero-blueprint-vignette" aria-hidden="true" />

        {/* Technical Blueprint Coordinates */}
        <div className="hero-tech-marker marker-tl" aria-hidden="true">+ [23°35'12" N // 87°18'44" E]</div>
        <div className="hero-tech-marker marker-tr" aria-hidden="true">+ [DISCIPLINE: COMP_SCI_ENG]</div>
        <div className="hero-tech-marker marker-bl" aria-hidden="true">+ [SYSTEM: ONLINE // v2026]</div>
        <div className="hero-tech-marker marker-br" aria-hidden="true">+ [CAD_REV: 04.2]</div>

        {/* Photograph as Atmospheric Background Element */}
        <div className="hero-photo-bg" aria-hidden="true">
          <img
            src={profile}
            alt=""
            className="hero-photo-bg-img"
          />
          <div className="hero-photo-bg-gradient" />
        </div>

        <div className="hero-inner hero-inner-engineer">
          <div className="hero-content hero-content-full">
            {/* Engineering Specification Badge */}
            <div className="hero-spec-badge">
              <span className="hero-spec-dot" aria-hidden="true" />
              <span>[ SPEC: B.TECH CSE '26 // FULL-STACK &amp; SOFTWARE SYSTEMS ]</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-engineer-name">
              DISHA <span>MALLICK</span>
            </h1>

            {/* Dynamic Role */}
            <div className="hero-engineer-role" aria-label="Professional focus">
              <span className="hero-role-prompt">&gt;</span>
              <TypeAnimation
                sequence={[
                  "Full-Stack Software Engineer",
                  2200,
                  "Systems & Web Application Architect",
                  2200,
                  "Infosys Springboard Virtual Intern",
                  2200,
                  "Robonixx Club Event Operations Head",
                  2200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Description */}
            <p className="hero-engineer-description">
              Final-year Computer Science engineer architecting robust full-stack applications,
              scalable backend services, and clean digital systems with disciplined engineering
              principles and modern frameworks.
            </p>

            {/* Action Buttons */}
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

            {/* Technical Metadata Tags */}
            <div className="hero-meta-strip" aria-label="Quick specs">
              <span className="hero-meta-chip">
                <span className="meta-chip-label">ROLE:</span> Available for Software Roles
              </span>
              <span className="hero-meta-chip">
                <span className="meta-chip-label">INSTITUTION:</span> BCET Durgapur (MAKAUT)
              </span>
              <span className="hero-meta-chip">
                <span className="meta-chip-label">LOCATION:</span> West Bengal, India
              </span>
            </div>

            {/* Social Connect Icons */}
            <div className="hero-icons hero-icons-engineer" aria-label="Engineering links">
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
        </div>
      </section>

      <About />
    </>
  );
}

export default Home;
