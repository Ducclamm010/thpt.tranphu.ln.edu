# Lyneo Education - Project Guidelines & Architecture

## 1. Project Overview & Design System ("Deep Ocean Academic")
- **Vibe**: Quiet, focused, trustworthy dark-mode native-app feel for Vietnamese high school students. No cyberpunk, gaming UI, or blinding neon.
- **Color Palette**:
  - App Background: `#070B14` (`bg-ocean-bg` or `bg-[#070B14]`)
  - Card / Surface: `#101A2C` (`bg-ocean-surface`) / `#16243A` (`bg-ocean-surface-elevated`)
  - Border: `#24344E` (`border-ocean-border`)
  - Text: `#EAF2FF` (`text-ocean-text-primary` - primary), `#91A4C1` (`text-ocean-text-secondary` - secondary)
  - Primary / CTA Accent: `#38BDF8` (`text-ocean-cyan`, `bg-ocean-cyan`)
  - Secondary Accent: `#8B5CF6` (`text-ocean-violet`, `bg-ocean-violet`)
- **Typography**: Be Vietnam Pro (`font-sans`), clean readability.
- **Border Radius**: 12px - 18px (`rounded-xl` to `rounded-2xl`).
- **Animation**: Smooth & subtle (150-300ms), priority actions at top.

## 2. Tech Stack & Architecture
- **Framework**: Next.js App Router (`src/app`).
- **Language**: TypeScript (`.tsx` strict mode).
- **Styling**: Tailwind CSS v3 (`tailwind.config.ts`), custom components with `clsx` & `tailwind-merge` (`cn` helper in `src/lib/utils.ts`).
- **Icons**: `lucide-react`.
- **Backend / DB / Auth**: `@supabase/supabase-js`.
- **Notifications**: `nodemailer` (Server-side Gmail SMTP).

## 3. Code Standards
- React Functional Components with TypeScript strict mode.
- Strict separation of Client Components (`"use client"`) and Server Components.
- Accessibility (focus outlines, aria-labels) and Mobile-first Responsive design.
