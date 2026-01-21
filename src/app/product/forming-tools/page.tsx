"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// 탭 목록
const tabs = [
  { label: "Joining Comparison", href: "/product/joining-comparison", active: false },
  { label: "Electric Servo Rivet", href: "/product/electric-servo-rivet", active: false },
  { label: "Riveting Units", href: "/product/riveting-units", active: false },
  { label: "Roller Forming", href: "/product/roller-forming", active: false },
  { label: "Forming Tools", href: "/product/forming-tools", active: true },
];

export default function Page() {
  // 상단(첫 번째) 슬라이더 이미지
  const images = [
    "/sub_cont02_05_01_01.jpg", // ★ 첫 번째 이미지
    "/sub_cont02_05_01_02.jpg", // ★ 두 번째 이미지
    "/sub_cont02_05_01_03.jpg", // ★ 세 번째 이미지
  ];

  // 하단(두 번째) 슬라이더 이미지 – 필요에 따라 파일명 변경
  const bottomImages = [
    "/sub_cont02_05_03_01.jpg",
    "/sub_cont02_05_03_02.jpg",
    
  ];

  const [index, setIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  const bottomPrev = () =>
    setBottomIndex((bottomIndex - 1 + bottomImages.length) % bottomImages.length);
  const bottomNext = () =>
    setBottomIndex((bottomIndex + 1) % bottomImages.length);

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
          TAB MENU
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
                <span className="h-5 flex items-center">{tab.label}</span>
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

      {/* ============================
          TITLE
      ============================= */}
      <section className="w-full py-8 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <h2 className="text-[38px] font-light tracking-[0.08em] text-black">
            Forming Tools
          </h2>
          <span className="block w-3 h-[10px] bg-[#8b0000] rotate-[20deg]" />
        </div>
      </section>

      {/* ============================
          MAIN CONTENT
      ============================= */}
      <section className="w-full bg-white py-10 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-0">
          {/* --------------------------
              첫 번째 2열 섹션 (상단 슬라이더)
          --------------------------- */}
          <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-start">
              {/* LEFT : SLIDER SECTION */}
              <div className="relative">
                {/* 빨간 박스 */}
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#c4001d] z-0" />

                {/* 이미지 슬라이드 */}
                <div className="relative z-10 overflow-hidden border border-gray-200 bg-white p-4">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                  >
                    {images.map((src, i) => (
                      <div key={i} className="w-full flex-shrink-0">
                        <Image
                          src={src}
                          alt={`slide-${i}`}
                          width={800}
                          height={600}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 슬라이드 버튼 (캡슐형, 잘 보이게) */}
                <div className="mt-6 flex justify-start">
                  <div className="inline-flex items-center gap-3 rounded-full bg-white/95 px-5 py-2 shadow-md border border-gray-200">
                    {/* PREV */}
                    <button
                      onClick={prev}
                      className="flex items-center gap-2 text-[13px] font-semibold text-gray-800 
                                 px-3 py-1.5 rounded-full 
                                 hover:bg-[#c4001d] hover:text-white hover:shadow 
                                 transition-colors transition-shadow duration-200"
                    >
                      <span className="text-[16px]">←</span>
                      <span>PREV</span>
                    </button>

                    <span className="h-4 w-px bg-gray-200" />

                    {/* NEXT */}
                    <button
                      onClick={next}
                      className="flex items-center gap-2 text-[13px] font-semibold text-gray-800 
                                 px-3 py-1.5 rounded-full 
                                 hover:bg-[#c4001d] hover:text-white hover:shadow 
                                 transition-colors transition-shadow duration-200"
                    >
                      <span>NEXT</span>
                      <span className="text-[16px]">→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT : STATIC IMAGE */}
              <div>
                <div className="mt-8">
                  <Image
                    src="/sub_cont02_05_01.jpg"
                    alt="Right Image"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 유튜브 영상 (16:9 비율 고정) */}
          <div className="w-full mb-12">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src="https://www.youtube.com/embed/9-b0XAjh0TU"
                title="video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* 사진 2 */}
          <div className="w-full mb-12">
            <Image
              src="/sub_cont02_05_02.jpg"
              alt="image2"
              width={1600}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ============================
          최하단 독립 2열 섹션 (두 번째 슬라이더)
      ============================= */}
      <main className="bg-white">
        <section className="w-full py-12 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-start">
            {/* LEFT : 하단 슬라이더 */}
            <div className="relative">
              {/* 빨간 박스 (조금 작게) */}
              <div className="absolute -top-5 -left-5 w-32 h-32 bg-[#c4001d] z-0" />

              <div className="relative z-10 overflow-hidden border border-gray-200 bg-white p-4">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${bottomIndex * 100}%)` }}
                >
                  {bottomImages.map((src, i) => (
                    <div key={i} className="w-full flex-shrink-0">
                      <Image
                        src={src}
                        alt={`bottom-slide-${i}`}
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* 하단 슬라이더 버튼 */}
              <div className="mt-6 flex justify-start">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/95 px-5 py-2 shadow-md border border-gray-200">
                  {/* PREV */}
                  <button
                    onClick={bottomPrev}
                    className="flex items-center gap-2 text-[13px] font-semibold text-gray-800 
                               px-3 py-1.5 rounded-full 
                               hover:bg-[#c4001d] hover:text-white hover:shadow 
                               transition-colors transition-shadow duration-200"
                  >
                    <span className="text-[16px]">←</span>
                    <span>PREV</span>
                  </button>

                  <span className="h-4 w-px bg-gray-200" />

                  {/* NEXT */}
                  <button
                    onClick={bottomNext}
                    className="flex items-center gap-2 text-[13px] font-semibold text-gray-800 
                               px-3 py-1.5 rounded-full 
                               hover:bg-[#c4001d] hover:text-white hover:shadow 
                               transition-colors transition-shadow duration-200"
                  >
                    <span>NEXT</span>
                    <span className="text-[16px]">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT : 고정 이미지 */}
            <div className="flex items-center">
              <Image
                src="/sub_cont02_05_03.jpg" // ★ 최하단 오른쪽 고정 이미지 (원하는 파일로 변경)
                alt="Bottom fixed image"
                width={900}
                height={700}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
        </section>
        
        <div className="w-full mb-12 flex justify-center">
  <div 
    className="relative" 
    style={{ 
      width: "50%",           // ⭐ 가로 50% (절반)
      paddingBottom: "28.125%" // ⭐ 세로 50% (기존 56.25% / 2)
    }}
  >
    <iframe
      className="absolute left-0 top-0 h-full w-full rounded-lg"
      src="https://www.youtube.com/embed/9-b0XAjh0TU"
      title="video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</div>

        
      </main>
    </div>
  );
}
