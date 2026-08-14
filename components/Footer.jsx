"use client";

import ShareButtons from "./ShareButtons";

export default function Footer() {
  return (
    <footer
      className="snap-section text-white flex items-center justify-center text-center"
      style={{ background: "#222222", minHeight: "auto", padding: "70px 20px" }}
      id="footer"
    >
      <div>
        <p className="text-xs opacity-70 leading-relaxed">
          A UI replica engineering study, built with Next.js &amp; Framer
          Motion
          <br />
          &copy; {new Date().getFullYear()} &mdash; For evaluation purposes
          only
        </p>
        <div className="mt-6 flex flex-col items-center gap-3">
          <span className="text-[14px] opacity-70 tracking-wide">
            Share this site:
          </span>
          <ShareButtons dark />
        </div>
        <a
          href="#hero"
          className="mt-8 inline-block text-[11px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
        >
          Return to top ↑
        </a>
      </div>
    </footer>
  );
}
