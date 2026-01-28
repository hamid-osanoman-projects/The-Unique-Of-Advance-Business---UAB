import { Check, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Monthly Plan",
    description: "Flexible short-term rental",
    highlight: false,
    features: [
      "30-day rolling contract",
      "Wide vehicle availability",
      "Professional drivers",
      "Fuel management options",
      "Live GPS tracking",
      "Standard support"
    ],
    cta: "Request Quote"
  },
  {
    name: "Project Based",
    description: "Custom solutions for large jobs",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Custom project duration",
      "Fleet customization",
      "Dedicated manager",
      "Full logistics support",
      "Advanced reporting",
      "24/7 Priority service"
    ],
    cta: "Discuss Project"
  },
  {
    name: "Yearly Rental",
    description: "Best value for long-term work",
    highlight: false,
    features: [
      "12-month fixed contract",
      "Priority vehicle choice",
      "Permanent drivers",
      "Full fuel management",
      "Advanced safety GPS",
      "Priority account support"
    ],
    cta: "Request Quote"
  }
];

const PricingSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#0A0F1C] relative overflow-hidden">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-accent" />
              <span className="text-accent font-bold text-xs uppercase tracking-[0.4em]">
                Flexible Rates
              </span>
              <div className="w-10 h-[1px] bg-accent" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-white uppercase leading-tight mb-4">
              Rental Plans for <br />
              <span className="text-accent">Every Project</span>
            </h2>
            <p className="text-slate-400 text-md font-medium">
              {/* Competitive pricing with operational discipline.  */}
              Choose a plan that 
              fits your timeline and project scale across Oman.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        {/* Pricing Cards */}
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
  {pricingPlans.map((plan, index) => {
    const isHighlighted = plan.highlight;
    
    return (
      <motion.div 
        key={plan.name}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className={`relative rounded-[2.5rem] p-8 lg:p-10 flex flex-col transition-all duration-500 group ${
          isHighlighted 
            ? 'bg-white text-[#0A0F1C] shadow-[0_0_50px_rgba(255,145,0,0.2)] scale-105 z-20' 
            : 'bg-gradient-to-b from-white/[0.07] to-transparent border border-white/10 text-white backdrop-blur-md hover:border-accent/50'
        }`}
      >
        {/* Badge for High-end feel */}
        {plan.badge && (
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30">
            <span className="bg-accent text-[#0A0F1C] px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-xl border-2 border-[#0A0F1C]">
              {plan.badge}
            </span>
          </div>
        )}

        {/* Header Area */}
        <div className="mb-6 relative">
          <h3 className={`text-xl lg:text-2xl font-black uppercase tracking-tighter mb-3 text-center ${isHighlighted ? 'text-[#0A0F1C]' : 'text-white'}`}>
            {plan.name}
          </h3>
          <div className={`h-1 w-12 mx-auto rounded-full mb-1 ${isHighlighted ? 'bg-[#0A0F1C]/10' : 'bg-accent'}`} />
          {/* <p className={`text-[11px] font-black uppercase  text-center px-4 ${isHighlighted ? 'text-slate-500' : 'text-slate-400'}`}>
            {plan.description}
          </p> */}
        </div>

        {/* Features List */}
        <div className="space-y-5 mb-12 flex-grow">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                isHighlighted ? 'bg-[#0A0F1C]' : 'bg-accent'
              }`}>
                <Check className={`w-3.5 h-3.5 ${isHighlighted ? 'text-white' : 'text-white'}`} />
              </div>
              <span className={`text-sm font-bold tracking-tight ${isHighlighted ? 'text-[#0A0F1C]/80' : 'text-white/80'}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <Button 
          variant={isHighlighted ? "default" : "outline"}
          className={`w-full h-16 rounded-2xl font-black uppercase tracking-[0.1em] text-xs transition-all duration-300 relative overflow-hidden group/btn ${
            isHighlighted 
            ? "bg-[#0A0F1C] text-white hover:bg-accent shadow-lg shadow-black/10" 
            : "border-white/20 text-white hover:bg-white hover:text-[#0A0F1C]"
          }`}
          asChild
        >
          <a href="#request-form" className="flex items-center justify-center gap-3">
            <span>{plan.cta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
          </a>
        </Button>

        {/* Subtle decorative number in background */}
        <span className={`absolute bottom-4 right-8 text-8xl font-black select-none pointer-events-none opacity-[0.03] ${isHighlighted ? 'text-[#0A0F1C]' : 'text-white'}`}>
          0{index + 1}
        </span>
      </motion.div>
    );
  })}
</div>

        {/* Support Note */}
        {/* <p className="text-center mt-16 text-slate-500 text-sm font-bold uppercase tracking-widest">
          All contracts include 24/7 technical support and certified drivers.
        </p> */}
      </div>
    </section>
  );
};

export default PricingSection;