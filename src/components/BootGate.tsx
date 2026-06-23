"use client";

import { useState } from "react";
import PreloaderV2 from "@/src/components/Preloader";
import BottomDock from "@/src/components/BottomBar";
import BackgroundPattern from "@/src/components/BackgroundPattern";
import CursorBubble from "@/src/components/CursorBubble";
import { BOOT_COOKIE } from "@/src/lib/boot";

export default function BootGate({
  initialBooted,
  children,
}: {
  initialBooted: boolean;
  children: React.ReactNode;
}) {
  const [booted, setBooted] = useState(initialBooted);

  const handleDone = () => {
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${BOOT_COOKIE}=1; path=/; max-age=${oneYear}; SameSite=Lax`;
    setBooted(true);
  };

  if (!booted) {
    return <PreloaderV2 onDone={handleDone} />;
  }

  return (
    <>
      <BackgroundPattern />
      {children}
      <CursorBubble />
      <BottomDock />
    </>
  );
}
