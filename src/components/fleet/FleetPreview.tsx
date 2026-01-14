import { motion } from "framer-motion";
import { ArrowRight, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import { getFeaturedVehicles } from "@/data/fleetData";
import VehicleCard from "./VehicleCard";

const FleetPreview = () => {
  const featuredVehicles = getFeaturedVehicles().slice(0, 4);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6">
            <Truck className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">Our Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 uppercase leading-tight">
          Professional <span className="text-[#F59F0A]">Transport Services</span>  in Oman
          </h2>

          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase leading-tight">
            Professional <span className="text-[#F59F0A]">Transport Services</span> & Heavy Equipment in Oman
          </h2> */}
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            Explore our well-maintained fleet of 30+ vehicles including luxury buses, 
            heavy excavators, water tankers, and more, ready to serve across Oman.
          </p>
        </AnimatedSection>

        {/* Featured Vehicles Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12">
          {featuredVehicles.map((vehicle) => (
            <StaggerItem key={vehicle.id}>
              <VehicleCard vehicle={vehicle} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/fleet">
              <Button variant="accent" size="lg" className="btn-shimmer group">
                View Full Fleet
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FleetPreview;
