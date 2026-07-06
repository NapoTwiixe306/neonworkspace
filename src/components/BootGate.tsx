"use client";

import { useState, useSyncExternalStore } from "react";
import PreloaderV2 from "@/src/components/Preloader";
import BottomDock from "@/src/components/BottomBar";
import BackgroundPattern from "@/src/components/BackgroundPattern";
import CursorBubble from "@/src/components/CursorBubble";
import { BOOT_COOKIE } from "@/src/lib/boot";

// Lecture du cookie de boot via useSyncExternalStore : le serveur répond
// toujours "pas booté" (snapshot serveur), le client lit le vrai cookie dès
// l'hydratation, sans mismatch ni setState dans un effet.
const emptySubscribe = () => () => {};
const useCookieBooted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => document.cookie.includes(`${BOOT_COOKIE}=1`),
    () => false,
  );

// Le contenu des scènes est TOUJOURS rendu (SSR + hydratation) : les crawlers
// voient le vrai contenu de la page, et la route reste statique (aucune
// lecture de cookie côté serveur). Le preloader est un simple overlay opaque
// posé par-dessus, retiré dès l'hydratation si le cookie de boot existe déjà.
export default function BootGate({ children }: { children: React.ReactNode }) {
  const cookieBooted = useCookieBooted();
  const [justBooted, setJustBooted] = useState(false);
  const booted = cookieBooted || justBooted;

  const handleDone = () => {
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${BOOT_COOKIE}=1; path=/; max-age=${oneYear}; SameSite=Lax`;
    setJustBooted(true);
  };

  return (
    <>
      <BackgroundPattern />
      {children}
      <CursorBubble />
      <BottomDock />
      {!booted && <PreloaderV2 onDone={handleDone} />}
    </>
  );
}
