import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="pt-40 pb-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-10 h-[2px] bg-accent" />
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em]">
              Connect With Us
            </span>
            <div className="w-10 h-[2px] bg-accent" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-[#0A0F1C] uppercase leading-tight tracking-tighter"
          >
            Get Professional <span className="text-accent">Support</span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;