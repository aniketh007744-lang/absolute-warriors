import { motion } from "framer-motion";
import { User, CreditCard, Calendar, CheckCircle } from "lucide-react";

const mockUser = {
  name: "Rahul Sharma",
  plan: "New Admission Offer",
  status: "Active",
  expiry: "April 30, 2026",
  joined: "March 27, 2026",
};

const cards = [
  { icon: User, label: "Member", value: mockUser.name, color: "text-primary" },
  { icon: CreditCard, label: "Plan", value: mockUser.plan, color: "text-primary" },
  { icon: CheckCircle, label: "Status", value: mockUser.status, color: "text-green-500" },
  { icon: Calendar, label: "Expires", value: mockUser.expiry, color: "text-primary" },
];

const DashboardSection = () => (
  <section id="dashboard" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Member Area</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
          Your <span className="text-gradient">Dashboard</span>
        </h2>
        <p className="text-muted-foreground mt-3">Preview of the member dashboard experience</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300"
          >
            <card.icon className={`${card.color} mb-3`} size={28} />
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{card.label}</p>
            <p className="font-display text-lg font-semibold">{card.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DashboardSection;
