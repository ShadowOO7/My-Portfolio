import React from 'react';
import './Hero.css';

    function Hero() {
      return (
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Shekhar Nayak</h1>
            <p className="hero-tagline">A passionate Coder | Web Developer | Problem Solver</p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary-btn">View My Work</a>
              <a href="#contact" className="btn secondary-btn">Get In Touch</a>
            </div>
          </div>
        </section>
      );
    }

    export default Hero;