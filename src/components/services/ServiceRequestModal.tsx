import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { servicesData } from "@/data/servicesData";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser"; // Import EmailJS

interface ServiceRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedServiceId?: string;
}

const ServiceRequestModal = ({ open, onOpenChange, preselectedServiceId }: ServiceRequestModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: preselectedServiceId || "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get keys from .env
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID; 
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Find the service title for the email
    const selectedService = servicesData.find(s => s.id === formData.service)?.title || formData.service;

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_company: formData.company || "Individual/Not Provided",
          service_type: selectedService, // Maps to {{service_type}} in template
          project_details: formData.message, // Maps to {{project_details}} in template
          duration_period: "Requested from Service Page Modal",
          site_name: "UAB Oman - Service Portal",
        },
        PUBLIC_KEY
      );

      setIsSubmitted(true);
      toast({
        title: "Request Submitted!",
        description: "Our team will contact you within 24 hours.",
      });

      // Close modal after showing success state
      setTimeout(() => {
        onOpenChange(false);
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: ""
        });
      }, 3000);
    } catch (error: any) {
      console.error("Email Error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.text || "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // SUCCESS STATE VIEW
  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Request Received!</h3>
            <p className="text-muted-foreground">
              Your inquiry for <strong>{servicesData.find(s => s.id === formData.service)?.title}</strong> has been sent successfully.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // FORM VIEW
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Request a Quote</DialogTitle>
          <DialogDescription>
            Inquire about our {servicesData.find(s => s.id === formData.service)?.title || 'services'} below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" placeholder="Your name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" placeholder="+968 9XXX XXXX" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="Your company" value={formData.company} onChange={(e) => handleInputChange("company", e.target.value)} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service Required *</Label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {servicesData.map((service) => (
                  <SelectItem key={service.id} value={service.id}>
                    {service.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Project Details *</Label>
            <Textarea id="message" placeholder="Tell us about your requirements..." value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} rows={4} required />
          </div>

          <Button type="submit" variant="accent" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Processing...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send Inquiry
              </span>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceRequestModal;