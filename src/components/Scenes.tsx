"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { useUIStore, type Scene } from "@/src/store/ui-store";

const loading = () => null;

const sceneMap: Record<Scene, React.ComponentType> = {
  home: dynamic(() => import("@/src/scenes/HomeScene"), { loading }),
  korli: dynamic(() => import("@/src/scenes/KorliScene"), { loading }),
  gridbase: dynamic(() => import("@/src/scenes/GridBaseScene"), { loading }),
  blueportel: dynamic(() => import("@/src/scenes/BluePortelScene"), { loading }),
  about: dynamic(() => import("@/src/scenes/AboutScene"), { loading }),
  contact: dynamic(() => import("@/src/scenes/ContactScene"), { loading }),
};

// Ordre de parcours des scènes (flèches clavier, hash).
const ORDER = [
  "home",
  "korli",
  "gridbase",
  "blueportel",
  "about",
  "contact",
] as const satisfies readonly Scene[];

function isScene(value: string): value is Scene {
  return (ORDER as readonly string[]).includes(value);
}

export default function Scenes() {
  const scene = useUIStore((s) => s.scene);
  const setScene = useUIStore((s) => s.setScene);

  // Liens partageables (/#korli) : le hash choisit la scène au chargement et
  // à chaque hashchange.
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1);
      if (isScene(h)) setScene(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [setScene]);

  // Reflète la scène active dans l'URL. replaceState : pas de spam de
  // l'historique, et pas d'événement hashchange déclenché en retour.
  useEffect(() => {
    const hash = scene === "home" ? "" : `#${scene}`;
    if (window.location.hash !== hash) {
      history.replaceState(null, "", hash || window.location.pathname);
    }
  }, [scene]);

  // Navigation clavier ← / → entre les scènes (inactive dans les champs de
  // formulaire, ex. le formulaire de contact).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) {
        return;
      }
      const index = ORDER.indexOf(useUIStore.getState().scene);
      const delta = e.key === "ArrowRight" ? 1 : -1;
      setScene(ORDER[(index + delta + ORDER.length) % ORDER.length]);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setScene]);

  const SceneComponent = sceneMap[scene];

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={scene}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="h-dvh w-full overflow-hidden"
      >
        <SceneComponent />
      </motion.main>
    </AnimatePresence>
  );
}
