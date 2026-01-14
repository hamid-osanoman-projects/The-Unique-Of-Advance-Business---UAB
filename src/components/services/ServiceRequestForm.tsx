import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser"; // Import EmailJS

const serviceOptions = [
  "Corporate Transportation",
  "Heavy Equipment Rental",
  "Water Tanker Supply",
  "Logistics & Cargo",
  "Multiple Services"
];

const ServiceRequestForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    duration: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get keys from .env
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID; // Use the new Quote template
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        // This object MUST match your HTML template variables exactly
        {
          user_name: formData.name,
          user_company: formData.company || "Not Provided",
          user_email: formData.email,
          user_phone: formData.phone,
          service_type: formData.service, // NOT inquiry_type
          duration_period: formData.duration || "Not Specified",
          project_details: formData.message, // NOT message_details
          site_name: "The Unique of Advance Business", 
        },
        PUBLIC_KEY
      );

      setIsSubmitted(true);
      toast({
        title: "Quote Request Sent!",
        description: "UAB team will contact you within 24 hours.",
      });
    } catch (error: any) {
      console.error("Email Error:", error);
      toast({
        variant: "destructive",
        title: "Error Sending Request",
        // Show specific error if Zoho blocks relay
        description: error.text || "Please try again or call +968 91116925.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="request-form" className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Thank You for Your Request!
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 px-4">
              Our team will review your requirements and contact you within 24 hours 
              with a customized quote.
            </p>
            <Button 
              variant="accent" 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  company: "",
                  email: "",
                  phone: "",
                  service: "",
                  duration: "",
                  message: ""
                });
              }}
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="request-form" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block">
              Get Started
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Request a Service Quote
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">
              Fill out the form and our team will provide you with a detailed quote 
              tailored to your specific needs within 24 hours.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm sm:text-base">01</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">Submit Your Request</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Tell us about your transportation or equipment needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm sm:text-base">02</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">Receive Custom Quote</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    We'll analyze your requirements and provide competitive pricing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm sm:text-base">03</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">Start Service</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Once approved, we deploy resources to meet your timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full h-10 sm:h-11 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full h-10 sm:h-11 text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full h-10 sm:h-11 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+968 XXXX XXXX"
                    className="w-full h-10 sm:h-11 text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-10 sm:h-11 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="duration" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Duration
                  </label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full h-10 sm:h-11 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">Select duration</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="project">Project Based</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  rows={4}
                  className="w-full text-sm"
                />
              </div>

              <Button 
                type="submit" 
                variant="accent" 
                className="w-full h-11 sm:h-12" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⟳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Submit Request
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRequestForm;