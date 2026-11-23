import Image from "next/image";
import { site } from "@/data/site";

/**
 * The logo.
 * Right now: the studio name set in the display serif.
 * Later: set `logo.image` in data/site.ts to your logo file and it is used everywhere instead.
 */
export default function Wordmark({ size = "md" }: { size?: "md" | "lg" }) {
  const { text, image, width, height } = site.logo;

  if (image) {
    const scale = size === "lg" ? 2 : 1;
    return (
      <Image
        src={image}
        alt={site.name}
        width={width * scale}
        height={height * scale}
        className={`wordmark-image wordmark-image-${size}`}
        unoptimized
        priority={size === "md"}
      />
    );
  }

  return <span className={`wordmark wordmark-${size}`}>{text}</span>;
}
