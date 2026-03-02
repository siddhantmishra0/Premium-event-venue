import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Crown, Utensils, Sparkles, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const services = [
  {
    icon: Crown,
    title: "Grand Banquet Hall",
    description:
      "Our magnificent hall accommodates up to 500 guests with elegant décor, modern amenities, and a royal ambiance perfect for weddings and receptions.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
  },
  {
    icon: Utensils,
    title: "Shree Bhagawati Catering",
    description:
      "Savor authentic flavors with our in-house catering service offering vegetarian & non-vegetarian cuisines, from traditional Maharashtrian to North Indian delicacies.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Stunning Decorations",
    description:
      "Transform your venue with our exquisite floral arrangements, lighting designs, and thematic decorations that bring your vision to life.",
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Music,
    title: "Entertainment & DJ",
    description:
      "Keep your guests entertained with our premium sound systems, professional DJ services, and live music arrangements.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
  },
];

export const FeaturedServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={sectionRef} className="py-20 bg-muted relative overflow-hidden">
      {/* Parallax Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div
          className="w-full h-[150%]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Everything for Your <span className="text-primary">Perfect Day</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From venue to catering, decorations to entertainment - we provide comprehensive services to make your celebration truly memorable.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-500"
              >
                {/* Image with Parallax and Zoom */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Floating Icon Badge */}
                  <motion.div 
                    className="absolute bottom-4 left-4 flex items-center gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-gold"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </motion.div>

                  {/* Shine Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.7 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-gold"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.4} className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};
