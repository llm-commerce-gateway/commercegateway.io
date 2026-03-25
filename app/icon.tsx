import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <svg viewBox="0 0 32 24" width="26" height="20" fill="none">
          <g stroke="#059669" strokeWidth="2" strokeLinecap="round">
            <path d="M2 4 L14 12" />
            <path d="M2 12 L14 12" />
            <path d="M2 20 L14 12" />
            <path d="M14 12 L30 4" />
            <path d="M14 12 L30 20" />
          </g>
          <circle cx="14" cy="12" r="2" fill="#059669" />
        </svg>
      </div>
    ),
    size
  );
}
