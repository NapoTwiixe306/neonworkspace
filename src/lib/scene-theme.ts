import type { Scene } from "@/src/store/ui-store";

// Couleur néon dominante de chaque scène, exprimée en RGB ("r g b") pour pouvoir
// la composer librement en CSS (rgb(... / alpha), glow du curseur, pattern de
// fond). Source unique de vérité pour le dock, le curseur et le background.
export const sceneColor: Record<Scene, string> = {
  home: "56 189 248", // sky-400
  korli: "74 222 128", // green-400
  gridbase: "248 113 113", // red-400 (rouge racing)
  blueportel: "96 165 250", // blue-400
  about: "232 121 249", // fuchsia-400
  contact: "34 211 238", // cyan-400
};
