"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// 이미지 목록
const aboutImages = [
  "/sub_cont02_03_02.jpg",
  "/sub_cont02_03_03.jpg",
  
];

// 탭 목록
const tabs = [
  { label: "Joining Comparison", href: "/product/joining-comparison", active: false },
  { label: "Electric Servo Rivet", href: "/product/electric-servo-rivet", active: false },
  { label: "Riveting Units", href: "/product/riveting-units", active: true },
  { label: "Roller Forming", href: "/product/roller-forming", active: false },
  { label: "Forming Tools", href: "/product/forming-tools", active: false },
];

export default function Page() {
   
  return (
    

    
    <div className="w-full min-h-screen bg-white">

      {/* ============================
          HERO SECTION
      ============================= */}
      <section className="relative w-full h-[260px] md:h-[320px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/suv_b1anne1r01.jpg')" }}
        />

        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-white"
          style={{ clipPath: "polygon(0 100%, 18% 0, 100% 0, 100% 100%)" }}
        />
      </section>

      

      {/* ============================
          TAB MENU (깔끔 버전)
      ============================= */}
      <nav className="border-b border-gray-200 bg-white">
        <ul className="mx-auto flex max-w-5xl justify-center gap-10 md:gap-20">
          {tabs.map((tab) => (
            <li key={tab.label}>
              <Link
                href={tab.href}
                className={`group flex flex-col items-center py-5 
                  text-[12px] font-semibold tracking-[0.15em] uppercase 
                  ${tab.active ? "text-black" : "text-gray-400 hover:text-black"}
                `}
              >
                {/* 텍스트 높이 억제 → 탭 정렬 정확히 맞춤 */}
                <span className="h-5 flex items-center">{tab.label}</span>

                {/* 밑줄 */}
                <span
                  className={`mt-3 h-[3px] w-10 transition-all duration-200 ${
                    tab.active
                      ? "bg-[#e3122f]"
                      : "bg-transparent group-hover:bg-gray-300"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

       <section className="w-full py-8 flex items-center justify-center">
      <div className="flex items-center gap-2">
        <h2 className="text-[38px] font-light tracking-[0.08em] text-black">
          Riveting units 
        </h2>

        {/* 빨간 슬래시 마크 */}
        <span className="block w-3 h-[10px] bg-[#8b0000] rotate-[20deg]" />
      </div>
    </section>
   <section className="w-full bg-white py-10 md:py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-0">

        {/* 사진 1 */}
        <div className="w-full mb-12">
          <Image
            src="/sub_cont02_03_01.jpg"   // ★ 여기에 첫 번째 사진 경로
            alt="image1"
            width={1600}
            height={1000}
            className="w-full h-auto"
          />
        </div>

        {/* 유튜브 영상 (16:9 비율 고정) */}
        <div className="w-full mb-12">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src="https://www.youtube.com/embed/2BNSuHAdZ9E"   // ★ 유튜브 주소
              title="video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

       

       

      </div>
    </section>

    

      {/* ============================
          CONTENT: 이미지 3개 섹션
      ============================= */}
      
      <main className="bg-white">
        {aboutImages.map((src, index) => (
          <section key={src} className="py-10 md:py-14">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <Image
                src={src}
                alt={`BalTec Section ${index + 1}`}
                width={1600}
                height={650}
                className="w-full h-auto"
              />
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
