import { useEffect, useState, useRef } from "react";
import {
  Search,
  Clock,
  FileText,
  MapPin,
  Compass,
  Code2,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight
} from "lucide-react";
import resume from "../assets/disha resume.pdf";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchContainerRef = useRef(null);

  // Live time (IST)
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Close search dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search items database
  const searchItems = [
    { name: "Home", type: "Section", link: "home", icon: Compass },
    { name: "About Me", type: "Section", link: "about", icon: Compass },
    { name: "Experiences & Internships", type: "Section", link: "experience", icon: Briefcase },
    { name: "Technical Arsenal", type: "Section", link: "skills", icon: Code2 },
    { name: "Featured Projects", type: "Section", link: "projects", icon: Code2 },
    { name: "Credentials & Achievements", type: "Section", link: "credentials", icon: GraduationCap },
    { name: "Contact & Collaboration", type: "Section", link: "contact", icon: Compass },
  ];

  const filteredItems = searchItems.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (link) => {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDropdownOpen(false);
      setSearch("");
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#09090b]/92 backdrop-blur-2xl border-b border-white/10 shadow-lg py-2.5"
            : "bg-transparent backdrop-blur-md border-b border-white/5 py-3.5"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-5">

        {/* LEFT: BRAND & LOCATION */}
        <div className="flex items-center gap-3.5 flex-shrink-0">
          <a href="#home" className="flex items-center gap-2 group font-mono">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-zinc-200 via-zinc-400 to-zinc-700 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.12)]">
              <div className="w-full h-full bg-[#121215] rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-sm bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                  DM
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-xs tracking-wider text-white group-hover:text-zinc-300 transition">
                DISHA MALLICK
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 font-mono">
                ENGINEERING '27
              </span>
            </div>
          </a>

          {/* LOCATION */}
          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-[11px] font-mono">
            <MapPin size={11} className="text-zinc-400" />
            <span>West Bengal, India</span>
          </div>
        </div>

        {/* CENTER: SEARCH BAR (WHERE ALL CONTENT IS ACCESSIBLE) */}
        <div
          ref={searchContainerRef}
          className="relative flex-1 max-w-md mx-auto"
        >
          <div className="relative flex items-center">
            <Search
              size={14}
              className="absolute left-3.5 text-zinc-400 pointer-events-none"
            />
            <input
              type="text"
              value={search}
              onFocus={() => setDropdownOpen(true)}
              onChange={(e) => {
                setSearch(e.target.value);
                setDropdownOpen(true);
              }}
              placeholder="Search all contents, sections & projects..."
              className="
                w-full pl-9 pr-9 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800
                text-white placeholder-zinc-500 text-xs font-mono
                outline-none focus:border-zinc-500 focus:bg-zinc-900 shadow-inner
                transition-all
              "
            />
            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setDropdownOpen(false);
                }}
                className="absolute right-3 text-zinc-400 hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Search Dropdown / Content Palette */}
          {dropdownOpen && (
            <div className="absolute left-0 right-0 top-12 max-h-72 overflow-y-auto rounded-xl bg-[#121215] border border-zinc-800 shadow-2xl z-50 p-2 scrollbar-thin scrollbar-thumb-zinc-700">
              <div className="px-2 py-1 text-[10px] uppercase font-mono tracking-wider text-zinc-500">
                Directory &amp; Navigation ({filteredItems.length})
              </div>
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={`${item.name}-${idx}`}
                      type="button"
                      onClick={() => handleSelect(item.link)}
                      className="
                        w-full flex items-center justify-between px-3 py-2 rounded-lg
                        text-left text-xs font-mono text-zinc-300 hover:text-white
                        hover:bg-zinc-800/80 transition-colors cursor-pointer group
                      "
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon size={13} className="text-zinc-400 group-hover:text-white" />
                        <span>{item.name}</span>
                      </div>
                      <span className="text-[10px] text-zinc-500 font-sans px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                        {item.type}
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="px-3 py-4 text-center text-xs text-zinc-500 font-mono">
                  No matches found for "{search}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* RIGHT: TIME & RESUME */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* TIME WIDGET */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 font-mono text-[11px]">
            <Clock size={11} className="text-zinc-400" />
            <span>{time} IST</span>
          </div>

          {/* RESUME BUTTON */}
          <a
            href={resume}
            download="Disha_Mallick_Resume.pdf"
            className="
              inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono
              bg-white text-zinc-950 hover:bg-zinc-200 shadow-sm
              transition-all duration-200 hover:scale-105 active:scale-95
            "
          >
            <FileText size={12} />
            <span>Resume</span>
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
