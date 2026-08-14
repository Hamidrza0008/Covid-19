"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { trend } from "@/lib/data";

const CHART_MIN = 5_200_000;
const CHART_MAX = 6_200_000;
const GRID_LINES = 11;

export default function TrendSection() {
  const toBottomPct = (v) => ((v - CHART_MIN) / (CHART_MAX - CHART_MIN)) * 100;
  const toXPct = (i) => 8.5 + (i / (trend.length - 1)) * 84;

  const points = trend.map((t, i) => ({
    x: toXPct(i),
    y: 100 - toBottomPct(t.value),
    ...t,
  }));

  const gridValues = Array.from({ length: GRID_LINES }, (_, i) => {
    const v = CHART_MIN + ((CHART_MAX - CHART_MIN) * i) / (GRID_LINES - 1);
    return v;
  }).reverse();

  return (
    <section id="trend" className="snap-section trend-section">
      <div className="section-pad trend-content w-full">
        <SectionHeader title="Trend" subtitle="Total number of cases globally — past 7 days" />

        <div className="trend-chart">
          {gridValues.map((v, i) => (
            <div
              key={i}
              className="trend-grid-line"
              style={{ top: `${(i / (GRID_LINES - 1)) * 100}%` }}
            >
              <span>
                {(v / 1_000_000).toFixed(1)}m
              </span>
            </div>
          ))}

          {points.map((p, i) => (
            <div key={p.day}>
              <motion.div
                className="trend-dot"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              />
              <div
                className="trend-date absolute text-center"
                style={{
                  left: `${p.x}%`,
                  bottom: "-22px",
                  transform: "translateX(-50%)",
                  color: "var(--ink-soft)",
                }}
              >
                {p.day}
                {i === 0 ? " May" : ""}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
