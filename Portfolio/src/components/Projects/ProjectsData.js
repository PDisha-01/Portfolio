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
    status: "Developing"
  },
  
    {
  id: 4,

  title: "SAKHI",

  slug: "sakhi-women-empowerment",

  category: "WEB DEVELOPMENT • WOMEN EMPOWERMENT",

  tagline:
    "A women empowerment platform designed to provide awareness, support, safety resources, and essential information through an accessible and user-friendly web experience.",

  tech: [
    "Typescript",
    "JavaScript",
    "HTML",
    "CSS",
    "Vercel"
  ],

  image: project4,

  team: "Personal Project",
}
];

export default projects;