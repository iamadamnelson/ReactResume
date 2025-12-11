import React, { useEffect, useRef } from 'react';

export const DataStreamBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: { x: number; y: number; originalY: number; offset: number }[] = [];

    // Configuration
    const particleSpacing = 40; // Space between dots
    const waveHeight = 60; // How high the wave goes
    const waveLength = 0.01; // How tight the waves are
    const speed = 0.008; // How fast it flows
    const rows = 15; // Number of wave lines
    
    // Initialize Canvas Size
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    // Create Grid of Particles
    const initParticles = () => {
      particles = [];
      const cols = Math.ceil(width / particleSpacing) + 2;
      const startY = height / 2 - (rows * particleSpacing) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          particles.push({
            x: c * particleSpacing,
            y: startY + r * particleSpacing,
            originalY: startY + r * particleSpacing,
            offset: c // Used for wave timing
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    let time = 0;

    const render = () => {
      time += speed;
      ctx.clearRect(0, 0, width, height);

      // Check Theme for Colors
      const isDark = document.documentElement.classList.contains('dark');
      
      // Dynamic Colors based on Theme
      const particleColor = isDark ? 'rgba(34, 211, 238, ' : 'rgba(99, 102, 241, '; // Cyan-400 vs Indigo-500
      const lineColor = isDark ? 'rgba(34, 211, 238, ' : 'rgba(99, 102, 241, ';
      
      // Update Particles
      particles.forEach((p, i) => {
        // Sine wave movement
        // We add depth by making different rows move slightly differently
        const rowEffect = (Math.floor(i / (width / particleSpacing))) * 0.5;
        p.y = p.originalY + Math.sin((p.offset * waveLength) + time + rowEffect) * waveHeight;
      });

      // Draw Connections (Plexus effect)
      ctx.lineWidth = 1;
      const cols = Math.ceil(width / particleSpacing) + 2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Connect to right neighbor
        if ((i + 1) % cols !== 0 && i + 1 < particles.length) {
          const nextP = particles[i + 1];
          const dist = Math.abs(p.y - nextP.y); // Calculate stretch for opacity
          const opacity = Math.max(0, 0.3 - dist * 0.005); // Fade out if stretched too much
          
          ctx.beginPath();
          ctx.strokeStyle = lineColor + opacity + ')';
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(nextP.x, nextP.y);
          ctx.stroke();
        }

        // Connect to bottom neighbor
        if (i + cols < particles.length) {
          const bottomP = particles[i + cols];
          
          ctx.beginPath();
          // Vertical lines are subtler
          ctx.strokeStyle = lineColor + '0.1)'; 
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(bottomP.x, bottomP.y);
          ctx.stroke();
        }

        // Draw Particle Dot
        ctx.beginPath();
        // Dots in the middle of the screen are larger/brighter (focus area)
        const distanceFromCenter = Math.abs(height/2 - p.y);
        const sizeFade = Math.max(0.5, 3 - distanceFromCenter * 0.005);
        const alphaFade = Math.max(0.1, 0.6 - distanceFromCenter * 0.001);

        ctx.fillStyle = particleColor + alphaFade + ')';
        ctx.arc(p.x, p.y, sizeFade, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-60 dark:opacity-40 transition-opacity duration-1000"
      />
      {/* Vignette overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-zinc-50 dark:from-black dark:via-transparent dark:to-black opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 via-transparent to-zinc-50 dark:from-black dark:via-transparent dark:to-black opacity-60" />
    </div>
  );
};