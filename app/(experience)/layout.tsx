import { cookies } from "next/headers";
import BootGate from "@/src/components/BootGate";
import { BOOT_COOKIE } from "@/src/lib/boot";

// Layout de l'expérience immersive à scènes. Le BootGate (preloader + dock) et
// le verrouillage du scroll (via data-experience, voir globals.css) vivent ICI,
// pas dans le root layout, pour ne pas contaminer le blog et les pages SEO.
export default async function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const booted = (await cookies()).get(BOOT_COOKIE)?.value === "1";

  return (
    <div data-experience>
      <BootGate initialBooted={booted}>{children}</BootGate>
    </div>
  );
}
