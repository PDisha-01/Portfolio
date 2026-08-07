import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Search,
  Sun,
  Moon,
  Clock
} from "lucide-react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // Search
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Theme
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  // Live time
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })
  );

  const navItems = [
    {
      name: "Home",
      link: "home"
    },
    {
      name: "About",
      link: "about"
    },
    {
      name: "Projects",
      link: "projects"
    },
    {
      name: "Credentials",
      link: "credentials"
    },
    {
      name: "Contact",
      link: "contact"
    }
  ];

  /* =========================
     ACTIVE SECTION
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.link))
        .filter(Boolean);

      sections.forEach((section) => {
        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================
     LIVE CLOCK
  ========================= */

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

  /* =========================
     THEME
  ========================= */

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  /* =========================
     SEARCH
  ========================= */

  const filteredItems = navItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (item) => {
    const section = document.getElementById(item.link);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });

      setActive(item.link);
      setSearch("");
      setSearchOpen(false);
      setOpen(false);
    }
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-[#050816]/70
        backdrop-blur-xl
        border-b
        border-cyan-400/20
        shadow-[0_0_30px_rgba(34,211,238,0.15)]
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          justify-between
          items-center
          px-6
          py-4
        "
      >

        {/* =========================
            LOGO
        ========================= */}

        <a
          href="#home"
          className="
            text-2xl
            font-bold
            text-cyan-400
            tracking-wider
            drop-shadow-[0_0_10px_#22d3ee]
            shrink-0
          "
        >
          ZENITH
        </a>


        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}

        <div className="hidden lg:flex items-center gap-7">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.link}`}
              className={`
                relative
                transition-all
                duration-300
                group
                ${
                  active === item.link
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }
              `}
            >
              {item.name}

{item.link === "home" && (
  <span className="ml-2 text-[9px] font-bold tracking-wider text-green-400">
    ● ONLINE
  </span>
)}

              <span
                className={`
                  absolute
                  left-0
                  -bottom-2
                  h-[2px]
                  bg-cyan-400
                  transition-all
                  duration-300
                  ${
                    active === item.link
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </a>
          ))}

        </div>


        {/* =========================
            NAVBAR TOOLS
        ========================= */}

        <div className="hidden md:flex items-center gap-3 ml-6">

          {/* SEARCH */}

          <div className="relative">

            {searchOpen && (
              <div className="absolute right-0 top-12 w-64">

                <input
                  autoFocus
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search sections..."
                  className="
                    w-full
                    px-4
                    py-2.5
                    rounded-xl
                    bg-[#0b1220]
                    border
                    border-cyan-400/30
                    text-white
                    placeholder-gray-500
                    outline-none
                    focus:border-cyan-400
                    shadow-lg
                  "
                />

                {search && (
                  <div
                    className="
                      mt-2
                      rounded-xl
                      overflow-hidden
                      bg-[#0b1220]
                      border
                      border-cyan-400/20
                      shadow-xl
                    "
                  >

                    {filteredItems.length > 0 ? (
                      filteredItems.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleSearch(item)}
                          className="
                            w-full
                            text-left
                            px-4
                            py-3
                            text-gray-300
                            hover:text-cyan-400
                            hover:bg-cyan-400/10
                            transition
                          "
                        >
                          {item.name}
                        </button>
                      ))
                    ) : (
                      <p className="px-4 py-3 text-gray-500 text-sm">
                        No section found
                      </p>
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
              className="
                p-2
                rounded-full
                text-gray-300
                hover:text-cyan-400
                hover:bg-cyan-400/10
                transition
              "
              aria-label="Search"
            >
              <Search size={19} />
            </button>

          </div>


          {/* THEME TOGGLE */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              p-2
              rounded-full
              text-gray-300
              hover:text-cyan-400
              hover:bg-cyan-400/10
              transition
            "
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>


          {/* LIVE CLOCK */}

          <div
            className="
              flex
              items-center
              gap-2
              px-3
              py-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/5
              text-cyan-400
              text-sm
              font-mono
              whitespace-nowrap
            "
          >
            <Clock size={16} />

            <span>{time}</span>
          </div>

        </div>


        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}

        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-cyan-400
            p-2
          "
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>


      {/* =========================
          MOBILE MENU
      ========================= */}

      {open && (
        <div
          className="
            md:hidden
            border-t
            border-cyan-400/10
            bg-[#050816]/95
            backdrop-blur-xl
            px-6
            py-5
          "
        >

          {/* Mobile Search */}

          <div className="relative mb-5">

            <Search
              size={18}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-gray-500
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search sections..."
              className="
                w-full
                pl-10
                pr-4
                py-3
                rounded-xl
                bg-[#0b1220]
                border
                border-cyan-400/20
                text-white
                placeholder-gray-500
                outline-none
                focus:border-cyan-400
              "
            />

          </div>


          {/* Mobile Navigation */}

          <div className="flex flex-col gap-2">

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
                  block
                  py-3
                  text-lg
                  transition-all
                  ${
                    active === item.link
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }
                `}
              >
                {item.name}
              </a>
            ))}

          </div>


          {/* Mobile Tools */}

          <div
            className="
              flex
              items-center
              justify-between
              mt-5
              pt-5
              border-t
              border-cyan-400/10
            "
          >

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
                flex
                items-center
                gap-2
                text-gray-300
                hover:text-cyan-400
              "
            >
              {darkMode ? (
                <>
                  <Sun size={18} />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon size={18} />
                  Dark Mode
                </>
              )}
            </button>


            <div
              className="
                flex
                items-center
                gap-2
                text-cyan-400
                font-mono
                text-sm
              "
            >
              <Clock size={16} />
              {time}
            </div>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;