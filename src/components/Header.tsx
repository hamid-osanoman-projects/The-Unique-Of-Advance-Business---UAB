import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import uabWhite from "../assets/uabwhite.png"
import uabBlue from "../assets/uabblue.png"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Fleet", href: "/fleet" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const showTransparent = isHomePage && !scrolled;

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showTransparent 
          ? "bg-transparent py-4" 
          : "bg-white/95 backdrop-blur-md shadow-xl py-2 border-b border-slate-100"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-0 group">
            <motion.div 
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center relative" 
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={showTransparent ? uabWhite : uabBlue} 
                alt="UAB Logo"
                className="w-full h-full object-contain" 
              />
            </motion.div>

            <div className="ml-[-4px] lg:ml-[-6px]">
              <h1 className={`font-black text-xs sm:text-sm lg:text-[15px] leading-none uppercase transition-colors duration-500 ${
                showTransparent ? 'text-white' : 'text-[#0B1231]'
              }`}>
                The Unique Of Advance Business
              </h1>
              {/* <p className={`text-[8px] sm:text-[9px] font-bold tracking-[0.2em] uppercase mt-1 transition-colors duration-500 ${
                showTransparent ? 'text-accent' : 'text-accent'
              }`}>
                Logistics & Equipment
              </p> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-black text-[11px] uppercase tracking-[0.2em] transition-all relative py-2 group ${
                  isActive(link.href) 
                    ? 'text-accent' 
                    : showTransparent 
                      ? 'text-white/80 hover:text-white' 
                      : 'text-slate-600 hover:text-[#0B1231]'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transition-transform duration-300 origin-left ${
                  isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex flex-col items-end gap-1">
  <a 
    href="tel:+96891116925" 
    className={`group relative flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-500 ${
      showTransparent 
        ? 'bg-white/20 text-white hover:bg-white/20' 
        : 'bg-slate-100 text-[#0B1231] hover:bg-accent hover:text-white'
    }`}
  >
    {/* Animated Glow Dot */}
    {/* <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
    </span> */}

    <div className="flex items-center gap-2">
      <Phone className={`w-3 h-3 ${showTransparent ? 'text-accent' : 'text-accent group-hover:text-white'}`} />
      <span className="text-[12px] font-black tracking-tight">+968 9111 6925</span>
    </div>
  </a>
  
  {/* Optional: Second number smaller below */}
  {/* <a href="tel:+96891194547" className={`text-[10px] font-bold pr-4 opacity-60 hover:opacity-100 transition-opacity ${
    showTransparent ? 'text-white' : 'text-slate-500'
  }`}>
    Secondary: +968 9119 4547
  </a> */}
</div>

            {/* <Button 
              asChild
              className={`rounded-none font-black text-[10px] tracking-widest uppercase h-10 px-6 transition-all ${
                showTransparent 
                ? "bg-white text-[#0B1231] hover:bg-accent hover:text-white" 
                : "bg-[#0B1231] text-white hover:bg-accent"
              }`}
            >
              <Link to="/contact">Get Quote</Link>
            </Button> */}
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showTransparent ? 'text-white bg-white/10' : 'text-[#0B1231] bg-slate-100'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 h-screen w-full bg-[#0B1231] z-[60] lg:hidden flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-white/10">
              <img src={uabWhite} alt="Logo" className="h-12 w-auto object-contain" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={`text-3xl font-black uppercase tracking-tighter flex items-center justify-between group ${
                      isActive(link.href) ? 'text-accent' : 'text-white'
                    }`}
                  >
                    {link.name}
                    <ChevronRight className={`w-6 h-6 transition-transform ${isActive(link.href) ? 'translate-x-0' : '-translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="p-8 bg-white/5 space-y-4">
              <p className="text-accent text-[10px] font-black uppercase tracking-widest">Direct Dispatch</p>
              <div className="grid grid-cols-1 gap-4">
                <a href="tel:+96891116925" className="text-white font-bold flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent" /> +968 9111 6925
                </a>
                <a href="tel:+96891194547" className="text-white font-bold flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent" /> +968 9119 4547
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;