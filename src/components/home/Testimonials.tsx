import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul Sharma",
    event: "Wedding Reception",
    rating: 5,
    review:
      "Mangalya made our dream wedding come true! The venue was breathtaking, the food was exceptional, and the staff went above and beyond. Our guests are still talking about how beautiful everything was.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Amit & Sneha Patil",
    event: "Engagement Ceremony",
    rating: 5,
    review:
      "From the moment we visited Mangalya, we knew it was the perfect venue. The team handled everything professionally and made our engagement a memorable celebration. Highly recommend!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Deepak & Meera Joshi",
    event: "Wedding Ceremony",
    rating: 5,
    review:
      "The attention to detail was incredible. XXXXXXX Catering served the most delicious food, and the decoration team transformed the hall into a fairy tale setting. Thank you for an unforgettable day!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Vijay & Anita Desai",
    event: "Anniversary Celebration",
    rating: 5,
    review:
      "We celebrated our 25th anniversary at Mangalya and it was perfect. The ambiance, service, and food quality exceeded our expectations. A truly royal experience!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-foreground mt-2 mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the families who celebrated their special moments with us.
          </p>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon with Glow */}
          <motion.div 
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-gold z-10"
            animate={{ 
              boxShadow: [
                "0 0 20px hsla(43, 65%, 53%, 0.3)",
                "0 0 40px hsla(43, 65%, 53%, 0.5)",
                "0 0 20px hsla(43, 65%, 53%, 0.3)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Quote className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          {/* Testimonial Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="text-center"
              >
                {/* Animated Stars */}
                <div className="flex justify-center gap-1 mb-6 mt-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      <Star className="w-5 h-5 text-primary fill-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Review with Typing Effect Feel */}
                <motion.p 
                  className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  "{testimonials[current].review}"
                </motion.p>

                {/* Author with Animation */}
                <motion.div 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-primary"
                    whileHover={{ scale: 1.1 }}
                  />
                  <h4 className="font-serif text-xl font-semibold text-foreground">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-primary text-sm">
                    {testimonials[current].event}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation with Hover Effects */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={prev}
                className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </motion.button>
              <motion.button
                onClick={next}
                className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </motion.button>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className="relative w-2 h-2 rounded-full"
                  whileHover={{ scale: 1.3 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span className={`absolute inset-0 rounded-full transition-colors ${
                    index === current ? "bg-primary" : "bg-primary/30"
                  }`} />
                  {index === current && (
                    <motion.span
                      className="absolute -inset-1 rounded-full border border-primary/50"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
