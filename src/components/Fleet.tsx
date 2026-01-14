import { motion } from "framer-motion";
import AnimatedSection from "./animations/AnimatedSection";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

const fleetItems = [
  "Luxury Buses (Toyota Coaster, Rosa)",
  "Heavy Duty Excavators (CAT 301.8, Liebherr)",
  "Water Tankers (Green/Blue tankers)",
  "Agricultural Tractors",
  "Vans for Parcel & Equipment",
  "Dump Trucks (MAN, Fuso)",
];

const Fleet = () => {
  return (
    <section id="fleet" className="py-16 sm:py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute -top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/3 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block">
            Our Fleet
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Modern Equipment & Vehicles
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg px-4 sm:px-0">
            Our well-maintained fleet of 30+ vehicles and machinery ensures reliable 
            service for all your transportation and construction needs.
          </p>
        </AnimatedSection>

        {/* Fleet Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6" staggerDelay={0.08}>
          {fleetItems.map((item, index) => (
            <StaggerItem key={item}>
              <motion.div
                className="group relative bg-card border border-border/50 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 hover:border-accent/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.div 
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent rounded-full flex-shrink-0"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <span className="text-foreground font-medium text-sm sm:text-base group-hover:text-accent transition-colors duration-300">
                    {item}
                  </span>
                </div>

                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Fleet;