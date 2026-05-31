import React from 'react';

const certIcons = ['🏅', '🤖', '⛓️', '🐍', '🗄️', '✨'];
const certColors = [
  { bg: 'rgba(0,212,200,0.08)', border: 'rgba(0,212,200,0.25)', text: '#00d4c8' },
  { bg: 'rgba(240,192,96,0.08)', border: 'rgba(240,192,96,0.25)', text: '#f0c060' },
  { bg: 'rgba(255,107,157,0.08)', border: 'rgba(255,107,157,0.25)', text: '#ff6b9d' },
  { bg: 'rgba(0,212,200,0.06)', border: 'rgba(0,212,200,0.2)', text: '#00d4c8' },
  { bg: 'rgba(240,192,96,0.06)', border: 'rgba(240,192,96,0.2)', text: '#f0c060' },
  { bg: 'rgba(255,107,157,0.06)', border: 'rgba(255,107,157,0.2)', text: '#ff6b9d' },
];

const Certifications = ({ data }) => {
  const certs = data || [];

  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span style={{
            fontFamily: "'Fira Code'", fontSize: '0.78rem',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#00d4c8', display: 'block', marginBottom: '0.75rem',
          }}>// 05. credentials</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900, color: '#f0f6ff',
          }}>
            My <span style={{ color: '#00d4c8', fontStyle: 'italic' }}>Certifications</span>
          </h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #00d4c8, #f0c060)', margin: '1.5rem auto 0', borderRadius: 2 }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {certs.map((cert, i) => {
            const parts = cert.split(' - ');
            const title = parts[0];
            const issuer = parts[1] || '';
            const cfg = certColors[i % certColors.length];

            return (
              <div key={i} style={{
                background: cfg.bg,
                border: `1px solid ${cfg.border}`,
                borderRadius: 14,
                padding: '1.25rem 1.5rem',
                display: 'flex', alignItems: 'center', gap: '1rem',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = `0 10px 30px rgba(0,0,0,0.3)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                {/* Icon */}
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  background: `${cfg.border}30`,
                  border: `1px solid ${cfg.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem',
                }}>{certIcons[i % certIcons.length]}</div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: "'DM Sans'", fontWeight: 600,
                    fontSize: '0.88rem', color: '#f0f6ff',
                    marginBottom: '0.2rem',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>{title}</div>
                  {issuer && (
                    <div style={{
                      fontFamily: "'Fira Code'",
                      fontSize: '0.72rem', color: cfg.text,
                      letterSpacing: '0.05em',
                    }}>{issuer}</div>
                  )}
                </div>

                {/* Check badge */}
                <div style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: `${cfg.text}20`,
                  border: `1.5px solid ${cfg.text}60`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: '0.7rem', color: cfg.text }}>✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
