import { motion } from "framer-motion";
import { Shield, Sparkles, Users } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const highlights = [
  { icon: Shield, title: "Modern Equipment", desc: "State-of-the-art machines and free weights for every fitness level." },
  { icon: Sparkles, title: "Clean & Hygienic", desc: "We maintain the highest standards of cleanliness and sanitization." },
  { icon: Users, title: "Separate Floors", desc: "Dedicated floors for men and women ensuring comfort and privacy." },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Who We Are</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6">
          More Than a <span className="text-gradient">Gym</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Absolute Warriors Gym in Barbil is where champions are forged. Our world-class facility offers 
          everything you need to transform your body and unleash your inner warrior.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <item.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-xl font-semibold uppercase mb-3">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <AnimatedCounter end={500} suffix="+" label="Active Members" />
        <AnimatedCounter end={50} suffix="+" label="Equipment" />
        <AnimatedCounter end={5} label="Expert Trainers" />
        <AnimatedCounter end={3} suffix=" Yrs" label="Experience" />
      </div>
    </div>
  </section>
);

export default AboutSection;
