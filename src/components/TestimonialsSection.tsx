import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, UserCheck } from "lucide-react";
import doctorImage from "../assets/dra-cherida.jpeg";

const testimonials = [
  {
    name: "María Elena",
    treatment: "Lifting Facial",
    quote: "La Dra. Cherida transformó mi rostro de manera increíble. Me veo 10 años más joven y completamente natural. Su profesionalismo y calidez me hicieron sentir segura en todo momento.",
    rating: 5,
  },
  {
    name: "Carolina",
    treatment: "Rellenos Dérmicos",
    quote: "Siempre tuve miedo de los procedimientos estéticos hasta que conocí a la Dra. Bautista. Su enfoque personalizado y sus manos expertas me dieron exactamente los resultados que buscaba.",
    rating: 5,
  },
  {
    name: "Alejandra",
    treatment: "Botox",
    quote: "Los resultados superaron mis expectativas. La Dra. Cherida tiene un don para realzar la belleza natural sin exagerar. Todos me dicen que luzco descansada y radiante.",
    rating: 5,
  },
  {
    name: "Patricia",
    treatment: "Hilos Tensores",
    quote: "Después de mi procedimiento, mi autoestima se elevó enormemente. La Dra. Bautista no solo es una excelente profesional, también es una persona cálida que realmente se preocupa por sus pacientes.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);


  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getIndex = (offset: number) => {
    const index = (currentIndex + offset + testimonials.length) % testimonials.length;
    return index;
  };

  return (
    <section id="testimonios" className="py-16 lg:py-40 bg-gradient-to-br from-[#FDFBF7] via-[#F5F0E6] to-[#FDFBF7] relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dot Grid Pattern - Subtle Gold */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        {/* Simplified Ambient Glows - Warm Gold */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gold/[0.03] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-gold/50" />
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold font-semibold">Palabras de Confianza</p>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="font-serif text-4xl lg:text-7xl text-charcoal mb-8 leading-tight tracking-tight">
            Voz de <span className="italic font-light text-gold">Excelencia</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold/30 mx-auto" />
        </motion.div>

        {/* Premium Testimonial Layout */}
        <div className="relative max-w-[1400px] mx-auto flex items-center justify-center pt-10">

          {/* Main Stage */}
          <div className="w-full flex items-center justify-center gap-0 lg:gap-12 relative">

            {/* Left Wing (Desktop) */}
            <div
              className="hidden lg:block w-1/4 opacity-25 -translate-x-5 scale-85"
            >
              <div className="relative p-10 bg-white shadow-sm border border-gold/10 rounded-sm hover:shadow-md transition-shadow">
                <Quote className="text-gold/20 mb-6" size={32} />
                <p className="font-serif text-lg text-muted-foreground line-clamp-3 italic leading-relaxed">
                  "{testimonials[getIndex(-1)].quote}"
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-6 h-px bg-gold/30" />
                  <p className="font-sans text-[10px] tracking-widest uppercase text-charcoal/60 font-semibold">
                    {testimonials[getIndex(-1)].name}
                  </p>
                </div>
              </div>
            </div>

            {/* Center Focus */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[45%] relative z-20"
              >
                {/* Outer sophisticated border */}
                <div className="absolute -inset-3 sm:-inset-4 border border-gold/10 rounded-sm -z-10 bg-white/40" />

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gold/[0.05] rounded-full -z-10" />

                <div className="bg-white/90 rounded-sm p-6 sm:p-8 md:p-12 lg:p-20 border border-gold/20 shadow-[0_10px_40px_rgba(212,175,55,0.15)] relative">
                  {/* Decorative faint quote */}
                  <Quote className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-24 h-24 sm:w-40 sm:h-40 text-gold/5 -z-10 rotate-[15deg]" />

                  <div className="flex flex-col items-center">
                    {/* Stars - Modern minimal */}
                    <div className="flex gap-1.5 mb-8 sm:mb-10">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                      ))}
                    </div>

                    <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-charcoal leading-[1.6] mb-8 sm:mb-10 lg:mb-16 text-center tracking-tight font-light italic">
                      "{testimonials[currentIndex].quote}"
                    </p>

                    <div className="relative pt-10 sm:pt-12 flex flex-col items-center w-full">
                      {/* Vertical separator */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 sm:h-10 bg-gradient-to-b from-gold/40 to-transparent" />

                      <div className="flex items-center gap-3 mb-2">
                        <UserCheck size={14} className="text-gold" />
                        <h4 className="font-sans text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase text-charcoal font-semibold">
                          {testimonials[currentIndex].name}
                        </h4>
                      </div>

                      <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-5 sm:mb-6">
                        {testimonials[currentIndex].treatment}
                      </p>

                      <div className="px-3 sm:px-4 py-1.5 border border-gold/20 rounded-full bg-gold/5 backdrop-blur-md">
                        <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-gold/90 font-semibold">Paciente Verificado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Wing (Desktop) */}
            <div
              className="hidden lg:block w-1/4 opacity-25 translate-x-5 scale-85"
            >
              <div className="relative p-10 bg-white shadow-sm border border-gold/10 rounded-sm hover:shadow-md transition-shadow">
                <Quote className="text-gold/20 mb-6" size={32} />
                <p className="font-serif text-lg text-muted-foreground line-clamp-3 italic leading-relaxed">
                  "{testimonials[getIndex(1)].quote}"
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-6 h-px bg-gold/30" />
                  <p className="font-sans text-[10px] tracking-widest uppercase text-charcoal/60 font-semibold">
                    {testimonials[getIndex(1)].name}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Controls - Premium Buttons */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 lg:px-0 pointer-events-none">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 border border-gold/20 bg-white/80 rounded-full flex items-center justify-center text-charcoal/40 hover:text-gold hover:border-gold hover:bg-white transition-all duration-500 transform lg:-translate-x-1/2 shadow-sm"
            >
              <ChevronLeft size={20} strokeWidth={1} className="lg:w-7 lg:h-7" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 border border-gold/20 bg-white/80 rounded-full flex items-center justify-center text-charcoal/40 hover:text-gold hover:border-gold hover:bg-white transition-all duration-500 transform lg:translate-x-1/2 shadow-sm"
            >
              <ChevronRight size={20} strokeWidth={1} className="lg:w-7 lg:h-7" />
            </motion.button>
          </div>
        </div>

        {/* Global Progress Indicator */}
        <div className="mt-24 flex flex-col items-center gap-10">
          <div className="flex gap-2.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className="group relative py-4"
              >
                <div className={`transition-all duration-700 h-[2px] rounded-full ${index === currentIndex
                  ? "w-12 bg-gold"
                  : "w-6 bg-gold/20 group-hover:bg-gold/40"
                  }`} />
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full blur-[1px]"
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/30" />
            <span className="font-sans text-[8px] tracking-[0.5em] uppercase text-charcoal/40 font-medium">Dr. Cherida Bautista Gallery</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
