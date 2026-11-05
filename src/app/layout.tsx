import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "유튜브 채널 추천 | 한 땀 한 땀 수놓은 취향 수집",
  description: "손끝의 정성이 담긴 아름다운 유튜브 채널들을 추천합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#4A4036] selection:bg-[#EBDBC9] selection:text-[#3B3026]">
        {children}
      </body>
    </html>
  );
}
