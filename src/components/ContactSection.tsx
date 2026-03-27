import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Get In Touch</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
          Contact <span className="text-gradient">Us</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {[
            { icon: MapPin, title: "Location", info: "Barbil, Keonjhar, Odisha" },
            { icon: Phone, title: "Phone", info: "+91 XXXXX XXXXX" },
            { icon: Clock, title: "Hours", info: "5:00 AM – 10:00 PM (Mon-Sat)" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="text-primary" size={22} />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold uppercase">{item.title}</h4>
                <p className="text-muted-foreground">{item.info}</p>
              </div>
            </div>
          ))}

          {/* Map placeholder */}
          <div className="w-full h-48 rounded-xl bg-card border border-border flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Google Maps Embed</p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-card border border-border rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-card border border-border rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-card border border-border rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full bg-card border border-border rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-display tracking-wider uppercase py-3.5 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 group"
          >
            Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default ContactSection;
