"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type AuthState = "LOGIN" | "REGISTER" | "FORGOT_PASSWORD";

/* =========================================
   COMPONENT: HIỆU ỨNG HẠT NETWORK (CANVAS)
   (Chỉ chạy trên Desktop, nối theo chuột)
   ========================================= */
const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    const mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas!.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas!.height || this.y < 0) this.speedY = -this.speedY;
      }
      draw() {
        ctx!.fillStyle = "rgba(56, 189, 248, 0.5)"; // Màu Cyan
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const initParticles = () => {
      particlesArray = [];
      const numberOfParticles = (canvas.width * canvas.height) / 12000; // Mật độ hạt
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connectParticles = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Nối các hạt với nhau
          if (distance < 100) {
            opacityValue = 1 - distance / 100;
            ctx!.strokeStyle = `rgba(139, 92, 246, ${opacityValue * 0.2})`; // Violet mờ
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx!.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx!.stroke();
          }
        }
        // Nối hạt với chuột (Tạo cảm giác lan tỏa/tế bào)
        const dxMouse = particlesArray[a].x - mouse.x;
        const dyMouse = particlesArray[a].y - mouse.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distanceMouse < 150) {
          opacityValue = 1 - distanceMouse / 150;
          ctx!.strokeStyle = `rgba(56, 189, 248, ${opacityValue * 0.5})`; // Cyan rõ hơn
          ctx!.lineWidth = 1.5;
          ctx!.beginPath();
          ctx!.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx!.lineTo(mouse.x, mouse.y);
          ctx!.stroke();
        }
      }
    };

    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 hidden md:block" />;
};

/* =========================================
   MAIN COMPONENT: AUTH PAGE
   ========================================= */
export default function AuthPage() {
  const [authState, setAuthState] = useState<AuthState>("LOGIN");
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit:", { authState, email, password, name });
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    enter: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <main className="min-h-screen bg-[#070B14] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* 1. BACKGROUND EFFECTS */}
      {/* Mạng lưới hạt tương tác chuột (Chỉ hiện Desktop) */}
      <ParticleNetwork />

      {/* Các khối màu Blob di chuyển (Rõ hơn trên Mobile) */}
      <motion.div 
        animate={{ 
          x: ["-10%", "10%", "-10%"], y: ["-10%", "20%", "-10%"], scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-[-20%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#38BDF8] rounded-full blur-[100px] md:blur-[150px] opacity-15 md:opacity-[0.08] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ 
          x: ["10%", "-10%", "10%"], y: ["20%", "-10%", "20%"], scale: [1.2, 1, 1.2] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-[-20%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#8B5CF6] rounded-full blur-[100px] md:blur-[150px] opacity-15 md:opacity-[0.06] pointer-events-none z-0" 
      />

      {/* 2. KHỐI ĐĂNG NHẬP (Z-Index cao hơn để không bị canvas đè) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[420px] bg-[#101A2C]/70 backdrop-blur-2xl border border-[#24344E] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative z-10"
      >
        
        {/* Header Nhận diện */}
        <div className="mb-8 text-center flex flex-col items-center">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-white rounded-full p-1 mb-4 shadow-[0_0_20px_rgba(56,189,248,0.3)] cursor-pointer"
          >
            <Image 
              src="/favicon.ico" alt="Logo THPT Trần Phú" 
              width={20} 
              height={20}
              className="w-full h-full object-contain rounded-full"
            />
          </motion.div>
          
          {/* Text Gradient chuyển động lướt ánh sáng */}
          <motion.h1 
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% auto" }}
            className="text-2xl font-bold bg-gradient-to-r from-[#38BDF8] via-[#EAF2FF] to-[#8B5CF6] text-transparent bg-clip-text mb-1"
          >
            Lyneo Education
          </motion.h1>
          <h2 className="text-sm font-medium text-[#91A4C1] mb-5 uppercase tracking-wider">
            THPT Trần Phú
          </h2>
        </div>

        {/* Khu vực Form */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.form 
              key={authState} variants={formVariants} initial="hidden" animate="enter" exit="exit"
              onSubmit={handleSubmit} className="space-y-4"
            >
              {authState === "REGISTER" && (
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#91A4C1] ml-1">Họ và tên</label>
                  <div className="relative">
                    <input type="text" required placeholder="Nguyễn Văn A" value={name} onChange={(e) => setName(e.target.value)} className="w-full h-12 bg-[#16243A]/80 border border-[#24344E] text-[#EAF2FF] rounded-xl px-4 pl-11 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all placeholder:text-[#24344E]" />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#91A4C1]">@</span>
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#91A4C1] ml-1">Email trường học</label>
                <div className="relative group">
                  <input type="email" required placeholder="hocsinh@truong.edu.vn" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-12 bg-[#16243A]/80 border border-[#24344E] text-[#EAF2FF] rounded-xl px-4 pl-11 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all placeholder:text-[#24344E]" />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#91A4C1] group-focus-within:text-[#38BDF8] transition-colors" />
                </div>
              </div>

              {authState !== "FORGOT_PASSWORD" && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between ml-1">
                    <label className="text-sm font-medium text-[#91A4C1]">Mật khẩu</label>
                    {authState === "LOGIN" && (
                      <button type="button" onClick={() => setAuthState("FORGOT_PASSWORD")} className="text-xs text-[#38BDF8] hover:text-[#0EA5E9] transition-colors">Quên mật khẩu?</button>
                    )}
                  </div>
                  <div className="relative group">
                    <input type={showPassword ? "text" : "password"} required placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full h-12 bg-[#16243A]/80 border border-[#24344E] text-[#EAF2FF] rounded-xl px-4 pl-11 pr-11 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all placeholder:text-[#24344E]" />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#91A4C1] group-focus-within:text-[#38BDF8] transition-colors" />
                    
                    {/* Animation bật/tắt mật khẩu */}
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#91A4C1] hover:text-[#EAF2FF] transition-colors overflow-hidden flex items-center justify-center w-5 h-5">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={showPassword ? "eye" : "eyeOff"}
                          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                          animate={{ opacity: 1, rotate: 0, scale: 1 }}
                          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                          transition={{ duration: 0.15 }}
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </motion.div>
                      </AnimatePresence>
                    </button>
                  </div>
                </div>
              )}

              {/* Nút Submit có Animation sóng lấp lánh (Shine effect) */}
              <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="relative w-full h-12 mt-4 bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#070B14] font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(56,189,248,0.4)] overflow-hidden group"
              >
                {/* Lớp ánh sáng chạy qua nút */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                
                <span className="relative z-10 flex items-center gap-2">
                  {authState === "LOGIN" && <>Đăng nhập <ArrowRight className="w-4 h-4" /></>}
                  {authState === "REGISTER" && "Tạo tài khoản"}
                  {authState === "FORGOT_PASSWORD" && "Khôi phục"}
                </span>
              </motion.button>
            </motion.form>
          </AnimatePresence>
        </div>

        {/* Mạng xã hội */}
        <AnimatePresence>
          {authState !== "FORGOT_PASSWORD" && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
              <div className="flex items-center gap-3 my-6">
                <div className="h-px bg-[#24344E] flex-1"></div>
                <span className="text-xs text-[#91A4C1] font-medium">Hoặc</span>
                <div className="h-px bg-[#24344E] flex-1"></div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-2">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }} type="button" className="h-11 bg-[#16243A]/80 hover:bg-[#24344E] border border-[#24344E] rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" /><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z" /><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" /><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" /></svg>
                  <span className="text-sm font-medium text-[#EAF2FF]">Google</span>
                </motion.button>

                {/* SỬ DỤNG COMPONENT <Image /> NEXT.JS NHƯ BẠN YÊU CẦU */}
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }} type="button" className="h-11 bg-[#16243A]/80 hover:bg-[#24344E] border border-[#24344E] rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Image 
                    src="https://stc-zlogin.zdn.vn/images/favicon.png" 
                    alt="Zalo Icon" 
                    width={20} 
                    height={20} 
                    className="rounded-sm"
                  />
                  <span className="text-sm font-medium text-[#EAF2FF]">Zalo</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Toggle */}
        <div className="text-center mt-4">
          <AnimatePresence mode="wait">
            <motion.div key={`footer-${authState}`} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
              {authState === "LOGIN" && <p className="text-sm text-[#91A4C1]">Chưa có tài khoản? <button onClick={() => setAuthState("REGISTER")} className="text-[#38BDF8] font-medium hover:text-[#0EA5E9] transition-colors">Đăng ký ngay</button></p>}
              {authState === "REGISTER" && <p className="text-sm text-[#91A4C1]">Đã có tài khoản? <button onClick={() => setAuthState("LOGIN")} className="text-[#38BDF8] font-medium hover:text-[#0EA5E9] transition-colors">Đăng nhập</button></p>}
              {authState === "FORGOT_PASSWORD" && <button onClick={() => setAuthState("LOGIN")} className="text-sm text-[#91A4C1] hover:text-[#EAF2FF] transition-colors flex items-center justify-center gap-1 mx-auto"><ArrowLeft className="w-4 h-4" /> Quay lại đăng nhập</button>}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Bản quyền */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mt-8 text-center relative z-10">
        <p className="text-xs text-[#24344E]">© 2026 Lyneo Education. Bản quyền: Nguyễn Đức Lâm.</p>
      </motion.div>

      {/* Tailwind Custom Keyframes (Được tiêm trực tiếp để bạn không phải sửa globals.css) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(50%); }
        }
      `}} />
    </main>
  );
}