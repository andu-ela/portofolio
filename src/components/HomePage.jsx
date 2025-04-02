import React, { useEffect, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Sparkles, Html } from "@react-three/drei";
import { TextureLoader } from "three";
import vsCodeImg from "../assets/image.png";
import "./HomePage.css";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

const UniverseBackground = () => {
  const [fastStars, setFastStars] = useState([]);

  useEffect(() => {
    const count = 20;
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        id: i,
        x: (Math.random() - 0.3) * 40,
        y: (Math.random() - 0.3) * 40,
        z: -Math.random() * 50,
        speed: 0.2 + Math.random() * 0.5,
      });
    }
    setFastStars(stars);
  }, []);

  useFrame(() => {
    setFastStars((prev) =>
      prev.map((star) => {
        let newZ = star.z + star.speed;
        if (newZ > 10) newZ = -50;
        return { ...star, z: newZ };
      })
    );
  });

  return (
    <>
      <Stars radius={200} depth={60} count={5000} factor={4} fade speed={1} />
      <Sparkles
        count={100}
        speed={0.3}
        size={2}
        color={"#c084fc"}
        opacity={0.8}
        scale={[10, 10, 10]}
      />
      {fastStars.map((star) => (
        <mesh key={star.id} position={[star.x, star.y, star.z]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#c084fc" emissive="#c084fc" />
        </mesh>
      ))}
    </>
  );
};

const ScrollAnimatedWords = ({ onUnlockScroll, onExploreClick }) => {
  const [showSecond, setShowSecond] = useState(false);
  const isDesktop = window.innerWidth >= 768;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecond(true);
      if (onUnlockScroll) onUnlockScroll();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onUnlockScroll]);

  return (
    <group position={[0, isDesktop ? -2.4 : 0.03, -0.2]}>
      <Html center>
        {!showSecond ? (
          <div className="split-text-container">
            <span className="text-part left">Welcome&nbsp;to&nbsp;my</span>
            <span className="text-part right">universe</span>
          </div>
        ) : (
          <div
            className="scroll-animated-text"
            style={{
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span className="more-about-text">more about me?</span>
            <button
              className="button-72"
              role="button"
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
                if (onExploreClick) onExploreClick(); // 👈 Trigger the animation
              }}
            >
              Explore
            </button>
          </div>
        )}
      </Html>
    </group>
  );
};

const SmallMonitor = ({ position }) => {
  const texture = useLoader(TextureLoader, vsCodeImg);

  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[2.5, 1.3, 0.1]} />
        <meshStandardMaterial color="#4b5563" emissive="#0f172a" />
      </mesh>
      <mesh position={[0, 0, 0.055]}>
        <planeGeometry args={[2.4, 1.1]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  );
};

const ComputerSetup = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <group
      position={isMobile ? [0, -0.09, 0] : [0, -2.1, 0]}
      scale={isMobile ? 1 : 2.2}
    >
      <mesh position={[0, 2, -1.2]}>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="#0f0f0f" />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[6.9, 0.2, 1.5]} />
        <meshStandardMaterial color="#2d2d2d" />
      </mesh>

      {isMobile ? (
        <>
          <SmallMonitor position={[0, 2, -0.4]} />
          <SmallMonitor position={[-2.4, 1.7, -0.6]} />
          <SmallMonitor position={[2.4, 1.7, -0.6]} />
          <SmallMonitor position={[0, -2, -0.4]} />
          <SmallMonitor position={[-2.4, -1.7, -0.6]} />
          <SmallMonitor position={[2.4, -1.7, -0.6]} />
        </>
      ) : (
        <>
          <SmallMonitor position={[0, 1.4, -0.4]} />
          <SmallMonitor position={[-3, 1.3, -0.6]} />
          <SmallMonitor position={[3, 1.3, -0.6]} />
        </>
      )}
    </group>
  );
};

const HomePage = ({ onUnlockScroll, onExploreClick }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "black",
        position: "relative",
      }}
    >
      <Canvas
        camera={{ position: [0, 1.5, 9], fov: 50, near: 0.1, far: 100 }}
        shadows
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1.2}
          color="#c084fc"
        />
        <UniverseBackground />
        <ComputerSetup />
        <ScrollAnimatedWords
          onUnlockScroll={onUnlockScroll}
          onExploreClick={onExploreClick}
        />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default HomePage;
