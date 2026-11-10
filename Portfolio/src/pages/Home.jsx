import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowUpRight, HiChatBubbleLeftRight, HiSparkles } from "react-icons/hi2";
import resume from "../assets/disha resume.pdf";
import dishaPortrait from "../assets/disha-portrait.jpg";
import About from "./about";

const inPageLinks = [
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experience" },
  { label: "Tech Arsenal", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

function Home() {
  return (
    <>
      <section className="hero-profile-section" id="home">
        {/* Soft Ambient Glows (Smooth Transition) */}
        <div
          className="absolute top-1/4 right-1/4 w-[480px] h-[480px] rounded-full bg-cyan-500/[0.035] blur-[140px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 left-10 w-[380px] h-[380px] rounded-full bg-zinc-400/[0.02] blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="hero-profile-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Column: Developer Introduction & Highlights (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 mb-4 shadow-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Software Engineering Roles • 2026 Grad</span>
              </div>

              {/* Name Heading (Tasteful & Balanced) */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2.5">
                Disha <span className="bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500 bg-clip-text text-transparent">Mallick</span>
              </h1>

              {/* Clean Role Subtitle */}
              <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-medium text-cyan-400 mb-3.5">
                <span className="font-mono text-zinc-500">&gt;</span>
                <span>Full-Stack Software Engineer &amp; Systems Developer</span>
              </div>

              {/* Authentic Description */}
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-5 max-w-xl">
                Computer Science engineer at BCET Durgapur (MAKAUT). Currently a Virtual Intern at Infosys Springboard, architecting responsive full-stack applications, scalable backend microservices with Java &amp; Spring Boot, and practical Machine Learning systems.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <a
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-mono text-xs font-bold transition-all duration-200 shadow-md shadow-cyan-500/10"
                  href="#projects"
                >
                  <span>Explore Projects</span>
                  <HiArrowUpRight className="text-sm" />
                </a>

                <a
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-white font-mono text-xs font-semibold transition-all duration-200"
                  href={resume}
                  download="Disha_Mallick_Resume.pdf"
                  aria-label="Download Disha Mallick's resume"
                >
                  <FaFileAlt className="text-xs" />
                  <span>Download Resume</span>
                </a>

                <a
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 text-zinc-300 hover:text-white font-mono text-xs font-medium transition-all duration-200"
                  href="#contact"
                  aria-label="Contact Disha"
                >
                  <HiChatBubbleLeftRight className="text-xs" />
                  <span>Let's Talk</span>
                </a>
              </div>

              {/* Quick Specs & Social Links */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-mono mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  📍 West Bengal, India
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  🎓 B.Tech CSE (2026)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-cyan-300">
                  💼 Infosys Springboard Intern
                </span>
              </div>

              {/* In-Home Navigation Bar (Direct access to all pages/sections) */}
              <div className="pt-3.5 border-t border-zinc-800/70 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-zinc-500 mr-1 hidden sm:inline-block">NAVIGATE:</span>
                {inPageLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-2.5 py-1 rounded-lg bg-zinc-900/80 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500/40 border border-zinc-800 text-zinc-300 font-mono text-[11px] transition-all duration-150"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Photograph with Blurred Transition (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group/photo">
                {/* Ambient Blurred Aura Transition Behind Photo */}
                <div
                  className="hero-photo-ambient-blur"
                  style={{ backgroundImage: `url(${dishaPortrait})` }}
                  aria-hidden="true"
                />

                {/* Photo Frame Container with Soft Blurred Transition Edges */}
                <div className="hero-photo-frame">
                  <img
                    src={dishaPortrait}
                    alt="Disha Mallick"
                    className="hero-photo-natural"
                  />
                  {/* Blurred Perimeter Vignette Transition */}
                  <div className="hero-photo-blur-overlay" aria-hidden="true" />
                  {/* Feathered Bottom Blurred Fade Transition */}
                  <div className="hero-photo-bottom-fade" aria-hidden="true" />
                </div>

                {/* Micro Floating Status Badge */}
                <div className="absolute -bottom-3 -left-3 sm:-left-5 px-3.5 py-2 rounded-xl bg-zinc-900/95 border border-zinc-700/80 backdrop-blur-md shadow-2xl flex items-center gap-2.5 z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <div className="text-[11px] font-mono leading-tight">
                    <span className="block text-white font-semibold">Infosys Springboard</span>
                    <span className="block text-zinc-400 text-[10px]">Virtual Intern '26</span>
                  </div>
                </div>

                {/* Accolade Floating Badge */}
                <div className="absolute -top-3 -right-3 sm:-right-4 px-3 py-1.5 rounded-xl bg-zinc-900/95 border border-zinc-700/80 backdrop-blur-md shadow-2xl flex items-center gap-2 z-10">
                  <HiSparkles className="text-cyan-400 text-xs" />
                  <span className="text-[10px] font-mono text-zinc-300 font-medium">
                    Event Head @ Robonixx
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />
    </>
  );
}

export default Home;
