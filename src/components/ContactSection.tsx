import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Send, Heart } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    details: ["Condominio Plaza Embajador 208", "Bella Vista, Santo Domingo, D.N.", "República Dominicana"],
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["809 397-7943", "809 482-1702"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@dracherida.com"],
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lun - Vie: 9:00 AM - 6:00 PM", "Sáb: 9:00 AM - 1:00 PM"],
  },
];

const serviceOptions = [
  { value: "rinoplastia", label: "Rinoplastia Estética y Funcional" },
  { value: "lifting-facial", label: "Lifting Facial y Cervical" },
  { value: "blefaroplastia", label: "Blefaroplastia (Cirugía de Párpados)" },
  { value: "liposuccion-cuello", label: "Liposucción de Cuello" },
  { value: "otoplastia", label: "Otoplastia (Corrección de Orejas)" },
  { value: "mentoplastia", label: "Mentoplastia (Cirugía de Mentón)" },
  { value: "lifting-cejas", label: "Lifting de Cejas" },
  { value: "cicatrices", label: "Corrección de Cicatrices Faciales" },
  { value: "lip-lift", label: "Lip Lift (Levantamiento de Labio)" },
  { value: "frontoplastia", label: "Frontoplastia (Remodelación de Frente)" },
  { value: "queiloplastia", label: "Queiloplastia (Cirugía de Labios)" },
  { value: "platismoplastia", label: "Platismoplastia (Cirugía de Cuello)" },
  { value: "otro", label: "Otro / Consulta General" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-gradient-to-b from-background via-beige/10 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />


      <div className="container mx-auto px-6 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold">
              Contacto
            </p>
          </motion.div>
          <h2 className="font-serif text-5xl lg:text-6xl text-foreground mb-6">
            Agenda tu Consulta
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Da el primer paso hacia la mejor versión de ti.
            Estoy aquí para guiarte en tu transformación.
          </p>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            {/* Form Card */}
            <div className="relative bg-card/80 backdrop-blur-sm p-8 lg:p-10 rounded-2xl shadow-elegant border border-gold/10">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/30 rounded-br-2xl" />

              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl text-foreground mb-2">Reserva tu Cita</h3>
                <p className="font-sans text-sm text-muted-foreground">Completa el formulario y te contactaremos pronto</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans text-xs tracking-[0.15em] uppercase text-gold/80 mb-2 block">
                      Nombre
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-background/50 border border-border/50 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all duration-300 font-sans text-sm"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs tracking-[0.15em] uppercase text-gold/80 mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-background/50 border border-border/50 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all duration-300 font-sans text-sm"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans text-xs tracking-[0.15em] uppercase text-gold/80 mb-2 block">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 bg-background/50 border border-border/50 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all duration-300 font-sans text-sm"
                      placeholder="+1 (809) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs tracking-[0.15em] uppercase text-gold/80 mb-2 block">
                      Servicio de Interés
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 bg-background/50 border border-border/50 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all duration-300 font-sans text-sm text-foreground cursor-pointer"
                    >
                      <option value="">Selecciona un servicio</option>
                      {serviceOptions.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-sans text-xs tracking-[0.15em] uppercase text-gold/80 mb-2 block">
                    Mensaje
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3.5 bg-background/50 border border-border/50 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none transition-all duration-300 font-sans text-sm resize-none"
                    placeholder="Cuéntame sobre tus objetivos..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-gold to-gold-light text-white font-sans text-sm tracking-wider uppercase rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensaje
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Contact Info List */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 border-b border-gold/20 group-hover:border-gold transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold/60 mb-1">
                      {info.title}
                    </h4>
                    {info.details.map((detail) => (
                      <p key={detail} className="font-sans text-base text-foreground/90">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2747441839377!2d-69.9352!3d18.4661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89f1107ea5ab%3A0x5c4f3c9e5f1a1b1a!2sBella%20Vista%2C%20Santo%20Domingo!5e0!3m2!1sen!2sdo!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md p-4 border-l-2 border-gold z-20">
                <p className="font-sans text-xs text-gold uppercase tracking-wider mb-1">📍 Localización</p>
                <p className="font-sans text-sm text-foreground/90">Condominio Plaza Embajador 208, Bella Vista</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center justify-between pt-8 border-t border-gold/10"
            >
              <div>
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Sígueme en Redes
                </p>
                <motion.a
                  href="https://instagram.com/dracherida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-foreground hover:border-gold hover:text-gold transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
              <motion.a
                href="https://wa.me/18093977943"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#25D366] text-white font-sans text-sm rounded-full flex items-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-soft"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Directo
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
