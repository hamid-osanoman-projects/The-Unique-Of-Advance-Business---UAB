import { motion } from "framer-motion";
import { Truck } from "lucide-react";

const FleetHero = () => {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.08)_0%,transparent_40%)]" />
      </div>

      {/* Animated decorations */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 border border-primary-foreground/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 border border-primary-foreground/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          {/* <motion.div
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Truck className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">Our Fleet</span>
          </motion.div> */}

          {/* Title */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Modern Fleet of{" "}<br></br>
            <span className="text-accent">Vehicles & Equipment</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xs sm:text-lg text-primary-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our comprehensive fleet of 30+ well-maintained vehicles and heavy equipment. 
            From luxury buses to powerful excavators, we have the right solution for your needs.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FleetHero;
