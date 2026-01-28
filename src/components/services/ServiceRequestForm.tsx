import { useState } from "react";
import { Send, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: formData.name,
          user_company: formData.company || "Not Provided",
          user_email: formData.email,
          user_phone: formData.phone,
          service_type: formData.service,
          duration_period: formData.duration || "Not Specified",
          project_details: formData.message,
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
        description: error.text || "Please try again or call +968 91116925.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="request-form" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-black text-[#0A0F1C] uppercase mb-4 tracking-tighter">
              Request Received
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Our dispatch team will review your requirements and provide a formal 
              quote within 24 hours.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              className="font-black uppercase tracking-widest"
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Request
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="request-form" className="py-16 lg:py-22 bg-background relative overflow-hidden">
      {/* Decorative background text similar to model */}
      {/* <div className="absolute top-20 right-0 text-[10rem] font-black text-slate-50 select-none leading-none -z-0">
        QUOTE
      </div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
          
          {/* Left Content: Messaging */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-accent" />
              <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-[0.3em]">
                Get Started
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A0F1C] mb-8 leading-tight uppercase">
              Get a Professional <br />
              <span className="text-accent">Service Quote</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-10 max-w-lg leading-relaxed font-medium">
              Fill out the form and our team will provide you with a detailed quote 
              tailored to your specific needs within 24 hours.
            </p>

            <div className="space-y-8">
              {[
                { step: "01", title: "Submit Details", desc: "Briefly describe your vehicle or logistics needs." },
                { step: "02", title: "Internal Review", desc: "We calculate the best rates based on your timeline." },
                { step: "03", title: "Final Quote", desc: "Receive a formal proposal within one business day." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="text-2xl font-black text-slate-200 group-hover:text-accent transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#0A0F1C] uppercase tracking-tight text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content: The Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-[2rem] p-6 lg:p-10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="h-12 border-slate-200 focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Company
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="h-12 border-slate-200"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="h-12 border-slate-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Phone *
                  </label>
                  <Input
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+968"
                    className="h-12 border-slate-200"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Select Service *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="flex w-full h-12 rounded-md border border-slate-200 bg-background px-3 py-2 text-sm font-medium ring-offset-background focus:ring-2 focus:ring-accent outline-none appearance-none"
                  >
                    <option value="">Choose Service</option>
                    {serviceOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Duration
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="flex w-full h-12 rounded-md border border-slate-200 bg-background px-3 py-2 text-sm font-medium outline-none"
                  >
                    <option value="">Duration Needed</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="project">Project Based</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  Project Details
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="border-slate-200 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="accent" 
                className="w-full h-14 font-black uppercase tracking-widest shadow-xl shadow-accent/20" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Processing..."
                ) : (
                  <span className="flex items-center gap-2">
                    Submit Quote Request <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRequestForm;