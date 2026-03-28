import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  // 🔥 STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // 🔥 SUBMIT FUNCTION
  async function handleContact(e: any) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message
        })
      });

      const data = await res.json();

      alert(data.message);

      // ✅ CLEAR FORM
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
            Contact <span className="text-gradient">Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {[
              {
                icon: MapPin,
                title: "Location",
                info: "Railway Station Road, near Govind Tower, OMC Chowk, Barbil, Odisha 758035"
              },
              {
                icon: Phone,
                title: "Phone / WhatsApp",
                info: "+91 97766 88832"
              },
              {
                icon: Clock,
                title: "Hours",
                info: "Morning: 5:00 AM – 11:00 AM\nEvening: 4:00 PM – 9:00 PM"
              }
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold uppercase">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {item.info}
                  </p>
                </div>
              </div>
            ))}

            {/* MAP */}
            <div className="w-full h-48 rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5!2d85.38!3d22.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1fb9117721495d%3A0x6966f21437f6ffd2!2sAbsolute%20Warriors!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Gym Location"
              />
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleContact}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-card border border-border rounded-lg px-5 py-3.5"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-card border border-border rounded-lg px-5 py-3.5"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-card border border-border rounded-lg px-5 py-3.5"
              required
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-card border border-border rounded-lg px-5 py-3.5 resize-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg flex justify-center gap-2"
            >
              Send Message <Send size={18} />
            </button>

            <a
              href="https://wa.me/916372343471"
              target="_blank"
              className="w-full bg-green-500 text-white py-3.5 rounded-lg flex justify-center gap-2"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;