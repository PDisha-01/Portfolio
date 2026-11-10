import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiEnvelope,
  HiMapPin,
  HiArrowTopRightOnSquare,
  HiPaperAirplane,
  HiCheckCircle,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const contactCards = [
  {
    id: "email",
    icon: HiEnvelope,
    label: "DIRECT EMAIL",
    value: "mallickdisha186@gmail.com",
    href: "mailto:mallickdisha186@gmail.com",
    badge: "Preferred Channel",
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    label: "LINKEDIN NETWORK",
    value: "linkedin.com/in/dishamallick",
    href: "https://www.linkedin.com/in/dishamallick/",
    badge: "Connect & Chat",
  },
  {
    id: "github",
    icon: FaGithub,
    label: "GITHUB REPOSITORY",
    value: "github.com/PDisha-01",
    href: "https://github.com/PDisha-01",
    badge: "Source Code",
  },
  {
    id: "location",
    icon: HiMapPin,
    label: "LOCATION BASE",
    value: "Bokaro / Durgapur, India",
    href: null,
    badge: "Open to Relocate",
  },
];

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="portfolio-section relative py-12 md:py-14 px-4 md:px-8 bg-transparent text-zinc-900 overflow-hidden"
    >
      {/* Subtle Lavender Glow */}
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-300/[0.25] blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Delicate Glowing Bridge Line */}
      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mb-10" />

      <motion.div
        className="relative max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-200 bg-white/90 shadow-sm mb-2.5">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-[11px] uppercase tracking-[2px] font-mono font-semibold text-purple-900">
              CONTACT &amp; COLLABORATION
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-zinc-950 mb-1.5">
            Let's Build Together
          </h2>

          <p className="text-xs md:text-sm text-zinc-600">
            Have a project idea, internship opportunity, or engineering problem to discuss?
            Reach out directly or send a message below.
          </p>
        </div>

        {/* Compact 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: Small Contact Requirement Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const CardWrapper = card.href ? "a" : "div";
                const wrapperProps = card.href
                  ? {
                      href: card.href,
                      target: card.href.startsWith("mailto:") ? "_self" : "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {};

                return (
                  <CardWrapper
                    key={card.id}
                    {...wrapperProps}
                    className="group p-3.5 rounded-xl bg-white/85 border border-purple-100/90 hover:border-purple-300 hover:bg-white transition-all duration-200 flex items-center justify-between gap-3 backdrop-blur-sm shadow-[0_4px_20px_rgba(139,92,246,0.06)]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 group-hover:bg-purple-100/80 flex-shrink-0 transition-colors">
                        <Icon className="text-base" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] font-mono text-zinc-500 font-semibold tracking-wider">
                          {card.label}
                        </span>
                        <span className="block text-xs font-semibold text-zinc-900 truncate group-hover:text-purple-600 transition-colors">
                          {card.value}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 flex-shrink-0">
                      <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                        {card.badge}
                      </span>
                      {card.href && (
                        <HiArrowTopRightOnSquare className="text-zinc-400 group-hover:text-purple-600 text-xs transition-colors" />
                      )}
                    </div>
                  </CardWrapper>
                );
              })}
            </div>

            {/* Quick Status Pill */}
            <div className="p-3 rounded-xl bg-white/90 border border-purple-200 flex items-center gap-2.5 text-xs text-purple-950 font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span>Available for Software Engineering Roles &amp; Technical Internships</span>
            </div>
          </div>

          {/* Right Column: Compact Streamlined Form (7 Cols) */}
          <div className="lg:col-span-7 p-5 md:p-6 rounded-2xl bg-white/90 border border-purple-100/90 backdrop-blur-md shadow-[0_4px_30px_rgba(139,92,246,0.08)] flex flex-col justify-between">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-purple-600 font-semibold">
                  SEND A MESSAGE
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  Quick Dispatch
                </span>
              </div>
              <p className="text-xs text-zinc-500">
                Responses typically dispatched within 24 hours.
              </p>
            </div>

            <form
              action="https://formspree.io/f/meajovzv"
              method="POST"
              className="space-y-3"
              onSubmit={() => setFormSubmitted(true)}
            >
              {/* Row 1: Name and Email side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono text-zinc-600 font-medium mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-purple-50/40 border border-purple-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-1 focus:ring-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-600 font-medium mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. john@company.com"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-purple-50/40 border border-purple-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-1 focus:ring-purple-400 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div>
                <label className="block text-[10px] font-mono text-zinc-600 font-medium mb-1">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Internship / Full-Stack Project / Collaboration"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-purple-50/40 border border-purple-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-1 focus:ring-purple-400 transition-colors"
                />
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-[10px] font-mono text-zinc-600 font-medium mb-1">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  placeholder="Share details about your project or opportunity..."
                  rows={3}
                  required
                  className="w-full px-3 py-2 rounded-lg bg-purple-50/40 border border-purple-200 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-purple-500 focus:bg-white focus:ring-1 focus:ring-purple-400 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-mono text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-purple-500/25 cursor-pointer"
              >
                <span>Send Message</span>
                <HiPaperAirplane className="text-xs" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
