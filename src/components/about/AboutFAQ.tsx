import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, Phone, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Variants } from "framer-motion";

// 1. DEFINE VARIANTS FIRST (Outside the component)
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };




const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    },
  },
};

const faqs = [
  {
    question: "What services does UAB provide?",
    answer: "We provide comprehensive transportation services including corporate staff transport, heavy equipment rental (excavators, tractors), water tanker supply, and logistics/cargo transportation across all governorates of Oman.",
  },
  {
    question: "What areas do you serve in Oman?",
    answer: "We serve all governorates of Oman including Muscat, Dhofar, North and South Batinah, Dakhliyah, Sharqiyah, and more. Our fleet operates throughout the Sultanate.",
  },
  {
    question: "Do you provide 24/7 services?",
    answer: "Yes, our team is available 24/7 to assist with your transportation and equipment needs. You can reach us anytime at +968 91116925 or via WhatsApp.",
  },
  {
    question: "How can I get a quote for your services?",
    answer: "You can request a quote by calling us directly, sending an email to theuniqueofadvance@gmail.com, or using the contact form on our website. We typically respond within 24 hours.",
  },
  {
    question: "What types of vehicles are in your fleet?",
    answer: "Our fleet includes Luxury Buses (Toyota Coaster, Rosa), Heavy Duty Excavators (CAT, Liebherr), Water Tankers, Equipment Vans, and Dump Trucks (MAN, Fuso).",
  },
];

const AboutFAQ = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-[-12deg] translate-x-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-12 bg-[#F59F0A]"></span>
            <span className="text-[#F59F0A] font-black font-bold text-xs uppercase">
              Support Center
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101438] mb-4 uppercase font-bold">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left - Classic FAQ Accordion */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Accordion type="single" collapsible className="w-full space-y-0 border-t border-slate-200">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem 
                    value={`item-${index}`}
                    className="border-b border-slate-200 group transition-colors duration-300 px-0"
                  >
                    <AccordionTrigger 
                      className="flex py-7 text-left hover:no-underline [&[data-state=open]]:bg-slate-50 transition-all px-4"
                    >
                      <div className="flex items-center justify-between w-full pr-4">
                        <span className="text-md sm:text-lg font-black text-[#101438] uppercase font-bold">
                          {faq.question}
                        </span>
                        
                        {/* Custom Indicator */}
                        {/* <div className="relative flex items-center justify-center w-5 h-5 ml-4 flex-shrink-0">
                          <Plus className="absolute w-5 h-5 text-[#F59F0A] transition-all duration-500 ease-in-out group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
                          <Minus className="absolute w-5 h-5 text-[#101438] opacity-0 transition-all duration-500 ease-in-out group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180" />
                        </div> */}
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="text-slate-600 px-4 pb-8 leading-relaxed text-base sm:text-lg max-w-3xl overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Right - Industrial Contact CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-[#101438] p-10 text-white sticky top-24 border-t-4 border-[#F59F0A] shadow-2xl">
              <div className="w-12 h-12 bg-[#F59F0A] flex items-center justify-center mb-8">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-black mb-4 uppercase font-bold">
                Still have questions?
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed font-medium">
                Our logistics experts are standing by 24/7 to provide technical specs and quotes.
              </p>

              <div className="space-y-4">
                <Link to="/contact">
                  <Button 
                    className="w-full bg-[#F59F0A] hover:bg-white hover:text-[#101438] text-white font-black h-14 rounded-none uppercase font-bold transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </Link>
                
                <a href="tel:+96891116925">
                  <Button 
                    variant="outline" 
                    className="w-full border-white/20 text-white hover:bg-white/10 h-14 rounded-none font-black uppercase font-bold transition-all"
                  >
                    <Phone className="w-4 h-4 mr-3" />
                    +968 91116925
                  </Button>
                </a>
              </div>

              {/* Trust indicator */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black font-bold text-[#F59F0A]">100+</span>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 leading-tight">
                    Satisfied Corporate <br /> Partners in Oman
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFAQ;