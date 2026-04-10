"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ClipboardList } from "lucide-react";

export default function MobileFloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 flex gap-3 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md lg:hidden"
        >
          <a
            href="tel:+19256643281"
            className="btn-lift flex flex-1 items-center justify-center gap-2 rounded-[10px] bg-primary py-3.5 text-[15px] font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <Link
            href="/contact"
            className="btn-lift flex flex-1 items-center justify-center gap-2 rounded-[10px] bg-accent py-3.5 text-[15px] font-semibold text-white"
          >
            <ClipboardList className="h-4 w-4" />
            Free Estimate
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
