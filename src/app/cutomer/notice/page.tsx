// src/app/notice/page.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type NoticeCategory = "전체" | "제품" | "서비스" | "이벤트" | "다운로드";

type Notice = {
  id: number;
  title: string;
  category: NoticeCategory;
  date: string;        // 그대로 표기할 문자열 (예: "2025-01-15")
  summary: string;
  href?: string;       // 상세 페이지 라우트 (없으면 #)
  isNew?: boolean;
};

const NOTICES: Notice[] = [
  
];

export default function NoticePage() {
  const [selectedCategory, setSelectedCategory] = useState<NoticeCategory>("전체");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return NOTICES.filter((n) => {
      const matchCategory =
        selectedCategory === "전체" || n.category === selectedCategory;

      const matchQuery =
        query.trim().length === 0 ||
        n.title.toLowerCase().includes(query.toLowerCase()) ||
        n.summary.toLowerCase().includes(query.toLowerCase());

      return matchCategory && matchQuery;
    });
  }, [selectedCategory, query]);

  const categories: NoticeCategory[] = [
    "전체",
    "제품",
    "서비스",
    "이벤트",
    "다운로드",
  ];

  return (
    <div className="w-full bg-white">
      {/* ============================
          HERO 영역
      ============================= */}
      <section className="relative w-full h-[260px] md:h-[320px] overflow-hidden">
        {/* 백그라운드 이미지 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/h-er-rx.jpg')" }} // 원하는 이미지로 교체
        />

        {/* 어두운 오버레이 + 오른쪽 붉은톤 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-red-900/65" />

        {/* 얇은 그리드 느낌 */}
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
            BALTEC KOREA NOTICE
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold leading-tight tracking-tight">
            공지사항
          </h1>
          <p className="mt-3 text-xs md:text-sm text-white/80 max-w-xl">
            BalTec Korea의 제품 소식, 서비스 일정, 세미나 및 다운로드 자료 개편 등
            주요 안내를 한 곳에서 확인하실 수 있습니다.
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
          필터 & 검색 바
      ============================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-4 md:pt-14 md:pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            {/* 카테고리 필터 */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={[
                      "px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide border transition-all",
                      isActive
                        ? "bg-red-600 border-red-600 text-white shadow-sm"
                        : "bg-white border-gray-200 text-gray-700 hover:border-red-400 hover:text-red-600",
                    ].join(" ")}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* 검색창 */}
            <div className="w-full md:w-64 lg:w-80">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="제목 또는 내용 검색"
                  className="w-full rounded-full border border-gray-200 px-4 py-2 text-xs md:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500/80 focus:border-red-500/80 placeholder:text-gray-400"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-gray-400">
                  ⌕
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          공지 리스트
      ============================= */}
      <section className="bg-white pb-20 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* 데스크톱: 테이블 스타일 */}
          <div className="hidden md:block rounded-xl border border-gray-200/80 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-[110px,120px,1fr,110px] bg-gray-50/80 text-[11px] font-semibold text-gray-500 uppercase tracking-[0.16em]">
              <div className="px-6 py-3">날짜</div>
              <div className="px-4 py-3">분류</div>
              <div className="px-4 py-3">제목</div>
              <div className="px-4 py-3 text-center">비고</div>
            </div>

            {filtered.length === 0 && (
              <div className="px-6 py-10 text-center text-sm text-gray-500">
                조건에 해당하는 공지사항이 없습니다.
              </div>
            )}

            {filtered.map((notice, idx) => {
              const last = idx === filtered.length - 1;
              return (
                <div
                  key={notice.id}
                  className={[
                    "grid grid-cols-[110px,120px,1fr,110px] items-center text-sm bg-white",
                    !last && "border-t border-gray-100",
                    "hover:bg-gray-50/90 transition-colors",
                  ].join(" ")}
                >
                  <div className="px-6 py-3 text-[13px] text-gray-500 font-medium">
                    {notice.date}
                  </div>
                  <div className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full border border-gray-300 px-2 py-0.5 text-[11px] font-medium text-gray-700">
                      {notice.category}
                    </span>
                  </div>
                  <div className="px-4 py-3">
                    <Link
                      href={notice.href ?? "#"}
                      className="group inline-flex items-center gap-2 text-[13px] text-gray-900 font-semibold hover:text-red-600"
                    >
                      <span>{notice.title}</span>
                      {notice.isNew && (
                        <span className="text-[10px] font-bold text-red-600">
                          NEW
                        </span>
                      )}
                    </Link>
                    <p className="mt-1.5 text-[12px] text-gray-500 line-clamp-1">
                      {notice.summary}
                    </p>
                  </div>
                  <div className="px-4 py-3 text-center text-[11px] text-gray-400">
                    {notice.href ? (
                      <Link
                        href={notice.href}
                        className="inline-flex items-center justify-center rounded-full border border-gray-300 px-3 py-1 text-[11px] font-medium text-gray-700 hover:border-red-500 hover:text-red-600 transition"
                      >
                        상세보기 →
                      </Link>
                    ) : (
                      "-"
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 모바일: 카드 스타일 */}
          <div className="md:hidden space-y-4">
            {filtered.length === 0 && (
              <div className="py-10 text-center text-sm text-gray-500 border border-gray-100 rounded-xl">
                조건에 해당하는 공지사항이 없습니다.
              </div>
            )}

            {filtered.map((notice) => (
              <div
                key={notice.id}
                className="rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-[0_6px_18px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] text-gray-500">
                    {notice.date}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gray-300 px-2 py-0.5 text-[11px] font-medium text-gray-700">
                    {notice.category}
                  </span>
                </div>

                <Link
                  href={notice.href ?? "#"}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-red-600"
                >
                  <span>{notice.title}</span>
                  {notice.isNew && (
                    <span className="text-[10px] font-bold text-red-600">
                      NEW
                    </span>
                  )}
                </Link>

                <p className="mt-1.5 text-[12px] text-gray-600">
                  {notice.summary}
                </p>

                {notice.href && (
                  <div className="mt-3 flex justify-end">
                    <Link
                      href={notice.href}
                      className="inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1.5 text-[11px] font-medium text-white hover:bg-red-700 transition"
                    >
                      상세보기
                      <span className="text-[12px]">→</span>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
