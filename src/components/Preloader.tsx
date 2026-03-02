import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-maroon-dark via-maroon to-maroon-light"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated mandala pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.div
          className="w-[600px] h-[600px] border-2 border-gold rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] border border-gold rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] border border-gold/50 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated logo/emblem */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 border-4 border-gold rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner decorative ring */}
            <motion.div
              className="absolute inset-2 border-2 border-gold-light/50 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Center emblem */}
            <motion.div
              className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold"
              animate={{ 
                boxShadow: [
                  "0 0 20px hsla(43, 65%, 53%, 0.4)",
                  "0 0 40px hsla(43, 65%, 53%, 0.6)",
                  "0 0 20px hsla(43, 65%, 53%, 0.4)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-serif text-3xl font-bold text-maroon-dark">म</span>
            </motion.div>

            {/* Decorative dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gold rounded-full"
                style={{
                  left: `calc(50% + ${Math.cos((i * Math.PI * 2) / 8) * 56}px)`,
                  top: `calc(50% + ${Math.sin((i * Math.PI * 2) / 8) * 56}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h1 className="font-serif text-3xl md:text-4xl text-gold mb-2">
            मांगल्य मंगल कार्यालय
          </h1>
          <motion.p
            className="text-ivory/70 text-sm tracking-[0.3em] uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Where Dreams Become Celebrations
          </motion.p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-64 h-1 bg-ivory/10 rounded-full overflow-hidden"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-gold rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="mt-4 text-ivory/50 text-xs tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Preparing your experience...
        </motion.p>
      </div>

      {/* Corner ornaments */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
      <motion.div
        className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-gold/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-gold/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      />
    </motion.div>
  );
};
