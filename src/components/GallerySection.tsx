import { motion } from "framer-motion";
import gymBuilding from "@/assets/gym-building.png";
import gymFloor from "@/assets/gym-floor.png";
import equipment1 from "@/assets/gym-equipment-1.png";
import equipment2 from "@/assets/gym-equipment-2.png";
import equipment3 from "@/assets/gym-equipment-3.png";

const images = [
  { src: gymBuilding, alt: "Absolute Warriors Gym Building" },
  { src: gymFloor, alt: "Gym Floor with Equipment" },
  { src: equipment1, alt: "Lat Pulldown Machine" },
  { src: equipment2, alt: "Functional Cable Crossover" },
  { src: equipment3, alt: "Leg Press & Preacher Curl Station" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">See Our Space</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
          Gym <span className="text-gradient">Gallery</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className={`overflow-hidden rounded-xl border border-border group cursor-pointer ${
              i === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
