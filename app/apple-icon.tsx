import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0f172a",
          alignItems: "stretch",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <div style={{ display: "flex", height: 28, width: "100%" }}>
          <div style={{ flex: 1, background: "#002395" }} />
          <div style={{ flex: 1, background: "#ffffff" }} />
          <div style={{ flex: 1, background: "#ed2939" }} />
        </div>
        <div
          style={{
            marginTop: 28,
            color: "#ffffff",
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: -1,
          }}
        >
          IPTV
        </div>
        <div style={{ color: "#94a3b8", fontSize: 18, marginTop: 4 }}>
          IBO PLAYER
        </div>
      </div>
    ),
    { ...size },
  );
}
