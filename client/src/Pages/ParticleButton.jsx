import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const ParticleButton = ({ onClick }) => {
  const buttonRef = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  const canvasRef = useRef(null);
  const ctx = useRef(null);

  // Set canvas context on mount
  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext("2d");
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  }, []);

  // Create particles in 6 divisions of the button
  const createParticles = (x, y, width, height) => {
    const particles = [];
    const divisions = 6; // Divisions of the button
    const divisionWidth = width / divisions;

    for (let i = 0; i < divisions; i++) {
      const divisionX = x - width / 2 + divisionWidth * (i + 0.5); // Center each division

      // Generate particles for each division
      for (let j = 0; j < 100; j++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1;
        const size = Math.random() * 5 + 1;

        const particle = {
          x: divisionX,
          y: y,
          dx: Math.cos(angle) * speed,
          dy: Math.sin(angle) * speed,
          size: size,
          opacity: 1,
        };
        particles.push(particle);
      }
    }
    return particles;
  };

  // Draw particles on the canvas
  const drawParticles = (particles) => {
    if (!canvasRef.current || !ctx.current) return;

    ctx.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    particles.forEach((particle) => {
      ctx.current.beginPath();
      ctx.current.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.current.fillStyle = `rgba(163, 241, 8, ${particle.opacity})`; // Set particle color
      ctx.current.fill();

      // Update particle position and size
      particle.x += particle.dx;
      particle.y += particle.dy;
      particle.opacity -= 0.01;
      particle.size -= 0.05;

      if (particle.opacity <= 0 || particle.size <= 0) {
        particles.splice(particles.indexOf(particle), 1);
      }
    });

    if (particles.length > 0) {
      requestAnimationFrame(() => drawParticles(particles)); // Keep animating particles
    }
  };

  // Start the animation
  const startAnimation = () => {
    if (animationStarted) return; // Prevent re-triggering animation

    setAnimationStarted(true);

    const rect = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    const buttonWidth = rect.width;
    const buttonHeight = rect.height;

    const particles = createParticles(buttonCenterX, buttonCenterY, buttonWidth, buttonHeight);

    // Animate text parts of the button (spans)
    const buttonSpans = buttonRef.current.querySelectorAll("span");

    buttonSpans.forEach((span, index) => {
      gsap.to(span, {
        opacity: 0,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        duration: 0.5,
        delay: index * 0.1,
        ease: "power1.out",
        onComplete: () => {
          if (index === buttonSpans.length - 1) {
            drawParticles(particles); // Start drawing particles
            gsap.to(canvasRef.current, { visibility: "visible", duration: 0.5 });
          }
        },
      });
    });

    // Hide the entire button after animation
    gsap.to(buttonRef.current, {
      opacity: 0,
      scale: 0.1,
      duration: 1,
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate3d(-50%, -50%, 0)",
          visibility: "hidden", // Initially hidden, reveal during animation
        }}
      ></canvas>
      <button
        ref={buttonRef}
        onClick={(e) => {
          startAnimation();
          onClick(e); // Call parent onClick to change state
        }}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          background: "linear-gradient(45deg, #6ee7b7, #3b82f6)",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          outline: "none",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          transition: "0.3s ease",
        }}
      >
        <span>Don't </span><span>Click </span><span>Me!</span>
      </button>
    </div>
  );
};

export default ParticleButton;
