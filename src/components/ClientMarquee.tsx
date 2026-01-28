import { motion } from "framer-motion";
import AnimatedSection from "./animations/AnimatedSection";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

// IMPORT ALL LOGOS
import alHajry from "../assets/logos/alhajry-logo.png";
import alTasnim from "../assets/logos/al-tasnim-logo.png";
import alZarraq from "../assets/logos/al-zarraq.jpg";
import anson from "../assets/logos/anson.png";
import atlantic from "../assets/logos/atlantic_white-Logo.png";
import galfar from "../assets/logos/galfar-logo.png";
import gps from "../assets/logos/gps-logo.png";
import keller from "../assets/logos/keller-logo.svg";
import skyline from "../assets/logos/skyline-logo.png";
import zublin from "../assets/logos/zublin-logo.png";
import iacovou from "../assets/logos/iacovou_logo.png";
import royaltech from "../assets/logos/royaltech-logo.png";
import gds from "../assets/logos/gds-450-white.png";
import burj from "../assets/logos/burj-logo-lg.png";
import oneic from "../assets/logos/oneiclogo.png";
import ikk from "../assets/logos/ikk-group-logo.png";
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

// Split clients for two different rows
const firstRow = clients.slice(0, Math.ceil(clients.length / 2));
const secondRow = clients.slice(Math.ceil(clients.length / 2));

const MarqueeRow = ({ items, direction = "left" }: { items: typeof clients, direction?: "left" | "right" }) => {
  return (
    <div className="flex overflow-hidden select-none gap-6 py-4">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-nowrap gap-6 min-w-full"
      >
        {/* Render the logos twice for seamless looping */}
        {[...items, ...items].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 w-40 h-24 sm:w-48 sm:h-28 bg-[#FBFBFB] border border-slate-100 rounded-sm flex items-center justify-center p-6 group transition-all duration-500 hover:border-accent/30 hover:bg-white"
          >
            <img
              src={client.logo}
              alt={client.name}
              className={`max-h-full max-w-full object-contain filter transition-all duration-500  group-hover:scale-110 
                ${client.isWhite ? "brightness-0 opacity-80" : " opacity-70"}`}
              style={{ maxHeight: "50px" }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ClientGrid = () => {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-accent" />
              <span className="text-accent font-black text-[10px] uppercase tracking-[0.4em]">
                Partnership Network
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0A0F1C] uppercase tracking-tighter">
              Trusted by Industry <span className="text-accent">Leaders</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium text-sm md:text-base max-w-xs border-l-2 border-slate-100 pl-4">
            Supporting the Sultanate's largest infrastructure and energy projects.
          </p>
        </div>
      </div>

      {/* Infinite Rows */}
      <div className="relative">
        {/* Gradient Fades for the edges */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-white to-transparent z-10" />

        <MarqueeRow items={firstRow} direction="left" />
        <MarqueeRow items={secondRow} direction="right" />
      </div>
    </section>
  );
};

export default ClientGrid;