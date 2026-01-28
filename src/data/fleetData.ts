import greentanker1 from "../assets/vehicles/greentanker2.jpeg";
import tatatipper1 from "../assets/vehicles/tatatipper1.jpeg";
import bus1 from "../assets/vehicles/bus1.jpeg";

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  year: number;
  highlight: string;
  description: string;
  images: string[];
  specifications: {
    capacity?: string;
    engine?: string;
    fuel?: string;
    transmission?: string;
    seating?: string;
    loadCapacity?: string;
    operatingWeight?: string;
    bucketCapacity?: string;
    power?: string;
  };
  usageType: string;
  availability: "available" | "in-use" | "maintenance";
  featured?: boolean;
}

export const fleetCategories = [
  { id: "all", name: "All Fleet" },
  { id: "buses", name: "Staff Transport" },
  { id: "heavy equipment", name: "Heavy Equipment" },
  { id: "tankers", name: "Water Tankers" },
  { id: "trucks", name: "Logistics Trucks" },
];


export const vehicles: Vehicle[] = [
  {
    id: "ashokleyland-bus",
    name: "Ashok Leyland",
    category: "buses",
    year: 2022,
    highlight: "Worker & Staff Transport",
    description: "The backbone of industrial workforce mobility. Specifically configured for large-scale labor transport between camps and project sites. Built for Oman's climate with heavy-duty air conditioning and high-durability seating.",
    images: [
      "https://wellcaretransport.com/wp-content/uploads/2025/04/Ashok-Leyland-66-Seater-2-1.webp",
      "https://wellcaretransport.com/wp-content/uploads/2025/04/Ashok-Leyland-66-Seater-3-1.webp",
    ],
    specifications: {
      seating: "66 Passengers",
      engine: "H-Series CRS Diesel",
      transmission: "6-Speed Manual",
      fuel: "Diesel",
    },
    usageType: "Manpower & Labor Transport",
    availability: "available",
    featured: true
  },
  // {
  //   id: "daewoo-bus",
  //   name: "DAEWOO BC212MA",
  //   category: "buses",
  //   year: 2021,
  //   highlight: "Reliable Staff Shuttle",
  //   description: "A professional 30-seater solution for corporate staff and engineering teams. Known for its smooth suspension and reliability for inter-city commutes across Muscat and the interior regions.",
  //   images: [
  //     "https://storage.daewoobus.kz/source/1/SqUp1H1mfFpxd5dmoXzdblnyl8Vnf8rg.jpg?s=56042be74782fd6b1bc68356f28ff181",
  //     "https://storage.daewoobus.kz/source/1/W-RIdLSU-dh9AOYWiysJo6eDfe1A5HhK.jpg?s=2f3eda247c7c35cc912159dc5888262c"
  //   ],
  //   specifications: {
  //     seating: "30 Passengers",
  //     engine: "Doosan DL08 Diesel",
  //     transmission: "Manual",
  //     fuel: "Diesel",
  //   },
  //   usageType: "Corporate & Site Transport",
  //   availability: "available",
  //   featured: true
  // },
  {
    id: "tata-bus",
    name: "TATA Ultra Bus",
    category: "buses",
    year: 2020,
    highlight: "Versatile Crew Carrier",
    description: "Modern staff transportation featuring wide aisles and comfortable seating. Ideal for fixed-route corporate shuttle programs requiring high punctuality and passenger safety.",
    images: [bus1],
    specifications: {
      seating: "34-40 Passengers",
      engine: "TATA 3.8L SGI",
      power: "140 HP",
      fuel: "Diesel"
    },
    usageType: "Site-to-Camp Transportation",
    availability: "available",
    featured: true
  },
  {
    id: "mistubushi-rosa-coasterbus",
    name: "Mitsubishi",
    category: "buses",
    year: 2021,
    highlight: "Premium Coaster Service",
    description: "The gold standard for engineering team mobility. Compact enough for urban navigation yet robust enough for rugged site access. Offers a premium interior for executive staff transport.",
    images: [
      "https://www.mitsubishi-fuso.com/wp-content/uploads/2019/07/Rosa.jpg",
    ],
    specifications: {
      seating: "26-30 Passengers",
      engine: "4.9L 4-Cylinder",
      transmission: "6-Speed Manual",
      fuel: "Diesel"
    },
    usageType: "Engineering Team Mobility",
    availability: "in-use"
  },
  {
    id: "toyota-coaster-bus",
    name: "TOYOTA Coaster",
    category: "buses",
    year: 2022,
    highlight: "Elite Staff Commute",
    description: "A world-renowned choice for reliability. Our Toyota Coasters are meticulously maintained for corporate clients, offering smooth rides and high-performance AC for the Omani summer.",
    images: [
      "https://www.toyotaoman.com/Vehicles/Coaster/images/model/banner/toyota_banner1.jpg",
      "https://www.toyotaoman.com/Vehicles/Coaster/images/model/toyota_coaster_overview.jpg"
    ],
    specifications: {
      seating: "22-30 Passengers",
      engine: "4.0L Diesel",
      transmission: "Manual/Auto",
      fuel: "Diesel",
    },
    usageType: "Executive Staff Shuttles",
    availability: "available",
    featured: true
  },
  {
    id: "tata-signa-truck",
    name: "TATA Tipper",
    category: "trucks",
    year: 2021,
    highlight: "Infrastructure Logistics",
    description: "High-capacity tipper for heavy-duty material transport including sand, aggregates, and debris. Designed for continuous operation on infrastructure and road construction sites.",
    images: [tatatipper1],
    specifications: {
      loadCapacity: "18-20 Tons",
      engine: "Cummins ISBe 5.9L",
      transmission: "Heavy Duty 6-Speed",
      fuel: "Diesel",
    },
    usageType: "Material Transportation",
    availability: "available"
  },
  // {
  //   id: "man-etgs-truck",
  //   name: "MAN TGS Tipper",
  //   category: "trucks",
  //   year: 2021,
  //   highlight: "Heavy-Duty Material Mover",
  //   description: "German-engineered power for large-scale logistics. This truck handles extreme payloads in challenging Omani terrains, perfectly suited for mountain and desert site supply chains.",
  //   images: [
  //     "https://media.man.eu/is/image/MAN/man-lkw-etgs-teaser-1?wid=1600&hei=1200&fmt=webp-alpha",
  //   ],
  //   specifications: {
  //     loadCapacity: "25-30 Tons",
  //     engine: "D26 Common Rail",
  //     power: "400 HP",
  //     transmission: "MAN TipMatic",
  //     fuel: "Diesel"
  //   },
  //   usageType: "Mining & Infrastructure",
  //   availability: "available",
  //   featured: true
  // },
  {
    id: "water-tanker",
    name: "Green Water Tanker",
    category: "tankers",
    year: 2020,
    highlight: "Industrial Water Supply",
    description: "Specialized for large-scale water logistics. Available as Blue (Potable/Utility) or Green (Irrigation) tankers. Equipped with high-pressure discharge systems for site and government use.",
    images: greentanker1 ? [greentanker1] : [],
    specifications: {
      capacity: "10,000 - 15,000 Liters",
      engine: "IVECO Cursor 13",
      power: "380 HP",
      fuel: "Diesel"
    },
    usageType: "Construction & Irrigation Supply",
    availability: "in-use"
  },
  {
    id: "escavator",
    name: "JCB",
    category: "heavy equipment",
    year: 2022,
    highlight: "Versatile Earthmoving",
    description: "The ultimate site preparation tool. Combines the power of an excavator with the versatility of a loader. Ideal for trenching, road work, and industrial site leveling.",
    images: [
      "https://images.tractorjunction.com/Infrajunction-prod/jcb_3dx_backhoe_loader1686911730_2b5e36e8a3.jpg?format=webp&quality=40"
    ],
    specifications: {
      power: "92 HP",
      engine: "JCB ecoMAX",
      bucketCapacity: "1.1 m³",
      operatingWeight: "7,460 kg",
      fuel: "Diesel",
    },
    usageType: "Site Preparation & Trenching",
    availability: "available",
    featured: true
  },
  {
    id: "hitachi-escavator",
    name: "Hitachi Excavator",
    category: "heavy equipment",
    year: 2021,
    highlight: "Precision Digging",
    description: "A high-performance crawler excavator for heavy digging and demolition. Features advanced hydraulics for precision work on major infrastructure and oil & gas pipeline projects.",
    images: [
      "https://hitachikenki.scene7.com/is/image/hitachikenki/ZX210-7-Working-1690-1",
    ],
    specifications: {
      power: "160 HP",
      engine: "Isuzu 4-Cylinder",
      operatingWeight: "21,000 kg",
      bucketCapacity: "1.2 m³",
      fuel: "Diesel",
    },
    usageType: "Large-scale Excavation",
    availability: "available"
  },
  {
    id: "shawal-loader",
    name: "Wheel Loader (Shawal)",
    category: "heavy equipment",
    year: 2022,
    highlight: "Heavy Material Handling",
    description: "Designed for high-speed material loading and stockpile management. Essential for concrete batching plants, quarries, and large-scale material transport sites.",
    images: [
      "https://s7d2.scene7.com/is/image/Caterpillar/CM20190913-30ef3-683b2",
    ],
    specifications: {
      loadCapacity: "5-7 Tons",
      engine: "CAT C7.1 ACERT",
      transmission: "Powershift",
      fuel: "Diesel",
      bucketCapacity: "3.5 m³"
    },
    usageType: "Quarry & Logistics Support",
    availability: "available"
  }
];
export const getFeaturedVehicles = () => vehicles.filter(v => v.featured);

export const getVehiclesByCategory = (category: string) => {
  if (category === "all") return vehicles;
  return vehicles.filter(v => v.category === category);
};

export const getVehicleById = (id: string) => vehicles.find(v => v.id === id);
