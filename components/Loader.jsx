"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex items-center justify-center"
          style={{ background: "var(--black)" }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0.4 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-white tracking-[0.2em] text-sm"
          >
            <span style={{ color: "var(--accent-pink)" }}>COVID</span>&ndash;19
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
