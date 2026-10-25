"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1E223D]/90 backdrop-blur-md border-b border-[#2E345C] py-3.5 shadow-xl shadow-[#14172B]/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Logo with Orange Signature Dot */}
        <Link
          href="/"
          onClick={close}
          className="group flex items-center gap-0.5 text-xl tracking-tight text-[#E6D5B7] select-none"
          aria-label={`${site.name} home`}
        >
          <span className="font-display font-extrabold text-[#E6D5B7]">Rough</span>
          <span className="font-display font-normal text-[#E6D5B7]/85 ml-1">Studios</span>
          <span className="text-[#F54F1B] font-bold text-2xl transition-transform group-hover:scale-125 duration-150 leading-none">.</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {site.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-[#E6D5B7]/80 hover:text-[#E6D5B7] transition-colors duration-150 flex items-center gap-1.5"
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F54F1B] animate-pulse" />
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}

          {/* Primary Action Button */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-[#F54F1B] hover:bg-[#D83E0E] text-[#1E223D] font-display font-bold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#F54F1B]/25 focus:outline-none focus:ring-2 focus:ring-[#E6D5B7] focus:ring-offset-2 focus:ring-offset-[#1E223D]"
          >
            <span>Start a project</span>
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#E6D5B7] p-1.5 rounded-lg hover:bg-[#2E345C] transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav
          className="md:hidden bg-[#1E223D]/98 border-b border-[#2E345C] px-6 py-6 flex flex-col gap-4 text-base backdrop-blur-xl animate-in fade-in duration-200"
          aria-label="Mobile navigation"
        >
          {site.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={close}
              className="text-[#E6D5B7]/90 hover:text-white py-1 font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={close}
            className="mt-2 inline-flex items-center justify-center gap-2 py-3 rounded-[12px] bg-[#F54F1B] text-[#1E223D] font-bold text-sm"
          >
            <span>Start a project</span>
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      )}
    </header>
  );
}