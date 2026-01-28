import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./animations/AnimatedSection";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Text for a Classic Corporate Feel */}
      <div className="absolute top-10 left-0 text-[12rem] font-black text-slate-50 select-none leading-none z-0">
        OMAN
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT: Professional Messaging */}
          <div className="text-left">
            <AnimatedSection delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-accent" />
                <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-[0.3em]">
                  Get Moving Today
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A0F1C] mb-8 leading-tight uppercase">
                Ready to Fuel Your <br />
                <span className="text-accent">Business Operations?</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-slate-600 text-md mb-8 max-w-lg leading-relaxed">
                Connect with Oman's most reliable transport partner. We provide tailored 
                solutions for corporate transit and industrial supply with 24/7 support.
              </p>
            </AnimatedSection>

            {/* Classic Trust Indicators */}
            <AnimatedSection delay={0.3} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle2 className="text-primary w-5 h-5" /> All Oman Coverage
              </div>
              {/* <div className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle2 className="text-primary w-5 h-5" /> HSE Compliant
              </div> */}
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Button variant="default" size="xl" className="w-full h-12 sm:w-auto px-8 shadow-xl shadow-primary/20 bg-[#0A0F1C]">
                    <Phone className="w-4 h-4 mr-2" />
                    +968 91116925
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ x: 5 }} className="w-full sm:w-auto">
  <Link to="/services#request-form">
    <Button variant="ghost" className="w-full sm:w-auto group font-bold text-slate-900">
      Request a Custom Quote 
      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
    </Button>
  </Link>
</motion.div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT CONTENT: Classic Imagery (Bus or Tanker) */}
          <AnimatedSection delay={0.3} className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              {/* Replace with your high-res image of a bus or tanker */}
              <img 
                src="https://i.pinimg.com/1200x/7d/84/34/7d843416297fc4f27708c0e5e8b2f669.jpg" 
                alt="UAB Transport Fleet" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Badge to match your shared image style */}
              <div className="absolute bottom-0 right-0 bg-[#0A0F1C] p-6 text-white max-w-[200px]">
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-xs uppercase tracking-tighter opacity-80 font-medium font-tajawal">
                  Dispatch Support Available
                </p>
              </div>
            </div>
            
            {/* Decorative Classic Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl z-0" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0" />
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;