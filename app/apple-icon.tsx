import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

// Icône Apple (écran d'accueil iOS) : ta photo recadrée sur le visage, 180x180.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const SRC_W = 1344;
const SRC_H = 1792;
const CROP = { x: 487, y: 430, s: 430 };

const portrait = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/julien.png"),
).toString("base64")}`;

export default function AppleIcon() {
  const scale = size.width / CROP.s;
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={portrait}
          width={SRC_W * scale}
          height={SRC_H * scale}
          alt=""
          style={{ position: "absolute", left: -CROP.x * scale, top: -CROP.y * scale }}
        />
      </div>
    ),
    { ...size },
  );
}
