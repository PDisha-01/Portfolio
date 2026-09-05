import { motion } from "framer-motion";

import profile from "../assets/profile-photo.jpeg";
import collegeLogo from "../assets/BCET.jpeg";
import schoolLogo from "../assets/dps.jpeg";


export default function About() {
  return (

    <section
      className="about-section"
      id="about"
    >

      <div className="about-container">


        {/* =========================
            ABOUT INTRO
        ========================== */}

        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          {/* Profile Photo */}

          <div className="about-photo-wrapper">

  <div className="about-photo-glow"></div>

  <img
    src={profile}
    alt="Disha Mallick"
    className="about-photo"
  />

</div>

<div className="about-header-content">

  <span className="about-chapter">
    CHAPTER 01
  </span>

  <h2>
    ABOUT ME
  </h2>

  <p className="about-intro">
    I am a final-year Computer Science & Engineering student at
    Bengal College of Engineering and Technology, affiliated to
    MAKAUT, West Bengal.
  </p>

  <p className="about-intro">
    I am interested in Artificial Intelligence, Machine Learning,
    and Web Development, and enjoy turning ideas into practical
    real-world applications.
  </p>

</div>
        </motion.div>


        {/* =========================
            QUICK PROFILE
        ========================== */}

        <motion.div
          className="about-profile-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >


          {/* CURRENTLY */}

          <div className="about-profile-card">

            <span className="profile-label">
              CURRENTLY
            </span>

            <h3>
              Computer Science Student
            </h3>

            <p>
              Building projects, exploring modern technologies,
              and continuously developing my software engineering
              skills.
            </p>

          </div>


          {/* INTERESTS */}

          <div className="about-profile-card">

            <span className="profile-label">
              INTERESTS
            </span>

            <div className="interest-tags">

              <span>AI / ML</span>
              <span>Web Development</span>
              <span>Problem Solving</span>

            </div>

          </div>


          {/* LEADERSHIP */}

          <div className="about-profile-card">

            <span className="profile-label">
              LEADERSHIP
            </span>

            <h3>
              Event Management Head
            </h3>

            <p>
              Robonixx Club, leading teams and managing
              large-scale college events.
            </p>

          </div>

        </motion.div>


        {/* =========================
            PERSONAL SIDE
        ========================== */}

        <motion.div
          className="about-personal"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div>

            <span className="profile-label">
              BEYOND CODE
            </span>

            <p>
              I enjoy combining creativity with logic and continuously
              exploring new technologies. Outside academics, I enjoy
              dance, rhythm and beats, and playing basketball.
            </p>

          </div>

        </motion.div>


        {/* =========================
            EDUCATION
        ========================== */}

        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >


          {/* Heading */}

          <div className="education-heading">

            <span>
              EDUCATION
            </span>

            <h3>
              Education Journey
            </h3>

          </div>


          <div className="education-grid">


            {/* =========================
                LEFT - TIMELINE
            ========================== */}

            <div className="education-timeline">


              {/* BTECH */}

              <div className="education-item">

                <div className="education-logo">

                  <img
                    src={collegeLogo}
                    alt="Bengal College of Engineering and Technology"
                  />

                </div>


                <div className="education-card">

                  <span className="education-date">
                    2023 – Present
                  </span>

                  <h4>
                    Bachelor of Technology
                  </h4>

                  <p>
                    Bengal College of Engineering and Technology,
                    affiliated to MAKAUT, West Bengal, India
                  </p>

                  <small>
                    Computer Science & Engineering • CGPA 7.5
                    (Till 6th Semester)
                  </small>

                  <small>
                    Passionate about Basketball and Dance.
                  </small>

                </div>

              </div>


              {/* CLASS XII */}

              <div className="education-item">

                <div className="education-logo">

                  <img
                    src={schoolLogo}
                    alt="Delhi Public School"
                  />

                </div>


                <div className="education-card">

                  <span className="education-date">
                    2023
                  </span>

                  <h4>
                    Higher Secondary Education
                  </h4>

                  <p>
                    Delhi Public School, Bokaro Steel City
                  </p>

                  <small>
                    CBSE • Class 12 • PCM with Graphics • 90%
                  </small>

                  <small>
                    Perfect Score in Graphics (AISSC Examination)
                  </small>

                </div>

              </div>


              {/* CLASS X */}

              <div className="education-item">

                <div className="education-logo">

                  <img
                    src={schoolLogo}
                    alt="Delhi Public School"
                  />

                </div>


                <div className="education-card">

                  <span className="education-date">
                    2021
                  </span>

                  <h4>
                    Secondary Education
                  </h4>

                  <p>
                    Delhi Public School, Bokaro Steel City
                  </p>

                  <small>
                    CBSE • Class X • 92%
                  </small>

                  <small>
                    Active in Dance and Sports
                  </small>

                  <small>
                    German Certification from Goethe Institute,
                    Kolkata • Level A1
                  </small>

                </div>

              </div>

            </div>


            {/* =========================
                RIGHT - STRENGTHS
            ========================== */}

            <div className="about-strengths">

              <span className="education-heading-label">
                WHAT SHAPED ME
              </span>


              {/* CURIOSITY */}

              <div className="strength-item">

                <div className="strength-icon">
                  💡
                </div>

                <div>

                  <h4>
                    Curiosity
                  </h4>

                  <p>
                    Exploring how technology works, experimenting
                    with new ideas, and continuously improving my
                    understanding of software development.
                  </p>

                </div>

              </div>


              {/* PROBLEM SOLVING */}

              <div className="strength-item">

                <div className="strength-icon">
                  🧩
                </div>

                <div>

                  <h4>
                    Problem Solving
                  </h4>

                  <p>
                    Breaking complex problems into simple,
                    efficient and scalable solutions through
                    thoughtful design and clean code.
                  </p>

                </div>

              </div>


              {/* CONTINUOUS LEARNING */}

              <div className="strength-item">

                <div className="strength-icon">
                  📚
                </div>

                <div>

                  <h4>
                    Continuous Learning
                  </h4>

                  <p>
                    Learning new technologies, building projects,
                    and adapting to modern tools to grow as a
                    software engineer.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}