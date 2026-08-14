"use client";

export default function Toggle({ options, active, onChange, dark = false }) {
  return (
    <div className={`toggle-pill${dark ? " on-dark" : ""}`}>
      {options.map((opt) => (
        <button
          key={opt.key}
          type="button"
          className={active === opt.key ? "active" : ""}
          onClick={() => onChange(opt.key)}
          aria-pressed={active === opt.key}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
