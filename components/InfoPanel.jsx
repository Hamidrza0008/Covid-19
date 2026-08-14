"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function InfoPanel({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close information panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70]"
            style={{ background: "rgba(0,0,0,0.5)" }}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 z-[80] h-dvh w-full sm:w-160 overflow-hidden"
            style={{ background: "var(--panel-dark)", color: "#fff" }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="fixed top-1/2 right-6 sm:right-10 z-90 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-xl leading-none text-white opacity-80 transition-opacity hover:opacity-100"
            >
              &times;
            </button>
            <div className="info-panel-content">
              <header className="info-panel-header">
                <span>Covid&ndash;19 Dashboard</span>
                <h2>Information</h2>
              </header>

              <div className="info-panel-copy">
                <p>
                  The Covid&ndash;19 pandemic affected the whole world &mdash;
                  some countries far worse than others. This dashboard is a
                  front-end engineering study recreating a well-known 2020
                  data visualization.
                </p>
                <p>
                  The information is limited to a historical snapshot of the
                  worst-affected countries at that time. It is designed to be
                  informative, user-friendly and easy to understand.
                </p>
                <p>
                  Data shown is a fixed historical snapshot (31 May 2020),
                  used purely to demonstrate layout, charting and interaction
                  design. It is not live and should not be relied upon.
                </p>
              </div>

              <section className="info-panel-section">
                <h3>About this build</h3>
                <p>
                  Built with Next.js, Tailwind CSS and Framer Motion as a
                  pixel-conscious UI replica exercise. Every chart is
                  hand-built from plain markup and SVG without a charting
                  library.
                </p>
              </section>

              <aside className="info-panel-note">
                <strong>Please note</strong>
                <p>
                  This is an unofficial, non-commercial recreation for
                  evaluation purposes only. It does not provide medical advice.
                </p>
              </aside>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
