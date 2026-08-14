"use client";

import { motion } from "framer-motion";

export default function BarList({
  data,
  color = "var(--accent-blue)",
  format,
  suffix = "",
  changeFormat,
  dark = false,
  className = "",
  labelFormat,
}) {
  const max = Math.max(...data.map((d) => d.value ?? 0));

  return (
    <div className={className}>
      {data.map((row, i) => {
        const pct = row.value == null ? 0 : Math.max((row.value / max) * 100, 4);
        return (
          <div
            className="bar-row"
            key={row.code}
            style={{ borderColor: dark ? "rgba(255,255,255,0.15)" : "var(--line)" }}
          >
            <div className="label" style={{ opacity: dark ? 0.75 : 0.85 }}>
              {labelFormat ? labelFormat(row) : row.code}
            </div>
            <div className="track">
              {row.value == null ? (
                <div
                  className="text-xs self-center pt-1"
                  style={{ opacity: 0.4 }}
                >
                  N/A
                </div>
              ) : (
                <motion.div
                  className="fill"
                  style={{ background: color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                >
                  {format ? format(row.value) : row.value.toLocaleString("en-US")}
                  {suffix}
                </motion.div>
              )}
            </div>
            {row.change != null ? (
              <div className="change">
                +{changeFormat ? changeFormat(row.change) : row.change.toLocaleString("en-US")}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
