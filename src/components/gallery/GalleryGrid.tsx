import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import greenTankerImg from "../../assets/vehicles/greentanker1.jpeg";
import TATATipper1 from "../../assets/vehicles/tatatipper.jpeg";
import bus1 from "../../assets/vehicles/bus1.jpeg";
import { AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "All" },
  { id: "buses", label: "Buses" },
  { id: "equipment", label: "Heavy Equipment" },
  { id: "tankers", label: "Water Tankers" },
  { id: "trucks", label: "Tippers" },
  // { id: "projects", label: "Projects" }
];

const galleryImages = [
  // BUSES / STAFF TRANSPORT
  { 
    id: 1, 
    category: "buses", 
    title: "Toyota Coaster", 
    description: "Reliable staff shuttle for corporate and engineering teams", 
    image: "https://www.toyotaoman.com/Vehicles/Coaster/images/model/banner/toyota_banner1.jpg" 
  },
  { 
    id: 2, 
    category: "buses", 
    title: "Mitsubishi", 
    description: "26-seater premium mini bus for executive site transfers", 
    image: "https://www.mitsubishi-fuso.com/wp-content/uploads/2019/07/Rosa.jpg" 
  },
   {
    id: 3,
    category: "buses",
    title : "TATA Bus",
    description: "Modern staff transportation featuring wide aisles and comfortable seating. ",
    image: bus1,
    },
  { 
    id: 4, 
    category: "buses", 
    title: "Ashok Leyland", 
    description: "High-capacity labor transportation for large-scale projects", 
    image: "https://wellcaretransport.com/wp-content/uploads/2025/04/Ashok-Leyland-66-Seater-2-1.webp" 
  },

  // HEAVY EQUIPMENT
  { 
    id: 5, 
    category: "equipment", 
    title: "Hitachi Excavator", 
    description: "Heavy-duty crawler excavator for site preparation", 
    image: "https://hitachikenki.scene7.com/is/image/hitachikenki/ZX210-7-Working-1690-1" 
  },
  { 
    id: 6, 
    category: "equipment", 
    title: "JCB", 
    description: "Versatile backhoe loader for trenching and utility work", 
    image: "https://images.tractorjunction.com/Infrajunction-prod/jcb_3dx_backhoe_loader1686911730_2b5e36e8a3.jpg?format=webp&quality=40" 
  },
  { 
    id: 7, 
    category: "equipment", 
    title: "Wheel Loader (Shawal)", 
    description: "Heavy-duty material handling at a quarry site", 
    image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20190913-30ef3-683b2" 
  },

  // TANKERS
  { 
    id: 8, 
    category: "tankers", 
    title: "Blue Water Tanker", 
    description: "Potable and utility water supply for construction sites", 
    image: "https://www.astra-trucks.com/en/wp-content/uploads/sites/3/2019/07/2019MiningFuelAndWaterTanks.jpg" 
  },
  { 
    id: 9, 
    category: "tankers", 
    title: "Green Water Tanker", 
    description: "Large capacity irrigation water supply for government projects", 
    image: greenTankerImg 
  },

  // TRUCKS & LOGISTICS
  // { 
  //   id: 9, 
  //   category: "trucks", 
  //   title: "MAN TGS Tipper", 
  //   description: "25-ton material transport truck for rugged terrain", 
  //   image: "https://media.man.eu/is/image/MAN/man-lkw-etgs-teaser-1?wid=1600&hei=1200" 
  // },
  { 
    id: 10, 
    category: "trucks", 
    title: "TATA Tipper", 
    description: "High-performance logistics truck for infrastructure material", 
    image: TATATipper1
  },

  // PROJECTS & FIELD WORK
  // { 
  //   id: 11, 
  //   category: "projects", 
  //   title: "Site Operations", 
  //   description: "UAB fleet supporting infrastructure development in Oman", 
  //   image: "https://abunayyantrading.com/wp-content/uploads/2024/12/7341646718.jpg" 
  // },
  // { 
  //   id: 12, 
  //   category: "projects", 
  //   title: "Workforce Logistics", 
  //   description: "Coordinated staff mobilization for corporate clients", 
  //   image: "https://www.constructionweekonline.com/cloud/2021/07/07/Cat980L-web.jpg" 
  // }
];

const GalleryGrid = () => {
  // 1. ADD THIS STATE: This keeps track of the clicked image
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="bg-[#F8FAFC] py-12">
      <div className="container mx-auto px-4">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              // 2. ADD THIS ONCLICK: Sets the clicked image to state
              onClick={() => setSelectedImage(image)}
              className="relative break-inside-avoid group cursor-pointer"
            >
              <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-md group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={image.image} 
                  alt={image.title} 
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                  <p className="text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-2">{image.category}</p>
                  <h3 className="text-white text-lg font-black uppercase tracking-tight leading-tight">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. ADD THE PREVIEW MODAL HERE */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0A0F1C]/95 p-4"
            onClick={() => setSelectedImage(null)} // Click outside to close
          >
            <motion.button 
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </motion.button>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="rounded-[2rem] border-4 border-white max-h-[70vh] w-auto shadow-2xl"
              />
              <div className="mt-6 text-center">
                <p className="text-accent text-xs font-black uppercase tracking-widest mb-2">{selectedImage.category}</p>
                <h2 className="text-white text-3xl font-black uppercase tracking-tighter">{selectedImage.title}</h2>
                <p className="text-slate-400 mt-2 max-w-md">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryGrid;
