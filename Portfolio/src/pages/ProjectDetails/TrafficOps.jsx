import { Link } from "react-router-dom";
import "./TrafficOps.css";
import image1 from "../../assets/TrafficOps/image1.jpeg";
import image2 from "../../assets/TrafficOps/image2.jpeg";

export default function TrafficOps() {
  return (
    <div className="traffic-page">

      <section className="traffic-hero">

        <Link to="/" className="traffic-back">
  ← Back to Portfolio
</Link>

<span className="traffic-label">
  AI • COMPUTER VISION PROJECT
</span>

<h1 className="traffic-title">
  <span>TRAFFIC</span>
  <span>OPS+</span>
</h1>

<h2 className="traffic-subtitle">
  Smart City Traffic
  <br />
  Management System
</h2>

<p className="traffic-tagline">
  Safer • Greener • Intelligent
</p>

<div className="traffic-buttons">
  <a
    href="https://github.com/pantheon-bitm/404-team-not-found"
    target="_blank"
    rel="noopener noreferrer"
    className="traffic-github-btn"
  >
    GitHub ↗
  </a>
</div>

      </section>
      <section className="project-info">

  <div className="info-left">

    <span className="info-number">01</span>

    <h2>
      Project
    </h2>

    <p>
      TrafficOps+ is an AI-powered traffic management platform
      designed to monitor roads in real time, detect vehicles,
      analyze traffic density, and prioritize emergency vehicles
      using Computer Vision and Deep Learning.
    </p>

  </div>

  <div className="info-right">

    <div className="info-row">
      <span>CLIENT</span>
      <h3>BIT Mesra Hackathon</h3>
    </div>

    <div className="info-row">
      <span>YEAR</span>
      <h3>2025</h3>
    </div>

    <div className="info-row">
      <span>ROLE</span>
      <h3>AI Developer</h3>
    </div>

  </div>

</section>
<section className="challenge-section">

  <div className="challenge-left">

    <span className="challenge-number">
      02
    </span>

    <h2>
      The Challenge
    </h2>

  </div>

  <div className="challenge-right">

    <p>
      Modern cities face increasing traffic congestion,
      delayed emergency response, inefficient signal
      management, and rising environmental pollution.
      Traditional traffic control systems rely heavily on
      manual monitoring, making it difficult to react
      quickly to changing road conditions.
    </p>

    <div className="challenge-list">

      <div className="challenge-item">
        <span>01</span>
        <h3>Urban Traffic Congestion</h3>
      </div>

      <div className="challenge-item">
        <span>02</span>
        <h3>Emergency Vehicle Delays</h3>
      </div>

      <div className="challenge-item">
        <span>03</span>
        <h3>Air Pollution & Fuel Wastage</h3>
      </div>

      <div className="challenge-item">
        <span>04</span>
        <h3>Manual Traffic Monitoring</h3>
      </div>

    </div>

  </div>

</section>
<section className="solution-section">

  <div className="solution-heading">

    <span>03</span>

    <h2>The Solution</h2>

    <p>
      TrafficOps+ combines Computer Vision, Deep Learning,
      and intelligent traffic analysis to automate real-time
      traffic monitoring and decision-making.
    </p>

  </div>

  <div className="solution-flow">

    <div className="flow-item">
      <div className="flow-circle"></div>
      <div className="flow-content">
        <h3>Traffic Camera</h3>
        <p>Live video streams from road surveillance cameras.</p>
      </div>
    </div>

    <div className="flow-item">
      <div className="flow-circle"></div>
      <div className="flow-content">
        <h3>YOLOv8 Detection</h3>
        <p>Detects vehicles, pedestrians and emergency vehicles.</p>
      </div>
    </div>

    <div className="flow-item">
      <div className="flow-circle"></div>
      <div className="flow-content">
        <h3>Vehicle Classification</h3>
        <p>Identifies cars, buses, trucks, bikes and ambulances.</p>
      </div>
    </div>

    <div className="flow-item">
      <div className="flow-circle"></div>
      <div className="flow-content">
        <h3>Traffic Density Analysis</h3>
        <p>Calculates congestion levels from detected objects.</p>
      </div>
    </div>

    <div className="flow-item">
      <div className="flow-circle"></div>
      <div className="flow-content">
        <h3>Signal Recommendation</h3>
        <p>Optimizes traffic light timing based on density.</p>
      </div>
    </div>

    <div className="flow-item">
      <div className="flow-circle"></div>
      <div className="flow-content">
        <h3>Emergency Vehicle Priority</h3>
        <p>Provides intelligent priority for ambulances and emergency response.</p>
      </div>
    </div>

  </div>

</section>
<section className="skills-section">

  <div className="skills-left">

    <span className="skills-number">04</span>

    <h2>Technology Stack</h2>

  </div>

  <div className="skills-right">

    <div className="skill">
      <div className="skill-head">
        <span>Python</span>
        <span>80%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill python"></div>
      </div>
    </div>

    <div className="skill">
      <div className="skill-head">
        <span>YOLOv8</span>
        <span>90%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill yolo"></div>
      </div>
    </div>

    <div className="skill">
      <div className="skill-head">
        <span>OpenCV</span>
        <span>100%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill opencv"></div>
      </div>
    </div>

    <div className="skill">
      <div className="skill-head">
        <span>Streamlit</span>
        <span>85%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill streamlit"></div>
      </div>
    </div>

  </div>

</section>
<section className="ui-section">

  <div className="section-heading">
    <span>07</span>
    <h2>~ Interface ~</h2>
  </div>

  <div className="ui-grid">

    <div className="ui-card">
      <img src={image1} alt="TrafficOps Dashboard" />
      <div className="ui-content">
        <h3>Traffic Monitoring Dashboard</h3>
        <p>
          Real-time dashboard displaying traffic conditions,
          vehicle detection, and AI-powered analytics.
        </p>
      </div>
    </div>

    <div className="ui-card">
      <img src={image2} alt="YOLO Vehicle Detection" />
      <div className="ui-content">
        <h3>YOLO Vehicle Detection</h3>
        <p>
          Detects and classifies vehicles using YOLOv8,
          enabling intelligent traffic monitoring and
          emergency vehicle prioritization.
        </p>
      </div>
    </div>

  </div>

</section>
<div className="stats-container">

  <div className="stat-card">
    <span className="stat-number">01</span>
    <h2>95%</h2>
    <p>Vehicle Detection Accuracy</p>
  </div>

  <div className="stat-card">
    <span className="stat-number">02</span>
    <h2>Real-time</h2>
    <p>Object Detection</p>
  </div>

  <div className="stat-card">
    <span className="stat-number">03</span>
    <h2>YOLOv8</h2>
    <p>Computer Vision</p>
  </div>

</div>
<section className="final-cta">

  <h2>
    THANKS For Exploring.
    
  </h2>

  <div className="cta-divider"></div>

  <div className="cta-buttons">

  <a
    href="https://github.com/pantheon-bitm/404-team-not-found"
    target="_blank"
    rel="noopener noreferrer"
    className="cta-primary"
  >
    Explore Source Code
  </a>


  <Link
    to="/"
    className="cta-secondary"
  >
    Back to Portfolio
  </Link>

</div>

</section>

    </div>
  );
}