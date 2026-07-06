import BootGate from "@/src/components/BootGate";

// Layout de l'expérience immersive à scènes. Le BootGate (preloader + dock) et
// le verrouillage du scroll (via data-experience, voir globals.css) vivent ICI,
// pas dans le root layout, pour ne pas contaminer le blog et les pages SEO.
// Aucune lecture de cookie côté serveur : la route reste 100 % statique, le
// cookie de boot est géré côté client dans BootGate.
export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-experience>
      <BootGate>{children}</BootGate>
    </div>
  );
}
