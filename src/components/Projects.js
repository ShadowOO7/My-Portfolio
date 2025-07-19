import React from 'react';
import './Projects.css';

const projectsData = [
      {
        id: 1,
        title: "E-commerce Store Frontend",
        description: "A responsive e-commerce user interface built with React, demonstrating product listings, cart functionality, and user authentication flow.",
        technologies: ["React", "CSS3", "React Router"],
        githubLink: "YOUR_PROJECT_GITHUB_LINK_1",
        liveDemoLink: "YOUR_PROJECT_DEMO_LINK_1"
      },
      {
        id: 2,
        title: "Real-time Chat Application",
        description: "A real-time chat application featuring user authentication, message broadcasting, and private messaging, powered by WebSockets.",
        technologies: ["Node.js", "Express", "Socket.IO", "React"],
        githubLink: "YOUR_PROJECT_GITHUB_LINK_2",
        liveDemoLink: "YOUR_PROJECT_DEMO_LINK_2"
      },
      {
        id: 3,
        title: "Algorithm Visualizer",
        description: "An interactive web tool to visualize common sorting and pathfinding algorithms, helping users understand their step-by-step execution.",
        technologies: ["React", "JavaScript", "SVG"],
        githubLink: "YOUR_PROJECT_GITHUB_LINK_3",
        liveDemoLink: "YOUR_PROJECT_DEMO_LINK_3"
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