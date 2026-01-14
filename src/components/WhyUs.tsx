import { MapPin, Clock, DollarSign, Shield } from "lucide-react";
import heroImage from "@/assets/hero-fleet.jpg";
import { motion } from "framer-motion";
import AnimatedSection from "./animations/AnimatedSection";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";
import CountUpNumber from "./animations/CountUpNumber";

const features = [
  {
    title: "Real-Time Tracking",
    description: "GPS tracking for all fleets with accuracy.",
    icon: MapPin,
  },
  {
    title: "24/7 Reliability",
    description: "Proven track record of punctuality and safety around the clock.",
    icon: Clock,
  },
  {
    title: "Cost Efficiency",
    description: "Competitive rates without compromising quality or service.",
    icon: DollarSign,
  },
  {
    title: "Safety First",
    description: "Trained drivers and well-maintained vehicles for your peace of mind.",
    icon: Shield,
  },
];

const WhyUs = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background gradient blob */}
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
            <div className="relative">
              <motion.div 
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src="https://i.pinimg.com/736x/7e/1e/27/7e1e274103b457e0ed8b4c30e083e658.jpg" 
                  alt="UAB Heavy Equipment in Oman" 
                  className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
                />
              </motion.div>
              
              {/* Stats overlay */}
              <motion.div 
                className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-primary text-primary-foreground rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 sm:mb-1">
                  <CountUpNumber value={100} suffix="%" />
                </p>
                <p className="text-primary-foreground/70 text-xs sm:text-sm">Oman Coverage</p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <AnimatedSection direction="up" delay={0.3} className="order-1 lg:order-2">
            {/* <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block">
              Why Choose UAB
            </span> */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 uppercase leading-tight">
              Why Choose <span className="text-accent">Us</span> ?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
            With over 14 years of industry presence in the Sultanate and officially established since 2015, UAB has built a reputation for excellence through a robust fleet of 40+ specialized vehicles.
            </p>

            {/* Features List */}
            <StaggerContainer className="space-y-4 sm:space-y-6" staggerDelay={0.1}>
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <StaggerItem key={feature.title}>
                    <motion.div
                      className="flex items-start gap-3 sm:gap-4 group cursor-pointer"
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:shadow-primary-glow transition-all duration-300"
                        whileHover={{ rotate: 10 }}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </motion.div>
                      <div>
                        <h4 className="text-foreground font-semibold text-base sm:text-lg mb-0.5 sm:mb-1 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;