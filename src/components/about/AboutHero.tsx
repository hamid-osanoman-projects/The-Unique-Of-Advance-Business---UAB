import { Play, Calendar, MapPin, Globe } from "lucide-react";
import heroImage from "@/assets/hero-fleet.jpg";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="pt-24 sm:pt-28 lg:pt-40 pb-16 sm:pb-20 lg:pb-32 bg-background relative overflow-hidden">
      {/* Subtle Accent Decoration to bridge the theme */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Image with Frame Effect */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10 group">
              <img 
                src={heroImage} 
                alt="UAB Fleet and Services" 
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Play Button Overlay - Refined design */}
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-2xl shadow-accent/40"
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </motion.button>
              </div> */}
            </div>
            
            {/* Decorative Floating Frame */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/20 rounded-3xl -z-0" />
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-accent" />
              <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-[0.3em] block">
                Our Heritage
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0F1C] mb-8 uppercase leading-tight tracking-tight">
              Oman’s Trusted Partner in <span className="text-accent">Logistics</span> 
            </h1>

            <div className="space-y-6 mb-10">
              <p className="text-slate-600 text-lg leading-relaxed">
                The Unique of Advance Business (UAB) is a premier transportation and equipment rental company officially registered in 2015, with roots stretching back to 2010. We specialize in providing the logistical backbone for Oman’s engineering and construction sectors.
              </p>
              <p className="text-slate-600 text-md leading-relaxed border-l-4 border-accent/30 pl-6 italic font-medium">
                Our commitment to excellence and customer satisfaction has made us the preferred choice for leading companies across the Sultanate.
              </p>
            </div>

            {/* Premium Highlight Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 shadow-sm">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="text-[#0A0F1C] font-bold text-sm">Est. 2015</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 shadow-sm">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-[#0A0F1C] font-bold text-sm">Muscat Based</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 shadow-sm">
                <Globe className="w-5 h-5 text-accent" />
                <span className="text-[#0A0F1C] font-bold text-sm">All Oman Coverage</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;