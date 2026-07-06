"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { SITE } from "@/src/lib/site";

export interface ContactState {
  status: "idle" | "success" | "error";
  message?: string;
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Rate limiting en mémoire par IP : suffisant pour un process Node unique sur
// VPS (pas de serverless multi-instances). Protège le SMTP contre le spam en
// boucle que le honeypot ne bloque pas.
const RATE_LIMIT = 5; // envois max…
const RATE_WINDOW_MS = 60 * 60 * 1000; // …par heure et par IP
const attempts = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT) {
    attempts.set(ip, recent);
    return true;
  }
  recent.push(now);
  attempts.set(ip, recent);
  // Purge les IP inactives pour éviter que la Map grossisse indéfiniment.
  if (attempts.size > 1000) {
    for (const [key, times] of attempts) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) attempts.delete(key);
    }
  }
  return false;
}

// Envoie le message du formulaire de contact par SMTP (nodemailer).
// Variables d'environnement attendues (cf. .env.example) :
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, et CONTACT_TO (optionnel).
export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Champ piège anti-spam : rempli uniquement par les bots.
  const honeypot = String(formData.get("company") ?? "").trim();

  if (honeypot) return { status: "success" };

  // IP réelle derrière le reverse proxy du VPS (nginx/caddy).
  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: `Trop de messages envoyés d'affilée. Réessayez plus tard ou écrivez-moi directement à ${SITE.author.email}.`,
    };
  }

  if (!name || !email || !message) {
    return { status: "error", message: "Merci de remplir tous les champs." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "L'adresse email semble invalide." };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return {
      status: "error",
      message: `Le service d'envoi n'est pas encore configuré. Écrivez-moi directement à ${SITE.author.email}.`,
    };
  }

  const port = Number(SMTP_PORT ?? 587);
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Contact portfolio" <${SMTP_USER}>`,
      to: CONTACT_TO || SITE.author.email,
      replyTo: `"${name}" <${email}>`,
      subject: `Nouveau message de ${name} via le portfolio`,
      text: `De : ${name} <${email}>\n\n${message}`,
    });

    return { status: "success" };
  } catch (err) {
    console.error("Échec de l'envoi du message de contact :", err);
    return {
      status: "error",
      message: `L'envoi a échoué. Réessayez ou écrivez-moi directement à ${SITE.author.email}.`,
    };
  }
}
