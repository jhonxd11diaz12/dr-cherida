import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesCallToAction from "@/components/ServicesCallToAction";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import SimplifiedContact from "@/components/SimplifiedContact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      {/* Section 1: Main cinematic banner */}
      <HeroSection />
      {/* Section 2: Services call to action with "Ver servicios" button */}
      <ServicesCallToAction />
      {/* Section 3: Before & After preview */}
      <BeforeAfterGallery />
      {/* Section 4: Testimonials */}
      <TestimonialsSection />
      {/* Section 5: Simplified contact */}
      <SimplifiedContact />
      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};

export default Index;
