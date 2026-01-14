import { Quote, Star } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
  serviceTitle: string;
}

const ServiceTestimonials = ({ testimonials, serviceTitle }: ServiceTestimonialsProps) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 block">
            Client Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Trusted by leading businesses across Oman for reliable {serviceTitle.toLowerCase()} services.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 h-full flex flex-col hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-accent/30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-accent fill-accent"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed flex-grow mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
