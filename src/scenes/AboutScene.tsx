"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SceneOrbs from "@/src/components/SceneOrbs";
import { container, item, titleContainer, letter } from "@/src/lib/scene-motion";
import { sceneColor } from "@/src/lib/scene-theme";
import { useUIStore } from "@/src/store/ui-store";

const TITLE = "À propos";

// Chiffres factuels tirés du parcours : c'est ce qu'un recruteur ou un jury
// retient en premier.
const stats = [
  { value: "10 ans", label: "de code en autodidacte, du Java au TypeScript" },
  { value: "2", label: "produits en ligne aujourd'hui (Korli, BluePortel)" },
  { value: "100 %", label: "conçu, designé et codé maison" },
];

export default function AboutScene() {
  const color = sceneColor.about;
  const reduce = useReducedMotion();
  const setScene = useUIStore((s) => s.setScene);

  return (
    <section className="relative flex h-full w-full justify-center overflow-y-auto px-6">
      <SceneOrbs color={color} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 my-auto flex max-w-2xl flex-col items-center py-12 text-center"
      >
        {/* Titre animé lettre par lettre, avec un halo qui respire derrière. */}
        <div className="relative" style={{ perspective: 600 }}>
          {!reduce && (
            <motion.span
              aria-hidden
              className="font-display absolute inset-0 select-none text-3xl font-semibold tracking-tight blur-2xl sm:text-5xl md:text-6xl"
              style={{ color: `rgb(${color})` }}
              animate={{ opacity: [0.3, 0.65, 0.3], scale: [1, 1.06, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {TITLE}
            </motion.span>
          )}
          <motion.h1
            variants={titleContainer}
            aria-label={TITLE}
            className="relative flex justify-center text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            {TITLE.split("").map((char, i) => (
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

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/65 sm:text-base">
          <motion.p variants={item}>
            J&apos;ai écrit mes premières lignes de code à 14 ans, en
            autodidacte. Dix ans plus tard (j&apos;en ai 24), le fil ne
            s&apos;est jamais coupé : du Java au C, un détour par Python,
            puis le développement web, où j&apos;ai trouvé mon terrain de
            jeu : Next.js, React et TypeScript.
          </motion.p>
          <motion.p variants={item}>
            Plutôt que d&apos;empiler les tutoriels, j&apos;apprends en
            livrant : un SaaS conçu et lancé en solo (Korli), un site de
            réservation en production pour un client (BluePortel), et en ce
            moment GridBase, une plateforme de données motorsport (F1, WEC,
            IMSA) dont l&apos;API open source est déjà publique sur GitHub.
            Base de données, paiements Stripe, SEO, mise en ligne : chaque
            brique est faite maison.
          </motion.p>
          <motion.p variants={item}>
            Ce qui me tient à cœur : des interfaces rapides, accessibles et
            soignées jusque dans le détail.
          </motion.p>
        </div>

        {/* Chiffres clés : élément signature de la scène. */}
        <motion.div
          variants={item}
          className="mt-8 grid w-full gap-3 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5"
            >
              <p
                className="font-display text-3xl font-semibold"
                style={{ color: `rgb(${color})` }}
              >
                {s.value}
              </p>
              <p className="mt-1.5 text-xs leading-snug text-white/55">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.button
            onClick={() => setScene("korli")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
          >
            Voir les projets →
          </motion.button>
          <motion.button
            onClick={() => setScene("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl border border-white/10 px-5 py-2.5 text-sm text-white/70 transition-colors hover:text-white"
          >
            Me contacter
          </motion.button>
        </motion.div>

        <motion.p variants={item} className="mt-5 text-xs text-white/40">
          Également disponible pour des missions freelance —{" "}
          <Link
            href="/developpeur-web-liege"
            className="underline decoration-white/30 underline-offset-2 transition-colors hover:text-white"
          >
            mes services à Liège
          </Link>
        </motion.p>
      </motion.div>
    </section>
  );
}
