import { motion } from "framer-motion";

export default function ExperienceCard({
  logo,
  company,
  role,
  duration,
  location,
  domain,
  project,
  toolkit,
  goal,
}) {
  return (

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="
  mt-0
  w-[470px]
  rounded-3xl
  border
  border-cyan-500/20
  bg-white/[0.03]
  backdrop-blur-xl
  p-8
  relative
  overflow-hidden
  group
"
      >
      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

      {/* Company Header */}
      <div className="relative z-10 flex items-center gap-5">
        <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center shadow-lg p-2">
          <img
            src={logo}
            alt={company}
            className="w-full h-full object-contain"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">
            {company}
          </h3>

          <p className="text-cyan-400">
            {role}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="relative z-10 mt-8 space-y-5">

        <div>
          <p className="text-xs uppercase tracking-[3px] text-gray-500">
            Duration
          </p>

          <p className="text-gray-300 mb-5">
  {duration}
</p>

<p className="text-xs uppercase tracking-[3px] text-gray-500">
  Location
</p>

          <p className="text-gray-300">
            {location}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[3px] text-gray-500">
            Domain
          </p>

          <p className="text-gray-300">
            {domain}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[3px] text-gray-500">
            Projects / Topics Covered
          </p>

          <p className="text-gray-300">
            {project}
          </p>
        </div>

      </div>

      {/* Toolkit */}
      <div className="relative z-10 mt-8">

        <p className="text-xs uppercase tracking-[3px] text-gray-500 mb-4">
          Engineering Toolkit
        </p>

        <div className="flex flex-wrap gap-3">
          {toolkit.map((tech) => (
            <span
              key={tech}
              className="
                px-4
                py-2
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                text-cyan-300
                text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

      {/* Goal */}
      <div className="relative z-10 mt-8">

        <p className="text-xs uppercase tracking-[3px] text-gray-500">
          Mission Objective
        </p>

        <p className="text-gray-300 mt-2 leading-7">
          {goal}
        </p>

      </div>

          </motion.div>
  );
}