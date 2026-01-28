import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactHero />
        
        <section className="pb-24 pt-4 relative bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Notice: Changed gap-10 for mobile, gap-16 for desktop. Added flex-col-reverse for better mobile flow if desired, or stay grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start border-t border-slate-100 pt-10 lg:pt-16">
      
      {/* Form Section */}
      <div className="order-2 lg:order-1 lg:col-span-7">
        <div className="mb-6 lg:mb-8">
          <h2 className="text-xl lg:text-2xl font-black text-[#0A0F1C] uppercase tracking-tight">Project Inquiry</h2>
        </div>
        <ContactForm />
      </div>
      
      {/* Info Sidebar */}
      <div className="order-1 lg:order-2 lg:col-span-5 lg:sticky lg:top-32">
        <div className="mb-6 lg:mb-8">
          <h2 className="text-xl lg:text-2xl font-black text-[#0A0F1C] uppercase tracking-tight">Direct Contact</h2>
        </div>
        
        <div className="space-y-6 lg:space-y-12">
          {/* Adjusted padding for mobile (p-6) vs desktop (p-8) */}
          <div className="bg-[#F8FAFC] p-6 lg:p-8 border-l-4 border-accent shadow-sm">
            <ContactInfo />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

        <ContactMap />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
