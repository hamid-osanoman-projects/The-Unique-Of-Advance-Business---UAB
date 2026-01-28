import { useState } from "react";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "mission",
    label: "Mission",
    icon: Target,
    title: "Our Mission",
    content: "To drive Oman’s economic growth by providing integrated logistics and equipment solutions that prioritize safety, efficiency, and long-term value for our corporate partners.",
  },
  {
    id: "vision",
    label: "Vision",
    icon: Eye,
    title: "Our Vision",
    content: "To be the most dependable name in Oman’s transport industry, setting the benchmark for route discipline and operational consistency in every governorate.",
  },
  {
    id: "values",
    label: "Values",
    icon: Heart,
    title: "Our Values",
    content: "Integrity in contracts, Punctuality in delivery, and Unwavering Commitment to the safety of our passengers and equipment operators.",
  },
];

const MissionVisionValues = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 lg:mb-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-accent" />
            <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-[0.3em] block">
              Corporate Essence
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A0F1C] uppercase leading-tight tracking-tight">
            The Foundation <br />
            <span className="text-slate-400">of Our <span className="text-accent">Excellence</span></span>
          </h2>
        </div>

        {/* The Component Box */}
        <div className="grid lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-slate-100">
          
          {/* Left Side: Navigation */}
          <div className="lg:col-span-4 bg-[#0A0F1C] p-0 flex flex-col">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center justify-between px-8 py-12 transition-all duration-500 group border-b border-white/5 last:border-b-0 ${
                    isActive ? "bg-white/[0.03]" : "hover:bg-white/[0.01]"
                  }`}
                >
                  <div className="flex items-center gap-5 z-10">
                    <div className={`p-3 rounded-lg transition-colors duration-300 ${
                      isActive ? "bg-accent text-white" : "bg-white/5 text-white/40 group-hover:text-white"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-lg font-bold uppercase tracking-widest transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/40 group-hover:text-white"
                    }`}>
                      {tab.label}
                    </span>
                  </div>
                  
                  {/* Arrow for Active Tab */}
                  {isActive && (
                    <motion.div layoutId="arrow" className="z-10">
                      <ArrowRight className="text-accent w-6 h-6" />
                    </motion.div>
                  )}
                  
                  {/* Indicator Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="sidebar" 
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent shadow-[4px_0_15px_rgba(245,159,10,0.4)]" 
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side: Content Area */}
          <div className="lg:col-span-8 bg-slate-50 p-10 sm:p-16 lg:p-24 flex items-center min-h-[450px] relative">
            {/* Faint Background Logo/Watermark */}
            <div className="absolute right-10 bottom-10 opacity-[0.03] select-none pointer-events-none">
                <Target size={300} strokeWidth={1} />
            </div>

            <AnimatePresence mode="wait">
              {activeContent && (
                <motion.div
                  key={activeContent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="w-full relative z-10"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-1.5 bg-accent rounded-full" />
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0A0F1C] uppercase">
                      {activeContent.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-500 text-lg sm:text-xl leading-relaxed font-medium italic">
                    "{activeContent.content}"
                  </p>
                  
                  {/* <div className="mt-16 pt-8 border-t border-slate-200">
                    <p className="text-[#0A0F1C]/30 font-bold text-xs uppercase tracking-[0.4em]">
                      UAB Logistics &copy; Standard of Service
                    </p>
                  </div> */}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;