import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FleetHero from "@/components/fleet/FleetHero";
import FleetGrid from "@/components/fleet/FleetGrid";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { Truck, Images } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Fleet = () => {
  const [activeTab, setActiveTab] = useState<"fleet" | "gallery">("fleet");

  return (
    <main className="min-h-screen bg-[#FDFDFD]"> 
      <Header />
      <FleetHero />
      
      {/* Aligned Modular Navigation */}
      <section className="sticky top-20 z-40 bg-white border-y border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex bg-slate-100 my-4 p-1 rounded-xl">
              {["fleet", "gallery"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`relative px-10 py-3 transition-all duration-300 rounded-lg ${
                    activeTab === tab ? "text-white" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabAttr"
                      className="absolute inset-0 bg-[#0A0F1C] rounded-lg shadow-lg"
                      transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-3 font-black text-[11px] uppercase tracking-[0.2em]">
                    {tab === "fleet" ? <Truck className="w-4 h-4" /> : <Images className="w-4 h-4" />}
                    {tab}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content Section */}
      <div className="py-12 sm:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "fleet" ? <FleetGrid /> : <GalleryGrid />}
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Fleet;