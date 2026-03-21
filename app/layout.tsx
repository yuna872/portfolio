import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김유나 | Frontend Developer",
  description:
    "프론트엔드 개발자 김유나의 포트폴리오. React, TypeScript, Next.js 기반 웹 개발.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-neutral-900 bg-white">
        {children}
      </body>
    </html>
  );
}
