import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCards from "@/components/services/ServiceCards";
import PricingSection from "@/components/services/PricingSection";
import ServiceRequestForm from "@/components/services/ServiceRequestForm";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* <ServicesHero /> */}
        <ServiceCards />
        <PricingSection />
        <ServiceRequestForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
