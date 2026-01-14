import { motion } from "framer-motion";

const stats = [
  { value: "14+", label: "Years Exp." },
  { value: "40+", label: "Fleet Units" },
  { value: "1M+", label: "Safe KMs" },
  { value: "24/7", label: "Support" },
];

const AboutStats = () => {
  return (
    <section className="py-10 bg-slate-900 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <h3 className="text-3xl md:text-4xl font-black text-white group-hover:text-accent transition-colors font-bold">
                {stat.value}
              </h3>
              <p className="text-accent text-[10px] md:text-xs uppercase font-bold tracking-widest mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;