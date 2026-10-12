import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Change this to your real domain once you've bought and connected it
  metadataBase: new URL("https://agencyv0.vercel.app"),
  title: {
    default: "ROUGH. — Product UI, Design Systems & UX Audits for Founders",
    template: "%s | ROUGH.",
  },
  description:
    "Independent product design studio for founders with messy products. Product UI design, design systems and UX/UI audits. India + global.",
  authors: [{ name: "Ruthvik P Thimmoji" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}