"use client";

import React, { useState } from "react";
import {
  Bell,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Flame,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Search,
  Sparkles,
  Trophy,
  User,
  Video,
  AlertCircle,
  ArrowRight,
  FileText,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function StudentDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-ocean-bg text-ocean-text-primary flex flex-col font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-ocean-surface/90 backdrop-blur-md border-b border-ocean-border px-4 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ocean-cyan to-ocean-violet flex items-center justify-center text-ocean-bg shadow-lg shadow-ocean-cyan/10">
            <GraduationCap className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight text-ocean-text-primary flex items-center gap-2">
              Lyneo Education
              <span className="text-xs px-2 py-0.5 rounded-full bg-ocean-cyan/10 text-ocean-cyan border border-ocean-cyan/20 font-medium hidden sm:inline-block">
                THPT 2026
              </span>
            </h1>
            <p className="text-xs text-ocean-text-secondary hidden sm:block">
              Nền tảng học tập nội bộ chuẩn chuyên sâu
            </p>
          </div>
        </div>

        {/* Search bar & actions */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ocean-text-secondary" />
            <input
              type="text"
              placeholder="Tìm kiếm bài giảng, tài liệu, đề thi (Ctrl + K)..."
              className="w-full bg-ocean-bg border border-ocean-border rounded-xl pl-10 pr-4 py-2 text-sm text-ocean-text-primary placeholder:text-ocean-text-secondary/60 focus:outline-none focus:border-ocean-cyan transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Notification Button */}
          <button
            aria-label="Thông báo"
            className="relative p-2.5 rounded-xl bg-ocean-surface-elevated border border-ocean-border text-ocean-text-secondary hover:text-ocean-cyan hover:border-ocean-cyan/40 transition-all"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-ocean-cyan animate-pulse" />
          </button>

          {/* Profile User */}
          <div className="flex items-center gap-3 pl-3 border-l border-ocean-border">
            <div className="w-9 h-9 rounded-xl bg-ocean-surface-elevated border border-ocean-border flex items-center justify-center text-ocean-cyan font-semibold text-sm">
              AN
            </div>
            <div className="hidden lg:block text-left">
              <div className="text-sm font-semibold text-ocean-text-primary">Nguyễn Văn An</div>
              <div className="text-xs text-ocean-text-secondary">Lớp 12A1 • Khối Chuyên</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-ocean-surface-elevated border border-ocean-border text-ocean-text-secondary"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex flex-col w-64 border-r border-ocean-border p-6 gap-6 bg-ocean-bg/50">
          <div className="space-y-1">
            <p className="px-3 text-xs font-semibold text-ocean-text-secondary uppercase tracking-wider mb-2">
              Menu Chính
            </p>
            <button
              onClick={() => setActiveTab("dashboard")}
              className={cn(
                "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
                activeTab === "dashboard"
                  ? "bg-ocean-cyan/10 text-ocean-cyan border border-ocean-cyan/20 shadow-sm"
                  : "text-ocean-text-secondary hover:text-ocean-text-primary hover:bg-ocean-surface"
              )}
            >
              <LayoutDashboard className="w-4 h-4" />
              Tổng quan
            </button>
            <button
              onClick={() => setActiveTab("courses")}
              className={cn(
                "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
                activeTab === "courses"
                  ? "bg-ocean-cyan/10 text-ocean-cyan border border-ocean-cyan/25 shadow-sm"
                  : "text-ocean-text-secondary hover:text-ocean-text-primary hover:bg-ocean-surface"
              )}
            >
              <BookOpen className="w-4 h-4" />
              Khóa học & Bài giảng
            </button>
            <button
              onClick={() => setActiveTab("schedule")}
              className={cn(
                "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
                activeTab === "schedule"
                  ? "bg-ocean-cyan/10 text-ocean-cyan border border-ocean-cyan/25 shadow-sm"
                  : "text-ocean-text-secondary hover:text-ocean-text-primary hover:bg-ocean-surface"
              )}
            >
              <Calendar className="w-4 h-4" />
              Lịch học & Trực tuyến
            </button>
            <button
              onClick={() => setActiveTab("exams")}
              className={cn(
                "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
                activeTab === "exams"
                  ? "bg-ocean-cyan/10 text-ocean-cyan border border-ocean-cyan/25 shadow-sm"
                  : "text-ocean-text-secondary hover:text-ocean-text-primary hover:bg-ocean-surface"
              )}
            >
              <FileText className="w-4 h-4" />
              Phòng luyện đề THPT
            </button>
          </div>

          <div className="space-y-1 pt-4 border-t border-ocean-border">
            <p className="px-3 text-xs font-semibold text-ocean-text-secondary uppercase tracking-wider mb-2">
              Cộng đồng & Hỗ trợ
            </p>
            <button
              onClick={() => setActiveTab("leaderboard")}
              className={cn(
                "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
                activeTab === "leaderboard"
                  ? "bg-ocean-cyan/10 text-ocean-cyan border border-ocean-cyan/25 shadow-sm"
                  : "text-ocean-text-secondary hover:text-ocean-text-primary hover:bg-ocean-surface"
              )}
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              Bảng xếp hạng tuần
            </button>
            <button
              onClick={() => setActiveTab("messages")}
              className={cn(
                "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
                activeTab === "messages"
                  ? "bg-ocean-cyan/10 text-ocean-cyan border border-ocean-cyan/25 shadow-sm"
                  : "text-ocean-text-secondary hover:text-ocean-text-primary hover:bg-ocean-surface"
              )}
            >
              <MessageSquare className="w-4 h-4" />
              Hỏi đáp giáo viên
            </button>
          </div>

          {/* Streak Card Widget in Sidebar */}
          <div className="mt-auto p-4 rounded-2xl bg-ocean-surface border border-ocean-border relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-ocean-text-secondary">Chuỗi học tập</div>
                <div className="text-base font-bold text-ocean-text-primary">12 Ngày liên tục</div>
              </div>
            </div>
            <p className="text-xs text-ocean-text-secondary">
              Tuyệt vời! Bạn chỉ còn 3 ngày nữa để đạt huy hiệu Chuyên cần tháng này.
            </p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 lg:p-8 space-y-6 max-w-5xl overflow-y-auto">
          {/* URGENT ACTION BANNER (UX Priority) */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-ocean-surface-elevated to-ocean-surface border border-ocean-cyan/30 shadow-lg shadow-ocean-cyan/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-ocean-cyan/10 text-ocean-cyan border border-ocean-cyan/20 shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold">
                    Hạn chót hôm nay • 21:00
                  </span>
                  <h3 className="font-bold text-base text-ocean-text-primary">
                    Nộp Bài Tập Về Nhà: Khảo Sát Hàm Số & Ứng Dụng (Giải Tích 12)
                  </h3>
                </div>
                <p className="text-sm text-ocean-text-secondary mt-1">
                  Đã có 34/42 học sinh trong lớp hoàn thành. Còn 5 bài tập tự luận và 10 câu trắc nghiệm vận dụng cao.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-ocean-cyan text-ocean-bg font-semibold text-sm hover:bg-ocean-cyan/90 transition-all shadow-md shadow-ocean-cyan/20 flex items-center gap-2">
              Nộp Bài Ngay
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-ocean-surface border border-ocean-border hover:border-ocean-border/80 transition-all">
              <div className="flex items-center justify-between text-ocean-text-secondary mb-3">
                <span className="text-sm font-medium">Tiến độ THPTQG</span>
                <Sparkles className="w-4 h-4 text-ocean-cyan" />
              </div>
              <div className="text-2xl font-bold text-ocean-text-primary">78%</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 h-2 bg-ocean-bg rounded-full overflow-hidden">
                  <div className="w-[78%] h-full bg-gradient-to-r from-ocean-cyan to-ocean-violet rounded-full" />
                </div>
                <span className="text-xs text-ocean-cyan font-medium">Mục tiêu 28đ</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-ocean-surface border border-ocean-border hover:border-ocean-border/80 transition-all">
              <div className="flex items-center justify-between text-ocean-text-secondary mb-3">
                <span className="text-sm font-medium">Bài tập hoàn thành</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-ocean-text-primary">24 / 30</div>
              <p className="text-xs text-emerald-400 mt-2 font-medium flex items-center gap-1">
                ↑ 4 bài so với tuần trước
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ocean-surface border border-ocean-border hover:border-ocean-border/80 transition-all">
              <div className="flex items-center justify-between text-ocean-text-secondary mb-3">
                <span className="text-sm font-medium">Điểm trung bình tuần</span>
                <Trophy className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-bold text-ocean-text-primary">8.8 <span className="text-sm font-normal text-ocean-text-secondary">/ 10</span></div>
              <p className="text-xs text-ocean-text-secondary mt-2">
                Xếp hạng #4 toàn khối 12
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ocean-surface border border-ocean-border hover:border-ocean-border/80 transition-all">
              <div className="flex items-center justify-between text-ocean-text-secondary mb-3">
                <span className="text-sm font-medium">Thời gian học tập</span>
                <Clock className="w-4 h-4 text-ocean-violet" />
              </div>
              <div className="text-2xl font-bold text-ocean-text-primary">18.5 <span className="text-sm font-normal text-ocean-text-secondary">giờ</span></div>
              <p className="text-xs text-ocean-violet mt-2 font-medium">
                Đạt 92% kế hoạch tuần
              </p>
            </div>
          </div>

          {/* Two-Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 columns: Upcoming Live Sessions & Core Subjects */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upcoming Live Class */}
              <div className="p-6 rounded-2xl bg-ocean-surface border border-ocean-border">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg text-ocean-text-primary flex items-center gap-2">
                    <Video className="w-5 h-5 text-ocean-cyan" />
                    Lịch học trực tuyến hôm nay
                  </h2>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    Sắp diễn ra lúc 19:30
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-ocean-surface-elevated border border-ocean-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-ocean-violet/10 text-ocean-violet border border-ocean-violet/20">
                        Toán Học 12
                      </span>
                      <span className="text-xs text-ocean-text-secondary flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> 19:30 - 21:00
                      </span>
                    </div>
                    <h4 className="font-bold text-ocean-text-primary text-base">
                      Chuyên đề: Phương pháp tọa độ trong không gian Oxyz (Buổi 4)
                    </h4>
                    <p className="text-xs text-ocean-text-secondary">
                      Giảng viên: Thầy Trần Minh Tuấn • Phòng học trực tuyến nội bộ số 02
                    </p>
                  </div>
                  <button className="px-4 py-2.5 rounded-xl bg-ocean-cyan text-ocean-bg font-semibold text-sm hover:bg-ocean-cyan/90 transition-all shadow-md shadow-ocean-cyan/15 flex items-center gap-2 shrink-0">
                    Vào Phòng Học
                    <Video className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Core Subjects Progress */}
              <div className="p-6 rounded-2xl bg-ocean-surface border border-ocean-border">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg text-ocean-text-primary flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-ocean-violet" />
                    Môn học trọng tâm THPTQG
                  </h2>
                  <button className="text-xs text-ocean-cyan font-medium hover:underline flex items-center gap-1">
                    Xem tất cả <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "Toán học 12", progress: 82, lessons: "48/60 bài", color: "from-ocean-cyan to-blue-600" },
                    { name: "Vật lý 12", progress: 75, lessons: "36/48 bài", color: "from-ocean-violet to-purple-600" },
                    { name: "Hóa học 12", progress: 90, lessons: "45/50 bài", color: "from-emerald-400 to-teal-600" },
                    { name: "Tiếng Anh 12", progress: 68, lessons: "30/45 bài", color: "from-amber-400 to-orange-600" },
                  ].map((subject, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-ocean-surface-elevated border border-ocean-border hover:border-ocean-cyan/40 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-sm text-ocean-text-primary group-hover:text-ocean-cyan transition-colors">
                          {subject.name}
                        </span>
                        <span className="text-xs font-medium text-ocean-text-secondary">{subject.lessons}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-ocean-bg rounded-full overflow-hidden">
                          <div
                            className={cn("h-full rounded-full bg-gradient-to-r", subject.color)}
                            style={{ width: `${subject.progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-ocean-text-primary">{subject.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: Announcements & Weekly Leaderboard */}
            <div className="space-y-6">
              {/* Teacher Notes & Announcements */}
              <div className="p-6 rounded-2xl bg-ocean-surface border border-ocean-border">
                <h3 className="font-bold text-base text-ocean-text-primary mb-4 flex items-center gap-2">
                  <Bell className="w-4 h-4 text-ocean-cyan" />
                  Thông báo từ giáo viên
                </h3>
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-ocean-surface-elevated border border-ocean-border space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-ocean-text-secondary">
                      <span className="text-ocean-cyan font-medium">Thầy Nguyễn Văn Hùng</span>
                      <span>Hôm nay</span>
                    </div>
                    <p className="text-xs text-ocean-text-primary font-medium leading-relaxed">
                      Đã cập nhật đề thi thử THPTQG số 04 môn Toán. Các em hoàn thành trước Chủ Nhật để hệ thống phân tích phổ điểm.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-ocean-surface-elevated border border-ocean-border space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-ocean-text-secondary">
                      <span className="text-ocean-violet font-medium">Cô Lê Thị Mai</span>
                      <span>Hôm qua</span>
                    </div>
                    <p className="text-xs text-ocean-text-primary font-medium leading-relaxed">
                      Lịch phụ đạo Lý nâng cao chuyển sang tối thứ 5 hàng tuần. Chúc các em ôn thi thật tốt!
                    </p>
                  </div>
                </div>
              </div>

              {/* Weekly Leaderboard */}
              <div className="p-6 rounded-2xl bg-ocean-surface border border-ocean-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-base text-ocean-text-primary flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    Bảng Vàng Khối 12
                  </h3>
                  <span className="text-xs text-ocean-text-secondary">Tuần này</span>
                </div>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: "Trần Minh Quân", class: "12A2", score: "98.5đ", badge: "🥇" },
                    { rank: 2, name: "Nguyễn Văn An", class: "12A1", score: "96.0đ", badge: "🥈" },
                    { rank: 3, name: "Lê Hoàng Yến", class: "12A3", score: "94.5đ", badge: "🥉" },
                    { rank: 4, name: "Phạm Gia Hân", class: "12A1", score: "92.0đ", badge: "4" },
                  ].map((student) => (
                    <div
                      key={student.rank}
                      className={cn(
                        "flex items-center justify-between p-3 rounded-xl border transition-all",
                        student.rank === 2
                          ? "bg-ocean-cyan/10 border-ocean-cyan/30 text-ocean-text-primary"
                          : "bg-ocean-surface-elevated border-ocean-border text-ocean-text-secondary"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 text-center font-bold text-sm text-ocean-cyan">
                          {student.badge}
                        </span>
                        <div>
                          <div className="text-xs font-semibold text-ocean-text-primary">{student.name}</div>
                          <div className="text-[10px] text-ocean-text-secondary">{student.class}</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-ocean-cyan">{student.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden sticky bottom-0 z-50 bg-ocean-surface border-t border-ocean-border flex items-center justify-around py-2.5 px-4">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={cn(
            "flex flex-col items-center gap-1 text-xs font-medium",
            activeTab === "dashboard" ? "text-ocean-cyan" : "text-ocean-text-secondary"
          )}
        >
          <LayoutDashboard className="w-5 h-5" />
          Tổng quan
        </button>
        <button
          onClick={() => setActiveTab("courses")}
          className={cn(
            "flex flex-col items-center gap-1 text-xs font-medium",
            activeTab === "courses" ? "text-ocean-cyan" : "text-ocean-text-secondary"
          )}
        >
          <BookOpen className="w-5 h-5" />
          Khóa học
        </button>
        <button
          onClick={() => setActiveTab("schedule")}
          className={cn(
            "flex flex-col items-center gap-1 text-xs font-medium",
            activeTab === "schedule" ? "text-ocean-cyan" : "text-ocean-text-secondary"
          )}
        >
          <Calendar className="w-5 h-5" />
          Lịch học
        </button>
        <button
          onClick={() => setActiveTab("exams")}
          className={cn(
            "flex flex-col items-center gap-1 text-xs font-medium",
            activeTab === "exams" ? "text-ocean-cyan" : "text-ocean-text-secondary"
          )}
        >
          <FileText className="w-5 h-5" />
          Luyện đề
        </button>
      </nav>
    </div>
  );
}
