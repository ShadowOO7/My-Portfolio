import React from 'react';
import './Header.css';
  
  function Header() {
      return (
        <header className="header">
          <nav className="navbar">
            <div className="portfolio-logo">Shekhar's Portfolio</div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#profiles">Profiles</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
      );
    }

    export default Header;