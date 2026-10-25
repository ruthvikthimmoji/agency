"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Sliders, 
  Layers, 
  FileText, 
  ShieldCheck, 
  ChevronRight,
  RefreshCcw
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Faq from "@/components/Faq";
import { site, work, services, process } from "@/data/site";

export default function Home() {
  // Before / After slider state
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging]);

  // Scorecard Quiz State
  const quizQuestions = [
    { id: 1, text: "Do you have 3+ shades of the same primary color in production?" },
    { id: 2, text: "Do developers frequently rebuild buttons or inputs from scratch?" },
    { id: 3, text: "Does shipping a new screen require redesigning common patterns?" },
    { id: 4, text: "Is your Figma file missing a linked master token library?" },
    { id: 5, text: "Do customers report visual friction or inconsistent navigations?" },
    { id: 6, text: "Does developer handoff lack redlines and defined edge-case states?" },
  ];

  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const answeredCount = Object.keys(answers).length;
  const yesCount = Object.values(answers).filter(Boolean).length;
  const clarityScore = answeredCount === 6 ? Math.round(((6 - yesCount) / 6) * 100) : null;

  return (
    <>
      <Navbar />

      <main className="bg-[#1E223D] text-[#E6D5B7] overflow-hidden selection:bg-[#F54F1B] selection:text-[#1E223D]">
        {/* =====================================================
            1. HERO (Night / Space Cadet + Radial Orange Glow)
        ===================================================== */}
        <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden border-b border-[#2E345C]">
          {/* Subtle Ambient Radial Glow */}
          <div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none opacity-20 blur-[130px] rounded-full"
            style={{ background: "radial-gradient(circle, #F54F1B 0%, #1E223D 70%)" }}
          />

          <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            {/* Live Availability Badge & Category */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14172B] border border-[#2E345C] text-xs font-mono text-[#E6D5B7]">
                <span className="w-2 h-2 rounded-full bg-[#F54F1B] animate-pulse" />
                <span>{site.hero.status}</span>
              </div>
              <span className="text-xs font-mono text-[#7A819E] uppercase tracking-wider">
                {site.hero.eyebrow}
              </span>
            </div>

            {/* Display XL Headline */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-display font-extrabold tracking-[-0.03em] leading-[0.98] text-[#E6D5B7]">
                  Make the <br />
                  <span className="text-[#F54F1B]">mess make</span> <br />
                  sense<span className="text-[#F54F1B]">.</span>
                </h1>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-end">
                <p className="text-base sm:text-lg text-[#E6D5B7]/80 leading-relaxed font-body mb-8">
                  {site.hero.body}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] bg-[#F54F1B] hover:bg-[#D83E0E] text-[#1E223D] font-display font-bold text-sm transition-all hover:shadow-lg hover:shadow-[#F54F1B]/25 focus:outline-none focus:ring-2 focus:ring-[#E6D5B7]"
                  >
                    <span>Start with an audit</span>
                    <ArrowUpRight size={16} />
                  </Link>

                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] border border-[#2E345C] hover:border-[#E6D5B7] text-[#E6D5B7] text-sm font-medium transition-all"
                  >
                    <span>View systems</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Proof Line */}
            <div className="mt-16 pt-8 border-t border-[#2E345C]/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#7A819E]">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#F54F1B]" />
                {site.hero.trustLine}
              </span>
              <span>Fixed-scope audits from ₹18,000 / $300</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            2. THE PROBLEM (Warm Sand / Gargoyle Gas Section)
               Features the interactive Before / After slider
        ===================================================== */}
        <section className="bg-[#E6D5B7] text-[#1E223D] py-24 md:py-32 border-b border-[#D8C3A0]">
          <div className="max-w-[1280px] mx-auto px-6">
            <SectionHeading
              number="01"
              eyebrow="The Bottleneck"
              title="Good products degrade when interfaces outgrow their systems."
              accentWord="outgrow"
              dark={false}
              description="Fast-moving engineering teams patch components on the fly. Within months, UI debt slows velocity and damages credibility."
            />

            {/* Interactive Before/After Visual Teardown Slider */}
            <div 
              ref={sliderRef}
              className="relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden border border-[#D8C3A0] shadow-xl select-none cursor-ew-resize mt-12 bg-[#14172B]"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              {/* "After" Layer (Clean System Output) */}
              <div className="absolute inset-0 bg-[#1E223D] p-6 sm:p-10 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-[#2E345C] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#1FB886]" />
                    <span className="font-mono text-xs text-[#E6D5B7] uppercase tracking-wider">
                      After: Unified Component System
                    </span>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-[#1FB886]/10 text-[#1FB886] border border-[#1FB886]/30">
                    Production Ready
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto">
                  <div className="p-4 rounded-xl bg-[#14172B] border border-[#2E345C]">
                    <div className="text-xs font-mono text-[#7A819E] mb-1">Color Tokens</div>
                    <div className="text-sm font-semibold text-[#E6D5B7]">12 Semantics Linked</div>
                    <div className="w-full bg-[#2E345C] h-1.5 rounded mt-3 overflow-hidden">
                      <div className="bg-[#1FB886] h-full w-full" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#14172B] border border-[#2E345C]">
                    <div className="text-xs font-mono text-[#7A819E] mb-1">Handoff Specs</div>
                    <div className="text-sm font-semibold text-[#E6D5B7]">Redlines Documented</div>
                    <div className="w-full bg-[#2E345C] h-1.5 rounded mt-3 overflow-hidden">
                      <div className="bg-[#1FB886] h-full w-full" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#14172B] border border-[#2E345C]">
                    <div className="text-xs font-mono text-[#7A819E] mb-1">UI Consistency</div>
                    <div className="text-sm font-semibold text-[#E6D5B7]">100% Componentized</div>
                    <div className="w-full bg-[#2E345C] h-1.5 rounded mt-3 overflow-hidden">
                      <div className="bg-[#1FB886] h-full w-full" />
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#7A819E] flex justify-between">
                  <span>Engineered with tokens</span>
                  <span>Zero guesswork for engineering</span>
                </div>
              </div>

              {/* "Before" Layer (Messy Patchwork UI - clipped by slider) */}
              <div 
                className="absolute inset-0 bg-[#251A18] p-6 sm:p-10 flex flex-col justify-between border-r-2 border-[#F54F1B]"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <div className="flex items-center justify-between border-b border-[#F54F1B]/30 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#E5484D]" />
                    <span className="font-mono text-xs text-[#E6D5B7] uppercase tracking-wider">
                      Before: Patchwork Design Debt
                    </span>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-[#E5484D]/10 text-[#E5484D] border border-[#E5484D]/30">
                    High Friction
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto">
                  <div className="p-4 rounded-xl bg-[#1B1210] border border-[#E5484D]/30">
                    <div className="text-xs font-mono text-[#E5484D] mb-1">Inconsistent Styles</div>
                    <div className="text-sm font-semibold text-[#E6D5B7]">6 Different Button Heights</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#1B1210] border border-[#E5484D]/30">
                    <div className="text-xs font-mono text-[#E5484D] mb-1">Handoff Friction</div>
                    <div className="text-sm font-semibold text-[#E6D5B7]">Devs Guessing Margins</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#1B1210] border border-[#E5484D]/30">
                    <div className="text-xs font-mono text-[#E5484D] mb-1">Maintenance Cost</div>
                    <div className="text-sm font-semibold text-[#E6D5B7]">2x Longer Ship Times</div>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#E5484D] flex justify-between">
                  <span>Ad-hoc wireframes</span>
                  <span>Missing edge states & micro-interactions</span>
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-[#F54F1B] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F54F1B] text-[#1E223D] flex items-center justify-center shadow-lg font-bold">
                  <Sliders size={16} />
                </div>
              </div>
            </div>
            
            <p className="text-center font-mono text-xs text-[#1E223D]/60 mt-4">
              ← Drag slider to compare before vs. redesigned system →
            </p>
          </div>
        </section>

        {/* =====================================================
            3. SELECTED WORK (Space Cadet / Night Theme)
        ===================================================== */}
        <section id="work" className="py-24 md:py-32 border-b border-[#2E345C]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <SectionHeading
                number="02"
                eyebrow="Proof of Craft"
                title="Systems built for high complexity."
                accentWord="complexity"
                dark={true}
                description="Real products with architectural edge cases, multi-role permissions, and dense data."
              />
              <span className="font-mono text-xs text-[#7A819E] mb-12">
                02 Projects Available
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {work.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl bg-[#14172B] border border-[#2E345C] hover:border-[#F54F1B] transition-all duration-300 p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-xs text-[#F54F1B]">
                        [{project.number}] · {project.type}
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-[#1E223D] border border-[#2E345C] text-[#E6D5B7]">
                        {project.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#E6D5B7] group-hover:text-[#F54F1B] transition-colors mb-4">
                      {project.title}
                    </h3>
                    <p className="text-[#7A819E] text-base leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  {/* Clean Visual Frame Mockup */}
                  <div className="w-full h-48 rounded-xl bg-[#1E223D] border border-[#2E345C] p-4 flex flex-col justify-between group-hover:border-[#F54F1B]/40 transition-colors">
                    <div className="flex items-center gap-1.5 border-b border-[#2E345C] pb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2E345C]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2E345C]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2E345C]" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-1/3 bg-[#2E345C] rounded" />
                      <div className="h-3 w-2/3 bg-[#2E345C]/60 rounded" />
                    </div>
                    <div className="flex justify-between items-center text-xs font-mono text-[#7A819E]">
                      <span>Figma Component Spec</span>
                      <span className="text-[#F54F1B] flex items-center gap-1">
                        Inspect <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            4. SERVICES & TRANSPARENT PRICING
        ===================================================== */}
        <section id="services" className="py-24 md:py-32 bg-[#14172B] border-b border-[#2E345C]">
          <div className="max-w-[1280px] mx-auto px-6">
            <SectionHeading
              number="03"
              eyebrow="Transparent Scope"
              title="Fixed anchors. No surprise billing."
              accentWord="surprise"
              dark={true}
              description="Know exact turnaround times, deliverables, and costs up front before signing."
            />

            <div className="space-y-4 mt-12">
              {services.map((service) => (
                <div
                  key={service.number}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-200 flex flex-col lg:flex-row lg:items-center justify-between gap-6 ${
                    service.featured
                      ? "bg-[#1E223D] border-[#F54F1B] shadow-lg shadow-[#F54F1B]/10"
                      : "bg-[#1E223D]/60 border-[#2E345C] hover:border-[#7A819E]"
                  }`}
                >
                  <div className="flex items-start gap-4 lg:w-1/3">
                    <span className="font-mono text-sm text-[#F54F1B] pt-0.5">
                      [{service.number}]
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-display font-bold text-[#E6D5B7]">
                          {service.title}
                        </h3>
                        {service.featured && (
                          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#F54F1B] text-[#1E223D] font-bold">
                            Recommended
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-[#7A819E] mt-1 block">
                        {service.short}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#7A819E] lg:w-1/3 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between lg:justify-end gap-6 lg:w-1/4">
                    <span className="font-mono text-sm font-semibold text-[#E6D5B7]">
                      {service.price}
                    </span>
                    <Link
                      href="/contact"
                      className="p-3 rounded-xl bg-[#2E345C] hover:bg-[#F54F1B] text-[#E6D5B7] hover:text-[#1E223D] transition-colors"
                      aria-label={`Book ${service.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            5. INTERACTIVE UX SCORECARD (Lead Magnet)
        ===================================================== */}
        <section id="scorecard" className="py-24 md:py-32 bg-[#E6D5B7] text-[#1E223D] border-b border-[#D8C3A0]">
          <div className="max-w-[960px] mx-auto px-6">
            <SectionHeading
              number="04"
              eyebrow="Interactive Diagnostic"
              title="How messy is your product interface?"
              accentWord="messy"
              dark={false}
              description="Answer 6 yes/no questions to measure your current interface debt and handoff risks."
            />

            <div className="mt-10 p-6 sm:p-10 rounded-2xl bg-[#F3EBDD] border border-[#D8C3A0] shadow-md">
              <div className="space-y-4">
                {quizQuestions.map((q) => (
                  <div
                    key={q.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#E6D5B7]/60 border border-[#D8C3A0]"
                  >
                    <span className="text-sm font-medium text-[#1E223D]">
                      {q.id}. {q.text}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setAnswers({ ...answers, [q.id]: true })}
                        className={`px-4 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                          answers[q.id] === true
                            ? "bg-[#F54F1B] text-[#1E223D]"
                            : "bg-[#D8C3A0]/60 text-[#1E223D] hover:bg-[#D8C3A0]"
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setAnswers({ ...answers, [q.id]: false })}
                        className={`px-4 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                          answers[q.id] === false
                            ? "bg-[#1E223D] text-[#E6D5B7]"
                            : "bg-[#D8C3A0]/60 text-[#1E223D] hover:bg-[#D8C3A0]"
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quiz Results Calculation */}
              {clarityScore !== null ? (
                <div className="mt-8 pt-6 border-t border-[#D8C3A0] flex flex-col sm:flex-row sm:items-center justify-between gap-6 animate-in fade-in">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#1E223D]/70">
                      Your Product Clarity Score
                    </div>
                    <div className="text-4xl font-display font-extrabold text-[#1E223D] mt-1">
                      {clarityScore}%{" "}
                      <span className="text-sm font-mono font-normal text-[#1E223D]/70">
                        ({6 - yesCount}/6 health markers passing)
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/contact?score=${clarityScore}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F54F1B] text-[#1E223D] font-display font-bold text-sm shadow hover:bg-[#D83E0E] transition-all"
                  >
                    <span>Fix this with an audit</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ) : (
                <div className="mt-6 text-xs font-mono text-[#1E223D]/60 text-right">
                  Answered {answeredCount} of 6 questions
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            6. SCROLL-DRIVEN PROCESS
        ===================================================== */}
        <section id="process" className="py-24 md:py-32 border-b border-[#2E345C]">
          <div className="max-w-[1280px] mx-auto px-6">
            <SectionHeading
              number="05"
              eyebrow="Workflow"
              title="A 5-step path to system clarity."
              accentWord="clarity"
              dark={true}
              description="No bloated committee workshops. Clear sequential handoff milestones from audit to code."
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="p-6 rounded-2xl bg-[#14172B] border border-[#2E345C] flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-[#F54F1B] block mb-4">
                      Step [{step.number}]
                    </span>
                    <h3 className="text-lg font-display font-bold text-[#E6D5B7] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#7A819E] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#2E345C]/60 flex items-center justify-between text-xs font-mono text-[#7A819E]">
                    <span>Phase {step.number}</span>
                    <CheckCircle2 size={14} className="text-[#F54F1B]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            7. FAQ SECTION
        ===================================================== */}
        <section className="py-24 md:py-32 bg-[#14172B] border-b border-[#2E345C]">
          <div className="max-w-[960px] mx-auto px-6">
            <SectionHeading
              number="06"
              eyebrow="Clarity First"
              title="Frequently answered questions."
              accentWord="questions"
              dark={true}
              description="Honest details on scope, revisions, Figma files, and developer handoffs."
            />
            <div className="mt-8">
              <Faq limit={5} />
            </div>
          </div>
        </section>

        {/* =====================================================
            8. FINAL CTA BAND (Orange to Cadet Gradient)
        ===================================================== */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-[#1E223D]">
          <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14172B] border border-[#2E345C] text-xs font-mono text-[#F54F1B] mb-6">
              <Sparkles size={14} />
              <span>Direct Designer Access · 24h Response</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#E6D5B7] tracking-tight max-w-[800px] mx-auto leading-tight">
              Ready to turn the interface mess into a <span className="text-[#F54F1B]">scalable system</span>?
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#7A819E] max-w-[560px] mx-auto font-body">
              Book a fixed-price audit (3 to 5 days) or discuss a full design system overhaul.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-[12px] bg-[#F54F1B] hover:bg-[#D83E0E] text-[#1E223D] font-display font-bold text-base transition-all shadow-xl shadow-[#F54F1B]/25"
              >
                <span>Start a project</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}