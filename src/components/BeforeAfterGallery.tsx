import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterItem {
  id: number;
  treatment: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

// Placeholder images - se pueden reemplazar con imágenes reales
const galleryItems: BeforeAfterItem[] = [
  {
    id: 1,
    treatment: "Lifting Facial",
    beforeImage: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=face",
    afterImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=500&fit=crop&crop=face",
    description: "Rejuvenecimiento facial completo con resultados naturales",
  },
  {
    id: 2,
    treatment: "Rellenos Dérmicos",
    beforeImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop&crop=face",
    afterImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=face",
    description: "Volumen y definición para labios y pómulos",
  },
  {
    id: 3,
    treatment: "Botox",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
    afterImage: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=400&h=500&fit=crop&crop=face",
    description: "Suavizado de líneas de expresión",
  },
];

const BeforeAfterSlider = ({ item }: { item: BeforeAfterItem }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(x, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(x, 0), 100));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/5] overflow-hidden rounded-sm cursor-ew-resize group"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (base layer) */}
      <div className="absolute inset-0">
        <img
          src={item.afterImage}
          alt="Después"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-gold/90 text-charcoal px-3 py-1 rounded-sm font-sans text-xs tracking-wider uppercase">
          Después
        </div>
      </div>

      {/* Before Image (clipped layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={item.beforeImage}
          alt="Antes"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-charcoal/90 text-cream px-3 py-1 rounded-sm font-sans text-xs tracking-wider uppercase">
          Antes
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-gold shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-elegant">
          <div className="flex gap-1">
            <ChevronLeft className="w-4 h-4 text-charcoal" />
            <ChevronRight className="w-4 h-4 text-charcoal" />
          </div>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const BeforeAfterGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Resultados Reales
          </p>
          <h2 className="font-serif text-5xl lg:text-6xl text-foreground mb-6">
            Antes & Después
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Descubre las transformaciones de nuestras pacientes.
            Desliza para ver los resultados.
          </p>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Gallery */}
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Slider */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <BeforeAfterSlider item={galleryItems[activeIndex]} />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 mt-6 lg:mt-0"
            >
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-2">
                  Tratamiento
                </p>
                <h3 className="font-serif text-4xl text-foreground mb-4">
                  {galleryItems[activeIndex].treatment}
                </h3>
                <p className="font-sans text-muted-foreground">
                  {galleryItems[activeIndex].description}
                </p>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center gap-4 pt-6">
                <motion.button
                  onClick={prevSlide}
                  className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-foreground hover:border-gold hover:text-gold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <div className="flex gap-2">
                  {galleryItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-gold w-8" : "bg-border hover:bg-gold/50"
                        }`}
                    />
                  ))}
                </div>
                <motion.button
                  onClick={nextSlide}
                  className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-foreground hover:border-gold hover:text-gold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 sm:gap-3 pt-4 flex-wrap justify-center lg:justify-start">
                {galleryItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden transition-all duration-300 ${index === activeIndex ? "ring-2 ring-gold" : "opacity-60 hover:opacity-100"
                      }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={item.afterImage}
                      alt={item.treatment}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
