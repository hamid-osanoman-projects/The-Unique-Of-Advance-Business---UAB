import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-fleet.jpg";

const features = [
  "14+ Years of Industry Experience",
  "Modern Fleet of 30+ Vehicles",
  "GPS Tracking on Vehicles",
  "24/7 Customer Support",
  "Competitive & Transparent Pricing",
  "Serving All Oman Governorates",
];

const AboutWhyUs = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative opacity-0 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Why Choose UAB" 
                className="w-full h-[280px] sm:h-[350px] lg:h-[450px] object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-[#0A0F1C] text-primary-foreground rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 sm:mb-1">14+</p>
              <p className="text-primary-foreground/70 text-xs sm:text-sm">Years Experience</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-6">
  <div className="w-10 h-[2px] bg-accent" />
  <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-[0.3em] block">
    Our Promise
  </span>
</div>

<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0F1C] mb-8 uppercase leading-tight">
  Why Companies <br /><span className="text-accent">Trust Us</span>
</h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              We've built a reputation for excellence by consistently delivering on our promises 
              and exceeding client expectations. 
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 sm:gap-3 bg-secondary/50 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium text-xs sm:text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyUs;
