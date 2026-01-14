import { Check, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  
  {
    name: "Monthly Contract",
    description: "Best value for ongoing needs",
    highlight: false,
    features: [
      "30-day commitment",
      "Priority vehicle allocation",
      "Dedicated drivers",
      "Fuel management options",
      "Real-time GPS tracking",
      "24/7 priority support"
    ],
    cta: "Request Quote"
  },
  {
    name: "Yearly Rental",
    description: "Perfect for long-term projects",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Flexible 1-day minimum",
      "All vehicle types available",
      "Dedicated drivers",
      "Fuel management options",
      "Basic GPS tracking",
      "Standard support"
    ],
    cta: "Request Quote"
  },
  {
    name: "Project Based",
    description: "Tailored for large projects",
    highlight: false,
    features: [
      "Custom duration",
      "Fleet customization",
      "Project manager assigned",
      "Full logistics support",
      "Advanced reporting",
      "Dedicated account team"
    ],
    cta: "Discuss Project"
  }
];

const PricingSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block">
            Flexible Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Rental Plans That Fit Your Budget
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg px-4">
            We offer competitive pricing with flexible terms. Contact us for a customized 
            quote based on your specific requirements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight 
                  ? 'bg-primary text-primary-foreground shadow-2xl sm:scale-105 order-first sm:order-none' 
                  : 'bg-card border border-border hover:border-primary/50 hover:shadow-xl'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className={`text-xl sm:text-2xl font-bold mb-1 sm:mb-2 ${plan.highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs sm:text-sm ${plan.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlight ? 'bg-accent' : 'bg-primary/10'
                    }`}>
                      <Check className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${plan.highlight ? 'text-accent-foreground' : 'text-primary'}`} />
                    </div>
                    <span className={`text-xs sm:text-sm ${plan.highlight ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.highlight ? "accent" : "outline"}
                className="w-full"
                asChild
              >
                <a href="#request-form" className="inline-flex items-center justify-center gap-2 text-sm">
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="mt-10 sm:mt-12 lg:mt-16 bg-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-3 sm:mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-primary-foreground/80 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
            Our team is ready to create a tailored package that perfectly matches your 
            project requirements and budget constraints.
          </p>
          <Button variant="accent" size="lg" asChild className="w-full sm:w-auto">
            <a href="tel:+96891116925" className="inline-flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Call +968 91116925
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
