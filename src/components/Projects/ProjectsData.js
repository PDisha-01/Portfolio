import project1 from "../../assets/project1.jpeg";
import project2 from "../../assets/project2.jpeg";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.jpeg";

const projects = [
  {
    id: 1,
    title: "Python & Machine Learning Laboratory Suite",
    slug: "python-ml-laboratory-suite",
    category: "ML • PYTHON",
    tagline:
      "A collection of Machine Learning projects implementing supervised learning algorithms, model evaluation, and data analysis using Python and Scikit-learn.",
    tech: [
      "ML-Iris Dataset",
      "ML-Titanic Dataset",
      "Python",
      "Scikit-learn"
    ],
    image: project1,
  },

  {
    id: 2,
    title: "TrafficOps+ - Smart City Traffic Management System",
    slug: "trafficops-smart-city-traffic-management-system",
    category: "PYTHON • AI • COMPUTER VISION",
    tagline:
      "Safer, Greener City Traffic Playbook — A comprehensive real-time traffic management solution powered by Computer Vision, YOLOv8 and Streamlit.",
    tech: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "Streamlit"
    ],
    image: project2,
    
  }
  ,{
    id: 3,
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    category: "WEB DEVELOPMENT • UI/UX",
    tagline:
      "A modern developer portfolio showcasing my journey, technical expertise, projects, experience, and passion for building intelligent digital solutions."
    ,
    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: project3,
    status: "Currently Working"
  },
  {
    id: 4,
  title: "NEXORA AI",
  slug: "nexora-ai-student-placement-prediction-system",
  category: "AI • MACHINE LEARNING • GROUP PROJECT",
  tagline:
    "AI-Integrated Web Application for Smart Learning & Performance Prediction. A collaborative platform that analyzes student performance, delivers personalized insights, and predicts academic outcomes.",
  tech: [
    "Python",
    "Machine Learning",
    "Scikit-learn",
    "Flask",
    "React",
    "MongoDB"
  ],
  image: project4,
  team: "Group Project",
  status: "Currently Working"
}
];

export default projects;