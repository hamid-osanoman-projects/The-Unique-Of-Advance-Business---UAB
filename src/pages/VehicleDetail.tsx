import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Calendar, Tag, CheckCircle, Clock, 
  Wrench, Phone, MessageCircle, ChevronLeft, ChevronRight,
  ShieldCheck, Activity
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { getVehicleById, Vehicle } from "@/data/fleetData";
import AnimatedSection from "@/components/animations/AnimatedSection";

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const vehicle = getVehicleById(id || "");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!vehicle) {
    return (
      <main className="min-h-screen bg-[#FDFDFD]">
        <Header />
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-4xl font-black text-[#0A0F1C] mb-4 uppercase tracking-tighter">Asset Not Found</h1>
          <p className="text-slate-500 mb-8 uppercase text-xs tracking-widest">The requested unit ID does not exist in our active inventory.</p>
          <Link to="/fleet">
            <Button className="bg-[#0A0F1C] text-white rounded-none px-8">Return to Fleet</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const getAvailabilityConfig = (status: Vehicle["availability"]) => {
    switch (status) {
      case "available":
        return { icon: CheckCircle, text: "Ready for Deployment", className: "text-emerald-500 bg-emerald-500/5 border-emerald-500/20" };
      case "in-use":
        return { icon: Clock, text: "Active on Site", className: "text-amber-500 bg-amber-500/5 border-amber-500/20" };
      case "maintenance":
        return { icon: Wrench, text: "Scheduled Maintenance", className: "text-rose-500 bg-rose-500/5 border-rose-500/20" };
    }
  };

  const availability = getAvailabilityConfig(vehicle.availability);
  const AvailabilityIcon = availability.icon;

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Header />
      
      {/* Utility Bar */}
      <section className="pt-32 pb-4 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.button
              onClick={() => navigate("/fleet")}
              className="group flex items-center gap-2 text-slate-400 hover:text-[#0A0F1C] transition-colors text-[10px] font-black uppercase tracking-widest"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Fleet Grid
            </motion.button>
            {/* <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
              Unit ID: UAB-{vehicle.id}
            </span> */}
          </div>
        </div>
      </section>

      {/* Main Detail Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Industrial Gallery */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="relative group">
                  {/* Main Display Box */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200 rounded-md shadow-sm">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeImageIndex}
                        src={vehicle.images[activeImageIndex]}
                        alt={vehicle.name}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </AnimatePresence>
                    
                    {/* Floating Tech Badge */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <div className={`flex items-center gap-2 px-3 py-1.5 border backdrop-blur-md rounded-sm text-[9px] font-black uppercase tracking-widest ${availability.className}`}>
                        <AvailabilityIcon className="w-3.5 h-3.5" />
                        {availability.text}
                      </div>
                    </div>
                  </div>

                  {/* Industrial Thumbnails */}
                  {vehicle.images.length > 1 && (
                    <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                      {vehicle.images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`relative flex-shrink-0 w-24 h-16 transition-all duration-300 rounded-sm overflow-hidden border-2 ${
                            activeImageIndex === index ? "border-accent" : "border-slate-200 opacity-50 grayscale hover:grayscale-0"
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Technical Data */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={0.1}>
                {/* Header Info */}
                <div className="mb-6 border-l-4 border-accent pl-6">
                  <div className="flex items-center gap-4 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                    <span className="flex items-center gap-1.5"><Tag className="w-3 h-3 text-accent" /> {vehicle.category}</span>
                    {/* <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-accent" /> Model {vehicle.year}</span> */}
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0F1C] uppercase tracking-tighter leading-[0.9] mb-4">
                    {vehicle.name}
                  </h1>
                  {/* <p className="text-accent font-black text-sm uppercase tracking-widest">{vehicle.highlight}</p> */}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4" />  Overview
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {vehicle.description}
                  </p>
                </div>

                {/* Technical Specs Grid */}
                <div className="mb-10">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Technical Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(vehicle.specifications).map(([key, value]) => (
                      value && (
                        <div key={key} className="bg-white border border-slate-100 p-4 rounded-md shadow-sm">
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </p>
                          <p className="font-black text-[#0A0F1C] text-sm uppercase tracking-tight">{value}</p>
                        </div>
                      )
                    ))}
                  </div>
                </div>

                {/* Industrial CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
                  <motion.div whileHover={{ scale: 1.02 }} className="flex-1">
                    <Link to="/contact" className="block">
                      <Button className="w-full bg-[#0A0F1C] hover:bg-accent text-white py-6 rounded-md font-black text-xs uppercase tracking-widest group transition-all">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Request Quotation
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="flex-1">
                    <a href="tel:+96891116925" className="block">
                      <Button variant="outline" className="w-full border-[#0A0F1C] text-[#0A0F1C] py-6 rounded-md font-black text-xs uppercase tracking-widest hover:bg-slate-50">
                        <Phone className="w-4 h-4 mr-2" />
                        Direct Line
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default VehicleDetail;