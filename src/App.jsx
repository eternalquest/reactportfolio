import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header / Hero */}
      <header className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Nitish.</h1>
          <p>Building modern web apps and creating impactful software solutions.</p>
          <p>To change how world watches you online.</p>
          <a href="#projects" className="btn">See My Work</a>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <img src="https://via.placeholder.com/150" alt="Profile" className="profile-pic" />
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I am a passionate software developer specializing in web development. I love building interactive websites, experimenting with new technologies, and solving real-world problems with code.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>A modern ReactJS portfolio showcasing my work and skills.</p>
            </div>
            <div className="project-card">
              <h3>OpenCV Motion Detection</h3>
              <p>A Python project that converts motion into sound using OpenCV.</p>
            </div>
            <div className="project-card">
              <h3>Job-Tracking chrome extension</h3>
              <p>A chrome extension to track jobs that you have applied for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Email: your.email@example.com</p>
          <div className="social-links">
            <a href="https://github.com/" target="_blank">GitHub</a>
            <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
            <a href="https://twitter.com/" target="_blank">Twitter</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Nitish. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
