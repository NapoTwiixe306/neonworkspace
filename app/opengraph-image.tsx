import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { SITE } from "@/src/lib/site";

// Image de partage social (Open Graph + Twitter), générée dynamiquement aux
// couleurs néon du site. 1200x630 = format standard recommandé.
export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const portrait = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/julien.png"),
).toString("base64")}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#fff",
          position: "relative",
        }}
      >
        {/* Halo néon */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: 380,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(56,189,248,0.45) 0%, rgba(56,189,248,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: 320,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(74,222,128,0.35) 0%, rgba(74,222,128,0) 70%)",
          }}
        />

        <img
          src={portrait}
          width={160}
          height={160}
          style={{
            borderRadius: 9999,
            objectFit: "cover",
            border: "2px solid rgba(255,255,255,0.15)",
          }}
          alt=""
        />
        <div style={{ marginTop: 36, fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
          Julien Milants
        </div>
        <div style={{ marginTop: 16, fontSize: 34, color: "#7dd3fc" }}>
          Développeur web &amp; front-end à Liège
        </div>
        <div style={{ marginTop: 28, fontSize: 24, color: "rgba(255,255,255,0.5)" }}>
          Next.js · React · TypeScript
        </div>
      </div>
    ),
    { ...size },
  );
}
