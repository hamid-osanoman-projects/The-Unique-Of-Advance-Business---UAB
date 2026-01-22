import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "./animations/AnimatedSection";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

// Import logo at the top
import uabwhite from "../assets/uabwhite.png"
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-foreground/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 relative">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12" staggerDelay={0.1}>
          
          {/* Company Info */}
          <StaggerItem className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-2">
              {/* Logo Container */}
              <motion.div 
                className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={uabwhite} 
                  alt="UAB Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              <div className="ml-[-4px]">
  {/* Footer Title with Archivo Font */}
  <p className="font-archivo text-primary-foreground font-bold text-base sm:text-lg lg:text-xl leading-tight uppercase">
    The Unique of Advance Business
  </p>
  
  {/* Footer Subtitle with Archivo Font */}
  <p className="font-archivo text-primary-foreground/60 text-[10px] sm:text-xs tracking-wider uppercase mt-1">
    Transport & Equipment Solutions
  </p>
</div>
            </div>

            <p className="text-primary-foreground/70 max-w-lg mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
              The Unique of Advance Business (UAB) delivers professional transportation and equipment rental solutions across Oman. We specialize in industrial staff transport, heavy equipment hire, and logistics management for the construction and corporate sectors. With a proven 14-year track record and a fleet of 40+ vehicles, we ensure your project stays on schedule.
            </p>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem>
            <h4 className="text-primary-foreground font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Fleet", href: "/fleet" },
                { name: "Contact", href: "/contact" }
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base group"
                  >
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </StaggerItem>

          {/* Contact Info */}
          <StaggerItem>
            <h4 className="text-primary-foreground font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <motion.a
                  href="tel:+96891116925"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <span className="text-sm sm:text-base">+968 91116925</span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="mailto:theuniqueofadvance@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <span className="break-all text-xs sm:text-sm">theuniqueofadvance@gmail.com</span>
                </motion.a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <span className="text-xs sm:text-sm leading-tight">
                   Near Al-Maha Petrol Pump,ASAS Service Center Building, 2nd Floor,  Office 21, 
                  Grand Mosque st  , Muscat, OMAN<br />
                  
                </span>
              </li>
            </ul>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-4 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-foreground/60 text-xs sm:text-sm">
            © {currentYear} The Unique of Advance Business (UAB). All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-xs sm:text-sm italic">
            Transport Company Muscat | Heavy Equipment Rental Oman
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;