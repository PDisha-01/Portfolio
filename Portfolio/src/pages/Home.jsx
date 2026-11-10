import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowUpRight, HiChatBubbleLeftRight } from "react-icons/hi2";
import resume from "../assets/disha resume.pdf";
import dishaPortrait from "../assets/disha-portrait.jpg";
import About from "./about";

function Home() {
  return (
    <>
      <section className="hero hero-watermark-layout" id="home">
        {/* Engineering Blueprint Grid */}
        <div className="hero-blueprint-grid" aria-hidden="true" />

        {/* Technical Coordinate Markers */}
        <div className="hero-tech-marker marker-tl" aria-hidden="true">+ [23°35'12" N // 87°18'44" E]</div>
        <div className="hero-tech-marker marker-tr" aria-hidden="true">+ [DISCIPLINE: COMP_SCI_ENG]</div>
        <div className="hero-tech-marker marker-bl" aria-hidden="true">+ [SYSTEM: ONLINE // v2026]</div>
        <div className="hero-tech-marker marker-br" aria-hidden="true">+ [CAD_REV: 04.2]</div>

        {/* Watermark-Style Photograph Background with Low Opacity */}
        <div className="hero-watermark-bg" aria-hidden="true">
          <img
            src={dishaPortrait}
            alt=""
            className="hero-watermark-img"
          />
          <div className="hero-watermark-overlay" />
        </div>

        {/* Foreground Content */}
        <div className="hero-inner-watermark">
          <div className="hero-content hero-content-proportional">
            {/* Engineering Status Tag */}
            <div className="hero-spec-badge">
              <span className="hero-spec-dot" aria-hidden="true" />
              <span>[ SPEC: B.TECH CSE '26 // FULL-STACK &amp; SOFTWARE SYSTEMS ]</span>
            </div>

            {/* Name Heading (Adjusted Font Size - Tasteful & Balanced) */}
            <h1 className="hero-name-adjusted">
              DISHA <span className="text-zinc-400">MALLICK</span>
            </h1>

            {/* Static Clean Title (No Sliding Phrases) */}
            <div className="hero-static-role">
              <span className="text-zinc-500 font-mono text-sm mr-2">&gt;</span>
              <span>Full-Stack Software Engineer &amp; Systems Developer</span>
            </div>

            {/* Description */}
            <p className="hero-description-proportional">
              Final-year Computer Science engineer architecting robust full-stack applications,
              scalable backend services, and clean digital systems with disciplined engineering
              principles and modern frameworks.
            </p>

            {/* Action Buttons */}
            <div className="hero-buttons">
              <a className="primary-btn-mono" href="#projects">
                <span>Explore Projects</span>
                <HiArrowUpRight aria-hidden="true" className="text-base" />
              </a>

              <a
                className="secondary-btn-mono"
                href={resume}
                download="Disha_Mallick_Resume.pdf"
                aria-label="Download Disha Mallick's resume"
              >
                <FaFileAlt aria-hidden="true" />
                <span>Download Resume</span>
              </a>

              <a
                className="secondary-btn-mono"
                href="#contact"
                aria-label="Contact Disha"
              >
                <HiChatBubbleLeftRight aria-hidden="true" />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Technical Metadata Chips */}
            <div className="hero-meta-strip" aria-label="Quick specs">
              <span className="hero-meta-chip">
                <span className="meta-chip-label">ROLE:</span> Open to Software Engineering Roles
              </span>
              <span className="hero-meta-chip">
                <span className="meta-chip-label">CAMPUS:</span> BCET Durgapur (MAKAUT)
              </span>
              <span className="hero-meta-chip">
                <span className="meta-chip-label">LOCATION:</span> West Bengal, India
              </span>
            </div>

            {/* Social Links */}
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
