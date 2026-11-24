import { site } from "@/data/site";
import LogoMark from "./LogoMark";

/**
 * Full logo: die-cut R mark + "Ruthvik’s Studio".
 * size="lg" is the big footer version.
 */
export default function Wordmark({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <span className={`logo logo-${size}`}>
      <LogoMark size={size === "lg" ? 64 : 30} />
      <span className="wordmark">{site.logo.text}</span>
    </span>
  );
}
