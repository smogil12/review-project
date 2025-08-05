import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [serverHealth, setServerHealth] = useState(null);

  useEffect(() => {
    // Fetch server health on component mount
    fetch('/api/health')
      .then(response => response.json())
      .then(data => setServerHealth(data))
      .catch(error => console.error('Error fetching health:', error));
  }, []);

  return (
    <div className="App">
      <header className="header">
        <nav className="nav container">
          <h2>Sample Website</h2>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Welcome to Our React Website</h1>
            <p>This is a modern React application with Express backend, demonstrating full-stack development.</p>
            <a href="#learn-more" className="btn">Learn More</a>
          </div>
        </section>

        <div className="container">
          <section id="about">
            <h2>About Us</h2>
            <p>This is a sample React application that demonstrates modern web development practices including React hooks, component-based architecture, and integration with Express backend.</p>
          </section>

          <section id="services" className="content-grid">
            <article className="card">
              <h3>React Development</h3>
              <p>Modern, component-based applications built with React and the latest web technologies.</p>
            </article>
            
            <article className="card">
              <h3>Express Backend</h3>
              <p>Robust server-side APIs and middleware built with Node.js and Express.</p>
            </article>
            
            <article className="card">
              <h3>Full-Stack Solutions</h3>
              <p>Complete web applications from frontend to backend, designed for scalability.</p>
            </article>
          </section>

          <section id="contact">
            <h2>Contact Information</h2>
            <p>Get in touch with us for your next project:</p>
            <ul>
              <li>Email: info@reactwebsite.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 React Street, City, State 12345</li>
            </ul>
            
            {serverHealth && (
              <div className="server-status">
                <h3>Server Status</h3>
                <p>Status: <span className={serverHealth.status === 'OK' ? 'status-ok' : 'status-error'}>{serverHealth.status}</span></p>
                <p>Message: {serverHealth.message}</p>
                <p>Last Updated: {new Date(serverHealth.timestamp).toLocaleString()}</p>
              </div>
            )}
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 React Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
