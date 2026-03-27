import { motion } from "framer-motion";
import { Dumbbell, Heart, Lock, PersonStanding, Bike, UserCheck } from "lucide-react";

const facilities = [
  {
    icon: Dumbbell,
    title: "Boys Gym",
    floor: "Ground Floor",
    desc: "Heavy weights, strength training, and powerlifting zone with premium equipment.",
    accent: true,
  },
  {
    icon: PersonStanding,
    title: "Girls Gym",
    floor: "Second Floor",
    desc: "Safe, private, and comfortable environment designed exclusively for women.",
    accent: true,
  },
  { icon: Bike, title: "Cardio Zone", floor: "Both Floors", desc: "Treadmills, cycling, ellipticals and more for peak cardiovascular fitness." },
  { icon: UserCheck, title: "Personal Training", floor: "All Floors", desc: "One-on-one expert guidance to maximize your results and reach goals faster." },
  { icon: Lock, title: "Locker Rooms", floor: "Each Floor", desc: "Secure, clean lockers with shower facilities for your convenience." },
  { icon: Heart, title: "Recovery Zone", floor: "Ground Floor", desc: "Stretching area and foam rolling station for post-workout recovery." },
];

const FacilitiesSection = () => (
  <section id="facilities" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Our Facilities</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
          Train Like a <span className="text-gradient">Warrior</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className={`relative overflow-hidden rounded-lg p-8 border transition-all duration-300 group ${
              f.accent
                ? "bg-gradient-to-br from-primary/10 to-card border-primary/30 hover:border-primary/60"
                : "bg-card border-border hover:border-primary/40"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <f.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold uppercase">{f.title}</h3>
                <p className="text-xs text-primary tracking-widest uppercase">{f.floor}</p>
              </div>
            </div>
            <p className="text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
