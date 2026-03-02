import { motion } from "framer-motion";
import { Users, Calendar, Award, Utensils } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Guest Capacity",
    description: "Spacious halls for grand celebrations",
  },
  {
    icon: Calendar,
    value: "20+",
    label: "Years of Excellence",
    description: "Trusted by generations of families",
  },
  {
    icon: Award,
    value: "1000+",
    label: "Events Hosted",
    description: "Weddings, receptions & celebrations",
  },
  {
    icon: Utensils,
    value: "100+",
    label: "Menu Items",
    description: "Authentic multi-cuisine catering",
  },
];

export const Highlights = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <motion.span 
            className="text-primary font-medium tracking-widest uppercase text-sm inline-block"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.5 }}
          >
            Our Legacy
          </motion.span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 mt-2">
            Why Choose <span className="text-primary">Mangalya</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Where tradition meets elegance, and every celebration becomes a cherished memory
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StaggerItem key={stat.label}>
              <motion.div
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 40px -10px hsla(43, 65%, 53%, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-card rounded-lg p-8 text-center shadow-elegant border border-border overflow-hidden"
              >
                {/* Animated Background Gradient on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Icon with Pulse */}
                <motion.div 
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <stat.icon className="w-8 h-8 text-primary" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/30"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </motion.div>

                {/* Counter Animation */}
                <motion.h3 
                  className="font-serif text-4xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="font-semibold text-foreground mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
                
                {/* Decorative corners with animation */}
                <motion.div 
                  className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
