import React from 'react';

const degreeIcons = ['🎓', '📚', '✏️'];

const About = ({ data }) => {
  const education = data?.education || [];
  const languages = data?.languages || [];
  const softSkills = data?.softSkills || [];

  return (
    <section style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <span style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.78rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: '#00d4c8',
            display: 'block', marginBottom: '0.75rem',
          }}>// 01. background</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900, color: '#f0f6ff',
          }}>
            Education & <span style={{ color: '#00d4c8', fontStyle: 'italic' }}>Background</span>
          </h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #00d4c8, #f0c060)', margin: '1.5rem auto 0', borderRadius: 2 }} />
        </div>

        {/* Education Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
          {education.map((edu, i) => (
            <div key={i} style={{
              background: 'rgba(10, 22, 40, 0.7)',
              border: '1px solid rgba(0,212,200,0.15)',
              borderRadius: 16,
              backdropFilter: 'blur(12px)',
              padding: '1.75rem 2rem',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              gap: '1.5rem',
              alignItems: 'center',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(0,212,200,0.4)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,200,0.1)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(0,212,200,0.15)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              {/* Left accent line */}
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: 3,
                background: i === 0
                  ? 'linear-gradient(to bottom, #00d4c8, #f0c060)'
                  : i === 1
                    ? 'linear-gradient(to bottom, #f0c060, #ff6b9d)'
                    : 'linear-gradient(to bottom, #ff6b9d, #00d4c8)',
                borderRadius: '3px 0 0 3px',
              }} />

              {/* Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'rgba(0,212,200,0.08)',
                border: '1px solid rgba(0,212,200,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', flexShrink: 0, marginLeft: '0.5rem',
              }}>
                {degreeIcons[i]}
              </div>

              {/* Info */}
              <div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.1rem', fontWeight: 700,
                  color: '#f0f6ff', marginBottom: '0.25rem',
                }}>{edu.degree}</h3>
                <p style={{
                  fontSize: '0.88rem', color: '#00d4c8',
                  fontFamily: "'DM Sans', sans-serif", marginBottom: '0.1rem',
                }}>{edu.institution}</p>
              </div>

              {/* Score & Year */}
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '1.1rem', fontWeight: 700,
                  color: '#f0c060', marginBottom: '0.25rem',
                }}>{edu.score}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.8rem', color: 'rgba(240,246,255,0.5)',
                }}>{edu.year}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Soft Skills side by side */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {/* Languages */}
          <div style={{
            background: 'rgba(10, 22, 40, 0.7)',
            border: '1px solid rgba(0,212,200,0.15)',
            borderRadius: 16,
            backdropFilter: 'blur(12px)',
            padding: '1.75rem',
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.15rem', fontWeight: 700,
              color: '#f0f6ff', marginBottom: '1.5rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
            }}>
              🌐 Languages
            </h3>
            {languages.map((lang, i) => (
              <div key={i} style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontFamily: "'DM Sans'", fontSize: '0.9rem', color: '#f0f6ff' }}>{lang.name}</span>
                  <span style={{ fontFamily: "'Fira Code'", fontSize: '0.78rem', color: '#00d4c8' }}>{lang.proficiency}</span>
                </div>
                <div style={{
                  height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${lang.level}%`,
                    background: 'linear-gradient(90deg, #00d4c8, #f0c060)',
                    borderRadius: 2,
                    transition: 'width 1s ease',
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div style={{
            background: 'rgba(10, 22, 40, 0.7)',
            border: '1px solid rgba(0,212,200,0.15)',
            borderRadius: 16,
            backdropFilter: 'blur(12px)',
            padding: '1.75rem',
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.15rem', fontWeight: 700,
              color: '#f0f6ff', marginBottom: '1.5rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
            }}>
              💡 Soft Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {softSkills.map((skill, i) => (
                <span key={i} style={{
                  padding: '0.4rem 1rem',
                  background: 'rgba(240,192,96,0.08)',
                  border: '1px solid rgba(240,192,96,0.2)',
                  borderRadius: '50px',
                  fontFamily: "'DM Sans'",
                  fontSize: '0.85rem',
                  color: '#f0c060',
                }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
