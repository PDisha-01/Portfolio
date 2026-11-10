import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Clock,
  MapPin,
  X,
  Compass,
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const searchItems = [
  { name: "Home", type: "Section", link: "home", icon: Compass, desc: "Overview & landing" },
  { name: "About Me", type: "Section", link: "about", icon: Compass, desc: "Background & story" },
  { name: "Experiences", type: "Section", link: "experience", icon: Briefcase, desc: "Internships & leadership" },
  { name: "Technical Arsenal", type: "Section", link: "skills", icon: Code2, desc: "Languages, tools & frameworks" },
  { name: "Projects", type: "Section", link: "projects", icon: Code2, desc: "Featured software engineering projects" },
  { name: "Credentials & Certifications", type: "Section", link: "credentials", icon: GraduationCap, desc: "Certificates & hackathons" },
  { name: "Contact", type: "Section", link: "contact", icon: Compass, desc: "Collaborate & get in touch" },

  // Projects & Experience highlights
  { name: "FASHNOVA", type: "Project", link: "projects", icon: Sparkles, desc: "AI Fashion Intelligence Platform" },
  { name: "TrafficOps+", type: "Project", link: "projects", icon: Code2, desc: "Smart City Traffic Management System" },
  { name: "SAKHI", type: "Project", link: "projects", icon: Code2, desc: "Women Empowerment Platform" },
  { name: "Python ML Suite", type: "Project", link: "projects", icon: Code2, desc: "Machine Learning Laboratory Suite" },
  { name: "Infosys Springboard", type: "Experience", link: "experience", icon: Briefcase, desc: "AI Agentic Construction Site Risk Analytics" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Live time (IST)
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard shortcut: Cmd/Ctrl + K to toggle, Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredItems = searchItems.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase()) ||
      (item.desc && item.desc.toLowerCase().includes(search.toLowerCase()))
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setSearchOpen(false);
      setSearch("");
    }
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${
            scrolled
              ? "bg-white/85 backdrop-blur-2xl border-b border-purple-100 shadow-[0_4px_20px_rgba(139,92,246,0.06)] py-2.5"
              : "bg-white/70 backdrop-blur-md border-b border-purple-100/60 py-3"
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 sm:px-6">
          {/* NAME INITIAL (DM) */}
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="flex items-center group font-mono cursor-pointer"
            aria-label="Disha Mallick - Go to top"
            title="Disha Mallick"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-500 via-indigo-400 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_14px_rgba(139,92,246,0.25)]">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-xs tracking-wider bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  DM
                </span>
              </div>
            </div>
          </button>

          {/* LOCATION & TIME (CENTER / RESPONSIVE) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Location */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-purple-100 text-zinc-700 font-mono text-xs shadow-sm">
              <MapPin size={12} className="text-purple-600 flex-shrink-0" />
              <span className="hidden sm:inline">West Bengal, India</span>
              <span className="sm:hidden">India</span>
            </div>

            {/* Live Time */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-purple-100 text-zinc-700 font-mono text-xs shadow-sm">
              <Clock size={12} className="text-purple-600 flex-shrink-0" />
              <span>{time} IST</span>
            </div>
          </div>

          {/* SEARCH BUTTON (POPS UP THE SEARCH PALETTE) */}
          <div className="flex items-center flex-shrink-0">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 hover:bg-purple-50/80 border border-purple-100 hover:border-purple-300 text-zinc-600 hover:text-zinc-900 transition-all duration-200 font-mono text-xs cursor-pointer shadow-sm group"
              title="Search sections and projects (⌘K)"
              aria-label="Open search popup"
            >
              <Search size={13} className="text-purple-500 group-hover:text-purple-700 transition-colors" />
              <span className="hidden md:inline text-zinc-600 group-hover:text-zinc-900">Search...</span>
              <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-purple-700 bg-purple-50 border border-purple-200 rounded">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>
      </nav>

      {/* POPUP SEARCH BAR & PALETTE MODAL */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-purple-950/20 backdrop-blur-md"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-white border border-purple-100 shadow-[0_25px_70px_rgba(124,58,237,0.18)] overflow-hidden"
            >
              {/* Search Bar Input */}
              <div className="relative flex items-center px-4 py-3.5 border-b border-purple-100">
                <Search size={16} className="text-purple-600 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  value={search}
                  autoFocus
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type to search About, Experiences, Projects, Skills..."
                  className="w-full bg-transparent text-sm text-zinc-900 placeholder-zinc-400 outline-none font-mono"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="mr-2 text-zinc-400 hover:text-zinc-700 text-xs cursor-pointer px-1"
                  >
                    Clear
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-purple-50 transition-colors cursor-pointer"
                  aria-label="Close search popup"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Search Results List */}
              <div className="max-h-80 overflow-y-auto p-2">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={`${item.name}-${idx}`}
                        type="button"
                        onClick={() => scrollTo(item.link)}
                        className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs font-mono text-zinc-700 hover:text-purple-950 hover:bg-purple-50/80 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-purple-50 border border-purple-100 text-purple-600 group-hover:border-purple-300">
                            <Icon size={14} />
                          </div>
                          <div>
                            <div className="text-zinc-900 font-medium">{item.name}</div>
                            {item.desc && (
                              <div className="text-[11px] text-zinc-500 font-sans">{item.desc}</div>
                            )}
                          </div>
                        </div>
                        <span className="text-[10px] text-purple-700 px-2 py-0.5 rounded bg-purple-50 border border-purple-100">
                          {item.type}
                        </span>
                      </button>
                    );
                  })
                ) : (
                  <div className="py-10 text-center text-xs text-zinc-500 font-mono">
                    No matching sections found for "{search}"
                  </div>
                )}
              </div>

              {/* Footer Guide */}
              <div className="px-4 py-2.5 border-t border-purple-100 bg-purple-50/50 flex items-center justify-between text-[11px] text-purple-900/70 font-mono">
                <span>Click any item to jump directly</span>
                <span>ESC to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
