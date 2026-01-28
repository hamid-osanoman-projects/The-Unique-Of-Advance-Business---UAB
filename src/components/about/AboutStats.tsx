import { motion } from "framer-motion";

const stats = [
  { value: "14+", label: "Years Exp." },
  { value: "100+", label: "Happy Clients" },
  { value: "1M+", label: "Safe KMs" },
  { value: "24/7", label: "Support" },
];

const AboutStats = () => {
  return (
    <section className="py-10 md:py-10 bg-[#0A0F1C] border-y border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group relative"
            >
              {/* Vertical Divider for Desktop */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}

              <h3 className="text-4xl md:text-5xl font-black text-white group-hover:text-accent transition-colors duration-300 tracking-tight">
                {stat.value}
              </h3>
              
              <div className="flex flex-col items-center mt-2">
                <div className="w-8 h-[2px] bg-accent/30 group-hover:w-12 group-hover:bg-accent transition-all duration-300 mb-2" />
                <p className="text-slate-400 group-hover:text-white text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] transition-colors">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;