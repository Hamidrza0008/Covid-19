"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Toggle from "./Toggle";
import BarList from "./BarList";
import { casesByCountry } from "@/lib/data";

const OPTIONS = [
  { key: "total", label: "Total Cases" },
  { key: "active", label: "Active Cases" },
];

const shortCountry = {
  BRA: "Brz", RUS: "Rus", ESP: "Spa", GBR: "UK", ITA: "Ita",
  FRA: "Fra", DEU: "Ger", IND: "Ind", TUR: "Tur", PER: "Per",
  IRN: "Irn", CHL: "Chi", CAN: "Can", MEX: "Mex", SAU: "KSA",
  PAK: "Pak",
};

export default function CasesSection() {
  const [view, setView] = useState("total");

  return (
    <section id="cases" className="snap-section cases-section">
      <div className="section-pad cases-content w-full">
        <SectionHeader
          title="Virus cases by country"
          subtitle="Confirmed cases"
          toggle={<Toggle options={OPTIONS} active={view} onChange={setView} />}
        />
        <BarList
          data={casesByCountry[view]}
          color="var(--accent-grad)"
          className="cases-bars"
          labelFormat={(row) => shortCountry[row.code] || row.code}
        />
      </div>
    </section>
  );
}
