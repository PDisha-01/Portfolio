import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "../assets/profile photo.jpeg";
import About from "./About";
function Home() {
  return (
     <>
    <section className="hero" 
    id="home">

      <div className="hero-content">

        <p className="hero-greeting">
          Hello, I'm
        </p>

        <h1 className="hero-name">
          Disha Mallick
        </h1>

        <div className="hero-role">
  <TypeAnimation
    sequence={[
      "Full Stack Developer",
      2000,
      "AI & Machine Learning Enthusiast",
      2000,
        "Software Engineer",
        2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</div>
<p> </p>

        <p className="hero-quote">
  “Every line of code is a step toward the <span>ZENITH</span> of innovation,
  where ideas transform into impactful solutions.”
</p>

<div className="hero-icons">

  <a
  href="https://github.com/PDisha-01"
  target="_blank"
  rel="noreferrer"
>
  <FaGithub />
  <span>GitHub</span>
</a>

  <a
    href="https://linkedin.com/in/dishamallick"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin />
    <span>LinkedIn</span>
  </a>

  <a
  href="/c:\Users\HP\Downloads\resume_disha.pdf"
  target="_blank"
  rel="noreferrer"
>
  <FaFileAlt />
  <span>Resume</span>
</a>

  <a href="mailto:mallickdisha186@gmail.com">
    <MdEmail />
    <span>Email</span>
  </a>

</div>

      </div>

      <div className="hero-image">

        <div className="profile-circle">
  <img
    src={profile}
    alt="Disha Mallick"
    className="profile-image"
  />
</div>

      </div>

    </section>
    <About />

    </> 
  );
}

export default Home;