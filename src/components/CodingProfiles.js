import React from 'react';
import './CodingProfiles.css';

    function CodingProfiles() {
      return (
        <section id="profiles" className="coding-profiles-section">
          <div className="section-header">
            <h2>Coding Profiles</h2>
          </div>
          <div className="profiles-grid">
            <a href="https://codeforces.com/profile/Shekhar_Nayak" target="_blank" rel="noopener noreferrer" className="profile-card codeforces">
              <h3>Codeforces</h3>
              <p>Competitive Programmer</p>
              <p>Handle: Shekhar_Nayak</p>
              {/* You can add dynamic stats here later if you integrate APIs */}
            </a>
            <a href="https://leetcode.com/u/Shadow_oo7/" target="_blank" rel="noopener noreferrer" className="profile-card leetcode">
              <h3>LeetCode</h3>
              <p>Problem Solver</p>
              <p>Handle: Shadow_oo7</p>
            </a>
            <a href="https://www.geeksforgeeks.org/user/shekharn402/?_gl=1*aqa913*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwhO3DBhDkARIsANxrhTonvS9ffJ0uhilxGQDefKSZ6UA0wyQgwIaJu2vYv_oT5W36AS6lQSMaAgw6EALw_wcB&gbraid=0AAAAAC9yBkCGQ2D-Bv6QQ1RdjKrrCKwXo" target="_blank" rel="noopener noreferrer" className="profile-card leetcode">
              <h3>GeeksForGeeks</h3>
              <p>Problem Solver</p>
              <p>Handle: shekharn402</p>
            </a>
            <a href="https://github.com/ShadowOO7" target="_blank" rel="noopener noreferrer" className="profile-card github">
              <h3>GitHub</h3>
              <p>Open Source Contributions & Projects</p>
              <p>Handle: ShadowOO7</p>
            </a>
          </div>
        </section>
      );
    }

    export default CodingProfiles;