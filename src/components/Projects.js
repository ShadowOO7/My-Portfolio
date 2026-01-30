import React from 'react';
import './Projects.css';

const projectsData = [
      {
        id: 1,
        title: "Unified-MEL",
        description: "A Unified Framework for Multimodal Entity Linking with Large Language Models.",
        technologies: ["Python", "LLMs", "PEFT"],
        githubLink: "https://github.com/ShadowOO7/Unified-MEL",
        // liveDemoLink: "YOUR_PROJECT_DEMO_LINK_1"
      },
      {
        id: 2,
        title: "Real-Time-Trip-Planning-Assistant",
        description: "A collaborative real-time travel planning assistant built with the MERN stack (MongoDB, Express, React, Node.js), featuring group itineraries, live updates, and integrated travel tools.",
        technologies: ["Node.js", "Express", "Socket.IO", "React", "OpenStreetMap"],
        githubLink: "https://github.com/ShadowOO7/Real-Time-Trip-Planning-Assistant",
        // liveDemoLink: "YOUR_PROJECT_DEMO_LINK_2"
      },
      {
        id: 3,
        title: "Personal Finance Assistant",
        description: "This is a comprehensive Personal Finance Assistant application built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to manage their income and expenses, visualize financial data, and even parse PDF receipts",
        technologies: ["React", "JavaScript", "bcryptjs (password hashing)", "Express", "jsonwebtoken (JWT)"],
        githubLink: "https://github.com/ShadowOO7/Personal-Finance-Tracker",
        // liveDemoLink: "YOUR_PROJECT_DEMO_LINK_3"
      },
    ];

    function Projects() {
      return (
        <section id="projects" className="projects-section">
          <div className="section-header">
            <h2>My Projects</h2>
          </div>
          <div className="projects-grid">
            {projectsData.map(project => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-pill">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github-link">GitHub</a>
                  {project.liveDemoLink && (
                    <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="project-link demo-link">Live Demo</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }

    export default Projects;
