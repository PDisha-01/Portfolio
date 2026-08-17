import { motion } from "framer-motion";

import ExperienceCard from "./ExperienceCard";

import aicteLogo from "../assets/aicte.jpeg";
import downloadLogo from "../assets/download.png";
import bitmesraLogo from "../assets/bitmesra.jpeg";
import robonixLogo from "../assets/robonix.jpeg";
import nssLogo from "../assets/nss.png";

const experiences = [
  {
    logo: robonixLogo,
    company: "Robonixx Club",
    role: "Event Management Head",
    duration: "Aug 2026 - Present (On-site)",
    location:
      "Bengal College of Engineering & Technology, Durgapur, West Bengal, India",
    domain: "Robotics & AI",
    project: "Event management and robotics initiatives",
    toolkit: ["Arduino UNO"],
    goal: "Leading teams and large-scale events.",
  },

  {
    logo: aicteLogo,
    company: "EDUSKILLS powered by AICTE",
    role: "Java Full Stack Developer",
    duration: "Jan 2026 – Mar 2026 (Remote)",
    location: "Durgapur, West Bengal, India",
    domain: "Full Stack Development (Java)",
    project:
      "Non-project internship covering Java Full Stack concepts",
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
    role: "Techfest'25 Participant",
    duration: "Sep 2025, 7th & 8th (On-site)",
    location: "BIT Mesra, Ranchi, Jharkhand, India",
    domain: "Python & AI",
    project:
      "TrafficOps+ - safer & greener city traffic playbook.",
    toolkit: [
      "YOLOv8",
      "OpenCV",
      "Streamlit",
      "Python",
    ],
    goal:
      "AI based emergency vehicle and traffic monitoring system designed for real-time video analysis and vehicle classification.",
  },

  {
    logo: downloadLogo,
    company: "Steel India Authority Limited",
    role: "Vocational Trainee (Internship)",
    duration: "Jun 2025 - July 2025 (On-site)",
    location: "Bokaro Steel Plant, Jharkhand, India",
    domain: "Machine Learning & AI",
    project: "ML-Laboratory & study on Python",
    toolkit: [
      "Python Pillow library",
      "OS & Shutil library",
      "ML with Iris dataset",
      "ML with Titanic dataset",
    ],
    goal:
      "Built a foundational understanding of Python and machine-learning.",
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">

      {/* Background effects */}
      <div className="experience-glow experience-glow-cyan" />
      <div className="experience-glow experience-glow-purple" />

      <div className="experience-grid-bg" />

      <div className="experience-container">

        {/* ==============================
            HEADER
        =============================== */}

        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="experience-chapter">
            <span className="chapter-dot" />
            <span>CHAPTER 02</span>
          </div>

          <h2>
            Blueprint of an Engineer
          </h2>

          <p>
            A snapshot of the experiences, internships, competitions,
            and leadership opportunities that have shaped how I learn,
            build, collaborate, and solve real-world problems.
          </p>

        </motion.div>


        {/* ==============================
            EXPERIENCE SUMMARY
        =============================== */}

        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >

          <div>
            <strong>04</strong>
            <span>Experiences</span>
          </div>

          <div>
            <strong>AI + WEB</strong>
            <span>Core Focus</span>
          </div>

          <div>
            <strong>LEADERSHIP</strong>
            <span>Team & Events</span>
          </div>

        </motion.div>


        {/* ==============================
            EXPERIENCE TIMELINE
        =============================== */}

        <div className="experience-timeline">

          <div className="experience-line" />

          {experiences.map((experience, index) => (
            <motion.div
              className="experience-item"
              key={`${experience.company}-${experience.role}`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
            >

              <div className="experience-marker">
                <span />
              </div>

              <div className="experience-index">
                0{index + 1}
              </div>

              <ExperienceCard {...experience} />

            </motion.div>
          ))}

        </div>


        {/* ==============================
            COMMUNITY ENGAGEMENT
        =============================== */}

        <motion.div
          className="community-section"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <div className="community-heading">

            <span>COMMUNITY</span>

            <h3>
              Beyond the Classroom
            </h3>

            <p>
              Experiences that strengthened my teamwork,
              communication, leadership, and social responsibility.
            </p>

          </div>


          <div className="nss-card">

            <div className="nss-logo-wrapper">
              <img
                src={nssLogo}
                alt="National Service Scheme"
                className="nss-logo"
              />
            </div>


            <div className="nss-content">

              <div className="nss-title">
                <span>COMMUNITY ENGAGEMENT</span>

                <h4>
                  National Service Scheme (NSS) Volunteer
                </h4>
              </div>


              <ul>

                <li>
                  Dedicated volunteer contributing to community
                  service over the nation.
                </li>

                <li>
                  Social awareness and outreach initiatives through NSS.
                </li>

                <li>
                  Participated in community welfare and awareness
                  campaigns.
                </li>

                <li>
                  Worked collaboratively with fellow volunteers
                  to organize impactful events.
                </li>

                <li>
                  Developed leadership, teamwork, communication,
                  and social responsibility.
                </li>

              </ul>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}