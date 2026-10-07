import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROUGH. — Product Design Studio",
  description: "Product UI, design systems and UX/UI audits for founders done patching things together.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
