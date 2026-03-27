import { motion } from "framer-motion";
import { Flame, Zap, Check } from "lucide-react";

const PlansSection = () => (
  <section id="plans" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Membership</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
          Choose Your <span className="text-gradient">Plan</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Admission Offer */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8 }}
          className="relative bg-gradient-to-br from-primary/20 via-card to-card border-2 border-primary rounded-xl p-8 overflow-hidden group"
        >
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-display tracking-wider uppercase px-3 py-1 rounded-full flex items-center gap-1">
            <Flame size={14} /> Best Value
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <Flame className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold uppercase">New Admission</h3>
              <p className="text-primary text-sm">Limited Time Offer</p>
            </div>
          </div>
          <div className="mb-6">
            <span className="font-display text-5xl font-bold">₹2,000</span>
            <span className="text-muted-foreground ml-2">one-time</span>
          </div>
          <ul className="space-y-3 mb-8">
            {["One-time admission fee", "1 Month FREE membership", "Full gym access", "Locker facility included", "Expert trainer guidance"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground/90">
                <Check size={18} className="text-primary flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="block text-center bg-primary text-primary-foreground font-display tracking-wider uppercase px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
            style={{ animation: "pulse-glow 3s infinite" }}
          >
            Join Now
          </a>
        </motion.div>

        {/* Monthly Plan */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8 }}
          className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-all duration-300 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold uppercase">Monthly Plan</h3>
              <p className="text-muted-foreground text-sm">After First Free Month</p>
            </div>
          </div>
          <div className="mb-6">
            <span className="font-display text-5xl font-bold">₹1,000</span>
            <span className="text-muted-foreground ml-2">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {["Full gym access", "All equipment included", "Cardio & strength zones", "Locker facility", "Flexible monthly renewal"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground/90">
                <Check size={18} className="text-primary flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="block text-center border-2 border-primary text-primary font-display tracking-wider uppercase px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Join Now
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PlansSection;
