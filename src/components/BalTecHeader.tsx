"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Phone, Search } from "lucide-react";

export default function BalTecHeader() {
  const [open, setOpen] = useState(false);

  const sections = useMemo(
    () => [
      {
        title: "COMPANY",
        items: [
          { href: "/company/intro", label: "Introduction" },
          { href: "/company/agency", label: "Agency certificate" },
          { href: "/company/reference", label: "Reference" },
          { href: "/company/location", label: "Location" },
        ],
      },
      {
        title: "PRODUCT",
        items: [
          { href: "/product/joining-comparison", label: "Joining comparison" },         
          { href: "/product/electric-servo-rivet", label: "Electric servo rivet" },
          { href: "/product/riveting-units", label: "Riveting units" },
          { href: "/product/roller-forming", label: "Roller forming" },
          { href: "/product/forming-tools", label: "Forming tools" },
          
        ],
      },
      {
        title: "CUSTOMER",
        items: [
          { href: "/cutomer/notice", label: "공지사항" },
          { href: "/cutomer/resources", label: "자료실" },
          { href: "/cutomer/sample", label: "Sample test" },
          { href: "/cutomer/service", label: "Service" },
          { href: "/cutomer/estimate", label: "견적&셈플 문의" },
        ],
      },
    ],
    []
  );

  const underlineCls = open ? "scale-x-100" : "group-hover:scale-x-100";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* 상단 어두운 그라디언트 */}
      <div className="bg-gradient-to-b from-black/80 via-black/60 to-transparent">
        {/* TOP RIBBON */}
        <div className="hidden md:flex items-center justify-between px-8 pt-2 pb-1 text-[11px] font-medium text-white/90">
          {/* 왼쪽 빨간 캡슐 */}
          <div className="inline-flex items-center gap-2 rounded-b-full bg-red-700 px-5 py-1 shadow-md">
            <span className="text-[9px]">●</span>
            <span className="tracking-wider uppercase">BalTec Korea</span>
            <span className="text-[10px] opacity-80">· by Dongso P.A.</span>
          </div>

          {/* 오른쪽 캡슐 */}
          <div className="inline-flex items-center gap-3 rounded-b-full bg-black/80 px-4 py-1 shadow-md">
            <button type="button" className="inline-flex items-center gap-1 text-[11px] opacity-85 hover:opacity-100 transition">
              <Phone className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
            <span className="h-3 w-px bg-white/30" />
            <button type="button" className="inline-flex items-center gap-1 text-[11px] opacity-85 hover:opacity-100 transition">
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* MAIN HEADER */}
        <div className="mx-auto max-w-[1200px] px-6 py-3 flex items-center justify-between text-white">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-3 group select-none">
            <div className="leading-tight">
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
                <span className="text-white">Bal</span>
                <span className="text-red-500">Tec</span>
              </div>
              <div className="hidden md:block text-[11px] opacity-80 mt-0.5">
                Authorized reseller in Korea · Dongso P.A.
              </div>
            </div>
          </Link>

          {/* GNB */}
          <nav className="hidden md:flex items-center gap-10 text-[14px] font-semibold tracking-wide">
            {sections.map((s) => (
              <button
                key={s.title}
                onMouseEnter={() => setOpen(true)}
                onClick={() => setOpen(true)}
                className="relative hover:text-red-400 focus:outline-none group"
              >
                {s.title}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-red-500 transition-transform duration-300 ${underlineCls}`}
                />
              </button>
            ))}
          </nav>

          {/* 메가메뉴 닫기 버튼 */}
          <button
            aria-label="close menu"
            onClick={() => setOpen(false)}
            className={`hidden md:inline-grid place-items-center w-9 h-9 rounded-full border border-white/20 bg-white/5 transition ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <span className="relative block w-4 h-4">
              <span className="absolute left-1/2 top-1/2 block h-4 w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
              <span className="absolute left-1/2 top-1/2 block h-4 w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
            </span>
          </button>
        </div>
      </div>

      {/* 오버레이 */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[40] bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* 메가메뉴 패널 */}
      <div
        onMouseLeave={() => setOpen(false)}
        className={`absolute left-0 right-0 top-full transition-all duration-300 ease-out z-[41] ${
          open ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <div className="bg-white/30 backdrop-blur-md border-b border-white/40 shadow-[0_18px_40px_rgba(0,0,0,0.25)] rounded-b-xl">
          <div className="h-[2px] bg-gradient-to-r from-red-600 via-red-400/60 to-transparent" />

          <div className="mx-auto max-w-[1200px] px-10 py-10 grid grid-cols-12 gap-10">
            {sections.map((sec, secIndex) => (
              <div key={sec.title} className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block h-4 w-1 bg-red-600 rounded-full" />
                  <span className="text-xs font-semibold tracking-[0.22em] text-gray-900 uppercase">
                    {sec.title}
                  </span>
                </div>

                {/* 링크 리스트 */}
                <ul className="space-y-3 text-sm text-gray-1000">
                  {sec.items.map((it, idx) => (
                    <li
                      key={it.href}
                      style={{ transitionDelay: `${(idx + 1) * 40 + secIndex * 60}ms` }}
                      className={`transform transition-all duration-300 ${
                        open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                      }`}
                    >
                      <Link href={it.href} className="group flex items-center gap-2 hover:text-gray-900">
                        <span className="h-[2px] w-3 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 group-hover:w-4 transition-all" />
                        <span>{it.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
