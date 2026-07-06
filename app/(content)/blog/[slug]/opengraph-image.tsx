import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { posts, getPost } from "@/src/content/posts";

// Image de partage dédiée à chaque article de blog : titre + tags + auteur,
// aux couleurs néon du portfolio.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  return [{ id: 0, alt: post?.title ?? "Article", size, contentType }];
}

const portrait = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/julien.png"),
).toString("base64")}`;

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return new Response("Not found", { status: 404 });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#fff",
          position: "relative",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(56,189,248,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -140,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(74,222,128,0.3) 0%, rgba(74,222,128,0) 70%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {post.tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "8px 18px",
                  borderRadius: 9999,
                  border: "1px solid rgba(255,255,255,0.18)",
                  fontSize: 22,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 36,
              fontSize: 58,
              fontWeight: 700,
              letterSpacing: -1.5,
              lineHeight: 1.15,
            }}
          >
            {post.title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img
            src={portrait}
            width={72}
            height={72}
            style={{
              borderRadius: 9999,
              objectFit: "cover",
              border: "2px solid rgba(255,255,255,0.15)",
            }}
            alt=""
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 27, fontWeight: 600 }}>
              Julien Milants
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "#7dd3fc",
              }}
            >
              Développeur web & front-end à Liège · {post.readingTime}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
