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
    <section id="services" className="py-20 lg:py-32 bg-[#0A0F1C] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-indigo-600/10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.span 
            className="text-accent font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Reliable Solutions in Oman
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase leading-tight tracking-tight">
            Our Core <span className="text-accent">Services</span> 
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8" />
          {/* <p className="text-slate-400 text-sm lg:text-md leading-relaxed">
            Tailored fleet solutions and heavy machinery rentals designed to power the infrastructure of the Sultanate.
          </p> */}
        </AnimatedSection>

        {/* Services Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto" 
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
                    className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500 hover:border-accent/40 h-full block overflow-hidden shadow-2xl"
                  >
                    {/* Background Glow Effect on Hover */}
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/10 blur-3xl group-hover:bg-accent/20 transition-all duration-500 rounded-full" />
                    
                    {/* Number Badge */}
                    <div className="absolute top-6 right-8">
                      <span className="text-4xl font-black text-white/5 group-hover:text-accent/10 transition-colors duration-500 italic">
                        {number}
                      </span>
                    </div>
                    
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(245,159,10,0.4)] transition-all duration-500 border border-accent/20">
                        <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-300 transition-colors duration-300 text">
                        {service.shortDescription}
                      </p>
                      
                      {/* Action Link */}
                      <div className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Border Accent */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
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