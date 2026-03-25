import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Commerce Gateway — Open LLM Commerce Protocol";
  const description = searchParams.get("description") ?? "One tool schema for Claude, OpenAI, Grok, and Gemini.";
  const section = searchParams.get("section") ?? "Open Infrastructure";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background: "#0F172A",
          color: "#F1F5F9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg viewBox="0 0 32 24" width={68} height={52} fill="none">
            <g stroke="#059669" strokeWidth="2" strokeLinecap="round">
              <path d="M2 4 L14 12" />
              <path d="M2 12 L14 12" />
              <path d="M2 20 L14 12" />
              <path d="M14 12 L30 4" />
              <path d="M14 12 L30 20" />
            </g>
            <circle cx="14" cy="12" r="2" fill="#059669" />
          </svg>
          <span style={{ fontSize: 24, color: "#10B981" }}>Commerce Gateway</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h1 style={{ margin: 0, fontSize: 62, lineHeight: 1.05 }}>{title}</h1>
          <p style={{ margin: 0, fontSize: 28, color: "#CBD5E1", maxWidth: 920 }}>{description}</p>
        </div>

        <p style={{ margin: 0, fontSize: 20, color: "#10B981" }}>{section}</p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
