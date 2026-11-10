import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Search,
  Sun,
  Moon,
  Clock,
  FileText,
  ExternalLink,
  Sparkles
} from "lucide-react";
import resume from "../assets/disha resume.pdf";

function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Search
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Theme
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  // Live time (IST)
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })
  );

  const navItems = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Experience", link: "experience" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Credentials", link: "credentials" },
    { name: "Contact", link: "contact" }
  ];

  /* Detect Scroll for Glassmorphism */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.getElementById(item.link))
        .filter(Boolean);

      sections.forEach((section) => {
        const top = section.offsetTop - 180;
        if (window.scrollY >= top) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Live Clock */
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  /* Theme Sync */
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const filteredItems = navItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (item) => {
    const section = document.getElementById(item.link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(item.link);
      setSearch("");
      setSearchOpen(false);
      setOpen(false);
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "dark:bg-[#050816]/90 bg-white/90 backdrop-blur-2xl border-b dark:border-cyan-400/20 border-slate-200 shadow-md py-3"
            : "bg-transparent backdrop-blur-md border-b dark:border-white/5 border-slate-200/50 py-4"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* LOGO & STATUS */}
        <div className="flex items-center gap-4">
          <a
            href="#home"
            className="flex items-center gap-2 group font-mono"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-rose-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-[0_0_20px_rgba(34,211,238,0.35)]">
              <div className="w-full h-full dark:bg-[#050816] bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-base bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
                  DM
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm tracking-wide dark:text-white text-slate-900 group-hover:text-cyan-500 transition">
                Disha Mallick
              </span>
              <span className="text-[10px] tracking-widest text-cyan-500 font-mono">
                ENGINEERING • CS '26
              </span>
            </div>
          </a>

          {/* ONLINE STATUS BADGE */}
          <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-[11px] font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>Open to Roles</span>
          </div>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full dark:bg-white/[0.04] bg-slate-900/[0.04] dark:border-white/10 border-slate-300/60 backdrop-blur-xl shadow-inner">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.link}`}
              className={`
                relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300
                ${
                  active === item.link
                    ? "text-cyan-600 dark:text-cyan-300 bg-cyan-400/15 shadow-[0_0_15px_rgba(34,211,238,0.25)] font-semibold"
                    : "dark:text-gray-300 text-slate-700 hover:text-cyan-500 dark:hover:text-white dark:hover:bg-white/5 hover:bg-slate-200/50"
                }
              `}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* RIGHT ACTION TOOLS */}
        <div className="hidden md:flex items-center gap-3">

          {/* QUICK RESUME BUTTON */}
          <a
            href={resume}
            download="Disha_Mallick_Resume.pdf"
            className="
              inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold
              bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500
              text-[#04111c] shadow-[0_0_20px_rgba(34,211,238,0.35)]
              transition-all duration-300 hover:scale-105 active:scale-95
            "
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>

          {/* SEARCH */}
          <div className="relative">
            {searchOpen && (
              <div className="absolute right-0 top-12 w-64 z-50">
                <input
                  autoFocus
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search portfolio..."
                  className="
                    w-full px-4 py-2.5 rounded-xl bg-[#0b1220]
                    border border-cyan-400/40 text-white placeholder-gray-500
                    outline-none focus:border-cyan-400 shadow-2xl text-xs font-sans
                  "
                />
                {search && (
                  <div className="mt-2 rounded-xl overflow-hidden bg-[#0b1220] border border-cyan-400/20 shadow-2xl">
                    {filteredItems.length > 0 ? (
                      filteredItems.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleSearch(item)}
                          className="w-full text-left px-4 py-2.5 text-xs text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition"
                        >
                          {item.name}
                        </button>
                      ))
                    ) : (
                      <p className="px-4 py-2.5 text-gray-500 text-xs">No section found</p>
                    )}
                  </div>
                )}
              </div>
            )}

            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                setSearch("");
              }}
              className="p-2 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition border border-transparent hover:border-cyan-400/20"
              aria-label="Search"
            >
              <Search size={17} />
            </button>
          </div>

          {/* THEME TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition border border-transparent hover:border-cyan-400/20"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* LIVE CLOCK */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-xs font-mono">
            <Clock size={13} />
            <span>{time}</span>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={resume}
            download="Disha_Mallick_Resume.pdf"
            className="p-2 rounded-xl text-cyan-400 border border-cyan-400/20 bg-cyan-400/5"
            aria-label="Download Resume"
          >
            <FileText size={18} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="text-cyan-400 p-2 rounded-xl border border-cyan-400/20"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t dark:border-cyan-400/10 border-slate-200 dark:bg-[#050816]/95 bg-white/95 backdrop-blur-2xl px-6 py-6 animate-fadeIn">
          {/* Mobile Search */}
          <div className="relative mb-4">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search sections..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl dark:bg-[#0b1220] bg-slate-100 border dark:border-cyan-400/20 border-slate-300 dark:text-white text-slate-900 text-xs placeholder-gray-500 outline-none focus:border-cyan-400"
            />
          </div>

          {/* Mobile Navigation */}
          <div className="flex flex-col gap-1">
            {filteredItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.link}`}
                onClick={() => {
                  setActive(item.link);
                  setOpen(false);
                  setSearch("");
                }}
                className={`
                  block px-4 py-2.5 rounded-xl text-sm font-medium tracking-wide transition-all
                  ${
                    active === item.link
                      ? "text-cyan-600 dark:text-cyan-400 dark:bg-cyan-400/10 bg-cyan-500/10 font-bold"
                      : "dark:text-gray-300 text-slate-700 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5"
                  }
                `}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Tools Footer */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t dark:border-cyan-400/10 border-slate-200 text-xs">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 dark:text-gray-300 text-slate-700 hover:text-cyan-500"
            >
              {darkMode ? <><Sun size={15} /> Light Mode</> : <><Moon size={15} /> Dark Mode</>}
            </button>
            <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-mono">
              <Clock size={13} />
              <span>{time}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
