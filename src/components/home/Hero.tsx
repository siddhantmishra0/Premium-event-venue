import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingMandala } from "./FloatingMandala";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')`,
          y: bgY,
          scale,
        }}
      />
      
      {/* Animated Overlay */}
      <motion.div 
        className="absolute inset-0 bg-hero-overlay"
        style={{ opacity }}
      />

      {/* Floating Mandala Pattern */}
      <FloatingMandala />
      
      {/* Floating Decorative Elements with Mouse Parallax */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-primary/30 rotate-45"
        animate={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
          rotate: 45 + mousePosition.x * 0.1,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 border border-primary/20 rounded-full"
        animate={{
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
          scale: 1 + Math.abs(mousePosition.x) * 0.01,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute bottom-32 right-10 w-20 h-20 border border-primary/25 rotate-12"
        animate={{
          x: mousePosition.x * 0.4,
          y: mousePosition.y * 0.4,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-16 h-16 bg-primary/10 rounded-full blur-xl"
        animate={{
          x: mousePosition.x * -0.6,
          y: mousePosition.y * -0.6,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Floating Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
      
      {/* Content with Parallax */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 pt-20 text-center"
        style={{ y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Rating Badge with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-primary/30 shadow-gold"
          >
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-primary font-medium text-sm">4.3 Rated on Google</span>
          </motion.div>

          {/* Main Heading with Character Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
          >
            <motion.span 
              className="text-primary inline-block"
              animate={{ 
                textShadow: [
                  "0 0 20px hsla(43, 65%, 53%, 0.3)",
                  "0 0 40px hsla(43, 65%, 53%, 0.5)",
                  "0 0 20px hsla(43, 65%, 53%, 0.3)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              मांगल्य
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-2xl md:text-3xl text-primary/90 tracking-wider mb-2"
          >
            MANGALYA MANGAL KARYALAY
          </motion.p>

          {/* Animated Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-24 h-0.5 bg-gradient-gold mx-auto mb-8 origin-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 font-light mb-4"
          >
            Where Dreams Become Celebrations
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-white/70 max-w-2xl mx-auto mb-12"
          >
            Experience the grandeur of traditional Indian celebrations at Mumbai's premier wedding venue. 
            From intimate gatherings to grand celebrations, we make every moment unforgettable.
          </motion.p>

          {/* CTA Buttons with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-gold group relative overflow-hidden"
              >
                <Link to="/contact">
                  <span className="relative z-10 flex items-center">
                    Book Your Date
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary via-gold-light to-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-6 backdrop-blur-sm"
              >
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator with Pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2 relative"
          >
            <motion.div
              animate={{ height: ["0%", "30%", "0%"] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 bg-primary rounded-full"
            />
            <motion.div
              className="absolute -inset-2 border border-primary/20 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
