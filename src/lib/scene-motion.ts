import type { Variants } from "framer-motion";

// Vocabulaire d'animation partagé par toutes les scènes (home, about, projets)
// pour garder une cohérence : cascade d'apparition, montée + dé-floutage, et
// révélation du titre lettre par lettre.

// Cascade : chaque enfant entre l'un après l'autre.
export const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

// Un élément qui monte et se dé-floute en arrivant.
export const item: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 220, damping: 24 },
  },
};

// Conteneur du titre : décale l'arrivée de chaque lettre.
export const titleContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.25 } },
};

// Une lettre qui bascule en 3D et rebondit à l'arrivée.
export const letter: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};
