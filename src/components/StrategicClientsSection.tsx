import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Boxes,
  Handshake,
  Phone,
  Sparkles,
} from 'lucide-react';
import { STRATEGIC_CLIENTS } from '../data/mockData';
import { ClientLogo } from './ClientLogo';
import { Language, StrategicClient } from '../types';

interface StrategicClientsSectionProps {
  lang: Language;
  onContactUs: () => void;
  onExploreCatalog: () => void;
}

export const StrategicClientsSection: React.FC<StrategicClientsSectionProps> = ({
  lang,
  onContactUs,
  onExploreCatalog,
}) => {
  const [selectedClient, setSelectedClient] = useState<StrategicClient | null>(null);
  const [isMarqueePaused, setIsMarqueePaused] = useState<boolean>(false);

  // Divide 18 partners into two balanced rows
  const row1 = STRATEGIC_CLIENTS.slice(0, 9);
  const row2 = STRATEGIC_CLIENTS.slice(9);

  // Duplicate for seamless 100% continuous infinite loop
  const row1Loop = [...row1, ...row1, ...row1];
  const row2Loop = [...row2, ...row2, ...row2];

  return (
    <section
      id="clients"
      className="py-14 sm:py-20 bg-gradient-to-b from-[#091522] via-[#07111c] to-[#0b1622] relative overflow-hidden border-t border-b border-lime-500/20"
    >
      {/* Background Subtle Grid & Glow Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/30 text-xs font-bold mb-3 sm:mb-4 shadow-sm">
            <Handshake className="w-4 h-4 text-lime-400 animate-pulse" />
            <span>
              {lang === 'ar' ? 'شبكة التوزيع والشراكات الاستراتيجية' : 'Distribution Network & Strategic Partnerships'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {lang === 'ar' ? (
              <>
                عملاؤنا <span className="text-lime-400">الاستراتيجيون</span> وشركاء النجاح
              </>
            ) : (
              <>
                Our <span className="text-lime-400">Strategic Clients</span> & Partners
              </>
            )}
          </h2>

          <p className="text-slate-300 text-xs sm:text-base mt-3 leading-relaxed">
            {lang === 'ar'
              ? 'نعتز بثقة كبرى شركات ومؤسسات ومستودعات قطع غيار وهياكل السيارات في المملكة والخليج العربي، ونفخر بتزويدهم بأرقى القطع البلاستيكية المصنعة محلياً بمصنع VPI وفق معايير الوكالة.'
              : 'Proudly trusted by premier automotive spare parts distributors, retail chains, and wholesale warehouses across Saudi Arabia and the GCC.'}
          </p>
        </div>

        {/* Highlight Stats Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-8 max-w-4xl mx-auto">
          <div className="bg-slate-900/70 border border-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-3xl font-black text-lime-400 font-mono">18+</div>
            <div className="text-[11px] sm:text-sm font-bold text-slate-200 mt-0.5 sm:mt-1">
              {lang === 'ar' ? 'شركة ومستودع شريك' : 'Strategic Partners'}
            </div>
          </div>

          <div className="bg-slate-900/70 border border-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-3xl font-black text-lime-400 font-mono">100%</div>
            <div className="text-[11px] sm:text-sm font-bold text-slate-200 mt-0.5 sm:mt-1">
              {lang === 'ar' ? 'مطابقة مقاييس الوكالة' : 'OEM Fitment'}
            </div>
          </div>

          <div className="bg-slate-900/70 border border-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-3xl font-black text-lime-400 font-mono">48H</div>
            <div className="text-[11px] sm:text-sm font-bold text-slate-200 mt-0.5 sm:mt-1">
              {lang === 'ar' ? 'توريد فوري بالمملكة' : 'Swift Logistics'}
            </div>
          </div>

          <div className="bg-slate-900/70 border border-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-3xl font-black text-lime-400 font-mono">36M</div>
            <div className="text-[11px] sm:text-sm font-bold text-slate-200 mt-0.5 sm:mt-1">
              {lang === 'ar' ? 'ضمان مصنعي معتمد' : 'Factory Warranty'}
            </div>
          </div>
        </div>
      </div>

      {/* CONTINUOUS HORIZONTAL MOVING CAROUSEL (Mobile & Desktop Compatible) */}
      <div
        className="marquee-container w-full overflow-hidden py-3 sm:py-6 space-y-4 sm:space-y-6 relative select-none"
        onTouchStart={() => setIsMarqueePaused(true)}
        onTouchEnd={() => setIsMarqueePaused(false)}
        style={{ direction: 'ltr' }}
      >
        {/* Left & Right Gradient Fades for Smooth Horizon Transition */}
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-36 bg-gradient-to-r from-[#07111c] via-[#07111c]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-36 bg-gradient-to-l from-[#07111c] via-[#07111c]/90 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Leftward Smooth Continuous Motion */}
        <div
          className={`flex animate-marquee-left gap-3.5 sm:gap-6 px-3 items-center ${
            isMarqueePaused ? '[animation-play-state:paused]' : ''
          }`}
        >
          {row1Loop.map((client, idx) => (
            <div
              key={`row1-${client.id}-${idx}`}
              onClick={() => setSelectedClient(client)}
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
              className="group relative w-64 sm:w-80 min-w-[250px] sm:min-w-[310px] h-36 sm:h-44 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-lime-500 transition-all duration-300 transform hover:-translate-y-1.5 active:scale-95 cursor-pointer flex flex-col justify-between p-3.5 sm:p-4 shrink-0 overflow-hidden"
            >
              {/* Top Location & Badge */}
              <div className="w-full flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500 mb-1">
                <span className="font-semibold text-slate-600 truncate max-w-[130px] sm:max-w-[160px]">
                  {lang === 'ar' ? client.locationAr : client.locationEn}
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[9px] sm:text-[10px]">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  {lang === 'ar' ? 'معتمد' : 'Verified'}
                </span>
              </div>

              {/* Logo Visual Presentation */}
              <div className="flex-1 w-full flex items-center justify-center py-1 sm:py-2">
                <ClientLogo logoKey={client.logoKey} className="max-h-16 sm:max-h-20 w-full" />
              </div>

              {/* Bottom Details */}
              <div className="w-full pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px]">
                <span className="font-bold text-slate-800 truncate max-w-[170px] sm:max-w-[210px]">
                  {lang === 'ar' ? client.nameAr : client.nameEn}
                </span>
                <span className="text-lime-600 font-bold flex items-center gap-0.5 group-hover:underline">
                  <span>{lang === 'ar' ? 'التفاصيل' : 'Details'}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-lime-600 transition-colors" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Rightward Smooth Continuous Motion */}
        <div
          className={`flex animate-marquee-right gap-3.5 sm:gap-6 px-3 items-center ${
            isMarqueePaused ? '[animation-play-state:paused]' : ''
          }`}
        >
          {row2Loop.map((client, idx) => (
            <div
              key={`row2-${client.id}-${idx}`}
              onClick={() => setSelectedClient(client)}
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
              className="group relative w-64 sm:w-80 min-w-[250px] sm:min-w-[310px] h-36 sm:h-44 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-lime-500 transition-all duration-300 transform hover:-translate-y-1.5 active:scale-95 cursor-pointer flex flex-col justify-between p-3.5 sm:p-4 shrink-0 overflow-hidden"
            >
              {/* Top Location & Badge */}
              <div className="w-full flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500 mb-1">
                <span className="font-semibold text-slate-600 truncate max-w-[130px] sm:max-w-[160px]">
                  {lang === 'ar' ? client.locationAr : client.locationEn}
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[9px] sm:text-[10px]">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  {lang === 'ar' ? 'معتمد' : 'Verified'}
                </span>
              </div>

              {/* Logo Visual Presentation */}
              <div className="flex-1 w-full flex items-center justify-center py-1 sm:py-2">
                <ClientLogo logoKey={client.logoKey} className="max-h-16 sm:max-h-20 w-full" />
              </div>

              {/* Bottom Details */}
              <div className="w-full pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px]">
                <span className="font-bold text-slate-800 truncate max-w-[170px] sm:max-w-[210px]">
                  {lang === 'ar' ? client.nameAr : client.nameEn}
                </span>
                <span className="text-lime-600 font-bold flex items-center gap-0.5 group-hover:underline">
                  <span>{lang === 'ar' ? 'التفاصيل' : 'Details'}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-lime-600 transition-colors" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <span className="text-[11px] text-slate-400 inline-flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <span>
              {lang === 'ar'
                ? 'المس أو انقر على أي بطاقة شريك لعرض تفاصيل التوريد والاعتماد'
                : 'Touch or click any partner logo to view supply credentials'}
            </span>
          </span>
        </div>
      </div>

      {/* Interactive Bottom Banner CTA */}
      <div className="max-w-5xl mx-auto mt-10 sm:mt-14 px-4 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0d1e2e]/90 to-slate-900/90 border border-lime-500/30 p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl backdrop-blur-md">
          <div className="text-center sm:text-right">
            <h3 className="text-lg sm:text-2xl font-black text-white flex items-center justify-center sm:justify-start gap-2">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-lime-400 shrink-0" />
              <span>{lang === 'ar' ? 'هل ترغب بالانضمام لشبكة شركائنا المعتمدين؟' : 'Join Our Authorized Distribution Network'}</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1.5">
              {lang === 'ar'
                ? 'احصل على أسعار الجملة المباشرة من مصنع VPI وتوريد حصري لحوامل الصدامات والبطانات البلاستيكية.'
                : 'Get direct factory wholesale pricing and authorized distribution for automotive plastic parts.'}
            </p>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={onContactUs}
              className="flex-1 sm:flex-none px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-lime-500/20 hover:shadow-lime-500/40 transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{lang === 'ar' ? 'طلب تسعيرة وتوريد' : 'Request RFQ & Supply'}</span>
            </button>
            <button
              onClick={onExploreCatalog}
              className="flex-1 sm:flex-none px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/15 transition-all text-center cursor-pointer"
            >
              <span>{lang === 'ar' ? 'تصفح الكتالوج' : 'Browse Catalog'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Selected Client Modal Details */}
      {selectedClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0d1e2e] border border-lime-500/40 shadow-2xl p-5 sm:p-8 text-right overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-lime-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header / Logo Container */}
            <div className="w-full bg-white rounded-2xl p-4 shadow-md flex items-center justify-center mb-5 sm:mb-6 border border-slate-100">
              <ClientLogo logoKey={selectedClient.logoKey} className="max-h-24 sm:max-h-28" />
            </div>

            {/* Content Details */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg sm:text-2xl font-black text-white">
                    {lang === 'ar' ? selectedClient.nameAr : selectedClient.nameEn}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-lime-400 mt-0.5">
                    {lang === 'ar' ? selectedClient.categoryAr : selectedClient.categoryEn}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-lime-500/20 text-lime-400 border border-lime-500/30 text-[10px] sm:text-xs font-bold shrink-0">
                  {lang === 'ar' ? selectedClient.badgeAr : selectedClient.badgeEn}
                </span>
              </div>

              <div className="bg-slate-900/80 rounded-xl p-3.5 sm:p-4 border border-white/10 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <MapPin className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>
                    {lang === 'ar' ? 'النطاق الجغرافي والمستودع:' : 'Location:'}{' '}
                    <span className="text-white font-bold">
                      {lang === 'ar' ? selectedClient.locationAr : selectedClient.locationEn}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <Boxes className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>
                    {lang === 'ar' ? 'نطاق التوريد المعتمد:' : 'Supplied Parts:'}{' '}
                    <span className="text-white font-bold">
                      حوامل الصدامات، بطانات الرفارف، زوايا المرايات، الشبوك البلاستيكية
                    </span>
                  </span>
                </div>
                <div className="flex items-start gap-2 text-slate-300 pt-2 border-t border-white/10">
                  <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-[11px] sm:text-xs">
                    {lang === 'ar' ? selectedClient.taglineAr : selectedClient.taglineEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5 sm:mt-6 flex items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => {
                  setSelectedClient(null);
                  onContactUs();
                }}
                className="flex-1 py-2.5 sm:py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-xs sm:text-sm transition-all text-center shadow-lg shadow-lime-500/20 cursor-pointer"
              >
                {lang === 'ar' ? 'طلب تسعيرة وتوريد' : 'Partner Supply Request'}
              </button>
              <button
                onClick={() => setSelectedClient(null)}
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                {lang === 'ar' ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
