import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactMap = () => {
  // Muscat, Oman coordinates - Updated with a real Ghala/Grand Mosque St location area embed
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3214828347714!2d58.3582455!3d23.5927829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff0239697f47%3A0x6b7794968d66978!2sSultan%20Qaboos%20Grand%20Mosque!5e0!3m2!1sen!2som!4v1705920000000!5m2!1sen!2som";
  
  const googleMapsLink = "https://maps.app.goo.gl/YourActualLocationLink";

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4 uppercase tracking-tight">
            Visit Our <span className="text-accent">Office</span>
          </h2>
          <div className="h-1 w-12 md:w-20 bg-accent mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Visit us at our headquarters in Ghala, Muscat for professional transport and equipment consultations.
          </p>
        </div>

        {/* Map Wrapper */}
        <div className="flex flex-col lg:relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-card">
          
          {/* Map Container - Aspect ratio changes based on screen size */}
          <div className="aspect-square sm:aspect-video lg:aspect-[21/9] w-full grayscale-[0.2] contrast-[1.1]">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              title="UAB Office Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Info Card - Static on mobile, Floating on Desktop */}
          <div className="lg:absolute lg:bottom-8 lg:left-8 p-6 md:p-8 lg:max-w-sm w-full bg-card/95 lg:backdrop-blur-md lg:shadow-2xl lg:border lg:border-border lg:rounded-2xl">
            <div className="flex items-start gap-5">
              {/* <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                <MapPin className="w-6 h-6 text-primary" />
              </div> */}
              
              <div className="flex-1">
                <h3 className="font-bold text-lg text-foreground mb-2">UAB Head Office</h3>
                <address className="not-italic text-sm text-muted-foreground mb-6 leading-relaxed">
                  ASAS Service Center Building, 2nd Floor<br />
                  Office No: 21, Ghala 130<br />
                  Grand Mosque St, Muscat, OMAN
                </address>
                
                <Button
                  asChild
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl h-12 px-8 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <a 
                    href={googleMapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    GET DIRECTIONS
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;