import React, { useEffect, useRef } from "react";

const CursorTracker = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbles = [];

    // Resize canvas on window resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);

    // Bubble class for animation
    class Bubble {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 6 + 2; // Random size
        this.opacity = 1;
        this.speedX = Math.random() * 2 - 1; // Horizontal movement
        this.speedY = Math.random() * 2 - 1; // Vertical movement
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.02; // Fade out effect
      }

      draw() {
        ctx.fillStyle = `rgba(0, 150, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Mouse movement event
    const createBubble = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      bubbles.push(new Bubble(x, y));
    };
    window.addEventListener("mousemove", createBubble);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].update();
        bubbles[i].draw();

        if (bubbles[i].opacity <= 0) {
          bubbles.splice(i, 1); // Remove faded bubbles
          i--;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup event listeners
    return () => {
      window.removeEventListener("mousemove", createBubble);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
};

export default CursorTracker;
