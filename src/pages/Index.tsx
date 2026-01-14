import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FleetPreview from "@/components/fleet/FleetPreview";
import ContactCTA from "@/components/ContactCTA";
import ClientMarquee from "@/components/ClientMarquee";
import WhyUs from "@/components/WhyUs";
import WorkProcess from "@/components/WorkProcess";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <FleetPreview />
      <ClientMarquee />
      <WhyUs />
      <WorkProcess />
      <ContactCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;