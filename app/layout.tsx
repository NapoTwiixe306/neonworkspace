import type { Metadata } from "next";
import { SITE, SITE_URL } from "@/src/lib/site";
import { personSchema, localBusinessSchema } from "@/src/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.name,
    template: "%s · Julien M",
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
    images: [{ url: "/julien.png", width: 1200, height: 1200, alt: SITE.author.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: ["/julien.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
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
