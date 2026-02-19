import { motion } from "framer-motion";

const RecognitionSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-accent to-transparent" />

      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-['Montserrat'] text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground mb-6"
        >
          Reconocida Por
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-['Cormorant_Garamond'] text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.15] mb-8"
        >
          Excelencia en Cirugía Facial
          <br />
          <span className="italic font-normal">y Rejuvenecimiento Natural</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-20 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-['Montserrat'] text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12 font-light"
        >
          Con más de 20 años de experiencia, combino precisión quirúrgica con sensibilidad artística para revelar tu mejor versión de manera natural y armoniosa.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-['Montserrat'] text-xs tracking-[0.3em] uppercase border border-foreground/30 px-10 py-4 hover:bg-foreground hover:text-primary-foreground transition-all duration-500"
        >
          Agendar Consulta
        </motion.button>
      </div>
    </section>
  );
};

export default RecognitionSection;
