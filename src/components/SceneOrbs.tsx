"use client";

import { motion, useReducedMotion } from "framer-motion";

// Fond vivant pour les scènes centrées (home, about) : deux orbes lumineux qui
// dérivent et un noyau central qui respire, teintés par la couleur de la scène.
// "color" est au format RGB "r g b" (cf. sceneColor). Inactif si l'utilisateur
// a demandé moins d'animations.
export default function SceneOrbs({ color }: { color: string }) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute left-[15%] top-[18%] h-72 w-72 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, rgb(${color} / 0.30) 0%, transparent 70%)`,
          mixBlendMode: "screen",
        }}
        animate={{ x: [0, 60, -20, 0], y: [0, -40, 30, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[12%] bottom-[16%] h-80 w-80 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, rgb(${color} / 0.24) 0%, transparent 70%)`,
          mixBlendMode: "screen",
        }}
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0], scale: [1, 0.85, 1.15, 1] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, rgb(${color} / 0.14) 0%, transparent 65%)`,
          mixBlendMode: "screen",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
