import { Link } from "react-router-dom";
import "./PythonMLLab.css";
import iris from "../../assets/ProjectGallery/iris.png";
import titanic from "../../assets/ProjectGallery/resized (1).jpeg";
import pythonLab from "../../assets/ProjectGallery/resized (1).png";
import graphs from "../../assets/ProjectGallery/resized (2).png";
export default function PythonMLLab() {

  return (

    <div className="python-lab-page">
      <div className="ai-particles"></div>

      <div className="project-container">

        <Link
          to="/"
          className="back-btn"
        >
          ← Back to Portfolio
        </Link>

        <h1 className="project-title">
          Python & Machine Learning Laboratory Suite
        </h1>

        <span className="project-label">
          Client Name - Vocational Training @SAIL 
        </span>

        <p className="project-description">
          A comprehensive collection of Python programming,
          data analysis and Machine Learning projects
          developed during vocational training,
          demonstrating supervised learning,
          preprocessing techniques and predictive analytics.
        </p>

        <div className="hero-buttons">

          <a
            href="https://github.com/PDisha-01/Python-Machine-Learning-Laboratory-Suite"
            target="_blank"
            rel="noopener noreferrer"
            className="python-github-btn"
          >
            GitHub Repository ↗
          </a>

        </div>
<section className="overview-section">

  <div className="section-heading">
    <span>01</span>
    <h2> ~ Project Overview ~</h2>
  </div>

  <div className="overview-card">

    <p>
      The <strong>Python & Machine Learning Laboratory Suite</strong>
      is a collection of practical experiments developed during my
      vocational training. It combines Python programming,
      data preprocessing, visualization, and machine learning
      algorithms to solve real-world predictive problems.

      The project demonstrates the complete workflow of a machine
      learning application—from loading datasets and cleaning data
      to training models, evaluating performance, and generating
      predictions using Scikit-learn.
    </p>

  </div>

</section>
<section className="features-section">

  <div className="section-heading">
    <span>02</span>
    <h2> ~ Key Features ~</h2>
  </div>

  <div className="features-grid">

    <div className="feature-card">
      <div className="feature-icon">🐍</div>

      <h3>Python Programming</h3>

      <p>
        Developed multiple Python programs covering
        problem solving, file handling, automation,
        and object-oriented programming concepts.
      </p>
    </div>


    <div className="feature-card">
      <div className="feature-icon">🤖</div>

      <h3>Machine Learning</h3>

      <p>
        Implemented supervised learning algorithms
        using Scikit-learn on real-world datasets
        such as Iris and Titanic.
      </p>
    </div>


    <div className="feature-card">
      <div className="feature-icon">📊</div>

      <h3>Data Analysis</h3>

      <p>
        Performed preprocessing, visualization,
        feature selection and exploratory
        data analysis using Pandas.
      </p>
    </div>


    <div className="feature-card">
      <div className="feature-icon">📈</div>

      <h3>Model Evaluation</h3>

      <p>
        Evaluated machine learning models using
        accuracy metrics, train-test split,
        predictions and performance analysis.
      </p>
    </div>

  </div>

</section>
<section className="stack-section">

  <div className="section-heading">
    <span>03</span>
    <h2>~ Technology Stack ~</h2>
  </div>

  <div className="stack-grid">

    <div className="stack-card">
      <h3>Programming</h3>

      <div className="stack-tags">
        <span>Python</span>
      </div>
    </div>


    <div className="stack-card">
      <h3>Machine Learning</h3>

      <div className="stack-tags">
        <span>Scikit-learn</span>
        <span>Train-Test Split</span>
        <span>Classification</span>
      </div>
    </div>


    <div className="stack-card">
      <h3>Data Analysis</h3>

      <div className="stack-tags">
        <span>Pandas</span>
        <span>NumPy</span>
      </div>
    </div>


    <div className="stack-card">
      <h3>Visualization</h3>

      <div className="stack-tags">
        <span>Matplotlib</span>
        <span>Seaborn</span>
      </div>
    </div>

  </div>

</section>
<section className="architecture-section">

  <div className="section-heading">
    <span>04</span>
    <h2>Project Architecture</h2>
  </div>

  <div className="architecture-container">

    <div className="arch-box title-box">
      Python &amp; ML Laboratory Suite
    </div>

    <div className="arch-line vertical"></div>

    <div className="arch-row">

      <div className="arch-column">

        <div className="arch-box">
          <h3>Data Collection</h3>
          <p>CSV Datasets</p>
        </div>

      </div>

      <div className="arch-column">

        <div className="arch-box">
          <h3>Data Processing</h3>
          <p>Pandas • NumPy</p>
        </div>

      </div>

      <div className="arch-column">

        <div className="arch-box">
          <h3>Python Programs</h3>
          <p>Core Python Labs</p>
        </div>

      </div>

    </div>

    <div className="arch-line vertical"></div>

    <div className="arch-box">
      Feature Engineering &amp; Data Cleaning
    </div>

    <div className="arch-line vertical"></div>

    <div className="arch-box">
      Machine Learning Models
      <small>Scikit-learn Algorithms</small>
    </div>

    <div className="arch-line vertical"></div>

    <div className="arch-box">
      Model Training
    </div>

    <div className="arch-line vertical"></div>

    <div className="arch-box">
      Model Evaluation
      <small>Accuracy • Predictions • Metrics</small>
    </div>

    <div className="arch-line vertical"></div>

    <div className="arch-box">
      Results &amp; Visualizations
      <small>Matplotlib • Seaborn</small>
    </div>

  </div>

</section>

<section className="modules-section">

  <div className="section-heading">
    <span>05</span>
    <h2>~ Project Modules ~</h2>
  </div>

  <div className="modules-grid">

    <div className="module-card">
      <div className="module-number">01</div>
      <h3>Iris Flower Classification</h3>
      <p>
        Built a supervised machine learning model to classify Iris flowers
        into three species using Scikit-learn classification algorithms.
      </p>
    </div>

    <div className="module-card">
      <div className="module-number">02</div>
      <h3>Titanic Survival Prediction</h3>
      <p>
        Cleaned and preprocessed the Titanic dataset, engineered features,
        and trained classification models to predict passenger survival.
      </p>
    </div>

    <div className="module-card">
      <div className="module-number">03</div>
      <h3>Python Programming Labs</h3>
      <p>
        Implemented Python programs covering loops, functions,
        file handling, object-oriented programming, and exception handling.
      </p>
    </div>

    <div className="module-card">
      <div className="module-number">04</div>
      <h3>Data Analysis & Visualization</h3>
      <p>
        Explored datasets using Pandas, NumPy, Matplotlib,
        and Seaborn to generate insights and visualizations.
      </p>
    </div>

  </div>

</section>
<section className="gallery-section">

  <div className="section-heading">
    <span>06</span>
    <h2>~ Project Gallery ~</h2>
  </div>

  <div className="gallery-grid">

    <div className="gallery-card">
      <img src={iris} alt="Iris Classification" />
      <h3>Iris Classification</h3>
    </div>

    <div className="gallery-card">
      <img src={titanic} alt="Resized image" />
      <h3>Resizes Image</h3>
    </div>

    <div className="gallery-card">
      <img src={pythonLab} alt="Python Programs" />
      <h3>Python Laboratory</h3>
    </div>

    <div className="gallery-card">
      <img src={graphs} alt="Visualizations" />
      <h3>Data Visualization</h3>
    </div>

  </div>

</section>

<section className="results-section">

  <div className="section-heading">
    <span>07</span>
    <h2>~ Results & Achievements ~</h2>
  </div>

  <div className="results-grid">

    <div className="result-card">
      <h3>20+</h3>
      <p>Python programs implemented covering core programming concepts.</p>
    </div>

    <div className="result-card">
      <h3>2</h3>
      <p>Machine Learning datasets successfully analyzed and modeled.</p>
    </div>

    <div className="result-card">
      <h3>100%</h3>
      <p>Complete ML workflow including preprocessing, training and evaluation.</p>
    </div>

    <div className="result-card">
      <h3>5+</h3>
      <p>Python libraries used including Pandas, NumPy, Scikit-learn and Matplotlib.</p>
    </div>

  </div>

</section>

<section className="learning-section">

  <div className="section-heading">
    <span>08</span>
    <h2>~ Challenges & Learnings ~</h2>
  </div>

  <div className="learning-grid">

    <div className="learning-card">
      <h3>Challenges</h3>

      <ul>
        <li>Understanding machine learning workflows and preprocessing techniques.</li>
        <li>Cleaning missing and inconsistent data before model training.</li>
        <li>Selecting appropriate algorithms for different datasets.</li>
        <li>Evaluating model performance using suitable metrics.</li>
      </ul>

    </div>

    <div className="learning-card">
      <h3>Key Learnings</h3>

      <ul>
        <li>Built end-to-end machine learning pipelines using Scikit-learn.</li>
        <li>Learned feature engineering and data preprocessing techniques.</li>
        <li>Strengthened Python programming and problem-solving skills.</li>
        <li>Improved analytical thinking through real-world datasets.</li>
      </ul>

    </div>

  </div>

</section>
<section className="project-end">

    <p className="end-subtitle">
        THANK YOU FOR EXPLORING
    </p>

    <p className="end-description">
        This project reflects my journey in Python programming,
        data analysis and machine learning. It demonstrates my
        ability to transform raw datasets into meaningful insights
        using modern AI technologies.
    </p>

    <div className="end-buttons">

        <a
            href="https://github.com/PDisha-01/Python-Machine-Learning-Laboratory-Suite"
            target="_blank"
            rel="noopener noreferrer"
            className="end-github"
        >
            View Source Code ↗
        </a>

        <Link
            to="/#projects"
            className="end-portfolio"
        >
            Back to Portfolio
        </Link>

    </div>

</section>
      </div>

    </div>

  );

}

