import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  Layers,
  Wrench,
  CheckCircle,
  Eye,
  Send,
  Sparkles,
  Search,
  SlidersHorizontal,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { VehiclePart, Language } from '../types';
import { CATEGORIES } from '../data/mockData';

interface PartsCatalogSectionProps {
  lang: Language;
  parts: VehiclePart[];
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  onSelectPart: (part: VehiclePart) => void;
  onOpenInquiry: (part: VehiclePart) => void;
}

export const PartsCatalogSection: React.FC<PartsCatalogSectionProps> = ({
  lang,
  parts,
  selectedCategory,
  onSelectCategory,
  onSelectPart,
  onOpenInquiry,
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'recommended' | 'warranty' | 'name'>('recommended');

  const sortedParts = [...parts].sort((a, b) => {
    if (sortBy === 'warranty') return b.warrantyMonths - a.warrantyMonths;
    if (sortBy === 'name') return a.nameAr.localeCompare(b.nameAr);
    return 0;
  });

  return (
    <section id="products" className="py-20 bg-[#081320] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/30 text-xs font-bold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'كتالوج القطع البلاستيكية للمركبات' : 'Automotive Plastics & Brackets Catalog'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              {lang === 'ar' ? 'القطع البلاستيكية وحوامل الصدامات والبطانات المعتمدة' : 'Certified Automotive Plastics, Brackets & Liners'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              {lang === 'ar'
                ? 'مصنعة بقوالب حقن فائقة الدقة في مجمع VPI بالخرج من بوليمرات هندسية مقاومة للحرارة والأشعة فوق البنفسجية مع ضمان يصل إلى 3 سنوات.'
                : 'Precision injection-molded in our Al-Kharj facility using UV-stabilized engineering polymers with up to 3 years warranty.'}
            </p>
          </div>

          {/* Catalog Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-[#0b1a2b] px-3 py-2 rounded-xl border border-white/10 text-xs text-slate-300">
              <SlidersHorizontal className="w-3.5 h-3.5 text-lime-400" />
              <span>{lang === 'ar' ? 'الترتيب:' : 'Sort:'}</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-white font-bold outline-none cursor-pointer"
              >
                <option value="recommended" className="bg-[#0b1a2b] text-white">
                  {lang === 'ar' ? 'الموصى به' : 'Recommended'}
                </option>
                <option value="warranty" className="bg-[#0b1a2b] text-white">
                  {lang === 'ar' ? 'الأطول ضماناً' : 'Longest Warranty'}
                </option>
                <option value="name" className="bg-[#0b1a2b] text-white">
                  {lang === 'ar' ? 'الاسم أبجدياً' : 'Name: A to Z'}
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Horizontal Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-white/10">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-filter-btn-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-lime-500 text-slate-950 shadow-lg shadow-lime-500/20 font-black'
                    : 'bg-[#0e2135] text-slate-300 hover:bg-[#132d47] hover:text-white border border-white/5'
                }`}
              >
                <span>{lang === 'ar' ? cat.nameAr : cat.nameEn}</span>
              </button>
            );
          })}
        </div>

        {/* Parts Grid */}
        {sortedParts.length === 0 ? (
          <div className="py-16 text-center bg-[#0d2033]/60 rounded-2xl border border-dashed border-white/10">
            <Search className="w-12 h-12 text-slate-500 mx-auto mb-3 animate-pulse" />
            <h3 className="text-xl font-bold text-white mb-1">
              {lang === 'ar' ? 'لم يتم العثور على قطع تطابق الفلتر المحدد' : 'No parts match the selected filter'}
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              {lang === 'ar'
                ? 'جرب اختيار فئة أخرى أو تصفير الفلاتر للبحث في كامل الكتالوج'
                : 'Try changing your search parameters or reset filters'}
            </p>
            <button
              onClick={() => onSelectCategory('all')}
              className="px-5 py-2 rounded-xl bg-lime-500 text-slate-950 font-bold text-sm"
            >
              {lang === 'ar' ? 'عرض جميع المنتجات' : 'Show All Parts'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedParts.map((part) => (
              <div
                key={part.id}
                id={`part-card-${part.id}`}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0e2338] to-[#0a1827] border border-white/10 hover:border-lime-400/40 p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-48 rounded-xl overflow-hidden bg-[#07131e] mb-4">
                    <img
                      src={part.image}
                      alt={part.nameAr}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1827] via-transparent to-transparent opacity-60" />

                    {/* Quality Badge */}
                    {part.badge && (
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-lime-500 text-slate-950 font-black text-[10px] tracking-wide shadow-md">
                        {lang === 'ar' ? part.badge : part.badgeEn}
                      </span>
                    )}

                    {/* Saudi Made Mark */}
                    <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-bold text-slate-200 border border-white/10">
                      صناعة سعودية 🇸🇦
                    </span>

                    {/* Warranty Tag */}
                    <span className="absolute top-2.5 left-2.5 px-2 py-1 rounded-md bg-[#0e263d]/90 backdrop-blur-sm text-lime-400 font-bold text-[10px] border border-lime-400/30">
                      ضمان {part.warrantyMonths} شهر
                    </span>
                  </div>

                  {/* OEM & Code */}
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-slate-400 mb-1.5">
                    <span className="bg-white/5 px-2 py-0.5 rounded">
                      OEM: {part.oemNumber.split('/')[0]}
                    </span>
                    <span className="text-lime-400 font-bold">
                      {part.inStock ? (lang === 'ar' ? 'متوفر بالمستودع' : 'In Stock') : 'طلب مسبق'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectPart(part)}
                    className="text-base font-bold text-white leading-snug line-clamp-2 hover:text-lime-300 transition-colors cursor-pointer mb-2"
                  >
                    {lang === 'ar' ? part.nameAr : part.nameEn}
                  </h3>

                  {/* Description snippet */}
                  <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                    {lang === 'ar' ? part.descriptionAr : part.descriptionEn}
                  </p>
                </div>

                {/* Card Footer: Status & Action Buttons */}
                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-lime-400" />
                      <span className="font-semibold">{lang === 'ar' ? 'توريد مصنعي معتمد' : 'Factory Certified'}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-lime-500/10 text-lime-300 border border-lime-500/20 font-bold">
                      {lang === 'ar' ? 'مطابقة 100%' : '100% Fit'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      id={`part-details-btn-${part.id}`}
                      onClick={() => onSelectPart(part)}
                      className="py-2.5 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-100 font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-lime-400" />
                      <span>{lang === 'ar' ? 'المواصفات' : 'Details'}</span>
                    </button>
                    <button
                      id={`part-inquiry-btn-${part.id}`}
                      onClick={() => onOpenInquiry(part)}
                      className="py-2.5 px-2.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1 shadow-sm cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'طلب تسعيرة' : 'Inquire'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
