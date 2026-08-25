import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  Mail,
  Building,
  Factory,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { BRANCH_LOCATIONS } from '../data/mockData';
import { Language } from '../types';

interface LocationsSectionProps {
  lang: Language;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ lang }) => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>(BRANCH_LOCATIONS[0].id);

  const activeBranch =
    BRANCH_LOCATIONS.find((b) => b.id === selectedBranchId) || BRANCH_LOCATIONS[0];

  return (
    <section id="locations" className="py-24 bg-[#06101c] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/30 text-xs font-bold mb-4">
            <MapPin className="w-4 h-4" />
            <span>{lang === 'ar' ? 'شبكة الفروع والمصنع' : 'Factory & Branch Network'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            {lang === 'ar' ? 'تجدنا بالقرب منك في كافة مناطق المملكة' : 'Find Us Near You Across Saudi Arabia'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4">
            {lang === 'ar'
              ? 'مجمع مصنعنا الرئيسي بالخرج ومراكز التوزيع الكبرى في الرياض، جدة، الدمام، وخميس مشيط لخدمتك.'
              : 'Our main industrial facility in Al-Kharj alongside key distribution hubs in Riyadh, Jeddah, Dammam, and Khamis Mushait.'}
          </p>
        </div>

        {/* Branch Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {BRANCH_LOCATIONS.map((branch) => {
            const isSelected = branch.id === selectedBranchId;
            return (
              <button
                key={branch.id}
                id={`branch-tab-${branch.id}`}
                onClick={() => setSelectedBranchId(branch.id)}
                className={`p-3.5 sm:p-4 rounded-2xl text-right transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#102d4b] to-[#0d2238] border-lime-400 shadow-lg shadow-lime-500/20 text-white'
                    : 'bg-[#0a1827] border-white/10 hover:border-white/20 text-slate-300 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                      isSelected ? 'bg-lime-500 text-slate-950' : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    {branch.type === 'factory' ? <Factory className="w-3.5 h-3.5" /> : <Building className="w-3.5 h-3.5" />}
                  </div>
                  {branch.isHeadquarters && (
                    <span className="px-1.5 py-0.5 rounded bg-lime-500/20 text-lime-400 text-[10px] font-bold">
                      المصنع الرئيسي
                    </span>
                  )}
                </div>
                <p className="font-bold text-xs sm:text-sm leading-snug">
                  {lang === 'ar' ? branch.cityAr.split('(')[0] : branch.cityEn.split('(')[0]}
                </p>
                <span className="text-[10px] text-slate-400 mt-1">
                  {branch.type === 'factory' ? (lang === 'ar' ? 'مجمع تصنيع وإدارة' : 'Manufacturing HQ') : (lang === 'ar' ? 'مركز توزيع ولوجستيات' : 'Regional Hub')}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Branch Detailed Card & Interactive Map Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Card (Right in RTL) */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-[#0e243a] to-[#0a1928] border border-white/15 p-6 sm:p-8 shadow-xl flex flex-col justify-between text-right">
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-lime-500/20 text-lime-400 text-xs font-bold mb-2">
                    {lang === 'ar' ? activeBranch.cityAr : activeBranch.cityEn}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {lang === 'ar' ? activeBranch.nameAr : activeBranch.nameEn}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-lime-500/10 text-lime-400 flex items-center justify-center border border-lime-500/30 shrink-0">
                  {activeBranch.type === 'factory' ? <Factory className="w-6 h-6" /> : <Building className="w-6 h-6" />}
                </div>
              </div>

              {/* Coordinates & Address */}
              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-xs text-slate-400 mb-0.5">
                      {lang === 'ar' ? 'العنوان الجغرافي:' : 'Physical Address:'}
                    </p>
                    <p className="leading-relaxed">
                      {lang === 'ar' ? activeBranch.addressAr : activeBranch.addressEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-xs text-slate-400 mb-0.5">
                      {lang === 'ar' ? 'أوقات العمل واستقبال الطلبيات:' : 'Working Hours:'}
                    </p>
                    <p className="leading-relaxed font-medium">
                      {lang === 'ar' ? activeBranch.hoursAr : activeBranch.hoursEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-xs text-slate-400 mb-0.5">
                      {lang === 'ar' ? 'البريد الإلكتروني المباشر:' : 'Direct Email:'}
                    </p>
                    <a
                      href={`mailto:${activeBranch.email}`}
                      className="text-lime-400 hover:underline font-mono text-xs"
                    >
                      {activeBranch.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Contacts */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${activeBranch.phone}`}
                id={`call-branch-${activeBranch.id}`}
                className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 border border-white/10"
              >
                <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                <span dir="ltr" className="font-mono tracking-wider">{activeBranch.phone}</span>
              </a>

              <a
                href={`https://wa.me/${activeBranch.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                  `السلام عليكم، أود الاستفسار بخصوص قطع غيار VPI من فرع ${activeBranch.nameAr}`
                )}`}
                target="_blank"
                rel="noreferrer"
                id={`whatsapp-branch-${activeBranch.id}`}
                className="flex-1 py-3 px-4 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-lime-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'ar' ? 'محادثة واتساب مباشرة' : 'WhatsApp Chat'}</span>
              </a>
            </div>
          </div>

          {/* Interactive Geographic Map View (Left in RTL) */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-white/15 shadow-xl bg-[#091a2b] relative flex flex-col min-h-[380px]">
            {/* Custom Styled Map Container */}
            <div className="relative flex-1 w-full h-full min-h-[320px] bg-[#071421] flex items-center justify-center p-6 text-center">
              {/* Map grid lines overlay */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #8bc34a 1px, transparent 1px), linear-gradient(to right, #1a3a5c 1px, transparent 1px), linear-gradient(to bottom, #1a3a5c 1px, transparent 1px)',
                  backgroundSize: '24px 24px, 48px 48px, 48px 48px',
                }}
              />

              {/* Saudi Arabia Schematic Locator Pins */}
              <div className="relative z-10 space-y-4 max-w-sm">
                <div className="w-16 h-16 rounded-full bg-lime-500/20 border-2 border-lime-400 text-lime-400 flex items-center justify-center mx-auto animate-bounce">
                  <MapPin className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  {lang === 'ar' ? activeBranch.nameAr : activeBranch.nameEn}
                </h4>
                <p className="text-xs font-mono text-lime-300">
                  الإحداثيات: Lat {activeBranch.coordinates.lat} / Lng {activeBranch.coordinates.lng}
                </p>
                <p className="text-xs text-slate-300">
                  {lang === 'ar' ? activeBranch.addressAr : activeBranch.addressEn}
                </p>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${activeBranch.coordinates.lat},${activeBranch.coordinates.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  id="open-google-maps-btn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lime-500 text-slate-950 font-bold text-xs hover:bg-lime-400 transition-all shadow-md mt-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'فتح الاتجاهات عبر Google Maps' : 'Open in Google Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
