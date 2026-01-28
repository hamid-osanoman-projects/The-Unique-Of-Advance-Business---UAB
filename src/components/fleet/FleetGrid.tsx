import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // Use "next/link" if you are using Next.js
import { fleetCategories, getVehiclesByCategory } from "@/data/fleetData";
import { ArrowRight } from "lucide-react";

const FleetGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredVehicles = getVehiclesByCategory(activeCategory);

  return (
    <section className="bg-transparent">
      <div className="container mx-auto px-4">
        
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {fleetCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-md text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-accent text-white shadow-md shadow-accent/20"
                  : "bg-white text-slate-400 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Entire card is now a Link */}
              <Link 
                to={`/fleet/${vehicle.id}`} // Or href={`/fleet/${vehicle.id}`} for Next.js
                className="group block bg-white border border-slate-200 hover:border-accent transition-all duration-500 overflow-hidden rounded-md"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img 
                    src={vehicle.images[0]} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-0 right-0 p-4">
                    <div className="bg-[#0A0F1C] text-white text-[9px] font-black px-3 py-1 uppercase tracking-tighter">
                      {vehicle.category}
                    </div>
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="p-6 flex items-center justify-between border-t border-slate-100 group-hover:bg-[#0A0F1C] transition-colors duration-500">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter group-hover:text-white transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-[10px] font-bold text-slate-400 group-hover:text-accent uppercase tracking-widest mt-1">
                      View Specifications
                    </p>
                  </div>
                  
                  {/* Action Icon */}
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:rotate-[-45deg] transition-all duration-500">
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetGrid;