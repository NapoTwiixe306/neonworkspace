"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { sceneColor } from "@/src/lib/scene-theme";
import { container, item, titleContainer, letter } from "@/src/lib/scene-motion";
import type { Scene } from "@/src/store/ui-store";

export interface ProjectSceneProps {
  // Scène associée : sert à récupérer la couleur néon dominante.
  scene: Scene;
  // Étiquette courte au-dessus du titre (ex. « Projet personnel », « Client »).
  kicker: string;
  name: string;
  // Une phrase d'accroche qui résume le projet.
  tagline: string;
  // Un ou deux paragraphes qui racontent le projet.
  description: string[];
  // Technos / mots-clés affichés en pastilles.
  tech: string[];
  // Capture du site, affichée dans la fenêtre navigateur (chemin public).
  screenshot: string;
  // Lien externe optionnel (site en ligne, démo, dépôt).
  link?: { label: string; href: string };
}

// La fenêtre navigateur entre depuis la droite avec une légère rotation 3D.
const mockup: Variants = {
  hidden: { opacity: 0, x: 60, rotateY: 18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 20, delay: 0.3 },
  },
};

export default function ProjectScene({
  scene,
  kicker,
  name,
  tagline,
  description,
  tech,
  screenshot,
  link,
}: ProjectSceneProps) {
  const color = sceneColor[scene];
  const reduce = useReducedMotion();
  const domain = link ? link.href.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden px-6 py-16">
      {/* Orbes lumineux qui dérivent doucement en fond (teinte de la scène). */}
      {!reduce && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-[10%] top-[18%] h-72 w-72 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgb(${color} / 0.35) 0%, transparent 70%)`,
              mixBlendMode: "screen",
            }}
            animate={{ x: [0, 60, -20, 0], y: [0, -40, 30, 0], scale: [1, 1.2, 0.9, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[8%] bottom-[16%] h-80 w-80 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgb(${color} / 0.28) 0%, transparent 70%)`,
              mixBlendMode: "screen",
            }}
            animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0], scale: [1, 0.85, 1.15, 1] }}
            transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-14"
      >
        {/* ---- Colonne texte ---- */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.p
            variants={item}
            className="text-xs font-medium uppercase tracking-[0.25em]"
            style={{ color: `rgb(${color})` }}
          >
            {kicker}
          </motion.p>

          {/* Titre animé lettre par lettre, avec un halo qui respire derrière. */}
          <div className="relative mt-3" style={{ perspective: 600 }}>
            {!reduce && (
              <motion.span
                aria-hidden
                className="absolute inset-0 select-none text-4xl font-semibold tracking-tight blur-2xl sm:text-5xl md:text-6xl"
                style={{ color: `rgb(${color})` }}
                animate={{ opacity: [0.35, 0.75, 0.35], scale: [1, 1.06, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {name}
              </motion.span>
            )}
            <motion.h1
              variants={titleContainer}
              aria-label={name}
              className="relative flex justify-center text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:justify-start"
            >
              {name.split("").map((char, i) => (
                <motion.span
                  key={`${char}-${i}`}
                  variants={letter}
                  className="inline-block"
                  style={{ transformOrigin: "bottom" }}
                >
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.p variants={item} className="mt-4 text-base text-white/80 sm:text-lg">
            {tagline}
          </motion.p>

          <div className="mt-4 max-w-md space-y-3 text-sm leading-relaxed text-white/60">
            {description.map((paragraph) => (
              <motion.p key={paragraph} variants={item}>
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
          >
            {tech.map((t, i) => (
              <motion.span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60"
                animate={reduce ? undefined : { y: [0, -4, 0] }}
                transition={
                  reduce
                    ? undefined
                    : { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }
                }
                whileHover={{ scale: 1.1, color: `rgb(${color})`, borderColor: `rgb(${color} / 0.5)` }}
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          {link && (
            <motion.a
              variants={item}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative mt-7 inline-block overflow-hidden rounded-xl border px-6 py-2.5 text-sm font-medium text-white"
              style={{ borderColor: `rgb(${color} / 0.4)` }}
            >
              {!reduce && (
                <motion.span
                  aria-hidden
                  className="absolute inset-0 -z-10"
                  style={{
                    background: `radial-gradient(circle at center, rgb(${color} / 0.35) 0%, transparent 70%)`,
                  }}
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              {link.label}
            </motion.a>
          )}
        </div>

        {/* ---- Fenêtre navigateur avec la capture du site ---- */}
        <motion.div variants={mockup} style={{ perspective: 1000 }}>
          <motion.a
            href={link?.href}
            target="_blank"
            rel="noopener noreferrer"
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: -3 }}
            className="group relative block overflow-hidden rounded-xl border bg-black shadow-2xl"
            style={{ borderColor: `rgb(${color} / 0.35)`, transformStyle: "preserve-3d" }}
          >
            {/* Halo coloré derrière la fenêtre */}
            {!reduce && (
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl blur-2xl"
                style={{ background: `radial-gradient(circle, rgb(${color} / 0.35) 0%, transparent 70%)` }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            )}

            {/* Barre du navigateur */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <div className="ml-2 flex-1 truncate rounded-md bg-white/[0.06] px-3 py-1 text-left text-[11px] text-white/45">
                {domain}
              </div>
            </div>

            {/* Capture du site */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={screenshot}
                alt={`Aperçu du site ${name}`}
                fill
                sizes="(min-width: 1024px) 32rem, 90vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
