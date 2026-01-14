import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/animations/AnimatedSection";

const FleetCTA = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Need a Vehicle or Equipment?
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/70 mb-8">
            Contact us today for rental inquiries, availability, and custom quotes. 
            Our team is ready to assist you 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact">
                <Button variant="accent" size="lg" className="w-full sm:w-auto btn-shimmer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Request a Quote
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="tel:+96891116925">
                <Button variant="outlineLight" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +968 91116925
                </Button>
              </a>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FleetCTA;
