import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Clock } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative bg-[#0A0F1C] pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 overflow-hidden">
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2" />
        {/* Grid Overlay for Industrial Feel */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-accent/50" />
              <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-[0.4em]">
                Excellence in Motion
              </span>
              <div className="w-12 h-[1px] bg-accent/50" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-8 uppercase leading-tight tracking-tight">
              Integrated <span className="text-accent">Logistics</span> & <br className="hidden lg:block" /> Industrial Services
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Precision-driven site support for Engineering, Construction, and Manpower sectors across the Sultanate of Oman.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck className="w-5 h-5 text-accent" />
                Safety Certified
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                <Truck className="w-5 h-5 text-accent" />
                All Oman Coverage
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                <Clock className="w-5 h-5 text-accent" />
                24/7 Support
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                className="bg-accent hover:bg-white hover:text-[#0A0F1C] text-white rounded-full font-bold px-10 h-14 shadow-xl shadow-accent/20 transition-all duration-300"
              >
                <a href="#request-form">Get a Service Quote</a>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-white/20 text-white hover:bg-white/5 rounded-full px-10 h-14 font-bold transition-all"
              >
                <a href="tel:+96891116925">Speak to an Expert</a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Modern Bottom Slope */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white clip-path-slope" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </section>
  );
};

export default ServicesHero;