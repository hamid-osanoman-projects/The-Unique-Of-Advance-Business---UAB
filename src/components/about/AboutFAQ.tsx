import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, Variants } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    answer: "You can request a quote by calling us directly, sending an email to our logistics team, or using the contact form on our website. We typically respond within 24 hours.",
  },
  {
    question: "What types of vehicles are in your fleet?",
    answer: "Our fleet includes Luxury Buses (Toyota Coaster, Rosa), Heavy Duty Excavators (CAT, Liebherr), Water Tankers, Equipment Vans, and Dump Trucks (MAN, Fuso).",
  },
];

const AboutFAQ = () => {
  return (
    <section className="py-16 lg:py-22 bg-white relative overflow-hidden">
      {/* Structural Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-10 lg:mb-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-accent" />
            <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-[0.3em] block">
              Support Center
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A0F1C] uppercase leading-tight tracking-tight">
            Frequently Asked <br />
            <span className="text-accent">Questions</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Accordion */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem 
                    value={`item-${index}`}
                    className="border border-slate-100 rounded-2xl px-6 bg-white hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <AccordionTrigger 
                      className="py-6 text-left hover:no-underline group"
                    >
                      <span className="text-md sm:text-lg font-bold text-[#0A0F1C] uppercase tracking-tight group-hover:text-accent transition-colors">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    
                    <AccordionContent className="text-slate-600 pb-6 leading-relaxed text-base">
                      <div className="pl-0 border-l-2 border-accent/20 pl-4">
                        {faq.answer}
                      </div>
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
            className="lg:col-span-5"
          >
            <div className="bg-[#0A0F1C] p-10 text-white sticky top-24 border-t-4 border-[#F59F0A] shadow-2xl">
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