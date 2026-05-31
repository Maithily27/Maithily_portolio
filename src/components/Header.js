import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: '0 2rem',
      height: 70,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(5, 13, 26, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,212,200,0.1)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <a href="#home" onClick={e => handleNav(e, '#home')} style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: 38, height: 38,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00d4c8, #f0c060)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900, fontSize: '0.95rem',
            color: '#050d1a',
            boxShadow: '0 0 20px rgba(0,212,200,0.4)',
            flexShrink: 0,
          }}>MG</div>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700, fontSize: '1rem',
            color: '#f0f6ff',
            display: 'none',
          }} className="logo-name">Maithily Gondode</span>
        </div>
      </a>

      {/* Desktop nav */}
      <nav style={{ display: 'flex', gap: '0.25rem' }} className="desktop-nav-items">
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            onClick={e => handleNav(e, item.href)}
            style={{
              padding: '0.4rem 0.85rem',
              borderRadius: '50px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.88rem',
              fontWeight: active === item.href ? 600 : 400,
              color: active === item.href ? '#00d4c8' : 'rgba(240,246,255,0.7)',
              background: active === item.href ? 'rgba(0,212,200,0.1)' : 'transparent',
              border: active === item.href ? '1px solid rgba(0,212,200,0.3)' : '1px solid transparent',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              if (active !== item.href) {
                e.target.style.color = '#f0f6ff';
                e.target.style.background = 'rgba(255,255,255,0.05)';
              }
            }}
            onMouseLeave={e => {
              if (active !== item.href) {
                e.target.style.color = 'rgba(240,246,255,0.7)';
                e.target.style.background = 'transparent';
              }
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#f0f6ff', fontSize: '1.4rem', padding: '0.5rem',
        }}
        className="mobile-menu-btn"
        aria-label="Menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: 70, left: 0, right: 0,
          background: 'rgba(5,13,26,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,212,200,0.15)',
          padding: '1rem 0',
        }}>
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={e => handleNav(e, item.href)}
              style={{
                display: 'block', padding: '0.75rem 2rem',
                fontFamily: "'DM Sans', sans-serif",
                color: active === item.href ? '#00d4c8' : 'rgba(240,246,255,0.8)',
                fontSize: '0.95rem', fontWeight: active === item.href ? 600 : 400,
                textDecoration: 'none', transition: 'color 0.2s',
                borderLeft: active === item.href ? '3px solid #00d4c8' : '3px solid transparent',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav-items { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .logo-name { display: none !important; }
        }
        @media (min-width: 769px) {
          .logo-name { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
