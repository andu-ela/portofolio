import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLaptopCode, FaDatabase, FaCloudUploadAlt, FaTools } from 'react-icons/fa';
import './MyExpertise.css';

const expertise = [
  {
    title: 'Frontend Development',
    icon: <FaLaptopCode size={48} />,
    text: "I build modern, responsive interfaces using React, Tailwind CSS, HTML, CSS, and Bootstrap. My focus is on creating clean, user-friendly designs for all devices.",
    align: 'left',
    animation: 'fade-left',
  },
  {
    title: 'Backend Development',
    icon: <FaDatabase size={48} />,
    text: "Using Node.js, Express.js, and MySQL, I develop secure and scalable backend systems with APIs, user roles, and dynamic data handling.",
    align: 'right',
    animation: 'fade-right',
  },
  {
    title: 'Deployment',
    icon: <FaCloudUploadAlt size={48} />,
    text: "I deploy my applications using Vercel and Render, ensuring fast performance and real-time access through production-ready links.",
    align: 'left',
    animation: 'fade-left',
  },
  {
    title: 'Tools & Workflow',
    icon: <FaTools size={48} />,
    text: "I use Git, GitHub, GitHub Desktop, and Postman to manage code, test APIs, and organize tasks. My workflow is clean and collaborative.",
    align: 'right',
    animation: 'fade-right',
  },
];

const MyExpertise = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
  
    const newProgress = Math.min((currentScroll / totalHeight) * 180, totalHeight); 
  
    setProgress(newProgress);
  
    const progressBar = document.querySelector('.progress-bar');
    if (newProgress > 50) {
      progressBar.classList.add('active');
    } else {
      progressBar.classList.remove('active');
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<section className="my-expertise">
  <h2 className="section-title">From Design to Deployment</h2>

  <div className="progress-bar-container">
    <div className="progress-bar" style={{ height: `${progress}%` }}></div>
  </div>

  <div className="expertise-container">
    {expertise.map((item, index) => (
      <div
        key={index}
        data-aos={item.animation}
        className={`expertise-item ${item.align === 'left' ? 'item-left' : 'item-right'}`}
      >
        <div className="icon-container">
          <div className="icon-background"></div>
          <div className="icon">
            {item.icon}
          </div>
        </div>

        <div className="text-container">
          <h3 className="title">{item.title}</h3>
          <p className="description">{item.text}</p>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default MyExpertise;
