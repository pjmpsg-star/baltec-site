// src/app/estimate/page.tsx
import Link from "next/link";

export default function EstimatePage() {
  return (
    <div className="w-full bg-white">
      {/* ===========================
          HERO 영역
      ============================ */}
      <section className="relative w-full h-[230px] md:h-[280px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/h-er-rx.jpg')" }} // 원하는 배경으로 교체
        />

        {/* 어둡게 + 레드톤 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-red-900/40" />

        {/* 그리드 라인 살짝 */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px, 60px 60px",
          }}
        />

        {/* 콘텐츠 */}
        <div className="relative h-full max-w-[1100px] mx-auto px-6 flex flex-col justify-center text-white">
          <p className="text-[10px] md:text-xs font-semibold tracking-[0.28em] uppercase text-red-200">
            BALTEC KOREA SERVICE
          </p>
          <h1 className="mt-2 text-2xl md:text-3xl lg:text-[32px] font-extrabold tracking-tight">
            견적 문의
          </h1>
          <p className="mt-3 text-xs md:text-sm text-white/85 max-w-xl leading-relaxed">
            BalTec 리베팅 장비 및 응용 설비에 대한 견적을 요청하실 수 있는 전용 페이지입니다.
            기본 정보와 요구 사항을 남겨주시면 담당 엔지니어가 빠르게 상담 드립니다.
          </p>

          <div className="mt-4 h-[3px] w-20 rounded-full bg-red-500" />
        </div>

        {/* 하단 화이트 컷팅 */}
        <div
          className="absolute bottom-0 left-0 w-full h-12 md:h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 55% 0, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* ===========================
          FORM 영역
      ============================ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* 안내 텍스트 */}
          <div className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              장비/프로젝트 견적 요청
            </h2>
            <p className="mt-2 text-sm md:text-[15px] text-gray-600 leading-relaxed">
              아래 양식을 작성해 주시면, 담당자가 접수 후
              <span className="font-semibold text-red-600"> 영업일 기준 최대 1~2일 이내</span>에
              연락을 드립니다. 가능하다면 사용 용도, 생산 수량, 공정 조건 등을 함께 적어주세요.
            </p>
          </div>

          {/* 카드 형태의 폼 */}
          <div className="bg-gray-50/80 border border-gray-200 rounded-2xl shadow-md p-6 md:p-8">
            <form
              action="https://getform.io/f/axovozvb"
              method="POST"
              className="space-y-6"
            >
              {/* honeypot: 스팸 방지 */}
              <input type="hidden" name="_gotcha" className="hidden" />

              {/* 상단 2열 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    회사명 / 기관명
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="예) (주)동서피에이인터내셔날"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    담당자 성함
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="예) 홍길동"
                  />
                </div>
              </div>

              {/* 연락처 / 이메일 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    연락처
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="예) 010-0000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    이메일
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="견적서 수신용 이메일"
                  />
                </div>
              </div>

              {/* 장비 종류 / 적용 산업 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    관심 장비 / 솔루션
                  </label>
                  <select
                    name="product_type"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">선택해 주세요</option>
                    <option value="electric-servo-rivet">Electric servo rivet</option>
                    <option value="riveting-units">Riveting units</option>
                    <option value="riveting-machines">Riveting machines</option>
                    <option value="work-cells">Work cells / 자동화 셀</option>
                    <option value="control-monitoring">Control &amp; Monitoring</option>
                    <option value="etc">기타 / 아직 정해지지 않음</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    적용 산업 / 제품군 <span className="text-gray-400">(선택)</span>
                  </label>
                  <input
                    type="text"
                    name="application"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="예) 자동차 시트 프레임, 의료기기 하우징 등"
                  />
                </div>
              </div>

              {/* 본문 */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  상세 문의 내용
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder={`예) 
- 현재 사용 중인 공정/장비
- 예상 연간 생산 수량
- 적용 소재 및 리베팅 지름
- 원하는 납기 / 설치 일정 등`}
                />
              </div>

              {/* 뉴스레터 선택 (원하면 삭제해도 됨) */}
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <input
                  id="subscribe"
                  type="checkbox"
                  name="subscribe"
                  value="yes"
                  className="h-3.5 w-3.5 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <label htmlFor="subscribe">
                  BalTec Korea의 제품 소식 및 기술 리포트 메일을 가끔 받겠습니다.
                </label>
                <input type="hidden" name="subscribe" value="no" />
              </div>

              {/* 제출 버튼 */}
              <div className="pt-4 flex items-center justify-between gap-4">
                <p className="text-[11px] md:text-xs text-gray-500">
                  ※ 전송 버튼 클릭 시, 입력하신 정보가 Getform.io를 통해 BalTec Korea 담당자에게 전달됩니다.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 h-11 rounded-md bg-red-600 text-sm font-semibold text-white shadow-md hover:bg-red-700 transition"
                >
                  견적 문의 보내기
                </button>
              </div>
            </form>
          </div>

          {/* 하단 작은 링크 (선택) */}
          <div className="mt-6 text-[11px] text-gray-500">
            기타 기술 문의는{" "}
            <Link href="/service" className="underline hover:text-red-600">
              A/S · 서비스 페이지
            </Link>{" "}
            를 참고해 주세요.
          </div>
        </div>
      </section>
    </div>
  );
}
