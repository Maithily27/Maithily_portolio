import React from 'react';

const Footer = ({ data }) => {
  const name = data?.personalInfo?.name || 'Maithily M. Gondode';
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'rgba(3,11,20,0.95)',
      borderTop: '1px solid rgba(0,212,200,0.1)',
      padding: '3rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 300, height: 1,
        background: 'linear-gradient(90deg, transparent, #00d4c8, transparent)',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        {/* Logo */}
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2rem', fontWeight: 900,
          background: 'linear-gradient(135deg, #00d4c8, #f0c060)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.5rem',
        }}>MG</div>

        <p style={{
          fontFamily: "'DM Sans'",
          fontSize: '0.88rem',
          color: 'rgba(240,246,255,0.4)',
          marginBottom: '1.5rem',
        }}>Data Science & Web Development</p>

        {/* Quick links */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          gap: '1.5rem', marginBottom: '2rem',
        }}>
          {['Home', 'Education', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "'DM Sans'",
                fontSize: '0.82rem', color: 'rgba(240,246,255,0.4)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#00d4c8'}
              onMouseLeave={e => e.target.style.color = 'rgba(240,246,255,0.4)'}
            >{item}</a>
          ))}
        </div>

        <div style={{
          width: 60, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(0,212,200,0.4), transparent)',
          margin: '0 auto 1.5rem',
        }} />

        <p style={{
          fontFamily: "'Fira Code'",
          fontSize: '0.72rem',
          color: 'rgba(240,246,255,0.25)',
          letterSpacing: '0.05em',
        }}>
          © {year} {name} — Built with ❤️ & React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
