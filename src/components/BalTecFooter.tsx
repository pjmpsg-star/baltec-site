// src/components/BalTecFooter.tsx
// Server Component (no "use client")

export default function BalTecFooter() {
  return (
    <footer className="mt-20 border-t border-gray-200">
      {/* 상단 강조 라인 */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-6 py-5 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 font-semibold">
            <div className="flex items-center gap-2">
              <span className="tracking-widest text-gray-800">TEL</span>
              <span className="text-red-600 text-xl">02-338-0770</span>
            </div>
            <span className="hidden md:inline-block text-gray-300">|</span>
            <div className="flex items-center gap-2">
              <span className="tracking-widest text-gray-800">FAX</span>
              <span className="text-red-600 text-xl">02-338-8496</span>
            </div>
            <span className="hidden md:inline-block text-gray-300">|</span>
            <div className="flex items-center gap-2">
              <span className="tracking-widest text-gray-800">E_MAIL</span>
              <a
                href="mailto:dongso@dongso.co.kr"
                className="text-red-600 text-xl hover:underline"
              >
                dongso@dongso.co.kr
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 바닥 정보 */}
      <div className="bg-gray-200">
        <div className="mx-auto max-w-[1200px] px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-gray-700">
            {/* 좌측 로고 텍스트 */}
            <div className="text-center md:text-left">
              <div className="text-4xl font-extrabold leading-none">
                <span className="text-gray-500">Bal</span>
                <span className="text-gray-400">Tec</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                by Dongso P.A.
                <br />
                Authorized reseller in Korea
              </div>
            </div>

            {/* 회사 정보 */}
            <div className="md:col-span-2 text-sm space-y-1">
              <div>
                <span className="font-semibold">COMPANY INFO.</span>
                <span className="mx-2 text-gray-400">|</span>
                <span>(주)동서피에이인터내쇼날</span>
                <span className="mx-2 text-gray-400">|</span>
                <span>대표 : 곽명근</span>
                <span className="mx-2 text-gray-400">|</span>
                <span>사업자 등록번호 : 105-81-72225</span>
              </div>
              <div>
                <span>주소 : 서울 송파구 백제고분로 181 동석빌딩 3층</span>
              </div>
              <div>
                <span>TEL : 02-338-0770</span>
                <span className="mx-2 text-gray-400">|</span>
                <span>FAX : 02-338-8496</span>
                <span className="mx-2 text-gray-400">|</span>
                <span>E-mail : dongso@dongso.co.kr</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Copyright © Dongso P.A. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
