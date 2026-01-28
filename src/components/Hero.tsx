import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Globe, ShieldCheck, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";
import CountUpNumber from "./animations/CountUpNumber";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    // Background set to your specific hex: #101438
    <section id="home" className="relative min-h-screen flex items-center bg-[#0A0F1C] overflow-hidden">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#101438]/40 via-[#101438]/80 to-[#101438] z-10" />
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30">
          <source src="/fleet-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-4">
                <span className="h-[2px] w-8 sm:w-12 bg-[#F59F0A]"></span>
                <span className="text-[#F59F0A] font-bold tracking-[0.2em] text-[10px] sm:text-[10px] uppercase">
                  Oman's Transport Leader
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-4 ">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">UNIQUE</span>
                <br />
                <span className="text-[#F59F0A] text-2xl sm:text-4xl md:text-5xl lg:text-5xl uppercase block mt-2">
                  Of Advance Business
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-md md:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed border-l-2 border-[#F59F0A] pl-4 sm:pl-6">
                Reliable transport and heavy machinery solutions serving Muscat and all governorates with a fleet of 40+ specialized vehicles.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#F59F0A] hover:bg-[#d98c08] text-white px-8 h-14 sm:h-16 rounded-none font-bold group transition-all text-sm sm:text-base"
                >
                  <Link to="/contact">
                    REQUEST A QUOTE
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>

                <Link
                  to="/fleet"
                  className="flex items-center justify-center gap-4 text-white hover:text-[#F59F0A] transition-colors group py-2"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#F59F0A]">
                    <Play className="fill-white group-hover:fill-[#F59F0A] w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <span className="font-bold text-[10px] sm:text-xs tracking-widest uppercase">
                    Watch Our Fleet
                  </span>
                </Link>

              </div>
            </motion.div>
          </div>

          {/* Right Stats Grid - Responsive Column adjustment */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0">
             <div className="col-span-2 bg-white/5 backdrop-blur-xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group">
  <div className="relative z-10">
    <p className="text-[#F59F0A] text-5xl sm:text-6xl font-black">
      <CountUpNumber value={14} suffix="+" />
    </p>
    <p className="text-white/60 font-bold uppercase text-[10px] tracking-widest">Years of Excellence</p>
    <p className="text-white/30 text-[9px] mt-1">Serving Oman Since 2010</p>
  </div>
  <Clock className="absolute -right-4 -bottom-4 w-24 h-24 sm:w-32 sm:h-32 text-white/5 group-hover:text-[#F59F0A]/10 transition-colors" />
</div>
             <div className="bg-white/5 backdrop-blur-md p-5 sm:p-6 border border-white/10">
                <Zap className="text-[#F59F0A] mb-3 sm:mb-4 w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-white text-xl sm:text-2xl font-black">24/7</p>
                <p className="text-white/40 text-[9px] uppercase font-bold">Service</p>
             </div>
             <div className="bg-[#F59F0A] p-5 sm:p-6 shadow-xl">
                <ShieldCheck className="text-white mb-3 sm:mb-4 w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-white text-xl sm:text-2xl font-black">100+</p>
                <p className="text-white/80 text-[9px] uppercase font-bold">Happy Clients</p>
             </div>
          </div>
        </div>
      </div>

      {/* WAVE DECORATION - Transitioning to white background */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-30">
        <svg className="relative block w-full h-[50px] sm:h-[80px] md:h-[100px]" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;