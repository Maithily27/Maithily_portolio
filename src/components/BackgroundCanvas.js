import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        teal: Math.random() > 0.6,
      });
    }

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep layered background gradient
      const bg = ctx.createRadialGradient(
        canvas.width * 0.3, canvas.height * 0.2, 0,
        canvas.width * 0.3, canvas.height * 0.2, canvas.width * 0.8
      );
      bg.addColorStop(0, '#0a1e35');
      bg.addColorStop(0.5, '#061220');
      bg.addColorStop(1, '#030b14');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Teal ambient glow top-right
      const glow1 = ctx.createRadialGradient(
        canvas.width * 0.85, canvas.height * 0.1, 0,
        canvas.width * 0.85, canvas.height * 0.1, canvas.width * 0.4
      );
      glow1.addColorStop(0, 'rgba(0, 212, 200, 0.06)');
      glow1.addColorStop(1, 'transparent');
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Gold ambient glow bottom-left
      const glow2 = ctx.createRadialGradient(
        canvas.width * 0.1, canvas.height * 0.9, 0,
        canvas.width * 0.1, canvas.height * 0.9, canvas.width * 0.35
      );
      glow2.addColorStop(0, 'rgba(240, 192, 96, 0.04)');
      glow2.addColorStop(1, 'transparent');
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Moving pulsing orb
      const orbX = canvas.width * 0.5 + Math.sin(t * 0.0008) * canvas.width * 0.1;
      const orbY = canvas.height * 0.5 + Math.cos(t * 0.0006) * canvas.height * 0.1;
      const orb = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, canvas.width * 0.25);
      orb.addColorStop(0, 'rgba(0, 212, 200, 0.025)');
      orb.addColorStop(1, 'transparent');
      ctx.fillStyle = orb;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines (subtle)
      ctx.strokeStyle = 'rgba(0, 212, 200, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.teal
          ? `rgba(0, 212, 200, ${p.alpha})`
          : `rgba(240, 192, 96, ${p.alpha * 0.6})`;
        ctx.fill();
      });

      // Connect nearby particles
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 212, 200, ${0.07 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default BackgroundCanvas;
