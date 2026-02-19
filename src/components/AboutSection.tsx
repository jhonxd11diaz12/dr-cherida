import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, Heart, Star, Globe, BookOpen, ShieldCheck } from "lucide-react";

const formation = [
  {
    icon: GraduationCap,
    title: "Reconstructive Microsurgery",
    institution: "European School RMES, Barcelona, España",
  },
  {
    icon: Award,
    title: "Cirugía Plástica y Caumatología",
    institution: "Universidad de Ciencias Médicas de Villa Clara, Cuba",
  },
  {
    icon: BookOpen,
    title: "Maestría en Cirugía Estética",
    institution: "Instituto IESM, Xalapa, México",
  },
  {
    icon: Star,
    title: "Cirujana Dermatóloga",
    institution: "Universidad Autónoma de Santo Domingo (UASD)",
  },
  {
    icon: Globe,
    title: "Diplomado en Microcirugía",
    institution: "Cabeza y Cuello - Universidad Autónoma de Barcelona",
  },
  {
    icon: Heart,
    title: "Especialidad en Dermatología",
    institution: "Universidad Autónoma de Santo Domingo (UASD)",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 3D Parallax Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  function handleMouseMove(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section id="sobre-mi" className="py-16 sm:py-24 lg:py-40 bg-beige relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-cream/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/10 rounded-full hidden sm:block"
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            style={{ top: `${20 + i * 15}%`, left: `${10 + (i % 3) * 30}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20 lg:mb-24"
        >
          <div className="inline-flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-gold/30" />
            <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.5em] uppercase text-gold/60 font-medium">
              Trayectoria de Élite
            </p>
            <div className="h-px w-8 sm:w-12 bg-gold/30" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-foreground mb-6 sm:mb-8 leading-tight">
            Sobre <span className="italic font-light text-gold">Mí</span>
          </h2>
          <div className="w-16 h-px bg-gold/20 mx-auto" />
        </motion.div>

        {/* ── Hero Two-Column ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-start mb-20 sm:mb-28 lg:mb-32 max-w-[1320px] mx-auto">

          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[420px] sm:max-w-[500px] lg:max-w-none"
          >
            {/* Premium frame layers */}
            <div className="absolute -inset-6 sm:-inset-10 border border-gold/5 rounded-sm -z-20" />
            <div className="absolute -inset-4 sm:-inset-6 border-[10px] sm:border-[15px] border-gold/10 rounded-sm -z-10" />
            <div className="absolute -inset-1 border border-gold/40 rounded-sm" />

            <div className="relative p-3 sm:p-4 bg-white shadow-2xl rounded-sm overflow-hidden group">
              <div
                className="relative overflow-hidden bg-charcoal"
                style={{ maxHeight: "clamp(320px, 55vw, 650px)" }}
              >
                <motion.img
                  src="/about-me-final.jpeg"
                  alt="Dra. Cherida Bautista"
                  className="w-full object-cover object-center"
                  style={{ maxHeight: "clamp(320px, 55vw, 650px)", objectFit: "cover" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="absolute top-6 left-6 w-10 h-10 sm:w-12 sm:h-12 border-t-2 border-l-2 border-gold/50" />
              <div className="absolute bottom-6 right-6 w-10 h-10 sm:w-12 sm:h-12 border-b-2 border-r-2 border-gold/50" />
            </div>

            {/* Name tag */}
            <motion.div
              className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-6 bg-charcoal py-3 sm:py-4 px-5 sm:px-10 shadow-2xl border border-gold/40"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <p className="font-script text-xl sm:text-3xl text-gold tracking-widest whitespace-nowrap">
                Dra. Cherida Bautista
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col justify-start gap-6 sm:gap-8 w-full max-w-[600px] mx-auto lg:mx-0 lg:pt-5"
          >
            {/* Label + Badge */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold/80 font-bold">
                Cirujana-Dermatóloga
              </span>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative inline-flex self-start group/badge"
              >
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-2 bg-gold/20 blur-xl rounded-full"
                />
                <div className="relative bg-gradient-to-r from-[#B89656] via-[#E6C27A] to-[#B89656] border border-gold/50 px-5 sm:px-6 py-2 rounded-full flex items-center gap-2.5 shadow-[0_10px_25px_rgba(184,150,86,0.18)] overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "300%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-20"
                  />
                  <ShieldCheck size={14} className="text-charcoal relative z-10" strokeWidth={2.5} />
                  <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-charcoal font-black whitespace-nowrap relative z-10">
                    Miembro Activo SODOCIPRE
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Main title */}
            <div className="space-y-2 sm:space-y-3">
              <p
                className="font-sans uppercase"
                style={{ fontSize: "clamp(12px, 1.5vw, 15px)", letterSpacing: "4px", fontWeight: 500, color: "#3f3f3f" }}
              >
                Especializada en
              </p>
              <h3
                className="font-serif text-gold italic font-light"
                style={{ fontSize: "clamp(36px, 6vw, 68px)", lineHeight: "1", letterSpacing: "-0.5px" }}
              >
                Rejuvenecimiento<br />Facial Quirúrgico
              </h3>
              {/* Decorative anchor line */}
              <div style={{ width: "60px", height: "2px", background: "#c6a25a", marginTop: "20px" }} />
            </div>

            {/* Divider */}
            <div className="w-10 h-px bg-gold/30" />

            {/* Quote */}
            <p
              className="font-serif italic"
              style={{ fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: "1.8", color: "#3f3f3f" }}
            >
              "Como la primera especialista en República Dominicana que combina dermatología y cirugía plástica, me he formado en las técnicas quirúrgicas más avanzadas disponibles a nivel global para un rejuvenecimiento facial."
            </p>

            {/* Info blocks */}
            <div
              className="flex flex-col gap-5 sm:gap-6 font-sans font-light"
              style={{ fontSize: "clamp(14px, 1.6vw, 18px)", lineHeight: "1.8", color: "#3f3f3f" }}
            >
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="mt-[7px] flex-shrink-0 w-1 h-1 rounded-full bg-gold/50" />
                <p>
                  Con más de{" "}
                  <span className="text-foreground font-semibold">20 años de trayectoria</span>,
                  especializada en dermatología, cirugía dermatológica y cirugía plástica reconstructiva y estética.
                </p>
              </div>

              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="mt-[7px] flex-shrink-0 w-1 h-1 rounded-full bg-gold/50" />
                <p>
                  Formada internacionalmente en{" "}
                  <span className="text-foreground font-semibold">México, Cuba, Austria y España</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Formation Plaque ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, perspective: 1500 }}
          className="max-w-6xl mx-auto relative group active:scale-[0.98] transition-all duration-300"
        >
          {/* Floating ornament — hidden on small screens */}
          <motion.div
            style={{
              x: useSpring(useTransform(x, [-0.5, 0.5], [-20, 20])),
              y: useSpring(useTransform(y, [-0.5, 0.5], [-20, 20])),
            }}
            className="absolute -top-12 -right-12 w-24 h-24 border border-gold/10 rounded-full items-center justify-center -z-10 hidden lg:flex"
          >
            <div className="w-16 h-16 border border-gold/5 rounded-full" />
          </motion.div>

          <div className="relative bg-[#FDFCFA]/90 backdrop-blur-2xl border-[0.5px] border-gold/30 rounded-sm p-6 sm:p-12 lg:p-24 shadow-[0_50px_100px_rgba(184,150,86,0.08)] overflow-hidden">

            {/* Dynamic shine layer */}
            <motion.div
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(184, 150, 86, 0.08), transparent 40%)`,
                left: useTransform(x, [-0.5, 0.5], ["-20%", "20%"]),
                top: useTransform(y, [-0.5, 0.5], ["-20%", "20%"]),
              }}
              className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
            />

            {/* Subtle grid texture */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(to right, #B89656 1px, transparent 1px), linear-gradient(to bottom, #B89656 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* Plaque header */}
            <div className="relative z-10 flex flex-col items-center mb-10 sm:mb-16 lg:mb-20">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 200, delay: 1 }}
                className="w-14 h-14 sm:w-20 sm:h-20 bg-gold/5 border border-gold/20 rounded-full flex items-center justify-center mb-6 sm:mb-8"
              >
                <ShieldCheck className="text-gold/60" size={24} strokeWidth={1} />
              </motion.div>
              <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-foreground mb-3 sm:mb-4 tracking-tight text-center">
                Cátedra de <span className="text-gold italic">Excelencia</span>
              </h3>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="h-px w-6 sm:w-8 bg-gold/20" />
                <p className="font-sans text-[8px] sm:text-[9px] tracking-[0.4em] sm:tracking-[0.5em] uppercase text-gold/60 font-bold">
                  Academic Honors &amp; Certifications
                </p>
                <div className="h-px w-6 sm:w-8 bg-gold/20" />
              </div>
            </div>

            {/* Formation grid — 1 col mobile, 2 col md+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 sm:gap-x-16 lg:gap-x-20 gap-y-8 sm:gap-y-12 lg:gap-y-16 relative z-10">
              {formation.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  className="flex items-start gap-4 sm:gap-6 lg:gap-8 group/item"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white border border-gold/20 rounded-sm flex items-center justify-center shadow-sm group-hover/item:border-gold/60 group-hover/item:rotate-[15deg] transition-all duration-700">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold/80" strokeWidth={1.5} />
                    </div>
                    <div className="absolute inset-0 bg-gold/5 scale-125 rounded-sm opacity-0 group-hover/item:opacity-100 blur-xl transition-all duration-700 -z-10" />
                  </div>

                  <div className="flex flex-col pt-1">
                    <h4 className="font-serif text-lg sm:text-xl lg:text-2xl text-foreground mb-1.5 sm:mb-3 leading-none group-hover/item:text-gold transition-colors duration-500 tracking-tighter">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-[0.2em] sm:tracking-[0.25em] leading-relaxed italic font-semibold opacity-60 group-hover/item:opacity-100 transition-opacity">
                      {item.institution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Corner ornaments — visible only md+ */}
            <div className="absolute top-8 left-8 w-12 h-12 sm:w-16 sm:h-16 border-t-[0.5px] border-l-[0.5px] border-gold/40" />
            <div className="absolute top-8 right-8 w-12 h-12 sm:w-16 sm:h-16 border-t-[0.5px] border-r-[0.5px] border-gold/40" />
            <div className="absolute bottom-8 left-8 w-12 h-12 sm:w-16 sm:h-16 border-b-[0.5px] border-l-[0.5px] border-gold/40" />
            <div className="absolute bottom-8 right-8 w-12 h-12 sm:w-16 sm:h-16 border-b-[0.5px] border-r-[0.5px] border-gold/40" />

            {/* Bottom signature */}
            <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-3 sm:mb-4" />
              <p className="font-sans text-[7px] sm:text-[8px] tracking-[0.6em] sm:tracking-[0.8em] uppercase text-gold font-black">
                Distinción Internacional
              </p>
            </div>
          </div>

          {/* Outer glow */}
          <div className="absolute -inset-10 bg-gold/5 blur-[120px] rounded-full -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
