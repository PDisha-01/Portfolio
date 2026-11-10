import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaTerminal, FaUsers, FaHeart, FaBasketballBall } from "react-icons/fa";
import { HiSparkles, HiAcademicCap, HiCamera } from "react-icons/hi2";
import dishaPortrait from "../assets/disha-portrait.jpg";
import collegeLogo from "../assets/BCET.jpeg";
import schoolLogo from "../assets/dps.jpeg";
import "./about.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Header */}
        <motion.div
          className="about-header-modern"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="about-chapter-badge">
            <HiSparkles className="text-cyan-400" />
            <span>Profile &amp; Narrative</span>
          </div>

          <h2>Behind The Code</h2>

          <p>
            Final-year Computer Science engineer, multimodal AI builder, and tech
            community leader turning complex challenges into elegant, impactful solutions.
          </p>
        </motion.div>

        {/* Bento Grid Row 1: Story + Terminal */}
        <div className="about-bento-grid">
          {/* Card 1: Story & Vision (7 Cols) */}
          <motion.div
            className="bento-card bento-story-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="bento-story-top">
                <div className="bento-photo-wrapper">
                  <img
                    src={dishaPortrait}
                    alt="Disha Mallick"
                    className="bento-profile-img"
                  />
                </div>

                <div className="bento-story-info">
                  <span className="bento-story-tag">B.TECH CSE '26 • FULL-STACK &amp; AI/ML</span>
                  <h3>Disha Mallick</h3>
                  <div className="bento-story-degree">
                    Bengal College of Engineering and Technology (MAKAUT) • CGPA 7.5
                  </div>
                </div>
              </div>

              <p className="bento-story-bio">
                I am a final-year Computer Science &amp; Engineering student with a deep
                passion for Artificial Intelligence, Machine Learning, Computer Vision, and
                Full-Stack Web Development. From building AI-powered applications to leading tech communities, I thrive on solving complex problems and delivering innovative solutions.
              </p>
            </div>

            <div className="bento-tags">
              <span className="bento-tag-pill">⚡ Multimodal AI</span>
              <span className="bento-tag-pill">👁️ Computer Vision (CLIP &amp; YOLO)</span>
              <span className="bento-tag-pill">⚛️ React 19 &amp; Tailwind</span>
              <span className="bento-tag-pill">🐍 Python &amp; FastAPI</span>
              <span className="bento-tag-pill">☕ Java &amp; Spring Boot</span>
              <span className="bento-tag-pill">🗄️ PostgreSQL &amp; MongoDB</span>
            </div>
          </motion.div>

        </div>

        {/* Bento Grid Row 2: Leadership, Community & Beyond Code */}
        <div className="about-bento-grid">
          {/* Card 3: Robonixx Leadership */}
          <motion.div
            className="bento-card bento-card-third"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="bento-card-icon-title">
                <div className="bento-icon-box">🚀</div>
                <div>
                  <span className="bento-story-tag">LEADERSHIP</span>
                  <h3>Event Management Head</h3>
                </div>
              </div>
              <p>
                Robonixx Club (Robotics &amp; Technology Club at BCET). Leading event operations,
                cross-functional student teams, technical workshops, and college-wide hackathons.
              </p>
            </div>
            <div className="bento-tags">
              <span className="bento-tag-pill">Event Logistics</span>
              <span className="bento-tag-pill">Team Leadership</span>
              <span className="bento-tag-pill">Tech Fests</span>
            </div>
          </motion.div>

          {/* Card 4: NSS Volunteer & Social Impact */}
          <motion.div
            className="bento-card bento-card-third"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="bento-card-icon-title">
                <div className="bento-icon-box">🤝</div>
                <div>
                  <span className="bento-story-tag">COMMUNITY</span>
                  <h3>NSS Volunteer</h3>
                </div>
              </div>
              <p>
                National Service Scheme volunteer actively organizing community welfare
                campaigns, social awareness drives, and youth outreach initiatives.
              </p>
              <div className="education-highlight-pill">
                <FaAward className="text-yellow-400" />
                <span>3rd Prize Photography • AASHA 2024</span>
              </div>
            </div>
            <div className="bento-tags">
              <span className="bento-tag-pill">Social Outreach</span>
              <span className="bento-tag-pill">Visual Storytelling</span>
            </div>
          </motion.div>

          {/* Card 5: Beyond Code & Interests */}
          <motion.div
            className="bento-card bento-card-third"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="bento-card-icon-title">
                <div className="bento-icon-box">✨</div>
                <div>
                  <span className="bento-story-tag">CREATIVE SIDE</span>
                  <h3>Beyond The Code</h3>
                </div>
              </div>
              <p>
                Combining analytical rigor with creative rhythm. Outside engineering, I recharge
                through active sports, performance arts, and language learning.
              </p>
            </div>
            <div className="bento-tags">
              <span className="bento-tag-pill">🏀 Basketball</span>
              <span className="bento-tag-pill">💃 Dance &amp; Rhythm</span>
              <span className="bento-tag-pill">📷 Photography</span>
              <span className="bento-tag-pill">🇩🇪 German (A1 Goethe Institut)</span>
            </div>
          </motion.div>
        </div>

        {/* Education Journey Section */}
        <motion.div
          className="education-modern-container"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="education-modern-heading">
            <span>ACADEMIC FOUNDATION</span>
            <h3>Education Journey</h3>
          </div>

          <div className="education-modern-grid">
            {/* B.Tech */}
            <div className="education-modern-card">
              <div>
                <div className="education-card-top">
                  <div className="education-logo-box">
                    <img
                      src={collegeLogo}
                      alt="Bengal College of Engineering and Technology"
                    />
                  </div>
                  <div className="education-card-meta">
                    <span className="education-badge-year">2023 – 2026 (Present)</span>
                    <h4>B.Tech in Computer Science &amp; Eng.</h4>
                  </div>
                </div>

                <p className="education-institution">
                  Bengal College of Engineering and Technology (BCET), affiliated to MAKAUT,
                  West Bengal, India.
                </p>
              </div>

              <div className="education-highlight-pill">
                <HiAcademicCap className="text-cyan-400 text-base" />
                <span>CGPA: 7.5 (through 6th Semester)</span>
              </div>
            </div>

            {/* Class XII */}
            <div className="education-modern-card">
              <div>
                <div className="education-card-top">
                  <div className="education-logo-box">
                    <img
                      src={schoolLogo}
                      alt="Delhi Public School Bokaro"
                    />
                  </div>
                  <div className="education-card-meta">
                    <span className="education-badge-year">2023</span>
                    <h4>Higher Secondary (Class XII)</h4>
                  </div>
                </div>

                <p className="education-institution">
                  Delhi Public School (DPS), Bokaro Steel City. CBSE • PCM with Graphics • 90%.
                </p>
              </div>

              <div className="education-highlight-pill">
                <FaAward className="text-yellow-400 text-base" />
                <span>Perfect 100/100 Score in Graphics (AISSC)</span>
              </div>
            </div>

            {/* Class X */}
            <div className="education-modern-card">
              <div>
                <div className="education-card-top">
                  <div className="education-logo-box">
                    <img
                      src={schoolLogo}
                      alt="Delhi Public School Bokaro"
                    />
                  </div>
                  <div className="education-card-meta">
                    <span className="education-badge-year">2021</span>
                    <h4>Secondary Education (Class X)</h4>
                  </div>
                </div>

                <p className="education-institution">
                  Delhi Public School (DPS), Bokaro Steel City. CBSE • 92%. Active in Dance &amp; Sports.
                </p>
              </div>

              <div className="education-highlight-pill">
                <HiSparkles className="text-purple-400 text-base" />
                <span>German A1 • Goethe-Institut Kolkata</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
