"use client";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="z-10 relative"
      transition={{ ease: "easeInOut", duration: 0.65 }}
    >
      {children}
    </motion.div>
  );
}
