import { useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const sectionsRef = useRef([]);

  // Smooth scroll
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("show")
        ),
      { threshold: 0.15 }
    );

    sectionsRef.current.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Terminal typing effect
  useEffect(() => {
    const text = "Software Developer";
    const el = document.getElementById("typing");
    let i = 0;

    if (!el) return;
    el.textContent = "";

    const interval = setInterval(() => {
      if (i < text.length) el.textContent += text.charAt(i++);
      else clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <button data-label="Home" onClick={() => scrollToSection("home")}>🏠</button>
        <button data-label="About" onClick={() => scrollToSection("about")}>👤</button>
        <button data-label="Skills" onClick={() => scrollToSection("skills")}>🛠</button>
        <button data-label="Projects" onClick={() => scrollToSection("projects")}>📂</button>
        <button data-label="Education" onClick={() => scrollToSection("education")}>🎓</button>
        <button data-label="Contact" onClick={() => scrollToSection("contact")}>📧</button>
      </aside>

      {/* CONTENT */}
      <main className="content container">
        {/* TERMINAL */}
        <div className="terminal">
          <p className="green">iqlaaz@portfolio:~$ whoami</p>
          <p className="terminal-line">
            <span id="typing"></span>
            <span className="cursor">_</span>
          </p>
        </div>

        {/* HOME */}
        <section id="home" ref={(e) => (sectionsRef.current[0] = e)} className="section fade">
          <div className="card p-4">
            <h1 className="fw-bold">
              Hi, I'm <span className="text-primary">Iqlaz Ahamed</span>
            </h1>
            <p className="text-muted">Full Stack Developer (MERN)</p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" ref={(e) => (sectionsRef.current[1] = e)} className="section fade">
          <div className="card p-4">
            <h3>About Me</h3>
            <p>
              Motivated MERN Stack developer focused on building scalable,
              secure, and user-centric web applications.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" ref={(e) => (sectionsRef.current[2] = e)} className="section fade">
          <div className="card p-4">
            <h3>Skills</h3>
            <div className="skill-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>MySQL</span>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          ref={(e) => (sectionsRef.current[3] = e)}
          className="section fade"
        >
          <div className="card p-4">
            <h3 className="mb-4">Projects</h3>

            <div className="accordion" id="projectsAccordion">

              {/* PROJECT 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="projectOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#projectOneBody"
                  >
                    🚚 Truck Booking System
                  </button>
                </h2>

                <div
                  id="projectOneBody"
                  className="accordion-collapse collapse"
                  data-bs-parent="#projectsAccordion"
                >
                  <div className="accordion-body">
                    <p className="text-muted">
                      <strong>Tech Stack:</strong> HTML, JavaScript, .NET, SQL
                    </p>
                    <ul>
                      <li>Real-time truck booking and scheduling system</li>
                      <li>Admin dashboard for fleet and trip management</li>
                      <li>Backend APIs built using .NET</li>
                      <li>Secure SQL database integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PROJECT 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="projectTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#projectTwoBody"
                  >
                    🏨 Hotel Room Booking System
                  </button>
                </h2>

                <div
                  id="projectTwoBody"
                  className="accordion-collapse collapse"
                  data-bs-parent="#projectsAccordion"
                >
                  <div className="accordion-body">
                    <p className="text-muted">
                      <strong>Tech Stack:</strong> MERN Stack
                    </p>
                    <ul>
                      <li>User authentication & authorization</li>
                      <li>Room availability & booking history</li>
                      <li>REST APIs using Node.js & Express</li>
                      <li>MongoDB for data storage</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" ref={(e) => (sectionsRef.current[4] = e)} className="section fade">
          <div className="card p-4">
            <h3>Education</h3>
            <p><strong>MCA</strong> — 2024 (Present)</p>
            <p><strong>BCA</strong> — 2021–2024</p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" ref={(e) => (sectionsRef.current[5] = e)} className="section fade">
          <div className="card p-4 text-center">
            <h3>Contact</h3>
            <p>📧 iqlazahamed13@gmail.com</p>
            <p>📞 +91 7338866176</p>
          </div>
        </section>
      </main>
    </div>
  );
}
