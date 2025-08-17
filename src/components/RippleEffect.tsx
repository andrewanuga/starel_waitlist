import React, { useState, useEffect, useRef } from 'react';

interface AbsoluteRippleBackgroundProps {
  className?: string;
  color?: string;
  rippleCount?: number;
  animationDuration?: number;
  maxOpacity?: number;
}

const AbsoluteRippleBackground: React.FC<AbsoluteRippleBackgroundProps> = ({
  className = '',
  color = 'rgba(100, 200, 255, 0.1)',
  rippleCount = 5,
  animationDuration = 8000,
  maxOpacity = 0.2,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [progress, setProgress] = useState(0);

  // Calculate container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({
          width,
          height,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Animation loop
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = (elapsed % animationDuration) / animationDuration;
      setProgress(newProgress);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [animationDuration]);

  // Calculate ripple sizes to cover entire container
  const maxDimension = Math.max(dimensions.width, dimensions.height);
  const baseSize = maxDimension * 0.2;
  const rippleSizes = Array.from({ length: rippleCount }, (_, i) => 
    baseSize * (1 + i * 0.5) // Increasing sizes
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        position: 'relative', // Ensure this is relative for absolute children
        isolation: 'isolate' // Creates new stacking context
      }}
    >
      {rippleSizes.map((size, index) => {
        const rippleProgress = (progress + index / rippleCount) % 1;
        const scale = easeInOutQuad(rippleProgress) * (1 + rippleCount * 0.3);
        const opacity = Math.sin(rippleProgress * Math.PI) * maxOpacity;

        return (
          <div
            key={index}
            className="absolute rounded-full pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              opacity,
              transform: `translate(-50%, -50%) scale(${scale})`,
              transition: 'transform 100ms linear, opacity 100ms linear',
              boxShadow: `inset 0 0 ${size * 0.2}px rgba(255, 255, 255, ${opacity * 0.7})`,
              zIndex: -1, // Ensure it stays behind content
              position: 'absolute' // Explicit absolute positioning
            }}
          />
        );
      })}
    </div>
  );
};

// Easing function for smooth animation
function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export default AbsoluteRippleBackground;