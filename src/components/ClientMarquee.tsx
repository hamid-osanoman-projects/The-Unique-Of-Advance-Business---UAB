import { motion } from "framer-motion";
import AnimatedSection from "./animations/AnimatedSection";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

// IMPORT ALL LOGOS
import alHajry from "../assets/logos/AL-Hajry-logo.png";
import alTasnim from "../assets/logos/al-tasnim-logo.png";
import alZarraq from "../assets/logos/Al-ZARRAQ-logo.jpg";
import anson from "../assets/logos/Anson-logo.png";
import atlantic from "../assets/logos/atlantic_white-Logo.png";
import galfar from "../assets/logos/galfar-logo.png";
import gps from "../assets/logos/gps-logo.png";
import keller from "../assets/logos/keller-logo.svg";
import skyline from "../assets/logos/Skyline-logo.png";
import zublin from "../assets/logos/ZUBLIN-STRABAG-LOGO.png";
import iacovou from "../assets/logos/iacovou_logo.png";
import royaltech from "../assets/logos/royaltech-LOGO.png";
import gds from "../assets/logos/gds-450-white.png";
import burj from "../assets/logos/burj-logo-lg.png";
import oneic from "../assets/logos/OneicLogo.png";
import ikk from "../assets/logos/IKK-Group-Logo.png";
import islamkairi from "../assets/logos/islamkairi-kabbani-group-logo.png";
import jalmood from "../assets/logos/jalmood_logo.jpg";
import acciona from "../assets/logos/logo-acciona.svg";
import masirah from "../assets/logos/masirah-logo.png";
import moukhtar from "../assets/logos/moukhtar-logo.gif";
import novatel from "../assets/logos/novatel-logo.jpeg";
import opi from "../assets/logos/opi_logo.avif";
import ryboa from "../assets/logos/ryboahaima-logo.png";

const clients = [
  { name: "GPS", logo: gps, isWhite: false },
  { name: "Al Tasnim", logo: alTasnim, isWhite: true },
  { name: "Al Zarraq", logo: alZarraq, isWhite: false },
  { name: "Anson", logo: anson, isWhite: false },
  { name: "Al Hajry", logo: alHajry, isWhite: true },
  { name: "Burj Al Shaya", logo: burj, isWhite: false },
  { name: "Galfar", logo: galfar, isWhite: false },
  { name: "GDS", logo: gds, isWhite: false },
  { name: "Iacovou", logo: iacovou, isWhite: false },
  { name: "IKK Group", logo: ikk, isWhite: false },
  { name: "Kabbani Group", logo: islamkairi, isWhite: true },
  { name: "Jalmood", logo: jalmood, isWhite: false },
  { name: "Keller", logo: keller, isWhite: false },
  { name: "Acciona", logo: acciona, isWhite: false },
  { name: "Masirah", logo: masirah, isWhite: true },
  { name: "Moukhtar", logo: moukhtar, isWhite: false },
  { name: "Atlantic", logo: atlantic, isWhite: true },
  { name: "Novotel", logo: novatel, isWhite: false },
  { name: "ONEIC", logo: oneic, isWhite: false },
  { name: "OPI", logo: opi, isWhite: false },
  { name: "Skyline", logo: skyline, isWhite: true },
  { name: "Royal Tech", logo: royaltech, isWhite: false },
  { name: "Ryboa Haima", logo: ryboa, isWhite: false },
  { name: "Zublin Strabag", logo: zublin, isWhite: false },
];

const ClientGrid = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Content */}
        <AnimatedSection className="text-center mb-20">
          <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 block">
            Client Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6 uppercase leading-tight">
            Our Valued <span className="text-accent">Clients</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </AnimatedSection>

        {/* Dynamic Staggered Grid */}
        <StaggerContainer 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 max-w-7xl mx-auto"
          staggerDelay={0.03}
        >
          {clients.map((client) => (
            <StaggerItem key={client.name}>
              <motion.div
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className={`
                  relative rounded-2xl p-4 h-28 flex items-center justify-center 
                  shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-default
                  ${client.isWhite ? "bg-[#1A1A1A]" : "bg-[#F8F8F5] hover:bg-white"}
                  border border-transparent hover:border-accent/20
                `}
              >
                {/* Visual Accent on Hover */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  style={{ maxHeight: '60px' }}
                />

                {/* Name Badge on Hover */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all duration-300 shadow-lg whitespace-nowrap z-20">
                  {client.name}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ClientGrid;