"use client";

import { motion, useReducedMotion } from "framer-motion";
import SceneOrbs from "@/src/components/SceneOrbs";
import ContactForm from "@/src/components/ContactForm";
import { container, item, titleContainer, letter } from "@/src/lib/scene-motion";
import { sceneColor } from "@/src/lib/scene-theme";

const TITLE = "Contact";

export default function ContactScene() {
  const color = sceneColor.contact;
  const reduce = useReducedMotion();

  return (
    <section className="relative flex h-full w-full justify-center overflow-y-auto px-6">
      <SceneOrbs color={color} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 my-auto flex w-full max-w-lg flex-col items-center py-12 text-center"
      >
        {/* Titre animé lettre par lettre, avec un halo qui respire derrière. */}
        <div className="relative" style={{ perspective: 600 }}>
          {!reduce && (
            <motion.span
              aria-hidden
              className="font-display absolute inset-0 select-none text-3xl font-semibold tracking-tight blur-2xl sm:text-5xl"
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
            className="relative block text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            {TITLE.split("").map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                variants={letter}
                className="inline-block"
                style={{ transformOrigin: "bottom" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.p
          variants={item}
          className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base"
        >
          Un site, une refonte ou une application web ? Décrivez votre besoin
          en quelques lignes, je vous réponds rapidement.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 w-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left"
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
