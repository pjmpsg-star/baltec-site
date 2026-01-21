// src/app/product/riveting-machines/page.tsx
import Image from "next/image";

type MachineCard = {
  title: string; // 보통 영어(제품명/카테고리명)
  body: string;  // 한국어 설명(원하시면 영어도 섞어서 가능)
  img: string;   // 사용자가 넣을 이미지 경로
};

function MachineGrid({ items }: { items: MachineCard[] }) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((it) => (
          <div
            key={it.title}
            className="bg-white border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex flex-col min-h-[520px]"
          >
            {/* 이미지 */}
            <div className="relative w-full h-[220px] bg-white">
              <Image
                src={it.img}
                alt={it.title}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* 텍스트 */}
            <div className="flex-1 px-8 pb-10 pt-2 text-center">
              <h3 className="mt-2 text-[14px] font-extrabold tracking-[0.08em] text-gray-900 uppercase leading-snug whitespace-pre-line">
                {it.title}
              </h3>

              <p className="mt-6 text-[12px] leading-6 text-gray-700 whitespace-pre-line">
                {it.body}
              </p>
            </div>

            {/* 하단 버튼/돋보기 없음 */}
            <div className="h-6" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RivetingMachinesPage() {
  // =========================
  // HERO (Product Finder 버튼 삭제)
  // 한국 사이트: 제품 카테고리명/라인명은 영어 유지 + 설명은 한국어 위주
  // =========================
  const hero = {
    bg: "/your-hero-bg.jpg", // TODO: 교체
    headingTop: "FINEST",
    headingMid: "RIVETING",
    headingBottom: "MACHINES",
    // 설명: 한국어 + 필요하면 괄호로 영어 보조
    desc:
      "유연한 모듈형 설계를 바탕으로, 고객님의 적용 분야에 가장 적합한 장비를 찾을 수 있습니다.\n" +
      "리베팅(Riveting), 조이닝(Joining), 롤러 포밍(Roller Forming) 공정에 최적화된 솔루션을 제공합니다.",
    // breadcrumb: 영어 메뉴명은 유지해도 자연스럽습니다
    breadcrumb: "HOME  /  PRODUCTS  /  BALTEC RIVETING MACHINES",
  };

  // =========================
  // 섹션 A: RADIAL RIVETING MACHINES (회색 배경 + 4카드)
  // =========================
  const radialIntro =
    '“RN” Line 기반의 모든 리베팅 머신은 안정적인 주물 컬럼(cast column)과 테이블을 갖춘 완성형 워크스테이션입니다.\n' +
    "2-핸드 제어(two-hand control)에는 세이프티 릴레이(safety relay), 높이 조절(height adjustment), 클램핑(clamping)이 포함됩니다.";

  const radialCards: MachineCard[] = [
    {
      title: "BENCH TOP RIVETING\nMACHINES",
      img: "/your-img-01.png", // TODO
      body:
        "RN Line의 벤치탑 타입 워크스테이션입니다.\n" +
        "2-핸드 제어(세이프티 릴레이 포함), 높이 조절, 클램핑 기능을 갖추고 있습니다.\n" +
        "RN 081 ~ RN 331, RL 타입은 표준 공압(pneumatic) 패키지 구성이며,\n" +
        "RN 381은 표준 유압(hydraulic) 패키지와 작업등(work lamp)이 포함됩니다.\n" +
        "RN은 Radial Riveting, RL은 Roller Forming 적용에 적합합니다.",
    },
    {
      title: "PEDESTAL RIVETING\nMACHINES",
      img: "/your-img-02.png", // TODO
      body:
        "RNS 시리즈는 길거나 높은 부품 작업에 적합한 페데스탈 타입 워크스테이션입니다.\n" +
        "작업 테이블은 조절 가능하며 리베팅 유닛은 고정되어 안정적인 작업이 가능합니다.\n" +
        "2-핸드 스타트 버튼(세이프티 릴레이 포함)을 제공하며,\n" +
        "RNS 081 ~ RNS 331은 표준 공압 패키지,\n" +
        "RNS 381 ~ RNS 481은 표준 유압 패키지 구성을 포함합니다.",
    },
    {
      title: "WITH ROTARY\nINDEXING TABLE",
      img: "/your-img-03.png", // TODO
      body:
        "RNR 시리즈는 Rotary Indexing Table(기본 6스테이션, 옵션 4스테이션)과 함께 구성되는 완성형 워크스테이션입니다.\n" +
        "세이프티 인클로저(safety enclosure), 2-핸드 버튼(세이프티 릴레이 포함) 또는 풋 페달(foot pedal) 옵션,\n" +
        "요청 시 리벳 완료 부품의 공압 배출(pneumatic ejection), 표준 공압 시스템 및 작업등(work lamp)을 포함합니다.",
    },
    {
      title: "DOUBLE RIVETING\nMACHINES",
      img: "/your-img-04.png", // TODO
      body:
        "RND 시리즈는 한 프레임에 2개의 리베팅 머신을 구성한 더블 타입 워크스테이션입니다.\n" +
        "벤치탑 모델: RND 081 ~ RND 231 / 스탠드얼론: RND 281 ~ RND 331\n" +
        "양쪽 유닛을 동기 이동시켜 동시에 리베팅 작업이 가능하며,\n" +
        "Time Based Control RC-30이 2개 유닛을 동일 타이밍으로 제어합니다.\n" +
        "2-핸드 스타트 버튼(세이프티 릴레이 포함) 옵션을 제공합니다.",
    },
  ];

  // =========================
  // 섹션 B: ELECTRIC JOINING MACHINES (흰 배경 + 4카드)
  // =========================
  const electricIntro =
    "Electric Joining Machines는 공정 헤드(process head)를 교체할 수 있어,\n" +
    "하나의 장비로 다양한 조이닝(Joining) 방식을 구현할 수 있습니다.\n" +
    "표준 구성부터 완전 커스터마이징 솔루션까지 폭넓게 제공됩니다.";

  const electricCards: MachineCard[] = [
    {
      title: "ELECTRIC BENCH TOP\nFORMING MACHINES",
      img: "/your-img-05.png", // TODO
      body:
        "ELECTRIC 테이블 타입 장비는 다양한 조이닝 공정에 대응하는 완성형 워크스테이션으로 제공됩니다.\n" +
        "필요 가압력(force) 조건에 따라 장비 사이즈 및 구성이 달라질 수 있습니다.",
    },
    {
      title: "ELECTRIC WITH C-\nFRAME",
      img: "/your-img-06.png", // TODO
      body:
        "C-Frame 구조(용접 강 구조)는 슬림하고 공간 효율이 높아 시스템 통합(integration)에 유리합니다.\n" +
        "적용 공정에 따라 Cold Forming 프로세스를 선택할 수 있습니다.",
    },
    {
      title: "ELECTRIC WORKCELLS",
      img: "/your-img-07.png", // TODO
      body:
        "ELECTRIC 서보 리베팅(servo riveting) 기반의 워크셀(workcell) 구성입니다.\n" +
        "HPPI 공정 제어(process control)를 탑재하며,\n" +
        "세이프티 인클로저는 라이트 배리어(light barrier) 또는 리프팅 도어(lifting door)로 구성됩니다.",
    },
    {
      title: "ELECTRIC CUSTOMIZED\nVERSIONS",
      img: "/your-img-08.png", // TODO
      body:
        "Rotary Indexing Table 또는 Workcell 기반의 맞춤형 생산 솔루션입니다.\n" +
        "요청 시 가공 완료 부품 자동 배출(automatic ejection),\n" +
        "OK/NOK 판정 또는 라이트 센서(light sensor)를 통한 삽입 상태 감지 등\n" +
        "검사/전처리(pre-inspection) 옵션을 포함할 수 있습니다.",
    },

    
  ];
  const orbitalIntroKo =
  "새롭게 추가된 TN/E 장비를 통해 BalTec의 “Orbital Line” 라인업이 완성되었습니다.\n" +
  "장비의 가압력 범위는 1.5 kN 미만의 소형 모델부터, 최대 35 kN까지 성형력을 적용할 수 있는 대형 모델까지 폭넓게 구성됩니다.";

  const orbitalCards: MachineCard[] = [
  {
    title: "ORBITAL MACHINES\nWITH PROCESS CONTROL",
    img: "/your-orbital-01.png", // TODO: 이미지 교체
    body:
      "오비탈 콜드포밍(Orbital Cold Forming) 테이블형 장비로,\n" +
      "통합 설치는 물론 독립형 작업 공간에서도 사용하기 좋습니다.\n" +
      "공정 헤드 주변 보호 구조로 안전성을 확보해 CE 요구 사항에 대응할 수 있으며,\n" +
      "BalTec 특유의 정밀도와 작업 효율을 함께 제공합니다.",
  },
  {
    title: "ORBITAL MACHINES\nWITH TIME BASED CONTROL",
    img: "/your-orbital-02.png", // TODO
    body:
      "오비탈 콜드포밍 테이블형 장비에\n" +
      "Time Based Control(시간 기반 제어)을 구성한 모델입니다.\n" +
      "장비 성능과 CE 적합성 측면에서 표준 수준의 구성을 갖추고 있으며,\n" +
      "2-핸드 컨트롤(two-hand control) 방식으로 안전한 작업을 지원합니다.",
  },
  {
    title: "ORBITAL MACHINES\nFOR INTEGRATORS",
    img: "/your-orbital-03.png", // TODO
    body:
      "시스템 통합(Integration)을 위한 패키지 구성이며,\n" +
      "라인 생산 환경에서 사용하기 쉽도록 번들 형태로 제공됩니다.\n" +
      "신뢰성 높은 정밀 작업이 가능하고, 장시간 운전에도 안정적입니다.\n" +
      "본 구성에서는 공정 제어 장치(HPP)를 포함합니다.",
  },
  {
    title: "CUSTOMIZED ORBITAL\nMACHINES",
    img: "/your-orbital-04.png", // TODO
    body:
      "요청 사양에 맞춘 커스터마이징 구성이 가능한 오비탈 장비입니다.\n" +
      "다양한 옵션 업그레이드 및 요구 조건 반영이 가능하며,\n" +
      "모듈형 설계로 유연성이 뛰어납니다.\n" +
      "필요 시 안전 인클로저(enclosure)와 슬라이딩 테이블(sliding table)도 적용할 수 있습니다.",
  },
];


  return (
    <main className="w-full bg-white">
      {/* =========================
          HERO (버튼 제거 완료)
      ========================== */}
      <section className="relative w-full h-[520px] md:h-[560px] lg:h-[620px] overflow-hidden bg-black">
        <Image
          src={hero.bg}
          alt="BalTec Riveting Machines"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* 오버레이 */}
        <div className="absolute inset-0 bg-black/35" />

        {/* 좌측 텍스트 */}
        <div className="relative mx-auto max-w-[1200px] h-full px-6 flex items-center">
          <div className="max-w-[560px] text-white">
            <h1 className="leading-[0.95] font-extrabold tracking-tight">
              <span className="block text-[52px] md:text-[64px]">
                {hero.headingTop}
              </span>
              <span className="block text-[52px] md:text-[64px]">
                {hero.headingMid}
              </span>
              <span className="block text-[64px] md:text-[78px]">
                {hero.headingBottom}
              </span>
            </h1>

            <div className="mt-4 h-[3px] w-20 bg-red-600" />

            <p className="mt-6 text-[14px] md:text-[15px] leading-6 text-white/90 whitespace-pre-line">
              {hero.desc}
            </p>

            <p className="mt-10 text-[12px] tracking-wide text-white/80">
              {hero.breadcrumb}
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          섹션 타이틀 바: RIVETING MACHINES
      ========================== */}
      <section className="relative bg-white">
        <div className="h-12 bg-white" />
        <div className="relative">
          <div
            className="absolute inset-x-0 -top-10 h-16 bg-gray-200"
            style={{ clipPath: "polygon(0 100%, 18% 0, 82% 0, 100% 100%)" }}
          />
          <div className="relative mx-auto max-w-[1200px] px-6 py-6">
            <h2 className="text-center text-[28px] md:text-[34px] font-extrabold tracking-wide text-gray-800">
              RIVETING MACHINES
            </h2>
          </div>
        </div>
      </section>

      {/* =========================
          RADIAL RIVETING MACHINES (회색 섹션)
      ========================== */}
      <section className="w-full bg-[#9c9a99]">
        <div className="mx-auto max-w-[1200px] px-6 pt-14">
          <h2 className="text-center text-[26px] md:text-[30px] font-extrabold tracking-wide text-gray-900">
            RADIAL RIVETING MACHINES
          </h2>

          <p className="mt-8 text-center text-white text-[16px] leading-7 whitespace-pre-line">
            {radialIntro}
          </p>
        </div>

        <div className="mt-10">
          <MachineGrid items={radialCards} />
        </div>
      </section>

      {/* =========================
          ELECTRIC JOINING MACHINES (흰 섹션)
      ========================== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1200px] px-6 pt-16">
          <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-wide text-gray-900">
            ELECTRIC JOINING MACHINES
          </h2>

          <p className="mt-6 text-gray-800 text-[16px] leading-8 whitespace-pre-line">
            {electricIntro}
          </p>
        </div>

        <div className="mt-10">
          <MachineGrid items={electricCards} />
        </div>
      </section>

      <section className="w-full bg-[#9c9a99]">
  <div className="mx-auto max-w-[1200px] px-6 pt-14">
    <h2 className="text-center text-[26px] md:text-[30px] font-extrabold tracking-wide text-gray-900">
      ORBITAL RIVETING MACHINES
    </h2>

    <p className="mt-8 text-center text-white text-[16px] leading-7 whitespace-pre-line">
      {orbitalIntroKo}
    </p>
  </div>

  <div className="mt-10">
    <MachineGrid items={orbitalCards} />
  </div>
</section>

      <div className="h-10" />
    </main>
  );
}
