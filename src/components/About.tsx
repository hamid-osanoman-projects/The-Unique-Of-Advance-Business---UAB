import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fleet.jpg";
import { motion } from "framer-motion";
import AnimatedSection from "./animations/AnimatedSection";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

const features = [
  "Real-Time GPS Tracking",
  "Competitive Long-Term Leasing",
  "Experienced Drivers",
  "Modern Fleet Vehicles",
  "Competitive Pricing",
  "All Oman Coverage",
];

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
      {/* Top wave decoration */}
      {/* <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full rotate-180">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" className="fill-primary"/>
        </svg>
      </div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 lg:mt-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative">
              <motion.div 
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src="https://i.pinimg.com/1200x/d7/14/6e/d7146e197dd6d5542d343e8ef09737f7.jpg"
                  alt="Professional bus and truck fleet in Muscat Oman - UAB Transport" 
                  className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
                />
                {/* Overlay card */}
                <motion.div 
                  className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-card/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.div 
                      className="w-12 sm:w-14 h-12 sm:h-14 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 10 }}
                    >
                      <span className="text-primary-foreground font-bold text-lg sm:text-xl">14+</span>
                    </motion.div>
                    <div>
                      <p className="text-foreground font-bold text-sm sm:text-base">Years of Excellence</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">Serving Oman since 2010</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Decorative element - hidden on mobile */}
              <motion.div 
                className="hidden sm:block absolute -z-10 -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-full h-full border-2 border-primary/20 rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <AnimatedSection direction="up" delay={0.3}>
            <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block">
              About UAB
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight uppercase ">
              Trusted Transport Solutions in{" "}
              <span className="text-accent">Oman</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            The Unique of Advance Business (UAB) has been a driving force in Oman’s logistics sector since its initial foundations in 2010, officially registering and expanding operations in 2015. Over the past decade, we have evolved into a premier provider of industrial staff transportation, water logistics, and heavy equipment rentals.
            </p>

            {/* Features Grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8" staggerDelay={0.08}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                    </motion.div>
                    <span className="text-foreground font-medium text-sm sm:text-base group-hover:text-primary transition-colors">
                      {feature}
                    </span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="default" size="lg" className="w-full sm:w-auto btn-shimmer group">
                Read More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto hover-lift">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;