import { motion } from "framer-motion";

export default function TechGraphicsBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none"
      aria-hidden="true"
    >
      {/* 1. Base Ambient Turquoise & Neon Blue Glow Auras */}
      <div className="absolute -top-36 -left-32 w-[520px] h-[520px] rounded-full bg-teal-500/[0.08] blur-[140px]" />
      <div className="absolute top-1/4 -right-24 w-[620px] h-[620px] rounded-full bg-cyan-500/[0.09] blur-[150px]" />
      <div className="absolute top-1/2 left-1/4 w-[480px] h-[480px] rounded-full bg-blue-600/[0.06] blur-[140px]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 65% 32%, rgba(20, 184, 166, 0.07) 0%, rgba(6, 182, 212, 0.05) 35%, rgba(59, 130, 246, 0.03) 65%, transparent 80%)",
        }}
      />

      {/* 2. SVG Vector Computer Graphics (Neon Cyan & Neon Blue) */}
      <svg
        className="w-full h-full absolute inset-0 opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Neon Glow Filters */}
          <filter id="neon-cyan-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="neon-blue-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4.5" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradients */}
          <linearGradient id="neon-grad-cyan-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#00f5ff" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="neon-grad-blue-cyan" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
          </linearGradient>

          {/* Micro Tech Dot Grid Pattern */}
          <pattern id="tech-dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.9" fill="#00f5ff" opacity="0.35" />
          </pattern>

          {/* Vignette mask for the grid pattern so it softly fades out */}
          <mask id="tech-grid-mask">
            <radialGradient id="grid-mask-grad" cx="50%" cy="38%" r="65%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.65" />
              <stop offset="55%" stopColor="#fff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
            <rect width="100%" height="100%" fill="url(#grid-mask-grad)" />
          </mask>
        </defs>

        {/* Dot Matrix Grid */}
        <rect width="100%" height="100%" fill="url(#tech-dots)" mask="url(#tech-grid-mask)" />

        {/* Circuit Bus Lines (Left & Center) */}
        <g stroke="url(#neon-grad-cyan-blue)" strokeWidth="1.2" fill="none" opacity="0.75">
          {/* Top Left Horizontal Circuit Trace */}
          <path d="M 0,90 L 160,90 L 210,140 L 380,140" filter="url(#neon-cyan-glow)" />
          <circle cx="210" cy="140" r="3" fill="#00f5ff" />
          <circle cx="380" cy="140" r="2.5" fill="#3b82f6" />

          {/* Mid Left Vertical Bus Trace */}
          <path d="M 90,0 L 90,160 L 140,210 L 140,380" filter="url(#neon-blue-glow)" />
          <circle cx="140" cy="210" r="3" fill="#3b82f6" />
          <circle cx="140" cy="380" r="2.5" fill="#00f5ff" />

          {/* Lower Center Diagonal Bus with Steps */}
          <path d="M 280,480 L 420,480 L 470,530 L 680,530" filter="url(#neon-cyan-glow)" />
          <circle cx="420" cy="480" r="2.5" fill="#00f5ff" />
          <circle cx="470" cy="530" r="3" fill="#3b82f6" />
        </g>

        {/* Right Area Circuit Connections (Near profile photo backdrop) */}
        <g stroke="url(#neon-grad-blue-cyan)" strokeWidth="1.2" fill="none" opacity="0.7">
          <path d="M 850,70 L 980,70 L 1040,130 L 1200,130" filter="url(#neon-cyan-glow)" />
          <circle cx="980" cy="70" r="3" fill="#00f5ff" />
          <circle cx="1040" cy="130" r="2.5" fill="#3b82f6" />

          <path d="M 1120,240 L 1020,340 L 940,340 L 900,380" filter="url(#neon-blue-glow)" />
          <circle cx="1020" cy="340" r="2.5" fill="#3b82f6" />
          <circle cx="900" cy="380" r="3" fill="#00f5ff" />
        </g>

        {/* Computer Graphics Tech Crosshairs & Vector Marks */}
        <g stroke="#00f5ff" strokeWidth="1" opacity="0.55">
          {/* Top Left Crosshair */}
          <path d="M 45,40 L 55,40 M 50,35 L 50,45" />
          {/* Top Right Crosshair */}
          <path d="M 1100,50 L 1110,50 M 1105,45 L 1105,55" />
          {/* Center Crosshair */}
          <path d="M 620,180 L 630,180 M 625,175 L 625,185" />
          {/* Bottom Left Crosshair */}
          <path d="M 80,520 L 90,520 M 85,515 L 85,525" />
        </g>

        {/* Tech Monospace Data Glyph Watermarks */}
        <g className="font-mono text-[9px] tracking-widest select-none pointer-events-none" opacity="0.45">
          <text x="60" y="44" fill="#06b6d4">// SYS_CORE: 0x27</text>
          <text x="635" y="184" fill="#3b82f6">// NODE_GRAPH: ACTIVE</text>
          <text x="95" y="524" fill="#00f5ff">LAT 23.52° N • LON 87.31° E</text>
          <text x="1045" y="45" fill="#06b6d4">SEC_PROTO // ENCRYPTED</text>
        </g>
      </svg>

      {/* 3. Floating 3D Wireframe Graphics & Rotating Neon Tech Rings */}
      {/* Upper-Right Floating Tech Gyro Ring (Behind Photo Area) */}
      <div className="absolute top-12 right-6 sm:right-16 md:right-28 w-80 h-80 sm:w-96 sm:h-96 pointer-events-none opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
          className="w-full h-full relative"
        >
          {/* Outer Dashed Neon Ring */}
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <circle
              cx="200"
              cy="200"
              r="170"
              fill="none"
              stroke="#00f5ff"
              strokeWidth="1.2"
              strokeDasharray="6 14"
              className="opacity-70"
            />
            {/* Inner Precision Ticks Ring */}
            <circle
              cx="200"
              cy="200"
              r="140"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1"
              strokeDasharray="2 10"
              className="opacity-50"
            />
            {/* Cardinal Coordinate Points */}
            <circle cx="200" cy="30" r="3" fill="#00f5ff" />
            <circle cx="370" cy="200" r="3" fill="#3b82f6" />
            <circle cx="200" cy="370" r="3" fill="#00f5ff" />
            <circle cx="30" cy="200" r="3" fill="#3b82f6" />
          </svg>
        </motion.div>
      </div>

      {/* Isometric 3D Wireframe Cube (Top-Right Angle) */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 3, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-8 sm:right-24 md:right-40 w-32 h-32 pointer-events-none opacity-25"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Isometric Cube Edges */}
          <polygon
            points="50,15 85,35 85,75 50,95 15,75 15,35"
            fill="none"
            stroke="#00f5ff"
            strokeWidth="1.2"
            strokeDasharray="4 3"
          />
          {/* Inner 3D Spoke Lines */}
          <line x1="50" y1="55" x2="50" y2="15" stroke="#3b82f6" strokeWidth="1" />
          <line x1="50" y1="55" x2="85" y2="75" stroke="#00f5ff" strokeWidth="1" />
          <line x1="50" y1="55" x2="15" y2="75" stroke="#3b82f6" strokeWidth="1" />
          {/* Glowing Vertices */}
          <circle cx="50" cy="15" r="2.5" fill="#00f5ff" />
          <circle cx="85" cy="35" r="2" fill="#3b82f6" />
          <circle cx="85" cy="75" r="2" fill="#00f5ff" />
          <circle cx="50" cy="95" r="2.5" fill="#3b82f6" />
          <circle cx="15" cy="75" r="2" fill="#00f5ff" />
          <circle cx="15" cy="35" r="2" fill="#3b82f6" />
          <circle cx="50" cy="55" r="3" fill="#00f5ff" />
        </svg>
      </motion.div>

      {/* Floating Network Node Constellation (Mid-Left Angle) */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-44 left-4 sm:left-12 md:left-24 w-44 h-44 pointer-events-none opacity-20"
      >
        <svg viewBox="0 0 140 140" className="w-full h-full">
          {/* Interconnecting Neon Nodes */}
          <line x1="20" y1="40" x2="70" y2="20" stroke="#00f5ff" strokeWidth="1" />
          <line x1="70" y1="20" x2="120" y2="60" stroke="#3b82f6" strokeWidth="1" />
          <line x1="70" y1="20" x2="60" y2="90" stroke="#00f5ff" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="20" y1="40" x2="60" y2="90" stroke="#3b82f6" strokeWidth="1" />
          <line x1="60" y1="90" x2="110" y2="110" stroke="#00f5ff" strokeWidth="1" />
          <line x1="120" y1="60" x2="110" y2="110" stroke="#3b82f6" strokeWidth="1" />

          {/* Node Points */}
          <circle cx="20" cy="40" r="2.5" fill="#00f5ff" />
          <circle cx="70" cy="20" r="3" fill="#3b82f6" />
          <circle cx="120" cy="60" r="2.5" fill="#00f5ff" />
          <circle cx="60" cy="90" r="3" fill="#3b82f6" />
          <circle cx="110" cy="110" r="2" fill="#00f5ff" />
        </svg>
      </motion.div>
    </div>
  );
}
