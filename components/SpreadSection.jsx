"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { spread } from "@/lib/data";

const countryOrder = [
  "USA", "BRA", "RUS", "ESP",
  "GBR", "ITA", "DEU", "FRA",
  "CHL", "MEX", "PER", "SAU",
  "CAN", "TUR", "IRN", "IND",
];

const countryLabel = {
  USA: "USA", BRA: "Brazil", RUS: "Russia", ESP: "Spain", GBR: "UK",
  ITA: "Italy", FRA: "France", DEU: "Germany", IND: "India",
  TUR: "Turkey", PER: "Peru", IRN: "Iran", CHL: "Chile", CAN: "Canada",
  MEX: "Mexico", SAU: "Saudi Arabia",
};

export default function SpreadSection() {
  const countries = [...spread].sort(
    (a, b) => countryOrder.indexOf(a.code) - countryOrder.indexOf(b.code)
  );

  return (
    <section id="spread" className="snap-section spread-section text-white">
      <div className="section-pad spread-content w-full">
        <SectionHeader
          title="Virus spread by country"
          subtitle="Confirmed cases in relation to population size"
          dark
        />
        <div className="spread-grid">
          {countries.map((d, i) => {
            const pct = Math.max(d.value * 100, 4);
            return (
              <div key={d.code} className="spread-item">
                <div className="circ-outer">
                  <motion.div
                    className="circ-inner"
                    initial={{ width: 0, height: 0 }}
                    whileInView={{ width: `${pct}%`, height: `${pct}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="spread-country">{countryLabel[d.code] || d.name}</div>
                <div className="spread-value">{d.value.toFixed(2)}%</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
