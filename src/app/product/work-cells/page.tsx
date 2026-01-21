// 예시 파일: src/app/product/work-cells/page.tsx
"use client";

import Image from "next/image";

type FeatureBlock = {
  title: string;
  eyebrow?: string;
  desc: string[];
  highlightTitle?: string;
  highlights?: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean; // 이미지/텍스트 좌우 반전
};

export default function WorkCellsLikeBalTecPage() {
  // ✅ 히어로(상단 큰 이미지) — 이미지 경로만 교체해서 사용
  const hero = {
    bg: "/h-rnc.jpg",
    kicker: "BALTEC CNC WORK CELLS",
    title1: "CNC WORK CELLS",
    title2: "FOR WORK THAT SELLS",
    desc:
      "최고의 성능과 효율적인 생산 수준을 목표로, 안전한 작업 환경에서 운용되는 BalTec의 표준 워크셀 및 고객 맞춤형 솔루션을 제공합니다.",
    breadcrumb: "HOME / PRODUCTS / BALTEC CNC WORK CELLS",
  };

  // ✅ 본문 상단 소개 섹션
  const intro = {
    bandTitle: "CNC COLD FORMING MACHINES",
    paragraphs: [
      "새로운 기준을 제시하는 CNC 장비: BalTec의 CNC 리베팅 머신과 자동화 워크셀은 타협 없는 품질과 뛰어난 내구성, 그리고 높은 생산 효율을 목표로 설계되었습니다. 까다로운 생산 환경에서도 연속 운전이 가능하도록 개발되어, 최신 기술과 견고한 구조를 결합했습니다.",
      "모듈형 설계 덕분에 다양한 생산 공정과 기능을 자유롭게 조합할 수 있으며, 고객 요구에 맞춰 단계적으로 확장할 수 있습니다.",
      "ELECTRIC RX의 출시로, 회전 인덱싱 테이블을 탑재한 완전 전기식 CNC 라디얼 리베팅 머신이 새로운 정밀 성형 시대를 엽니다. 단순 모니터링을 넘어, 전 축(axes)에서 정밀한 CNC 제어를 구현해 모든 움직임에서 ‘진짜 CNC’의 정밀도를 제공합니다. (툴 체인저 옵션 장착 시 최대 4개의 성형 툴을 운용 가능)",
    ],
  };

  // ✅ 아래 2개 블록(회전 인덱싱 테이블 / 리니어 벨트 트랜스퍼)
  const blocks: FeatureBlock[] = [
    {
      title: "ROTARY INDEXING TABLE",
      eyebrow: "Work Cells or work stations with coordinate riveting machine and HPP",
      desc: [
        "라디얼 리베팅 머신 또는 프레스가 최대 효율로 운용될 수 있도록, BalTec은 표준 조립 설비뿐 아니라 고객 맞춤형 솔루션까지 설계합니다.",
        "생산 공정 목표를 달성하기 위해 ‘린(Lean) 워크셀’ 구축에 특화되어 있으며, BalTec의 경험 많은 설계팀이 컨셉 단계부터 완성까지 조립 설비 시스템을 함께 구현합니다.",
      ],
      highlightTitle: "Combined with round table",
      highlights: [
        "안전 인클로저가 포함된 완전 자동/반자동 작업 스테이션 구성 가능",
        "원형 테이블 연동(Coordinate) 리베팅 적용 가능",
        "예시 치수: 작업 영역(X=200mm, Y=300mm), 원형 테이블(Ø=870mm)",
      ],
      imageSrc: "/rnc_rt_b (1).jpg",
      imageAlt: "Rotary Indexing Table",
      reverse: false,
    },
    {
      title: "LINEAR BELT TRANSFER",
      eyebrow: "Work Cells for belt transfer system",
      desc: [
        "트랜스퍼 라인에 통합 가능한 안전 인클로저 포함 워크셀을 구성할 수 있습니다. 이 워크셀은 코디네이트(Coordinate) 리베팅 머신과 함께 적용되며, 공정/작업물/홀더 구성에 따라 소형부터 중형까지 폭넓게 대응합니다.",
        "요구 리베팅 힘(force)에 따라 최대 4개의 리베팅 유닛을 적용할 수 있으며, 옵션 비례 밸브 기술을 통해 동일 작업물에서 서로 다른 사이즈/재질의 리벳도 보다 쉽게 처리할 수 있습니다.",
      ],
      highlightTitle: "Both machine types include",
      highlights: [
        "프로세스 모니터링 및 제어(컨트롤) 기능",
        "최대 63개 리베팅 프로그램 저장/호출",
        "6개 제어 파라미터 / 45개 리베팅 모드(예시 구성)",
        "통합 로거 기능, 데이터 기록",
        "이더넷 및 USB 인터페이스",
        "5.7” 터치스크린 LED 백라이트(예시 옵션)",
      ],
      imageSrc: "/rnc_tr_b.jpg",
      imageAlt: "Linear Belt Transfer Work Cell",
      reverse: true,
    },
  ];

  return (
    <main className="w-full bg-white">
      {/* ===========================
          HERO
      =========================== */}
      <section className="relative w-full h-[540px] md:h-[620px] bg-black overflow-hidden">
        {/* bg image */}
        <Image
          src={hero.bg}
          alt="Work cells hero background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* content */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 h-full flex items-end pb-14 md:pb-16">
          <div className="max-w-[560px]">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] font-semibold text-white/80 uppercase">
              <span className="h-[2px] w-10 bg-red-500" />
              {hero.kicker}
            </div>

            <h1 className="mt-4 text-white font-extrabold leading-[1.06]">
              <span className="block text-3xl md:text-5xl">{hero.title1}</span>
              <span className="block text-3xl md:text-5xl">{hero.title2}</span>
            </h1>

            <div className="mt-3 h-[3px] w-12 bg-red-600" />

            <p className="mt-4 text-white/90 text-sm md:text-base leading-7">
              {hero.desc}
            </p>

            <div className="mt-10 text-white/70 text-[12px] tracking-wide">
              {hero.breadcrumb}
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
          INTRO BAND TITLE
      =========================== */}
      <section className="relative bg-[#efefef]">
        {/* 가운데 라벨 모양(스크린샷 느낌) */}
        <div className="relative mx-auto max-w-[1200px] px-6">
          <div className="relative -mt-7 md:-mt-8">
            <div className="mx-auto w-fit bg-[#dcdcdc] text-[#333] font-extrabold tracking-wide px-10 py-3 rounded-b-[18px] shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
              {intro.bandTitle}
            </div>
          </div>

          <div className="py-12 md:py-16">
            <div className="max-w-[980px] text-[#3a3a3a] leading-7 text-sm md:text-[15px] space-y-4">
              {intro.paragraphs.map((p, idx) => (
                <p key={idx} className="text-[#444]">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
          FEATURE BLOCKS (2 sections)
      =========================== */}
      {blocks.map((b, idx) => (
        <section
          key={b.title}
          className={`${idx % 2 === 0 ? "bg-[#f3f3f3]" : "bg-[#f7f7f7]"} py-12 md:py-16`}
        >
          {/* 가운데 라벨 */}
          <div className="relative mx-auto max-w-[1200px] px-6">
            <div className="relative -mt-7 md:-mt-8">
              <div className="mx-auto w-fit bg-[#dcdcdc] text-[#333] font-extrabold tracking-wide px-10 py-3 rounded-b-[18px] shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
                {b.title}
              </div>
            </div>

            {/* content row */}
            <div
              className={`mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                b.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-[560px] bg-white shadow-[0_10px_22px_rgba(0,0,0,0.12)] border border-black/10">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={b.imageSrc}
                      alt={b.imageAlt}
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                {b.eyebrow && (
                  <p className="text-[12px] md:text-[13px] text-[#555] font-semibold">
                    {b.eyebrow}
                  </p>
                )}

                <div className="mt-4 space-y-4 text-[#444] text-sm md:text-[15px] leading-7">
                  {b.desc.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Highlight */}
                {b.highlights && b.highlights.length > 0 && (
                  <div className="mt-6">
                    {b.highlightTitle && (
                      <p className="font-extrabold text-[#333] mb-2">
                        {b.highlightTitle}
                      </p>
                    )}
                    <ul className="list-disc pl-5 space-y-1 text-[#444] text-sm md:text-[15px] leading-7">
                      {b.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
