// src/app/sample/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function SamplePage() {
  return (
    <div className="w-full bg-white">
      {/* ============================
          HERO SECTION (자료실 스타일 동일)
      ============================= */}
      <section className="relative w-full h-[260px] md:h-[320px] overflow-hidden bg-black">
        {/* 배경 이미지 */}
        <Image
          src="/h-er-rx.jpg" // 원하는 히어로 배경 이미지로 교체 가능
          alt="Sample Hero Background"
          fill
          priority
          className="object-cover object-center opacity-70"
        />

        {/* Red Gradient Overlay (우→좌) */}
        <div className="absolute inset-0 bg-gradient-to-l from-red-900/35 via-red-800/25 to-transparent" />

        {/* 어두운 블랙 오버레이 */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 텍스트 영역 */}
        <div className="relative max-w-[1200px] mx-auto h-full flex flex-col justify-center px-6 text-white">
          <p className="text-[11px] md:text-xs tracking-[0.22em] font-semibold text-red-300 uppercase mb-2">
            BALTEC KOREA SAMPLE TEST
          </p>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            샘플 테스트
          </h1>

          <p className="mt-3 text-sm md:text-base text-white/80 max-w-xl leading-relaxed">
            고객사의 제품 테스트를 위한 샘플 이미지를 확인할 수 있는 전용 페이지입니다.
            분석 및 테스트 결과를 이미지 기반으로 안내할 수 있습니다.
          </p>

          {/* 붉은 밑줄 */}
          <div className="mt-4 w-24 h-[3px] bg-red-600 rounded-full" />
        </div>

        {/* 하단 사선 컷팅 */}
        <div
          className="absolute bottom-0 left-0 w-full h-20 bg-white"
          style={{
            clipPath: "polygon(0 100%, 58% 0, 100% 0, 100% 100%)",
          }}
        />
      </section>

      {/* ============================
          MAIN CONTENT (사진 한 장)
      ============================= */}
     <section className="bg-white py-16">
  <div className="max-w-[1600px] mx-auto px-8">
    <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 flex justify-center">
      <div className="w-full max-w-[1600px] h-[900px] flex items-center justify-center overflow-hidden">
        <Image
          src="/sub_cont03_03_01.jpg"
          alt="Sample Test Image"
          width={2400}   // 2배
          height={1600}  // 2배
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
