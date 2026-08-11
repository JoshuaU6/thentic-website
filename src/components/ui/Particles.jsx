import { useEffect, useRef } from 'react';

export default function Particles({ count = 40 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = [];

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      const size = Math.random() * 6 + 2;
      const x = Math.random() * 100;
      const duration = Math.random() * 12 + 8;
      const delay = Math.random() * -duration;
      const opacity = Math.random() * 0.35 + 0.05;

      el.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        left: ${x}%;
        bottom: -10px;
        background: radial-gradient(circle, #F0C35A, #C9A84C);
        filter: blur(${size > 5 ? 2 : 0}px);
        animation: particle-drift ${duration}s ${delay}s linear infinite;
        opacity: ${opacity};
        pointer-events: none;
      `;

      container.appendChild(el);
      particles.push(el);
    }

    return () => particles.forEach(p => p.remove());
  }, [count]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
}
