import { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TrailParticle {
  id: number;
  x: number;
  y: number;
}

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<TrailParticle[]>([]);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    setIsVisible(true);

    // Add trail particle
    const newParticle: TrailParticle = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };

    setTrail((prev) => [...prev.slice(-8), newParticle]);
  }, [cursorX, cursorY]);

  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  // Clean up old trail particles
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(-6));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Trail particles */}
      {trail.map((particle, index) => (
        <motion.div
          key={particle.id}
          className="fixed pointer-events-none z-[9998]"
          initial={{ 
            x: particle.x - 3, 
            y: particle.y - 3, 
            opacity: 0.6,
            scale: 1 
          }}
          animate={{ 
            opacity: 0, 
            scale: 0,
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.5) 100%)`,
          }}
        />
      ))}

      {/* Main cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div 
          className="rounded-full border-2 border-primary"
          style={{
            width: isHovering ? 40 : 32,
            height: isHovering ? 40 : 32,
            transition: "width 0.2s, height 0.2s",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      >
        <div 
          className="w-2 h-2 rounded-full bg-primary"
          style={{
            boxShadow: "0 0 10px hsl(var(--primary) / 0.5)",
          }}
        />
      </motion.div>
    </>
  );
};
