import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, ArrowRight, CheckCircle, Sparkles, 
  Users, Wrench, Phone, ShieldCheck, MapPin, Clock 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { getServiceById, servicesData } from "@/data/servicesData";
import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import { motion } from "framer-motion";
import ServiceRequestModal from "@/components/services/ServiceRequestModal";

const ServiceDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams<{ id: string }>();
  const service = getServiceById(id || "");

  const getWhatsAppLink = (serviceTitle: string) => {
    const phone = "96891116925";
    const message = `Hello UAB. I want to ask about: ${serviceTitle}. Do you have availability?`;
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-[#FDFDFD]">
        <Header />
        <main className="py-40 text-center">
          <h1 className="text-4xl font-black text-[#0A0F1C] uppercase tracking-tighter">Service Not Found</h1>
          <Button asChild className="mt-8 bg-[#0A0F1C] rounded-none">
            <Link to="/services">Back to All Services</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;
  const currentIndex = servicesData.findIndex(s => s.id === service.id);
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];
  const prevService = servicesData[(currentIndex - 1 + servicesData.length) % servicesData.length];

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Header />
      <main>
        {/* Hero Section - Industrial Style */}
        <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-slate-100 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                <AnimatedSection>
                  <div className="flex items-center gap-3 mb-6">
                    {/* <div className="w-12 h-12 bg-[#0A0F1C] text-white flex items-center justify-center rounded-sm shadow-xl">
                      <Icon className="w-6 h-6" />
                    </div> */}
                    <div className="h-[2px] w-12 bg-accent"></div>
                    {/* <span className="text-[#0A0F1C] font-black text-xs uppercase tracking-[0.3em]">
                      UAB Service Profile
                    </span> */}
                  </div>
                  
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0A0F1C] mb-6 uppercase tracking-tighter leading-[0.9]">
                    {service.title}
                  </h1>
                  
                  <p className="text-slate-600 text-sm sm:text-base mb-10 leading-relaxed font-medium max-w-2xl">
                    {service.detailedDescription}
                  </p>

                  {/* Quick Info Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                    <div className="flex items-center gap-2 border-l-2 border-slate-100 pl-4">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-2 border-l-2 border-slate-100 pl-4">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Fully Licensed</span>
                    </div>
                    <div className="flex items-center gap-2 border-l-2 border-slate-100 pl-4">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Oman Wide</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="bg-[#0A0F1C] hover:bg-accent text-white h-12 px-8 rounded-md font-black uppercase tracking-widest transition-all shadow-lg"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Request Quote
                    </Button>
                    <Button variant="outline" className="border-[#0A0F1C] text-[#0A0F1C] h-12 px-8 rounded-md font-black uppercase tracking-widest" asChild>
                      <a href={getWhatsAppLink(service.title)} target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-5">
                <AnimatedSection delay={0.2}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-accent/10 rounded-xl -rotate-2 transition-transform group-hover:rotate-0" />
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="relative w-full h-[400px] lg:h-[500px] object-cover rounded-md shadow-2xl border-4 border-white"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <AnimatedSection className="mb-16">
              <h2 className="text-3xl font-black text-[#0A0F1C] uppercase tracking-tighter flex items-center gap-4">
                <span className="bg-accent text-white px-3 py-1 text-sm">01</span>
                What We Offer
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-white border border-slate-100 p-8 rounded-md hover:border-accent transition-all duration-300 group shadow-sm h-full">
                    <CheckCircle className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform" />
                    <p className="text-[#0A0F1C] font-black text-sm uppercase tracking-tight leading-snug">{feature}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Benefits & Use Cases */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              
              {/* Benefits List */}
              <AnimatedSection>
                <h2 className="text-3xl font-black text-[#0A0F1C] uppercase tracking-tighter mb-10 flex items-center gap-4">
                  <span className="bg-[#0A0F1C] text-white px-3 py-1 text-sm">02</span>
                  Why Choose UAB
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-5 bg-[#F8FAFC] border-l-4 border-accent rounded-r-md">
                      <span className="text-xl font-black text-slate-200">{(idx + 1).toString().padStart(2, '0')}</span>
                      <p className="text-[#0A0F1C] font-bold text-sm uppercase tracking-tight">{benefit}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Use Cases Box */}
              <AnimatedSection delay={0.2}>
                <div className="bg-[#0A0F1C] rounded-md p-10 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Users className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 border-b border-white/10 pb-4">
                    Common Uses
                  </h3>
                  <ul className="grid gap-6">
                    {service.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center gap-4 group">
                        <div className="w-2 h-2 bg-accent rounded-full transition-all group-hover:w-4" />
                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* Simplified Navigation */}
        <section className="py-12 border-t border-slate-100 bg-[#FDFDFD]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
              <Link to={`/services/${prevService.id}`} className="group flex flex-col items-start gap-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Previous Service</span>
                <div className="flex items-center gap-3 text-[#0A0F1C] group-hover:text-accent transition-colors">
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                  <span className="font-black uppercase tracking-tighter text-lg">{prevService.title}</span>
                </div>
              </Link>

              <Link to="/services" className="px-6 py-2 border-2 border-[#0A0F1C] font-black uppercase text-[10px] tracking-[0.3em] hover:bg-[#0A0F1C] hover:text-white transition-all">
                All Services
              </Link>

              <Link to={`/services/${nextService.id}`} className="group flex flex-col items-end gap-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Next Service</span>
                <div className="flex items-center gap-3 text-[#0A0F1C] group-hover:text-accent transition-colors">
                  <span className="font-black uppercase tracking-tighter text-lg">{nextService.title}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      
      <ServiceRequestModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
        preselectedServiceId={service.id}
      />
    </div>
  );
};

export default ServiceDetail;