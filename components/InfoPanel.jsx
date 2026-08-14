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
            className="fixed top-0 right-0 z-[80] h-screen w-full sm:w-160 overflow-y-auto"
            style={{ background: "var(--panel-dark)", color: "#fff" }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="fixed top-1/2 right-6 sm:right-10 z-90 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-xl leading-none text-white opacity-80 transition-opacity hover:opacity-100"
            >
              &times;
            </button>
            <div className="section-pad py-10">
              <h2 className="mb-6">Information</h2>
              <p className="text-sm leading-relaxed opacity-80">
                The Covid&ndash;19 pandemic affected the whole world &mdash;
                some countries far worse than others. This dashboard is a
                front-end engineering study recreating a well-known 2020 data
                visualization, limited to a snapshot of the worst-affected
                countries at the time. It is not intended to be a
                comprehensive or current report, nor does it offer medical or
                policy opinion.
                <br />
                <br />
                Data shown is a fixed historical snapshot (31 May 2020) used
                purely to demonstrate layout, charting and interaction design
                &mdash; it is not live and should not be relied upon.
              </p>
              <h4 className="mt-10 mb-3 font-heading text-sm tracking-wide uppercase">
                About this build
              </h4>
              <p className="text-sm leading-relaxed opacity-80">
                Built with Next.js, Tailwind CSS and Framer Motion as a
                pixel-conscious UI replica exercise &mdash; every chart below
                is hand-built from plain markup and SVG, no charting library
                included.
              </p>
              <div className="mt-10 pt-6 border-t border-white/10 text-xs opacity-50 leading-relaxed">
                Whilst every attempt is made to keep the interface faithful,
                this is an unofficial, non-commercial recreation for
                evaluation purposes only.
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
