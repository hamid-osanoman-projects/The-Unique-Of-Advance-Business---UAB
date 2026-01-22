import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "../assets/uabwhite.png";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    console.error("404 Error: Non-existent route:", location.pathname);

    // Auto-redirect logic
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [location.pathname, navigate]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#101438] overflow-hidden">
      
      {/* SILVER WATERMARK BACKGROUND (Shutterstock Style) */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 sm:grid-cols-4 gap-20 p-10 opacity-[0.05] pointer-events-none rotate-[-15deg] scale-125">
        {/* Creating a repeating grid of the logo in silver/white */}
        {[...Array(16)].map((_, i) => (
          <img 
            key={i}
            src={logoWhite} 
            alt="" 
            className="w-32 h-32 grayscale brightness-200"
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Focus: 404 */}
          <h1 className="text-[100px] sm:text-[150px] md:text-[200px] font-black text-white leading-none tracking-tighter">
            404
          </h1>
          
          <div className="bg-[#F59F0A] text-[#101438] font-bold py-1 px-4 inline-block mb-8 transform -rotate-2">
            PAGE NOT FOUND
          </div>

          <p className="text-slate-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
            The link you followed may be broken, or the page may have been removed.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="bg-white hover:bg-slate-200 text-[#101438] rounded-none h-14 px-10 font-bold text-base transition-all"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                RETURN HOME
              </Link>
            </Button>
          </div>

          {/* Redirect Notice */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center justify-center gap-2 text-white/40 text-sm font-medium"
          >
            <RefreshCcw className="w-4 h-4 animate-spin-slow" />
            Redirecting to home in <span className="text-[#F59F0A]">{countdown}s</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-8 left-0 w-full text-center">
        <p className="text-white/10 text-[10px] uppercase tracking-[0.5em] font-light">
          The Unique of Advance Business (UAB)
        </p>
      </div>
    </div>
  );
};

export default NotFound;