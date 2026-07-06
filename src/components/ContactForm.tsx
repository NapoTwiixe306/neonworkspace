"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/src/lib/contact-action";

const initial: ContactState = { status: "idle" };

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-sky-400/50 focus:bg-white/[0.05]";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initial);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-green-500/20 bg-green-500/[0.06] p-8 text-center">
        <p className="text-lg font-semibold text-white">Message envoyé, merci.</p>
        <p className="mt-2 text-sm text-white/60">
          Je vous réponds en général sous 24&nbsp;à&nbsp;48&nbsp;heures.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      {/* Honeypot anti-spam : invisible pour les humains. */}
      <div aria-hidden className="absolute left-[-9999px]" >
        <label>
          Société
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-white/70">
            Nom
          </label>
          <input id="name" name="name" type="text" required placeholder="Votre nom" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-white/70">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="vous@exemple.com" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-white/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Décrivez votre projet, votre besoin, votre délai…"
          className={`${inputClass} resize-y`}
        />
      </div>

      {state.status === "error" && (
        <p className="rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm text-red-300">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Envoi…" : "Envoyer le message"}
      </button>
    </form>
  );
}
