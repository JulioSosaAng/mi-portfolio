import React, { useEffect, useRef } from 'react';

const DataNetworkCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Detección de móvil para optimizar partículas
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 65;
    const connectionDistance = isMobile ? 95 : 140;
    const mouseConnectionDistance = 160;

    let mouse = {
      x: null,
      y: null,
    };

    // Ajuste de resolución (Retina / High DPI)
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();

    // Creación de partículas (Nodos de datos)
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.55;
        this.vy = (Math.random() - 0.5) * 0.55;
        this.baseRadius = Math.random() * 1.8 + 1.2;
        this.radius = this.baseRadius;
        // ~18% de nodos son clusters con anillo concéntrico (estilo red de la referencia)
        this.isCluster = Math.random() < 0.18;
        this.alpha = Math.random() * 0.5 + 0.3;
        this.pulseAngle = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Rebote suave en los bordes de la ventana
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Pulsación sutil
        this.pulseAngle += this.pulseSpeed;
        this.radius = this.baseRadius + Math.sin(this.pulseAngle) * 0.4;
      }

      draw() {
        ctx.save();
        ctx.fillStyle = `rgba(0, 188, 212, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // Si es un nodo de cluster, dibujar halo concéntrico exterior
        if (this.isCluster) {
          ctx.strokeStyle = `rgba(0, 188, 212, ${this.alpha * 0.45})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 2.8, 0, Math.PI * 2);
          ctx.stroke();

          // Resplandor difuso
          ctx.fillStyle = `rgba(0, 188, 212, ${this.alpha * 0.15})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 4.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    // Variable de tiempo para las ondas de flujo de datos
    let time = 0;

    // Dibujar ondas fluidas de fondo (Data Stream Waves)
    const drawDataWaves = () => {
      time += 0.004;
      const waveCount = 3;

      for (let i = 0; i < waveCount; i++) {
        ctx.save();
        ctx.beginPath();
        const baseHeight = height * (0.35 + i * 0.18);
        const amplitude = 35 + i * 15;
        const wavelength = 0.0018 - i * 0.0003;
        const opacity = 0.045 + i * 0.02;

        ctx.strokeStyle = `rgba(0, 188, 212, ${opacity})`;
        ctx.lineWidth = 1.2;

        for (let x = 0; x <= width; x += 12) {
          const y =
            baseHeight +
            Math.sin(x * wavelength + time + i * 1.5) * amplitude +
            Math.cos((x * wavelength) / 2 + time * 0.7) * (amplitude * 0.5);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.restore();
      }
    };

    // Bucle de renderizado
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Dibujar ondas fluidas
      drawDataWaves();

      // 2. Conectar partículas cercanas entre sí
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.22;
            ctx.strokeStyle = `rgba(0, 188, 212, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // 3. Conexión interactiva con el mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseConnectionDistance) {
            const mouseAlpha = (1 - dist / mouseConnectionDistance) * 0.45;
            ctx.strokeStyle = `rgba(0, 230, 255, ${mouseAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Eventos de ratón
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Pausar animación cuando la pestaña está oculta para ahorrar batería/CPU
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animate();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
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
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
};

export default DataNetworkCanvas;
