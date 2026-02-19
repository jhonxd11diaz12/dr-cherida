import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="font-script text-3xl text-cream">Cherida Bautista</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-xs tracking-[0.2em] uppercase text-cream/60 mb-8"
          >
            Cirujana Dermatóloga • Rejuvenecimiento Facial
          </motion.p>

          {/* Divider */}
          <div className="w-24 h-px bg-gold/30 mb-8" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-xs text-cream/40"
          >
            © {currentYear} Dra. Cherida Bautista. Todos los derechos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
