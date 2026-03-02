import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { Preloader } from "@/components/Preloader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Header />
        <main>
          <Hero />
          <Highlights />
          <FeaturedServices />
          <Testimonials />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </motion.div>
    </>
  );
};

export default Index;
