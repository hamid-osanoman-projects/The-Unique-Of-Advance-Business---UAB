import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

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
    title: "Mitsubishi Rosa", 
    description: "26-seater premium mini bus for executive site transfers", 
    image: "https://www.mitsubishi-fuso.com/wp-content/uploads/2019/07/Rosa.jpg" 
  },
  { 
    id: 3, 
    category: "buses", 
    title: "Ashok Leyland 66-Seater", 
    description: "High-capacity labor transportation for large-scale projects", 
    image: "https://wellcaretransport.com/wp-content/uploads/2025/04/Ashok-Leyland-66-Seater-2-1.webp" 
  },

  // HEAVY EQUIPMENT
  { 
    id: 4, 
    category: "equipment", 
    title: "Hitachi ZX210 Excavator", 
    description: "Heavy-duty crawler excavator for site preparation", 
    image: "https://hitachikenki.scene7.com/is/image/hitachikenki/ZX210-7-Working-1690-1" 
  },
  { 
    id: 5, 
    category: "equipment", 
    title: "JCB 3DX Backhoe", 
    description: "Versatile backhoe loader for trenching and utility work", 
    image: "https://images.tractorjunction.com/Infrajunction-prod/jcb_3dx_backhoe_loader1686911730_2b5e36e8a3.jpg?format=webp&quality=40" 
  },
  { 
    id: 6, 
    category: "equipment", 
    title: "Wheel Loader (Shawal)", 
    description: "Heavy-duty material handling at a quarry site", 
    image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20190913-30ef3-683b2" 
  },

  // TANKERS
  { 
    id: 7, 
    category: "tankers", 
    title: "Blue Water Tanker", 
    description: "Potable and utility water supply for construction sites", 
    image: "https://www.astra-trucks.com/en/wp-content/uploads/sites/3/2019/07/2019MiningFuelAndWaterTanks.jpg" 
  },
  { 
    id: 8, 
    category: "tankers", 
    title: "Green Water Tanker", 
    description: "Large capacity irrigation water supply for government projects", 
    image: "https://api.thearabianpost.com/wp-content/uploads/2021/08/Water-tanker.jpg" 
  },

  // TRUCKS & LOGISTICS
  { 
    id: 9, 
    category: "trucks", 
    title: "MAN TGS Tipper", 
    description: "25-ton material transport truck for rugged terrain", 
    image: "https://media.man.eu/is/image/MAN/man-lkw-etgs-teaser-1?wid=1600&hei=1200" 
  },
  { 
    id: 10, 
    category: "trucks", 
    title: "TATA Signa Tipper", 
    description: "High-performance logistics truck for infrastructure material", 
    image: "https://trucks.tatamotors.com/assets/trucks/files/trucks/2024-02/sign-1923k-1.jpg" 
  },

  // PROJECTS & FIELD WORK
  { 
    id: 11, 
    category: "projects", 
    title: "Site Operations", 
    description: "UAB fleet supporting infrastructure development in Oman", 
    image: "https://abunayyantrading.com/wp-content/uploads/2024/12/7341646718.jpg" 
  },
  { 
    id: 12, 
    category: "projects", 
    title: "Workforce Logistics", 
    description: "Coordinated staff mobilization for corporate clients", 
    image: "https://www.constructionweekonline.com/cloud/2021/07/07/Cat980L-web.jpg" 
  }
];

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeCategory === "all" ? galleryImages : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => { setCurrentImageIndex(index); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const goToPrevious = () => setCurrentImageIndex(prev => prev === 0 ? filteredImages.length - 1 : prev - 1);
  const goToNext = () => setCurrentImageIndex(prev => prev === filteredImages.length - 1 ? 0 : prev + 1);

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3]">
                <img src={image.image} alt={image.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-primary-foreground mb-1">{image.title}</h3>
                  <p className="text-xs sm:text-sm text-primary-foreground/80">{image.description}</p>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16 sm:py-20">
            <p className="text-muted-foreground text-base sm:text-lg">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button onClick={closeLightbox} className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button onClick={goToPrevious} className="absolute left-2 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button onClick={goToNext} className="absolute right-2 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="max-w-5xl mx-auto px-4 sm:px-12 lg:px-20">
            <img src={filteredImages[currentImageIndex]?.image} alt={filteredImages[currentImageIndex]?.title} className="max-h-[60vh] sm:max-h-[80vh] w-auto mx-auto rounded-lg" />
            <div className="text-center mt-4 sm:mt-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{filteredImages[currentImageIndex]?.title}</h3>
              <p className="text-white/70 text-sm sm:text-base">{filteredImages[currentImageIndex]?.description}</p>
              <p className="text-white/50 text-xs sm:text-sm mt-3 sm:mt-4">{currentImageIndex + 1} / {filteredImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
