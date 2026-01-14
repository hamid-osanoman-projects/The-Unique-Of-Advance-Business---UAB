import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import AboutWhyUs from "@/components/about/AboutWhyUs";
import AboutCTA from "@/components/about/AboutCTA";
import AboutClients from "@/components/about/AboutClients";
import AboutFAQ from "@/components/about/AboutFAQ";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <AboutStats />
      <MissionVisionValues />
      <AboutWhyUs />
      <AboutCTA />
      <AboutClients />
      <AboutFAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default About;