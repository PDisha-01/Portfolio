import { motion } from "framer-motion";

export default function ExperienceCard({
  logo,
  company,
  role,
  duration,
  location,
  domain,
  project,
  toolkit,
  goal,
}) {
  return (
    <motion.article
      className="experience-card"
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.25,
      }}
    >

      {/* Subtle hover glow */}
      <div className="experience-card-glow" />


      {/* =========================
          HEADER
      ========================== */}

      <div className="experience-card-header">

        <div className="experience-company-logo">
          <img
            src={logo}
            alt={`${company} logo`}
          />
        </div>

        <div className="experience-company-info">

          <span className="experience-role">
            {role}
          </span>

          <h3>
            {company}
          </h3>

          <span className="experience-domain">
            {domain}
          </span>

        </div>

      </div>


      {/* =========================
          META
      ========================== */}

      <div className="experience-meta">

        <div>
          <span>Duration</span>
          <p>{duration}</p>
        </div>

        <div>
          <span>Location</span>
          <p>{location}</p>
        </div>

      </div>


      {/* =========================
          PROJECT
      ========================== */}

      <div className="experience-detail">

        <span>PROJECT / TOPICS</span>

        <p>
          {project}
        </p>

      </div>


      {/* =========================
          TOOLKIT
      ========================== */}

      <div className="experience-toolkit">

        <span>ENGINEERING TOOLKIT</span>

        <div className="toolkit-list">

          {toolkit.map((tech) => (
            <span
              key={tech}
              className="toolkit-tag"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>


      {/* =========================
          CONTRIBUTION
      ========================== */}

      <div className="experience-contribution">

        <span>KEY CONTRIBUTION</span>

        <p>
          {goal}
        </p>

      </div>

    </motion.article>
  );
}