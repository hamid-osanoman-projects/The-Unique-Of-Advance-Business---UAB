import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactMap = () => {
  // Muscat, Oman coordinates
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8547959374384!2d58.4059!3d23.5859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzA5LjIiTiA1OMKwMjQnMjEuMiJF!5e0!3m2!1sen!2som!4v1640000000000!5m2!1sen!2som";
  
  const googleMapsLink = "https://www.google.com/maps/place/Muscat,+Oman";

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Our Location</span>
          </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase">
            Visit Our <span className="text-accent">Office</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Muscat, our office is easily accessible and ready to welcome you.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
          {/* Map Container */}
          <div className="aspect-[21/9] w-full">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UAB Office Location"
              className="w-full h-full"
            />
          </div>

          {/* Floating Info Card */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm bg-card/95 backdrop-blur-md rounded-xl p-6 shadow-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-1">UAB Head Office</h3>
                <p className="text-sm text-muted-foreground mb-3">
                 ASAS Service center Building,2nd Floor<br />
                Office No:21,  Grand Mosque St,
                Muscat,OMAN
                </p>
                <Button
                  asChild
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                >
                  <a 
                    href={googleMapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Get Directions
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
