import React from 'react';
import { Award, ShieldCheck, Wrench, ChevronLeft, ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface HeroSectionProps {
  lang: Language;
  onOpenDealerModal: () => void;
  onExploreCatalog: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenDealerModal,
  onExploreCatalog,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-20 overflow-hidden bg-[#07111c]"
    >
      {/* 1. Realistic Pickup / Hilux Automotive Background with Cinematic Lighting */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=2200&q=85"
          alt="Toyota Hilux Pickup Truck VPI"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-10000"
          style={{ filter: 'brightness(0.72) contrast(1.1)' }}
        />
        {/* Dynamic Dark Vignette & Brand Gradients for crisp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111c] via-[#0b1c2e]/60 to-[#07111c]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111c]/90 via-[#07111c]/40 to-transparent" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl text-right">
          {/* Tagline / Certified Saudi Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-lime-400/30 text-lime-300 text-xs sm:text-sm font-bold mb-5 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
            <ShieldCheck className="w-4 h-4 text-lime-400" />
            <span>
              {lang === 'ar'
                ? 'المصنع السعودي المتخصص في القطع البلاستيكية للمركبات | ترخيص SASO'
                : 'Saudi Manufacturer of Automotive Plastic Parts | SASO Certified'}
            </span>
          </div>

          {/* Exact Headline as in screenshot */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.25] tracking-tight mb-4 drop-shadow-2xl">
            <span className="text-[#8bc34a] font-extrabold inline-block transition-transform hover:scale-105 duration-300 ml-2">
              {lang === 'ar' ? 'ارتقِ بعملك مع' : 'Elevate Your Business with'}
            </span>
            <br className="hidden sm:inline" />
            <span className="text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
              {lang === 'ar'
                ? 'شركة أجزاء المركبة للصناعة'
                : 'Vehicle Parts Industry Co. (VPI)'}
            </span>
          </h1>

          {/* Exact Sub-headline */}
          <p className="text-base sm:text-xl text-slate-200 font-medium leading-relaxed mb-8 max-w-2xl drop-shadow-md">
            {lang === 'ar'
              ? 'انضم إلينا كوكيل وقدم حلولاً لسيارات عالية الجودة تميزك في السوق بضمان مصنعي وتوريد مباشر من مصنعنا بالخرج.'
              : 'Join us as an authorized dealer and deliver premium-grade automotive solutions that give you a competitive edge.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary 'كن وكيلاً' CTA matching screenshot style */}
            <button
              id="hero-dealer-btn"
              onClick={onOpenDealerModal}
              className="px-8 py-3.5 rounded-xl border-2 border-white/90 bg-black/40 hover:bg-lime-500 hover:border-lime-500 text-white hover:text-slate-950 font-bold text-base sm:text-lg backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-lime-500/30 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
            >
              <Award className="w-5 h-5 text-lime-400 group-hover:text-slate-950 transition-colors" />
              <span>{lang === 'ar' ? 'كن وكيلاً' : 'Become a Dealer'}</span>
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </button>

            {/* Secondary 'استعراض الكتالوج' button */}
            <button
              id="hero-catalog-btn"
              onClick={onExploreCatalog}
              className="px-6 py-3.5 rounded-xl bg-lime-500/20 hover:bg-lime-500/30 text-lime-300 hover:text-lime-200 border border-lime-400/40 font-bold text-base backdrop-blur-sm transition-all flex items-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              <span>{lang === 'ar' ? 'كتالوج القطع البلاستيكية' : 'Plastic Parts Catalog'}</span>
            </button>
          </div>

          {/* Quick Trust Pillars */}
          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
              <div className="text-right">
                <p className="text-xs sm:text-sm font-bold text-white">قوالب حقن فائقة الدقة</p>
                <p className="text-[10px] text-slate-400">تطابق وكالة 100%</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
              <div className="text-right">
                <p className="text-xs sm:text-sm font-bold text-white">بوليمرات مقواة وUV</p>
                <p className="text-[10px] text-slate-400">مقاومة لحرارة الصحراء</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
              <div className="text-right">
                <p className="text-xs sm:text-sm font-bold text-white">توريد فوري للجملة</p>
                <p className="text-[10px] text-slate-400">لكافة مناطق المملكة</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical slider bars (As seen on left edge of the screenshot) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-10">
        <div className="w-[3px] h-12 bg-white/20 rounded-full" />
        <div className="w-[3px] h-16 bg-lime-400 rounded-full shadow-[0_0_10px_#8bc34a]" />
        <div className="w-[3px] h-12 bg-white/20 rounded-full" />
      </div>

      {/* Scroll down indicator */}
      <div className="relative z-10 flex justify-center mt-6">
        <button
          onClick={onExploreCatalog}
          aria-label="Scroll to search widget"
          className="text-slate-400 hover:text-lime-400 transition-colors animate-bounce p-2"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
