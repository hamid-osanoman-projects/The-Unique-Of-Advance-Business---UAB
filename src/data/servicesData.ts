import { Bus, Construction, Droplets, Truck } from "lucide-react";

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
    id: "corporate-transport",
    title: "Corporate & Contract Bus Transportation",
    shortDescription: "Reliable staff transportation for manpower supply companies, engineering firms, and corporate clients across Oman.",
    detailedDescription: "The Unique of Advance Business (UAB) provides disciplined workforce mobility solutions. We operate a specialized fleet of heavy seater buses and coaster buses, ensuring punctuality and operational consistency. We cater specifically to companies requiring structured, long-term staff transport support with a focus on route discipline and passenger safety.",
    icon: Bus,
    image: "https://i.pinimg.com/736x/e3/e8/a8/e3e8a8d6bd5f60dac8ce52c7166b1315.jpg",
    features: [
      "Heavy Seater and Coaster Bus Fleet",
      "Daily, Monthly, and Yearly Contract Options",
      "Manpower & Labor Transportation Specialists",
      "Route Discipline & Punctuality Monitoring",
      "Licensed Drivers with Safety Certifications",
      "GPS Fleet Tracking for Real-time Visibility",
      "Air-conditioned & Well-maintained Vehicles",
      "Customized Route Planning for Construction Sites"
    ],
    benefits: [
      "Ensure workforce arrives on-site on schedule",
      "Cost-effective monthly contract pricing",
      "Reduced administrative burden for manpower firms",
      "Enhanced safety for labor and staff transport",
      "Reliable service even for remote site locations",
      "Scalable fleet based on project workforce size"
    ],
    useCases: [
      "Manpower supply company daily commutes",
      "Engineering firm site-to-camp transport",
      "Industrial plant shift rotations",
      "School and Educational institution transport",
      "Corporate office staff shuttle programs",
      "Remote oil & gas site logistics"
    ],
    technologies: [
      "GPS Real-time Tracking",
      "Route Optimization Software",
      "Driver Behavior Monitoring",
      "Digital Trip Logging"
    ],
    ctaText: "Request Transport Quote",
    testimonials: [
      {
        id: "ct-1",
        name: "Ahmed Al-Balushi",
        role: "Logistics Manager",
        company: "Al-Haditha Engineering",
        content: "UAB has revolutionized our site transport. Their buses are always on time, which is critical for our engineering project timelines in Duqm.",
        rating: 5
      }
    ]
  },
  {
    id: "water-tanker",
    title: "Water Tanker Supply Services",
    shortDescription: "Professional supply of Green and Blue water tankers for commercial, industrial, and government irrigation projects.",
    detailedDescription: "UAB provides reliable water tanker services in Oman for operational and industrial use. Our fleet includes specialized Green and Blue water tankers, suitable for both construction site support and government irrigation projects. We ensure consistent supply and timely delivery through structured daily or monthly contracts.",
    icon: Droplets,
    image: "https://cdn.ironpla.net/i/1938/278/1938278_3945_159_0001-hr.jpg",
    features: [
      "Green & Blue Water Tankers available",
      "Daily, Monthly, and Long-term supply contracts",
      "Specialized Government Irrigation Support",
      "Multiple capacities (5,000 to 20,000 Liters)",
      "Scheduled recurring delivery options",
      "24/7 Emergency water supply availability",
      "Experienced drivers for site-specific delivery",
      "Clean and well-maintained tanker fleet"
    ],
    benefits: [
      // "Uninterrupted water supply for site operations",
      "Compliant with industrial and operational standards",
      "Flexible contracts tailored to project duration",
      "Reliable delivery to remote desert locations",
      "Cost-optimized water logistics",
      "Professional handling and site safety compliance"
    ],
    useCases: [
      "Government landscaping and irrigation",
      "Construction site dust control and mixing",
      "Industrial manufacturing cooling water",
      "Labor camp utility water supply",
      "Emergency backup for residential communities",
      "Commercial building maintenance water"
    ],
    technologies: [
      "Tanker Level Monitoring",
      "GPS Delivery Tracking",
      "Automated Scheduling",
      "Quality Assurance Checks"
    ],
    ctaText: "Book Water Tanker",
    testimonials: [
      {
        id: "wt-1",
        name: "Said Al-Kindi",
        role: "Project Coordinator",
        company: "Oman Infrastructure Group",
        content: "The reliability of UAB's water supply, especially their specialized green tankers for our irrigation projects, has been outstanding.",
        rating: 5
      }
    ]
  },
  {
    id: "heavy-equipment",
    title: "Heavy Equipment Services",
    shortDescription: "Professional earthmoving and material handling solutions featuring Excavators and Wheel Loaders.",
    detailedDescription: "Our heavy equipment division provides the machinery necessary for earthmoving, material handling, and site preparation across Oman. Featuring high-performance Excavators and Wheel Loaders, we deliver operational discipline alongside trained operators to ensure your construction or industrial project stays on track.",
    icon: Construction,
    image: "https://i.pinimg.com/1200x/23/6f/a1/236fa1ef7abcba3553c7a16e7adad16e.jpg",
    features: [
      "High-performance Excavators & Wheel Loaders",
      "Trained and Certified Equipment Operators",
      "Daily, Weekly, and Monthly Rental Periods",
      "Earthmoving and Site Preparation Specialists",
      "On-site Maintenance and Technical Support",
      "Equipment Mobilization to any Oman Governorate",
      "Rigorous Safety and Performance Inspections",
      "Material Handling Expertise"
    ],
    benefits: [
      "Reduce project downtime with reliable machinery",
      "Avoid high capital expenditure on equipment",
      "Access to skilled and safety-trained operators",
      "Scalable equipment fleet for large-scale sites",
      "Guaranteed performance in harsh Omani terrain",
      "Transparent and competitive rental rates"
    ],
    useCases: [
      "Building and Infrastructure Excavation",
      "Industrial Site Clearing and Levelling",
      "Quarry and Mining Material Handling",
      "Road Construction and Earthworks",
      "Agricultural Land Preparation",
      "Pipeline Trenching and Backfilling"
    ],
    technologies: [
      "Telematics Monitoring",
      "Safety Alert Systems",
      "Fuel Efficiency Tracking",
      "Load Sensing Technology"
    ],
    ctaText: "Get Equipment Quote",
    testimonials: [
      {
        id: "he-1",
        name: "Khalid Al-Rashdi",
        role: "Senior Engineer",
        company: "Galfar Engineering",
        content: "UAB provides top-tier excavators with operators who truly understand site discipline. They are a vital part of our earthmoving operations.",
        rating: 5
      }
    ]
  },
  {
    id: "tipper-logistics",
    title: "Tipper & Material Transportation",
    shortDescription: "Disciplined material logistics for sand, aggregates, and construction materials across Oman.",
    detailedDescription: "UAB supports Oman’s infrastructure development with a fleet of high-capacity tippers. We specialize in the transportation of sand, aggregates, and other construction materials, providing disciplined logistics aligned with strict site requirements and project timelines.",
    icon: Truck,
    image: "https://i.pinimg.com/736x/f7/9d/57/f79d57f4202594948ab73f7920072702.jpg",
    features: [
      "High-capacity Tipper Fleet",
      "Monthly and Project-based Contracts",
      "Construction Material Logistics Specialist",
      "Disciplined Site Operations Alignment",
      "Sand, Aggregate, and Debris Transport",
      "GPS Tracked Logistics Movement",
      "Safety-compliant Transport Fleet",
      "Timely Deliveries for Infrastructure Projects"
    ],
    benefits: [
      "Reliable material supply chain for construction",
      "Minimized site delays with punctual delivery",
      "Transparent tracking of material movement",
      "Safety-first approach to heavy logistics",
      "Competitive project-based contract rates",
      "Experienced drivers for challenging site terrain"
    ],
    useCases: [
      "Infrastructure and Highway construction",
      "Large-scale Residential Developments",
      "Industrial site material replenishment",
      "Waste and Debris removal from sites",
      "Quarry to Site material hauling",
      "Oil and Gas site support logistics"
    ],
    technologies: [
      "Real-time Fleet Tracking",
      "Load Optimization Systems",
      "Route Management Software",
      "Electronic Trip Documentation"
    ],
    ctaText: "Get Logistics Quote",
    testimonials: [
      {
        id: "lg-1",
        name: "Abdullah Al-Shukaili",
        role: "Procurement Manager",
        company: "Muscat Municipality Contractor",
        content: "Their tipper services are consistently reliable. We rely on UAB for all our aggregate transportation needs because of their operational discipline.",
        rating: 5
      }
    ]
  }
];

export const getServiceById = (id: string): ServiceData | undefined => {
  return servicesData.find(service => service.id === id);
};