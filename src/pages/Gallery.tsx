import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import { motion } from "framer-motion";

const Gallery = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background pt-20"
        >
            <Navbar />
            <BeforeAfterGallery />
            <Footer />
            <WhatsAppButton />
        </motion.div>
    );
};

export default Gallery;
