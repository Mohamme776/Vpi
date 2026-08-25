import React from 'react';

interface ClientLogoProps {
  logoKey: string;
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
}

export const ClientLogo: React.FC<ClientLogoProps> = ({
  logoKey,
  className = 'w-full h-full',
  theme = 'auto',
}) => {
  switch (logoKey) {
    case 'alkhateeb':
      return (
        <div className={`flex flex-col items-center justify-center p-2 text-center select-none ${className}`}>
          <svg viewBox="0 0 200 180" className="w-full max-h-24 drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Green Gear */}
            <path
              d="M100 20 L108 20 L111 27 L119 29 L126 23 L132 29 L129 37 L135 43 L143 41 L146 49 L139 55 L142 63 L150 66 L149 74 L141 78 L141 86 L148 91 L144 99 L136 100 L133 108 L138 115 L132 121 L124 117 L118 123 L120 131 L112 134 L107 127 L99 128 L95 136 L87 135 L87 127 L79 124 L73 130 L67 124 L71 117 L66 110 L58 111 L56 103 L63 97 L61 89 L53 86 L54 78 L62 74 L62 66 L55 61 L59 53 L67 52 L70 44 L65 37 L71 31 L79 35 L85 29 L83 21 L91 18 L96 25 Z"
              fill="#16a34a"
            />
            {/* Blue Globe */}
            <circle cx="100" cy="78" r="44" fill="#ffffff" stroke="#1d4ed8" strokeWidth="4" />
            {/* Lat / Long Lines */}
            <ellipse cx="100" cy="78" rx="22" ry="43" stroke="#1d4ed8" strokeWidth="2.5" />
            <line x1="56" y1="78" x2="144" y2="78" stroke="#1d4ed8" strokeWidth="2.5" />
            <line x1="62" y1="60" x2="138" y2="60" stroke="#1d4ed8" strokeWidth="2" />
            <line x1="62" y1="96" x2="138" y2="96" stroke="#1d4ed8" strokeWidth="2" />
            {/* White pill with AL KHATEEB */}
            <rect x="62" y="66" width="76" height="24" rx="4" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
            <text x="100" y="83" fill="#dc2626" fontSize="11" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">
              AL KHATEEB
            </text>
            {/* Red Hands Cradle */}
            <path
              d="M58 84 C56 108 72 134 100 138 C128 134 144 108 142 84 L134 86 C136 104 122 126 100 128 C78 126 64 104 66 86 Z"
              fill="#dc2626"
            />
            <circle cx="61" cy="90" r="2.5" fill="#ffffff" />
            <circle cx="69" cy="112" r="2.5" fill="#ffffff" />
            <circle cx="139" cy="90" r="2.5" fill="#ffffff" />
            <circle cx="131" cy="112" r="2.5" fill="#ffffff" />
          </svg>
          <div className="mt-1">
            <span className="block text-sm font-black text-slate-900 tracking-wider">AL KHATEEB</span>
            <span className="block text-[8px] font-semibold text-slate-600 leading-tight">Auto Parts & Accessories</span>
          </div>
        </div>
      );

    case 'alhazim':
      return (
        <div className={`flex flex-col items-center justify-center p-2 text-center select-none ${className}`}>
          <svg viewBox="0 0 200 160" className="w-full max-h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Pinstripe Pattern */}
            <defs>
              <pattern id="stripes-hazim" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
                <rect width="4" height="12" fill="#1e3a8a" />
                <rect x="4" width="2" height="12" fill="#ffffff" />
                <rect x="6" width="4" height="12" fill="#881337" />
                <rect x="10" width="2" height="12" fill="#ffffff" />
              </pattern>
            </defs>
            {/* Diamond container */}
            <path d="M100 8 L175 75 L100 142 L25 75 Z" fill="url(#stripes-hazim)" stroke="#1e3a8a" strokeWidth="2" />
            {/* Central White Oval */}
            <ellipse cx="100" cy="75" rx="60" ry="46" fill="#ffffff" stroke="#881337" strokeWidth="3" />
            {/* Arabic Calligraphy & Abahussain */}
            <text x="100" y="66" fill="#1e1b4b" fontSize="20" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
              أباحسين
            </text>
            <text x="100" y="84" fill="#881337" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle" letterSpacing="2">
              ABAHUSSAIN
            </text>
            <text x="100" y="100" fill="#1e3a8a" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
              1977
            </text>
          </svg>
          <div className="mt-1">
            <span className="block text-xs font-bold text-[#881337]">شركة الحازم لقطع غيار السيارات</span>
            <span className="block text-[9px] font-bold text-slate-800 tracking-wide">AL-HAZIM AUTO PARTS CO.</span>
          </div>
        </div>
      );

    case 'mtx':
      return (
        <div className={`flex flex-col items-center justify-center p-2 text-center select-none ${className}`}>
          <div className="flex items-center gap-3">
            {/* Cat Mascot with Gear */}
            <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-sky-500 flex items-center justify-center shadow-inner relative overflow-hidden">
              <svg viewBox="0 0 60 60" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Cat face */}
                <path d="M15 22 L20 12 L30 18 L40 12 L45 22 C48 30 46 42 30 44 C14 42 12 30 15 22 Z" fill="#ffffff" stroke="#0ea5e9" strokeWidth="2" />
                <polygon points="20,24 26,24 23,28" fill="#0f172a" />
                <polygon points="34,24 40,24 37,28" fill="#0f172a" />
                <circle cx="30" cy="32" r="3" fill="#ef4444" />
                {/* Gear in body */}
                <circle cx="30" cy="48" r="8" fill="#0ea5e9" />
                <circle cx="30" cy="48" r="4" fill="#ffffff" />
              </svg>
            </div>
            {/* MTX Text with Gear in X */}
            <div className="text-left">
              <div className="flex items-center text-3xl font-black tracking-tighter text-[#0284c7]">
                <span>M</span>
                <span>T</span>
                <span className="relative inline-flex items-center justify-center text-[#0284c7]">
                  X
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-slate-800 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14a4 4 0 110-8 4 4 0 010 8z" />
                    </svg>
                  </span>
                </span>
              </div>
              <div className="text-[11px] font-black text-red-600 tracking-widest uppercase">
                SPARE PARTS
              </div>
            </div>
          </div>
          <span className="block text-[10px] font-bold text-slate-700 mt-1">قطع غيار المركبات المعتمدة</span>
        </div>
      );

    case 'mikatakno':
      return (
        <div className={`flex flex-col items-center justify-center p-2 text-center select-none ${className}`}>
          {/* Geometric Cyan TMT / MT logo */}
          <div className="w-14 h-12 relative flex items-center justify-center">
            <svg viewBox="0 0 80 60" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40 8 L65 30 L52 42 L40 30 L28 42 L15 30 Z"
                stroke="#06b6d4"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M40 25 L55 38 L40 52 L25 38 Z"
                stroke="#06b6d4"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* MIKATAKNO in bold red */}
          <div className="mt-1">
            <span className="text-xl font-black text-red-600 tracking-wide inline-flex items-center gap-0.5">
              M<span className="text-cyan-500">i</span>KATAKN<span className="text-cyan-500">O</span>
            </span>
            <span className="block text-[9px] font-bold text-slate-700">قطع غيار هياكل وبلاستيك</span>
          </div>
        </div>
      );

    case 'fa':
      return (
        <div className={`flex items-center justify-center gap-2 p-2 select-none ${className}`}>
          {/* Gear + FA + Thumbs Up */}
          <div className="flex items-center bg-blue-50/50 rounded-xl px-3 py-1.5 border border-blue-200/60">
            {/* Blue Gear */}
            <svg viewBox="0 0 40 40" className="w-8 h-8 text-blue-600 shrink-0" fill="currentColor">
              <path d="M20 5 L23 5 L24 8 L27 9 L30 7 L32 9 L30 12 L32 15 L35 15 L35 18 L32 19 L32 22 L35 24 L33 26 L30 25 L28 28 L29 31 L26 33 L24 30 L21 31 L20 34 L17 34 L16 31 L13 30 L11 33 L8 31 L9 28 L7 25 L4 26 L2 24 L5 22 L5 19 L2 18 L2 15 L5 15 L7 12 L5 9 L7 7 L10 9 L13 8 L14 5 Z M20 13 A7 7 0 1 0 20 27 A7 7 0 1 0 20 13 Z" />
            </svg>
            <div className="mx-2 text-center">
              <div className="text-2xl font-black italic tracking-tighter text-blue-700 leading-none">
                FA
              </div>
              <div className="text-[8px] font-bold tracking-widest text-slate-800 uppercase">
                AUTO PARTS
              </div>
            </div>
            {/* Thumbs up */}
            <svg viewBox="0 0 32 32" className="w-8 h-8 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 14v11H3V14h4zm2 11h11a2 2 0 002-1.7l1.5-7.5a2 2 0 00-2-2.3H16V7.5a2.5 2.5 0 00-5 0V14l-2 1v10z" fill="#bfdbfe" />
            </svg>
          </div>
        </div>
      );

    case 'thuraya':
      return (
        <div className={`flex flex-col items-center justify-center p-2 text-center select-none ${className}`}>
          <svg viewBox="0 0 140 140" className="w-20 h-20 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Blue Circle with Border */}
            <circle cx="70" cy="70" r="64" fill="#1e3a8a" stroke="#ffffff" strokeWidth="4" />
            <circle cx="70" cy="70" r="54" fill="#0f172a" />
            {/* 8 Stars in Circle */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = 70 + 54 * Math.cos(rad);
              const y = 70 + 54 * Math.sin(rad);
              return (
                <polygon
                  key={i}
                  points={`${x},${y - 5} ${x + 2},${y - 2} ${x + 5},${y} ${x + 2},${y + 2} ${x},${y + 5} ${x - 2},${y + 2} ${x - 5},${y} ${x - 2},${y - 2}`}
                  fill="#ffffff"
                />
              );
            })}
            {/* Center 7-Pointed White Star */}
            <polygon
              points="70,25 79,48 104,44 93,66 112,83 88,88 88,113 70,97 52,113 52,88 28,83 47,66 36,44 61,48"
              fill="#ffffff"
            />
            {/* Golden Rays */}
            <line x1="70" y1="84" x2="60" y2="70" stroke="#f59e0b" strokeWidth="2" />
            <line x1="70" y1="84" x2="65" y2="67" stroke="#f59e0b" strokeWidth="2" />
            <line x1="70" y1="84" x2="70" y2="66" stroke="#f59e0b" strokeWidth="2" />
            <line x1="70" y1="84" x2="75" y2="67" stroke="#f59e0b" strokeWidth="2" />
            <line x1="70" y1="84" x2="80" y2="70" stroke="#f59e0b" strokeWidth="2" />
            <text x="70" y="62" fill="#1e3a8a" fontSize="8" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">
              THURAYA
            </text>
          </svg>
          <span className="block text-xs font-bold text-slate-800 mt-1">مجموعة الثريا لقطع الغيار</span>
        </div>
      );

    case 'najd':
      return (
        <div className={`flex flex-col items-center justify-center p-2 text-center select-none ${className}`}>
          <div className="flex items-center gap-3">
            {/* Black C + Red Dot */}
            <div className="w-12 h-12 rounded-full border-4 border-slate-900 border-r-transparent rotate-45 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-red-600" />
            </div>
            <div className="text-right">
              <div className="text-base font-black text-slate-900">
                شركة نجد للمعدات الصناعية
              </div>
              <div className="text-[9px] font-bold text-slate-700 tracking-wider">
                NAJD INDUSTRIAL EQUIPMENTS CO.
              </div>
            </div>
          </div>
        </div>
      );

    case 'alblad':
      return (
        <div className={`flex items-center justify-center p-2 select-none ${className}`}>
          <div className="border-3 border-red-600 px-5 py-2 rounded-md bg-white text-center shadow-sm">
            <div className="text-xl font-black text-red-600 tracking-wide">
              مستودع البلاد
            </div>
            <div className="h-[2px] bg-red-600 w-full my-0.5" />
            <div className="text-[11px] font-black text-red-600 tracking-widest uppercase">
              Al-Blad Store
            </div>
          </div>
        </div>
      );

    case 'leader':
      return (
        <div className={`flex items-center justify-center gap-3 p-2 select-none ${className}`}>
          {/* Red square with 'A' swirl */}
          <div className="w-12 h-12 rounded-lg bg-red-600 p-1 flex items-center justify-center text-white font-black text-2xl shadow-sm border border-red-700">
            <span>L</span>
          </div>
          <div className="text-right">
            <div className="text-xl font-black text-red-600 leading-none">
              LEADER
            </div>
            <div className="text-[9px] font-black text-slate-800 uppercase tracking-tight">
              AUTO SPARE PARTS TRD. L.L.C
            </div>
            <div className="text-[8px] font-bold text-slate-600">
              ليدر لتجارة قطع غيار السيارات
            </div>
          </div>
        </div>
      );

    case 'almasar':
      return (
        <div className={`flex flex-col items-center justify-center p-3 rounded-xl bg-slate-950 text-white select-none shadow-md ${className}`}>
          <div className="text-xs font-black text-slate-100 text-center">
            شركة المسار الأصلي للتجارة
          </div>
          <div className="text-[10px] text-lime-400 font-bold">
            قطع غيار سيارات
          </div>
          <div className="text-[10px] font-black text-slate-200 tracking-wider mt-1 uppercase border-t border-white/20 pt-0.5">
            ALMASAR AL ASLI CO-
          </div>
        </div>
      );

    case 'alkhushaim':
      return (
        <div className={`flex flex-col items-center justify-center p-2 text-center select-none ${className}`}>
          <div className="text-2xl font-black text-red-600 font-serif leading-none">
            الخشيم
          </div>
          <div className="text-[10px] font-bold text-red-700">
            مؤسسة سعيد عايض
          </div>
          <div className="text-xs font-black text-red-600 tracking-widest mt-0.5 uppercase">
            AL-KHUSHAIM
          </div>
        </div>
      );

    case 'tadbeer':
      return (
        <div className={`flex flex-col items-center justify-center p-2 text-center select-none ${className}`}>
          <svg viewBox="0 0 120 90" className="w-20 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Orange Arch */}
            <path d="M25 50 C25 20 95 20 95 50" stroke="#ea580c" strokeWidth="4" />
            {/* Center mechanic figure with octopus tentacles holding auto parts */}
            <circle cx="60" cy="22" r="8" fill="#1e3a8a" />
            <path d="M52 32 L68 32 L74 54 L46 54 Z" fill="#1e3a8a" />
            {/* Tentacles */}
            <path d="M48 40 C35 35 25 45 28 55 C30 60 40 58 45 50" stroke="#1e3a8a" strokeWidth="3" fill="none" />
            <path d="M72 40 C85 35 95 45 92 55 C90 60 80 58 75 50" stroke="#1e3a8a" strokeWidth="3" fill="none" />
            {/* Car door & bumper icons */}
            <rect x="18" y="32" width="10" height="14" rx="2" fill="#3b82f6" />
            <rect x="85" y="36" width="18" height="6" rx="2" fill="#3b82f6" />
          </svg>
          <div className="text-base font-black text-[#1e3a8a] tracking-wider leading-none">
            TADBEER
          </div>
          <div className="text-xs font-black text-[#ea580c] tracking-widest uppercase">
            PARTS
          </div>
        </div>
      );

    case 'unity':
      return (
        <div className={`flex items-center justify-center gap-2 p-2 select-none ${className}`}>
          {/* Golden Gear / Chevron Sun */}
          <div className="w-11 h-11 rounded-full border-3 border-amber-500 flex items-center justify-center text-amber-500 bg-amber-50">
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
              <path d="M12 2L15 8H9L12 2zM12 22L9 16H15L12 22zM2 12L8 9V15L2 12zM22 12L16 15V9L22 12zM12 7L17 12H7L12 7zM12 17L7 12H17L12 17z" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-2xl font-black text-green-700 tracking-wide italic">
              UNITY
            </div>
            <div className="text-[8px] font-bold text-slate-600">
              يونيتي لقطع غيار المركبات
            </div>
          </div>
        </div>
      );

    case 'goldpath':
      return (
        <div className={`flex items-center justify-center p-2 select-none ${className}`}>
          <div className="rounded-xl overflow-hidden shadow-sm border border-slate-300">
            <div className="bg-red-600 text-white px-4 py-1.5 flex items-center gap-1.5">
              <span className="font-serif italic font-black text-xl">G</span>
              <span className="text-lg font-black tracking-tighter">OLD</span>
              <span className="text-xs font-bold text-amber-300 ml-1">Path</span>
            </div>
            <div className="bg-[#1e3a8a] text-white px-2 py-0.5 text-[8px] font-black tracking-widest text-center uppercase">
              EXCELLENT QUALITY
            </div>
          </div>
        </div>
      );

    case 'landmark':
      return (
        <div className={`flex items-center justify-center gap-2.5 p-2 select-none ${className}`}>
          {/* Red Faceted Diamond L */}
          <div className="w-10 h-10 bg-red-600 rotate-45 rounded-sm flex items-center justify-center shadow-md">
            <span className="-rotate-45 text-white font-black text-xl">L</span>
          </div>
          <div className="text-left">
            <div className="text-lg font-black text-red-600 leading-none">
              LANDMARK
            </div>
            <div className="text-[8px] font-black text-slate-800 tracking-wider uppercase">
              AUTO SPARE PARTS
            </div>
          </div>
        </div>
      );

    case 'arkan':
      return (
        <div className={`flex flex-col items-center justify-center p-2 text-center select-none ${className}`}>
          {/* Silver/Blue Loop Car Silhouette */}
          <svg viewBox="0 0 100 45" className="w-18 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 32 L35 32 L50 10 L65 32 L90 32 L75 10 L50 25 L25 10 Z"
              stroke="#0284c7"
              strokeWidth="4"
              strokeLinejoin="round"
              fill="#f0f9ff"
            />
            <path d="M50 25 L65 32 L50 38 L35 32 Z" fill="#0284c7" />
          </svg>
          <div className="text-xs font-black text-sky-800 mt-1">
            مؤسسة أركان الجودة
          </div>
          <div className="text-[8px] font-bold text-slate-600">
            لخدمات وقطع هياكل المركبات
          </div>
        </div>
      );

    case 'alodhaib':
      return (
        <div className={`flex items-center justify-center gap-2.5 p-2 select-none ${className}`}>
          {/* Asphalt Track Ring + Red D */}
          <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center relative shadow-inner">
            <div className="w-8 h-8 rounded-full border border-dashed border-white/50 flex items-center justify-center">
              <span className="text-red-600 font-black text-xl italic">D</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-black text-slate-900">
              شركة عبدالحكيم العضيب
            </div>
            <div className="text-[8px] font-bold text-slate-700 uppercase tracking-tight">
              ABDUL HAKIM ALODHAIB SPARE PARTS.CO
            </div>
          </div>
        </div>
      );

    case 'babatin':
      return (
        <div className={`flex items-center justify-center gap-2.5 p-2 select-none ${className}`}>
          {/* Green triangle pine tree + Gold chevron */}
          <div className="w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="20,4 36,34 4,34" stroke="#d97706" strokeWidth="3" fill="#ecfdf5" />
              <polygon points="20,12 30,30 10,30" fill="#059669" />
              <line x1="4" y1="36" x2="36" y2="36" stroke="#d97706" strokeWidth="2" />
            </svg>
          </div>
          <div className="text-right">
            <div className="text-xs font-black text-emerald-900">
              شركة با بطين لقطع غيار السيارات
            </div>
            <div className="text-[8px] font-black text-amber-700 uppercase tracking-wide">
              BABATIN AUTO PARTS CO.
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className={`flex items-center justify-center p-2 text-center font-bold text-slate-800 ${className}`}>
          <span>{logoKey.toUpperCase()}</span>
        </div>
      );
  }
};
