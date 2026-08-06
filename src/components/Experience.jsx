import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

import aicteLogo from "../assets/aicte.jpeg";
import downloadLogo from "../assets/download.png";
import bitmesraLogo from "../assets/bitmesra.jpeg";
import robonixLoge from "../assets/robonix.jpeg"; // add when you have it 
import nssLogo from "../assets/nss.png";

//import { techData } from "../data/techData";

const experiences = [
  {
    logo: robonixLoge,
    company: "Robonixx Club",
    role: "Event Management Head",
    duration: "Aug 2026 - present (on-site)",
    location: "Bengal college of Engineering & Technology, Durgapur, West Bengal, India",
    domain: "Robotics & AI",
    project: "Event management and robotics initiatives",
    toolkit: [
        "Arduino UNO",
    ],
    goal:
      "Leading teams and large-scale events."
  },

  {
    logo: aicteLogo,
    company: "EDUSKILLS powered by AICTE",
    role: "Java Full Stack Developer",
    duration: "Jan 2026 – Mar 2026 (Remote)",
    location: "Durgapur, West Bengal, India",
    domain: "Full Stack Development (Java)",
    project: "Non-project internship covering Java Full Stack concepts",
    toolkit: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Spring Boot",
      "Hibernate",
    ],
    goal:
      "Learnt backend integration, REST APIs, and responsive UI development.",
  },

  {
    logo: bitmesraLogo,
    company: "BIT Mesra foundation",
    role: "Techfest'25 participant",
    duration: "Sep 2025, 7th & 8th (on-site)",
    location: "BIT Mesra, Ranchi, Jharkhand, India",
    domain: "Python & AI",
    project: "TrafficOps+ - safer & greener city traffic playbook.",
    toolkit: [
      "YOLOv8",
      "OpenCV",
      "Streamlit",
      "Python",
    ],
    goal:
      "AI based emergency vehicle and traffic monitoring system designed to real-time video analysis ans vehicle classification.",
  },

  {
    logo: downloadLogo,
    company: "Steel India Authority Limited",
    role: "Vocational Trainee (internship)",
    duration: "Jun 2025 - July 2025 (on-site)",
    location: "Bokaro Steel Plant, Jharkhand, India",
    domain: "Machine Learning & AI",
    project: "ML-Laboratory & study on python",
    toolkit: [
      "Python pillow library",
      "OS & Shutil library",
      "ML with iris dataset",
      "ML with titanic dataset",
    ],
    goal:
      "Built a foundational understanding of python and machine-learning.",
  }
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-24 md:px-10 lg:px-16">
      {/* ================= Background ================= */}

      {/* Cyan Glow */}
      <div className="absolute -top-40 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Purple Glow */}
      <div className="absolute bottom-0 -right-32 w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-[150px]" />

      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= Content ================= */}

      <div className="relative max-w-7xl mx-auto">

        {/* Chapter Pill */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

          <span className="text-xs uppercase tracking-[4px] font-mono text-cyan-400">
            Chapter • 02
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent"
        >
          Blueprint of an Engineer
        </motion.h2>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl text-lg leading-8 text-gray-400"
        >
          Every internship, collaboration, and engineering challenge has added
          a new layer to my journey—shaping how I think, build, and solve
          real-world problems through technology.So, here comes a glimpse of few experiences 
          of working with different companies, mentors and talented teams ofc. 
        </motion.p>

        {/* Divider */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="origin-left mt-16 h-px bg-gradient-to-r from-cyan-500 via-purple-500 to-transparent"
        />

        {/* Placeholder */}

        <div className="relative mt-24 pb-20">

  {/* Main Vertical Line */}
  <motion.div
  initial={{ scaleY: 0 }}
  whileInView={{ scaleY: 1 }}
  transition={{ duration: 2 }}
  viewport={{ once: true }}
  style={{ transformOrigin: "top" }}
  className="
    absolute
    left-[76px]
    top-[34px]
    h-[2250px]
    w-[2px]
    bg-gradient-to-b
    from-cyan-400
    via-purple-500
    to-cyan-400
    z-0
  "
/>

  
  <div className="mt-10">

  {experiences.map((exp, index) => (

    <div
  key={index}
  className={`relative mb-16 flex
  ${
    index % 2 === 0
      ? "justify-start md:pl-64 pl-4"
      : "justify-end md:pr-24 pr-4"
  }`}
>

      {/* Timeline Dot */}
      <div className="absolute left-16 top-8 w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]" />

      {/* Connector */}
      {index % 2 === 0 ? (

        <div className="absolute left-[88px] top-[43px] w-44 h-[2px] bg-cyan-400" />

      ) : (

       <div className="absolute right-[490px] top-[43px] w-[705px] h-[2px] bg-cyan-400" />

      )}

      <ExperienceCard {...exp} />

    </div>

  ))}

  {/* ==========================================
   Community Engagement
========================================== */}

<motion.section
  className="community-section"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>

  <div className="community-heading">
    <span className="heading-line"></span>

    <h2>✦ COMMUNITY ENGAGEMENT ✦</h2>

    <span className="heading-line"></span>
  </div>

  <div className="nss-card">

    <div className="nss-content">

     <div className="nss-title">
  <img src={nssLogo} alt="NSS Logo" className="nss-logo" />

  <h3>National Service Scheme (NSS) Volunteer</h3>
</div>
      <ul>

       <li>
       • Dedicated volunteer contributing to community service over the nation.</li>
      
       <li>• social awareness, and outreach initiatives through NSS.</li>
    
        <li>
         • Participated in community welfare and awareness campaigns.
        </li>

        <li>
         • Worked collaboratively with fellow volunteers to organize impactful events.
        </li>

        <li>
         • Developed leadership, teamwork, communication, and social responsibility.
        </li>

      </ul>

    </div>

  </div>

</motion.section>

    </div>
    </div>
    </div>
    </section>
    );
  }
