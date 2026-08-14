"use client";

import { motion } from "framer-motion";

export default function Nav({ onInfoClick }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 1 }}
      className="info-nav fixed z-50"
    >
      <button
        type="button"
        onClick={onInfoClick}
        className="text-[14px] tracking-[0.02em] text-white/55 hover:text-white transition-colors"
      >
        Information
      </button>
    </motion.div>
  );
}
