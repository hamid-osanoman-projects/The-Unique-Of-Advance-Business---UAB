import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface CountUpNumberProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

const CountUpNumber = ({
  value,
  suffix = "",
  className = "",
  duration = 2,
}: CountUpNumberProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const display = useTransform(spring, (current) =>
    Math.round(current).toString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
};

export default CountUpNumber;
