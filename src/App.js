import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from './assets/data';
import './styles/global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / total) * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="app-root">
      {/* Animated background */}
      <BackgroundCanvas />

      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <Header />

      <main>
        <section id="home"><Hero data={portfolioData.personalInfo} /></section>
        <section id="education"><About data={portfolioData} /></section>
        <section id="skills"><Skills data={portfolioData.technicalSkills} /></section>
        <section id="projects"><Projects data={portfolioData.projects} /></section>
        <section id="experience"><Experience data={portfolioData.experience} /></section>
        <section id="certifications"><Certifications data={portfolioData.certifications} /></section>
        <section id="contact"><Contact data={portfolioData.personalInfo} socialLinks={portfolioData.socialLinks} /></section>
      </main>

      <Footer data={portfolioData} />

      {/* Back to top */}
      {scrollProgress > 20 && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      <style>{`
        .app-root {
          position: relative;
          min-height: 100vh;
        }
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--teal), var(--gold));
          z-index: 9999;
          transition: width 0.1s linear;
          box-shadow: 0 0 10px rgba(0, 212, 200, 0.6);
        }
        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--teal), #00a8a0);
          color: var(--navy);
          font-size: 1.2rem;
          font-weight: bold;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 212, 200, 0.4);
          transition: all 0.3s ease;
          animation: fadeIn 0.3s ease;
        }
        .back-to-top:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0, 212, 200, 0.6);
        }
      `}</style>
    </div>
  );
}

export default App;
