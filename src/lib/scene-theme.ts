import type { Scene } from "@/src/store/ui-store";

// Couleur néon dominante de chaque scène, exprimée en RGB ("r g b") pour pouvoir
// la composer librement en CSS (rgb(... / alpha), glow du curseur, pattern de
// fond). Source unique de vérité pour le dock, le curseur et le background.
export const sceneColor: Record<Scene, string> = {
  home: "56 189 248", // sky-400
  korli: "74 222 128", // green-400
  invoiceguard: "255 255 255", // white
  blueportel: "96 165 250", // blue-400
  journal: "251 191 36", // amber-400
  about: "232 121 249", // fuchsia-400
};
