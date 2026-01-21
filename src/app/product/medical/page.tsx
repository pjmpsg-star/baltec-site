import Image from "next/image";
import Link from "next/link";

const HERO_BG = "/h-op-zange.jpg"; // ✅ 상단 배너 배경 이미지 (네가 교체)
const SECTION_IMG_1 = "/surgery-tools-3_0.jpg"; // ✅ 1번째 섹션 이미지 (수술기구)
const SECTION_IMG_2 = "/laporoskopiezange.jpg"; // ✅ 2번째 섹션 이미지 (우수한 소재 '오른쪽')
const VIDEO_URL = "/microriveting.mp4"; // ✅ 3번째(동영상) 주소 네가 넣기 (예: https://.../video.mp4)
const SECTION_IMG_4 = "/quality-control.jpg"; // ✅ 4번째 섹션 이미지 (품질관리 '오른쪽')

export default function HighPrecisionMedicalDevicesPage() {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="relative w-full">
        <div className="relative h-[420px] w-full">
          <Image
            src={HERO_BG}
            alt="초정밀 의료기기"
            fill
            priority
            className="object-cover"
          />
          {/* dark overlay like screenshot */}
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0">
            <div className="mx-auto flex h-full w-full max-w-6xl items-center px-6">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl font-extrabold tracking-wide md:text-5xl">
                  HIGH-PRECISION
                </h1>
                <div className="mt-2 space-y-1 text-4xl font-light leading-tight md:text-5xl">
                  <div>MEDICAL</div>
                  <div>DEVICES</div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-white/90 md:text-base">
                  수술 도구, 의료기기, 보철물의 생산에는 초정밀 제조 기술이 필요합니다.
                </p>

                {/* breadcrumb */}
                <div className="mt-10 text-xs font-semibold text-white/85">
                  <span className="opacity-90">HOME</span>
                  <span className="mx-2 opacity-70">/</span>
                  <span className="opacity-90">HIGH-PRECISION MANUFACTURING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 - SURGICAL INSTRUMENTS (white background) */}
      <section className="w-full bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <SectionTitlePill title="SURGICAL INSTRUMENTS" />
            <h2 className="mt-6 text-2xl font-semibold text-neutral-800">
              수술 기구
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-700">
              메스, 가위, 클램프, 포셉과 같은 수술 도구는 최고의 주의와 품질 기준에 따라
              제작되어야 합니다.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-700">
              특히 복강경 수술용 기구, 보철 임플란트 및 체내 삽입형 기기에는 정밀도와
              신뢰성이 더욱 중요합니다.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-700">
              생산 정밀도는 제품의 품질과 신뢰성을 결정하며, 이는 치료 결과와 환자의 안전에
              직접적인 영향을 미칩니다.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <CardImage
              src={SECTION_IMG_1}
              alt="수술 기구 이미지"
              className="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 - SUPERIOR MATERIALS (white background, image right like screenshot) */}
      <section className="w-full bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <SectionTitlePill title="SUPERIOR MATERIALS" />
            <h2 className="mt-6 text-2xl font-semibold text-neutral-800">
              우수한 소재
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-700">
              스테인리스강, 구리, 티타늄, 코발트-크롬, 금, 백금 등 다양한 금속은 높은
              내구성과 내식성, 강도를 바탕으로 의료 제품 생산에 널리 사용됩니다.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-700">
              또한 이러한 소재는 알레르기 반응 위험을 줄이고 세척을 용이하게 해, 빈번한
              멸균이 필요한 의료 환경에서 위생적 사용을 돕습니다.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-700">
              당사는 요구 사양과 적용 분야에 맞추어 다양한 소재 성형이 가능합니다.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <CardImage
              src={SECTION_IMG_2}
              alt="우수한 소재 이미지"
              className="aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 - HIGH-PRECISION PRODUCTION (grey band like screenshot; media left, text right) */}
      <section className="w-full bg-neutral-600">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
          <div>
            {/* video placeholder (3rd media) */}
            <MediaCard>
              {VIDEO_URL ? (
                <video
                  className="h-full w-full object-cover"
                  src={VIDEO_URL}
                  controls
                  playsInline
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-black/10 text-sm text-white/80">
                  동영상 주소를 VIDEO_URL에 넣어주세요
                </div>
              )}
            </MediaCard>
          </div>

          <div className="text-white">
            <SectionTitlePill title="HIGH-PRECISION PRODUCTION" variant="dark" />

            <h2 className="mt-6 text-2xl font-semibold text-white">
              초정밀 생산
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              최신 제조 기술(예: 리베팅 장비를 활용한 콜드 포밍 및 다양한 콜드 포밍 장비)은
              수술·의료 기기 생산의 정밀도를 크게 향상시킵니다. 지능형 공정 제어 및 모니터링을
              통해 기기의 기능적 신뢰성을 확보하고, 요구 사양에 정확히 부합하는 생산이
              가능합니다.
            </p>

            <p className="mt-4 leading-relaxed text-white/90">
              최소침습 수술의 확산으로 기구는 더 길고, 더 얇고, 더 작아지고 있으며, 마이크로
              조인트의 정밀 제조가 요구됩니다.
            </p>

            <p className="mt-4 leading-relaxed text-white/90">
              컴퓨터 제어 BalTec 콜드 포밍 장비는 다양한 의료 제품 생산에 적용되어, 마이크론
              단위의 정밀도와 1mm 이하의 소재 직경 가공을 지원합니다.
            </p>

            <p className="mt-4 leading-relaxed text-white/90">
              제어 시스템 “HPPi”는 현장 또는 원격으로 Windows PC를 통해 BalTec 서보 리베터
              ELECTRIC을 제어할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 - QUALITY CONTROL (grey band like screenshot; text left, image right) */}
      <section className="w-full bg-neutral-600">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-14 md:grid-cols-2 md:items-start">
          <div className="text-white">
            <SectionTitlePill title="QUALITY CONTROL" variant="dark" />

            <h2 className="mt-6 text-2xl font-semibold text-white">
              품질 관리
            </h2>

            <p className="mt-4 text-lg font-semibold leading-relaxed text-white">
              모든 수술 기구는 생산 중과 생산 후, 사용 준비가 완료되기 전까지 엄격한 품질
              검사를 거칩니다.
            </p>

            <p className="mt-4 leading-relaxed text-white/90">
              검사는 표면 마감, 기능성, 치수 규격 준수, 청결도 등 다양한 항목을 포함할 수
              있습니다. 수술 기구의 정확도는 단순한 기술 요건을 넘어 환자 안전과 직결됩니다.
              불량 또는 부정확한 기구 사용은 합병증 및 수술 시간 증가로 이어질 수 있으며, 이는
              회복 가능성을 낮추고 고품질 제조 기준 유지의 중요성을 보여줍니다.
            </p>

            <p className="mt-4 leading-relaxed text-white/90">
              따라서 정밀 장비 투자와 올바른 공정 관리는 기술적 선택을 넘어, 제공하는 의료
              서비스의 품질에 대한 신뢰를 강화하는 핵심 요소입니다.
            </p>
          </div>

          <div>
            <CardImage
              src={SECTION_IMG_4}
              alt="품질 관리 이미지"
              className="aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      {/* IN A NUTSHELL (white section like screenshot) */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-extrabold tracking-wide text-neutral-900">
            IN A NUTSHELL
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-700">
            정밀성과 신뢰성이 중요한 시대, 당사의 콜드 포밍(Cold Forming) 기술은 새로운 기준을
            제시합니다.
          </p>

          <p className="mt-6 text-sm text-neutral-600">
            아래는 초정밀 분야에서 당사 콜드 포밍 장비를 특징짓는 핵심 요소입니다.
          </p>

          <ul className="mt-6 space-y-3 text-neutral-700">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-red-600" />
              <span>
                <b>극한 정밀도:</b> 가장 까다로운 정밀 요구에도 대응하는 연결부(조인트) 정확도를
                제공합니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-red-600" />
              <span>
                <b>강성과 섬세함의 균형:</b> 견고한 구조를 바탕으로 민감한 공정 처리까지
                안정적으로 수행합니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-red-600" />
              <span>
                <b>최상급 기술력:</b> 첨단 공정 제어로 복잡한 적용에서도 일관된 정밀 리베팅
                프로세스를 지원합니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-red-600" />
              <span>
                <b>폭넓은 활용성:</b> 항공, 의료, 정밀 기계 등 다양한 분야에 정확하고 신뢰할 수
                있는 솔루션을 제공합니다.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* POSSIBLE FIELDS OF APPLICATION (grey strip like screenshot) */}
      <section className="w-full bg-neutral-600">
        <div className="mx-auto max-w-6xl px-6 py-14 text-white">
          <h2 className="text-2xl font-extrabold tracking-wide">
            POSSIBLE FIELDS OF APPLICATION
          </h2>

          <p className="mt-4 leading-relaxed text-white/90">
            의료 기술을 이야기할 때 우리는 흔히 ‘인체 의료’만 떠올리곤 합니다. 하지만 정밀
            도구와 공정이 필요한 분야는 훨씬 넓습니다.
          </p>

          <p className="mt-4 leading-relaxed text-white/90">
            예를 들어 치과의사와 족부 전문의 역시 주사기, 캐뉼라, 진단 기기 등 다양한
            기구를 사용하며, 일반 의료에서 사용하는 기구와 유사한 요구 조건을 가집니다.
          </p>

          <p className="mt-4 leading-relaxed text-white/90">
            수의학 또한 종종 간과되는 영역입니다. 반려동물·가축 진료에는 정밀한 수술,
            마취, 첨단 진단 장비가 필요하며, 인체 의료와 동일한 수준의 정밀도가 요구됩니다.
          </p>

          <p className="mt-4 font-semibold leading-relaxed text-white">
            의료 기술은 병원과 진료실에만 국한되지 않습니다 — 헬스케어 전 영역에서 핵심 기반이
            됩니다.
          </p>

          {/* optional: back link */}
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
            >
              홈으로 돌아가기 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ----------------- UI bits ----------------- */

function CardImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className="rounded-sm bg-white shadow-lg ring-1 ring-black/5">
      <div className={`relative w-full ${className}`}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}

function MediaCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-sm bg-white shadow-lg ring-1 ring-black/10">
      <div className="relative aspect-[16/9] w-full bg-white">{children}</div>
    </div>
  );
}

/**
 * Screenshot처럼 "가운데 리본/필" 느낌의 제목 바
 * - variant="dark"면 회색 배경 섹션에서도 잘 보이게
 */
function SectionTitlePill({
  title,
  variant = "light",
}: {
  title: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div className="flex w-full justify-center md:justify-start">
      <div
        className={[
          "relative inline-flex items-center justify-center",
          "px-6 py-2 font-extrabold tracking-wide",
          isDark
            ? "bg-white/90 text-neutral-900"
            : "bg-neutral-200 text-neutral-800",
          "rounded-md",
        ].join(" ")}
      >
        {/* 작은 삼각 느낌(스크린샷의 꺾임 흉내) */}
        <span
          className={[
            "absolute -left-3 top-1/2 -translate-y-1/2",
            "h-0 w-0 border-y-[14px] border-y-transparent",
            isDark
              ? "border-r-[12px] border-r-white/90"
              : "border-r-[12px] border-r-neutral-200",
          ].join(" ")}
        />
        <span
          className={[
            "absolute -right-3 top-1/2 -translate-y-1/2",
            "h-0 w-0 border-y-[14px] border-y-transparent",
            isDark
              ? "border-l-[12px] border-l-white/90"
              : "border-l-[12px] border-l-neutral-200",
          ].join(" ")}
        />
        {title}
      </div>
    </div>
  );
}
