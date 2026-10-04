import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập | Lyneo Education",
  description: "Đăng nhập, đăng ký hoặc khôi phục mật khẩu tài khoản Lyneo Education.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
    { media: "(prefers-color-scheme: light)", color: "#fdf8f1" },
  ],
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
