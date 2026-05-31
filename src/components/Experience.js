import React, { useState } from 'react';

const Experience = ({ data }) => {
  const experiences = data || [];
  const [active, setActive] = useState(0);

  const colors = ['#00d4c8', '#f0c060', '#ff6b9d'];

  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span style={{
            fontFamily: "'Fira Code'", fontSize: '0.78rem',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#00d4c8', display: 'block', marginBottom: '0.75rem',
          }}>// 04. journey</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900, color: '#f0f6ff',
          }}>
            My <span style={{ color: '#f0c060', fontStyle: 'italic' }}>Experience</span>
          </h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #00d4c8, #f0c060)', margin: '1.5rem auto 0', borderRadius: 2 }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '2rem',
          alignItems: 'start',
        }} className="exp-grid">

          {/* Sidebar tabs */}
          <div style={{
            background: 'rgba(10,22,40,0.7)',
            border: '1px solid rgba(0,212,200,0.15)',
            borderRadius: 16,
            backdropFilter: 'blur(12px)',
            overflow: 'hidden',
          }}>
            {experiences.map((exp, i) => (
              <button key={i}
                onClick={() => setActive(i)}
                style={{
                  width: '100%', padding: '1.25rem 1.5rem',
                  background: active === i ? `${colors[i % colors.length]}10` : 'transparent',
                  border: 'none',
                  borderLeft: `3px solid ${active === i ? colors[i % colors.length] : 'transparent'}`,
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'pointer', textAlign: 'left',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{
                  fontFamily: "'DM Sans'", fontWeight: 600,
                  fontSize: '0.9rem',
                  color: active === i ? colors[i % colors.length] : 'rgba(240,246,255,0.7)',
                  marginBottom: '0.2rem',
                }}>{exp.company}</div>
                <div style={{
                  fontFamily: "'Fira Code'",
                  fontSize: '0.7rem', color: 'rgba(240,246,255,0.35)',
                  letterSpacing: '0.05em',
                }}>{exp.duration}</div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          {experiences[active] && (() => {
            const exp = experiences[active];
            const color = colors[active % colors.length];
            return (
              <div key={active} style={{
                background: 'rgba(10,22,40,0.7)',
                border: `1px solid ${color}30`,
                borderRadius: 16,
                backdropFilter: 'blur(12px)',
                padding: '2rem',
                animation: 'fadeUp 0.3s ease both',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                    background: `${color}15`,
                    border: `1.5px solid ${color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem',
                  }}>{exp.icon}</div>
                  <div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.3rem', fontWeight: 700,
                      color: '#f0f6ff', marginBottom: '0.2rem',
                    }}>{exp.role}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontFamily: "'DM Sans'", fontSize: '0.9rem', color }}>{exp.company}</span>
                      <span style={{
                        padding: '0.15rem 0.6rem',
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                        borderRadius: '50px',
                        fontFamily: "'Fira Code'", fontSize: '0.72rem', color,
                      }}>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <p style={{
                  fontFamily: "'DM Sans'", fontSize: '0.9rem',
                  color: 'rgba(240,246,255,0.65)', lineHeight: 1.8,
                  marginBottom: '1.5rem',
                }}>{exp.description}</p>

                {/* Achievements */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{
                    fontFamily: "'Fira Code'", fontSize: '0.75rem',
                    color, letterSpacing: '0.15em', textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                  }}>Key Achievements</h4>
                  {exp.achievements?.map((a, ai) => (
                    <div key={ai} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                      marginBottom: '0.5rem',
                      fontFamily: "'DM Sans'", fontSize: '0.88rem',
                      color: 'rgba(240,246,255,0.7)',
                    }}>
                      <span style={{ color, fontSize: '0.7rem', marginTop: '0.3rem', flexShrink: 0 }}>◆</span>
                      {a}
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div>
                  <h4 style={{
                    fontFamily: "'Fira Code'", fontSize: '0.75rem',
                    color: 'rgba(240,246,255,0.4)', letterSpacing: '0.15em',
                    textTransform: 'uppercase', marginBottom: '0.75rem',
                  }}>Technologies Used</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.technologies?.map((tech, ti) => (
                      <span key={ti} style={{
                        padding: '0.25rem 0.75rem',
                        background: `${color}08`,
                        border: `1px solid ${color}25`,
                        borderRadius: '50px',
                        fontFamily: "'Fira Code'", fontSize: '0.72rem', color,
                      }}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
