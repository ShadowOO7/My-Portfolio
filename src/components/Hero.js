import React from 'react';
import './Hero.css';
import profilePic from '../assets/profile.jpg';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <img src={profilePic} alt="Shekhar Nayak" className="hero-photo" />
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Shekhar Nayak</h1>
        <p className="hero-tagline">AI/ML Researcher | LLMs & Multimodal Systems | GenAI Engineer</p>
        <p className="hero-subtag">Building entity linking, RAG & multimodal AI systems — M.Tech, IIIT Allahabad</p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="#contact" className="btn secondary-btn">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
