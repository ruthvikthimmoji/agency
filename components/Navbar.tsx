"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { agency } from "@/data/agency";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
      <div className="site-nav-inner">
        {/* Logo */}
        <a
          className="brand"
          href="/"
          onClick={close}
          aria-label={`${agency.name} home`}
        >
          {agency.name.replace(".", "")}
          <span>.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>

          <a href="/services">Services</a>

          <a href="/process">Process</a>

          <a href="/about">About</a>

          <a className="nav-cta" href="/contact">
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#work" onClick={close}>
            Work
          </a>

          <a href="/services" onClick={close}>
            Services
          </a>

          <a href="/process" onClick={close}>
            Process
          </a>

          <a href="/about" onClick={close}>
            About
          </a>

          <a
            className="mobile-nav-cta"
            href="/contact"
            onClick={close}
          >
            Let&apos;s talk
            <ArrowUpRight size={17} />
          </a>
        </nav>
      )}
    </header>
  );
}