import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import drCherida from "@/assets/dr-cherida.jpeg";

const Sparkle = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, scale: 0, rotate: 0 }}
    animate={{ opacity: [0, 1, 0.6, 1, 0], scale: [0, 1.2, 0.8, 1, 0], rotate: [0, 180, 360] }}
    transition={{ duration: 4, delay, repeat: Infinity, repeatDelay: 2 }}
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
  </motion.svg>
);

const FloatingOrb = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.6, 0.3, 0.6, 0],
      scale: [0.5, 1.2, 0.8, 1, 0.5],
      y: [0, -20, 0, -15, 0],
    }}
    transition={{ duration: 6, delay, repeat: Infinity }}
  />
);

// Typewriter component
const TypewriterText = ({
  text,
  delay = 0,
  className = "",
  speed = 0.06,
}: {
  text: string;
  delay?: number;
  className?: string;
  speed?: number;
}) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.15,
            delay: delay + i * speed,
            ease: "easeOut",
          }}
        >
          {char}
        </motion.span>
      ))}
      {/* Blinking cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.8,
          delay: delay + text.length * speed,
          repeat: 3,
          repeatType: "loop",
        }}
        className="inline-block w-[2px] h-[0.85em] bg-[hsl(var(--gold-shimmer))] ml-1 align-middle"
      />
    </span>
  );
};

// Medical cross / caduceus SVG
const MedicalIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
    {/* Cross */}
    <rect x="27" y="16" width="6" height="28" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="16" y="27" width="28" height="6" rx="1" fill="currentColor" opacity="0.3" />
  </svg>
);

// DNA Helix decorative element
const DNAHelix = ({ className }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 40 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, pathLength: 0 }}
    animate={{ opacity: 0.3 }}
    transition={{ duration: 2, delay: 2 }}
  >
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <g key={i}>
        <motion.path
          d={`M 5 ${i * 25 + 5} Q 20 ${i * 25 + 15} 35 ${i * 25 + 5}`}
          stroke="currentColor"
          strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 2 + i * 0.15 }}
        />
        <motion.path
          d={`M 5 ${i * 25 + 17} Q 20 ${i * 25 + 7} 35 ${i * 25 + 17}`}
          stroke="currentColor"
          strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 2.1 + i * 0.15 }}
        />
        {/* Connecting bars */}
        <motion.line
          x1="15" y1={i * 25 + 10} x2="25" y2={i * 25 + 10}
          stroke="currentColor" strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 2.5 + i * 0.1 }}
        />
      </g>
    ))}
  </motion.svg>
);

// Heartbeat / pulse line
const PulseLine = ({ className }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 400 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M0 30 L80 30 L100 30 L115 8 L130 52 L145 8 L160 52 L175 30 L195 30 L400 30"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.5 }}
      transition={{ duration: 2.5, delay: 1.8, ease: "easeInOut" }}
    />
    {/* Glow pulse that travels along the line */}
    <motion.circle
      cx="0"
      cy="30"
      r="4"
      fill="currentColor"
      opacity="0.6"
      initial={{ cx: 0, opacity: 0 }}
      animate={{ cx: [0, 400], opacity: [0, 0.8, 0.8, 0] }}
      transition={{ duration: 2.5, delay: 1.8, ease: "easeInOut" }}
    />
  </motion.svg>
);

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
    <section className="relative w-full min-h-screen overflow-hidden bg-[hsl(var(--hero-bg))]">
      {/* Cinematic black bars that retract */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-x-0 top-0 h-1/2 bg-[hsl(25_15%_8%)] z-[50] origin-top pointer-events-none"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[hsl(25_15%_8%)] z-[50] origin-bottom pointer-events-none"
      />

      {/* Radial spotlight that follows mouse */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, hsl(38 60% 65% / 0.15), transparent 60%)`,
        }}
      />

      {/* Vignette effect for depth */}
      <div className="absolute inset-0 z-[2] pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, hsl(25 15% 8% / 0.4) 100%)"
      }} />

      {/* Decorative gold corner accents */}
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

      {/* Medical decorative elements on the photo */}
      {/* DNA Helix on left side */}
      <DNAHelix className="absolute left-3 md:left-6 top-[15%] w-8 md:w-10 h-auto text-[hsl(var(--gold-shimmer))] z-[9]" />

      {/* Medical cross icons floating */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <MedicalIcon className="absolute top-[10%] right-[8%] w-14 h-14 md:w-20 md:h-20 text-[hsl(var(--gold-shimmer))] animate-float z-[9]" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <MedicalIcon className="absolute bottom-[30%] left-[3%] w-10 h-10 md:w-14 md:h-14 text-[hsl(var(--primary-foreground))] animate-float [animation-delay:2s] z-[9] opacity-20" />
      </motion.div>

      {/* Heartbeat pulse line across bottom of image */}
      <PulseLine className="absolute bottom-[18%] left-0 right-0 w-full h-12 md:h-16 text-[hsl(var(--gold-shimmer))] z-[9]" />

      {/* Floating golden orbs */}
      <FloatingOrb className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-[hsl(38_60%_65%/0.08)] blur-2xl z-[4]" delay={0.5} />
      <FloatingOrb className="absolute bottom-[25%] right-[8%] w-40 h-40 rounded-full bg-[hsl(35_50%_55%/0.06)] blur-3xl z-[4]" delay={1.2} />
      <FloatingOrb className="absolute top-[40%] right-[30%] w-24 h-24 rounded-full bg-[hsl(38_60%_65%/0.1)] blur-xl z-[4]" delay={2} />

      {/* Sparkles */}
      <Sparkle className="absolute top-[12%] left-[8%] md:left-[12%] w-5 h-5 text-[hsl(var(--gold-shimmer)/0.9)] z-10" delay={1.8} />
      <Sparkle className="absolute bottom-[15%] right-[10%] md:right-[15%] w-6 h-6 text-[hsl(var(--gold-shimmer)/0.7)] z-10" delay={2.5} />
      <Sparkle className="absolute top-[30%] right-[20%] w-3 h-3 text-[hsl(var(--primary-foreground)/0.6)] z-10" delay={3.2} />
      <Sparkle className="absolute top-[60%] left-[5%] w-4 h-4 text-[hsl(var(--gold-shimmer)/0.5)] z-10" delay={1.2} />
      <Sparkle className="absolute top-[8%] right-[35%] w-3 h-3 text-[hsl(var(--primary-foreground)/0.4)] z-10" delay={4} />

      {/* Hero image with 3D parallax */}
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="absolute inset-0"
      >
        <img
          src={drCherida}
          alt="Dra. Cherida Bautista - Cirujana Dermatóloga"
          className="w-full h-full object-cover object-top"
        />
        {/* Multi-layer artistic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(25_15%_12%/0.25)] via-transparent to-[hsl(38_60%_65%/0.12)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25_15%_12%/0.1)] via-transparent to-[hsl(25_15%_12%/0.5)]" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[hsl(38_60%_65%/0.08)] via-transparent to-transparent" />
        <div className="absolute inset-0 mix-blend-soft-light bg-gradient-to-br from-[hsl(38_50%_60%/0.15)] to-[hsl(25_30%_40%/0.1)]" />
      </motion.div>

      {/* White flash burst */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[hsl(30_25%_96%)] z-[45] pointer-events-none"
      />

      {/* Gold ring burst */}
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

      {/* Particle dust floating */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[hsl(var(--gold-shimmer)/0.6)] z-[8] pointer-events-none"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${20 + (i * 11) % 60}%`,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [0, -50 - (i % 3) * 20],
            x: [0, ((i % 2 === 0 ? 1 : -1) * 20)],
          }}
          transition={{
            duration: 4 + (i % 3),
            delay: 1.5 + i * 0.25,
            repeat: Infinity,
            repeatDelay: 1 + (i % 4),
          }}
        />
      ))}

      {/* Text overlay with typewriter */}
      <div className="relative z-20 flex flex-col justify-end items-end min-h-screen px-6 md:px-16 lg:px-24 pb-16 md:pb-24">
        <div className="text-right max-w-xl">
          {/* Name with typewriter effect */}
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl lg:text-8xl font-light text-[hsl(var(--primary-foreground))] leading-[1] mb-1">
            <TypewriterText text="Dra. Cherida" delay={1.5} speed={0.08} />
          </h1>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl lg:text-8xl font-semibold italic text-[hsl(var(--primary-foreground))] leading-[1] mb-5">
            <TypewriterText text="Bautista" delay={2.6} speed={0.09} />
          </h1>

          {/* Gold shimmer line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className="w-24 h-[2px] ml-auto mb-5 origin-right"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(38 60% 65%), hsl(35 50% 55%), hsl(38 60% 65%), transparent)",
              backgroundSize: "200% 100%",
              animation: "shimmer 3s ease-in-out infinite",
            }}
          />

          {/* Subtitle with typewriter */}
          <p className="font-['Cormorant_Garamond'] text-lg md:text-xl lg:text-2xl italic text-[hsl(var(--primary-foreground)/0.9)] font-light leading-relaxed">
            <TypewriterText text="Cirujana Dermatóloga &" delay={3.8} speed={0.04} />
            <br />
            <TypewriterText text="Especialista en Rejuvenecimiento Facial" delay={4.8} speed={0.035} />
          </p>
        </div>
      </div>

      {/* Bottom golden shimmer line */}
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
