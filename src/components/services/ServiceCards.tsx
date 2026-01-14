import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";

const ServiceCards = () => {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 mt-12"> */}
          {/* <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block">
            What We Offer
          </span> */}
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Comprehensive Service Portfolio
          </h2> */}
          {/* <p className="text-muted-foreground text-sm sm:text-base lg:text-lg px-4">
          From long-term staff transportation contracts to specialized site support with water tankers and tippers, UAB offers a full-spectrum service portfolio tailored for the Omani market. We understand the unique requirements of local engineering firms and construction sites, providing the discipline and reliability required to keep projects on schedule.
          </p>
        </div> */}

        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 sm:h-72 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                      <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-accent rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                  {/* Decorative element - hidden on mobile */}
                  <div className={`hidden sm:block absolute -z-10 w-full h-full bg-primary/10 rounded-2xl top-3 sm:top-4 ${isEven ? '-right-3 sm:-right-4' : '-left-3 sm:-left-4'}`} />
                </div>

                {/* Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 uppercase">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6">
                    {service.shortDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {service.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="accent" asChild className="w-full sm:w-auto">
                      <Link to={`/services/${service.id}`} className="inline-flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full sm:w-auto">
                      <a href="#request-form" className="inline-flex items-center justify-center gap-2">
                        Request Quote
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
