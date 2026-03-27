import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919776688832?text=Hi%2C%20I%27m%20interested%20in%20joining%20Absolute%20Warriors%20Gym!"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] text-white flex items-center justify-center shadow-lg hover:bg-[hsl(142,70%,35%)] hover:scale-110 transition-all duration-300"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, type: "spring" }}
    title="Chat on WhatsApp"
  >
    <MessageCircle size={26} />
  </motion.a>
);

export default WhatsAppButton;
