import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 sm:right-10 w-56 sm:w-72 h-56 sm:h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          >
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">Get In Touch</span>
          </motion.div> */}
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 uppercase">
            Contact <span className="text-accent">Us</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
            Ready to discuss your transportation and equipment needs? 
            We're here to help with personalized solutions.
          </p>
        </motion.div>
      </div>
      
      {/* Bottom Curve - Seamless transition */}
      {/* <div className="absolute -bottom-1 left-0 right-0">
        <svg 
          viewBox="0 0 1440 80" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z" 
            className="fill-background"
          />
        </svg>
      </div> */}
    </section>
  );
};

export default ContactHero;
