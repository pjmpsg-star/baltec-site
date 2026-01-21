// src/app/as/page.tsx
"use client";

import Image from "next/image";

type StepCard = {
  iconSrc: string;
  title: string;
  lines: string[];
  sub?: string;
};

function StepItem({ item }: { item: StepCard }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[4px] border-red-600 bg-white">
        <Image src={item.iconSrc} alt={item.title} width={46} height={46} className="opacity-80" />
      </div>

      <div className="mt-4 text-[15px] font-extrabold text-gray-900">{item.title}</div>

      <div className="mt-2 space-y-1 text-[13px] font-semibold leading-5 text-gray-900">
        {item.lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>

      {item.sub && <div className="mt-2 text-[12px] font-semibold text-gray-500">{item.sub}</div>}
    </div>
  );
}

export default function ASPage() {
  const steps: StepCard[] = [
    { iconSrc: "/headset.png", title: "전화상담", lines: [] },
    { iconSrc: "/truck.png", title: "제품수리 필요시", lines: ["택배로 해당 물품 접수"] },
    { iconSrc: "/wrench2.png", title: "AS 후 발생 또는", lines: ["업체방문 진단, AS 진행"], sub: "(출장료 발생)" },
  ];

  return (
    <div className="w-full bg-white">
      {/* =========================
          HERO (SamplePage 스타일 동일)
      ========================== */}
      <section className="relative w-full h-[260px] md:h-[320px] overflow-hidden bg-black">
        {/* 배경 이미지 */}
        <Image
          src="/h-er-rx.jpg" // TODO: A/S 히어로 이미지로 교체
          alt="A/S Hero Background"
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
            BALTEC KOREA A/S
          </p>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            A/S 안내
          </h1>

          <p className="mt-3 text-sm md:text-base text-white/80 max-w-xl leading-relaxed">
            제품 A/S 및 오버홀 안내를 확인하실 수 있습니다. 접수/진행 절차와 담당자 연락처를 통해
            빠르게 지원받으세요.
          </p>

          {/* 붉은 밑줄 */}
          <div className="mt-4 w-24 h-[3px] bg-red-600 rounded-full" />
        </div>

        {/* 하단 사선 컷팅 */}
        <div
          className="absolute bottom-0 left-0 w-full h-20 bg-white"
          style={{ clipPath: "polygon(0 100%, 58% 0, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* =========================
          CONTENT
      ========================== */}
      <main className="w-full bg-white">
        {/* 상단 2컬럼 */}
        <section className="mx-auto max-w-[1200px] px-6 pt-10 md:pt-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start">
            {/* LEFT IMAGE */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl bg-white shadow-[0_10px_28px_rgba(0,0,0,0.18)]">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src="/your-image.jpg" // TODO: 교체
                    alt="A/S"
                    fill
                    className="object-cover object-center"
                    priority={false}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="min-w-0">
              <h2 className="text-[24px] font-extrabold tracking-tight text-gray-900">
                A/S 안내
              </h2>

              <div className="mt-5 rounded-lg bg-red-600 px-6 py-6 text-white shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
                <div className="space-y-6 text-[15px]">

                     {/* 영업담당 */}
                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-lg">
                      ☎
                    </span>

                    <div className="space-y-1">
                      <div className="text-sm font-semibold text-white/80">영업담당</div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-semibold">김지환 대리</span>
                        <span className="font-extrabold">010-8859-6892</span>
                      </div>
                    </div>
                  </div>
                  {/* A/S 안내 */}
                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-lg">
                      ☎
                    </span>

                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-white/80">A/S 안내</div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-semibold">박종민 사원</span>
                        <span className="font-extrabold">010-2204-4381</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-semibold">강승범 사원</span>
                        <span className="font-extrabold">010-6784-4033</span>
                      </div>
                    </div>
                  </div>

               
                </div>
              </div>

              {/* Warranty / Overhaul (원하면 여기 이어서 추가) */}
            </div>
          </div>
        </section>

        {/* 하단 3개 아이콘 영역 */}
        <section className="mx-auto max-w-[1200px] px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {steps.map((s) => (
              <StepItem key={s.title} item={s} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
