import { ImageResponse } from "next/og";

export const alt =
  "Laura Web Studio — Web dizajn i izrada modernih web stranica";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          background: "#171918",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: "-1px",
            }}
          >
            Laura Web Studio
          </div>

          <div
            style={{
              fontSize: 16,
              color: "#aeb4aa",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Web Design · Development
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "950px",
          }}
        >
          <div
            style={{
              fontSize: 92,
              lineHeight: 0.95,
              fontWeight: 500,
              letterSpacing: "-5px",
            }}
          >
            Web stranice koje
          </div>

          <div
            style={{
              fontSize: 92,
              lineHeight: 0.95,
              fontWeight: 500,
              letterSpacing: "-5px",
              color: "#c5c9bf",
            }}
          >
            ostavljaju pravi dojam.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            fontSize: 17,
            color: "#aeb4aa",
          }}
        >
          <div>Dizajn · Razvoj · SEO · Održavanje</div>
          <div>Split, Croatia</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}