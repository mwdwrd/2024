"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "anticipate", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
