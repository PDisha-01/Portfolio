import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowUpRight, HiChatBubbleLeftRight } from "react-icons/hi2";
import resume from "../assets/disha resume.pdf";
import dishaPortrait from "../assets/disha-portrait.jpg";
import About from "./about";
import TechGraphicsBackground from "../components/TechGraphicsBackground";

function Home() {
  return (
    <>
      <section id="home" className="relative isolate overflow-hidden">
        {/* Computer Graphics with Neon Blue & Cyan Visible Effects */}
        <TechGraphicsBackground />

        <div className="relative z-10 pt-24 pb-14 md:pt-32 md:pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Bio & Core Info (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              {/* Availability Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-purple-200 text-xs font-mono text-purple-900 mb-5 w-fit shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Software Engineering Roles • 2027 Class</span>
              </div>

              {/* Name Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 mb-2 leading-tight">
                Disha Mallick
              </h1>

              {/* Role Title */}
              <p className="text-base sm:text-lg md:text-xl font-medium font-mono text-purple-600 mb-4">
                &gt; Full-Stack Software Developer
              </p>

              {/* Authentic Description */}
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6 max-w-xl">
                Passionate about crafting seamless digital experiences, I specialize in building robust web applications with a focus on performance and user-centric design. With a strong foundation in both front-end and back-end technologies, I thrive on transforming complex problems into elegant solutions. Let's collaborate to bring innovative ideas to life!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-mono text-xs font-bold transition-all duration-200 shadow-md shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore Projects</span>
                  <HiArrowUpRight className="text-sm" />
                </a>

                <a
                  href={resume}
                  download="Disha_Mallick_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-purple-50/80 border border-purple-200 text-zinc-800 font-mono text-xs font-semibold transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Download Disha Mallick's resume"
                >
                  <FaFileAlt className="text-xs text-purple-500" />
                  <span>Resume</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/70 hover:bg-purple-50/80 border border-purple-200 text-zinc-700 font-mono text-xs font-medium transition-all duration-200 shadow-sm"
                  aria-label="Contact Disha"
                >
                  <HiChatBubbleLeftRight className="text-xs text-purple-500" />
                  <span>Let's Talk</span>
                </a>
              </div>

              {/* Meta & Social Links */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-3 border-t border-purple-100">
                <span className="text-zinc-600">
                  📍 West Bengal, India
                </span>
                <span className="text-purple-200 hidden sm:inline">•</span>
                <a
                  href="https://github.com/PDisha-01"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-purple-700 transition-colors"
                >
                  <FaGithub size={13} />
                  <span>GitHub</span>
                </a>
                <span className="text-purple-200">•</span>
                <a
                  href="https://www.linkedin.com/in/dishamallick/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-purple-700 transition-colors"
                >
                  <FaLinkedin size={13} />
                  <span>LinkedIn</span>
                </a>
                <span className="text-purple-200">•</span>
                <a
                  href="mailto:mallickdisha186@gmail.com"
                  className="flex items-center gap-1.5 hover:text-purple-700 transition-colors"
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
                {/* Subtle Ambient Lavender Backlight Glow */}
                <div
                  className="absolute -inset-3 rounded-3xl bg-purple-300/40 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />

                {/* Photo Card Frame */}
                <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-200/90 bg-white shadow-2xl shadow-purple-900/10">
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
        </div>
      </section>

      {/* About Section */}
      <About />
    </>
  );
}

export default Home;
