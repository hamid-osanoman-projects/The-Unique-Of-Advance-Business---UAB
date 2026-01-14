import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GalleryCTA = () => {
  return (
    <section className="py-16 sm:py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 sm:mb-6 px-2">
            Ready to See Our Fleet in Action?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 mb-6 sm:mb-8 px-4">
            Contact us to schedule a site visit or request specific equipment 
            for your project. Our team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button variant="accent" size="lg" asChild className="w-full sm:w-auto">
              <Link to="/services#request-form" className="inline-flex items-center justify-center gap-2">
                Request Equipment
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
            <Button variant="outlineLight" size="lg" asChild className="w-full sm:w-auto">
              <a href="tel:+96891116925" className="inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Call +968 91116925
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCTA;
