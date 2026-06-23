"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useUIStore, type Scene } from "@/src/store/ui-store";
import { sceneColor } from "@/src/lib/scene-theme";

// Un item du dock est soit une scène (change la vue via le store), soit un
// lien (navigue vers une vraie route, ex. le blog).
type DockItem =
  | { id: Scene; label: string; href?: undefined }
  | { id: string; label: string; href: string };

const items: DockItem[] = [
  { id: "home", label: "Home" },
  { id: "korli", label: "Korli" },
  { id: "invoiceguard", label: "InvoiceGuard" },
  { id: "blueportel", label: "BluePortel" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "about", label: "About" },
];

export default function BottomDock() {
  const scene = useUIStore((s) => s.scene);
  const setScene = useUIStore((s) => s.setScene);
  const [open, setOpen] = useState(false);

  const active = items.find((i) => i.id === scene) ?? items[0];

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 z-50 -translate-x-1/2">
      {/* ---- Desktop : dock horizontal ---- */}
      <div className="hidden items-center gap-3 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl sm:flex">
        {items.map((item) => {
          // Item lien (ex. Blog) : navigue vers une vraie route.
          if (item.href !== undefined) {
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="relative block whitespace-nowrap px-3 py-2 text-xs text-white/60 hover:text-white"
                >
                  {item.label}
                </Link>
              </motion.div>
            );
          }

          const isActive = scene === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => setScene(item.id)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="relative whitespace-nowrap px-3 py-2 text-xs text-white/60 hover:text-white"
            >
              {isActive && (
                <motion.div
                  layoutId="dock-active"
                  className="absolute inset-0 rounded-xl border border-white/20 bg-white/10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              <span className="relative z-10">{item.label}</span>

              {isActive && (
                <div
                  className="absolute -inset-3 rounded-full blur-xl"
                  style={{
                    backgroundColor: `rgb(${sceneColor[item.id]} / 0.2)`,
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* ---- Mobile : bouton + menu déroulant ---- */}
      <div className="relative sm:hidden">
        {/* overlay pour fermer en cliquant à côté */}
        <AnimatePresence>
          {open && (
            <motion.button
              aria-label="Fermer le menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 -z-10 cursor-default"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              className="absolute bottom-full left-1/2 mb-3 w-48 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-1.5 backdrop-blur-xl"
            >
              {items.map((item) => {
                // Item lien (ex. Blog) : navigue vers une vraie route.
                if (item.href !== undefined) {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isActive = scene === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setScene(item.id);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: `rgb(${sceneColor[item.id]})` }}
                      />
                    )}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/60 px-5 py-3 text-sm text-white backdrop-blur-xl"
        >
          <span className="font-medium">{active.label}</span>
          <motion.svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-white/60"
          >
            <path d="m6 9 6 6 6-6" />
          </motion.svg>
        </motion.button>
      </div>
    </div>
  );
}
