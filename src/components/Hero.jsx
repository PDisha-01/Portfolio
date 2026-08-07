import profile from "../assets/images/profile photo.jpeg";
import resume from "../assets/resume_disha.pdf";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen overflow-hidden bg-[#020617] text-white flex items-center px-8 md:px-16 lg:px-24"
>

  {/* Background Glow */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[150px]"></div>

  <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[150px]"></div>

  {/* Grid */}
  <div
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage: `
      linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

    {/* Left */}
    <div className="max-w-2xl">

      <p className="text-blue-400 text-xl mb-4">
        
      </p>

     

      <h1 className="text-5xl md:text-7xl font-bold font-[Gradient] leading-tight">
  Disha
  <span className="text-blue-500"> Mallick</span>
</h1>

<div className="mt-6 text-xl md:text-2xl font-semibold text-purple-400">
  <TypeAnimation
    sequence={[
      "Software Engineer",
      1000,
      "AI/ML Enthusiast",
      1000,
      "Full Stack Developer",
      1000,
    ]}
  />
</div>
      <p className="mt-8 text-gray-300 leading-8 italic text-lg">
        I build modern web applications and AI-powered solutions using
        React, Python, Flask and Machine Learning. Passionate about solving
        real-world problems through technology.
      </p>

      {/* Buttons */}

<div className="flex gap-6 mt-10">

  <a
  href={resume}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold duration-300 inline-block"
>
  Download Resume
</a>

  <button className="border border-blue-500 hover:bg-blue-500 px-8 py-3 rounded-xl duration-300">
    Contact Me
  </button>

</div>

      {/* Icons */}

      <div className="flex gap-8 mt-10 text-3xl">

        <a
          href="https://github.com/PDisha-01"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/dishamallick"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:mallickdisha186@gmail.com"
          className="hover:text-blue-400 duration-300"
        >
          <FaEnvelope />
        </a>

      </div>

    </div>

    {/* Right */}

    <div className="relative">

      <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30"></div>

      <img
        src={profile}
        alt="Disha Mallick"
        className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.6)] float-animation"
      />

    </div>

  </div>

</section>
  );
}

export default Hero;