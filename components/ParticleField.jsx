"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

// deterministic PRNG so server + client render identical markup
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PALETTE = [
  "rgba(139, 92, 246, VAR)", // violet
  "rgba(219, 57, 149, VAR)", // pink/magenta
  "rgba(76, 110, 219, VAR)", // blue
  "rgba(168, 85, 247, VAR)", // purple
  "rgba(236, 72, 153, VAR)", // rose
];

function buildBubbles() {
  const rand = mulberry32(7);
  return Array.from({ length: 16 }, (_, i) => {
    const size = 90 + rand() * 260;
    const color = PALETTE[i % PALETTE.length];
    return {
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size,
      color: color.replace("VAR", (0.28 + rand() * 0.22).toFixed(2)),
      blur: 30 + rand() * 40,
      driftX: (rand() - 0.5) * 60,
      driftY: (rand() - 0.5) * 60,
      dur: 14 + rand() * 16,
      delay: rand() * 6,
    };
  });
}

function buildSparks() {
  const rand = mulberry32(23);
  return Array.from({ length: 22 }, (_, i) => ({
    id: i,
    x: rand() * 100,
    y: rand() * 100,
    dur: 5 + rand() * 6,
    delay: rand() * 5,
  }));
}

export default function ParticleField() {
  const bubbles = useMemo(() => buildBubbles(), []);
  const sparks = useMemo(() => buildSparks(), []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="aurora-bg" />

      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: b.size,
            height: b.size,
            marginLeft: -b.size / 2,
            marginTop: -b.size / 2,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 72%)`,
            filter: `blur(${b.blur}px)`,
          }}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, b.driftX, 0],
            y: [0, b.driftY, 0],
          }}
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        {sparks.map((s) => (
          <motion.circle
            key={s.id}
            cx={s.x}
            r={0.35}
            fill="#ffffff"
            initial={{ cy: s.y, opacity: 0.15 }}
            animate={{
              cy: [s.y, s.y - 1.6, s.y],
              opacity: [0.15, 0.75, 0.15],
            }}
            transition={{
              duration: s.dur,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,6,20,0.1) 0%, rgba(10,6,20,0.25) 45%, rgba(8,5,16,0.8) 100%)",
        }}
      />
    </div>
  );
}
