"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  EyeOff,
  GraduationCap,
  KeyRound,
  Lock,
  Mail,
  Moon,
  Sun,
  User,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type AuthMode = "login" | "register" | "forgot";

type AuthFormState = {
  fullName: string;
  email: string;
  password: string;
  remember: boolean;
};

const TABS: { id: AuthMode; label: string }[] = [
  { id: "login", label: "Đăng nhập" },
  { id: "register", label: "Đăng ký" },
  { id: "forgot", label: "Quên mật khẩu" },
];

const MODE_COPY: Record<AuthMode, { heading: string; description: string; cta: string }> = {
  login: {
    heading: "Chào mừng trở lại",
    description: "Tiếp tục hành trình học tập của bạn.",
    cta: "Đăng nhập",
  },
  register: {
    heading: "Tạo tài khoản mới",
    description: "Bắt đầu học tập cùng hàng nghìn học viên.",
    cta: "Tạo tài khoản",
  },
  forgot: {
    heading: "Khôi phục mật khẩu",
    description: "Nhập email, chúng tôi sẽ gửi liên kết đặt lại mật khẩu.",
    cta: "Gửi liên kết",
  },
};

const ORBS = [
  { size: 420, top: "-8%", left: "-10%", color: "from-orange-500/40 to-amber-400/20", duration: 18, x: [0, 60, -20, 0], y: [0, 40, 80, 0] },
  { size: 360, top: "55%", left: "70%", color: "from-cyan-500/35 to-teal-500/20", duration: 22, x: [0, -70, 20, 0], y: [0, -50, 30, 0] },
  { size: 280, top: "65%", left: "-5%", color: "from-teal-500/25 to-sky-400/15", duration: 20, x: [0, 50, 90, 0], y: [0, -40, 10, 0] },
  { size: 240, top: "5%", left: "72%", color: "from-amber-400/30 to-orange-500/10", duration: 16, x: [0, -40, 30, 0], y: [0, 60, 20, 0] },
];

const PARTICLES = [
  { top: "12%", left: "18%", size: 6, delay: 0, duration: 9, tone: "bg-orange-400" },
  { top: "22%", left: "82%", size: 4, delay: 1.2, duration: 11, tone: "bg-cyan-400" },
  { top: "38%", left: "8%", size: 5, delay: 2.4, duration: 10, tone: "bg-amber-300" },
  { top: "48%", left: "92%", size: 3, delay: 0.6, duration: 12, tone: "bg-sky-400" },
  { top: "68%", left: "24%", size: 4, delay: 1.8, duration: 9, tone: "bg-teal-400" },
  { top: "78%", left: "76%", size: 6, delay: 3, duration: 13, tone: "bg-orange-300" },
  { top: "88%", left: "46%", size: 3, delay: 0.3, duration: 10, tone: "bg-cyan-300" },
  { top: "8%", left: "52%", size: 4, delay: 2, duration: 11, tone: "bg-amber-400" },
  { top: "58%", left: "56%", size: 3, delay: 4, duration: 14, tone: "bg-teal-300" },
  { top: "30%", left: "64%", size: 5, delay: 1, duration: 12, tone: "bg-orange-400" },
];

export default function LoginPage() {
  const [isDark, setIsDark] = useState(true);
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<AuthFormState>({
    fullName: "",
    email: "",
    password: "",
    remember: true,
  });

  const updateField = <K extends keyof AuthFormState>(key: K, value: AuthFormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Plug backend logic here, e.g. signIn(form), signUp(form), resetPassword(form.email)
  };

  const copy = MODE_COPY[mode];

  return (
    <div className={cn(isDark && "dark")}>
      <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#fdf8f1] px-4 py-12 text-slate-800 transition-colors duration-500 dark:bg-[#090d16] dark:text-slate-100">
        <AnimatedBackground />

        <ThemeToggle isDark={isDark} onToggle={() => setIsDark((v) => !v)} />

        <motion.section
          aria-labelledby="auth-heading"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-md"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-orange-400/50 via-transparent to-cyan-400/40 opacity-70 blur-[1px] dark:opacity-60"
          />
          <div className="relative rounded-[28px] border border-white/60 bg-white/60 p-6 shadow-[0_20px_60px_-15px_rgba(249,115,22,0.25)] backdrop-blur-2xl sm:p-8 dark:border-white/10 dark:bg-slate-900/55 dark:shadow-[0_20px_80px_-20px_rgba(6,182,212,0.25)]">
            <BrandHeader />

            <ModeTabs mode={mode} onChange={setMode} />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mode}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="mb-6">
                  <h2 id="auth-heading" className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    {copy.heading}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{copy.description}</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  {mode === "register" && (
                    <AuthInput
                      label="Họ và tên"
                      icon={User}
                      type="text"
                      autoComplete="name"
                      placeholder="Nguyễn Văn A"
                      value={form.fullName}
                      onChange={(v) => updateField("fullName", v)}
                    />
                  )}

                  <AuthInput
                    label="Email"
                    icon={Mail}
                    type="email"
                    autoComplete="email"
                    placeholder="ban@lyneo.edu.vn"
                    value={form.email}
                    onChange={(v) => updateField("email", v)}
                  />

                  {mode !== "forgot" && (
                    <AuthInput
                      label="Mật khẩu"
                      icon={Lock}
                      type={showPassword ? "text" : "password"}
                      autoComplete={mode === "register" ? "new-password" : "current-password"}
                      placeholder="••••••••"
                      value={form.password}
                      onChange={(v) => updateField("password", v)}
                      trailing={
                        <button
                          type="button"
                          onClick={() => setShowPassword((v) => !v)}
                          aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                          className="rounded-md p-1 text-slate-400 transition-colors hover:text-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 dark:hover:text-cyan-300"
                        >
                          {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                        </button>
                      }
                    />
                  )}

                  {mode === "login" && (
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex cursor-pointer items-center gap-2 text-slate-600 select-none dark:text-slate-300">
                        <input
                          type="checkbox"
                          checked={form.remember}
                          onChange={(e) => updateField("remember", e.target.checked)}
                          className="size-4 cursor-pointer rounded border-slate-300 accent-orange-500"
                        />
                        Ghi nhớ đăng nhập
                      </label>
                      <button
                        type="button"
                        onClick={() => setMode("forgot")}
                        className="font-medium text-orange-600 transition-colors hover:text-orange-500 dark:text-cyan-300 dark:hover:text-cyan-200"
                      >
                        Quên mật khẩu?
                      </button>
                    </div>
                  )}

                  <SubmitButton icon={mode === "forgot" ? KeyRound : ArrowRight}>{copy.cta}</SubmitButton>
                </form>

                {mode !== "forgot" ? (
                  <SocialLogin />
                ) : (
                  <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                    Đã nhớ mật khẩu?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="font-medium text-orange-600 hover:text-orange-500 dark:text-cyan-300 dark:hover:text-cyan-200"
                    >
                      Quay lại đăng nhập
                    </button>
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-500">
            Bằng việc tiếp tục, bạn đồng ý với{" "}
            <a href="#" className="underline-offset-4 hover:text-orange-500 hover:underline">
              Điều khoản
            </a>{" "}
            và{" "}
            <a href="#" className="underline-offset-4 hover:text-orange-500 hover:underline">
              Chính sách bảo mật
            </a>
            .
          </p>
        </motion.section>
      </main>
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.12),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className={cn("absolute rounded-full bg-gradient-to-br blur-3xl opacity-70 dark:opacity-60", orb.color)}
          style={{ width: orb.size, height: orb.size, top: orb.top, left: orb.left }}
          animate={{ x: orb.x, y: orb.y, scale: [1, 1.08, 0.95, 1] }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className={cn("absolute rounded-full opacity-60 shadow-[0_0_12px_currentColor]", p.tone)}
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    </div>
  );
}

function ThemeToggle({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      aria-label={isDark ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
      className="fixed top-4 right-4 z-20 flex size-11 items-center justify-center overflow-hidden rounded-full border border-white/60 bg-white/60 text-orange-500 shadow-lg backdrop-blur-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 sm:top-6 sm:right-6 dark:border-white/10 dark:bg-slate-800/60 dark:text-cyan-300"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <Moon className="size-5" /> : <Sun className="size-5" />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

function BrandHeader() {
  return (
    <header className="mb-7 flex flex-col items-center text-center">
      <motion.div
        initial={{ rotate: -12, scale: 0.8 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.15 }}
        className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-400 to-cyan-400 p-[1.5px] shadow-[0_8px_30px_-6px_rgba(249,115,22,0.6)]"
      >
        <div className="flex size-full items-center justify-center rounded-[14px] bg-white/90 dark:bg-slate-900/90">
          <GraduationCap className="size-7 text-orange-500 dark:text-amber-400" aria-hidden="true" />
        </div>
      </motion.div>
      <h1 className="bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent text-balance dark:to-cyan-400">
        Lyneo Education
      </h1>
      <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">Học tập thông minh, tương lai rạng ngời</p>
    </header>
  );
}

function ModeTabs({ mode, onChange }: { mode: AuthMode; onChange: (mode: AuthMode) => void }) {
  return (
    <LayoutGroup id="auth-tabs">
      <div
        role="tablist"
        aria-label="Chế độ xác thực"
        className="mb-7 grid grid-cols-3 gap-1 rounded-2xl border border-slate-200/70 bg-slate-100/70 p-1 dark:border-white/5 dark:bg-slate-950/50"
      >
        {TABS.map((tab) => {
          const active = tab.id === mode;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(tab.id)}
              className={cn(
                "relative rounded-xl px-2 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 sm:text-sm",
                active
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200",
              )}
            >
              {active && (
                <motion.span
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-xl bg-white shadow-sm ring-1 ring-orange-200/70 dark:bg-slate-800 dark:ring-cyan-400/20"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}

type AuthInputProps = {
  label: string;
  icon: LucideIcon;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  trailing?: ReactNode;
};

function AuthInput({ label, icon: Icon, type, value, onChange, placeholder, autoComplete, trailing }: AuthInputProps) {
  const id = useId();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="flex flex-col gap-1.5"
    >
      <label htmlFor={id} className="text-xs font-medium tracking-wide text-slate-600 uppercase dark:text-slate-400">
        {label}
      </label>
      <div className="group relative flex items-center rounded-xl border border-slate-200 bg-white/70 transition-all duration-300 focus-within:border-orange-400 focus-within:shadow-[0_0_0_4px_rgba(249,115,22,0.15)] hover:border-slate-300 dark:border-white/10 dark:bg-slate-950/40 dark:hover:border-white/20 dark:focus-within:border-cyan-400/70 dark:focus-within:shadow-[0_0_0_4px_rgba(6,182,212,0.15)]">
        <Icon
          aria-hidden="true"
          className="pointer-events-none ml-3.5 size-4 shrink-0 text-slate-400 transition-colors duration-300 group-focus-within:text-orange-500 dark:group-focus-within:text-cyan-300"
        />
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="h-12 w-full bg-transparent px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
        />
        {trailing && <div className="mr-2.5 flex items-center">{trailing}</div>}
      </div>
    </motion.div>
  );
}

function SubmitButton({ children, icon: Icon }: { children: ReactNode; icon: LucideIcon }) {
  return (
    <motion.button
      type="submit"
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
      className="group relative mt-2 flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(249,115,22,0.7)] transition-shadow duration-300 hover:shadow-[0_14px_40px_-8px_rgba(249,115,22,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
      <span className="relative">{children}</span>
      <Icon className="relative size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
    </motion.button>
  );
}

function SocialLogin() {
  return (
    <div className="mt-7">
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300 dark:to-white/15" />
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Hoặc tiếp tục với</span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-300 dark:to-white/15" />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <SocialButton label="Google" icon={<GoogleIcon />} />
        <SocialButton
          label="Zalo"
          icon={
            <span className="flex size-5 items-center justify-center rounded-md bg-[#0068ff] text-[9px] font-bold tracking-tight text-white">
              Zalo
            </span>
          }
        />
      </div>
    </div>
  );
}

function SocialButton({ label, icon }: { label: string; icon: ReactNode }) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      aria-label={`Tiếp tục với ${label}`}
      className="flex h-11 items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white/70 text-sm font-medium text-slate-700 transition-colors hover:border-orange-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-200 dark:hover:border-cyan-400/40 dark:hover:bg-slate-900/70"
    >
      {icon}
      {label}
    </motion.button>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.5 14.6 2.5 12 2.5 6.8 2.5 2.6 6.7 2.6 12s4.2 9.5 9.4 9.5c5.4 0 9-3.8 9-9.2 0-.6-.07-1.1-.16-1.6H12z" />
      <path fill="#FBBC05" d="M2.6 12c0 1.5.36 3 1 4.3l3.4-2.6c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7L3.6 7.7C3 9 2.6 10.5 2.6 12z" />
      <path fill="#4285F4" d="M21 12.3c0-.6-.07-1.1-.16-1.6H12v3.9h5.5c-.26 1.3-1 2.4-2.2 3.2l3.3 2.6c2-1.8 3.4-4.6 3.4-8.1z" />
      <path fill="#34A853" d="M12 21.5c2.6 0 4.8-.9 6.5-2.4l-3.3-2.6c-.9.6-2 1-3.3 1-2.5 0-4.6-1.7-5.4-4l-3.4 2.6c1.6 3.2 4.9 5.4 8.9 5.4z" />
    </svg>
  );
}
