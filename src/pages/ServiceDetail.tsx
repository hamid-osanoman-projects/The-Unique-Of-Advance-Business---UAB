import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles, Users, Wrench, Phone } from "lucide-react";
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

  // Helper Function for Professional WhatsApp Link
  const getWhatsAppLink = (serviceTitle: string) => {
    const phone = "96891116925";
    const message = `Hello. I am interested in your ${serviceTitle}. I would like to know more details. Can you assist me?`;
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/services">Back to Services</Link>
            </Button>
          </div>
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
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection className="mb-6 sm:mb-8">
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                  </div>
                  <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">
                    Professional Service
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                  {service.title}
                </h1>
                
                <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                  {service.detailedDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="accent" 
                    size="lg" 
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2"
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  
                  {/* WhatsApp Dynamic Link in Hero */}
                  <Button variant="outline" size="lg" asChild className="border-primary/20 hover:bg-primary/5">
                    <a 
                      href={getWhatsAppLink(service.title)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      WhatsApp Details
                    </a>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 block">
                What's Included
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key Features & Capabilities
              </h2>
              <p className="text-muted-foreground">
                Everything you need for reliable {service.title.toLowerCase()} services in Oman.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {service.features.map((feature, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                    <CheckCircle className="w-6 h-6 text-accent mb-3" />
                    <p className="text-foreground font-medium text-sm sm:text-base">{feature}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <AnimatedSection>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Benefits for Your Business
                </h2>
                <p className="text-muted-foreground mb-8">
                  Partner with The Unique of Advance Business to experience professional service 
                  delivery that prioritizes your operational success.
                </p>

                <StaggerContainer className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <StaggerItem key={idx}>
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary text-xs font-bold">{idx + 1}</span>
                        </div>
                        <p className="text-foreground text-sm sm:text-base">{benefit}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-primary rounded-2xl p-8 sm:p-10 text-primary-foreground shadow-xl">
                  <div className="flex items-center gap-2 mb-6">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold text-sm uppercase tracking-wider opacity-80">
                      Who It's For
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-6">Ideal Use Cases</h3>
                  <ul className="space-y-4">
                    {service.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 opacity-70" />
                        <span className="text-sm sm:text-base opacity-90">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/80 text-base sm:text-lg max-w-2xl mx-auto mb-10">
                Contact our team today to discuss your {service.title.toLowerCase()} requirements 
                and receive a customized quote for your Omani operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="accent" 
                  size="lg" 
                  onClick={() => setIsModalOpen(true)}
                  className="h-14 px-8 text-base font-bold shadow-lg"
                >
                  Request Official Quote
                </Button>
                
                {/* Fixed Dynamic WhatsApp Button */}
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base font-bold"
                  asChild
                >
                  <a 
                    href={getWhatsAppLink(service.title)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
          {/* Decorative Background Element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
        </section>

        {/* Navigation to Other Services */}
        <section className="py-12 sm:py-16 bg-background border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Link 
                to={`/services/${prevService.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <span className="text-xs uppercase tracking-wider opacity-70">Previous</span>
                  <p className="font-medium">{prevService.title}</p>
                </div>
              </Link>

              <Link 
                to="/services"
                className="text-accent hover:text-accent/80 font-bold transition-colors uppercase tracking-widest text-sm"
              >
                View All Services
              </Link>

              <Link 
                to={`/services/${nextService.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="text-right">
                  <span className="text-xs uppercase tracking-wider opacity-70">Next</span>
                  <p className="font-medium">{nextService.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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