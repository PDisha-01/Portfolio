import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import resume from "../assets/disha_resume.pdf";
import { MdEmail } from "react-icons/md";
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
            <div className="hero-badge">Introducing</div>

            <h1 className="hero-name">
              Disha <span>Mallick</span>
            </h1>

            <div className="hero-role" aria-label="Professional roles">
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  
                  "AI/ML Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="hero-description">
              I build responsive web applications and practical AI-powered
              solutions, combining clean interfaces with real-world problem
              solving.
            </p>

            <div className="hero-buttons">
              <a className="primary-btn" href="#projects">
                View Projects <span aria-hidden="true">↗</span>
              </a>

              <a
  className="secondary-btn"
  href={resume}
  download="Disha_Mallick_Resume.pdf"
  aria-label="Download Disha Mallick's resume"
>
  <FaFileAlt aria-hidden="true" />
  Download Resume
</a>
            </div>

            <div className="hero-proof">
              <span>LET'S  CONNECT !</span>
            
            </div>

            <div className="hero-icons" aria-label="Social links">
              <a
                href="https://github.com/PDisha-01"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dishamallick"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>

              <a href="mailto:mallickdisha186@gmail.com" aria-label="Email">
                <MdEmail />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="hero-image" aria-label="Profile photo">
            <div className="profile-orbit profile-orbit-one" aria-hidden="true" />
            <div className="profile-orbit profile-orbit-two" aria-hidden="true" />
            <div className="profile-circle">
              <img
                src={profile}
                alt="Disha Mallick"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      <About />
    </>
  );
}

export default Home;
