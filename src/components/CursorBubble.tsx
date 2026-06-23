"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useUIStore } from "@/src/store/ui-store";
import { sceneColor } from "@/src/lib/scene-theme";

// Halo néon qui suit le curseur avec un léger retard élastique. Sa couleur
// dépend de la scène active (cf. sceneColor). Désactivé sur les pointeurs
// grossiers (mobile/tactile) et en prefers-reduced-motion.
export default function CursorBubble() {
  const scene = useUIStore((s) => s.scene);
  const color = sceneColor[scene];

  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Ressort souple → la bulle "traîne" derrière le curseur.
  const springX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });

  useEffect(() => {
    const fineMq = window.matchMedia("(pointer: fine)");
    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    // S'abonne aux capacités du pointeur (système externe) et reflète l'état.
    const sync = () => setEnabled(fineMq.matches && !reducedMq.matches);
    sync();
    fineMq.addEventListener("change", sync);
    reducedMq.addEventListener("change", sync);

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      fineMq.removeEventListener("change", sync);
      reducedMq.removeEventListener("change", sync);
      window.removeEventListener("pointermove", onMove);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60]"
      style={{ x: springX, y: springY }}
    >
      {/* Halo néon : nuage de lumière diffuse coloré (mode "screen" pour briller
          sur le fond noir), teinté par la scène */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{ height: 180, width: 180, mixBlendMode: "screen" }}
        transition={{ duration: 0.4 }}
        animate={{
          background: `radial-gradient(circle, rgb(${color} / 0.55) 0%, rgb(${color} / 0.30) 40%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}
