import { Phone, Menu, X } from "lucide-react";
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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
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

  // Determine header style based on page and scroll
  const showTransparent = isHomePage && !scrolled;

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent ? "bg-transparent" : "bg-card/95 backdrop-blur-md shadow-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          
         {/* Logo */}
<Link to="/" className="flex items-center gap-0 sm:gap-1 group">
  <motion.div 
    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex items-center justify-center" 
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img 
      /* Use the imported variables here */
      src={showTransparent ? uabWhite : uabBlue} 
      alt="UAB Logo"
      className="w-full h-full object-contain object-left" 
    />
  </motion.div>

  <div className="hidden xs:block sm:block ml-[-4px] lg:ml-[-8px]">
    <p className={`font-archivo font-bold text-sm sm:text-base lg:text-lg leading-tight transition-colors uppercase ${
      showTransparent ? 'text-white' : 'text-[#0B1231]'
    }`}>
      The Unique Of Advance Business
    </p>
    <p className={`font-archivo text-[10px] sm:text-xs tracking-wider uppercase transition-colors ${
      showTransparent ? 'text-white/70' : 'text-[#0B1231]/60'
    }`}>
      Transport & Equipment Solutions
    </p>
  </div>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link
                  to={link.href}
                  className={`font-medium text-sm xl:text-base transition-colors duration-300 relative ${
                    isActive(link.href) 
                      ? 'text-accent' 
                      : showTransparent 
                        ? 'text-primary-foreground/90 hover:text-primary-foreground' 
                        : 'text-foreground/80 hover:text-accent'
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                      layoutId="activeNav"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a href="tel:+96891116925" className={`flex items-center gap-2 transition-colors text-sm group ${
              showTransparent ? 'text-primary-foreground/80 hover:text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <Phone className="w-4 h-4" />
              </motion.div>
              <span className="font-medium">+968 91116925</span>
            </a>
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="accent" size="default" className="btn-shimmer">
                Get a Quote
              </Button>
            </motion.div> */}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 -mr-2 ${showTransparent ? 'text-primary-foreground' : 'text-foreground'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-border/50 bg-card/95 backdrop-blur-md rounded-b-xl">
                <nav className="flex flex-col gap-1 px-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className={`transition-colors font-medium py-3 px-4 rounded-lg block ${
                          isActive(link.href) 
                            ? 'text-primary bg-primary/10' 
                            : 'text-foreground/80 hover:text-primary hover:bg-muted'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div 
                    className="pt-4 mt-2 flex flex-col gap-3 border-t border-border/50 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <a href="tel:+96891116925" className="flex items-center gap-2 text-muted-foreground py-2">
                      <Phone className="w-4 h-4" />
                      <span>+968 91116925</span>
                    </a>
                    <Button variant="accent" size="default" className="w-full">
                      Get a Quote
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;