import { Phone, ClipboardList, Truck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./animations/AnimatedSection";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Reach out via phone, email, or WhatsApp to discuss your requirements.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Get a Quote",
    description: "Receive a competitive, transparent quote tailored to your needs.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Schedule Service",
    description: "Choose your preferred date and time for vehicle or equipment delivery.",
    icon: Truck,
  },
  {
    number: "04",
    title: "Job Complete",
    description: "Sit back while our professional team handles everything efficiently.",
    icon: CheckCircle,
  },
];

const WorkProcess = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#101438] relative overflow-hidden">
      
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"
        animate={{
          y: [0, 50, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-tajawal uppercase leading-tight">
            Our Work Process
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </AnimatedSection>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-white/20" />
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12" staggerDelay={0.15}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.title}>
                  <div className="relative text-center">
                    {/* Icon Container - Now using fixed Primary Blue */}
                    <div className="relative inline-flex mb-6 sm:mb-8">
                      {/* Constant Glow */}
                      <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl" />
                      
                      <div className="w-20 h-20 bg-[#F59F0A] rounded-full flex items-center justify-center relative z-10 shadow-2xl border border-primary-foreground/10">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Number badge - Fixed Accent Gold */}
                      <div className="absolute -top-1 -right-1 w-8 h-8 bg-accent text-[#101438] rounded-full flex items-center justify-center shadow-lg z-20 font-bold font-tajawal text-sm">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content - Titles are now Primary blue by default to stand out */}
                    <h3 className="text-xl font-bold text-white mb-3 font-tajawal">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed max-w-[210px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;