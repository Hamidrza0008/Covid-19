"use client";

import { useRef, useState } from "react";
import Loader from "@/components/Loader";
import InfoPanel from "@/components/InfoPanel";
import DotNav from "@/components/DotNav";
import Hero from "@/components/Hero";
import CasesSection from "@/components/CasesSection";
import GrowthSection from "@/components/GrowthSection";
import SpreadSection from "@/components/SpreadSection";
import FatalitiesSection from "@/components/FatalitiesSection";
import RecoveriesSection from "@/components/RecoveriesSection";
import TrendSection from "@/components/TrendSection";
import Footer from "@/components/Footer";

const SECTIONS = [
  { id: "hero", label: "Home", theme: "dark" },
  { id: "cases", label: "Cases by country", theme: "light" },
  { id: "growth", label: "Recent growth", theme: "light" },
  { id: "spread", label: "Spread by population", theme: "dark" },
  { id: "fatalities", label: "Fatalities", theme: "light" },
  { id: "recoveries", label: "Recoveries", theme: "dark" },
  { id: "trend", label: "Trend", theme: "light" },
];

export default function Home() {
  const [infoOpen, setInfoOpen] = useState(false);
  const scrollRef = useRef(null);

  return (
    <>
      <Loader />
      <InfoPanel open={infoOpen} onClose={() => setInfoOpen(false)} />
      <DotNav sections={SECTIONS} containerRef={scrollRef} />

      <div ref={scrollRef} className="scroll-frame no-scrollbar">
        <Hero onInfoClick={() => setInfoOpen(true)} />
        <CasesSection />
        <GrowthSection />
        <SpreadSection />
        <FatalitiesSection />
        <RecoveriesSection />
        <TrendSection />
        <Footer />
      </div>
    </>
  );
}
