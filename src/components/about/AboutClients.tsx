import { motion } from "framer-motion";

// Import all available logos from your assets
import alHajry from "../../assets/logos/AL-Hajry-logo.png";
import alTasnim from "../../assets/logos/al-tasnim-logo.png";
import alZarraq from "../../assets/logos/Al-ZARRAQ-logo.jpg";
import anson from "../../assets/logos/Anson-logo.png";
import atlantic from "../../assets/logos/atlantic_white-Logo.png";
import burj from "../../assets/logos/burj-logo-lg.png";
import galfar from "../../assets/logos/galfar-logo.png";
import gds from "../../assets/logos/gds-450-white.png";
import gps from "../../assets/logos/gps-logo.png";
import iacovou from "../../assets/logos/iacovou_logo.png";
import ikk from "../../assets/logos/IKK-Group-Logo.png";
import islamkairi from "../../assets/logos/islamkairi-kabbani-group-logo.png";
import jalmood from "../../assets/logos/jalmood_logo.jpg";
import keller from "../../assets/logos/keller-logo.svg";
import acciona from "../../assets/logos/logo-acciona.svg";
import masirah from "../../assets/logos/masirah-logo.png";
import moukhtar from "../../assets/logos/moukhtar-logo.gif";
import novatel from "../../assets/logos/novatel-logo.jpeg";
import oneic from "../../assets/logos/OneicLogo.png";
import opi from "../../assets/logos/opi_logo.avif";
import royaltech from "../../assets/logos/royaltech-LOGO.png";
import ryboa from "../../assets/logos/ryboahaima-logo.png";
import skyline from "../../assets/logos/Skyline-logo.png";
import zublin from "../../assets/logos/ZUBLIN-STRABAG-LOGO.png";

const clientList = [
  { name: "GPS", logo: gps },
  { name: "Al Tasnim", logo: alTasnim, isWhite: true },
  { name: "Al Zarraq", logo: alZarraq },
  { name: "Anson", logo: anson },
  // Added flag for white logos
  { name: "Al Hajry", logo: alHajry, isWhite: true },
  { name: "Burj Al Shaya", logo: burj },
  { name: "Galfar", logo: galfar },
  
  { name: "GDS", logo: gds }, // Added flag for white logos
  
  { name: "Iacovou", logo: iacovou },
  
  { name: "IKK Group", logo: ikk },
  { name: "Kabbani Group", logo: islamkairi , isWhite: true},
  { name: "Jalmood", logo: jalmood },
  
  { name: "Keller", logo: keller },
  
  { name: "Acciona", logo: acciona },
  { name: "Masirah", logo: masirah, isWhite: true },
  { name: "Moukhtar", logo: moukhtar },
  { name: "Atlantic", logo: atlantic, isWhite: true }, 
  { name: "Novotel", logo: novatel },
  { name: "ONEIC", logo: oneic },
  
  { name: "OPI", logo: opi },
  { name: "Skyline", logo: skyline, isWhite: true },
  { name: "Royal Tech", logo: royaltech },
  { name: "Ryboa Haima", logo: ryboa },
  
  { name: "Zublin Strabag", logo: zublin },
];

const AboutClients = () => {
  return (
    <section className="py-20 bg-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Modern Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-3 block"
          >
            Our Track Record
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 uppercase leading-tight">
            A Legacy of <span className="text-accent">Trusted Service</span>
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Preferred logistics partner for Oman's leading organizations since 2010.
          </p>
        </div>

        {/* Small Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {clientList.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02 }}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.2 } 
              }}
              className={`
                relative bg-white border border-slate-200 rounded-xl p-4 h-24 flex items-center justify-center 
                shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 group cursor-default
                ${client.isWhite ? 'bg-slate-800' : 'bg-white hover:bg-slate-50'}
              `}
            >
              {/* Overlay for better logo visibility on hover */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
              
              <img
                src={client.logo}
                alt={client.name}
                className={`
                  max-w-full max-h-full object-contain transition-all duration-500
                  group-hover:scale-110
                `}
                style={{ maxHeight: '55px' }} 
              />
              
              {/* Name Badge on Hover */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all duration-300 shadow-lg pointer-events-none whitespace-nowrap z-20">
                {client.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutClients;