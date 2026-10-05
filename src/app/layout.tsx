import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lyneo Education | Nền Tảng Học Tập Nội Bộ",
  description: "Hệ thống học tập, bài giảng và quản lý tiến độ dành riêng cho học sinh trung học phổ thông.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ocean-bg text-ocean-text-primary font-sans selection:bg-ocean-cyan/20 selection:text-ocean-cyan">
        {children}
      </body>
    </html>
  );
}
