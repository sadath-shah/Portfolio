import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const dotsRef = useRef([]);
  const pulsesRef = useRef([]);
  const lastPulseTimeRef = useRef(0);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = () => {
      return (('ontouchstart' in window) ||
              (navigator.maxTouchPoints > 0) ||
              (navigator.msMaxTouchPoints > 0));
    };

    if (prefersReducedMotion || isTouchDevice()) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize dots
    const initializeDots = () => {
      dotsRef.current = [];
      const dotCount = Math.floor((canvas.width * canvas.height) / 15000);

      for (let i = 0; i < dotCount; i++) {
        dotsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          originalX: 0,
          originalY: 0,
          glowIntensity: 0,
        });
      }

      dotsRef.current.forEach(dot => {
        dot.originalX = dot.x;
        dot.originalY = dot.y;
      });
    };
    initializeDots();

    // Mouse tracking with throttle
    let lastMouseUpdate = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastMouseUpdate > 16) { // ~60fps
        mousePos.current = { x: e.clientX, y: e.clientY };
        lastMouseUpdate = now;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create a new pulse on a random connection
    const createNewPulse = () => {
      const now = Date.now();
      // Only create a new pulse every 800-1500ms
      if (now - lastPulseTimeRef.current < 800 + Math.random() * 700) {
        return;
      }

      const dots = dotsRef.current;
      if (dots.length < 2) return;

      // Find a random dot and a nearby dot
      const startDotIndex = Math.floor(Math.random() * dots.length);
      const startDot = dots[startDotIndex];
      const nearbyDots = [];

      dots.forEach((dot, index) => {
        if (index !== startDotIndex) {
          const dx = dot.x - startDot.x;
          const dy = dot.y - startDot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            nearbyDots.push({ dot, index });
          }
        }
      });

      if (nearbyDots.length > 0) {
        const targetData = nearbyDots[Math.floor(Math.random() * nearbyDots.length)];
        pulsesRef.current.push({
          startX: startDot.x,
          startY: startDot.y,
          endX: targetData.dot.x,
          endY: targetData.dot.y,
          progress: 0,
          duration: 1000 + Math.random() * 500, // 1-1.5 seconds
        });
        lastPulseTimeRef.current = now;
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cursorGlowRadius = 200;
      const dots = dotsRef.current;

      // Update and draw dots
      dots.forEach((dot, index) => {
        // Slow drift
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        // Keep within bounds
        dot.x = Math.max(0, Math.min(canvas.width, dot.x));
        dot.y = Math.max(0, Math.min(canvas.height, dot.y));

        // Calculate distance to cursor
        const dx = dot.x - mousePos.current.x;
        const dy = dot.y - mousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Subtle glow near cursor
        if (distance < cursorGlowRadius) {
          dot.glowIntensity = Math.max(dot.glowIntensity * 0.95, 1 - (distance / cursorGlowRadius) * 0.6);
        } else {
          dot.glowIntensity *= 0.95;
        }

        // Draw dot
        const baseOpacity = 0.3;
        const glowOpacity = baseOpacity + dot.glowIntensity * 0.3;
        ctx.fillStyle = `rgba(255, 255, 255, ${glowOpacity})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.5 + dot.glowIntensity * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections to nearby dots
        for (let j = index + 1; j < dots.length; j++) {
          const otherDot = dots[j];
          const dx2 = otherDot.x - dot.x;
          const dy2 = otherDot.y - dot.y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance2 < 100) {
            const opacity = (1 - distance2 / 100) * 0.1;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.stroke();
          }
        }
      });

      // Update and draw pulses
      const now = Date.now();
      pulsesRef.current = pulsesRef.current.filter(pulse => {
        const elapsedTime = now - pulse.startTime || 0;
        pulse.progress = Math.min(elapsedTime / pulse.duration, 1);

        if (pulse.progress < 1) {
          // Calculate pulse position along the line
          const x = pulse.startX + (pulse.endX - pulse.startX) * pulse.progress;
          const y = pulse.startY + (pulse.endY - pulse.startY) * pulse.progress;

          // Draw pulse with fade effect
          const opacity = Math.max(0, 1 - pulse.progress) * 0.4;
          const pulseSize = 2 + pulse.progress * 0.5;

          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.shadowColor = `rgba(200, 220, 255, ${opacity * 0.5})`;
          ctx.shadowBlur = 4;
          ctx.beginPath();
          ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowColor = 'transparent';

          return true; // Keep pulse
        }
        return false; // Remove completed pulse
      });

      // Periodically create new pulses
      createNewPulse();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
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

export default AnimatedBackground;
