import { motion } from "framer-motion";

export const FloatingMandala = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large rotating mandala - top left */}
      <motion.svg
        className="absolute -top-32 -left-32 w-96 h-96 opacity-10"
        viewBox="0 0 200 200"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="mandalaGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0.3)" />
          </linearGradient>
        </defs>
        {/* Outer petals */}
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 100 100)`}>
            <ellipse
              cx="100"
              cy="30"
              rx="15"
              ry="25"
              fill="none"
              stroke="url(#mandalaGradient1)"
              strokeWidth="1"
            />
            <ellipse
              cx="100"
              cy="50"
              rx="8"
              ry="15"
              fill="none"
              stroke="url(#mandalaGradient1)"
              strokeWidth="0.5"
            />
          </g>
        ))}
        {/* Inner circles */}
        <circle cx="100" cy="100" r="60" fill="none" stroke="url(#mandalaGradient1)" strokeWidth="1" />
        <circle cx="100" cy="100" r="45" fill="none" stroke="url(#mandalaGradient1)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="url(#mandalaGradient1)" strokeWidth="1" />
        {/* Center decoration */}
        {[...Array(8)].map((_, i) => (
          <line
            key={`line-${i}`}
            x1="100"
            y1="70"
            x2="100"
            y2="85"
            stroke="url(#mandalaGradient1)"
            strokeWidth="1"
            transform={`rotate(${i * 45} 100 100)`}
          />
        ))}
      </motion.svg>

      {/* Medium rotating mandala - bottom right */}
      <motion.svg
        className="absolute -bottom-24 -right-24 w-80 h-80 opacity-10"
        viewBox="0 0 200 200"
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="mandalaGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.5)" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
        {/* Diamond petals */}
        {[...Array(16)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 22.5} 100 100)`}>
            <path
              d="M100,20 L110,50 L100,80 L90,50 Z"
              fill="none"
              stroke="url(#mandalaGradient2)"
              strokeWidth="0.5"
            />
          </g>
        ))}
        {/* Concentric circles */}
        <circle cx="100" cy="100" r="70" fill="none" stroke="url(#mandalaGradient2)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="url(#mandalaGradient2)" strokeWidth="1" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="url(#mandalaGradient2)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="25" fill="none" stroke="url(#mandalaGradient2)" strokeWidth="1" />
      </motion.svg>

      {/* Floating ornamental corners */}
      <motion.div
        className="absolute top-10 right-10 w-24 h-24"
        animate={{ 
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
          <path
            d="M50,5 L60,40 L95,50 L60,60 L50,95 L40,60 L5,50 L40,40 Z"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
          />
          <circle cx="50" cy="50" r="15" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-10 w-20 h-20"
        animate={{ 
          rotate: [0, -5, 5, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-15">
          <path
            d="M50,10 L55,45 L90,50 L55,55 L50,90 L45,55 L10,50 L45,45 Z"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      {/* Floating gold particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-primary"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 20, 0],
            x: [0, (Math.random() - 0.5) * 20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, hsl(var(--primary) / 0.08) 0%, transparent 50%),
                       radial-gradient(ellipse at 70% 80%, hsl(var(--primary) / 0.06) 0%, transparent 50%)`,
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating rings */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-full h-full rounded-full border border-primary/10" />
        <div className="absolute inset-4 rounded-full border border-primary/15" />
        <div className="absolute inset-8 rounded-full border border-primary/10" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-24 h-24"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full rounded-full border border-primary/10" />
        <div className="absolute inset-3 rounded-full border border-primary/15" />
      </motion.div>
    </div>
  );
};
