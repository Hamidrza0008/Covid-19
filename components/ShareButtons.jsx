"use client";

const NETWORKS = [
  {
    key: "linkedin",
    label: "LinkedIn",
    build: (url) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`,
  },
  {
    key: "facebook",
    label: "Facebook",
    build: (url) => `https://www.facebook.com/share.php?u=${encodeURIComponent(url)}`,
  },
  {
    key: "twitter",
    label: "Twitter",
    build: (url) =>
      `https://twitter.com/share?text=${encodeURIComponent(
        "Covid-19 Data Dashboard — a UI replica study"
      )}&url=${encodeURIComponent(url)}`,
  },
];

export default function ShareButtons({ dark = false, className = "" }) {
  const openShare = (build) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    window.open(build(url), "", "width=600,height=600");
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {NETWORKS.map((n) => (
        <button
          key={n.key}
          type="button"
          onClick={() => openShare(n.build)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/55 transition-all hover:border-white hover:opacity-100 hover:-translate-y-0.5"
          style={{ color: dark ? "#fff" : "var(--ink)", opacity: 0.75 }}
          aria-label={`Share on ${n.label}`}
          title={n.label}
        >
          <SocialIcon network={n.key} />
        </button>
      ))}
    </div>
  );
}

function SocialIcon({ network }) {
  if (network === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" aria-hidden="true" fill="currentColor">
        <path d="M5.1 8.4h3.2v10.3H5.1V8.4Zm1.6-5.1a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8Zm3.6 5.1h3.1v1.4h.1c.4-.8 1.5-1.8 3.1-1.8 3.3 0 3.9 2.2 3.9 5v5.7h-3.2v-5c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.7v5h-3.2V8.4Z" />
      </svg>
    );
  }

  if (network === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true" fill="currentColor">
        <path d="M13.7 21v-8h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.7-1.6h1.8V3.3c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7.3V13h2.9v8h3.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" aria-hidden="true" fill="currentColor">
      <path d="M21.4 6.1c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.8-2.6 1a4 4 0 0 0-6.9 3.7 11.4 11.4 0 0 1-8.3-4.2 4 4 0 0 0 1.2 5.4c-.7 0-1.3-.2-1.8-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.7 2 2.9 3.8 2.9a8.1 8.1 0 0 1-5 1.7c-.3 0-.6 0-1-.1a11.4 11.4 0 0 0 17.6-9.7v-.5c.8-.6 1.5-1.3 2.1-2.1Z" />
    </svg>
  );
}
