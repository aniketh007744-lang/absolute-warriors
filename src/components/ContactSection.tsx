import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";

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
            { icon: MapPin, title: "Location", info: "Railway Station Road, near Govind Tower, OMC Chowk, Barbil, Odisha 758035" },
            { icon: Phone, title: "Phone / WhatsApp", info: "+91 97766 88832" },
            { icon: Clock, title: "Hours", info: "Morning: 5:00 AM – 11:00 AM\nEvening: 4:00 PM – 9:00 PM" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="text-primary" size={22} />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold uppercase">{item.title}</h4>
                <p className="text-muted-foreground whitespace-pre-line">{item.info}</p>
              </div>
            </div>
          ))}

          {/* Google Maps Embed */}
          <div className="w-full h-48 rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5!2d85.38!3d22.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1fb9117721495d%3A0x6966f21437f6ffd2!2sAbsolute%20Warriors!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Absolute Warriors Gym Location"
            />
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
          <input type="text" placeholder="Your Name" className="w-full bg-card border border-border rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
          <input type="email" placeholder="Your Email" className="w-full bg-card border border-border rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
          <input type="tel" placeholder="Phone Number" className="w-full bg-card border border-border rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
          <textarea placeholder="Your Message" rows={4} className="w-full bg-card border border-border rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
          <button type="submit" className="w-full bg-primary text-primary-foreground font-display tracking-wider uppercase py-3.5 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 group">
            Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://wa.me/919776688832?text=Hi%2C%20I%27m%20interested%20in%20joining%20Absolute%20Warriors%20Gym!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[hsl(142,70%,40%)] text-white font-display tracking-wider uppercase py-3.5 rounded-lg hover:bg-[hsl(142,70%,35%)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </motion.form>
      </div>
    </div>
  </section>
);

export default ContactSection;
