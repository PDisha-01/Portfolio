import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFlask,
  SiMongodb,
  SiHibernate,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { techData } from "../data/techData";

export default function TechArsenal() {

  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <section className="tech-section">

      <motion.div
        className="tech-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span>CHAPTER 03</span>

        <h2>TECH ARSENAL</h2>

        <p>
          Technologies that power every solution I build.
        </p>
      </motion.div>

      <div className="tech-content">

  <div className="orbit-container">


    <div className="orbit orbit-3">
      {/* Ring 3 icons will go here later */}
      <div className="orbit orbit-3">

  <div
    className="tech-node git"
    onClick={() => setSelectedTech("git")}
  >
    <FaGitAlt />
  </div>

  <div
    className="tech-node github"
    onClick={() => setSelectedTech("github")}
  >
    <FaGithub />
  </div>

  <div
    className="tech-node vscode"
    onClick={() => setSelectedTech("vscode")}
  >
    <VscCode />
  </div>

  <div
    className="tech-node numpy"
    onClick={() => setSelectedTech("numpy")}
  >
    <SiNumpy />
  </div>

  <div
    className="tech-node pandas"
    onClick={() => setSelectedTech("pandas")}
  >
    <SiPandas />
  </div>

  <div
    className="tech-node sklearn"
    onClick={() => setSelectedTech("sklearn")}
  >
    <SiScikitlearn />
  </div>

</div>
    </div>

<div className="orbit orbit-2">

  {/* Ring 2 icons go here */}

  <div
  className="tech-node python"
  onClick={() => setSelectedTech("python")}
>
  <FaPython />
</div>

  <div
  className="tech-node flask"
  onClick={() => setSelectedTech("flask")}
>
  <SiFlask />
</div>

  <div
  className="tech-node mongodb"
  onClick={() => setSelectedTech("mongodb")}
>
  <SiMongodb />
</div>

  <div
  className="tech-node hibernate"
  onClick={() => setSelectedTech("hibernate")}
>
  <SiHibernate />
</div>

  <div
  className="tech-node os"
  onClick={() => setSelectedTech("os")}
>
  💻
</div>

  <div
  className="tech-node shutil"
  onClick={() => setSelectedTech("shutil")}
>
  📁
</div>

</div>

    
    <div className="orbit orbit-1">

  <div
  className="tech-node react"
  onClick={() => setSelectedTech("react")}
>
  <FaReact />
</div>

  <div className="tech-node html"
    onClick={() => setSelectedTech("html")}
    >
    <FaHtml5 />
  </div>

  <div className="tech-node css"
  onClick={() => setSelectedTech("css")}>
    <FaCss3Alt />
  </div>

  <div
  className="tech-node js"
  onClick={() => setSelectedTech("javascript")}
>
  <FaJsSquare />
</div>

  <div className="tech-node tailwind"
  onClick={() => setSelectedTech("tailwind")}>
    <SiTailwindcss />
  </div>

  </div>
  <div className="orbit-core">

        <div className="core-icon">⚡</div>

        <h3>TECH</h3>

        <span>ARSENAL</span>

    </div>

  </div>

 {selectedTech && techData[selectedTech] && (
  <motion.div
    className="tech-info-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <h2>{techData[selectedTech].title}</h2>

    <h5 className="tech-category">
      {techData[selectedTech].category}
    </h5>

    <p>{techData[selectedTech].description}</p>

    <h4>Core Skills</h4>

    <ul>
      {techData[selectedTech].skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </motion.div>
)}
      
      </div>

    </section>
  );
}