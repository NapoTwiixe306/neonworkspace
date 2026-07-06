"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SceneOrbs from "@/src/components/SceneOrbs";
import { container, item, titleContainer, letter } from "@/src/lib/scene-motion";
import { sceneColor } from "@/src/lib/scene-theme";
import { useUIStore } from "@/src/store/ui-store";

const NAME = "Julien Milants";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/NapoTwiixe306",
    icon: (
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/JulienMl3",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.65l-5.21-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.818l4.71 6.231zm-1.16 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/julien.mlnts",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.3" />
      </>
    ),
  },
];

export default function HomeScene() {
  const color = sceneColor.home;
  const reduce = useReducedMotion();
  const setScene = useUIStore((s) => s.setScene);

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
      <SceneOrbs color={color} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center gap-7"
      >
        {/* Portrait : flottement vertical infini, avec un halo qui respire. */}
        <motion.div variants={item} className="animate-float relative">
          {!reduce && (
            <motion.div
              aria-hidden
              className="absolute -inset-4 rounded-full blur-2xl"
              style={{ background: `radial-gradient(circle, rgb(${color} / 0.4) 0%, transparent 70%)` }}
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/10 bg-white/5 sm:h-48 sm:w-48">
            <Image
              src="/julien.png"
              alt="Julien Milants, développeur web et front-end à Liège"
              fill
              priority
              sizes="(min-width: 640px) 12rem, 10rem"
              className="object-cover object-top"
            />
          </div>
        </motion.div>

        <div className="max-w-2xl space-y-3">
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
                {NAME}
              </motion.span>
            )}
            <motion.h1
              variants={titleContainer}
              aria-label={NAME}
              className="relative flex justify-center text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
            >
              {NAME.split("").map((char, i) => (
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

          <motion.p variants={item} className="text-base text-sky-300/90 sm:text-lg">
            Développeur web &amp; front-end · Liège, Belgique
          </motion.p>
          <motion.p
            variants={item}
            className="text-sm leading-relaxed text-white/60 sm:text-base"
          >
            Autodidacte depuis mes 14 ans, je conçois et développe des
            produits web de A à Z : un SaaS lancé en solo, un site client en
            production et une API open source de données motorsport.
            Performance, accessibilité et référencement font partie du cahier
            des charges dès la première ligne de code.
          </motion.p>
        </div>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <motion.button
            onClick={() => setScene("korli")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
          >
            Découvrir mes projets →
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

        {/* Réseaux sociaux */}
        <motion.div variants={item} className="flex items-center gap-4">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={s.label}
              whileHover={{ scale: 1.2, color: `rgb(${color})` }}
              whileTap={{ scale: 0.9 }}
              className="text-white/55 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                {s.icon}
              </svg>
            </motion.a>
          ))}
        </motion.div>

        {/* Indice de navigation (desktop uniquement : les flèches clavier). */}
        <motion.p
          variants={item}
          className="hidden text-xs text-white/30 sm:block"
        >
          Utilisez les flèches ← → pour passer d&apos;une scène à l&apos;autre
        </motion.p>
      </motion.div>
    </section>
  );
}
