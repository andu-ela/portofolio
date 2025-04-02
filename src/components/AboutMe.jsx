import React, { useEffect, useRef, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import robotImage from "../assets/me.png";
import { Typewriter } from "react-simple-typewriter";

const particlesConfig = {
  autoPlay: true,
  background: { color: { value: "#0a0a0b" } },
  fullScreen: { enable: false },
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#cd21d8" },
    links: { enable: true, opacity: 0.4 },
    move: { enable: true, speed: 2 },
    number: { density: { enable: true }, value: 80 },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: { enable: true, speed: 3 },
    },
    shape: { type: "circle" },
    size: {
      value: { min: 0.1, max: 5 },
      animation: { enable: true, speed: 20 },
    },
    twinkle: {
      lines: { enable: true, frequency: 0.005, color: { value: "#470b73" } },
      particles: { enable: true, frequency: 0.05, color: { value: "#ffff00" } },
    },
  },
};

const AboutMe = () => {
  const containerRef = useRef(null);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (containerTop < windowHeight - 100) {
        setAnimateIn(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      style={{
        minHeight: "100vh",
        position: "relative",
        color: "#e5e5e5",
        fontFamily: "Fira Code, monospace",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1rem",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          width: "100%",
          zIndex: 1,
        }}
      >
        <div
          style={{
            flex: "1 1 500px",
            paddingRight: "2rem",
            marginBottom: "2rem",
          }}
        >
          <h2
            className="about-title"
            style={{
              fontSize: "2rem",
              marginBottom: "1.5rem",
              color: "#c084fc",
            }}
          >
            <Typewriter
              words={["About Me"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="about-text" style={{ lineHeight: 1.8 }}>
            <Typewriter
              words={[
                "I'm Anduela Nurshaba, a passionate Full Stack Web Developer who thrives at the intersection of creativity and technology.",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={30}
            />
          </p>
          <p
            className="about-text"
            style={{ lineHeight: 1.8, marginTop: "1rem" }}
          >
            <Typewriter
              words={[
                "Whether it's building secure, scalable backend systems or designing fluid, user-centric interfaces, I turn complex ideas into clean, elegant digital experiences.",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={30}
            />
          </p>
          <p
            className="about-text"
            style={{ lineHeight: 1.8, marginTop: "1rem" }}
          >
            <Typewriter
              words={[
                "Step into a world where design meets functionality. Join me on my journey as I push boundaries and explore new frontiers in web development.",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={30}
            />
          </p>
        </div>

        <div
          style={{
            flex: "1 1 400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            className="image-bg"
            style={{
              position: "absolute",
              marginTop: "5.7rem",
              width: "269px",
              height: "250px",
              background: "#ad5389",
              backgroundImage: "linear-gradient(to right, #3c1053, #ad5389)",
              borderRadius: "90% 30% 90% 22%",
              zIndex: -1,
            }}
          />

          <img
            src={robotImage}
            alt="profile"
            className="profile-img"
            style={{ width: "280px", borderRadius: "50px", zIndex: 1 }}
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          background: "linear-gradient(to right, #3c1053, #ad5389)",
          padding: "1rem 0",
          zIndex: 2,
        }}
      >
     <a
  href="/Anduela_Nurshaba_CV.pdf"  
  target="_blank"
  rel="noopener noreferrer"
  style={{
    backgroundColor: "transparent",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    fontSize: "26px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    textDecoration: "none",
    textAlign: "center",
  }}
>
  View Resume
</a>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-title {
            font-size: 1.9rem !important;
            text-align: center;
          }

          .about-text {
            font-size: 0.9rem !important;
            text-align: center;
            padding: 0 0.5rem;
          }

          .profile-img {
            width: 240px !important;
            margin-top: -2.3rem !important;
          }

          .image-bg {
            width: 200px !important;
            height: 200px !important;
            margin-top: 2rem !important;
          }

          section {
            padding: 2rem 0.5rem !important;
          }

          div[style*='flexWrap: wrap'] {
            justify-content: center !important;
          }

          div[style*='paddingRight: 2rem'] {
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
