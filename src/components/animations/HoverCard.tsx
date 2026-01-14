import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

const HoverCard = ({ children, className = "" }: HoverCardProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;
