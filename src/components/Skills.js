import React, { useRef, useState, useEffect } from 'react';

const categoryConfig = {
  programming: { label: 'Programming', icon: '💻', color: '#00d4c8' },
  dataSkills: { label: 'Data Science', icon: '📊', color: '#f0c060' },
  tools: { label: 'Tools & Platforms', icon: '🔧', color: '#ff6b9d' },
};

const SkillBar = ({ skill, color, delay }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(skill.level), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [skill.level, delay]);

  return (
    <div ref={ref} style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1rem' }}>{skill.icon}</span>
          <span style={{ fontFamily: "'DM Sans'", fontSize: '0.9rem', color: '#f0f6ff', fontWeight: 500 }}>{skill.name}</span>
        </div>
        <span style={{ fontFamily: "'Fira Code'", fontSize: '0.78rem', color }}>
          {width}%
        </span>
      </div>
      <div style={{
        height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${width}%`,
          background: `linear-gradient(90deg, ${color}, ${color}aa)`,
          borderRadius: 3,
          transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: `0 0 8px ${color}40`,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: '30%',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '0 3px 3px 0',
          }} />
        </div>
      </div>
    </div>
  );
};

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState('programming');

  const skills = data?.[activeTab] || [];

  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span style={{
            fontFamily: "'Fira Code'", fontSize: '0.78rem',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#00d4c8', display: 'block', marginBottom: '0.75rem',
          }}>// 02. skills</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900, color: '#f0f6ff',
          }}>
            My <span style={{ color: '#f0c060', fontStyle: 'italic' }}>Superpowers</span>
          </h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #00d4c8, #f0c060)', margin: '1.5rem auto 0', borderRadius: 2 }} />
        </div>

        {/* Tab switcher */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '0.5rem',
          marginBottom: '3rem', flexWrap: 'wrap',
        }}>
          {Object.entries(categoryConfig).map(([key, cfg]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '50px',
                background: activeTab === key ? `${cfg.color}18` : 'transparent',
                border: `1.5px solid ${activeTab === key ? cfg.color : 'rgba(255,255,255,0.1)'}`,
                color: activeTab === key ? cfg.color : 'rgba(240,246,255,0.6)',
                fontFamily: "'DM Sans'", fontWeight: activeTab === key ? 600 : 400,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
              }}
            >
              <span>{cfg.icon}</span> {cfg.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {/* Skill bars card */}
          <div style={{
            background: 'rgba(10, 22, 40, 0.7)',
            border: '1px solid rgba(0,212,200,0.15)',
            borderRadius: 16,
            backdropFilter: 'blur(12px)',
            padding: '2rem',
            gridColumn: skills.length > 3 ? 'span 1' : 'span 1',
          }}>
            {skills.map((skill, i) => (
              <SkillBar
                key={`${activeTab}-${skill.name}`}
                skill={skill}
                color={categoryConfig[activeTab]?.color || '#00d4c8'}
                delay={i * 100}
              />
            ))}
          </div>

          {/* Visual radial representation */}
          <div style={{
            background: 'rgba(10, 22, 40, 0.7)',
            border: '1px solid rgba(0,212,200,0.15)',
            borderRadius: 16,
            backdropFilter: 'blur(12px)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '0.75rem',
              justifyContent: 'center',
            }}>
              {skills.map((skill, i) => {
                const color = categoryConfig[activeTab]?.color || '#00d4c8';
                const size = 60 + (skill.level / 100) * 30;
                return (
                  <div key={i} style={{
                    width: size, height: size,
                    borderRadius: '50%',
                    background: `radial-gradient(circle at 35% 35%, ${color}25, ${color}08)`,
                    border: `1.5px solid ${color}40`,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: '0.1rem',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    boxShadow: `0 0 15px ${color}15`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = `0 0 25px ${color}40`;
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = `0 0 15px ${color}15`;
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <span style={{ fontSize: size > 75 ? '1.2rem' : '0.9rem' }}>{skill.icon}</span>
                    <span style={{
                      fontFamily: "'Fira Code'",
                      fontSize: '0.6rem', color,
                      textAlign: 'center', lineHeight: 1,
                    }}>{skill.level}%</span>
                  </div>
                );
              })}
            </div>
            <p style={{
              fontFamily: "'Fira Code'",
              fontSize: '0.7rem', color: 'rgba(240,246,255,0.3)',
              letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '0.5rem',
            }}>Bubble size = proficiency</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
