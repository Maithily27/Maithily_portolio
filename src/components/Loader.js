import React from 'react';

const Loader = () => (
  <div style={{
    position: 'fixed', inset: 0,
    background: '#030b14',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    zIndex: 9999,
    fontFamily: "'DM Sans', sans-serif",
  }}>
    {/* Animated logo ring */}
    <div style={{ position: 'relative', marginBottom: '2rem' }}>
      <div style={{
        width: 90, height: 90,
        borderRadius: '50%',
        border: '2px solid rgba(0,212,200,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        {/* Spinning ring */}
        <div style={{
          position: 'absolute', inset: -4,
          borderRadius: '50%',
          border: '3px solid transparent',
          borderTopColor: '#00d4c8',
          borderRightColor: '#f0c060',
          animation: 'spin 1.2s linear infinite',
        }} />
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.6rem',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #00d4c8, #f0c060)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>MG</span>
      </div>
    </div>

    <h2 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.4rem',
      fontWeight: 700,
      color: '#f0f6ff',
      marginBottom: '0.4rem',
      letterSpacing: '0.05em',
    }}>Maithily Gondode</h2>

    <p style={{
      fontFamily: "'Fira Code', monospace",
      fontSize: '0.75rem',
      color: '#00d4c8',
      letterSpacing: '0.2em',
      marginBottom: '2rem',
    }}>DATA SCIENCE & WEB DEV</p>

    {/* Progress bar */}
    <div style={{
      width: 200, height: 2,
      background: 'rgba(0,212,200,0.15)',
      borderRadius: 2, overflow: 'hidden',
    }}>
      <div style={{
        height: '100%',
        background: 'linear-gradient(90deg, #00d4c8, #f0c060)',
        borderRadius: 2,
        animation: 'load 2s ease-in-out forwards',
      }} />
    </div>

    <style>{`
      @keyframes spin { to { transform: rotate(360deg); } }
      @keyframes load { from { width: 0; } to { width: 100%; } }
    `}</style>
  </div>
);

export default Loader;
