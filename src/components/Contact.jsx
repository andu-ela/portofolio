import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact.css'; // Import the custom styles

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    
    // Add access key
    object.access_key = 'f388efb2-af9d-4b92-863b-36cfe06967f6';
    
    const json = JSON.stringify(object);
  
    // Show loading popup
    Swal.fire({
      title: 'Sending...',
      text: 'Your message is being processed!',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading(); // Show loading spinner
      }
    });
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Your message was sent successfully!',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Message sending failed!',
          icon: 'error',
          timer: 3000,
          showConfirmButton: false
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred! Please try again.',
        icon: 'error',
        timer: 3000,
        showConfirmButton: false
      });
    }
  
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container" id='contact'>
      <div className="contact-content">
        {/* Formulari në anën e djathtë */}
        <div className="contact-form-container">
          <h2 className="title">Contact Me</h2>
          <p className="subtitle">Let's work together!</p>
          <form onSubmit={onSubmit} className="contact-form">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-field"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="submit-btn w-full py-3 mt-4">
              Send Message
            </button>
          </form>
        </div>
        
        {/* Linket sociale në kolonë përballë formularit */}
        <div className="social-links-container">
          <div className="social-links">
            <a href="https://www.facebook.com/anduela.433/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.linkedin.com/in/anduela-nurshaba/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/n.anduela/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
              <FaInstagram size={30} />
            </a>
            <a href="https://github.com/andu-ela" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
              <FaGithub size={30} />
            </a>
            <a href="mailto:anduela_nurshabaa@hotmail.com" className="text-cyan-400 hover:text-cyan-300">
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
