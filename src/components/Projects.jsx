import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';
import diagImage from '../assets/ecommerce.png'; 
import mernImage from '../assets/mern.jpg'; 
import storeImage from '../assets/store.jpeg'; 
import learningImage from '../assets/learning-m.png';
import javaOOPImage from '../assets/JavaOOP.jpg'; 
import threeTierImage from '../assets/ThreeRestaurant.jpg'; 

const Projects = () => {
  const [showDetails, setShowDetails] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Barber Shop",
      image: diagImage,
      description: "A brief description of the Barber Shop project",
      tech: "React, TailwindCss, NodeJs, MySQL",
      github: "https://github.com/andu-ela/AlphaCutz-barberPage"
    },
    {
      id: 2,
      title: "To Do List",
      image: mernImage,
      description: "A powerful To Do List application built with MongoDB, ExpressJS, ReactJS, and NodeJS.",
      tech: "MongoDB, ExpressJS, ReactJS, and NodeJS.",
      github: "https://github.com/andu-ela/MernCrud"
    },
    {
      id: 3,
      title: "Vehicle Shop",
      image: storeImage,
      description: "Backend development using Java for a vehicle shop application.",
      tech: "Java",
      github: "https://github.com/andu-ela/vehicle-shop/tree/main/final-exam-console-jcoaching-template"
    },
    {
      id: 4,
      title: "Learning Management System",
      image: learningImage,
      description: "LMS developed in a group with multiple services.",
      tech: "ReactJs, NodeJs, MySQL, TailwindCSS, JavaScript, Express",
      github: "https://github.com/joraaveseli/learning-management-system"
    },
    {
      id: 5,
      title: "Restaurant App",
      image: javaOOPImage,
      description: "A restaurant management application developed using Java OOP.",
      tech: "Java OOP",
      github: "https://github.com/andu-ela/Restaurant-Management-System"
    },
    {
      id: 6,
      title: "Three-Tier Restaurant Operations",
      image: threeTierImage,
      description: "An application designed for managing restaurant operations in a three-tier architecture.",
      tech: "Java OOP (View)",
      github: "https://github.com/andu-ela/Restaurant-Point-of-Sale-App"
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Crafted with Code</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div 
            key={project.id} 
            className="project-card"
            onMouseEnter={() => setShowDetails(project.id)}
            onMouseLeave={() => setShowDetails(null)}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className={`project-image ${showDetails === project.id ? 'blurred' : ''}`} 
            />
            {showDetails === project.id && (
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <span>{project.tech}</span>
                </div>
                <hr className="divider" />
                <div className="github-link">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="view-more-button-container">
  <button
    className="view-more-button"
    onClick={() => window.open("https://github.com/andu-ela", "_blank")} 
  >
    View More
  </button>
</div>


    </section>
  );
};

export default Projects;
