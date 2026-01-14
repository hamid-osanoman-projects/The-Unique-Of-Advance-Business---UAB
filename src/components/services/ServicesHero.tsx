import { Button } from "@/components/ui/button";

const ServicesHero = () => {
  return (
    <section className="relative bg-primary pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/20 text-accent rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Our Services
          </span> */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 px-2 uppercase">
          Integrated <span className="text-accent">Transportation & Heavy Equipment Services</span>   in Oman
          </h1>
          <p className="text-sm sm:text-md lg:text-lg text-primary-foreground/80 mb-6 sm:mb-8 px-4">
          Reliable Site Support for Engineering, Construction, and Manpower Firms.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button variant="accent" size="lg" asChild className="w-full sm:w-auto">
              <a href="#request-form">Request a Quote</a>
            </Button>
            <Button variant="outlineLight" size="lg" asChild className="w-full sm:w-auto">
              <a href="tel:+96891116925">Call +968 91116925</a>
            </Button>
          </div> */}
          {/* <p className="text-white/60 text-xs sm:text-sm lg:text-md">
          From long-term staff transportation contracts to specialized site support with water tankers and tippers, UAB offers a full-spectrum service portfolio tailored for the Omani market. We understand the unique requirements of local engineering firms and construction sites, providing the discipline and reliability required to keep projects on schedule.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
