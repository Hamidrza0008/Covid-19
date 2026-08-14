"use client";

import { useEffect, useState } from "react";

export default function DotNav({ sections, containerRef }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: null, threshold: 0, rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections, containerRef]);

  const activeSection = sections.find((s) => s.id === active);

  return (
    <nav className="dot-nav" aria-label="Section navigation">
      {sections.map((s) => (
        <button
          key={s.id}
          type="button"
          aria-label={s.label}
          aria-current={active === s.id}
          className={`${activeSection?.theme === "dark" ? "on-dark" : "on-light"} ${
            active === s.id ? "active" : ""
          }`}
          onClick={() =>
            document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })
          }
        />
      ))}
    </nav>
  );
}
