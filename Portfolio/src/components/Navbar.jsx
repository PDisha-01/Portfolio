import { useEffect, useState, useRef } from "react";
import {
  Search,
  Clock,
  FileText,
  Menu,
  X,
  Compass,
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import resume from "../assets/disha resume.pdf";

const navLinks = [
  { name: "About", href: "about" },
  { name: "Experiences", href: "experience" },
  { name: "Tech Arsenal", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Credentials", href: "credentials" },
  { name: "Contact", href: "contact" },
];

const searchItems = [
  { name: "Home", type: "Section", link: "home", icon: Compass },
  { name: "About Me", type: "Section", link: "about", icon: Compass },
  { name: "Experiences & Internships", type: "Section", link: "experience", icon: Briefcase },
  { name: "Technical Arsenal", type: "Section", link: "skills", icon: Code2 },
  { name: "Featured Projects", type: "Section", link: "projects", icon: Code2 },
  { name: "FASHNOVA (AI Fashion)", type: "Project", link: "projects", icon: Sparkles },
  { name: "TrafficOps+ (Vision)", type: "Project", link: "projects", icon: Code2 },
  { name: "SAKHI (Women Empowerment)", type: "Project", link: "projects", icon: Code2 },
  { name: "Python ML Suite", type: "Project", link: "projects", icon: Code2 },
  { name: "Credentials & Achievements", type: "Section", link: "credentials", icon: GraduationCap },
  { name: "Contact & Collaboration", type: "Section", link: "contact", icon: Compass },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchContainerRef = useRef(null);

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

      // Track active section for highlight
      const sections = ["home", "about", "experience", "skills", "projects", "credentials", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
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

  // Close search dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredItems = searchItems.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase())
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
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
              ? "bg-[#09090b]/92 backdrop-blur-2xl border-b border-white/10 shadow-lg py-2.5"
              : "bg-[#09090b]/75 backdrop-blur-md border-b border-white/5 py-3.5"
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 sm:px-6">
          {/* LEFT: BRAND MONOGRAM & NAME */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2 group font-mono text-left cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 via-zinc-400 to-zinc-700 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                <div className="w-full h-full bg-[#121215] rounded-[10px] flex items-center justify-center">
                  <span className="font-bold text-xs bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                    DM
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                  DISHA MALLICK
                </span>
                <span className="text-[10px] tracking-wider text-zinc-400 font-mono hidden sm:inline-block">
                  FULL-STACK &amp; CSE '26
                </span>
              </div>
            </button>
          </div>

          {/* CENTER: DIRECT NAVIGATION BAR (ABOUT, EXPERIENCES, PROJECTS, TECH ARSENAL, CREDENTIALS, CONTACT) */}
          <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className={`
                    px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer
                    ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-300 font-semibold shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                    }
                  `}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* RIGHT: SEARCH BUTTON, TIME & RESUME */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Search Toggle Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
              title="Search sections and projects"
              aria-label="Search portfolio"
            >
              <Search size={14} />
            </button>

            {/* Time Widget */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-300 font-mono text-[11px]">
              <Clock size={11} className="text-zinc-400" />
              <span>{time} IST</span>
            </div>

            {/* Resume Button */}
            <a
              href={resume}
              download="Disha_Mallick_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold font-mono bg-white text-zinc-950 hover:bg-zinc-200 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <FileText size={12} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* SEARCH OVERLAY / PALETTE */}
        {searchOpen && (
          <div
            ref={searchContainerRef}
            className="max-w-md mx-auto px-4 mt-2 transition-all duration-200"
          >
            <div className="relative flex items-center">
              <Search
                size={14}
                className="absolute left-3.5 text-zinc-400 pointer-events-none"
              />
              <input
                type="text"
                value={search}
                autoFocus
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type to search About, Experiences, Projects, Skills..."
                className="w-full pl-9 pr-9 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-xs font-mono outline-none shadow-xl"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 text-zinc-400 hover:text-white text-xs cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Results Dropdown */}
            <div className="mt-1.5 max-h-60 overflow-y-auto rounded-xl bg-[#121215] border border-zinc-800 shadow-2xl p-1.5">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={`${item.name}-${idx}`}
                      type="button"
                      onClick={() => scrollTo(item.link)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs font-mono text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon size={13} className="text-cyan-400" />
                        <span>{item.name}</span>
                      </div>
                      <span className="text-[10px] text-zinc-500 font-sans px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                        {item.type}
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="px-3 py-3 text-center text-xs text-zinc-500 font-mono">
                  No matches found for "{search}"
                </div>
              )}
            </div>
          </div>
        )}

        {/* MOBILE MENU DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-4 mt-2 border-t border-zinc-800/80 bg-[#09090b]/98 backdrop-blur-2xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-mono font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-zinc-600 font-mono text-[10px]">→</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
