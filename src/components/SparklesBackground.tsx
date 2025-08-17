import React, { useEffect, useRef, useState } from 'react';

interface SparklesBackgroundProps {
  color?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  count?: number;
  className?: string;
}

interface Sparkle {
  id: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
}

const SparklesBackground: React.FC<SparklesBackgroundProps> = ({
  color = '#ffffff',
  minSize = 1,
  maxSize = 3,
  speed = 1,
  count = 100,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize sparkles
  useEffect(() => {
    if (!containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    setDimensions({ width, height });

    const newSparkles: Sparkle[] = Array.from({ length: count }).map((_, i) => ({
      id: `sparkle-${i}-${Math.random().toString(36).substring(2, 9)}`,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * (maxSize - minSize) + minSize,
      opacity: Math.random() * 0.7 + 0.3,
      delay: Math.random() * 5,
      duration: (Math.random() * 3 + 2) / speed,
    }));

    setSparkles(newSparkles);
  }, [count, minSize, maxSize, speed]);

  // Handle resize
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });

      // Reposition sparkles on resize
      setSparkles(prev => prev.map(sparkle => ({
        ...sparkle,
        x: (sparkle.x / dimensions.width) * width,
        y: (sparkle.y / dimensions.height) * height,
      })));
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden z-0 ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: color,
            opacity: sparkle.opacity,
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.size / 2}px ${color}`,
            animation: `sparkle ${sparkle.duration}s ease-in-out ${sparkle.delay}s infinite alternate`,
            transformOrigin: 'center',
          }}
        />
      ))}

      <style jsx global>{`
        @keyframes sparkle {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SparklesBackground;