"use client";

import Link from "next/link";

export default function WayPage() {
  const ADDRESS = "서울특별시 송파구 잠실동 250-13";           // 본사
  const FACTORY_ADDRESS = "경기도 광주시 도척면 진우리 66-12"; // 공장

  return (
    <div className="w-full min-h-screen bg-white">
      {/* ============================
          HERO SECTION
      ============================= */}
      <section className="relative w-full h-[260px] md:h-[320px] overflow-hidden">
        {/* 배경 이미지 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/suv_banner01.jpg')" }}
        />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/30" />

        {/* 가운데 텍스트 */}
        <div className="relative flex h-full items-center justify-center">
          <div className="text-center text-white">
            <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase">
              company
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl tracking-[0.25em] font-semibold">
              LOCATION
            </h1>
            <div className="mt-4 h-[2px] w-10 mx-auto bg-[#e3122f]" />
          </div>
        </div>

        {/* 하단 사선 컷팅 */}
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
          <li className="py-4">
            <Link
              href="/company/intro"
              className="flex flex-col items-center text-[11px] md:text-[12px] font-medium tracking-[0.35em] uppercase text-gray-400 hover:text-black"
            >
              <span>introduction</span>
              <span className="mt-2 h-[2px] w-16 bg-transparent" />
            </Link>
          </li>

          <li className="py-4">
            <Link
              href="/company/agency"
              className="flex flex-col items-center text-[11px] md:text-[12px] font-medium tracking-[0.35em] uppercase text-gray-400 hover:text-black"
            >
              <span>agency certificate</span>
              <span className="mt-2 h-[2px] w-16 bg-transparent" />
            </Link>
          </li>

          <li className="py-4">
            <Link
              href="/company/reference"
              className="flex flex-col items-center text-[11px] md:text-[12px] font-medium tracking-[0.35em] uppercase text-gray-400 hover:text-black"
            >
              <span>reference</span>
              <span className="mt-2 h-[2px] w-16 bg-transparent" />
            </Link>
          </li>

          <li className="py-4">
            <Link
              href="/company/location"
              className="flex flex-col items-center text-[11px] md:text-[12px] font-medium tracking-[0.35em] uppercase text-black"
            >
              <span>location</span>
              <span className="mt-2 h-[2px] w-16 bg-[#e3122f]" />
            </Link>
          </li>
        </ul>
      </nav>

      {/* ============================
          CONTENT
      ============================= */}
     <p className="text-[30px] text-center relative top-[30px] leading-snug">
  LOCATION
</p>

      
      <main className="max-w-5xl mx-auto px-4 md:px-6 lg:px-0 py-10 md:py-14 space-y-12">
        {/* 서울 본사 */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
          {/* 지도 */}
          <div className="relative w-full md:w-2/3 h-72 md:h-80 border rounded shadow-sm overflow-hidden">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                ADDRESS
              )}&hl=ko&z=17&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="본사 위치"
            />
          </div>

          {/* 텍스트 정보 */}
          <div className="w-full md:w-1/3 space-y-3">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <span className="text-[#e3122f] text-xl">📍</span>
              <span>서울본사</span>
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              서울 송파구 백제고분로 181 동서빌딩 3F <br />
              <span className="text-gray-500 text-[13px]">
                (지번) {ADDRESS}
              </span>
            </p>
          </div>
        </section>

        {/* 경기 광주 공장 */}
        <section className="flex flex-col md:flex-row-reverse gap-8 md:gap-10 items-start">
          {/* 지도 */}
          <div className="relative w-full md:w-2/3 h-72 md:h-80 border rounded shadow-sm overflow-hidden">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                FACTORY_ADDRESS
              )}&hl=ko&z=17&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="공장 위치"
            />
          </div>

          {/* 텍스트 정보 */}
          <div className="w-full md:w-1/3 space-y-3">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <span className="text-[#e3122f] text-xl">📍</span>
              <span>경기 광주 공장</span>
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {FACTORY_ADDRESS} <br />
              <span className="text-gray-500 text-[13px]">
                (지번) {FACTORY_ADDRESS}
              </span>
            </p>
          </div>
        </section>
        

        {/* 주소·연락처 블록 */}
        <section className="border-t pt-8 mt-4">
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <strong className="block text-base mb-2">Address</strong>
              <p>
                <span>{ADDRESS}</span>
                <span className="ml-2 whitespace-nowrap text-gray-500">
                  (주) 동서PA 본사
                </span>
              </p>
              <p className="mt-1">
                <span>{FACTORY_ADDRESS}</span>
                <span className="ml-2 whitespace-nowrap text-gray-500">
                  곤지암 공장
                </span>
              </p>
            </div>

            <p>
              <strong>Tel.</strong> 02-338-0770
            </p>
            <p>
              <strong>Fax.</strong> 02-338-8496
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
