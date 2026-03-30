import { motion } from "framer-motion";
import { Heart, Target, Users, Award } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const values = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description:
      "Every celebration we host is crafted with love and attention to detail, ensuring your event is nothing short of perfect.",
  },
  {
    icon: Target,
    title: "Commitment to Quality",
    description:
      "From our culinary offerings to our service standards, we maintain the highest quality in everything we do.",
  },
  {
    icon: Users,
    title: "Family-Centered Service",
    description:
      "We treat every family like our own, understanding the significance of your celebrations and traditions.",
  },
  {
    icon: Award,
    title: "Legacy of Trust",
    description:
      "Over two decades of hosting celebrations has earned us the trust of thousands of families in Mumbai.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')`,
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
                About <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Discover the story behind Mumbai's cherished wedding venue
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-medium tracking-widest uppercase text-sm">
                  Our Story
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                  Two Decades of <span className="text-primary">Celebrations</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">मांगल्य मंगल कार्यालय (Mangalya Mangal Karyalay)</strong> has been the heart of celebrations in Mumbai for over 20 years. What started as a dream to create a space where families could celebrate their most precious moments has grown into one of the area's most trusted wedding venues.
                  </p>
                  <p>
                    Our journey began with a simple philosophy: treat every celebration as if it were our own. This approach, combined with our commitment to excellence, has helped us host over 1,000 weddings, engagements, and special events.
                  </p>
                  <p>
                    Alongside our venue, <strong className="text-foreground">XXXXXXX Catering Service</strong> offers authentic multi-cuisine menus that have become legendary among our guests. From traditional Maharashtrian thalis to elaborate North Indian spreads, our culinary team creates memorable dining experiences.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop"
                    alt="Mangalya Venue Interior"
                    className="w-full h-[500px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-gold">
                  <p className="font-serif text-4xl font-bold">20+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                Our Values
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
                What Drives <span className="text-primary">Us</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-card rounded-xl p-8 text-center shadow-elegant border border-border"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team/Owner Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-medium tracking-widest uppercase text-sm">
                  Our Promise
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-8">
                  Making Your Dreams <span className="text-primary">Reality</span>
                </h2>
                <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-border">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    "At Mangalya, we don't just host events - we create memories that last a lifetime. Every wedding is unique, and we take pride in understanding your vision and bringing it to life with our dedicated team, exquisite cuisine, and elegant venue."
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    "From the first meeting to the last dance, we are with you every step of the way, ensuring your celebration is as perfect as you imagined."
                  </p>
                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="font-serif text-xl font-semibold text-foreground">
                      The Mangalya Family
                    </p>
                    <p className="text-primary">Your Celebration Partners</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
