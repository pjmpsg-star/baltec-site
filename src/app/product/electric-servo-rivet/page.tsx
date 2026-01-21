"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// 이미지 목록
const aboutImages = [
  "/sub_cont02_02_04.jpg",
  
];

// 탭 목록
const tabs = [
  { label: "Joining Comparison", href: "/product/joining-comparison", active: false },
  { label: "Electric Servo Rivet", href: "/product/electric-servo-rivet", active: true  },
  { label: "Riveting Units", href: "/product/riveting-units", active: false },
  { label: "Roller Forming", href: "/product/roller-forming", active: false },
  { label: "Forming Tools", href: "/product/forming-tools", active: false },
];

export default function Page() {
    const images = [
    "/sub_cont02_02_03_02.jpg", // ★ 첫 번째 이미지
    "/sub_cont02_02_03_01.jpg", // ★ 두 번째 이미지
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);
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
          Electric Servo Rivet
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
            src="/sub_cont02_02_01.jpg"   // ★ 여기에 첫 번째 사진 경로
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
              src="https://www.youtube.com/embed/wrx1-CgTY68"   // ★ 유튜브 주소
              title="video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* 사진 2 */}
        <div className="w-full mb-12">
          <Image
            src="/sub_cont02_02_02.jpg"   // ★ 두 번째 사진 경로
            alt="image2"
            width={1600}
            height={1000}
            className="w-full h-auto"
          />
        </div>

       

      </div>
    </section>

    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-start">

        {/* --------------------------
              LEFT : SLIDER SECTION
        --------------------------- */}
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

           {/* 슬라이드 버튼 */}
          <div className="mt-6 flex justify-start">
            {/* 버튼들을 담는 캡슐 박스 */}
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

              {/* 구분선 */}
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

        {/* --------------------------
              RIGHT : STATIC TEXT
        --------------------------- */}
        <div>
        

          {/* 필요하면 우측에 이미지 1장 추가 */}
          <div className="mt-8">
            <Image
              src="/sub_cont02_02_03_txt.jpg" // ★ 오른쪽 고정 이미지
              alt="Right Image"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
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
