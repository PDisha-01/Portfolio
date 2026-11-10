import { useEffect, useState } from "react";
import "./IntroScreen.css";

const logMessages = [
  "SYS_INIT // MOUNTING ENGINEERING WORKSPACE",
  "LOADING CORE MODULES: B.TECH CSE (BCET '26)",
  "CALIBRATING ARCHITECTURE & FULL-STACK SCHEMATICS",
  "CONNECTING INFOSYS SPRINGBOARD & AICTE MODULES",
  "ALL SCHEMATICS LOADED // RUNNING INTEGRITY CHECK",
  "SYSTEM STATUS: 100% OPERATIONAL",
];

function IntroScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  useEffect(() => {
    // Fast, crisp progress: finishes in ~2.4 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + 2;
        // Update log index periodically
        const logIdx = Math.min(
          Math.floor((next / 100) * logMessages.length),
          logMessages.length - 1
        );
        setCurrentLogIndex(logIdx);
        return next;
      });
    }, 45);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="intro-screen-container">
      {/* Blueprint Grid & Radial Vignette */}
      <div className="intro-blueprint-grid" aria-hidden="true" />
      <div className="intro-blueprint-overlay" aria-hidden="true" />

      {/* Crosshair Markers */}
      <div className="intro-crosshair crosshair-tl">+ [023.58° N]</div>
      <div className="intro-crosshair crosshair-tr">+ [087.32° E]</div>
      <div className="intro-crosshair crosshair-bl">+ [CAD: SPEC-2026]</div>
      <div className="intro-crosshair crosshair-br">+ [DISCIPLINE: CSE]</div>

      {/* Main Engineering Console Card */}
      <div className="intro-console-card">
        <div className="intro-console-header">
          <div className="intro-console-dots">
            <span className="intro-console-dot active" />
            <span className="intro-console-dot" />
            <span className="intro-console-dot" />
          </div>
          <span>ENGINEERING CONSOLE // BOOTLOADER v2.6</span>
          <span>[64 KB]</span>
        </div>

        <div className="intro-console-body">
          <div className="intro-brand-title">
            <h1>DISHA MALLICK</h1>
            <span>// SOFTWARE ENGINEER</span>
          </div>

          <div className="intro-log-list">
            {logMessages.slice(0, currentLogIndex + 1).slice(-3).map((msg, i) => (
              <div className="intro-log-item" key={i}>
                <span className="intro-log-prefix">&gt;</span>
                <span className={i === 2 || currentLogIndex >= logMessages.length - 1 ? "intro-log-success" : ""}>
                  {msg}
                </span>
              </div>
            ))}
          </div>

          <div className="intro-progress-wrap">
            <div className="intro-progress-meta">
              <span>COMPILING ENVIRONMENT...</span>
              <span className="intro-progress-percent">{progress}%</span>
            </div>

            <div className="intro-progress-track">
              <div
                className="intro-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skip Button */}
      <button
        type="button"
        className="intro-skip-btn"
        onClick={onFinish}
        aria-label="Skip intro animation"
      >
        SKIP_BOOT &gt;&gt;
      </button>
    </div>
  );
}

export default IntroScreen;
