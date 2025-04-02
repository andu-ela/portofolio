import React, { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import MyExpertise from "./components/MyExpertise";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <div
      className="App"
      style={{
        overflowY: scrollEnabled ? "auto" : "hidden",
      }}
    >
      <Header />

      <HomePage onUnlockScroll={() => setScrollEnabled(true)} />
      <AboutMe />
      <MyExpertise />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
