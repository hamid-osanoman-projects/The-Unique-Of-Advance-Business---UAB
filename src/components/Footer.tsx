import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

// Import logo
import uabwhite from "../assets/uabwhite.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0A0F1C] relative overflow-hidden border-t border-white/5">
      {/* Industrial Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
      />

      {/* Decorative Glow */}
      <motion.div
        className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-16 relative z-10">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16" staggerDelay={0.1}>
          
          {/* Company Info - Taking 5 columns */}
<StaggerItem className="md:col-span-5 space-y-8">
  <div className="flex items-center gap-4">
    <motion.div 
      className="w-20 h-20 flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
    >
      <img 
        src={uabwhite} 
        alt="UAB Logo" 
        className="w-full h-full object-contain"
      />
    </motion.div>
    
    <div>
      <h3 className="font-black text-white text-lg uppercase leading-none">
        The Unique Of <br /> 
        <span className="text-accent text-[13.5px]">Advance Business</span>
      </h3>
    </div>
  </div>

  <div>
    <p className="text-slate-400 max-w-md leading-relaxed text-sm font-medium mb-10">
      UAB delivers professional transportation and equipment rental solutions across Oman. 
      Specializing in industrial staff transport and heavy machinery for the construction sector 
      with a 14-year legacy of reliability.
    </p>
    {/* Small Rights Reserved Text */}
    <p className="text-slate-500 text-[8px] uppercase tracking-widest font-semibold">
      © {currentYear} UAB OMAN. ALL RIGHTS RESERVED.
    </p>
  </div>
</StaggerItem>

          {/* Quick Links - Taking 3 columns */}
          <StaggerItem className="md:col-span-3">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
               <span className="w-4 h-[2px] bg-accent" /> Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Fleet", href: "/fleet" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-accent transition-colors duration-300 flex items-center gap-3 text-sm font-bold uppercase tracking-tight group"
                  >
                    <ArrowRight className="w-3 h-3 text-accent transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Contact Info - Taking 4 columns */}
          <StaggerItem className="md:col-span-4">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
               <span className="w-4 h-[2px] bg-accent" /> Contact Hub
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10 group-hover:border-accent/50 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+96891116925" className="text-white font-black hover:text-accent transition-colors tracking-tight">+968 9111 6925</a>
                  <a href="tel:+96891194547" className="text-slate-400 text-md font-bold hover:text-accent transition-colors">+968 9119 4547</a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <a href="mailto:abdullah@uniqueom.com" className="text-white font-black hover:text-accent transition-colors tracking-tight break-all">
                  abdullah@uniqueom.com
                </a>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <address className="not-italic text-slate-400 text-xs font-medium leading-relaxed uppercase tracking-tight">
                  ASAS Service Center Building, 2nd Floor,<br />
                  Office 21, Ghala 130,<br />
                  Grand Mosque St, Muscat, OMAN
                </address>
              </li>
            </ul>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Bar - Structured & Clean */}
        
      </div>
    </footer>
  );
};

export default Footer;