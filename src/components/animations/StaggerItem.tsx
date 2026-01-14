import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

const itemVariants = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
};

const StaggerItem = ({
  children,
  className = "",
  direction = "up",
}: StaggerItemProps) => {
  return (
    <motion.div className={className} variants={itemVariants[direction]}>
      {children}
    </motion.div>
  );
};

export default StaggerItem;
