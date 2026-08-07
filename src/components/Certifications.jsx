import "./Certifications.css";


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
      "Leadership"
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
      "Visual Storytelling"
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
      "Problem Solving"
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
      "A1 Level"
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
      "Solutions Architecture"
    ],
  },
];

const testimonials = [
{
id: " ❝ ",
name: "Tanay Sinha",
role: "JSCO, Robonixx Club, @Bcet",
message:
"As a fellow member of the club, I have seen her being responsible with patience, integrity & accountability. I have seen her demonstrate perseverance, proffesionalism and genuine committment towards excellence."
},

{
id: "❝",
name: "Ananya Rout",
role: "Intern from SAIL, Bokaro.",
message:
"As a fellow intern at SAIL Bokaro, I had the opportunity to work closely with them and observe their dedication, teamwork, and problem-solving skills. They consistently approached every task with enthusiasm and professionalism, making them a dependable and supportive teammate."
},
{
id: "❝",
name: "Harshvardhan Raj",
role: "Btech, final year, @BCET",
message:
"Working alongside her has been a rewarding experience. She brings a positive attitude, reliability, and a strong sense of responsibility to every collaboration. Her discipline, creativity, and dedication towards achieving goals demonstrate her ability to work effectively while maintaining professionalism and respect for others."
},
];
const Certifications = () => {

  return (

    <section 
      className="certifications"
      id="credentials"
    >

      <div className="cert-header">

        <p className="cert-tag">
          ACHIEVEMENTS / LEARNING
        </p>


        <h1>
          CERTIFICATION
          <span> ARCHIVE</span>
        </h1>


        <div className="cert-line"></div>


        <p className="cert-desc">
          A collection of professional learning experiences,
          achievements and verified skill development.
        </p>


      </div>



      <div className="cert-list">


        {
          certifications.map((cert)=>(

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

                  {
                    cert.skills.map((skill,index)=>(
                      <span key={index}>
                        {skill}
                      </span>
                    ))
                  }

                </div>


              </div>


            </div>

          ))
        }


      </div>
<div className="testimonial-section">

  <div className="testimonial-header">

    <p>
      FEEDBACK from Peers
    </p>

    <h2>
      What  Other's  Say ~
    </h2>

  </div>


  <div className="testimonial-list">

    {
      testimonials.map((item)=>(
        
        <div 
          className="testimonial-item"
          key={item.id}
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

      ))
    }

  </div>

</div>

    </section>
  );
};

export default Certifications;