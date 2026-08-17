import { useEffect, useState } from "react";

function IntroScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 1;
      });
    }, 50);


    const timer = setTimeout(() => {
      onFinish();
    }, 6000);


    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };

  }, [onFinish]);


  return (
    <div className="
      fixed inset-0
      z-[9999]
      bg-[#050816]
      flex
      items-center
      justify-center
      overflow-hidden
    ">

      <div className="text-center">


        {/* ZENITH LOGO */}
        <div className="relative">

          {/* Outline Text */}
          <h1
            className="
              text-7xl
              md:text-9xl
              font-black
              tracking-[15px]
              text-transparent
              stroke-text
            "
          >
            WELCOME TO
          </h1>


          {/* Filled Text */}
          <h1
            className="
              absolute
              inset-0
              text-7xl
              md:text-9xl
              font-black
              tracking-[15px]
              overflow-hidden
              text-cyan-400
            "
            style={{
              clipPath: `inset(${100 - progress}% 0 0 0)`
            }}
          >
            WELCOME TO
          </h1>


        </div>

        <h2
  className="
    mt-6
    text-xl
    md:text-3xl
    italic
    font-[Arial]
    tracking-widest
    text-white
    opacity-90
  "
>
  ~ Disha's Portfolio ~
</h2>


        {/* Loading Percentage */}
        <p
          className="
            mt-10
            text-3xl
            font-bold
            text-cyan-400
            tracking-widest
          "
        >
          {progress}%
        </p>



        {/* Loading Bar */}

        <div
          className="
            mt-6
            w-64
            h-1
            bg-gray-700
            rounded-full
            overflow-hidden
            mx-auto
          "
        >

          <div
            className="
              h-full
              bg-cyan-400
              transition-all
              duration-100
            "
            style={{
              width: `${progress}%`
            }}
          >

          </div>

        </div>


      </div>


    </div>
  );
}

export default IntroScreen;