import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { vehicles, fleetCategories, getVehiclesByCategory } from "@/data/fleetData";
import VehicleCard from "./VehicleCard";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

const FleetGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredVehicles = getVehiclesByCategory(activeCategory);

  return (
    <section className="py-4 sm:py-6 lg:py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {fleetCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        {/* <motion.p 
          className="text-center text-muted-foreground text-sm mb-6"
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Showing {filteredVehicles.length} {filteredVehicles.length === 1 ? "vehicle" : "vehicles"}
        </motion.p> */}

        {/* Vehicle Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {filteredVehicles.map((vehicle) => (
                <StaggerItem key={vehicle.id}>
                  <VehicleCard vehicle={vehicle} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredVehicles.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground">No vehicles found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FleetGrid;
