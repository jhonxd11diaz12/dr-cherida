import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ServicesCallToAction = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative py-32 lg:py-48 overflow-hidden"
            style={{ backgroundColor: '#ddd7c9' }}
        >
            {/* Very subtle background pattern */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: "radial-gradient(circle, hsl(var(--brown)) 1px, transparent 1px)",
                    backgroundSize: "50px 50px"
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    {/* Small overline - like "BEST KNOWN FOR" */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="font-sans text-sm md:text-lg tracking-[0.5em] uppercase text-brown mb-8 md:mb-12 font-bold"
                    >
                        Reconocida Por
                    </motion.p>

                    {/* Main headline - like "ELEVATING YOUR BRAND" */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-charcoal mb-8 sm:mb-10 leading-[1.15] tracking-tight"
                    >
                        <span className="inline-block whitespace-nowrap">Excelencia en Cirugía Facial</span>
                        <br />
                        <span className="inline-block whitespace-nowrap">y Rejuvenecimiento Natural</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="font-sans text-xl md:text-2xl lg:text-3xl text-charcoal/90 leading-[1.4] mb-16 max-w-4xl mx-auto px-4 font-light text-balance"
                    >
                        Con más de 20 años de experiencia, combino precisión quirúrgica <br className="hidden md:block" />
                        con sensibilidad artística para revelar tu mejor versión <br className="hidden md:block" />
                        de manera natural y armoniosa.
                    </motion.p>

                    {/* CTA Button - like "INQUIRE TODAY" */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        <Link
                            to="/servicios"
                            className="inline-block px-14 sm:px-20 py-5 sm:py-6 border-2 border-charcoal text-charcoal font-sans text-lg md:text-xl tracking-[0.4em] uppercase hover:bg-charcoal hover:text-cream transition-all duration-300 transition-shadow hover:shadow-2xl font-semibold"
                        >
                            Ver Servicios
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesCallToAction;
