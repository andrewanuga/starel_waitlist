import React, { useRef, useEffect, useState } from 'react';

interface ParticleAnimationProps {
  background?: string;
  particleColor?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleDensity?: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  phase: number;
  phaseSpeed: number;
}

const ParticleAnimation: React.FC<ParticleAnimationProps> = ({
  background = '#0d47a1',
  particleColor = '#ffffff',
  minSize = 1,
  maxSize = 3,
  speed = 4,
  particleDensity = 120,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationFrameRef = useRef<number>(0);

  // Adjust canvas size on mount and resize
  const resizeCanvas = () => {
    if (!canvasRef.current || !containerRef.current) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = containerRef.current.getBoundingClientRect();

    canvasRef.current.width = rect.width * dpr;
    canvasRef.current.height = rect.height * dpr;

    if (ctxRef.current) {
      ctxRef.current.scale(dpr, dpr);
    }
  };

  const generateParticles = (): Particle[] => {
    const newParticles: Particle[] = [];
    const count = particleDensity;

    for (let i = 0; i < count; i++) {
      const baseSpeed = 0.05;
      const speedVariance = Math.random() * 0.3 + 0.7;

      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (maxSize - minSize) + minSize,
        opacity: Math.random() * 0.5 + 0.3,
        vx: (Math.random() - 0.5) * baseSpeed * speedVariance * speed,
        vy: ((Math.random() - 0.5) * baseSpeed - baseSpeed * 0.3) * speedVariance * speed,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.015,
      });
    }

    return newParticles;
  };

  const updateAndDrawParticles = () => {
    if (!ctxRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);

    setParticles(prevParticles => 
      prevParticles.map(particle => {
        let newX = particle.x + particle.vx;
        let newY = particle.y + particle.vy;

        if (newX < -2) newX = 102;
        if (newX > 102) newX = -2;
        if (newY < -2) newY = 102;
        if (newY > 102) newY = -2;

        const newPhase = (particle.phase + particle.phaseSpeed) % (Math.PI * 2);
        const opacity = 0.3 + (Math.sin(newPhase) * 0.3 + 0.3);

        // Draw particle
        ctxRef.current!.beginPath();
        ctxRef.current!.arc(
          (newX * canvas.width) / 100,
          (newY * canvas.height) / 100,
          particle.size,
          0,
          Math.PI * 2
        );
        ctxRef.current!.fillStyle = `${particleColor}${Math.floor(opacity * 255)
          .toString(16)
          .padStart(2, '0')}`;
        ctxRef.current!.fill();

        return {
          ...particle,
          x: newX,
          y: newY,
          phase: newPhase,
          opacity,
        };
      })
    );

    animationFrameRef.current = requestAnimationFrame(updateAndDrawParticles);
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    ctxRef.current = canvasRef.current.getContext('2d');
    resizeCanvas();
    setParticles(generateParticles());

    // Set up resize observer
    const resizeObserver = new ResizeObserver(resizeCanvas);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(updateAndDrawParticles);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden will-change-transform"
      style={{ background }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default ParticleAnimation;