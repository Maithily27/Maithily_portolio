import React, { useEffect, useRef, useState } from 'react';

const ROLES = [
  'Data Science Enthusiast',
  'Web Developer',
  'Machine Learning Explorer',
  'Problem Solver',
];

const Hero = ({ data }) => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const charRef = useRef(0);

  useEffect(() => {
    const role = ROLES[roleIdx];
    if (typing) {
      if (charRef.current < role.length) {
        const t = setTimeout(() => {
          setDisplayed(role.slice(0, charRef.current + 1));
          charRef.current++;
        }, 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (charRef.current > 0) {
        const t = setTimeout(() => {
          setDisplayed(role.slice(0, charRef.current - 1));
          charRef.current--;
        }, 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(i => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 2rem 60px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative geometric shapes */}
      <div style={{
        position: 'absolute', top: '15%', right: '8%',
        width: 200, height: 200,
        border: '1px solid rgba(0,212,200,0.12)',
        borderRadius: '50%',
        animation: 'rotate-slow 20s linear infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '20%', right: '10%',
        width: 140, height: 140,
        border: '1px solid rgba(240,192,96,0.1)',
        borderRadius: '50%',
        animation: 'rotate-slow 15s linear infinite reverse',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', left: '5%',
        width: 120, height: 120,
        border: '1px solid rgba(0,212,200,0.08)',
        transform: 'rotate(45deg)',
        animation: 'rotate-slow 25s linear infinite',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 900,
        width: '100%',
        textAlign: 'center',
      }}>
        {/* Greeting chip */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.4rem 1.2rem',
          background: 'rgba(0,212,200,0.08)',
          border: '1px solid rgba(0,212,200,0.25)',
          borderRadius: '50px',
          marginBottom: '2rem',
          animation: 'fadeUp 0.6s ease forwards',
        }}>
          <span style={{ fontSize: '0.8rem', color: '#00d4c8', letterSpacing: '0.12em', fontFamily: "'Fira Code', monospace" }}>
            👋 Hello, I'm
          </span>
        </div>

        {/* Avatar */}
        <div style={{
          position: 'relative', display: 'inline-block',
          marginBottom: '2rem',
          animation: 'fadeUp 0.6s 0.1s ease both',
        }}>
          <div style={{
            width: 120, height: 120,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(0,212,200,0.2), rgba(240,192,96,0.2))',
            border: '2px solid rgba(0,212,200,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto',
            boxShadow: '0 0 40px rgba(0,212,200,0.2)',
            position: 'relative',
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2.5rem', fontWeight: 900,
              background: 'linear-gradient(135deg, #00d4c8, #f0c060)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>MG</span>
          </div>
          {/* Orbit dot */}
          <div style={{
            position: 'absolute',
            width: 140, height: 140,
            top: -10, left: '50%', marginLeft: -70,
            border: '1px dashed rgba(0,212,200,0.25)',
            borderRadius: '50%',
            animation: 'rotate-slow 8s linear infinite',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: '50%', marginLeft: -5,
              width: 10, height: 10,
              background: '#00d4c8',
              borderRadius: '50%',
              boxShadow: '0 0 8px rgba(0,212,200,0.8)',
            }} />
          </div>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.4rem, 7vw, 4.5rem)',
          fontWeight: 900,
          color: '#f0f6ff',
          lineHeight: 1.1,
          marginBottom: '1rem',
          animation: 'fadeUp 0.6s 0.2s ease both',
        }}>
          {data?.name || 'Maithily M. Gondode'}
        </h1>

        {/* Typing role */}
        <div style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          fontFamily: "'Fira Code', monospace",
          color: '#00d4c8',
          marginBottom: '1.5rem',
          height: '2em',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'fadeUp 0.6s 0.3s ease both',
        }}>
          <span style={{ opacity: 0.5, marginRight: '0.5rem' }}>{'>'}</span>
          {displayed}
          <span style={{
            display: 'inline-block',
            width: 2, height: '1.1em',
            background: '#00d4c8',
            marginLeft: '2px',
            animation: 'blink 1s step-end infinite',
          }} />
        </div>

        {/* Profile description */}
        <p style={{
          maxWidth: 650, margin: '0 auto 2.5rem',
          color: 'rgba(240,246,255,0.65)',
          fontSize: '1rem',
          lineHeight: 1.8,
          animation: 'fadeUp 0.6s 0.4s ease both',
        }}>
          {data?.profile}
        </p>

        {/* Contact chips */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          gap: '0.75rem', marginBottom: '2.5rem',
          animation: 'fadeUp 0.6s 0.5s ease both',
        }}>
          {[
            { icon: '✉', text: data?.email },
            { icon: '📞', text: data?.phone },
            { icon: '📍', text: data?.location },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.4rem 1rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '50px',
              fontSize: '0.82rem',
              color: 'rgba(240,246,255,0.6)',
            }}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '1rem',
          justifyContent: 'center',
          animation: 'fadeUp 0.6s 0.6s ease both',
        }}>
          <a href="#contact" className="btn-primary" style={{
            padding: '0.9rem 2.2rem',
            background: 'linear-gradient(135deg, #00d4c8, #00a8a0)',
            color: '#050d1a', fontWeight: 700,
            borderRadius: '50px', textDecoration: 'none',
            fontSize: '0.95rem',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            boxShadow: '0 4px 25px rgba(0,212,200,0.35)',
            transition: 'all 0.3s ease',
            border: 'none', cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 35px rgba(0,212,200,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 25px rgba(0,212,200,0.35)'; }}
          >
            ✉ Get In Touch
          </a>
          <a href="#projects" style={{
            padding: '0.9rem 2.2rem',
            background: 'transparent',
            color: '#f0c060', fontWeight: 600,
            borderRadius: '50px', textDecoration: 'none',
            fontSize: '0.95rem',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            border: '1.5px solid rgba(240,192,96,0.5)',
            transition: 'all 0.3s ease',
            fontFamily: "'DM Sans', sans-serif",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(240,192,96,0.08)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            🚀 View Work
          </a>
        </div>

        {/* Social links */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2.5rem',
          animation: 'fadeUp 0.6s 0.7s ease both',
        }}>
          {[
            { href: 'https://github.com/Maithily27', label: 'GitHub', icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            )},
            { href: 'https://linkedin.com/in/maithily-gondode', label: 'LinkedIn', icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            )},
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              style={{
                width: 42, height: 42,
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(240,246,255,0.7)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(0,212,200,0.15)';
                e.currentTarget.style.borderColor = 'rgba(0,212,200,0.5)';
                e.currentTarget.style.color = '#00d4c8';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'rgba(240,246,255,0.7)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: '4rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '0.5rem', opacity: 0.5,
          animation: 'fadeIn 1s 1.5s ease both',
        }}>
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.7rem', letterSpacing: '0.15em', color: '#00d4c8' }}>SCROLL</span>
          <div style={{
            width: 1, height: 50,
            background: 'linear-gradient(to bottom, #00d4c8, transparent)',
            animation: 'float 2s ease-in-out infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes rotate-slow { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default Hero;
