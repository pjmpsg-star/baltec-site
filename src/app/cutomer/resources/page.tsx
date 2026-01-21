// src/app/resources/page.tsx
import Link from "next/link";

type ResourceItem = {
  id: number;
  title: string;
  description?: string;
  date?: string;
  fileType?: string; // 예: PDF, XLSX, ZIP
  href?: string;     // 다운로드 또는 상세 링크
};

type ResourceSection = {
  key: string;
  title: string;
  description: string;
  items: ResourceItem[];
};

const SECTIONS: ResourceSection[] = [
  {
    key: "catalog",
    title: "카탈로그 · 브로슈어",
    description: "BalTec 표준 카탈로그, 제품 브로슈어, 소개 자료 등을 제공합니다.",
    items: [
      // 👉 나중에 이렇게 넣어서 사용하면 됩니다.
      // {
      //   id: 1,
      //   title: "BalTec RN / RNE 표준 카탈로그 (2025)",
      //   description: "RN · RNE 리베팅 머신 및 유닛 전체 라인업 카탈로그",
      //   date: "2025-01-15",
      //   fileType: "PDF",
      //   href: "/files/baltec-rn-rne-2025.pdf",
      // },
    ],
  },
  {
    key: "manual",
    title: "매뉴얼 · 기술자료",
    description: "사용 설명서, 설치 가이드, 유지보수 매뉴얼, 기술 자료 등을 제공합니다.",
    items: [],
  },
  {
    key: "software",
    title: "소프트웨어 · 기타",
    description: "설정 툴, 펌웨어, 샘플 데이터, 기타 참고 자료를 제공합니다.",
    items: [],
  },
];

export default function ResourcesPage() {
  return (
    <div className="w-full bg-white">
      {/* ============================
          HERO 영역
      ============================= */}
      <section className="relative w-full h-[260px] md:h-[320px] overflow-hidden">
        {/* 배경 이미지 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/h-er-rx.jpg')" }} // 원하는 이미지로 교체
        />

        {/* 어두운 오버레이 + 오른쪽 붉은 톤 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-red-900/60" />

        {/* 얇은 그리드 라인 */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-soft-light"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px, 60px 60px",
          }}
        />

        {/* 콘텐츠 */}
        <div className="relative h-full mx-auto max-w-[1200px] px-6 flex flex-col justify-center text-white">
          <p className="text-[11px] md:text-xs tracking-[0.26em] font-semibold uppercase text-red-300">
            BALTEC KOREA RESOURCES
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold leading-tight tracking-tight">
            자료실
          </h1>
          <p className="mt-3 text-xs md:text-sm text-white/80 max-w-xl">
            BalTec Korea의 카탈로그, 매뉴얼, 기술자료 및 소프트웨어를 다운로드하실 수
            있는 자료 공간입니다. 필요한 자료를 카테고리별로 찾으실 수 있습니다.
          </p>

          <div className="mt-6 h-[3px] w-24 bg-red-500 rounded-full" />
        </div>

        {/* 하단 화이트 컷팅 */}
        <div
          className="absolute bottom-0 left-0 w-full h-10 md:h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 20% 0, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* ============================
          카테고리 카드 (요약용)
      ============================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 pt-10 md:pt-14 pb-6 md:pb-10">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-lg md:text-xl font-extrabold tracking-tight text-gray-900">
              자료 카테고리
            </h2>
            <p className="hidden md:block text-xs text-gray-500">
              각 박스를 클릭하면 아래 해당 섹션으로 이동합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SECTIONS.map((section) => (
              <Link
                key={section.key}
                href={`#${section.key}`}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-600/0 group-hover:via-red-600/3 group-hover:to-red-600/6 transition-colors" />
                <div className="relative">
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-red-500 uppercase">
                    {section.key.toUpperCase()}
                  </p>
                  <h3 className="mt-1 text-sm md:text-base font-bold text-gray-900">
                    {section.title}
                  </h3>
                  <p className="mt-2 text-[11px] md:text-xs text-gray-500 line-clamp-2">
                    {section.description}
                  </p>
                  <div className="mt-3 inline-flex items-center text-[11px] font-medium text-red-600 group-hover:gap-1.5 gap-1 transition-all">
                    섹션으로 이동
                    <span className="text-[13px]">↘</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================
          섹션별 자료 테이블 (현재는 비어있음)
      ============================= */}
      <section className="bg-white pb-20 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 space-y-12 md:space-y-16">
          {SECTIONS.map((section) => (
            <div key={section.key} id={section.key} className="scroll-mt-24">
              {/* 섹션 헤더 */}
              <div className="flex items-end justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-lg md:text-xl font-extrabold tracking-tight text-gray-900">
                    {section.title}
                  </h2>
                  <p className="mt-1 text-xs md:text-sm text-gray-500">
                    {section.description}
                  </p>
                </div>
                {/* 나중에 카테고리별 업로드 버튼 등을 추가하고 싶으면 여기 */}
              </div>

              {/* 테이블/리스트 래퍼 */}
              <div className="rounded-xl border border-gray-200/80 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] bg-white">
                {/* 헤더 */}
                <div className="hidden md:grid grid-cols-[90px,1fr,120px,100px] bg-gray-50/90 text-[11px] font-semibold text-gray-500 uppercase tracking-[0.16em]">
                  <div className="px-5 py-3">날짜</div>
                  <div className="px-4 py-3">제목</div>
                  <div className="px-4 py-3">형식</div>
                  <div className="px-4 py-3 text-center">다운로드</div>
                </div>

                {/* 아직 데이터가 없을 때 기본 문구 */}
                {section.items.length === 0 && (
                  <div className="px-5 py-10 text-center text-sm text-gray-500">
                    등록된 자료가 없습니다.
                    <br className="hidden md:block" />
                    <span className="hidden md:inline">
                      &nbsp;필요한 자료를 준비 중입니다.
                    </span>
                  </div>
                )}

                {/* 나중에 자료 추가할 때 여기 map 돌리면 됩니다. */}
                {/* 
                {section.items.map((item, idx) => {
                  const last = idx === section.items.length - 1;
                  return (
                    <div
                      key={item.id}
                      className={[
                        "hidden md:grid grid-cols-[90px,1fr,120px,100px] items-center text-sm bg-white",
                        !last && "border-t border-gray-100",
                        "hover:bg-gray-50/90 transition-colors",
                      ].join(" ")}
                    >
                      <div className="px-5 py-3 text-[13px] text-gray-500">
                        {item.date}
                      </div>
                      <div className="px-4 py-3">
                        <p className="text-[13px] font-semibold text-gray-900">
                          {item.title}
                        </p>
                        {item.description && (
                          <p className="mt-1 text-[12px] text-gray-500 line-clamp-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="px-4 py-3 text-[12px] text-gray-500">
                        {item.fileType ?? "-"}
                      </div>
                      <div className="px-4 py-3 text-center text-[11px]">
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="inline-flex items-center justify-center rounded-full bg-red-600 px-3 py-1.5 text-[11px] font-medium text-white hover:bg-red-700 transition"
                          >
                            다운로드
                          </Link>
                        ) : (
                          "-"
                        )}
                      </div>
                    </div>
                  );
                })}

                // 모바일 카드 뷰도 필요하면 비슷하게 추가 
                */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
