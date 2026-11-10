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
      className="portfolio-section relative py-16 px-4 md:px-8 bg-[#09090b] text-[#f4f4f5] overflow-hidden"
    >
      {/* Subtle Glow (No Grid Lines) */}
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-500/[0.025] blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header (Tasteful & Balanced) */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 shadow-sm mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] uppercase tracking-[2px] font-mono font-semibold text-zinc-300">
              CONTACT &amp; COLLABORATION
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Let's Build Together
          </h2>

          <p className="text-xs md:text-sm text-zinc-400">
            Have a project idea, internship opportunity, or engineering problem to discuss?
            Reach out directly or send a message below.
          </p>
        </div>

        {/* Compact 2-Column Layout (Less Scrollable with Small Requirement Cards) */}
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
                    className="group p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800/80 hover:border-cyan-500/50 hover:bg-zinc-900/95 transition-all duration-200 flex items-center justify-between gap-3 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 flex-shrink-0 transition-colors">
                        <Icon className="text-base" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] font-mono text-zinc-400 font-semibold tracking-wider">
                          {card.label}
                        </span>
                        <span className="block text-xs font-semibold text-white truncate group-hover:text-cyan-300 transition-colors">
                          {card.value}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 flex-shrink-0">
                      <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                        {card.badge}
                      </span>
                      {card.href && (
                        <HiArrowTopRightOnSquare className="text-zinc-500 group-hover:text-cyan-400 text-xs transition-colors" />
                      )}
                    </div>
                  </CardWrapper>
                );
              })}
            </div>

            {/* Quick Status Pill */}
            <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/70 flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span>Available for Software Engineering Roles &amp; Technical Internships</span>
            </div>
          </div>

          {/* Right Column: Compact Streamlined Form (7 Cols) */}
          <div className="lg:col-span-7 p-5 md:p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md shadow-xl flex flex-col justify-between">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                  SEND A MESSAGE
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  Quick Dispatch
                </span>
              </div>
              <p className="text-xs text-zinc-400">
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
                  <label className="block text-[10px] font-mono text-zinc-400 mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/70 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. john@company.com"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950/70 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div>
                <label className="block text-[10px] font-mono text-zinc-400 mb-1">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Internship / Full-Stack Project / Collaboration"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950/70 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-[10px] font-mono text-zinc-400 mb-1">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  placeholder="Share details about your project or opportunity..."
                  rows={3}
                  required
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950/70 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-mono text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-cyan-500/10 cursor-pointer"
              >
                <span>Send Message</span>
                <HiPaperAirplane className="text-xs" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
