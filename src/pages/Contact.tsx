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
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ContactHero />
        
        {/* Contact Form & Info Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            {/* <motion.div 
              className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Let's Connect
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Can We Help You?
              </h2>
              <p className="text-muted-foreground">
                Choose your preferred method to reach us. We're committed to responding within 24 hours.
              </p>
            </motion.div> */}

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Contact Form - Takes more space */}
              <motion.div 
                className="lg:col-span-3 order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <ContactForm />
              </motion.div>
              
              {/* Contact Info - Sidebar */}
              <motion.div 
                className="lg:col-span-2 order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ContactInfo />
              </motion.div>
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
