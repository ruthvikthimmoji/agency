import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site, socialLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#14172B] border-t border-[#2E345C] pt-20 pb-12 text-[#E6D5B7]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-[#2E345C]">
          <div>
            <div className="flex items-center gap-1 text-3xl md:text-4xl font-display font-extrabold tracking-tight">
              <span>Rough</span>
              <span className="font-normal text-[#E6D5B7]/75">Studios</span>
              <span className="text-[#F54F1B]">.</span>
            </div>
            <p className="mt-3 text-sm font-mono text-[#7A819E] tracking-wide uppercase">
              Clarity, built to scale.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1E223D] border border-[#2E345C] text-xs font-mono text-[#E6D5B7]">
              <span className="w-2 h-2 rounded-full bg-[#F54F1B] animate-pulse" />
              <span>{site.availability}</span>
            </div>

            <a
              href={`mailto:${site.email}`}
              className="text-sm font-mono text-[#E6D5B7]/80 hover:text-[#F54F1B] transition-colors"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7A819E]">
          <div className="flex flex-wrap items-center gap-x-2">
            <span>© 2026 Rough Studios.</span>
            <span>·</span>
            <span>Led by {site.founder}</span>
            <span>·</span>
            <span className="text-[#F54F1B]">24h response promise</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#E6D5B7] transition-colors">
              Privacy
            </Link>

            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E6D5B7] transition-colors inline-flex items-center gap-0.5"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={12} className="opacity-70" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}