import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactInfo = () => {
  const directContacts = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+968 9111 6925',
      href: 'tel:+96891116925',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'abdullah@theuniqueom.com',
      href: 'mailto:abdullah@theuniqueom.com',
      color: 'bg-accent/10 text-accent',
    },
    {
  icon: MessageCircle,
  label: 'WhatsApp',
  value: '+968 9111 6925',
  // Professional common message for the contact page
  href: 'https://api.whatsapp.com/send?phone=96891116925&text=Hello!%20I%20contacted%20you%20via%20your%20website%20and%20would%20like%20to%20get%20more%20information%20about%20your%20services.',
  color: 'bg-green-500/10 text-green-600',
},
  ];

  const businessHours = [
    { day: 'Sat - Wed', hours: '8:00 AM - 6:00 PM', isOpen: true },
    { day: 'Thursday', hours: '8:00 AM - 5:00 PM', isOpen: true },
    { day: 'Friday', hours: 'Closed', isOpen: false }
  ];

  return (
    <div className="space-y-6">
      {/* Quick Contact Cards */}
      <div className="space-y-3">
        {directContacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target={contact.href.startsWith('http') ? '_blank' : undefined}
            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group flex items-center gap-4 p-4 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
          >
            <div className={`flex-shrink-0 w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <contact.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{contact.label}</p>
              <p className="text-foreground font-semibold truncate">{contact.value}</p>
            </div>
            <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </div>
          </a>
        ))}
      </div>

      {/* Business Hours Card */}
      <div className="bg-card rounded-xl border border-border shadow-sm p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5 text-accent" />
          </div>
          <h3 className="font-bold text-foreground">Business Hours</h3>
        </div>
        
        <div className="space-y-2">
          {businessHours.map((schedule, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center py-2 px-3 rounded-lg bg-muted/40"
            >
              <span className="text-sm text-foreground">{schedule.day}</span>
              <span className={`text-sm font-medium ${
                schedule.isOpen ? 'text-accent' : 'text-destructive'
              }`}>
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-primary">24/7 Emergency:</span> +968 9999 8888
          </p>
        </div>
      </div>

      {/* Office Address Card */}
      {/* <div className="bg-card rounded-xl border border-border shadow-sm p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-bold text-foreground">Visit Our Office</h3>
        </div>
        
        <address className="not-italic text-sm text-muted-foreground leading-relaxed mb-4">
          United Arab Bus & Equipment Rental LLC<br />
          Al Khuwair, Muscat<br />
          Sultanate of Oman
        </address>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full"
        >
          <a 
            href="https://www.google.com/maps/place/Muscat,+Oman" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Get Directions
          </a>
        </Button>
      </div> */}
    </div>
  );
};

export default ContactInfo;
