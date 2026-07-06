import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { projects, getProject } from "@/src/content/projects";

// Image de partage dédiée à chaque projet : titre + tagline + screenshot du
// site dans une fenêtre navigateur, aux couleurs néon du portfolio.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  return [{ id: 0, alt: project?.name ?? "Projet", size, contentType }];
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return new Response("Not found", { status: 404 });

  // Capture du site si elle existe, sinon rendu terminal (projet API).
  const screenshot = project.screenshot
    ? `data:image/png;base64,${readFileSync(
        join(process.cwd(), "public", project.screenshot),
      ).toString("base64")}`
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0a",
          color: "#fff",
          position: "relative",
          padding: "56px 64px 0",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -120,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(56,189,248,0) 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#7dd3fc",
          }}
        >
          {project.kicker}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 14,
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            fontSize: 30,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {project.tagline}
        </div>

        {/* Fenêtre navigateur avec le screenshot du projet. Hauteurs explicites
            partout : satori ne recadre pas une image sans dimensions fixes. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 36,
            width: 1072,
            height: 320,
            borderRadius: 18,
            border: "1px solid rgba(255,255,255,0.14)",
            overflow: "hidden",
            background: "#000",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: 9999, background: "rgba(248,113,113,0.7)" }} />
            <div style={{ width: 12, height: 12, borderRadius: 9999, background: "rgba(251,191,36,0.7)" }} />
            <div style={{ width: 12, height: 12, borderRadius: 9999, background: "rgba(74,222,128,0.7)" }} />
          </div>
          {screenshot ? (
            <img
              src={screenshot}
              width={1070}
              height={282}
              style={{ objectFit: "cover", objectPosition: "top" }}
              alt=""
            />
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px 24px",
                fontSize: 20,
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              <div style={{ display: "flex", color: "#f87171" }}>
                ❯&nbsp;
                <span style={{ color: "rgba(255,255,255,0.85)" }}>
                  {project.terminal?.command}
                </span>
              </div>
              {project.terminal?.lines.slice(0, 7).map((line, i) => (
                <div key={i} style={{ display: "flex", whiteSpace: "pre" }}>
                  {line}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
