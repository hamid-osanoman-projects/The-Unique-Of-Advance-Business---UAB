import { motion } from "framer-motion";

interface FloatingElementsProps {
  className?: string;
  variant?: "circles" | "squares" | "mixed";
}

const FloatingElements = ({
  className = "",
  variant = "circles",
}: FloatingElementsProps) => {
  const elements = variant === "circles" ? (
    <>
      <motion.div
        className="absolute top-20 right-10 lg:right-20 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 border border-primary-foreground/10 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 md:bottom-40 left-5 md:left-10 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 border border-primary-foreground/10 rounded-full"
        animate={{
          scale: [1, 0.9, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  ) : variant === "squares" ? (
    <>
      <motion.div
        className="absolute top-10 left-10 w-24 md:w-32 h-24 md:h-32 border border-primary-foreground/10 rotate-45"
        animate={{
          rotate: [45, 135, 45],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 md:w-48 h-32 md:h-48 border border-primary-foreground/10"
        animate={{
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  ) : (
    <>
      <motion.div
        className="absolute top-20 right-10 lg:right-20 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 border border-primary-foreground/10 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 md:bottom-40 left-5 md:left-10 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 border border-primary-foreground/10 rotate-45"
        animate={{
          rotate: [45, 90, 45],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-20 h-20 border border-primary-foreground/5 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );

  return (
    <div className={`pointer-events-none hidden md:block ${className}`}>
      {elements}
    </div>
  );
};

export default FloatingElements;
