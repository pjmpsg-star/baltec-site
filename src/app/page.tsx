// src/components/BalTecSections.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export type BalTecSectionsProps = {
  heroBgImg?: string;
  rightTopImg?: string;
  rightBottomImg?: string;
  rightImgWidth?: number;
  rightImgHeight?: number;
  heroCtaHref?: string;
  aboutCtaHref?: string;
  aboutText?: string;
};

export default function BalTecSections({
  heroBgImg = "/h-er-rx.jpg",
  rightTopImg,
  rightBottomImg,
  rightImgWidth = 520,
  rightImgHeight = 360,
  heroCtaHref = "#",
  aboutCtaHref = "#",
  aboutText = "스위스 BalTec은 1983년 설립, 리베팅머신을 전문적으로 생산하는 기업입니다. 전세계 여러 곳의 지사 및 대리점을 통해 리베팅 머신을 납품하고 있으며, 세계 최고의 퀄리티를 인정받고 있는 브랜드입니다. (주)동서피에이인터내쇼날은 BalTec의 한국 공식 에이전시로서 1988년부터 국내외 다양한 고객사에 솔루션을 제공하고 있습니다.",
}: BalTecSectionsProps) {
  const slides = [
    {
      bg: "/h-er-rx.jpg",
      kicker: "BALTEC ELECTRIC RX",
      titleLine1: "CNC, 진정한 의미의",
      titleLine2: "정밀 리베팅 솔루션",
      subTitle: "CNC radial riveting system with rotary indexing table & tool changer",
      body: "BalTec의 최신 CNC 라디얼 리베팅 머신은 인덱스 테이블과 툴 체인저를 통해 복잡한 조립 공정을 자동화합니다.",
      primaryHref: "/product/electric-servo-rivet",
      primaryLabel: "제품 상세보기",
      secondaryLabel: "ELECTRIC RX 자세히 보기",
      secondaryHref: "/product/electric-servo-rivet",
    },
    {
      bg: "/hero-rn281.jpg",
      kicker: "BALTEC ORBITAL LINE",
      titleLine1: <span>&nbsp;정밀함이</span>,
      titleLine2: "효율성과 만나다",
      subTitle: "BalTec은 새로운 오비탈 리베팅 머신 및 유닛의 통합 제품 라인업을 선보입니다.",
      body: "오비탈 리베팅 머신과 유닛으로 구성된 새로운 Orbital Line은 높은 정밀도와 생산 효율을 동시에 제공하여 다양한 리베팅 공정에 최적의 솔루션을 제공합니다.",
      primaryHref: "/product/riveting-machines",
      primaryLabel: "자세히 보기",
      secondaryLabel: "Orbital Line",
      secondaryHref: "/product/riveting-machines",
    },
    {
      bg: "/h-op-zange.jpg",
      kicker: "MEDICAL INSTRUMENTS",
      titleLine1: <span>&nbsp;의료기기</span>,
      titleLine2: "최고의 품질로",
      subTitle: "수술 도구, 의료 기기, 보철 제품의 제조 공정을 한 단계 끌어올리는 솔루션입니다.",
      body: "BalTec의 리베팅 기술은 의료 산업에서 요구되는 높은 정밀도와 일관된 품질을 제공하여, 수술 도구와 의료 기기, 보철 제품 생산 공정을 더욱 안정적이고 효율적으로 만들어 줍니다.",
      primaryHref: "/product/medical",
      primaryLabel: "자세히 보기",
      secondaryLabel: "Medical Line",
      secondaryHref: "/product lications/medical",
    },
    {
      bg: "/hero-worldwide.jpg",
kicker: "BALTEC PARTNERS",
titleLine1: "전 세계로 확장된",
titleLine2: "BalTec의 파트너 네트워크",
subTitle: "BalTec은 전 세계적으로 능력 있고 전문적으로 훈련된 파트너 네트워크를 보유하고 있습니다.",
body: "풍부한 경험과 높은 전문성을 갖춘 BalTec의 글로벌 파트너들은 각 지역에서 고객에게 최적의 기술 지원과 서비스를 제공합니다.",

primaryHref: "https://baltec.com/en/about-us/representatives-baltec",
primaryLabel: "지역 파트너 찾기",
primaryOpenNewWindow: true,

secondaryLabel: "Worldwide Network",
secondaryHref: "https://baltec.com/en/about-us/representatives-baltec",
secondaryOpenNewWindow: true,
    },
    {
      bg: "/hero-joining.jpg",
kicker: "BALTEC JOINING TECHNOLOGY",
titleLine1: "BalTec의 핵심 기술,",
titleLine2: "정밀 조립 솔루션",
subTitle: "수십 년 동안 BalTec은 고객, 파트너, 공급업체, 직원들과의 신뢰할 수 있는 연결 기술을 개발해 왔습니다.",
body: "오랜 기술 경험을 바탕으로 다양한 산업에서 활용되는 BalTec의 리베팅 및 조립 솔루션을 확인해 보세요.",

primaryHref: "https://baltec.com/en/applications",
primaryLabel: "자세히 보기",
primaryOpenNewWindow: true,

secondaryLabel: "Applications",
secondaryHref: "https://baltec.com/en/applications",
secondaryOpenNewWindow: true,
    },
    {
      bg: "/hero-ea30.jpg",
      kicker: "BALTEC EA30 INNOVATION",
      titleLine1: "3축 제어를 갖춘",
      titleLine2: "최신 롤러포밍 기술",
      subTitle: "BalTec은 3개의 서보 축을 정밀 제어하는 최초의 EA30 아티큘레이팅 롤러포밍 머신을 소개합니다.",
      body: "ELECTRIC EA30은 개별 3D 롤러 포밍을 가능하게 하여 복잡한 형상도 높은 정밀도로 가공할 수 있는 혁신적인 장비입니다.",
      primaryHref: "/product/roller-forming",
      primaryLabel: "자세히 보기",
      secondaryLabel: "EA30 Roller Forming",
      secondaryHref: "/product/roller-forming",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const current = slides[activeIndex];
  const router = useRouter();
  const handleNavigate = (href?: string, openNewWindow?: boolean) => {
  if (!href) return;

  if (openNewWindow) {
    window.open(href, "_blank", "noopener,noreferrer,width=1200,height=900");
  } else {
    router.push(href);
  }
};

  const categoryCards = [
    {
      title: "RIVETING UNITS",
      img: "/RNE.jpg",
      description:
        "BalTec 리베팅 유닛은 다양한 기계 설비는 물론 자동화 생산 라인, 로터리 인덱스 테이블, 이송 시스템 등에 유연하게 통합할 수 있도록 설계되었습니다.",
      ctaLabel: "Riveting Units",
      href: "/product/riveting-units",
    },
    {
      title: "RIVETING MACHINES",
      img: "/bench_top_rm.jpg",
      description:
        "유연하고 모듈화된 설계를 바탕으로, 리베팅은 물론 조이닝 및 포밍 공정까지 다양한 적용 분야에 최적화된 장비를 제공합니다.",
      ctaLabel: "Riveting Machines",
      href: "/product/riveting-machines",
    },
    {
      title: "WORK CELLS",
      img: "/rnc_rt_b.jpg",
      description:
        "표준형부터 고객 맞춤형까지 다양한 워크셀 솔루션을 제공하며, 높은 성능과 안전성을 동시에 만족합니다. 라운드 테이블 또는 벨트 이송 시스템과의 연동을 통해 생산 효율을 극대화할 수 있습니다.",
      ctaLabel: "Work-cells",
      href: "/product/work-cells",
    },
    {
      title: "CONTROL & MONITORING",
      img: "/hpp_25_bb.jpg",
      description:
        "정밀한 모니터링 및 제어 시스템을 통해 제조 공정의 품질을 향상시키고, 생산 시간을 효과적으로 단축할 수 있습니다.",
      ctaLabel: "Monitoring",
      href: "/product/monitoring",
    },
  ];

  return (
    <section className="relative z-0 w-full bg-white">
      {/* ============================
          HERO
      ============================= */}
      <div className="relative -mt-[140px] bg-black z-0">
        <div className="relative min-h-screen">
          {/* background */}
          <div className="pointer-events-none absolute inset-0 z-0">
            {slides.map((slide, i) => (
              <Image
                key={slide.bg}
                src={slide.bg}
                alt="BalTec hero background"
                fill
                priority={i === 0}
                className={`
                  object-cover object-center
                  transition-opacity duration-700 ease-out
                  ${i === activeIndex ? "opacity-100" : "opacity-0"}
                `}
              />
            ))}
          </div>

          {/* overlays */}
          <div className="pointer-events-none absolute inset-0 bg-black/25 z-[1]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-red-600/18 via-red-500/12 to-transparent z-[1]" />
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "60px 60px, 60px 60px",
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 via-black/25 to-transparent md:hidden z-[1]" />

          {/* arrows */}
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)}
            className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white/80 hover:bg-black/40 transition z-40"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev + 1) % slides.length)}
            className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white/80 hover:bg-black/40 transition z-40"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* content (CTA가 카드보다 항상 위) */}
          <div className="relative mx-auto max-w-[1200px] px-3 pt-24 md:pt-28 pb-[clamp(360px,44vh,520px)] grid grid-cols-12 gap-6 text-white z-30">
            <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col justify-center mt-8 md:mt-16">
              <div className="bg-black/25 md:bg-black/20 rounded-lg px-5 py-6 md:px-8 md:py-8 backdrop-blur-[2px] shadow-[0_16px_30px_rgba(0,0,0,0.35)] max-w-xl">
                <p className="text-[10px] md:text-xs font-semibold tracking-[0.22em] uppercase text-red-300">
                  {current.kicker}
                </p>

                <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                  {current.titleLine1}
                  <br className="hidden md:block" />
                  &nbsp;{current.titleLine2}
                </h2>

                <p className="mt-2 text-[11px] md:text-sm text-white/80">{current.subTitle}</p>

                <p className="mt-6 text-xs md:text-sm lg:text-base leading-relaxed text-white/95">
                  {current.body}
                </p>

                {/* CTA */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3 relative z-50 select-none">
                  <button
                    type="button"
                    onClick={() => handleNavigate(current.primaryHref, current.primaryOpenNewWindow)}
                    className="group relative inline-flex items-center justify-center px-7 h-11 bg-red-600 text-sm font-semibold rounded-[2px] shadow-md transition-all duration-200 hover:bg-red-700 hover:-translate-y-[1px] hover:shadow-[0_14px_28px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 active:translate-y-0 active:shadow-md"
                  >
                    <span className="absolute inset-0 rounded-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
                    <span className="relative inline-flex items-center">
                      {current.primaryLabel}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>handleNavigate(current.secondaryHref, current.secondaryOpenNewWindow)}
                    className="group relative inline-flex items-center gap-2 px-5 h-11 rounded-[2px] border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90 transition-all duration-200 hover:bg-white/16 hover:border-white/30 hover:-translate-y-[1px] hover:shadow-[0_14px_28px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 active:translate-y-0"
                  >
                    <span className="absolute -inset-px rounded-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                    <span className="relative">{current.secondaryLabel}</span>
                    <Search className="relative w-4 h-4 opacity-90 transition-transform duration-200 group-hover:scale-110" />
                  </button>
                </div>

                {/* dots */}
                <div className="mt-6 flex items-center gap-2 relative z-50 select-none">
                  {slides.map((_, i) => {
                    const isActive = i === activeIndex;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        aria-current={isActive}
                        className={`
                          group relative grid place-items-center
                          h-4 w-4 rounded-full cursor-pointer
                          transition-all duration-200
                          ${isActive ? "scale-110" : "opacity-80 hover:opacity-100 hover:scale-110"}
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80
                          focus-visible:ring-offset-2 focus-visible:ring-offset-black/40
                        `}
                      >
                        <span
                          className={`
                            pointer-events-none absolute inset-0 rounded-full blur-[12px]
                            transition-opacity duration-200
                            ${isActive ? "opacity-80 bg-white/50" : "opacity-0 group-hover:opacity-70 bg-white/45"}
                          `}
                        />
                        <span
                          className={`
                            pointer-events-none relative h-2.5 w-2.5 rounded-full transition-all duration-200
                            ${isActive ? "bg-white ring-1 ring-white/80" : "bg-white/35 group-hover:bg-white/85"}
                          `}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* right image */}
            <div className="col-span-12 md:col-span-4 lg:col-span-6 flex items-end justify-end">
              {rightTopImg && (
                <div className="hidden md:block mr-4 mb-10">
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <div className="pointer-events-none absolute -inset-2 rounded-xl bg-red-500/15 blur-2xl" />
                    <div className="relative rounded-xl bg-white/5 ring-1 ring-white/15 backdrop-blur-sm">
                      <Image
                        src={rightTopImg}
                        alt="BalTec Product highlight"
                        width={rightImgWidth}
                        height={rightImgHeight}
                        className="select-none object-contain"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* cut */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 w-full h-16 md:h-24 lg:h-28 bg-white z-10"
            style={{ clipPath: "polygon(0 100%, 60% 0, 100% 0, 100% 100%)" }}
          />

          {/* ============================
              CATEGORY CARDS
              ✅ 핵심: 랩퍼는 pointer-events-none (버튼 클릭 막지 않음)
              ✅ 카드(Link)만 pointer-events-auto
              ✅ 랩퍼 안 spacer 제거 (보이지 않는 큰 박스가 버튼을 가리던 원인)
          ============================= */}
          <div className="absolute left-0 right-0 bottom-0 z-20 pointer-events-none">
            <div className="mx-auto max-w-[1200px] px-6">
              <div className="translate-y-1/2 sm:translate-y-[42%] lg:translate-y-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryCards.map((card) => (
                    <Link
                      key={card.title}
                      href={card.href}
                      className="pointer-events-auto select-none group relative block cursor-pointer flex flex-col bg-white rounded-sm border border-gray-200 shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)] hover:-translate-y-2 overflow-hidden"
                    >
                      <div className="h-48 flex items-center justify-center border-b border-gray-100 bg-gray-50">
                        <Image
                          src={card.img}
                          alt={card.title}
                          width={500}
                          height={200}
                          className="object-contain"
                        />
                      </div>

                      <div className="flex-1 px-6 pt-6 pb-5 text-center">
                        <h4 className="text-sm font-extrabold tracking-[0.12em] text-gray-900 uppercase leading-snug min-h-[40px] flex items-center justify-center">
                          {card.title}
                        </h4>
                        <p className="mt-4 text-xs leading-6 text-gray-600 min-h-[48px]">
                          {card.description}
                        </p>
                      </div>

                      <div className="flex">
                        <div className="flex-1 h-11 inline-flex items-center justify-center bg-red-600 group-hover:bg-red-700 text-white text-xs font-semibold tracking-wide transition">
                          {card.ctaLabel}
                          <span className="ml-1 text-[11px]">➤</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ 카드가 absolute라서 필요한 여백은 “밖에서” 확보 (이제 클릭 방해 없음) */}
      <div className="h-[clamp(180px,24vh,260px)]" />

      {/* ABOUT spacer */}
      <div className="h-[clamp(140px,18vw,240px)] md:h-[clamp(120px,10vw,200px)]" />

      {/* ABOUT */}
      <div className="bg-white">
        <div className="mx-auto max-w-[980px] px-6 py-16 md:py-24 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-wider">
            ABOUT US <span className="text-red-600">,</span>
          </h3>

          <p className="mt-8 text-sm md:text-base leading-8 text-gray-700">{aboutText}</p>

          <div className="mt-10">
            <Link
              href="/company/intro"
              className="inline-flex items-center justify-center px-7 h-11 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              회사 소개 더 보기
            </Link>
          </div>
        </div>
      </div>

      {/* TECHNOLOGY */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <img src="/asdsdasd.jpg" alt="Technology" className="w-full h-[380px] object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[85%] h-[14px] bg-[#9e0b0f] rounded-tr-lg" />
          </div>

          <div>
            <h2 className="text-[32px] font-extrabold tracking-wide">
              TECHNOLOGY
              <span className="text-[#9e0b0f] ml-2">／</span>
            </h2>

            <h3 className="mt-3 text-xl font-bold text-[#9e0b0f]">사업기술</h3>

            <p className="mt-5 text-gray-700 leading-7">
              스위스 Pfäffikon에 위치한 BalTec 그룹은 Radial 리베팅, orbital 리베팅, roller
              forming(롤포밍) 그리고 최신 Electric 리베팅과 관련된 다양한 애플리케이션을 수행하며
              기술 개발을 이루어나고 있습니다. 강력한 기술력을 바탕으로 자동차, 항공산업을 포함한
              산업 전반에 걸쳐 다양한 실적을 이루내고 있으며 의료 장비 및 시계 등 특수 분야에도
              고급루 활용되고 있습니다.
            </p>
          </div>
        </div>

        <div className="relative">
          <h1
            className="text-[90px] font-extrabold text-gray-100 tracking-wide absolute right-6 bottom-[-40px] select-none"
            style={{ letterSpacing: "4px" }}
          >
            TECHNOLOGY
          </h1>
        </div>
      </section>

      {/* BALTEC MEDIA */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative bg-gradient-to-r from-[#9e0b0f] to-[#3c0003] rounded-xl p-10 flex flex-col justify-center text-white min-h-[260px] overflow-hidden">
            <h2 className="absolute top-6 left-8 text-[65px] font-extrabold opacity-[0.18] tracking-tight select-none">
              BALCTEC MEDIA
            </h2>
            <h2 className="relative text-4xl md:text-5xl font-extrabold tracking-tight">BALTEC MEDIA</h2>
          </div>

          <div className="rounded-xl overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
            <iframe
              className="w-full h-[340px] md:h-[420px]"
              src="https://www.youtube.com/embed/HxzVgpBFrP8"
              title="BalTec Media Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="w-full bg-white py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-gray-200 select-none">
            APPLICATIONS
          </h2>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
         <Link
  href="https://baltec.com/en"
  target="_blank"
  rel="noopener noreferrer"
  className="group block bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
  <div className="relative w-full h-56 bg-white flex items-center justify-center">
    <Image
      src="/main_cont05_01.jpg"
      alt="BalTec Group"
      fill
      className="object-contain p-6"
    />
  </div>
  <div className="bg-red-600 text-white text-sm font-semibold px-4 py-2">
    BALTEC Group
  </div>
</Link>

          <Link
  href="https://baltec.com/en/applications"
  target="_blank"
  rel="noopener noreferrer"
  className="group block bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
  <div className="relative w-full h-56">
    <Image
      src="/main_cont05_02.jpg"
      alt="BALTEC Applications"
      fill
      className="object-cover"
    />
  </div>
  <div className="bg-red-600 text-white text-sm font-semibold px-4 py-2">
    BALTEC Applications
  </div>
</Link>

          <Link
            href="/Baltec_Brochure_KR.pdf"
            className="group block bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative w-full h-56">
              <Image src="/main_cont05_03.jpg" alt="Brochure Download" fill className="object-cover" />
            </div>
            <div className="bg-red-600 text-white text-sm font-semibold px-4 py-2">Brochure Download</div>
          </Link>
        </div>
      </section>
    </section>
  );
}
