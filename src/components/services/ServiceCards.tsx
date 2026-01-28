import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";
import { motion } from "framer-motion";

const ServiceCards = () => {
  return (
    <section className="py-20 lg:py-40 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-accent" />
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em]">
              Our Solutions
            </span>
            <div className="w-10 h-[2px] bg-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0A0F1C] uppercase leading-tight">
            Specialized <span className="text-accent">Industrial</span> Support
          </h2>
        </div>

        <div className="space-y-24 lg:space-y-40">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                id={service.id}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Visual Side */}
                <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Dark Overlay with Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Icon Box */}
                    {/* <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-xl shadow-accent/20 border border-white/20 backdrop-blur-sm">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div> */}
                  </div>

                  {/* Industrial Background Element */}
                  <div className={`absolute -z-10 w-full h-full border-2 border-slate-100 rounded-3xl top-6 ${isEven ? '-right-6' : '-left-6'}`} />
                </div>

                {/* Content Side */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-accent font-black text-4xl opacity-20">0{index + 1}</span>
                    <div className="h-[1px] w-12 bg-slate-200" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-[#0A0F1C] mb-6 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium italic">
                    "{service.shortDescription}"
                  </p>
                  
                  {/* Feature Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="mt-1 bg-accent/10 rounded-full p-1 group-hover:bg-accent transition-colors duration-300">
                          <CheckCircle className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-[#0A0F1C] font-bold text-sm tracking-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100">
                    <Button 
                      asChild 
                      className="bg-accent hover:bg-[#0A0F1C] text-white rounded-full px-8 h-12 font-bold transition-all shadow-lg shadow-accent/10"
                    >
                      <Link to={`/services/${service.id}`} className="flex items-center gap-2">
                        View Specs
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      asChild 
                      className="border-[#0A0F1C]/10 text-[#0A0F1C] hover:bg-[#0A0F1C] hover:text-white rounded-full px-8 h-12 font-bold"
                    >
                      <a href="#request-form">Get Pricing</a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;