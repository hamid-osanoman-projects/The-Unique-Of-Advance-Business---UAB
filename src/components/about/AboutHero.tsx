import { Play } from "lucide-react";
import heroImage from "@/assets/hero-fleet.jpg";

const AboutHero = () => {
  return (
    <section className="pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 lg:pb-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Left - Image with Play Button */}
          <div className="relative opacity-0 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="UAB Fleet and Services" 
                className="w-full h-[280px] sm:h-[350px] lg:h-[450px] object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 sm:w-20 sm:h-20 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 shadow-accent-glow group">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                </button>
              </div>
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-primary/30 pointer-events-none" />
            </div>
            
            {/* Decorative element - hidden on mobile */}
            <div className="hidden sm:block absolute -z-10 -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-full h-full border-2 border-primary/20 rounded-2xl" />
          </div>

          {/* Right - Content */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <span className="inline-block bg-accent/10 text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
              About Us
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 uppercase leading-tight">
              {/* Oman's Premier <span className="text-accent">Transport</span> Company */}
              Oman’s Trusted Partner in <span className="text-accent">Logistics & Industrial Support</span> 
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
            The Unique of Advance Business (UAB) is a premier transportation and equipment rental company officially registered in 2015, with roots in the industry since 2010. We specialize in providing the backbone for Oman’s engineering, construction, and manpower sectors.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              Our commitment to excellence, reliability, and customer satisfaction has made us 
              the preferred choice for leading companies across Muscat and all governorates of Oman.
              With a modern fleet of 40+ vehicles and experienced professionals, we deliver 
              unmatched service quality.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 sm:px-4 py-1.5 sm:py-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium text-xs sm:text-sm">Established 2015</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 sm:px-4 py-1.5 sm:py-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium text-xs sm:text-sm">Muscat Based</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 sm:px-4 py-1.5 sm:py-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium text-xs sm:text-sm">All Oman Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
