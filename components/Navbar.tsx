"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import Ruler from "./Ruler";
import Wordmark from "./Wordmark";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Solid header once the page scrolls past the ruler
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: Escape closes it, page doesn't scroll behind it
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <Ruler />

      <header className={`site-header${scrolled || open ? " is-scrolled" : ""}`}>
        <div className="shell site-header-inner">
          <Link href="/" className="brand" onClick={close} aria-label={`${site.name} — home`}>
            <Wordmark />
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href={site.cta.href} className="btn btn-secondary btn-sm site-header-cta">
            <span className="dot blink" aria-hidden="true" />
            {site.cta.label}
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} strokeWidth={1.4} /> : <Menu size={24} strokeWidth={1.4} />}
          </button>
        </div>
      </header>

      {open && (
        <div id="mobile-menu" className="mobile-menu mat">
          <nav aria-label="Mobile">
            <ul className="mobile-menu-list">
              {site.nav.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                    <span className="label label-sm label-blade">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href={site.cta.href} onClick={close} className="btn btn-primary">
            {site.cta.label} →
          </Link>
          <p className="label label-sm">{site.availability}</p>
        </div>
      )}
    </>
  );
}
