import React, { useState, useEffect } from 'react';
import { FaUser, FaProjectDiagram, FaEnvelope, FaLaptopCode } from 'react-icons/fa';

const Header = () => {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const about = document.querySelector('#about').offsetTop;
      const skills = document.querySelector('#skills').offsetTop;
      const projects = document.querySelector('#projects').offsetTop;
      const contact = document.querySelector('#contact').offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (scrollPosition >= contact) setActive('contact');
      else if (scrollPosition >= projects) setActive('projects');
      else if (scrollPosition >= skills) setActive('skills');
      else setActive('about');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'about', icon: <FaUser />, href: '#about', label: 'About' },
    { id: 'skills', icon: <FaLaptopCode />, href: '#skills', label: 'Skills' },
    { id: 'projects', icon: <FaProjectDiagram />, href: '#projects', label: 'Projects' },
    { id: 'contact', icon: <FaEnvelope />, href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="bottom-nav">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`nav-icon ${active === item.id ? 'active' : ''}`}
            onClick={() => setActive(item.id)}
          >
            <span className="nav-label">{item.label}</span>
            <div className="icon-container">{item.icon}</div>
          </a>
        ))}
        <div className={`indicator ${active}`}></div>
      </nav>

      <header className="desktop-header">
        <div className="logo">&lt;Anduela /&gt;</div>
        <nav className="desktop-nav">
          {menuItems.map((item) => (
            <a key={item.id} href={item.href} className={active === item.id ? 'active' : ''}>{item.label}</a>
          ))}
        </nav>
      </header>

      <style>{`
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
          max-width: 400px;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 0 0 60px 60px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          padding: 10px 10px;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }

        .nav-icon {
          color: #888;
          font-size: 1.3rem;
          transition: color 0.3s ease;
          position: relative;
          z-index: 2;
          text-decoration: none !important;
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
        }

        .nav-label {
          font-size: 0.7rem;
          margin-bottom: 2px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-icon.active {
          color: #7c3aed;
        }

        .nav-icon.active .nav-label {
          opacity: 1;
          color: white;
          font-size: 13px;
          transform: translateY(-26px);
          padding: 2px 6px;
          border-radius: 12px;
        }

        .icon-container {
          transition: transform 0.3s ease;
        }

        .nav-icon.active .icon-container {
          transform: translateY(40px);
        }

        .indicator {
          position: relative;
          bottom: -20px;
          width: 50px;
          height: 50px;
          background-color: #fff;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
          transition: left 0.3s ease;
          z-index: 1;
          transform: translateX(-50%);
        }

        .indicator.about { left: 15%; }
        .indicator.skills { left: 37%; }
        .indicator.projects { left: 60%; }
        .indicator.contact { left: 84%; }

        .desktop-header {
          display: none;
        }

        @media (min-width: 769px) {
          .bottom-nav {
            display: none;
          }

          .desktop-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 50px;
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.6);
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            z-index: 1000;
            backdrop-filter: blur(10px);
          }

          .desktop-nav a {
            margin-left: 25px;
            text-decoration: none;
            color: #555;
            font-size: 1rem;
            transition: color 0.3s ease;
          }

          .desktop-nav a.active, .desktop-nav a:hover {
            color: #7c3aed;
          }

          .logo {
            font-family: 'Fira Code', monospace;
            color: #7c3aed;
            font-size: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .bottom-nav {
            display: none;
          }

          .desktop-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.6);
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            z-index: 1000;
            backdrop-filter: blur(10px);
          }

          .desktop-nav a {
            margin-left: 15px;
            text-decoration: none;
            color: #555;
            font-size: 0.9rem;
            transition: color 0.3s ease;
          }

          .desktop-nav a.active, .desktop-nav a:hover {
            color: #7c3aed;
          }

          .logo {
            font-family: 'Fira Code', monospace;
            font-size: 1.2rem;
            color: #7c3aed;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
