import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowUpRight, HiChatBubbleLeftRight } from "react-icons/hi2";
import resume from "../assets/disha resume.pdf";
import dishaPortrait from "../assets/disha-portrait.jpg";
import About from "./about";

function Home() {
  return (
    <>
      <section id="home" className="relative pt-24 pb-14 md:pt-32 md:pb-20 px-5 sm:px-8 max-w-6xl mx-auto overflow-hidden">
        {/* Subtle Background Glow */}
        <div
          className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-cyan-500/[0.03] blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bio & Core Info (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 mb-5 w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open for Software Engineering Roles • 2027 Class</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 leading-tight">
              Disha Mallick
            </h1>

            {/* Role Title */}
            <p className="text-base sm:text-lg md:text-xl font-medium font-mono text-cyan-400 mb-4">
              &gt; Full-Stack Software Developer
            </p>

            {/* Authentic Description */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6 max-w-xl">
              Passionate about crafting seamless digital experiences, I specialize in building robust web applications with a focus on performance and user-centric design. With a strong foundation in both front-end and back-end technologies, I thrive on transforming complex problems into elegant solutions. Let's collaborate to bring innovative ideas to life!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-mono text-xs font-bold transition-all duration-200 shadow-md shadow-cyan-500/10 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <HiArrowUpRight className="text-sm" />
              </a>

              <a
                href={resume}
                download="Disha_Mallick_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white font-mono text-xs font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                aria-label="Download Disha Mallick's resume"
              >
                <FaFileAlt className="text-xs text-zinc-400" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-zinc-700 text-zinc-300 hover:text-white font-mono text-xs font-medium transition-all duration-200"
                aria-label="Contact Disha"
              >
                <HiChatBubbleLeftRight className="text-xs text-zinc-400" />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Meta & Social Links */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-3 border-t border-zinc-900">
              <span className="text-zinc-400">
                📍 West Bengal, India
              </span>
              <span className="text-zinc-700 hidden sm:inline">•</span>
              <a
                href="https://github.com/PDisha-01"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <FaGithub size={13} />
                <span>GitHub</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="https://www.linkedin.com/in/dishamallick/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin size={13} />
                <span>LinkedIn</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="mailto:mallickdisha186@gmail.com"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <MdEmail size={13} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean, Natural Photograph (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Subtle Ambient Backlight Glow */}
              <div
                className="absolute -inset-2 rounded-3xl bg-cyan-500/10 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Photo Card Frame */}
              <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/80">
                <img
                  src={dishaPortrait}
                  alt="Disha Mallick"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />
    </>
  );
}

export default Home;
