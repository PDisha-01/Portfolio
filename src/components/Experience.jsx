import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

import aicteLogo from "../assets/aicte.jpeg";
import downloadLogo from "../assets/download.png";
import nssLogo from "../assets/nss.png";

const experiences = [
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
  },
];

export default function Experience() {
  return (
    <section
      className="
        portfolio-section
        relative
        overflow-hidden
        px-6
        py-24
        md:px-10
        lg:px-16

        bg-slate-50
        text-slate-900

        dark:bg-[#050816]
        dark:text-white

        transition-colors
        duration-500
      "
    >

      {/* =========================================
          BACKGROUND GLOWS
      ========================================= */}

      {/* Cyan Glow */}

      <div
        className="
          absolute
          -top-40
          -left-32
          w-96
          h-96
          rounded-full
          bg-cyan-400/10
          dark:bg-cyan-400/10
          blur-[120px]
          pointer-events-none
        "
      />

      {/* Purple Glow */}

      <div
        className="
          absolute
          bottom-0
          -right-32
          w-[420px]
          h-[420px]
          rounded-full
          bg-purple-400/10
          dark:bg-purple-500/10
          blur-[150px]
          pointer-events-none
        "
      />

      {/* =========================================
          BLUEPRINT GRID
      ========================================= */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.035]
          dark:opacity-[0.04]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              currentColor 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              currentColor 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="relative max-w-7xl mx-auto">

        {/* =========================================
            CHAPTER PILL
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full

            border
            border-cyan-500/20
            bg-cyan-500/10

            shadow-[0_0_25px_rgba(34,211,238,0.08)]
          "
        >
          <span
            className="
              w-2
              h-2
              rounded-full
              bg-cyan-400
              animate-pulse
              shadow-[0_0_10px_#22d3ee]
            "
          />

          <span
            className="
              text-xs
              uppercase
              tracking-[4px]
              font-mono
              font-semibold
              text-cyan-600
              dark:text-cyan-400
            "
          >
            Chapter • 02
          </span>
        </motion.div>


        {/* =========================================
            MAIN HEADING
        ========================================= */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="
            mt-10
            text-5xl
            md:text-6xl
            font-extrabold
            tracking-tight

            bg-gradient-to-r
            from-slate-900
            via-slate-700
            to-slate-400

            dark:from-white
            dark:via-gray-200
            dark:to-gray-500

            bg-clip-text
            text-transparent
          "
        >
          Blueprint of an Engineer
        </motion.h2>


        {/* =========================================
            SUBTITLE
        ========================================= */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="
            mt-8
            max-w-3xl
            text-lg
            leading-8

            text-slate-600
            dark:text-gray-400

            transition-colors
            duration-500
          "
        >
          Every internship, collaboration, and engineering challenge has
          added a new layer to my journey—shaping how I think, build, and
          solve real-world problems through technology. Here's a glimpse of
          my experience working with different companies, mentors, and
          talented teams.
        </motion.p>


        {/* =========================================
            DIVIDER
        ========================================= */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          viewport={{ once: true }}
          className="
            origin-left
            mt-16
            h-px
            bg-gradient-to-r
            from-cyan-500
            via-purple-500
            to-transparent
          "
        />


        {/* =========================================
            EXPERIENCE CARDS
        ========================================= */}

        <div className="mt-16 pb-16">

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-6
            "
          >

            {experiences.map((exp, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="relative"
              >
                <ExperienceCard {...exp} />
              </motion.div>

            ))}

          </div>


          {/* =========================================
              COMMUNITY ENGAGEMENT
          ========================================= */}

          <motion.section
            className="
              community-section
              mt-24
            "
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            {/* Community Heading */}

            <div className="community-heading">

              <span className="heading-line" />

              <h2
                className="
                  text-center
                  font-bold
                  tracking-[3px]

                  text-slate-800
                  dark:text-white

                  transition-colors
                  duration-500
                "
              >
                ✦ COMMUNITY ENGAGEMENT ✦
              </h2>

              <span className="heading-line" />

            </div>


            {/* NSS Card */}

            <div
              className="
                nss-card

                mt-8

                bg-white/70
                dark:bg-white/[0.035]

                border
                border-slate-200
                dark:border-white/10

                backdrop-blur-xl

                shadow-xl
                dark:shadow-none

                transition-all
                duration-500
              "
            >

              <div className="nss-content">

                {/* NSS Title */}

                <div
                  className="
                    nss-title
                    flex
                    items-center
                    gap-4
                  "
                >

                  <img
                    src={nssLogo}
                    alt="NSS Logo"
                    className="
                      nss-logo
                      w-14
                      h-14
                      object-contain
                    "
                  />

                  <h3
                    className="
                      font-bold
                      text-lg
                      md:text-xl

                      text-slate-900
                      dark:text-white

                      transition-colors
                      duration-500
                    "
                  >
                    National Service Scheme (NSS) Volunteer
                  </h3>

                </div>


                {/* NSS Details */}

                <ul
                  className="
                    mt-6
                    space-y-3

                    text-sm
                    md:text-base

                    text-slate-600
                    dark:text-gray-400

                    leading-7
                  "
                >

                  <li>
                    • Dedicated volunteer contributing to community
                    service and outreach initiatives.
                  </li>

                  <li>
                    • Participated in social awareness and community
                    welfare campaigns.
                  </li>

                  <li>
                    • Worked with fellow volunteers to organize
                    impactful events.
                  </li>

                  <li>
                    • Developed leadership, teamwork, communication,
                    and social responsibility.
                  </li>

                </ul>

              </div>

            </div>

          </motion.section>

        </div>

      </div>

    </section>
  );
}