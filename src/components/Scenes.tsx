"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { useUIStore, type Scene } from "@/src/store/ui-store";

const loading = () => null;

const sceneMap: Record<Scene, React.ComponentType> = {
  home: dynamic(() => import("@/src/scenes/HomeScene"), { loading }),
  korli: dynamic(() => import("@/src/scenes/KorliScene"), { loading }),
  invoiceguard: dynamic(() => import("@/src/scenes/InvoiceGuardScene"), {
    loading,
  }),
  blueportel: dynamic(() => import("@/src/scenes/BluePortelScene"), { loading }),
  journal: dynamic(() => import("@/src/scenes/JournalScene"), { loading }),
  about: dynamic(() => import("@/src/scenes/AboutScene"), { loading }),
};

export default function Scenes() {
  const scene = useUIStore((s) => s.scene);
  const Scene = sceneMap[scene];

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={scene}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="h-screen w-full overflow-hidden"
      >
        <Scene />
      </motion.main>
    </AnimatePresence>
  );
}
