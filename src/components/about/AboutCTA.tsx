import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-[#0A0F1C]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-primary-foreground text-lg sm:text-xl md:text-2xl font-bold">
                Looking for the Best Services?
              </h3>
              <p className="text-primary-foreground/70 text-sm sm:text-base">
                Call us today: +968 91116925
              </p>
            </div>
          </div>
          <Button variant="accent" size="lg" className="w-full md:w-auto">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
