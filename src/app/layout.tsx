// ===============================
// src/app/layout.tsx  (Server Component)
// 전체 페이지에 헤더/푸터 공통 적용. 절대 'use client' 넣지 마세요.
// ===============================
import type { Metadata } from "next";
import "./globals.css";
import BalTecHeader from "@/components/BalTecHeader";
import BalTecFooter from "@/components/BalTecFooter";

export const metadata: Metadata = {
  title: {
    default: "BalTec Korea",
    template: "%s | BalTec Korea",
  },
  description: "Authorized reseller in Korea — Dongso P.A.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-dvh bg-white text-gray-900">
        {/* 전역 헤더 */}
        <BalTecHeader />

        {/* 페이지 본문 */}
       <main className="pt-35">{children}</main> 

        {/* 전역 푸터 */}
        <BalTecFooter />
      </body>
    </html>
  );
}
