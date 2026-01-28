import { motion } from "framer-motion";
import { Truck, ShieldCheck, ChevronDown } from "lucide-react";
import uabLogo from "../../assets/uabblue.png";

const FleetHero = () => {
  return (
    <section className="relative pt-24 sm:pt-30 lg:pt-36 pb-10 lg:pb-20 bg-[#F8FAFC] overflow-hidden">
      {/* Structural Background Decoration (Subtle Light Mode) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-200/50 skew-x-[-15deg] translate-x-20 z-0" />
      
      {/* Large Background Watermark (Light version) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-slate-200/40 select-none leading-none z-0 tracking-tighter">
        FLEET
      </div>

      {/* Animated Orbitals (Refined for light background) */}
      <motion.div
        className="absolute -top-10 -right-10 w-64 h-64 border border-accent/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 -left-10 w-48 h-48 border border-slate-300/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* --- NEW LOGO BADGE DESIGN (LOGO ONLY) --- */}
          <motion.div
            className="relative inline-block mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Subtle glow behind the logo so it doesn't look flat */}
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full scale-150" />
            
            <div className="relative group">
              {/* Logo with floating animation */}
              <motion.img 
                src={uabLogo} 
                alt="UAB Logo" 
                className="h-20 w-auto object-contain relative z-10" // Increased size slightly to h-20
                animate={{ y: [0, -8, 0] }} // Slightly more movement for a premium feel
                transition={{ 
                  repeat: Infinity, 
                  duration: 4, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>

          {/* Aggressive Industrial Title */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[0.9] uppercase tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            MODERN FLEET OF <br />
            <span className="text-accent ">
              VEHICLES & EQUIPMENT
            </span>
          </motion.h1>

          {/* Descriptive Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
              UAB operates a robust inventory of 30+ specialized assets. 
              From high-capacity transit buses to heavy-duty industrial machinery, 
              we deliver the reliability your project demands.
            </p>

            {/* Quick Fleet Stats (Updated for light theme) */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 pt-10 border-t border-slate-200">
              <div className="text-center">
                <p className="text-3xl font-black text-slate-900 tracking-tighter">14+</p>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Industry Expereince</p>
              </div>
              <div className="h-10 w-[1px] bg-slate-200 hidden sm:block" />
              <div className="text-center">
                <p className="text-3xl font-black text-slate-900 tracking-tighter">24/7</p>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Support</p>
              </div>
              <div className="h-10 w-[1px] bg-slate-200 hidden sm:block" />
              <div className="text-center">
                <p className="text-3xl font-black text-slate-900 tracking-tighter">100%</p>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Inspected</p>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          {/* <motion.div 
            className="mt-16 flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="text-slate-300 w-8 h-8" />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default FleetHero;