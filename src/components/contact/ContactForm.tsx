import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, Mail, Phone, MessageSquare, Check, ArrowLeft, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name is required' }),
  email: z.string().trim().email({ message: 'Valid email required' }),
  phone: z.string().trim().optional().or(z.literal('')),
  inquiryType: z.string().min(1, { message: 'Please select an option' }),
  message: z.string().trim().min(10, { message: 'Message is too short' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inquiryTypes = [
  { value: 'Staff Transport', label: 'Industrial Staff Transport' },
  { value: 'Equipment Rental', label: 'Heavy Equipment Rental' },
  { value: 'Quote', label: 'Request a Quote' },
  { value: 'Support', label: 'General Inquiry' },
];

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [envError, setEnvError] = useState(false);

  // 1. Initialize EmailJS and check .env variables
  useEffect(() => {
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!PUBLIC_KEY) {
      console.error("❌ ENV ERROR: VITE_EMAILJS_PUBLIC_KEY is undefined. Check your .env file!");
      setEnvError(true);
    } else {
      emailjs.init(PUBLIC_KEY);
      // console.log("✅ EmailJS Initialized successfully");
    }
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', inquiryType: '', message: '' },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // CORRECTED VALUES
    const SERVICE_ID = "service_ro6pk8p"; 
    const TEMPLATE_ID = "template_4juczrm";
    const PUBLIC_KEY = "9gNpXTMT6kg5vTg6E"; // Removed the extra '5'

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: data.name,
          user_email: data.email,
          user_phone: data.phone || 'Not Provided',
          inquiry_type: data.inquiryType,
          message_details: data.message,
          site_name: "The Unique of Advance Business",
        },
        PUBLIC_KEY
      );

      if (response.status === 200) {
        setIsSuccess(true);
        form.reset();
      }
    } catch (error: any) {
      console.error("FAILED TO SEND:", error);
      alert(`Error: ${error.text || "Check console"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (envError) {
    return (
      <div className="p-6 bg-destructive/10 border border-destructive rounded-xl flex items-center gap-4 text-destructive">
        <AlertTriangle className="w-6 h-6" />
        <div>
          <p className="font-bold">Configuration Error</p>
          <p className="text-sm">Public Key not found. Please restart your dev server after updating .env.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl shadow-xl border border-border relative overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary/90 px-6 py-5 sm:px-8 sm:py-6">
        <h2 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-1">Send Us a Message</h2>
        <p className="text-primary-foreground/80 text-sm">Fill out the form below and our team will get back to you promptly.</p>
      </div>

      <div className="p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg mb-6">
                <Check className="w-10 h-10 text-accent-foreground stroke-[3]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground mb-6">Thank you for reaching out. We will connect you soon.</p>
              <Button onClick={() => setIsSuccess(false)} variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> Send Another
              </Button>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="Your Name" className="pl-10 h-11" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input type="email" placeholder="email@example.com" className="pl-10 h-11" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input type="tel" placeholder="+968 XXXX XXXX" className="pl-10 h-11" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="inquiryType" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Required *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-11">
                              <div className="flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-muted-foreground" />
                                <SelectValue placeholder="Select service" />
                              </div>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Please describe your requirements..." className="min-h-[130px] resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button type="submit" disabled={isSubmitting} size="lg" className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactForm;