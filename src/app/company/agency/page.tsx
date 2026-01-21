"use client";

import Link from "next/link";
import Image from "next/image";

const aboutImages = [
  "/thumb-3695998478_LmAVXJrn_38059e235e924ed9b074233bfb105cc898cf93b4_1200x1713.jpg",
  
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
          style={{
            backgroundImage: "url('/suv_banner01.jpg')",
          }}
        />

       

        <div
          className="absolute bottom-0 left-0 right-0 h-10 bg-white"
          style={{ clipPath: "polygon(0 100%, 18% 0, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* ============================
          하단 메뉴 탭
      ============================= */}
      <nav className="border-b border-gray-200 bg-white">
        <ul className="mx-auto flex max-w-5xl justify-center gap-8 md:gap-16">

          {/* INTRODUCTION (활성 탭) */}
          <li className="py-4">
            <Link
              href="/company/intro"
              className="flex flex-col items-center text-[11px] md:text-[12px] font-medium tracking-[0.35em] uppercase text-gray-400 hover:text-black"
            >
              <span>introduction</span>
              <span className="mt-2 h-[2px] w-16 bg-transparent" />
            </Link>
          </li>

          {/* AGENCY CERTIFICATE */}
          <li className="py-4">
            <Link
              href="/company/agency"
              className="flex flex-col items-center text-[11px] md:text-[12px] font-medium tracking-[0.35em] uppercase text-black"
            >
              <span>agency certificate</span>
              <span className="mt-2 h-[2px] w-16 bg-[#e3122f]" />
            </Link>
          </li>

          {/* REFERENCE */}
          <li className="py-4">
            <Link
              href="/company/reference"
              className="flex flex-col items-center text-[11px] md:text-[12px] font-medium tracking-[0.35em] uppercase text-gray-400 hover:text-black"
            >
              <span>reference</span>
              <span className="mt-2 h-[2px] w-16 bg-transparent" />
            </Link>
          </li>

          {/* LOCATION */}
          <li className="py-4">
            <Link
              href="/company/location"
              className="flex flex-col items-center text-[11px] md:text-[12px] font-medium tracking-[0.35em] uppercase text-gray-400 hover:text-black"
            >
              <span>location</span>
              <span className="mt-2 h-[2px] w-16 bg-transparent" />
            </Link>
          </li>

        </ul>
      </nav>

      {/* ============================
          아래 이미지 3개 섹션
      ============================= */}
      <p className="text-[50px] text-center relative top-[30px] leading-snug">
  agency certificate
</p>
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
