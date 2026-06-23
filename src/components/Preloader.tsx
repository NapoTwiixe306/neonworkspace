"use client";

import { AnimatePresence, motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

const modules = [
  "Korli Engine",
  "InvoiceGuard Core",
  "BluePortel",
  "Motion System",
  "Data Layer",
  "Identity System",
];

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setDisplay(Math.round(v));
        setProgress(v);
      },
      onComplete: () => {
        setTimeout(() => setExiting(true), 450);
        setTimeout(onDone, 1250);
      },
    });
    return () => controls.stop();
    // séquence de boot jouée une seule fois au montage
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadedCount = Math.min(
    modules.length,
    Math.floor((progress / 100) * (modules.length + 0.001))
  );

  // Géométrie SVG constante (identique serveur/client -> pas de mismatch
  // d'hydratation). La taille d'affichage est gérée en CSS (viewBox + classes).
  const ringSize = 220;
  const stroke = 2;
  const radius = ringSize / 2 - stroke;
  const circumference = 2 * Math.PI * radius;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
          exit={{ opacity: 0, filter: "blur(24px)" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {/* halo de fond */}
          <motion.div
            className="absolute h-[600px] w-[600px] rounded-full bg-green-500/10 blur-[120px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* grille subtile */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* centre : anneau + compteur + nom */}
          <div className="relative flex flex-col items-center">
            <div className="relative h-[170px] w-[170px] sm:h-[220px] sm:w-[220px]">
              {/* anneau qui tourne lentement */}
              <motion.svg
                viewBox={`0 0 ${ringSize} ${ringSize}`}
                className="absolute inset-0 h-full w-full -rotate-90"
              >
                <circle
                  cx={ringSize / 2}
                  cy={ringSize / 2}
                  r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth={stroke}
                />
                <motion.circle
                  cx={ringSize / 2}
                  cy={ringSize / 2}
                  r={radius}
                  fill="none"
                  stroke="url(#grad)"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={
                    circumference - (progress / 100) * circumference
                  }
                />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* noyau lumineux */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-green-400 to-white blur-2xl"
                animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* compteur */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-4xl font-light tabular-nums tracking-tight text-white">
                  {display}
                  <span className="text-white/40">%</span>
                </span>
              </div>
            </div>

            {/* nom de marque */}
            <motion.div
              className="mt-10 text-sm font-light tracking-[0.5em] text-white/90"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              NEON&nbsp;WORKSPACE
            </motion.div>
          </div>

          {/* modules en bas */}
          <div className="absolute bottom-16 left-1/2 w-64 -translate-x-1/2 space-y-2 font-mono text-[11px]">
            {modules.map((m, i) => {
              const loaded = i < loadedCount;
              return (
                <div
                  key={m}
                  className="flex items-center justify-between transition-colors"
                >
                  <span
                    className={loaded ? "text-white/80" : "text-white/25"}
                  >
                    {m}
                  </span>
                  <AnimatePresence mode="wait">
                    {loaded ? (
                      <motion.span
                        key="ok"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-green-400"
                      >
                        ✔
                      </motion.span>
                    ) : (
                      <span className="text-white/20">···</span>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
