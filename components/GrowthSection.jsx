"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Toggle from "./Toggle";
import VerticalBarChart from "./VerticalBarChart";
import { growth } from "@/lib/data";

const OPTIONS = [
  { key: "byNumber", label: "By Number" },
  { key: "byPercent", label: "By Percent" },
];

export default function GrowthSection() {
  const [view, setView] = useState("byNumber");

  return (
    <section id="growth" className="snap-section growth-section">
      <div className="section-pad growth-content w-full">
        <SectionHeader
          title="Recent virus growth by country"
          subtitle="Increase in cases over past 24 hours — top 8 countries"
          toggle={<Toggle options={OPTIONS} active={view} onChange={setView} />}
        />
        <VerticalBarChart
          data={growth[view]}
          suffix={view === "byPercent" ? "%" : ""}
        />
      </div>
    </section>
  );
}
