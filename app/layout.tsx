import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SITE, SITE_URL } from "@/src/lib/site";
import { personSchema, localBusinessSchema } from "@/src/lib/schema";
import "./globals.css";

// Identité typographique : Space Grotesk pour les titres (caractère
// géométrique/tech qui colle à l'univers néon), Inter pour le texte courant.
// Exposées en variables CSS, appliquées dans globals.css.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.name,
    template: "%s · Julien Milants",
  },
  description: SITE.description,
  applicationName: SITE.shortName,
  authors: [{ name: SITE.author.name, url: SITE_URL }],
  creator: SITE.author.name,
  keywords: [
    "développeur web Liège",
    "développeur front-end Liège",
    "développeur React Liège",
    "création site web Liège",
    "freelance web Wallonie",
    "Next.js",
    "TypeScript",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE_URL,
    siteName: SITE.shortName,
    title: SITE.name,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Analytics Umami (self-hosted sur le VPS). Inactif tant que les deux
// variables d'environnement ne sont pas définies (cf. .env.example).
const UMAMI_SRC = process.env.NEXT_PUBLIC_UMAMI_SRC;
const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {UMAMI_SRC && UMAMI_WEBSITE_ID && (
          <script defer src={UMAMI_SRC} data-website-id={UMAMI_WEBSITE_ID} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
