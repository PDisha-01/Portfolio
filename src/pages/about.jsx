import { motion } from "framer-motion";

import collegeLogo from "../assets/BCET.jpeg";
import schoolLogo from "../assets/dps.jpeg";

export default function About() {
  return (
    <>
      <section id="about" className="about-section">

        {/* Premium Chapter Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-widest uppercase text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          Chapter • 01
        </motion.div>

        {/* Main Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Dynamic Intro Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              The Story Behind
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
             I am a final year computer science student at Bengal College of Engineering and Technology, affiliated to MAKAUT, West Bengal, India. I have a strong interest in Artificial Intelligence, Machine Learning, and Web Development.
            </p>
             
            <p className="text-gray-400 text-base leading-relaxed font-light">
              I enjoy combining creativity with logic, transforming ideas into real-world applications, and continuously exploring modern technologies that challenge me to grow.
            </p>

            <p className="text-gray-400 text-base leading-relaxed font-light">
              Beyond academics, I am an event management head  of my college's Robonixx club, leading teams and large-scale event management. Also passionate of playing with rythm and beats and hooping basketball on the ground.
            </p>

          </motion.div>

          {/* Right Side: Glassmorphism Code Display Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 rounded-2xl shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--text)] flex items-center gap-2">
              <span className="text-purple-400 font-mono">&lt;/&gt;</span> The Code
            </h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed font-light relative z-10">
              Every project I build represents another chapter in my journey toward becoming an engineer who creates solutions people genuinely enjoy using.
            </p>
          </motion.div>

        </div>

      {/* Education Timeline */}

      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        className="mt-32"
      >


<h3 className="
text-sm
font-mono
tracking-[5px]
uppercase
text-cyan-400
mb-14
">

Education Journey

</h3>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <div className="relative w-full">

              <div className="absolute left-7 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"></div>

    {/* Education Item 1 */}

              <div className="relative flex gap-6 mb-12">

                <div className="relative z-10 w-14 h-14 rounded-full bg-white ring-4 ring-[#030712] shadow-lg flex items-center justify-center p-2">

                  <img
                    src={collegeLogo}
                    alt="BCET"
                    className="w-full h-full object-contain"
                  />

                </div>

                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6">

                  <p className="text-cyan-400 text-sm font-mono">
                    2023 – Present
                  </p>

                  <h4 className="text-2xl font-semibold mt-2">
                    Bachelor of Technology
                  </h4>

                  <p className="text-gray-400 mt-3 leading-7">
                    Bengal College of Engineering and Technology,
                    affiliated to MAKAUT, West Bengal, India
                  </p>

                  <p className="text-gray-500 mt-2">
                    Computer Science & Engineering • CGPA 7.5 (Till 6th Semester)
                  </p>

                   <p className="text-gray-500 mt-2">
                    Passion of playing Basketball and Dance.
                  </p>
                </div>

              </div>

              {/* Education Item 2 */}

              <div className="relative flex gap-6 mb-12">

                <div className="relative z-10 w-14 h-14 rounded-full bg-white ring-4 ring-[#030712] shadow-lg flex items-center justify-center p-2">

                  <img
                    src={schoolLogo}
                    alt="DPS"
                    className="w-full h-full object-contain"
                  />

                </div>

                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6">

                  <p className="text-cyan-400 text-sm font-mono">
                    2023
                  </p>

                  <h4 className="text-2xl font-semibold mt-2">
                    Higher Secondary Education
                  </h4>

                  <p className="text-gray-400 mt-3">
                    Delhi Public School, Bokaro Steel City
                  </p>

                  <p className="text-gray-500 mt-2">
                    CBSE • Class 12 • PCM with Graphics • 90%
                  </p>

                  <p className="text-gray-500 mt-1">
                    Perfect Score in Graphics (AISSC Examination)
                  </p>

                </div>

              </div>

              {/* Education Item 3 */}

              <div className="relative flex gap-6">

                <div className="relative z-10 w-14 h-14 rounded-full bg-white ring-4 ring-[#030712] shadow-lg flex items-center justify-center p-2">

                  <img
                    src={schoolLogo}
                    alt="DPS"
                    className="w-full h-full object-contain"
                  />

                </div>

                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6">

                  <p className="text-cyan-400 text-sm font-mono">
                    2021
                  </p>

                  <h4 className="text-2xl font-semibold mt-2">
                    Secondary Education
                  </h4>

                  <p className="text-gray-400 mt-3">
                    Delhi Public School, Bokaro Steel City
                  </p>

                  <p className="text-gray-500 mt-2">
                    CBSE • Class X • 92%
                  </p>

                  <p className="text-gray-500 mt-1">
                    Active in Dance and Sports
                  </p>

                  <p className="text-gray-500 mt-1">
                    Achived German certification from goethe institute, kolkata(level A1)
                  </p>


                </div>

              </div>

            </div>
            <div className="relative w-full">

              <h3 className="text-cyan-400 uppercase tracking-[5px] text-sm font-mono mb-10">

                What Shaped Me

              </h3>

              <div className="space-y-10">

                <div className="flex gap-5">

                  <div className="text-3xl">💡</div>

                  <div>

                    <h4 className="text-2xl font-semibold">

                      Curiosity

                    </h4>

                    <p className="text-gray-400 mt-2 leading-7">

                      Always eager to explore how technology works, experiment with new ideas, and continuously improve my understanding of software development.

                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="text-3xl">🧩</div>

                  <div>

                    <h4 className="text-2xl font-semibold">

                      Problem Solving

                    </h4>

                    <p className="text-gray-400 mt-2 leading-7">

                      I enjoy breaking complex problems into simple, efficient and scalable solutions through thoughtful design and clean code.

                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="text-3xl">📚</div>

                  <div>

                    <h4 className="text-2xl font-semibold">

                      Continuous Learning

                    </h4>

                    <p className="text-gray-400 mt-2 leading-7">

                      Technology evolves rapidly, so I constantly learn, build projects and adapt to modern tools to grow as a software engineer.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

    </section>
    </>
  );
}