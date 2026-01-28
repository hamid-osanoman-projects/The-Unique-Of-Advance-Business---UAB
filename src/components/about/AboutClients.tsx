import { motion } from "framer-motion";

// Import all available logos from your assets
import alHajry from "../../assets/logos/alhajry-logo.png";
import alTasnim from "../../assets/logos/al-tasnim-logo.png";
import alZarraq from "../../assets/logos/al-zarraq.jpg";
import anson from "../../assets/logos/anson-logo.png";
import atlantic from "../../assets/logos/atlantic_white-Logo.png";
import burj from "../../assets/logos/burj-logo-lg.png";
import galfar from "../../assets/logos/galfar-logo.png";
import masirah from "../../assets/logos/masirah-logo.png";
import gps from "../../assets/logos/gps-logo.png";
import iacovou from "../../assets/logos/iacovou_logo.png";
import ikk from "../../assets/logos/ikk-group-logo.png";
import islamkairi from "../../assets/logos/islamkairi-kabbani-group-logo.png";
import jalmood from "../../assets/logos/jalmood_logo.jpg";
import keller from "../../assets/logos/keller-logo.svg";
import acciona from "../../assets/logos/logo-acciona.svg";
import gds from "../../assets/logos/gds-450-white.png";

import moukhtar from "../../assets/logos/moukhtar-logo.gif";
import novatel from "../../assets/logos/novatel-logo.jpeg";
import oneic from "../../assets/logos/oneic-logo.png";
import opi from "../../assets/logos/opi_logo.avif";
import royaltech from "../../assets/logos/royaltech-logo.png";
import ryboa from "../../assets/logos/ryboahaima-logo.png";
import skyline from "../../assets/logos/skyline-logo.png";
import zublin from "../../assets/logos/zublin-logo.png";
import aamaalogo from "../../assets/logos/aamaal-logo.png";
import abrajlogo from "../../assets/logos/abraj-Logo.png";
import alnaba from "../../assets/logos/alnaba-logo.png";
import alnahda from "../../assets/logos/alnahda-logo.png";
import alossol from "../../assets/logos/alossol-logo.webp";
import alwataniya from "../../assets/logos/alwataniya-logo.png";
import bpc from "../../assets/logos/bpc-logo.png";
import dohat from "../../assets/logos/dohat-logo.webp";
import genetco from "../../assets/logos/genetco-logo.png";
import ico from "../../assets/logos/icp-logo.png";
import invetoman from "../../assets/logos/investoman-logo.svg";
import kashif from "../../assets/logos/kashif-logo.png";
import ptc from "../../assets/logos/ptc-logo.jpg";
import rime from "../../assets/logos/rime-logo.png";
import sah from "../../assets/logos/sah-logo.png";
import target from "../../assets/logos/target-logo.png";
import tls from "../../assets/logos/tls-logo.png";
import tradekey from "../../assets/logos/tradekey-logo.svg";
import uep from "../../assets/logos/uep-logo.jpg";
import wcn from "../../assets/logos/wcn-logo.jpg";




const clientList = [
  { name: "GPS", logo: gps, isWhite: false },
  { name: "Zublin Strabag", logo: zublin, isWhite: false },
  
  { name: "Al Zarraq", logo: alZarraq, isWhite: false },
  { name: "Anson", logo: anson, isWhite: false },
  { name: "Burj Al Shaya", logo: burj, isWhite: false },
  { name: "Al Hajry", logo: alHajry, isWhite: true },
  
  { name: "Galfar", logo: galfar, isWhite: false },
  { name: "UEP", logo: uep, isWhite: false },
  
  { name: "Iacovou", logo: iacovou, isWhite: false },
  { name: "IKK Group", logo: ikk, isWhite: false },
  { name: "Jalmood", logo: jalmood, isWhite: false },
  { name: "Kabbani Group", logo: islamkairi, isWhite: true },
  
  { name: "Keller", logo: keller, isWhite: false },
  { name: "WCN", logo: wcn, isWhite: false },
  
  { name: "GDS", logo: gds, isWhite: false },
  { name: "Moukhtar", logo: moukhtar, isWhite: false },
  { name: "Novotel", logo: novatel, isWhite: false },
  { name: "Atlantic", logo: atlantic, isWhite: true },
  
  { name: "ONEIC", logo: oneic, isWhite: false },
  { name: "OPI", logo: opi, isWhite: false },
  { name: "Acciona", logo: acciona, isWhite: false },
  { name: "Royal Tech", logo: royaltech, isWhite: false },
  { name: "Ryboa Haima", logo: ryboa, isWhite: false },
  { name: "Al Tasnim", logo: alTasnim, isWhite: true },
  { name: "AAMAL", logo: aamaalogo, isWhite: false },
  { name: "Abraj", logo: abrajlogo, isWhite: false },
  { name: "Al Naba", logo: alnaba, isWhite: false },
  { name: "Al Nahda", logo: alnahda, isWhite: false },
  
  { name: "Al Wataniya", logo: alwataniya, isWhite: false },
  { name: "Invetoman", logo: invetoman, isWhite: true },
  { name: "Dohat", logo: dohat, isWhite: false },
  { name: "Genetco", logo: genetco, isWhite: false },
  { name: "ICO", logo: ico, isWhite: false },
  { name: "BPC", logo: bpc, isWhite: false },
  
  { name: "Kashif", logo: kashif, isWhite: false },
  { name: "TLS", logo: tls, isWhite: true },
  
  { name: "Rime", logo: rime, isWhite: false },
  { name: "SAH", logo: sah, isWhite: false },
  { name: "Target", logo: target, isWhite: false },
  
  { name: "TradeKey", logo: tradekey, isWhite: false },
  { name: "PTC", logo: ptc, isWhite: false },
  { name: "Masirah", logo: masirah, isWhite: true },
  { name: "Al Ossol", logo: alossol, isWhite: true },
  { name: "Skyline", logo: skyline, isWhite: true },
];


const AboutClients = () => {
  return (
    <section className="py-24 bg-[#0A0F1C] relative overflow-hidden">
      {/* Background Glows for Depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-10 h-[1px] bg-accent/50" />
            <span className="text-accent font-bold text-xs uppercase tracking-[0.4em]">
              Our Track Record
            </span>
            <div className="w-10 h-[1px] bg-accent/50" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">
            Trusted by <span className="text-accent">Industry Leaders</span>
          </h2>
          
          <p className="text-slate-400 text-sm md:text-md leading-relaxed max-w-2xl mx-auto font-medium">
            Preferred logistics and equipment partner for Oman's most prestigious 
            organizations since 2010.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clientList.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`
                relative h-28 flex items-center justify-center p-6
                rounded-2xl border transition-all duration-500 group cursor-default
                ${client.isWhite 
                  ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20" 
                  : "bg-white border-transparent hover:shadow-[0_0_30px_rgba(245,159,10,0.15)]"}
              `}
            >
              {/* Logo Image */}
              <img
                src={client.logo}
                alt={client.name}
                className={`
                  max-w-full max-h-full object-contain transition-all duration-700
                  group-hover:scale-110
                  ${!client.isWhite ? "brightness-100" : "brightness-0 invert opacity-80 group-hover:opacity-100"}
                `}
                style={{ maxHeight: '60px' }} 
              />
              
              {/* Name Tooltip */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-black px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 group-hover:bottom-3 transition-all duration-300 shadow-xl z-20 whitespace-nowrap uppercase tracking-tighter">
                {client.name}
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.5em]">
            & More Than 50+ Other Registered Vendors
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutClients;