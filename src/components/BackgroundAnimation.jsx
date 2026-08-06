import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function BackgroundAnimation() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#020617",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 70,
          },

          color: {
            value: ["#3b82f6", "#8b5cf6"],
          },

          links: {
            enable: true,
            color: "#3b82f6",
            distance: 150,
            opacity: 0.4,
          },

          move: {
            enable: true,
            speed: 1,
          },

          size: {
            value: 3,
          },

          opacity: {
            value: 0.5,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 180,
            },
          },
        },
      }}
    />
  );
}

export default BackgroundAnimation;