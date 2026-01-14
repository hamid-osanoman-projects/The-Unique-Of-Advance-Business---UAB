import { motion } from "framer-motion";

interface GradientBackgroundProps {
  className?: string;
  variant?: "primary" | "accent" | "subtle";
}

const GradientBackground = ({
  className = "",
  variant = "primary",
}: GradientBackgroundProps) => {
  const gradients = {
    primary: (
      <>
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </>
    ),
    accent: (
      <>
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </>
    ),
    subtle: (
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ),
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {gradients[variant]}
    </div>
  );
};

export default GradientBackground;
