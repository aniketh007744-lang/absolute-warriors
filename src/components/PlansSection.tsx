import { motion } from "framer-motion";
import { Flame, Zap, Check } from "lucide-react";

// 🔥 PLAN FUNCTION
async function handlePlanSelect(plan: string) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const token = localStorage.getItem("token");

  if (!user?.id) {
    alert("Please login first");
    window.location.href = "/signup";
    return;
  }

  try {
    const res = await fetch(`http://localhost:5000/update-plan/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token || ""
      },
      body: JSON.stringify({ plan })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    alert("Plan Activated 🚀");

    // ✅ Update local storage
    localStorage.setItem("user", JSON.stringify(data));

    // 🔁 Refresh UI
    window.location.reload();

  } catch (err) {
    console.error(err);
    alert("Error selecting plan");
  }
}

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
        <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">
          Membership
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
          Choose Your <span className="text-gradient">Plan</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        {/* 🔥 ADMISSION PLAN */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8 }}
          className="relative bg-gradient-to-br from-primary/20 via-card to-card border-2 border-primary rounded-xl p-8"
        >
          <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <Flame size={14} /> Best Value
          </div>

          <h3 className="text-2xl font-bold mb-2">New Admission</h3>
          <p className="text-primary mb-4">Limited Offer</p>

          <h2 className="text-4xl font-bold mb-6">₹2000</h2>

          <ul className="space-y-3 mb-8">
            {["1 Month FREE", "Full Access", "Trainer Support"].map(item => (
              <li key={item} className="flex gap-2 items-center">
                <Check size={16} /> {item}
              </li>
            ))}
          </ul>

          {/* 🔥 BUTTON CONNECTED */}
          <button
            onClick={() => handlePlanSelect("Admission")}
            className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90"
          >
            Join Now
          </button>
        </motion.div>

        {/* ⚡ MONTHLY PLAN */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8 }}
          className="bg-card border border-border rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-2">Monthly Plan</h3>
          <p className="text-muted-foreground mb-4">After Free Month</p>

          <h2 className="text-4xl font-bold mb-6">₹1000</h2>

          <ul className="space-y-3 mb-8">
            {["Full Access", "Cardio + Strength", "Flexible Renewal"].map(item => (
              <li key={item} className="flex gap-2 items-center">
                <Check size={16} /> {item}
              </li>
            ))}
          </ul>

          {/* 🔥 BUTTON CONNECTED */}
          <button
            onClick={() => handlePlanSelect("Monthly")}
            className="w-full border border-primary text-primary py-3 rounded-lg hover:bg-primary hover:text-white"
          >
            Join Now
          </button>
        </motion.div>

      </div>
    </div>
  </section>
);

export default PlansSection;