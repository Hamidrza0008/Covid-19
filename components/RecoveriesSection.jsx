"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import CountUp from "./CountUp";
import { recoveries } from "@/lib/data";

const MAX_D = 300;

export default function RecoveriesSection() {
  const fatalitiesD = (recoveries.fatalities / recoveries.recovered) * MAX_D;

  return (
    <section id="recoveries" className="snap-section recoveries-section text-white">
      <div className="section-pad recoveries-content w-full">
        <SectionHeader
          title="Recoveries"
          subtitle="Global recoveries compared to global fatalities"
          dark
        />
        <div className="recovery-visual">
          <div className="recovery-stat recovery-stat-fatalities">
              <div className="recovery-number">
                <CountUp value={recoveries.fatalities} />
              </div>
              <div className="recovery-label">Fatalities</div>
          </div>

          <motion.div
            className="recovery-bubble recovery-bubble-small"
            style={{ width: fatalitiesD, height: fatalitiesD }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="recovery-bubble recovery-bubble-large"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="recovery-stat recovery-stat-recovered">
              <div className="recovery-number">
                <CountUp value={recoveries.recovered} />
              </div>
              <div className="recovery-label">Recoveries</div>
          </div>
        </div>
      </div>
    </section>
  );
}
