import React, { useState } from 'react';
import {
  ShieldCheck,
  Building2,
  Award,
  Sparkles,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Boxes,
  Handshake,
} from 'lucide-react';
import { STRATEGIC_CLIENTS } from '../data/mockData';
import { ClientLogo } from './ClientLogo';
import { Language, StrategicClient } from '../types';

interface StrategicClientsSectionProps {
  lang: Language;
  onOpenDealerModal: () => void;
  onExploreCatalog: () => void;
}

export const StrategicClientsSection: React.FC<StrategicClientsSectionProps> = ({
  lang,
  onOpenDealerModal,
  onExploreCatalog,
}) => {
  const [selectedClient, setSelectedClient] = useState<StrategicClient | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Divide into two groups for two alternating horizontal marquee rows
  const row1 = STRATEGIC_CLIENTS.slice(0, 9);
  const row2 = STRATEGIC_CLIENTS.slice(9);

  // Duplicate for seamless infinite loop
  const row1Loop = [...row1, ...row1, ...row1];
  const row2Loop = [...row2, ...row2, ...row2];

  return (
    <section
      id="clients"
      className="py-20 bg-gradient-to-b from-[#091522] via-[#07111c] to-[#0b1622] relative overflow-hidden border-t border-b border-lime-500/20"
    >
      {/* Background Subtle Grid & Glow Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/30 text-xs font-bold mb-4 shadow-sm">
            <Handshake className="w-4 h-4 text-lime-400 animate-pulse" />
            <span>
              {lang === 'ar' ? 'شبكة التوزيع والشراكات الاستراتيجية' : 'Distribution Network & Strategic Partnerships'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
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

          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            {lang === 'ar'
              ? 'نعتز بثقة كبرى شركات ومؤسسات ومستودعات قطع غيار وهياكل السيارات في المملكة والخليج العربي، ونفخر بتزويدهم بأرقى القطع البلاستيكية المصنعة محلياً وفق معايير الوكالة.'
              : 'Proudly trusted by premier automotive spare parts distributors, retail chains, and wholesale warehouses across Saudi Arabia and the GCC.'}
          </p>
        </div>

        {/* Highlight Stats Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-4xl mx-auto">
          <div className="bg-slate-900/60 border border-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-lime-400 font-mono">18+</div>
            <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
              {lang === 'ar' ? 'شركة ومستودع شريك' : 'Strategic Partners'}
            </div>
          </div>

          <div className="bg-slate-900/60 border border-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-lime-400 font-mono">100%</div>
            <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
              {lang === 'ar' ? 'مطابقة مقاييس الوكالة' : 'OEM Fitment Standard'}
            </div>
          </div>

          <div className="bg-slate-900/60 border border-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-lime-400 font-mono">48H</div>
            <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
              {lang === 'ar' ? 'توريد فوري بالمملكة' : 'Swift Logistics'}
            </div>
          </div>

          <div className="bg-slate-900/60 border border-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-lime-400 font-mono">36M</div>
            <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
              {lang === 'ar' ? 'ضمان مصنعي معتمد' : 'Factory Warranty'}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Moving Carousels (Marquee Tickers) */}
      <div className="marquee-container w-full overflow-hidden py-4 space-y-6 relative select-none">
        {/* Left & Right Gradient Fades for Smooth Horizon Transition */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#07111c] via-[#07111c]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#07111c] via-[#07111c]/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Leftward Smooth Motion */}
        <div className="flex animate-marquee-left gap-5 px-4 items-center">
          {row1Loop.map((client, idx) => (
            <div
              key={`row1-${client.id}-${idx}`}
              onClick={() => setSelectedClient(client)}
              className="group relative w-64 sm:w-72 h-36 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-lime-500/80 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col items-center justify-between p-3.5 shrink-0 overflow-hidden"
            >
              {/* Top Mini Pill */}
              <div className="w-full flex items-center justify-between text-[10px] text-slate-500">
                <span className="font-semibold text-slate-600 truncate max-w-[150px]">
                  {lang === 'ar' ? client.locationAr : client.locationEn}
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[9px]">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  {lang === 'ar' ? 'معتمد' : 'Verified'}
                </span>
              </div>

              {/* Logo Visual Presentation */}
              <div className="flex-1 w-full flex items-center justify-center py-1">
                <ClientLogo logoKey={client.logoKey} className="max-h-20" />
              </div>

              {/* Bottom Subtle Bar */}
              <div className="w-full pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px]">
                <span className="font-bold text-slate-700 truncate max-w-[190px]">
                  {lang === 'ar' ? client.categoryAr : client.categoryEn}
                </span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-lime-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Rightward Smooth Motion */}
        <div className="flex animate-marquee-right gap-5 px-4 items-center">
          {row2Loop.map((client, idx) => (
            <div
              key={`row2-${client.id}-${idx}`}
              onClick={() => setSelectedClient(client)}
              className="group relative w-64 sm:w-72 h-36 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-lime-500/80 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col items-center justify-between p-3.5 shrink-0 overflow-hidden"
            >
              {/* Top Mini Pill */}
              <div className="w-full flex items-center justify-between text-[10px] text-slate-500">
                <span className="font-semibold text-slate-600 truncate max-w-[150px]">
                  {lang === 'ar' ? client.locationAr : client.locationEn}
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[9px]">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  {lang === 'ar' ? 'معتمد' : 'Verified'}
                </span>
              </div>

              {/* Logo Visual Presentation */}
              <div className="flex-1 w-full flex items-center justify-center py-1">
                <ClientLogo logoKey={client.logoKey} className="max-h-20" />
              </div>

              {/* Bottom Subtle Bar */}
              <div className="w-full pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px]">
                <span className="font-bold text-slate-700 truncate max-w-[190px]">
                  {lang === 'ar' ? client.categoryAr : client.categoryEn}
                </span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-lime-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Bottom Banner CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0d1e2e]/90 to-slate-900/90 border border-lime-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-md">
          <div className="text-center sm:text-right">
            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center sm:justify-start gap-2">
              <Award className="w-6 h-6 text-lime-400 shrink-0" />
              <span>{lang === 'ar' ? 'هل ترغب بالانضمام لشبكة عملائنا المعتمدين؟' : 'Join Our Authorized Distribution Network'}</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1.5">
              {lang === 'ar'
                ? 'احصل على أسعار الجملة المباشرة من مصنع VPI وتوريد حصري لحوامل الصدامات والبطانات البلاستيكية.'
                : 'Get direct factory wholesale pricing and authorized distribution for automotive plastic parts.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDealerModal}
              className="px-6 py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-sm shadow-lg shadow-lime-500/20 hover:shadow-lime-500/40 transition-all transform active:scale-95 flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              <span>{lang === 'ar' ? 'طلب انضمام كوكيل' : 'Become a Partner'}</span>
            </button>
            <button
              onClick={onExploreCatalog}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/15 transition-all"
            >
              <span>{lang === 'ar' ? 'تصفح الكتالوج' : 'Browse Catalog'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Selected Client Modal Details */}
      {selectedClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0d1e2e] border border-lime-500/40 shadow-2xl p-6 sm:p-8 text-right overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-lime-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header / Logo Container */}
            <div className="w-full bg-white rounded-2xl p-4 shadow-md flex items-center justify-center mb-6">
              <ClientLogo logoKey={selectedClient.logoKey} className="max-h-24" />
            </div>

            {/* Content Details */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {lang === 'ar' ? selectedClient.nameAr : selectedClient.nameEn}
                  </h3>
                  <p className="text-sm font-semibold text-lime-400 mt-0.5">
                    {lang === 'ar' ? selectedClient.categoryAr : selectedClient.categoryEn}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-lime-500/20 text-lime-400 border border-lime-500/30 text-xs font-bold shrink-0">
                  {lang === 'ar' ? selectedClient.badgeAr : selectedClient.badgeEn}
                </span>
              </div>

              <div className="bg-slate-900/80 rounded-xl p-4 border border-white/10 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <MapPin className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>
                    {lang === 'ar' ? 'النطاق الجغرافي:' : 'Location:'}{' '}
                    <span className="text-white font-bold">
                      {lang === 'ar' ? selectedClient.locationAr : selectedClient.locationEn}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <Boxes className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>
                    {lang === 'ar' ? 'نطاق التوريد:' : 'Supplied Parts:'}{' '}
                    <span className="text-white font-bold">
                      حوامل الصدامات، بطانات الرفارف، زوايا المرايات، الشبوك البلاستيكية
                    </span>
                  </span>
                </div>
                <div className="flex items-start gap-2 text-slate-300 pt-1 border-t border-white/10">
                  <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {lang === 'ar' ? selectedClient.taglineAr : selectedClient.taglineEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => {
                  setSelectedClient(null);
                  onOpenDealerModal();
                }}
                className="flex-1 py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-sm transition-all text-center shadow-lg shadow-lime-500/20"
              >
                {lang === 'ar' ? 'طلب تعامل وتوريد' : 'Partner Supply Request'}
              </button>
              <button
                onClick={() => setSelectedClient(null)}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 font-bold text-sm transition-all"
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
