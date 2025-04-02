import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiJson,
  SiBootstrap,
} from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Key Skills</h2>
      <div className="skills-container">
        <div className="skills-set">
          <div className="skill-item">
            <FaReact className="skill-icon" />
            <p className="skill-text">React</p>
          </div>
          <div className="skill-item">
            <SiBootstrap className="skill-icon" />
            <p className="skill-text">Bootstrap</p>
          </div>
          <div className="skill-item">
            <FaNodeJs className="skill-icon" />
            <p className="skill-text">Node.js</p>
          </div>
          <div className="skill-item">
            <FaHtml5 className="skill-icon" />
            <p className="skill-text">HTML5</p>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="skill-icon" />
            <p className="skill-text">CSS3</p>
          </div>
          <div className="skill-item">
            <FaJsSquare className="skill-icon" />
            <p className="skill-text">JavaScript</p>
          </div>
          <div className="skill-item">
            <FaJava className="skill-icon" />
            <p className="skill-text">Java</p>
          </div>
          <div className="skill-item">
            <SiTailwindcss className="skill-icon" />
            <p className="skill-text">Tailwind CSS</p>
          </div>
          <div className="skill-item">
            <SiExpress className="skill-icon" />
            <p className="skill-text">Express.js</p>
          </div>
          <div className="skill-item">
            <SiMongodb className="skill-icon" />
            <p className="skill-text">MongoDB</p>
          </div>
          <div className="skill-item">
            <SiMysql className="skill-icon" />
            <p className="skill-text">MySQL</p>
          </div>
          <div className="skill-item">
            <FaGitAlt className="skill-icon" />
            <p className="skill-text">Git</p>
          </div>
          <div className="skill-item">
            <SiJquery className="skill-icon" />
            <p className="skill-text">jQuery</p>
          </div>
          <div className="skill-item">
            <SiJson className="skill-icon" />
            <p className="skill-text">JSON</p>
          </div>
        </div>
        <div className="skills-set">
          <div className="skill-item">
            <FaReact className="skill-icon" />
            <p className="skill-text">React</p>
          </div>
          <div className="skill-item">
            <SiBootstrap className="skill-icon" />
            <p className="skill-text">Bootstrap</p>
          </div>
          <div className="skill-item">
            <FaNodeJs className="skill-icon" />
            <p className="skill-text">Node.js</p>
          </div>
          <div className="skill-item">
            <FaHtml5 className="skill-icon" />
            <p className="skill-text">HTML5</p>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="skill-icon" />
            <p className="skill-text">CSS3</p>
          </div>
          <div className="skill-item">
            <FaJsSquare className="skill-icon" />
            <p className="skill-text">JavaScript</p>
          </div>
          <div className="skill-item">
            <FaJava className="skill-icon" />
            <p className="skill-text">Java</p>
          </div>
          <div className="skill-item">
            <SiTailwindcss className="skill-icon" />
            <p className="skill-text">Tailwind CSS</p>
          </div>
          <div className="skill-item">
            <SiExpress className="skill-icon" />
            <p className="skill-text">Express.js</p>
          </div>
          <div className="skill-item">
            <SiMongodb className="skill-icon" />
            <p className="skill-text">MongoDB</p>
          </div>
          <div className="skill-item">
            <SiMysql className="skill-icon" />
            <p className="skill-text">MySQL</p>
          </div>
          <div className="skill-item">
            <FaGitAlt className="skill-icon" />
            <p className="skill-text">Git</p>
          </div>
          <div className="skill-item">
            <SiJquery className="skill-icon" />
            <p className="skill-text">jQuery</p>
          </div>
          <div className="skill-item">
            <SiJson className="skill-icon" />
            <p className="skill-text">JSON</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
