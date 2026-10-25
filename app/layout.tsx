import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agencyv0.vercel.app"),
  title: {
    default: "Rough Studios. — Clarity, built to scale.",
    template: "%s | Rough Studios.",
  },
  description:
    "Independent product design studio turning fast-growing, inconsistent interfaces into clear, scalable design systems. Led by Ruthvik P Thimmoji.",
  authors: [{ name: "Ruthvik P Thimmoji" }],
  openGraph: {
    title: "Rough Studios. — Make the mess make sense.",
    description: "Product UI, design systems and UX audits for founders who've outgrown patchwork design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-night text-ivory font-body antialiased selection:bg-cobalt selection:text-white">
        {children}
      </body>
    </html>
  );
}