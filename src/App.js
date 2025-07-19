import React from 'react';
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CodingProfiles from './components/CodingProfiles';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-wrapper">
      <ParticlesBackground />
      <div className="content-container">
        <Header />
        <main>
          <Hero />
          <About /> {/* Note: Sections now have their IDs within their own components */}
          <CodingProfiles />
          <Projects />
          <Resume />
          <Contact />
        </main>
        {/* You can add a Footer component here if desired */}
      </div>
    </div>
  );
}

export default App;