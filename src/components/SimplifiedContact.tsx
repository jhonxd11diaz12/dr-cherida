import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Send } from "lucide-react";

const SimplifiedContact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <section
            ref={ref}
            className="relative py-24 lg:py-32 bg-charcoal overflow-hidden"
        >
            {/* Subtle background elements */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: "radial-gradient(circle, hsl(var(--brown)) 1px, transparent 1px)",
                    backgroundSize: "30px 30px"
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
                        Contacto
                    </p>
                    <h2 className="font-serif text-4xl lg:text-6xl text-cream mb-4">
                        Comienza tu{" "}
                        <span className="italic font-light text-gold-light">Transformación</span>
                    </h2>
                    <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
                </motion.div>

                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        {/* Location */}
                        <div className="flex items-start gap-4 sm:gap-5">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-b border-gold/20 shrink-0">
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                            </div>
                            <div>
                                <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-cream/60 mb-2">
                                    Ubicación
                                </h4>
                                <p className="font-sans text-sm sm:text-base text-cream/90 leading-relaxed">
                                    Condominio Plaza Embajador 208<br />
                                    Bella Vista, Santo Domingo, D.N.
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4 sm:gap-5">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-b border-gold/20 shrink-0">
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                            </div>
                            <div>
                                <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-cream/60 mb-2">
                                    Teléfono
                                </h4>
                                <p className="font-sans text-sm sm:text-base text-cream/90">
                                    809 397-7943<br />
                                    809 482-1702
                                </p>
                            </div>
                        </div>

                        {/* WhatsApp Button */}
                        <motion.a
                            href="https://wa.me/18093977943"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 bg-[#25D366] text-white font-sans text-sm rounded-full hover:bg-[#20bd5a] transition-colors shadow-soft"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp Directo
                        </motion.a>
                    </motion.div>

                    {/* Quick Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 shadow-soft">
                            <h3 className="font-serif text-xl sm:text-2xl text-cream mb-5 sm:mb-6 text-center">
                                Envíanos un Mensaje
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="font-sans text-xs tracking-wider uppercase text-cream/70 mb-2 block">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all duration-300 font-sans text-sm text-cream"
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="font-sans text-xs tracking-wider uppercase text-cream/70 mb-2 block">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all duration-300 font-sans text-sm text-cream"
                                        placeholder="+1 (809) 000-0000"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="font-sans text-xs tracking-wider uppercase text-cream/70 mb-2 block">
                                        Mensaje
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all duration-300 font-sans text-sm text-cream resize-none"
                                        placeholder="¿En qué podemos ayudarte?"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full py-3.5 bg-gold text-charcoal font-sans text-sm tracking-wider uppercase rounded-lg hover:bg-gold/80 transition-all duration-300 flex items-center justify-center gap-3 shadow-soft"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <Send className="w-4 h-4" />
                                    Enviar
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SimplifiedContact;
