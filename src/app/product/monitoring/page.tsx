// 예: src/app/technologies/process-monitoring/page.tsx
import Image from "next/image";

type Bullet = string;

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="relative">
      {/* background slant bar */}
      <div className="mx-auto max-w-[1200px] px-6" aria-hidden="true">
        <div
          className="h-[56px] bg-gray-200"
          style={{ clipPath: "polygon(0 100%, 60% 0, 100% 0, 100% 100%)" }}
        />
      </div>

      {/* label (FIX: no fixed height, allow wrapping) */}
      <div className="mx-auto max-w-[1200px] px-6 -mt-[56px] relative z-10">
        <div className="inline-block bg-gray-200 px-6 py-3 font-extrabold tracking-[0.06em] text-gray-800 leading-snug whitespace-normal break-words max-w-full">
          {title}
        </div>
      </div>

      {/* spacer so next section doesn't collide with header when title wraps */}
      <div className="h-6" aria-hidden="true" />
    </div>
  );
}

function SplitBlock({
  title,
  subtitle,
  body,
  bullets,
  imageSrc,
  imageAlt,
  reverse,
  gray,
}: {
  title: string;
  subtitle?: string;
  body: string;
  bullets?: Bullet[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  gray?: boolean;
}) {
  return (
    <section className={gray ? "bg-gray-50" : "bg-white"}>
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:py-20">
        <div
          className={[
            "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center",
            reverse ? "lg:[&>*:first-child]:order-2" : "",
          ].join(" ")}
        >
          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-md overflow-hidden shadow-[0_10px_28px_rgba(0,0,0,0.12)] bg-white">
              <div className="relative w-full aspect-[16/12]">
  <Image
    src={imageSrc}
    alt={imageAlt}
    fill
    className="object-cover object-center"
  />
</div>
            </div>
          </div>

          {/* TEXT */}
          <div className="min-w-0">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 whitespace-normal break-words">
              {title}
            </h3>

            {subtitle && (
              <p className="mt-3 text-sm font-semibold text-gray-700 whitespace-normal break-words">
                {subtitle}
              </p>
            )}

            <p className="mt-4 text-sm md:text-base leading-7 text-gray-700 whitespace-normal break-words">
              {body}
            </p>

            {bullets?.length ? (
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 min-w-0">
                    <span className="mt-2 inline-block w-[6px] h-[6px] rounded-full bg-red-600 shrink-0" />
                    <span className="leading-6 whitespace-normal break-words">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProcessMonitoringPage() {
  return (
    <main className="w-full bg-white">
      {/* =========================
          HERO
      ========================== */}
      <section className="relative bg-black">
        <div className="relative min-h-[520px] md:min-h-[560px]">
          <Image
            src="/h-hpp.jpg"
            alt="PROCESS CONTROL & TIME MONITORING"
            fill
            priority
            className="object-cover object-center opacity-95"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "60px 60px, 60px 60px",
            }}
          />

          <div className="relative mx-auto max-w-[1200px] px-6 pt-28 md:pt-32">
            <div className="max-w-[640px]">
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.22em] text-white/80 uppercase">
                TECHNOLOGIES
              </p>

              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-white">
                PROCESS CONTROL &<br />
                TIME MONITORING
              </h1>

              <div className="mt-4 h-[3px] w-14 bg-red-600" />

              <p className="mt-5 text-sm md:text-base leading-7 text-white/85">
                고품질 리베팅·포밍 공정에서는 <b>공정 제어</b>와{" "}
                <b>시간 기반 모니터링</b>이 품질 편차를 줄이고 불량·재작업을 낮춰,
                결과적으로 <b>시간과 비용을 절감</b>합니다.
              </p>
            </div>
          </div>

          {/* bottom cut */}
          <div
            className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-white"
            style={{ clipPath: "polygon(0 100%, 60% 0, 100% 0, 100% 100%)" }}
          />
        </div>
      </section>

      {/* FIX: hero 아래와 첫 헤더가 겹치지 않게 살짝 띄움 */}
      <div className="h-8 md:h-10" />

      {/* =========================
          1) PROCESS CONTROL AND MONITORING (Overview)
      ========================== */}
      <SectionHeader title="PROCESS CONTROL AND MONITORING" />
      <SplitBlock
        title="정밀도와 신뢰성을 위한 공정 제어"
        subtitle="For Precision & Reliability"
        body="자동차·전자·소비재·하드웨어·의료기술 등 다양한 산업에서 공정 제어와 모니터링은 안정적인 품질 확보의 핵심입니다. BalTec의 공정 제어 솔루션은 스트로크(가압/성형) 구간을 센서 기술로 추적해, 결과를 ‘데이터’로 남기고 공정 개선까지 연결할 수 있도록 돕습니다."
        bullets={[
          "규정된 품질 특성에 대한 준수/검증(Traceability 강화)",
          "공정 전체 문서화로 품질 증빙 용이",
          "불량 및 재작업 비용 감소",
          "동적 포밍 접촉점(NA) 기반으로 공정 시간 단축 가능",
          "공정 능력 및 제품 책임(리스크) 대응에 유리",
        ]}
        imageSrc="/ganag.jpg"
        imageAlt="Process control overview"
        gray={false}
      />

      {/* =========================
          2) PROCESS CONTROL HPPi (ELECTRIC)
      ========================== */}
      <SectionHeader title="PROCESS CONTROL HPPi (ELECTRIC)" />
      <SplitBlock
        title="HPPi (ELECTRIC) — ELECTRIC 라인 전용 PC 소프트웨어"
        body="HPPi PC 소프트웨어는 BalTec의 ELECTRIC 제품 라인에 맞춰 설계된 공정 모니터링/관리 솔루션입니다. 작업자(HMI) 중심으로 직관적인 화면을 제공하고, 공정 파라미터와 곡선을 체계적으로 기록·관리하여 품질 관리와 추적성을 강화합니다. (ELECTRIC 장비에 최적화된 구성)"
        bullets={[
          "공정 프로파일/레시피 기반 설정 및 관리",
          "시각화(곡선/데이터)로 공정 상태를 빠르게 파악",
          "데이터 기록으로 품질 추적성 및 리포팅 강화",
          "상위 제어 시스템 연동을 고려한 확장성",
        ]}
        imageSrc="/hppi-prom.jpg"
        imageAlt="HPPi Electric software"
        reverse
        gray
      />

      {/* =========================
          3) HPP-25 (CLASSIC) + RC-30 (TIME BASED)
      ========================== */}
      <SectionHeader title="PROCESS CONTROL HPP-25 (CLASSIC) / TIME BASED CONTROL RC-30" />
      <SplitBlock
        title="HPP-25 (CLASSIC) — 공정 곡선 기반 모니터링"
        body="HPP-25는 공정 데이터를 기반으로 작업 결과를 평가·분석할 수 있도록 돕는 클래식 공정 제어 장치입니다. 스트로크 진행 중 데이터를 기록하고, 곡선(프로세스 커브)을 통해 품질 편차를 빠르게 파악하여 안정적인 생산을 지원합니다."
        bullets={[
          "공정 커브(곡선) 시각화로 품질 편차 확인",
          "문서화/추적성 강화에 유리",
          "생산 환경에 맞춘 다양한 설정 옵션",
        ]}
        imageSrc="/HPP_25_2.jpg"
        imageAlt="HPP-25 classic"
        gray={false}
      />

      <div className="h-14 md:h-20" />
    </main>
  );
}
