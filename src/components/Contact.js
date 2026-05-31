import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'service_2vv2hzv';
const TEMPLATE_ID = 'template_o3sm3ih';
const PUBLIC_KEY  = 'mnPxhFLRH4qqN7hyy';

const Contact = ({ data, socialLinks }) => {
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setStatus('sent');
        e.target.reset();
        setForm({ from_name: '', from_email: '', subject: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const contactItems = [
    { icon: '✉', label: 'Email', value: data?.email, href: `mailto:${data?.email}` },
    { icon: '📞', label: 'Phone', value: data?.phone, href: `tel:${data?.phone}` },
    { icon: '📍', label: 'Location', value: data?.location, href: null },
  ];

  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span style={{
            fontFamily: "'Fira Code'", fontSize: '0.78rem',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#00d4c8', display: 'block', marginBottom: '0.75rem',
          }}>// 06. contact</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900, color: '#f0f6ff',
          }}>
            Let's <span style={{ color: '#00d4c8', fontStyle: 'italic' }}>Connect</span>
          </h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #00d4c8, #f0c060)', margin: '1.5rem auto 0', borderRadius: 2 }} />
          <p style={{
            fontFamily: "'DM Sans'", fontSize: '1rem',
            color: 'rgba(240,246,255,0.55)', marginTop: '1.5rem',
            maxWidth: 500, margin: '1.5rem auto 0',
          }}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '2rem', alignItems: 'start',
        }} className="contact-grid">

          {/* Left: Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contactItems.map((item, i) => (
              <div key={i} style={{
                background: 'rgba(10,22,40,0.7)',
                border: '1px solid rgba(0,212,200,0.15)',
                borderRadius: 14,
                backdropFilter: 'blur(12px)',
                padding: '1.25rem 1.5rem',
                display: 'flex', alignItems: 'center', gap: '1rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,200,0.4)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,212,200,0.15)'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: 'rgba(0,212,200,0.1)',
                  border: '1px solid rgba(0,212,200,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', flexShrink: 0,
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Fira Code'", fontSize: '0.72rem', color: '#00d4c8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} style={{ fontFamily: "'DM Sans'", fontSize: '0.88rem', color: '#f0f6ff', textDecoration: 'none' }}>{item.value}</a>
                  ) : (
                    <span style={{ fontFamily: "'DM Sans'", fontSize: '0.88rem', color: '#f0f6ff' }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div style={{
              background: 'rgba(10,22,40,0.7)',
              border: '1px solid rgba(0,212,200,0.15)',
              borderRadius: 14, padding: '1.25rem 1.5rem',
            }}>
              <div style={{ fontFamily: "'Fira Code'", fontSize: '0.72rem', color: '#00d4c8', letterSpacing: '0.1em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>Follow Me</div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  { href: socialLinks?.github, label: 'GitHub', icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  )},
                  { href: socialLinks?.linkedin, label: 'LinkedIn', icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )},
                ].map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                    aria-label={link.label}
                    style={{
                      width: 40, height: 40, borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(240,246,255,0.7)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,200,0.15)'; e.currentTarget.style.borderColor = '#00d4c8'; e.currentTarget.style.color = '#00d4c8'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(240,246,255,0.7)'; }}
                  >{link.icon}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: 'rgba(10,22,40,0.7)',
            border: '1px solid rgba(0,212,200,0.15)',
            borderRadius: 20,
            backdropFilter: 'blur(12px)',
            padding: '2.5rem',
          }}>
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontFamily: "'Playfair Display'", fontSize: '1.4rem', color: '#f0f6ff', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ fontFamily: "'DM Sans'", color: 'rgba(240,246,255,0.6)' }}>Thank you for reaching out. I'll get back to you soon.</p>
                <button onClick={() => setStatus('idle')}
                  style={{
                    marginTop: '1.5rem', padding: '0.7rem 1.5rem',
                    background: 'rgba(0,212,200,0.1)', border: '1px solid rgba(0,212,200,0.3)',
                    borderRadius: '50px', color: '#00d4c8',
                    fontFamily: "'DM Sans'", fontSize: '0.88rem', fontWeight: 600,
                    cursor: 'pointer',
                  }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  {[
                    { name: 'from_name', placeholder: 'Your Name', label: 'Name', type: 'text' },
                    { name: 'from_email', placeholder: 'your@email.com', label: 'Email', type: 'email' },
                  ].map(field => (
                    <div key={field.name}>
                      <label style={{ fontFamily: "'Fira Code'", fontSize: '0.72rem', color: '#00d4c8', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase' }}>{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        style={{
                          width: '100%', padding: '0.75rem 1rem',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: 10, color: '#f0f6ff',
                          fontFamily: "'DM Sans'", fontSize: '0.9rem',
                          outline: 'none', transition: 'border-color 0.2s',
                          boxSizing: 'border-box',
                        }}
                        onFocus={e => e.target.style.borderColor = '#00d4c8'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontFamily: "'Fira Code'", fontSize: '0.72rem', color: '#00d4c8', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    placeholder="Project Collaboration / Opportunity"
                    required
                    style={{
                      width: '100%', padding: '0.75rem 1rem',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 10, color: '#f0f6ff',
                      fontFamily: "'DM Sans'", fontSize: '0.9rem',
                      outline: 'none', transition: 'border-color 0.2s',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => e.target.style.borderColor = '#00d4c8'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontFamily: "'Fira Code'", fontSize: '0.72rem', color: '#00d4c8', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Message</label>
                  <textarea
                    name="message"
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    style={{
                      width: '100%', padding: '0.75rem 1rem',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 10, color: '#f0f6ff',
                      fontFamily: "'DM Sans'", fontSize: '0.9rem',
                      outline: 'none', transition: 'border-color 0.2s',
                      resize: 'vertical', boxSizing: 'border-box',
                    }}
                    onFocus={e => e.target.style.borderColor = '#00d4c8'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                {status === 'error' && (
                  <p style={{ color: '#ff6b6b', fontFamily: "'DM Sans'", fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' }}>
                    ❌ Something went wrong. Please try again.
                  </p>
                )}

                <button type="submit" disabled={status === 'sending'} style={{
                  width: '100%', padding: '0.9rem',
                  background: status === 'sending'
                    ? 'rgba(0,212,200,0.3)'
                    : 'linear-gradient(135deg, #00d4c8, #00a8a0)',
                  border: 'none', borderRadius: 12,
                  color: '#050d1a', fontFamily: "'DM Sans'",
                  fontWeight: 700, fontSize: '0.95rem',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(0,212,200,0.3)',
                }}
                onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,212,200,0.5)'; }}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,212,200,0.3)'}
                >
                  {status === 'sending' ? '⏳ Sending...' : '✉ Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: rgba(240,246,255,0.3); }
      `}</style>
    </section>
  );
};

export default Contact;
