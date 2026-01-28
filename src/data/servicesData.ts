import { Bus, Construction, Droplets, Truck } from "lucide-react";
import greenwaterTankerImg from "../assets/vehicles/greentanker2.jpeg";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  icon: typeof Bus;
  image: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  ctaText: string;
  testimonials: Testimonial[];
}

export const servicesData: ServiceData[] = [
  {
    id: "labor-transport",
    title: "Worker & Staff Transport",
    shortDescription: "Easy and reliable bus rentals for workers, office staff, and hotel teams across Oman.",
    detailedDescription: "We provide daily bus services to move your team safely. Whether you need to pick up laborers for a construction site, transport hotel staff for shift changes, or move office employees, we have the right buses. You can rent our buses with a professional driver or manage them yourself.",
    icon: Bus,
    image: "https://i.pinimg.com/736x/e3/e8/a8/e3e8a8d6bd5f60dac8ce52c7166b1315.jpg",
    features: [
      "Rent with a Driver or without a Driver",
      "Big buses (66-seater) and Mini buses (Coasters)",
      "Daily, Monthly, or Yearly rentals",
      "Hotel Staff shift timing specialists",
      "Perfect for Construction & Engineering teams",
      "All buses have strong Air Conditioning (AC)",
      "GPS tracking to see where the bus is",
      "Clean and well-maintained seats"
    ],
    benefits: [
      "Your team always arrives on time",
      "Cheaper monthly rates for long contracts",
      "We handle the driving so you don't have to",
      "Safe and comfortable travel for workers",
      "Available for remote areas and oil sites",
      "Easy to add more buses if your team grows"
    ],
    useCases: [
      "Construction worker daily transport",
      "Hotel staff shift pickups and drops",
      "Office staff morning/evening shuttle",
      "School and college student trips",
      "Airport transfers for large groups",
      "Factory and industrial shift changes"
    ],
    technologies: [
      "Live Map Tracking",
      "Smart Route Planning",
      "Safe Driving Alerts",
      "Digital Time Logs"
    ],
    ctaText: "Get a Bus Rental Quote",
    testimonials: [
      {
        id: "ct-1",
        name: "Ahmed Al-Balushi",
        role: "Logistics Manager",
        company: "Al-Haditha Engineering",
        content: "UAB makes moving our workers very easy. Their buses are always on time, and the drivers are very professional.",
        rating: 5
      }
    ]
  },
  {
    id: "water-tanker",
    title: "Water Tanker Delivery",
    shortDescription: "Fast water delivery for building sites, gardens, and industrial use using our tanker fleet.",
    detailedDescription: "Need water for your project? We supply Green and Blue water tankers for any need. We help with water for construction work, watering plants for government projects, or filling tanks at labor camps. Available for one-time delivery or monthly supply, with or without our drivers.",
    icon: Droplets,
    image: greenwaterTankerImg,
    features: [
      "Available with Driver or without Driver",
      "Green Tankers for plants/irrigation",
      "Blue Tankers for construction/cleaning",
      "Sizes from 5,000 to 20,000 Liters",
      "Daily and Monthly supply plans",
      "Emergency water delivery (24/7)",
      "Experienced drivers who know site safety",
      "Clean tanks for better water quality"
    ],
    benefits: [
      "Never run out of water on your site",
      "Simple contracts for long projects",
      "We deliver to desert and remote locations",
      "Best prices for monthly water supply",
      "No hidden costs",
      "Reliable and fast service"
    ],
    useCases: [
      "Watering garden and roadside plants",
      "Construction site dust control",
      "Mixing concrete and site cleaning",
      "Filling water tanks at labor camps",
      "Swimming pool filling",
      "Industrial cooling and factory use"
    ],
    technologies: [
      "Water Level Sensors",
      "GPS Delivery Tracking",
      "Easy Scheduling",
      "Quality Checks"
    ],
    ctaText: "Order a Water Tanker",
    testimonials: [
      {
        id: "wt-1",
        name: "Said Al-Kindi",
        role: "Project Coordinator",
        company: "Oman Infrastructure Group",
        content: "Very reliable water service. Their green tankers are perfect for our landscaping projects.",
        rating: 5
      }
    ]
  },
  {
    id: "heavy-equipment",
    title: "Excavators & Heavy Machines",
    shortDescription: "Powerful digging and lifting machines like Excavators and Loaders for your project.",
    detailedDescription: "Rent the best heavy machines for digging, moving soil, and clearing land. We provide high-quality Excavators and Wheel Loaders (Shawal) that are ready to work. You can rent the machine alone or with our expert operators to do the work for you.",
    icon: Construction,
    image: "https://i.pinimg.com/1200x/23/6f/a1/236fa1ef7abcba3553c7a16e7adad16e.jpg",
    features: [
      "Rent with Operator or without Operator",
      "Modern Excavators and Wheel Loaders",
      "Rent by Day, Week, or Month",
      "Expert at digging and land clearing",
      "Free on-site mechanical support",
      "We deliver the machine to your location",
      "Regular safety checks on all machines",
      "Heavy-duty performance"
    ],
    benefits: [
      "Get work done faster with strong machines",
      "No need to buy expensive equipment",
      "Skilled operators save you time",
      "Machines work perfectly in hot weather",
      "Very competitive rental rates",
      "Flexible rental times"
    ],
    useCases: [
      "Digging for building foundations",
      "Levelling and clearing project land",
      "Moving rocks and sand in quarries",
      "Road and highway construction",
      "Digging trenches for pipes",
      "Farm and land preparation"
    ],
    technologies: [
      "Machine Health Tracking",
      "Safety Sensors",
      "Fuel Saving Mode",
      "Weight Lifting Sensors"
    ],
    ctaText: "Get an Equipment Price",
    testimonials: [
      {
        id: "he-1",
        name: "Khalid Al-Rashdi",
        role: "Senior Engineer",
        company: "Galfar Engineering",
        content: "Good quality excavators. The operators are very skilled and follow all site safety rules.",
        rating: 5
      }
    ]
  },
  {
    id: "tipper-transport",
    title: "Sand & Material Transport",
    shortDescription: "Truck services to move sand, stones, and construction materials to your site.",
    detailedDescription: "Our tipper trucks help you move heavy materials easily. If you need to transport sand, stones (aggregate), or clear waste from a construction site, we have the trucks ready. Available for project-based work with or without our drivers.",
    icon: Truck,
    image: "https://i.pinimg.com/736x/f7/9d/57/f79d57f4202594948ab73f7920072702.jpg",
    features: [
      "Available with Driver or without Driver",
      "Big trucks for heavy loads",
      "Sand and Stone delivery",
      "Removal of construction waste",
      "Monthly or per-trip contracts",
      "GPS tracking for every load",
      "Safe and strong truck fleet",
      "On-time delivery guaranteed"
    ],
    benefits: [
      "Keep your materials moving on time",
      "Fewer delays on your construction site",
      "Know exactly where your materials are",
      "Cheaper rates for big projects",
      "Expert drivers for off-road sites",
      "Clean and professional service"
    ],
    useCases: [
      "Moving sand for road building",
      "Supplying stones for foundations",
      "Cleaning up site debris and waste",
      "Transporting materials from quarries",
      "Industrial material moving",
      "Large housing project logistics"
    ],
    technologies: [
      "Live Truck Tracking",
      "Load Weight Monitoring",
      "Best Route Planning",
      "Digital Delivery Notes"
    ],
    ctaText: "Get a Trucking Quote",
    testimonials: [
      {
        id: "lg-1",
        name: "Abdullah Al-Shukaili",
        role: "Procurement Manager",
        company: "Muscat Municipality Contractor",
        content: "Best tipper service in Oman. They always deliver our sand and stones on time.",
        rating: 5
      }
    ]
  }
];

export const getServiceById = (id: string): ServiceData | undefined => {
  return servicesData.find(service => service.id === id);
};