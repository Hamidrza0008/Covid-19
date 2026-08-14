"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Toggle from "./Toggle";
import BarList from "./BarList";
import { fatalities } from "@/lib/data";

const OPTIONS = [
  { key: "byNumber", label: "By Number" },
  { key: "byRate", label: "By Rate" },
];

const shortCountry = {
  GBR: "UK", ITA: "Ita", BRA: "Brz", FRA: "Fra", ESP: "Spa",
  BEL: "Bel", MEX: "Mex", DEU: "Ger", IRN: "Irn", CAN: "Can",
  NLD: "Nld", IND: "Ind", CHN: "Chn", RUS: "Rus", TUR: "Tur",
};

export default function FatalitiesSection() {
  const [view, setView] = useState("byNumber");

  return (
    <section id="fatalities" className="snap-section fatalities-section">
      <div className="section-pad fatalities-content w-full">
        <SectionHeader
          title="Fatalities"
          subtitle="Number and rate of fatalities in relation to cases"
          toggle={<Toggle options={OPTIONS} active={view} onChange={setView} />}
        />
        {view === "byNumber" ? (
          <BarList
            data={fatalities.byNumber}
            color="var(--accent-pink)"
            className="fatalities-bars"
            labelFormat={(row) => shortCountry[row.code] || row.code}
          />
        ) : (
          <BarList
            data={fatalities.byRate}
            color="var(--accent-pink)"
            className="fatalities-bars"
            labelFormat={(row) => shortCountry[row.code] || row.code}
            format={(v) => `${v}%`}
          />
        )}
      </div>
    </section>
  );
}
