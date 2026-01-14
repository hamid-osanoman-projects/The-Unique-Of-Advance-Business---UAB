import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "./animations/AnimatedSection";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";
import HoverCard from "./animations/HoverCard";
import { servicesData } from "@/data/servicesData";

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-gradient-section relative overflow-hidden">
      {/* Subtle background animation */}
      <motion.div
        className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block">
            Reliable Solutions in Oman
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 uppercase leading-tight">
            Our Core <span className="text-accent">Services</span> 
          </h2>
          <motion.div 
            className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-4 sm:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg px-4 sm:px-0">
            From specialized staff transport to heavy machinery rentals, we provide high-quality fleet solutions tailored for Omani businesses and institutions.
          </p>
        </AnimatedSection>

        {/* Services Grid - UPDATED TO 4 COLUMNS */}
        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-6 justify-center max-w-7xl mx-auto" 
          staggerDelay={0.1}
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const number = String(index + 1).padStart(2, '0');
            
            return (
              <StaggerItem key={service.id}>
                <HoverCard className="h-full">
                  <Link 
                    to={`/services/${service.id}`}
                    className="group relative bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-xl h-full block"
                  >
                    {/* Number Badge */}
                    <div className="absolute top-6 right-8">
                      <motion.span 
                        className="text-3xl font-black text-primary/10 group-hover:text-primary/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        {number}
                      </motion.span>
                    </div>
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <motion.div 
                        className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-primary-glow transition-all duration-300"
                        whileHover={{ rotate: 10 }}
                      >
                        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 pr-6">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                        {service.shortDescription}
                      </p>
                      
                      {/* Learn More Link */}
                      <motion.span 
                        className="inline-flex items-center gap-2 text-primary font-medium text-sm link-underline"
                        whileHover={{ x: 5 }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.span>
                    </div>
                  </Link>
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;