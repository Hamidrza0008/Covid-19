"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle, toggle, dark = false }) {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-end justify-between gap-4 mb-10 md:mb-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2>{title}</h2>
        {subtitle ? (
          <p
            className="mt-2 text-sm md:text-base"
            style={{ color: dark ? "rgba(255,255,255,0.6)" : "var(--ink-soft)" }}
          >
            {subtitle}
          </p>
        ) : null}
      </motion.div>
      {toggle ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {toggle}
        </motion.div>
      ) : null}
    </div>
  );
}
