"use client";

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  isBARK?: boolean;
  rotation?: number;
  rotationSpeed?: number;
}

export function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const { theme } = useTheme();
  const btbLogoRef = useRef<HTMLImageElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = '/BARK-logo.png';
    img.onload = () => {
      btbLogoRef.current = img;
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setDimensions({ width, height });
        initParticles(width, height);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const initParticles = (width: number, height: number) => {
    particles.current = [];
    const numParticles = Math.floor((width * height) / 20000);
    const numBARKLogos = Math.floor(numParticles * 0.1);
    
    // Create regular particles
    for (let i = 0; i < numParticles - numBARKLogos; i++) {
      particles.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 2,
        alpha: Math.random() * 40 + 40,
        isBARK: false
      });
    }

    // Create BARK logo particles
    for (let i = 0; i < numBARKLogos; i++) {
      particles.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: 30,
        alpha: Math.random() * 20 + 40,
        isBARK: true,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5)
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameCount = 0;

    const render = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const primaryColor = theme === 'dark' ? [227, 30, 36] : [227, 30, 36];
      
      // Draw connections
      particles.current.forEach((particle, i) => {
        particles.current.forEach((other, j) => {
          if (i !== j) {
            const d = Math.hypot(particle.x - other.x, particle.y - other.y);
            const maxDist = particle.isBARK || other.isBARK ? 120 : 80;
            
            if (d < maxDist) {
              const alpha = (1 - d / maxDist) * 30;
              ctx.strokeStyle = `rgba(${primaryColor.join(',')},${alpha * 0.15})`;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw particles
      particles.current.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        if (particle.isBARK && btbLogoRef.current) {
          particle.rotation! += particle.rotationSpeed!;
          
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate((particle.rotation! * Math.PI) / 180);
          ctx.globalAlpha = particle.alpha / 255;
          ctx.drawImage(
            btbLogoRef.current,
            -particle.size / 2,
            -particle.size / 2,
            particle.size,
            particle.size
          );
          ctx.restore();
        } else {
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate(frameCount * 0.02);
          ctx.beginPath();
          
          // Draw star shape
          for (let i = 0; i < 5; i++) {
            const angle = (Math.PI * 2 * i) / 5;
            const x = Math.cos(angle) * particle.size;
            const y = Math.sin(angle) * particle.size;
            
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
            
            const innerAngle = angle + (Math.PI * 2) / 10;
            const innerX = Math.cos(innerAngle) * (particle.size * 0.4);
            const innerY = Math.sin(innerAngle) * (particle.size * 0.4);
            ctx.lineTo(innerX, innerY);
          }
          
          ctx.closePath();
          ctx.fillStyle = `rgba(${primaryColor.join(',')},${particle.alpha * 0.2})`;
          ctx.fill();
          ctx.restore();
        }
      });

      frameCount++;
      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme, dimensions]);

  return (
    <>
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-gray-50/90 via-background to-background dark:from-gray-950/20 dark:via-background dark:to-background" />
      <div className="fixed inset-0 -z-10 opacity-30">
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </>
  );
}