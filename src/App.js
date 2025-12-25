import { useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const sectionsRef = useRef([]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* SCROLL ANIMATION */
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

  /* TERMINAL TYPING */
  useEffect(() => {
    const text = "Software Developer";
    const el = document.getElementById("typing");
    let i = 0;
    if (!el) return;

    el.textContent = "";
    const interval = setInterval(() => {
      if (i < text.length) {
        el.textContent += text.charAt(i++);
      } else clearInterval(interval);
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
            <h1>Hi, I'm <span className="text-primary">Iqlaz Ahamed</span></h1>
            <p className="muted">Full Stack Developer (MERN)</p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" ref={(e) => (sectionsRef.current[1] = e)} className="section fade">
          <div className="card p-4">
            <h3>About Me</h3>
            <p>Motivated MERN Stack developer focused on scalable web apps.</p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" ref={(e) => (sectionsRef.current[2] = e)} className="section fade">
          <div className="card p-4">
            <h3>Skills</h3>
            <div className="skill-tags">
              <span>React</span><span>JavaScript</span><span>HTML</span>
              <span>CSS</span><span>Bootstrap</span><span>Node.js</span>
              <span>MongoDB</span><span>MySQL</span>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" ref={(e) => (sectionsRef.current[3] = e)} className="section fade">
          <div className="card p-4">
            <h3>Projects</h3>
            <p>Truck Booking System • Hotel Booking System</p>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" ref={(e) => (sectionsRef.current[4] = e)} className="section fade">
          <div className="card p-4">
            <h3>Education</h3>
            <p>MCA (2024–Present)</p>
            <p>BCA (2021–2024)</p>
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
