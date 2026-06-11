import { ImageResponse } from "next/og";
import { cvData } from "@/data/cv";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Marc Ruiz — Backend & AI Software Engineer";

export default function OpengraphImage() {
  const { personalInfo } = cvData;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 40, color: "#a1a1aa" }}>{personalInfo.nickname}</div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24 }}>
          {personalInfo.name}
        </div>
        <div style={{ fontSize: 44, color: "#a1a1aa", marginTop: 16 }}>
          {personalInfo.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
