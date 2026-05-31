import React from 'react';

const Projects = ({ data }) => {
  const projects = data || [];

  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span style={{
            fontFamily: "'Fira Code'", fontSize: '0.78rem',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#00d4c8', display: 'block', marginBottom: '0.75rem',
          }}>// 03. work</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900, color: '#f0f6ff',
          }}>
            Featured <span style={{ color: '#00d4c8', fontStyle: 'italic' }}>Projects</span>
          </h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #00d4c8, #f0c060)', margin: '1.5rem auto 0', borderRadius: 2 }} />
        </div>

        {projects.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '4rem 2rem',
            background: 'rgba(10,22,40,0.7)', border: '1px solid rgba(0,212,200,0.15)',
            borderRadius: 16,
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚧</div>
            <p style={{ color: 'rgba(240,246,255,0.5)', fontFamily: "'DM Sans'" }}>More projects coming soon!</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}>
            {projects.map((project, i) => (
              <div key={i} style={{
                background: 'rgba(10,22,40,0.8)',
                border: '1px solid rgba(0,212,200,0.15)',
                borderRadius: 20,
                backdropFilter: 'blur(12px)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex', flexDirection: 'column',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,212,200,0.4)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,212,200,0.1)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,212,200,0.15)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                {/* Project visual header */}
                <div style={{
                  height: 180,
                  background: `linear-gradient(135deg, rgba(0,212,200,0.12), rgba(240,192,96,0.08))`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                  borderBottom: '1px solid rgba(0,212,200,0.1)',
                }}>
                  {/* Abstract SVG illustration */}
                  <svg width="100%" height="100%" viewBox="0 0 360 180" style={{ position: 'absolute', inset: 0 }}>
                    <defs>
                      <radialGradient id={`pg${i}`} cx="50%" cy="50%" r="70%">
                        <stop offset="0%" stopColor="#00d4c8" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#050d1a" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="360" height="180" fill={`url(#pg${i})`} />
                    {/* Grid dots */}
                    {[...Array(8)].map((_, r) =>
                      [...Array(12)].map((_, c) => (
                        <circle key={`${r}-${c}`} cx={c * 30 + 15} cy={r * 25 + 12}
                          r="1" fill="rgba(0,212,200,0.15)" />
                      ))
                    )}
                    {/* Decorative lines */}
                    <line x1="20" y1="40" x2="200" y2="140" stroke="rgba(0,212,200,0.08)" strokeWidth="1" />
                    <line x1="180" y1="20" x2="340" y2="160" stroke="rgba(240,192,96,0.06)" strokeWidth="1" />
                    <circle cx="180" cy="90" r="50" fill="none" stroke="rgba(0,212,200,0.08)" strokeWidth="1" />
                    <circle cx="180" cy="90" r="30" fill="none" stroke="rgba(240,192,96,0.06)" strokeWidth="1" />
                  </svg>

                  <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                      {project.category === 'frontend' ? '🌐' : project.category === 'data' ? '📊' : '⚡'}
                    </div>
                    <div style={{
                      fontFamily: "'Fira Code'",
                      fontSize: '0.75rem', color: '#00d4c8',
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                    }}>{project.category || 'project'}</div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.25rem', fontWeight: 700,
                    color: '#f0f6ff', marginBottom: '0.75rem',
                  }}>{project.title}</h3>

                  <p style={{
                    fontFamily: "'DM Sans'",
                    fontSize: '0.88rem', color: 'rgba(240,246,255,0.6)',
                    lineHeight: 1.7, marginBottom: '1.25rem', flex: 1,
                  }}>{project.description}</p>

                  {/* Features */}
                  {project.features && (
                    <ul style={{ listStyle: 'none', marginBottom: '1.25rem' }}>
                      {project.features.slice(0, 3).map((f, fi) => (
                        <li key={fi} style={{
                          display: 'flex', alignItems: 'center', gap: '0.5rem',
                          fontFamily: "'DM Sans'", fontSize: '0.83rem',
                          color: 'rgba(240,246,255,0.6)', marginBottom: '0.3rem',
                        }}>
                          <span style={{ color: '#00d4c8', fontSize: '0.7rem' }}>◆</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.technologies?.map((tech, ti) => (
                      <span key={ti} style={{
                        padding: '0.2rem 0.6rem',
                        background: 'rgba(0,212,200,0.08)',
                        border: '1px solid rgba(0,212,200,0.2)',
                        borderRadius: '50px',
                        fontFamily: "'Fira Code'", fontSize: '0.7rem',
                        color: '#00d4c8',
                      }}>{tech}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        style={{
                          flex: 1, padding: '0.6rem 1rem', textAlign: 'center',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: 8, color: 'rgba(240,246,255,0.7)',
                          fontFamily: "'DM Sans'", fontSize: '0.83rem',
                          fontWeight: 500, textDecoration: 'none',
                          transition: 'all 0.2s ease', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#00d4c8'; e.currentTarget.style.color = '#00d4c8'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(240,246,255,0.7)'; }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        style={{
                          flex: 1, padding: '0.6rem 1rem', textAlign: 'center',
                          background: 'linear-gradient(135deg, #00d4c8, #00a8a0)',
                          border: 'none',
                          borderRadius: 8, color: '#050d1a',
                          fontFamily: "'DM Sans'", fontSize: '0.83rem',
                          fontWeight: 700, textDecoration: 'none',
                          transition: 'all 0.2s ease', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
                      >
                        ↗ Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* "More coming soon" card */}
            <div style={{
              background: 'rgba(10,22,40,0.4)',
              border: '1px dashed rgba(0,212,200,0.2)',
              borderRadius: 20,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '3rem', minHeight: 300,
              gap: '1rem',
            }}>
              <div style={{ fontSize: '2rem', opacity: 0.4 }}>+</div>
              <p style={{
                fontFamily: "'Fira Code'",
                fontSize: '0.78rem', color: 'rgba(0,212,200,0.5)',
                letterSpacing: '0.15em', textAlign: 'center',
              }}>MORE PROJECTS IN PROGRESS</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
