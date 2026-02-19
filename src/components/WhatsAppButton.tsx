import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "18093977943";
  const message = "Hola Dra. Cherida, me gustaría agendar una consulta.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse rings */}
      <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-25" />
      <div className="absolute inset-0 rounded-full bg-gold animate-pulse opacity-40" style={{ animationDelay: '0.5s' }} />
      
      {/* Main button - WhatsApp green with custom styling */}
      <div className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-elegant transition-shadow duration-300" style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}>
        <MessageCircle className="w-7 h-7 text-primary-foreground fill-primary-foreground" />
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-20 top-1/2 -translate-y-1/2 bg-charcoal text-cream px-4 py-2 rounded-sm whitespace-nowrap font-sans text-sm shadow-elegant pointer-events-none"
      >
        ¡Escríbeme por WhatsApp!
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-charcoal rotate-45" />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
