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
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-12 bg-[#F59F0A]"></span>
            <span className="text-[#F59F0A] font-black font-bold text-sm uppercase">
              Corporate Essence
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-black text-[#101438] uppercase ">
            The Foundation <br /><span className="text-slate-400">of Our <span className="text-accent">Excellence</span></span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 border border-slate-200 shadow-2xl">
          
          {/* Left Side: Navigation (4 Columns) */}
          <div className="lg:col-span-4 bg-[#101438] p-0 flex flex-col">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center justify-between px-8 py-10 transition-all duration-300 group border-b border-white/5 last:border-b-0 ${
                    isActive ? "bg-white/5" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <Icon className={`w-6 h-6 transition-colors duration-300 ${
                      isActive ? "text-[#F59F0A]" : "text-white/40 group-hover:text-white"
                    }`} />
                    <span className={`text-lg font-black uppercase font-bold transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/40 group-hover:text-white"
                    }`}>
                      {tab.label}
                    </span>
                  </div>
                  
                  {/* Indicator Arrow */}
                  {isActive && (
                    <motion.div layoutId="arrow">
                      <ArrowRight className="text-[#F59F0A] w-6 h-6" />
                    </motion.div>
                  )}
                  
                  {/* Active Sidebar Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="sidebar" 
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#F59F0A]" 
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side: Content (8 Columns) */}
          <div className="lg:col-span-8 bg-slate-50 p-8 sm:p-12 lg:p-20 flex items-center min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeContent && (
                <motion.div
                  key={activeContent.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full"
                >
                  <h3 className="text-3xl sm:text-4xl font-black text-[#101438] mb-8 uppercase font-bold flex items-center gap-4">
                    <span className="w-12 h-1 bg-[#F59F0A]"></span>
                    {activeContent.title}
                  </h3>
                  <p className="text-slate-500 text-md sm:text-lg leading-relaxed font-medium italic">
                    "{activeContent.content}"
                  </p>
                  
                  <div className="mt-12">
                    <div className="inline-block px-4 py-2 border border-[#101438]/10 text-[#101438]/40 font-black text-xs uppercase tracking-[0.2em]">
                      The Unique Of Advance Business &copy; 2015
                    </div>
                  </div>
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