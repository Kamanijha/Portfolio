import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to false for debugging
    threshold: 0.2, // Trigger when 20% of section is visible
  });

  //console.log("Section in view:", inView); // Debugging log

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
