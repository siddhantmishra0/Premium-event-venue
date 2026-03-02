import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Crown, 
  Utensils, 
  Sparkles, 
  Music, 
  Camera, 
  Users,
  Check,
  ArrowRight
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const venueFeatures = [
  "Spacious hall accommodating 200-500 guests",
  "Central AC with modern ventilation",
  "Elegant lighting & décor fixtures",
  "Separate bridal room & changing area",
  "Ample parking for 50+ vehicles",
  "Generator backup for uninterrupted power",
  "State-of-the-art sound system",
  "Stage & mandap setup options",
];

const cateringHighlights = [
  "Authentic Maharashtrian cuisine",
  "North Indian specialties",
  "South Indian delicacies",
  "Chinese & Continental options",
  "Live cooking counters",
  "Customizable menus",
  "Pure vegetarian options",
  "Premium non-veg selections",
];

const packages = [
  {
    name: "Silver",
    subtitle: "Intimate Celebrations",
    capacity: "Up to 200 guests",
    features: [
      "Venue rental for 6 hours",
      "Basic decoration package",
      "Standard catering menu",
      "Sound system access",
      "Bridal room access",
    ],
    popular: false,
  },
  {
    name: "Gold",
    subtitle: "Complete Wedding",
    capacity: "Up to 350 guests",
    features: [
      "Venue rental for 8 hours",
      "Premium decoration package",
      "Deluxe catering menu",
      "DJ & sound system",
      "Stage decoration",
      "Photography corners",
      "Valet parking service",
    ],
    popular: true,
  },
  {
    name: "Platinum",
    subtitle: "Grand Celebration",
    capacity: "Up to 500 guests",
    features: [
      "Venue rental for 12 hours",
      "Luxury decoration package",
      "Premium catering with live counters",
      "DJ & live music arrangement",
      "Complete stage & mandap setup",
      "Photography & videography zones",
      "Valet parking",
      "Event coordinator",
      "Complimentary stay for bride/groom",
    ],
    popular: false,
  },
];

const addOnServices = [
  {
    icon: Sparkles,
    title: "Decoration",
    description: "Custom floral arrangements, lighting, and thematic decorations to match your vision.",
  },
  {
    icon: Music,
    title: "DJ & Music",
    description: "Professional DJ services with premium sound systems and live band arrangements.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Partner photographers for candid, traditional, and cinematic coverage.",
  },
  {
    icon: Users,
    title: "Event Planning",
    description: "Dedicated coordinators to manage every detail of your celebration.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
                Services & <span className="text-primary">Packages</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Comprehensive solutions for your perfect celebration
              </p>
            </motion.div>
          </div>
        </section>

        {/* Venue Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="w-8 h-8 text-primary" />
                  <span className="text-primary font-medium tracking-widest uppercase text-sm">
                    The Venue
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Grand <span className="text-primary">Banquet Hall</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our magnificent banquet hall is designed to host celebrations of all sizes with elegance and comfort. From intimate gatherings to grand weddings, every detail is crafted to perfection.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {venueFeatures.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
                  alt="Grand Banquet Hall"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-elegant"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Catering Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
                  alt="Catering Service"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-elegant"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Utensils className="w-8 h-8 text-primary" />
                  <span className="text-primary font-medium tracking-widest uppercase text-sm">
                    Catering
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Shree Bhagawati <span className="text-primary">Catering</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Delight your guests with our exquisite culinary offerings. Our experienced chefs craft authentic flavors that celebrate the rich traditions of Indian cuisine while catering to modern palates.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cateringHighlights.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                Packages
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
                Choose Your <span className="text-primary">Package</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tailored packages to suit celebrations of every scale. Contact us for customized pricing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card
                    className={`relative h-full ${
                      pkg.popular
                        ? "border-primary shadow-gold"
                        : "border-border shadow-elegant"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <CardHeader className="text-center pt-8">
                      <CardTitle className="font-serif text-3xl text-foreground">
                        {pkg.name}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {pkg.subtitle}
                      </CardDescription>
                      <p className="text-muted-foreground text-sm mt-2">{pkg.capacity}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className={`w-full ${
                          pkg.popular
                            ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                            : "bg-muted hover:bg-muted/80 text-foreground"
                        }`}
                      >
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                Additional Services
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-foreground mt-2 mb-4">
                Complete Your <span className="text-primary">Celebration</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOnServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-card rounded-xl p-8 text-center shadow-elegant"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center mt-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link to="/contact">
                  Request a Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
