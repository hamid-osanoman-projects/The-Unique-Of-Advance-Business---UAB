import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactMap = () => {
  // Muscat, Oman coordinates - Updated with a real Ghala/Grand Mosque St location area embed
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3214828347714!2d58.3582455!3d23.5927829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff0239697f47%3A0x6b7794968d66978!2sSultan%20Qaboos%20Grand%20Mosque!5e0!3m2!1sen!2som!4v1705920000000!5m2!1sen!2som";
  
  const googleMapsLink = "https://maps.app.goo.gl/YourActualLocationLink";

  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          {/* Address Content */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="w-12 h-1 bg-accent mb-6" />
              <h2 className="text-3xl font-black text-[#0A0F1C] uppercase tracking-tighter mb-4">Our Head <br/>Office</h2>
              <p className="text-slate-500 font-medium">Muscat, Sultanate of Oman</p>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent shrink-0" />
                <address className="not-italic text-sm text-slate-700 leading-relaxed font-semibold uppercase tracking-tight">
                  ASAS Service Center Building, 2nd Floor<br />
                  Office No: 21, Ghala 130<br />
                  Grand Mosque St, Muscat
                </address>
              </div>
            </div>

            <a 
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#0A0F1C] hover:text-accent transition-colors border-b-2 border-[#0A0F1C] pb-1"
            >
              Get Directions <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Map Frame - Classic Shadow & Border */}
          <div className="lg:col-span-2 relative">
            <div className="bg-white p-3 shadow-2xl rounded-sm border border-slate-200">
              <div className="h-[400px] w-full bg-slate-100 relative transition-all duration-700">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="UAB Muscat Office"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactMap;