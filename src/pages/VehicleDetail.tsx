import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, CheckCircle, Clock, Wrench, Phone, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
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
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Vehicle Not Found</h1>
          <p className="text-muted-foreground mb-8">The vehicle you're looking for doesn't exist.</p>
          <Link to="/fleet">
            <Button variant="accent">Back to Fleet</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const getAvailabilityConfig = (status: Vehicle["availability"]) => {
    switch (status) {
      case "available":
        return { icon: CheckCircle, text: "Available Now", className: "text-green-600 bg-green-50 border-green-200" };
      case "in-use":
        return { icon: Clock, text: "Currently In Use", className: "text-amber-600 bg-amber-50 border-amber-200" };
      case "maintenance":
        return { icon: Wrench, text: "Under Maintenance", className: "text-red-600 bg-red-50 border-red-200" };
    }
  };

  const availability = getAvailabilityConfig(vehicle.availability);
  const AvailabilityIcon = availability.icon;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-4 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            onClick={() => navigate("/fleet")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Fleet
          </motion.button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <AnimatedSection>
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-4">
                  <motion.img
                    key={activeImageIndex}
                    src={vehicle.images[activeImageIndex]}
                    alt={`${vehicle.name} - Image ${activeImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Navigation Arrows */}
                  {vehicle.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Strip */}
                {vehicle.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {vehicle.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          activeImageIndex === index
                            ? "border-accent"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Details */}
            <AnimatedSection delay={0.2}>
              <div>
                {/* Category & Year */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground">
                    <Tag className="w-3.5 h-3.5" />
                    {vehicle.category.charAt(0).toUpperCase() + vehicle.category.slice(1)}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {vehicle.year}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {vehicle.name}
                </h1>
                <p className="text-accent font-semibold text-lg mb-4">{vehicle.highlight}</p>

                {/* Availability */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium mb-6 ${availability.className}`}>
                  <AvailabilityIcon className="w-4 h-4" />
                  {availability.text}
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {vehicle.description}
                </p>

                {/* Usage Type */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Usage Type</h3>
                  <p className="text-muted-foreground">{vehicle.usageType}</p>
                </div>

                {/* Specifications */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Specifications</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(vehicle.specifications).map(([key, value]) => (
                      value && (
                        <div key={key} className="bg-muted/50 rounded-lg p-3">
                          <p className="text-xs text-muted-foreground capitalize mb-1">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </p>
                          <p className="font-semibold text-foreground text-sm">{value}</p>
                        </div>
                      )
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Link to="/contact" className="block">
                      <Button variant="accent" size="lg" className="w-full btn-shimmer">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Enquire Now
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <a href="tel:+96891116925" className="block">
                      <Button variant="outline" size="lg" className="w-full">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Us
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default VehicleDetail;
