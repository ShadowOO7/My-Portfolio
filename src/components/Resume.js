import React from 'react';
import './Resume.css';

    function Resume() {
      const resumeLink = "https://drive.google.com/file/d/1ijW2ETOPz-dTaETGTzs7jT8CfkJECimr/view?usp=share_link";

      return (
        <section id="resume" className="resume-section">
          <div className="section-header">
            <h2>My Resume</h2>
          </div>
          <div className="resume-content">
            <p>
              You can download or view my detailed resume to learn more about my education, experience, and skills.
            </p>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="resume-btn">
              Download/View Resume
            </a>
          </div>
        </section>
      );
    }

    export default Resume;