import "./Certifications.css";


/* =========================================================
   CERTIFICATIONS / ACHIEVEMENTS
   ========================================================= */

const certifications = [
  {
    id: "01",
    category: "NATIONAL EVENT",
    title: "78th Independence Day Ceremonial Parade",
    issuer: "Event Participation",
    year: "2025",
    skills: [
      "Discipline",
      "Teamwork",
      "Leadership",
    ],
  },

  {
    id: "02",
    category: "PHOTOGRAPHY ACHIEVEMENT",
    title: "3rd Position in Photography - AASHA",
    issuer: "NSS Wing",
    year: "2024",
    skills: [
      "Photography",
      "Creativity",
      "Visual Storytelling",
    ],
  },

  {
    id: "03",
    category: "COMPETITION ACHIEVEMENT",
    title: "2nd Position in Memory Race",
    issuer: "Athlika 2024",
    year: "2024",
    skills: [
      "Focus",
      "Memory Skills",
      "Problem Solving",
    ],
  },

  {
    id: "04",
    category: "LANGUAGE CERTIFICATION",
    title: "Fit in Deutsch - German Certification",
    issuer: "Goethe Institut Kolkata",
    year: "Level 1",
    skills: [
      "German Language",
      "Communication",
      "A1 Level",
    ],
  },

  {
    id: "05",
    category: "CLOUD TECHNOLOGY",
    title: "AWS Certified Solutions",
    issuer: "Forage",
    year: "2025",
    skills: [
      "AWS",
      "Cloud Computing",
      "Solutions Architecture",
    ],
  },
];


/* =========================================================
   HACKATHONS
   ========================================================= */

const hackathons = [
  {
    id: "01",
    category: "HACKATHON",
    title: "PANTHEON TECHFEST",
    organizer: "BIT MESRA, Ranchi",
    year: "2025",
    role: "Participant",
    project: "Traffic Ops+ : Smart City traffic management system",
    skills: [
      "Streamlit",
      "OpenCV",
      "YOLOv8",
      "Python",
    ],
  },

];


/* =========================================================
   TESTIMONIALS
   ========================================================= */

const testimonials = [
  {
    id: "❝",
    name: "Tanay Sinha",
    role: "JSCO, Robonixx Club, @BCET",
    message:
      "As a fellow member of the club, I have seen her being responsible with patience, integrity & accountability. I have seen her demonstrate perseverance, professionalism and genuine commitment towards excellence.",
  },

  {
    id: "❝",
    name: "Ananya Rout",
    role: "Intern from SAIL, Bokaro.",
    message:
      "As a fellow intern at SAIL Bokaro, I had the opportunity to work closely with them and observe their dedication, teamwork, and problem-solving skills. They consistently approached every task with enthusiasm and professionalism, making them a dependable and supportive teammate.",
  },

  {
    id: "❝",
    name: "Harshvardhan Raj",
    role: "BTech, Final Year, @BCET",
    message:
      "Working alongside her has been a rewarding experience. She brings a positive attitude, reliability, and a strong sense of responsibility to every collaboration. Her discipline, creativity, and dedication towards achieving goals demonstrate her ability to work effectively while maintaining professionalism and respect for others.",
  },
];


const Certifications = () => {
  return (

    <section
      className="certifications"
      id="credentials"
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="cert-header">

        <p className="cert-tag">
          ACHIEVEMENTS / LEARNING
        </p>

        <h1>
          PERSONAL
          <span> ACHIVEMENTS</span>
        </h1>

        <div className="cert-line"></div>

        <p className="cert-desc">
          A collection of professional learning experiences,
          achievements, hackathons and verified skill development.
        </p>

      </div>


      {/* =====================================================
          CREDENTIALS GRID
      ===================================================== */}

      <div className="credentials-grid">


        {/* ===================================================
            CERTIFICATIONS
        =================================================== */}

        <div className="credential-column">

          <div className="credential-column-header">

            <span>
              01 
            </span>

            <h2>
              Certification Archive
            </h2>

            <p>
              Learning experiences, achievements and
              professional skill development.
            </p>

          </div>


          <div className="cert-list">

            {certifications.map((cert) => (

              <div
                className="cert-item"
                key={cert.id}
              >

                <div className="cert-number">
                  {cert.id}
                </div>


                <div className="cert-details">

                  <p className="cert-category">
                    {cert.category}
                  </p>


                  <h2>
                    {cert.title}
                  </h2>


                  <div className="cert-meta">

                    <p>
                      ISSUED BY
                      <strong>
                        {cert.issuer}
                      </strong>
                    </p>


                    <p>
                      YEAR
                      <strong>
                        {cert.year}
                      </strong>
                    </p>

                  </div>


                  <div className="cert-skills">

                    {cert.skills.map((skill, index) => (

                      <span key={index}>
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ===================================================
            HACKATHONS
        =================================================== */}

        <div className="credential-column hackathon-column">

          <div className="credential-column-header">

            <span>
              02 
            </span>

            <h2>
              Hackathon Archive
            </h2>

            <p>
              Collaborative problem solving, innovation and
              project building under real-world challenges.
            </p>

          </div>


          <div className="hackathon-list">

            {hackathons.map((hackathon) => (

              <div
                className="hackathon-item"
                key={hackathon.id}
              >

                <div className="hackathon-number">
                  {hackathon.id}
                </div>


                <div className="hackathon-details">

                  <p className="hackathon-category">
                    {hackathon.category}
                  </p>


                  <h2>
                    {hackathon.title}
                  </h2>


                  <div className="hackathon-meta">

                    <p>
                      ORGANIZED BY
                      <strong>
                        {hackathon.organizer}
                      </strong>
                    </p>


                    <p>
                      YEAR
                      <strong>
                        {hackathon.year}
                      </strong>
                    </p>


                    <p>
                      ROLE
                      <strong>
                        {hackathon.role}
                      </strong>
                    </p>

                  </div>


                  <div className="hackathon-project">

                    <span>
                      PROJECT
                    </span>

                    <p>
                      {hackathon.project}
                    </p>

                  </div>


                  <div className="hackathon-skills">

                    {hackathon.skills.map((skill, index) => (

                      <span key={index}>
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <div className="testimonial-section">

        <div className="testimonial-header">

          <p>
            FEEDBACK FROM PEERS
          </p>

          <h2>
            What Others Say ~
          </h2>

        </div>


        <div className="testimonial-list">

          {testimonials.map((item, index) => (

            <div
              className="testimonial-item"
              key={`${item.name}-${index}`}
            >

              <div className="testimonial-number">
                {item.id}
              </div>


              <div className="testimonial-content">

                <h3>
                  {item.name}
                </h3>

                <span>
                  {item.role}
                </span>

                <p>
                  "{item.message}"
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};


export default Certifications;