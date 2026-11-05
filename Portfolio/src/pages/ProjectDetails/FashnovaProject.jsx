import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./FashnovaProject.css";

import heroFashion from "../../assets/Fashnova/hero-fashion.jpg";
import runwayCouture from "../../assets/Fashnova/runway-couture.jpg";
import runwayAvantgarde from "../../assets/Fashnova/runway-avantgarde.jpg";
import runwayTailoring from "../../assets/Fashnova/runway-tailoring.jpg";
import studioDressEmerald from "../../assets/Fashnova/studio-dress-emerald.jpg";

export default function FashnovaProject() {
  return (
    <section className="fashnova-project">

      {/* Back Button */}
      <Link to="/#projects" className="back-project">
        ← Back to Projects
      </Link>

      {/* Hero */}
      <motion.div
        className="fashnova-project-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="project-label">
          AI • COMPUTER VISION • GENERATIVE AI
        </span>

        <h1>FASHNOVA</h1>

        <p>
          An AI-powered fashion intelligence platform that combines
          multi-task Computer Vision, Machine Learning trend forecasting,
          Generative AI design synthesis, and personalized recommendation
          systems into a unified full-stack ecosystem.
        </p>

        <div className="project-client">
          <span>Client / Scope</span>
          <strong>Personal Project • Full-Stack AI/ML Platform</strong>
        </div>
      </motion.div>

      {/* Hero Actions (Watch Live & GitHub) */}
      <motion.div
        className="project-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href="https://fashnova-three.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="live-demo-btn"
        >
          Watch Live ↗
        </a>

        <a
          href="https://github.com/PDisha-01/FASHNOVA"
          target="_blank"
          rel="noopener noreferrer"
          className="github-project-btn"
        >
          GitHub ↗
        </a>
      </motion.div>

      {/* Content: Challenges & Solution */}
      <div className="fashnova-project-content">

        {/* Challenges */}
        <motion.div
          className="project-detail-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span>01</span>
          <h2>The Challenges</h2>
          <p>
            Fashion technology has long been fragmented: Computer Vision tools
            merely classify basic items, trend analytics remain locked in static
            spreadsheets, and generative tools lack domain-specific fashion context.
            The challenge was architecting a cohesive, low-latency system that can
            extract granular clothing attributes, normalize seasonal catalog data,
            forecast multi-year trends, and condition generative models to create
            tailored fashion designs.
          </p>
        </motion.div>

        {/* Solution */}
        <motion.div
          className="project-detail-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span>02</span>
          <h2>The Solution</h2>
          <p>
            I architected and built FASHNOVA as an enterprise-grade, modular
            platform uniting four intelligence pillars. An OpenAI CLIP multi-task
            deep learning model performs instantaneous visual classification across 7
            dimensions; a time-series ML engine scores market momentum; a Generative AI
            Studio synthesizes runway concepts; and a centralized Style Engine brings
            every visual, trend, and user preference signal together into personalized
            recommendations.
          </p>
        </motion.div>

      </div>

      {/* Interface Showcase */}
      <motion.div
        className="interface-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span>03</span>
        <h2>System Interface &amp; Visual Showcase</h2>
        <p>
          Designed with a luxury haute-couture aesthetic, FASHNOVA features high-contrast
          visual layouts, interactive runway feeds, granular confidence score breakdowns,
          and seamless exploration across collections.
        </p>

        <div className="interface-gallery">

          {/* Main Showcase Image */}
          <div className="interface-main">
            <img
              src={heroFashion}
              alt="FASHNOVA Haute Couture Runway and Style Engine Interface"
            />
            <div className="interface-caption">
              <h3>Runway Collections &amp; Style Engine Showcase</h3>
              <p>
                Dynamic collection viewer presenting Paris Couture, Milan Tailoring,
                and Tokyo Neo-Luxury with real-time AI confidence scores, momentum indicators,
                and interactive color palettes.
              </p>
            </div>
          </div>

          {/* Supporting Thumbnails */}
          <div className="interface-small">

            <div className="interface-thumb-card">
              <img src={runwayCouture} alt="Paris Couture Sculptural Silk Gown" />
              <div className="interface-thumb-text">
                <span>Runway 01 • Haute Couture</span>
                <h4>Crimson &amp; Rose Silk Gown</h4>
                <p>98.4% AI classification confidence with double-faced silk charmeuse detection.</p>
              </div>
            </div>

            <div className="interface-thumb-card">
              <img src={runwayTailoring} alt="Milan Tailoring Structured Wool Blazer" />
              <div className="interface-thumb-text">
                <span>Runway 02 • Tailoring</span>
                <h4>Sculpted Wool Blazer</h4>
                <p>Architectural peak lapels analysis with Italian melton wool fabric recognition.</p>
              </div>
            </div>

            <div className="interface-thumb-card">
              <img src={runwayAvantgarde} alt="Tokyo Neo-Luxury Metallic Trench" />
              <div className="interface-thumb-text">
                <span>Runway 03 • Avant-Garde</span>
                <h4>Liquid Metallic Noir Trench</h4>
                <p>High-collar membrane detection with +34% emerging market trend momentum.</p>
              </div>
            </div>

            <div className="interface-thumb-card">
              <img src={studioDressEmerald} alt="Generative AI Studio Emerald Gown" />
              <div className="interface-thumb-text">
                <span>Studio • Generative AI</span>
                <h4>Emerald Silk Couture Gown</h4>
                <p>Synthesized via prompt engineering conditioned on trend and silhouette context.</p>
              </div>
            </div>

          </div>

        </div>
      </motion.div>

      {/* Core Intelligence Pillars */}
      <motion.div
        className="pillars-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="pillars-heading">
          <span>04</span>
          <h2>The 4 Core Intelligence Pillars</h2>
          <p>
            FASHNOVA's architecture separates intelligence concerns into four
            autonomous, specialized microservices communicating via structured REST APIs.
          </p>
        </div>

        <div className="pillars-grid">

          {/* Pillar 1 */}
          <motion.div className="pillar-card" whileHover={{ y: -6 }}>
            <div className="pillar-header">
              <span className="pillar-number">PILLAR 01</span>
              <span className="pillar-badge">FastAPI :8001</span>
            </div>
            <h3>VISION — Multi-Task Computer Vision</h3>
            <p>
              Powered by AutoCatalogAI CLIP Multitask Classifier V2. Ingests fashion
              images and predicts 7 structured attributes simultaneously: Gender, Master
              Category, Sub Category, Article Type, Base Colour, Season, and Usage with
              calibrated probabilities.
            </p>
            <div className="pillar-highlights">
              <span>OpenAI CLIP</span>
              <span>PyTorch</span>
              <span>FastAPI</span>
              <span>Multi-head Classification</span>
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div className="pillar-card" whileHover={{ y: -6 }}>
            <div className="pillar-header">
              <span className="pillar-number">PILLAR 02</span>
              <span className="pillar-badge">FastAPI :8002</span>
            </div>
            <h3>TRENDS — ML Forecasting &amp; Momentum</h3>
            <p>
              Converts raw multi-year fashion catalog data into normalized yearly
              share distributions. Computes trend lifecycle stages (Emerging, Peaking,
              Evergreen, Declining), momentum percentages, and multi-horizon future share forecasts.
            </p>
            <div className="pillar-highlights">
              <span>Scikit-learn</span>
              <span>Pandas</span>
              <span>Time-Series Modeling</span>
              <span>Trend Scoring</span>
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div className="pillar-card" whileHover={{ y: -6 }}>
            <div className="pillar-header">
              <span className="pillar-number">PILLAR 03</span>
              <span className="pillar-badge">FastAPI :8003</span>
            </div>
            <h3>STUDIO — Generative AI Design Synthesis</h3>
            <p>
              Creative fashion intelligence engine powered by Generative AI. Transforms
              structured fashion prompts, silhouette parameters, fabrics, and trending
              color palettes into photo-realistic runway designs and creative concepts.
            </p>
            <div className="pillar-highlights">
              <span>Generative AI</span>
              <span>Gemini API</span>
              <span>Prompt Engineering</span>
              <span>Runway Synthesis</span>
            </div>
          </motion.div>

          {/* Pillar 4 */}
          <motion.div className="pillar-card" whileHover={{ y: -6 }}>
            <div className="pillar-header">
              <span className="pillar-number">PILLAR 04</span>
              <span className="pillar-badge">FastAPI :8004</span>
            </div>
            <h3>STYLE ENGINE — Recommendation Intelligence</h3>
            <p>
              The centralized decision core of FASHNOVA. Synthesizes visual features
              from Vision, momentum curves from Trends, creative inspiration from Studio,
              and individual user style profiles into personalized, context-aware outfit recommendations.
            </p>
            <div className="pillar-highlights">
              <span>Multi-Signal Ranking</span>
              <span>Personalization</span>
              <span>Context Modeling</span>
              <span>Outfit Synthesis</span>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        className="project-detail-card tech-detail-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span>05</span>
        <h2>Technology Stack</h2>
        <p>
          Engineered as a polyglot, microservices-based full-stack platform:
        </p>

        <div className="tech-stack-list">
          <span>React 19</span>
          <span>Vite</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>Python 3.11</span>
          <span>FastAPI</span>
          <span>PyTorch</span>
          <span>OpenAI CLIP</span>
          <span>Scikit-learn</span>
          <span>Pandas &amp; NumPy</span>
          <span>PostgreSQL</span>
          <span>Prisma ORM</span>
          <span>Generative AI (Gemini)</span>
          <span>Tailwind CSS</span>
          <span>Vercel</span>
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        className="achievements-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="achievement-heading">
          <span>06</span>
          <h2>Key Highlights &amp; Outcomes</h2>
          <p>
            Key architectural and engineering milestones achieved while developing
            the FASHNOVA platform.
          </p>
        </div>

        <div className="achievements-grid">

          <motion.div className="achievement-card" whileHover={{ y: -8 }}>
            <span className="achievement-number">01</span>
            <h3>End-to-End Microservice Architecture</h3>
            <p>
              Decoupled Python ML inference services from the Node.js API gateway,
              allowing horizontal scaling and independent deployment across machine learning runtimes.
            </p>
          </motion.div>

          <motion.div className="achievement-card" whileHover={{ y: -8 }}>
            <span className="achievement-number">02</span>
            <h3>7-Attribute Multi-Task Computer Vision</h3>
            <p>
              Implemented multi-head visual embeddings to simultaneously identify gender,
              master category, sub category, garment type, base color, season, and usage from fashion imagery.
            </p>
          </motion.div>

          <motion.div className="achievement-card" whileHover={{ y: -8 }}>
            <span className="achievement-number">03</span>
            <h3>Predictive Trend &amp; Momentum Scoring</h3>
            <p>
              Formulated normalized year-over-year share modeling to identify rising vs.
              declining silhouettes without bias from gross catalog volume fluctuations.
            </p>
          </motion.div>

          <motion.div className="achievement-card" whileHover={{ y: -8 }}>
            <span className="achievement-number">04</span>
            <h3>Generative Fashion Design Studio</h3>
            <p>
              Constructed domain-aware prompt pipelines that bridge trend forecasting
              with high-fidelity image generation for experimental runway creation.
            </p>
          </motion.div>

        </div>
      </motion.div>

      {/* Final Call to Action */}
      <motion.div
        className="final-cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>PROJECT SHOWCASE</span>
        <h2>Experience FASHNOVA</h2>
        <p>
          Explore the live interactive application or inspect the complete
          open-source repository on GitHub.
        </p>

        <div className="cta-buttons">
          <a
            href="https://fashnova-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-demo-btn"
          >
            Watch Live ↗
          </a>

          <a
            href="https://github.com/PDisha-01/FASHNOVA"
            target="_blank"
            rel="noopener noreferrer"
            className="github-project-btn"
          >
            View Source Code ↗
          </a>

          <Link to="/#projects" className="github-project-btn">
            ← Back to Portfolio
          </Link>
        </div>
      </motion.div>

      {/* Back To Top */}
      <motion.div
        className="back-to-top-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <a href="#" className="back-to-top">
          Back to Top ↑
        </a>
      </motion.div>

    </section>
  );
}
