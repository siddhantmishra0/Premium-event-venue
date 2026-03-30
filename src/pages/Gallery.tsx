import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";

const categories = ["All", "Venue", "Weddings", "Catering", "Decorations"];

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    category: "Venue",
    title: "Grand Banquet Hall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
    category: "Venue",
    title: "Elegant Interiors",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",
    category: "Weddings",
    title: "Beautiful Wedding Setup",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    category: "Weddings",
    title: "Wedding Ceremony",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    category: "Catering",
    title: "Delicious Cuisine",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?q=80&w=2072&auto=format&fit=crop",
    category: "Catering",
    title: "Traditional Spread",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=2070&auto=format&fit=crop",
    category: "Decorations",
    title: "Floral Arrangements",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
    category: "Decorations",
    title: "Stage Design",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
    category: "Weddings",
    title: "Couple Moments",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
    category: "Decorations",
    title: "Mandap Decoration",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1464047736614-af63643285bf?q=80&w=2074&auto=format&fit=crop",
    category: "Venue",
    title: "Evening Ambiance",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);


  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative py-24 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop')`,
              y: heroY,
            }}
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <motion.div 
            className="relative z-10 container mx-auto px-4 text-center"
            style={{ opacity: heroOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="font-serif text-5xl md:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Our <span className="text-primary">Gallery</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Explore moments of joy and celebration from our venue
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Category Filters with Animation */}
            <ScrollReveal className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-gold"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <span className="relative z-10">{category}</span>
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </ScrollReveal>

            {/* Image Grid with Staggered Animation */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.05,
                      layout: { type: "spring", stiffness: 300, damping: 30 }
                    }}
                    whileHover={{ y: -8 }}
                    className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-elegant"
                    onClick={() => setSelectedImage(image.id)}
                  >
                    <motion.img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Content on Hover */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm text-primary font-medium">{image.category}</p>
                      <h3 className="text-white font-serif text-lg">{image.title}</h3>
                    </motion.div>

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
                      initial={{ x: "-150%" }}
                      whileHover={{ x: "150%" }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Border Glow on Hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-primary/0 pointer-events-none"
                      whileHover={{ borderColor: "hsla(43, 65%, 53%, 0.5)" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Lightbox with Zoom */}
        <GalleryLightbox
          images={filteredImages}
          selectedId={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNavigate={(id) => setSelectedImage(id)}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
