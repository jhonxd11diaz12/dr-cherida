import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import drCherida from "@/assets/dra-cherida.jpeg";
import { Stethoscope, Heart } from "lucide-react";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-2, 2]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="inicio" className="relative w-full min-h-screen overflow-hidden bg-[hsl(var(--hero-bg))] font-serif text-[hsl(var(--primary-foreground))]">
      {/* High-performance Opening Reveal - Opacity Fade */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
        className="absolute inset-0 bg-[hsl(25_15%_8%)] z-[50] pointer-events-none"
      />

      <div
        className="absolute inset-0 z-[3] pointer-events-none opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, hsl(38 60% 65% / 0.15), transparent 60%)`,
        }}
      />

      <div className="absolute inset-0 z-[2] pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 50%, hsl(25 15% 8% / 0.2) 100%)"
      }} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute inset-4 md:inset-8 pointer-events-none z-10"
      >
        <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[hsl(var(--gold-shimmer))] to-transparent" />
          <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-[hsl(var(--gold-shimmer))] to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-[hsl(var(--gold-shimmer))] to-transparent" />
          <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-[hsl(var(--gold-shimmer))] to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24">
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[hsl(var(--gold-shimmer))] to-transparent" />
          <div className="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-t from-[hsl(var(--gold-shimmer))] to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24">
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-[hsl(var(--gold-shimmer))] to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-[hsl(var(--gold-shimmer))] to-transparent" />
        </div>
      </motion.div>



      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center"
        style={{
          rotateX,
          rotateY,
          perspective: 1000,
          willChange: 'transform'
        }}
      >
        <div className="w-full h-full lg:w-[85%] lg:h-[90%] relative">
          <img
            src={drCherida}
            alt="Dra. Cherida Bautista - Cirujana Dermatóloga"
            className="w-full h-full object-cover object-top transition-all duration-700"
            style={{
              filter: 'brightness(1.15) contrast(1.05) saturate(1.1)',
            }}
          />
          <div className="absolute inset-0 border-[0.5px] border-[hsl(38_60%_65%/0.2)] pointer-events-none z-[2]" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[hsl(38_60%_65%/0.1)] to-transparent pointer-events-none z-[2]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(25_15%_12%/0.2)] via-transparent to-[hsl(38_60%_65%/0.1)] z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(25_15%_8%/0.4)] z-[1]" />
          <div className="absolute inset-0 bg-[hsl(38_60%_65%/0.03)] mix-blend-overlay pointer-events-none z-[1]" />
          <div className="absolute inset-0 mix-blend-soft-light bg-gradient-to-br from-[hsl(38_50%_60%/0.15)] to-transparent z-[1]" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[hsl(30_25%_96%)] z-[45] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0.7, scale: 0 }}
        animate={{ opacity: 0, scale: 4 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-2 border-[hsl(var(--gold-shimmer)/0.6)] z-[6] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0.5, scale: 0 }}
        animate={{ opacity: 0, scale: 3.5 }}
        transition={{ duration: 2.2, delay: 0.7, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-[hsl(var(--gold-shimmer)/0.4)] z-[6] pointer-events-none"
      />


      {/* Text overlay - EPIC alignment */}
      <div className="relative z-20 flex flex-col justify-end items-end min-h-screen px-4 sm:px-6 md:px-20 lg:pr-48 pb-12 sm:pb-16 md:pb-24">
        <div className="text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center mb-4"
          >
            <Stethoscope className="text-gold/60" size={32} strokeWidth={1} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1] mb-1"
          >
            Dra. Cherida
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold italic leading-[1] mb-4 sm:mb-5"
          >
            Bautista
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex justify-center mb-4"
          >
            <Heart className="text-gold/40 fill-gold/10" size={16} />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className="w-16 sm:w-24 h-[1px] mx-auto mb-4 sm:mb-5 origin-center"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(38 60% 65%), hsl(35 50% 55%), hsl(38 60% 65%), transparent)",
              backgroundSize: "200% 100%",
              animation: "shimmer 3s ease-in-out infinite",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl italic text-[hsl(var(--primary-foreground)/0.9)] font-light leading-relaxed mb-3"
          >
            Cirujana Dermatóloga &<br />
            Rejuvenecimiento Facial Quirúrgico
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 6.8 }}
            className="font-sans text-xs sm:text-sm tracking-[0.15em] uppercase text-white font-light"
          >
            Miembro de SOSOCIPRE
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 5.5 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] z-20"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(38 60% 65%), transparent)",
        }}
      />
    </section>
  );
};

export default HeroSection;
