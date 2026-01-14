import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag, CheckCircle, Clock, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Vehicle } from "@/data/fleetData";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const getAvailabilityConfig = (status: Vehicle["availability"]) => {
    switch (status) {
      case "available":
        return { icon: CheckCircle, text: "Available", className: "text-green-600 bg-green-50" };
      case "in-use":
        return { icon: Clock, text: "In Use", className: "text-amber-600 bg-amber-50" };
      case "maintenance":
        return { icon: Wrench, text: "Maintenance", className: "text-red-600 bg-red-50" };
    }
  };

  const availability = getAvailabilityConfig(vehicle.availability);
  const AvailabilityIcon = availability.icon;

  return (
    <Link to={`/fleet/${vehicle.id}`}>
      <motion.div
        className="group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 h-full"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={vehicle.images[0]}
            alt={vehicle.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Availability Badge */}
          <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${availability.className}`}>
            <AvailabilityIcon className="w-3.5 h-3.5" />
            {availability.text}
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-primary-foreground font-medium text-sm flex items-center gap-1">
              View Details <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-foreground text-base sm:text-lg group-hover:text-accent transition-colors line-clamp-1">
              {vehicle.name}
            </h3>
          </div>
          
          <p className="text-accent font-medium text-xs sm:text-sm mb-3">
            {vehicle.highlight}
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-md">
              <Tag className="w-3 h-3" />
              {vehicle.category.charAt(0).toUpperCase() + vehicle.category.slice(1)}
            </span>
            <span className="inline-flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-md">
              <Calendar className="w-3 h-3" />
              {vehicle.year}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default VehicleCard;
