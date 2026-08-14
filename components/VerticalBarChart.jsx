"use client";

import { motion } from "framer-motion";

export default function VerticalBarChart({ data, suffix = "" }) {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="flex gap-2 sm:gap-3 md:gap-4 items-end">
      {data.map((d, i) => {
        const pct = Math.max((d.value / max) * 100, 6);
        return (
          <div className="vbar-item" key={d.code}>
            <div className="text-[10px] sm:text-xs lg:hidden font-medium opacity-80">
              +{d.value.toLocaleString("en-US")}
              {suffix}
            </div>
            <div className="vbar-track">
              <motion.div
                className="vbar-bar"
                initial={{ height: 0 }}
                whileInView={{ height: `${pct}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="vbar-label">
                  +{d.value.toLocaleString("en-US")}
                  {suffix}
                </span>
              </motion.div>
            </div>
            <div className="text-[10px] sm:text-xs text-center opacity-70">{d.code}</div>
          </div>
        );
      })}
    </div>
  );
}
