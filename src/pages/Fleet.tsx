import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FleetHero from "@/components/fleet/FleetHero";
import FleetGrid from "@/components/fleet/FleetGrid";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import FleetCTA from "@/components/fleet/FleetCTA";
import { Truck, Images } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Fleet = () => {
  const [activeTab, setActiveTab] = useState<"fleet" | "gallery">("fleet");

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FleetHero />
      
      {/* Tab Navigation */}
      <section className="py-4 sm:py-6 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex bg-muted p-1.5 rounded-xl gap-1">
              <button
                onClick={() => setActiveTab("fleet")}
                className={`relative flex items-center gap-2 px-6 sm:px-8 py-3 rounded-lg font-medium text-sm sm:text-base transition-colors ${
                  activeTab === "fleet"
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === "fleet" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-lg shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                  Our Fleet
                </span>
              </button>
              <button
                onClick={() => setActiveTab("gallery")}
                className={`relative flex items-center gap-2 px-6 sm:px-8 py-3 rounded-lg font-medium text-sm sm:text-base transition-colors ${
                  activeTab === "gallery"
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === "gallery" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-lg shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Images className="w-4 h-4 sm:w-5 sm:h-5" />
                  Gallery
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "fleet" ? <FleetGrid /> : <GalleryGrid />}
      </motion.div>

      {/* <FleetCTA /> */}
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Fleet;