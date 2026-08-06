import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";


function Navbar() {

  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);


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
      name: "Certifications",
      link: "Certifications"
    },
    {
      name: "Contact",
      link: "contact"
    }
  ];


  useEffect(() => {

    const handleScroll = () => {

      const sections = navItems.map((item) =>
        document.getElementById(item.link)
      );


      sections.forEach((section) => {

        if(section){

          const top = section.offsetTop - 150;


          if(window.scrollY >= top){

            setActive(section.id);

          }

        }

      });

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  }, []);



  return (

    <nav
    className="
    fixed
    top-0
    left-0
    w-full
    z-50
    bg-[#050816]/60
    backdrop-blur-xl
    border-b
    border-cyan-400/20
    shadow-[0_0_30px_rgba(34,211,238,0.15)]
    "
    >


      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">


        {/* Logo */}

        <h1
        className="
        text-2xl
        font-bold
        text-cyan-400
        tracking-wider
        drop-shadow-[0_0_10px_#22d3ee]
        "
        >
          ZENITH
        </h1>



        {/* Menu */}

        <div className="hidden md:flex gap-8">


          {
            navItems.map((item)=>(


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


                <span
                className="
                absolute
                left-0
                -bottom-2
                w-0
                h-[2px]
                bg-cyan-400
                transition-all
                duration-300
                group-hover:w-full
                "
                >
                </span>


              </a>


            ))
          }


        </div>

<button
onClick={() => setOpen(!open)}
className="md:hidden text-cyan-400"
>

{
open 
? <X size={30}/>
: <Menu size={30}/>
}

</button>
      </div>

{
open && (

<div
className="
md:hidden
bg-[#050816]/95
backdrop-blur-xl
border-t
border-cyan-400/20
px-6
py-6
"
>

{
navItems.map((item)=>(

<a
key={item.name}
href={`#${item.link}`}
onClick={() => setOpen(false)}

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

))

}

</div>

)
}
    </nav>

  );

}


export default Navbar;