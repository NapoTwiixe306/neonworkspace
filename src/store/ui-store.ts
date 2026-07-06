import { create } from "zustand";

export type Scene =
  | "home"
  | "korli"
  | "gridbase"
  | "blueportel"
  | "about"
  | "contact";

interface UIState {
  scene: Scene;
  setScene: (scene: Scene) => void;
}

export const useUIStore = create<UIState>((set) => ({
  scene: "home",
  setScene: (scene) => set({ scene }),
}));
