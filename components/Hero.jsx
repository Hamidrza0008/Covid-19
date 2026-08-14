"use client";

import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import CountUp from "./CountUp";
import Nav from "./Nav";
import { hero, lastUpdated } from "@/lib/data";

const easing = [0.22, 1, 0.36, 1];

export default function Hero({ onInfoClick }) {
  return (
    <section
      id="hero"
      className="snap-section hero-section text-white overflow-hidden"
      style={{ background: "#050505" }}
    >
      <ParticleField />
      <Nav onInfoClick={onInfoClick} />

      <div className="hero-main z-10 section-pad flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.1, ease: easing }}
          className="hero-title"
        >
          <h1>
            Covid&ndash;19
            <br />
            <span className="txt-light">Global Data Dashboard</span>
          </h1>
          <div className="mt-5 inline-block text-xs opacity-50 font-medium tracking-wide">
            Last updated: {lastUpdated} &bull; 23:59 GMT
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1.2, ease: easing }}
        className="hero-stats z-10 section-pad"
      >
        <div className="hero-stat-grid">
          <StatBlock label="Cases" value={hero.cases} change={hero.casesChange} />
          <StatBlock label="Fatalities" value={hero.deaths} change={hero.deathsChange} />
          <StatBlock label="Active Cases" value={hero.active} />
        </div>
      </motion.div>
    </section>
  );
}

function StatBlock({ label, value, change }) {
  return (
    <div className="hero-stat text-center flex-1 min-w-[30%]">
      <div className="hero-stat-number">
        <CountUp value={value} />
      </div>
      <div className="hero-stat-label">
        {label}
      </div>
      {change ? (
        <div
          className="hero-stat-change"
          style={{ background: "var(--accent-pink)" }}
        >
          +{change.toLocaleString("en-US")}
        </div>
      ) : null}
    </div>
  );
}
