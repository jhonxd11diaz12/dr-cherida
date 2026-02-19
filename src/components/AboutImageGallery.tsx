import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Import all gallery images
import draCherida1 from "@/assets/dra-cherida-1.jpeg";
import draCherida2 from "@/assets/dra-cherida-2.jpeg";
import draCherida3 from "@/assets/dra-cherida-3.jpeg";
import draCheridaAbout from "@/assets/dra-cherida-about.jpeg";

const galleryImages = [
  draCheridaAbout,
  draCherida1,
  draCherida2,
  draCherida3,
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? 45 : -45,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction < 0 ? 45 : -45,
  }),
};

const AboutImageGallery = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });

  const imageIndex = ((page % galleryImages.length) + galleryImages.length) % galleryImages.length;

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setPage(([prevPage]) => [prevPage + 1, 1]);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Handle mouse movement over the image
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative flex justify-center">
      {/* Main 3D container */}
      <div
        ref={imageRef}
        className="relative cursor-pointer w-full max-w-md"
        style={{ perspective: "1200px" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Outer animated glow ring */}
        <motion.div
          className="absolute -inset-8 rounded-lg"
          style={{
            background: "radial-gradient(circle, hsl(var(--gold) / 0.4) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating golden frames */}
        <motion.div
          className="absolute -inset-4 border-2 border-gold/50 rounded-sm"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -inset-8 border border-gold/25 rounded-sm"
          style={{
            rotateX: useTransform(rotateX, (v) => v * 0.5),
            rotateY: useTransform(rotateY, (v) => v * 0.5),
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [3, -3, 3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main image container with 3D rotation */}
        <motion.div
          className="relative overflow-hidden rounded-sm aspect-[3/4]"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            boxShadow: isHovering
              ? "0 30px 60px -15px hsl(var(--gold) / 0.3), 0 0 50px hsl(var(--gold) / 0.15)"
              : "0 25px 50px -12px hsl(30 20% 30% / 0.25)",
          }}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={page}
              src={galleryImages[imageIndex]}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.6 },
              }}
              className="absolute inset-0 w-full h-full object-cover object-top"
              alt="Dra. Cherida Bautista"
            />
          </AnimatePresence>

          {/* Shimmer overlay effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, hsl(var(--gold) / 0.2) 45%, hsl(var(--gold) / 0.35) 50%, hsl(var(--gold) / 0.2) 55%, transparent 60%)",
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />

          {/* Vignette overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 50%, hsl(var(--gold) / 0.08) 100%)",
            }}
          />
        </motion.div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gold/70"
            style={{
              left: `${10 + i * 12}%`,
              top: `${5 + (i % 4) * 25}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.3, 0.9, 0.3],
              scale: [0.6, 1.3, 0.6],
            }}
            transition={{
              duration: 2.5 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Corner accents with animation */}
        {[
          { pos: "-top-3 -left-3", border: "border-t-2 border-l-2" },
          { pos: "-top-3 -right-3", border: "border-t-2 border-r-2" },
          { pos: "-bottom-3 -left-3", border: "border-b-2 border-l-2" },
          { pos: "-bottom-3 -right-3", border: "border-b-2 border-r-2" },
        ].map((corner, i) => (
          <motion.div
            key={i}
            className={`absolute ${corner.pos} w-10 h-10 ${corner.border} border-gold/70`}
            animate={{
              opacity: isHovering ? 1 : 0.5,
              scale: isHovering ? 1.15 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}

        {/* Progress indicator dots */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
          {galleryImages.map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full cursor-pointer"
              style={{
                backgroundColor: i === imageIndex ? "hsl(var(--gold))" : "hsl(var(--gold) / 0.3)",
              }}
              animate={{
                scale: i === imageIndex ? 1.3 : 1,
              }}
              onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutImageGallery;
