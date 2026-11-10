import { motion } from "framer-motion";

export default function TechGraphicsBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* 1. Base Ambient Turquoise & Neon Blue Glow Auras */}
      <div className="absolute -top-32 -left-32 w-[540px] h-[540px] rounded-full bg-teal-500/[0.14] blur-[130px]" />
      <div className="absolute top-1/4 -right-20 w-[650px] h-[650px] rounded-full bg-cyan-500/[0.16] blur-[140px]" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/[0.12] blur-[130px]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 65% 32%, rgba(20, 184, 166, 0.12) 0%, rgba(6, 182, 212, 0.08) 35%, rgba(59, 130, 246, 0.05) 65%, transparent 80%)",
        }}
      />

      {/* 2. SVG Vector Computer Graphics (High-Visibility Neon Cyan & Neon Blue) */}
      <svg
        className="w-full h-full absolute inset-0 opacity-75"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Intense Neon Glow Filters */}
          <filter id="neon-cyan-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="glow1" />
            <feGaussianBlur stdDeviation="6" result="glow2" />
            <feMerge>
              <feMergeNode in="glow2" />
              <feMergeNode in="glow1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="neon-blue-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.5" result="glow1" />
            <feGaussianBlur stdDeviation="7" result="glow2" />
            <feMerge>
              <feMergeNode in="glow2" />
              <feMergeNode in="glow1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Vibrant Gradients */}
          <linearGradient id="neon-grad-cyan-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" stopOpacity="1" />
            <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="neon-grad-blue-cyan" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="1" />
            <stop offset="50%" stopColor="#00f5ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
          </linearGradient>

          {/* Crisp Micro Tech Dot Grid Pattern */}
          <pattern id="tech-dots" x="0" y="0" width="34" height="34" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.1" fill="#00f5ff" opacity="0.55" />
          </pattern>

          {/* Mask for subtle dot grid spread */}
          <mask id="tech-grid-mask">
            <radialGradient id="grid-mask-grad" cx="50%" cy="38%" r="65%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#fff" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
            <rect width="100%" height="100%" fill="url(#grid-mask-grad)" />
          </mask>
        </defs>

        {/* Dot Matrix Grid */}
        <rect width="100%" height="100%" fill="url(#tech-dots)" mask="url(#tech-grid-mask)" />

        {/* Circuit Bus Lines (Clearly Visible with Glowing Junctions) */}
        <g stroke="url(#neon-grad-cyan-blue)" strokeWidth="1.6" fill="none" opacity="0.9">
          {/* Top Left Horizontal Circuit Trace */}
          <path d="M 0,85 L 170,85 L 220,135 L 420,135" filter="url(#neon-cyan-glow)" />
          <circle cx="220" cy="135" r="3.5" fill="#00f5ff" filter="url(#neon-cyan-glow)" />
          <circle cx="420" cy="135" r="3" fill="#3b82f6" />

          {/* Mid Left Vertical Bus Trace */}
          <path d="M 80,0 L 80,170 L 130,220 L 130,420" filter="url(#neon-blue-glow)" />
          <circle cx="130" cy="220" r="3.5" fill="#3b82f6" filter="url(#neon-blue-glow)" />
          <circle cx="130" cy="420" r="3" fill="#00f5ff" />

          {/* Lower Center Diagonal Bus with Steps */}
          <path d="M 260,490 L 410,490 L 460,540 L 720,540" filter="url(#neon-cyan-glow)" />
          <circle cx="410" cy="490" r="3" fill="#00f5ff" />
          <circle cx="460" cy="540" r="3.5" fill="#3b82f6" filter="url(#neon-blue-glow)" />
        </g>

        {/* Right Area Circuit Connections (Near profile photo backdrop) */}
        <g stroke="url(#neon-grad-blue-cyan)" strokeWidth="1.6" fill="none" opacity="0.85">
          <path d="M 820,65 L 970,65 L 1030,125 L 1220,125" filter="url(#neon-cyan-glow)" />
          <circle cx="970" cy="65" r="3.5" fill="#00f5ff" filter="url(#neon-cyan-glow)" />
          <circle cx="1030" cy="125" r="3" fill="#3b82f6" />

          <path d="M 1150,220 L 1040,330 L 930,330 L 890,370" filter="url(#neon-blue-glow)" />
          <circle cx="1040" cy="330" r="3" fill="#3b82f6" />
          <circle cx="890" cy="370" r="3.5" fill="#00f5ff" filter="url(#neon-cyan-glow)" />
        </g>

        {/* Computer Graphics Tech Crosshairs & Vector Marks */}
        <g stroke="#00f5ff" strokeWidth="1.2" opacity="0.75" filter="url(#neon-cyan-glow)">
          {/* Top Left Crosshair */}
          <path d="M 40,40 L 55,40 M 47.5,32.5 L 47.5,47.5" />
          {/* Top Right Crosshair */}
          <path d="M 1095,50 L 1110,50 M 1102.5,42.5 L 1102.5,57.5" />
          {/* Center Crosshair */}
          <path d="M 615,180 L 630,180 M 622.5,172.5 L 622.5,187.5" />
          {/* Bottom Left Crosshair */}
          <path d="M 75,515 L 90,515 M 82.5,507.5 L 82.5,522.5" />
        </g>

        {/* Tech Monospace Data Glyph Watermarks */}
        <g className="font-mono text-[10px] tracking-widest select-none pointer-events-none font-semibold" opacity="0.7">
          <text x="65" y="44" fill="#00f5ff">// SYS_CORE: 0x27</text>
          <text x="640" y="184" fill="#38bdf8">// ARCH_GRAPH: ONLINE</text>
          <text x="95" y="520" fill="#00f5ff">LOC 23.52° N • 87.31° E</text>
          <text x="1030" y="44" fill="#38bdf8">SEC_NODE // VERIFIED</text>
        </g>
      </svg>

      {/* 3. Floating 3D Wireframe Graphics & Rotating Neon Tech Rings */}
      {/* Upper-Right Floating Tech Gyro Ring (Clearly Visible behind photo area) */}
      <div className="absolute top-8 right-4 sm:right-12 md:right-24 w-80 h-80 sm:w-96 sm:h-96 pointer-events-none opacity-60">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-full h-full relative"
        >
          {/* Outer Dashed Neon Ring with Cyan Glow */}
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <circle
              cx="200"
              cy="200"
              r="170"
              fill="none"
              stroke="#00f5ff"
              strokeWidth="1.8"
              strokeDasharray="8 14"
              className="drop-shadow-[0_0_8px_rgba(0,245,255,0.7)]"
            />
            {/* Inner Precision Ticks Ring */}
            <circle
              cx="200"
              cy="200"
              r="138"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1.4"
              strokeDasharray="3 9"
              className="drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]"
            />
            {/* Cardinal Coordinate Neon Nodes */}
            <circle cx="200" cy="30" r="4" fill="#00f5ff" className="drop-shadow-[0_0_8px_#00f5ff]" />
            <circle cx="370" cy="200" r="4" fill="#3b82f6" className="drop-shadow-[0_0_8px_#3b82f6]" />
            <circle cx="200" cy="370" r="4" fill="#00f5ff" className="drop-shadow-[0_0_8px_#00f5ff]" />
            <circle cx="30" cy="200" r="4" fill="#3b82f6" className="drop-shadow-[0_0_8px_#3b82f6]" />
          </svg>
        </motion.div>
      </div>

      {/* Isometric 3D Wireframe Cube (Top-Right Floating Graphic) */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 4, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-6 sm:right-20 md:right-36 w-36 h-36 pointer-events-none opacity-70"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(0,245,255,0.5)]">
          {/* Isometric Cube Edges */}
          <polygon
            points="50,15 85,35 85,75 50,95 15,75 15,35"
            fill="none"
            stroke="#00f5ff"
            strokeWidth="1.8"
            strokeDasharray="5 3"
          />
          {/* Inner 3D Spoke Lines */}
          <line x1="50" y1="55" x2="50" y2="15" stroke="#3b82f6" strokeWidth="1.6" />
          <line x1="50" y1="55" x2="85" y2="75" stroke="#00f5ff" strokeWidth="1.6" />
          <line x1="50" y1="55" x2="15" y2="75" stroke="#3b82f6" strokeWidth="1.6" />
          {/* Glowing Vertices */}
          <circle cx="50" cy="15" r="3.5" fill="#00f5ff" />
          <circle cx="85" cy="35" r="3" fill="#3b82f6" />
          <circle cx="85" cy="75" r="3" fill="#00f5ff" />
          <circle cx="50" cy="95" r="3.5" fill="#3b82f6" />
          <circle cx="15" cy="75" r="3" fill="#00f5ff" />
          <circle cx="15" cy="35" r="3" fill="#3b82f6" />
          <circle cx="50" cy="55" r="4" fill="#00f5ff" />
        </svg>
      </motion.div>

      {/* Floating Network Node Constellation (Mid-Left Graphic) */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-4 sm:left-10 md:left-20 w-48 h-48 pointer-events-none opacity-65"
      >
        <svg viewBox="0 0 140 140" className="w-full h-full drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
          {/* Interconnecting Neon Nodes */}
          <line x1="20" y1="40" x2="70" y2="20" stroke="#00f5ff" strokeWidth="1.4" />
          <line x1="70" y1="20" x2="120" y2="60" stroke="#3b82f6" strokeWidth="1.4" />
          <line x1="70" y1="20" x2="60" y2="90" stroke="#00f5ff" strokeWidth="1.4" strokeDasharray="4 3" />
          <line x1="20" y1="40" x2="60" y2="90" stroke="#3b82f6" strokeWidth="1.4" />
          <line x1="60" y1="90" x2="110" y2="110" stroke="#00f5ff" strokeWidth="1.4" />
          <line x1="120" y1="60" x2="110" y2="110" stroke="#3b82f6" strokeWidth="1.4" />

          {/* Node Points */}
          <circle cx="20" cy="40" r="3.5" fill="#00f5ff" />
          <circle cx="70" cy="20" r="4" fill="#3b82f6" />
          <circle cx="120" cy="60" r="3.5" fill="#00f5ff" />
          <circle cx="60" cy="90" r="4" fill="#3b82f6" />
          <circle cx="110" cy="110" r="3.5" fill="#00f5ff" />
        </svg>
      </motion.div>
    </div>
  );
}
