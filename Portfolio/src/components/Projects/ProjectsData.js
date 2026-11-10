import project1 from "../../assets/project1.jpeg";
import project2 from "../../assets/project2.jpeg";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.jpeg";
import project5 from "../../assets/project5.jpeg";

const projects = [
  {
    id: 5,
    title: "FASHNOVA — AI Fashion Intelligence",
    slug: "fashnova-ai-fashion-intelligence",
    category: "AI • COMPUTER VISION • GEN AI",
    filterType: "ai",
    status: "Live Production",
    tagline:
      "An AI-powered fashion intelligence platform combining CLIP multitask computer vision, ML trend forecasting, Generative AI design studio, and personalized style recommendations.",
    tech: [
      "React",
      "FastAPI",
      "PyTorch",
      "OpenAI CLIP",
      "Node.js",
      "PostgreSQL"
    ],
    image: project5,
    team: "Personal Project",
    github: "https://github.com/PDisha-01/FASHNOVA",
    live: "https://fashnova-three.vercel.app/",
  },
  {
    id: 2,
    title: "TrafficOps+ — Smart City Traffic Management System",
    slug: "trafficops-smart-city-traffic-management-system",
    category: "AI • COMPUTER VISION • YOLOv8",
    filterType: "ai",
    status: "Hackathon Prototype",
    tagline:
      "Safer, Greener City Traffic Playbook — A real-time traffic management solution powered by Computer Vision, YOLOv8 vehicle detection, dynamic density estimation, and Streamlit.",
    tech: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "Streamlit",
      "Data Viz"
    ],
    image: project2,
    team: "Pantheon '25 BIT Mesra",
    github: "https://github.com/pantheon-bitm/404-team-not-found",
  },
  {
    id: 4,
    title: "SAKHI — Women Empowerment Platform",
    slug: "sakhi-women-empowerment",
    category: "WEB PLATFORM • SOCIAL IMPACT",
    filterType: "web",
    status: "Live Web App",
    tagline:
      "A women empowerment platform designed to provide awareness, support, safety resources, and essential guidance through an accessible, highly responsive web experience.",
    tech: [
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vercel"
    ],
    image: project4,
    team: "Personal Project",
    github: "https://github.com/PDisha-01/Sakhi---women-empowerment-platform",
    live: "https://sakhi-women-empowerment.vercel.app/",
  },
  {
    id: 1,
    title: "Python & Machine Learning Laboratory Suite",
    slug: "python-ml-laboratory-suite",
    category: "DATA SCIENCE • SUPERVISED ML",
    filterType: "ai",
    status: "Vocational Research",
    tagline:
      "A collection of Machine Learning implementations analyzing supervised classification models, Titanic and Iris datasets, and data preprocessing developed during training at SAIL Bokaro.",
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Seaborn"
    ],
    image: project1,
    team: "SAIL Bokaro Trainee",
    github: "https://github.com/PDisha-01/Python-Machine-Learning-Laboratory-Suite",
  },
  {
    id: 3,
    title: "Personal Portfolio & Identity Showcase",
    slug: "personal-portfolio",
    category: "WEB DEVELOPMENT • UI/UX",
    filterType: "web",
    status: "Active Deployment",
    tagline:
      "A modern, cyber-aesthetic developer portfolio showcasing my engineering journey, interactive Bento about grid, projects, certifications, and technical capabilities.",
    tech: [
      "React 19",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite"
    ],
    image: project3,
    team: "Personal Project",
    github: "https://github.com/PDisha-01/Portfolio",
    live: "https://portfolio-sigma-rose-67.vercel.app/",
  },
];

export default projects;
