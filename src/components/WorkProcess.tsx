import { Phone, ClipboardList, Truck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./animations/AnimatedSection";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

// const steps = [
//   { title: "Initial Inquiry", desc: "Connect via phone or WhatsApp for your fleet needs.", icon: Phone },
//   { title: "Customized Quote", desc: "Receive a transparent proposal tailored to your project.", icon: ClipboardList },
//   { title: "Rapid Deployment", desc: "PDO-certified vehicles dispatched to your site.", icon: Truck },
//   { title: "Operations Start", desc: "Seamless execution with 24/7 industrial support.", icon: CheckCircle },
// ];

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
    <section className="py-20 lg:py-32 bg-[#0A0F1C] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Work Process</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase">How We <span className="text-accent">Deliver</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </AnimatedSection>

        <div className="relative">
          {/* Desktop Connection Line */}
          <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-white/10" />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8" staggerDelay={0.1}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={index}>
                  <div className="relative text-center group">
                    {/* Icon Node */}
                    <div className="relative inline-flex mb-6">
                      <div className="w-24 h-24 rounded-full border border-white/10 bg-[#0F172A] flex items-center justify-center relative z-10 group-hover:border-accent/50 transition-all duration-500">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(245,159,10,0.3)] group-hover:scale-90 transition-transform">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-8 h-8 bg-white text-[#0A0F1C] rounded-full flex items-center justify-center font-black text-[10px]">
                          0{index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-4">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed max-w-[200px] mx-auto text-ju">{step.description}</p>
                    </div>
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