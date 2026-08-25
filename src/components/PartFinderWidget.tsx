import React, { useState } from 'react';
import { Search, ChevronDown, Filter, Car, Calendar, Wrench, Sparkles, RefreshCw } from 'lucide-react';
import { MAKES, MODELS_BY_MAKE, YEARS, CATEGORIES } from '../data/mockData';
import { Language, SearchFilterState } from '../types';

interface PartFinderWidgetProps {
  lang: Language;
  filters: SearchFilterState;
  onFilterChange: (newFilters: Partial<SearchFilterState>) => void;
  onSearchSubmit: () => void;
  onResetFilters: () => void;
  matchingCount: number;
}

export const PartFinderWidget: React.FC<PartFinderWidgetProps> = ({
  lang,
  filters,
  onFilterChange,
  onSearchSubmit,
  onResetFilters,
  matchingCount,
}) => {
  const currentModels = filters.make && MODELS_BY_MAKE[filters.make]
    ? MODELS_BY_MAKE[filters.make]
    : [
        { id: 'all', nameAr: 'جميع الموديلات', nameEn: 'All Models' },
        { id: 'hilux', nameAr: 'هايلوكس (Hilux)', nameEn: 'Hilux' },
        { id: 'landcruiser', nameAr: 'لاندكروزر (Land Cruiser)', nameEn: 'Land Cruiser' },
        { id: 'dmax', nameAr: 'ديماكس (D-Max)', nameEn: 'D-Max' },
        { id: 'patrol', nameAr: 'باترول (Patrol)', nameEn: 'Patrol' },
      ];

  return (
    <div
      id="part-finder-widget"
      className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 mb-12"
    >
      <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#102a45] via-[#0d2238] to-[#0a1b2d] border border-lime-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-5 sm:p-8 overflow-hidden backdrop-blur-xl">
        {/* Subtle geometric background lines */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Banner Header matching the screenshot styling */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lime-500/20 text-lime-400 flex items-center justify-center border border-lime-500/40">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
                {lang === 'ar' ? 'العثور على أجزاء' : 'Find Your Parts'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                {lang === 'ar'
                  ? 'اختر مواصفات مركبتك أو ابحث برقم القطعة (OEM Number) مباشرة'
                  : 'Select your vehicle specs or search directly by OEM part number'}
              </p>
            </div>
          </div>

          {/* Quick OEM & Result Counter */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-semibold text-lime-300 border border-white/10">
              {lang === 'ar' ? `${matchingCount} قطعة مطابقة متوفرة` : `${matchingCount} parts available`}
            </span>
            <button
              onClick={onResetFilters}
              id="reset-finder-btn"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-xs flex items-center gap-1"
              title="إعادة تعيين الفلاتر"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'ar' ? 'تصفير' : 'Reset'}</span>
            </button>
          </div>
        </div>

        {/* Dropdown Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. Make (الصنع) */}
          <div className="relative">
            <label
              htmlFor="filter-make-select"
              className="block text-xs font-bold text-slate-200 mb-1.5 text-right flex items-center justify-between"
            >
              <span>{lang === 'ar' ? 'الصنع' : 'Make'}</span>
              <Car className="w-3.5 h-3.5 text-lime-400" />
            </label>
            <div className="relative">
              <select
                id="filter-make-select"
                value={filters.make}
                onChange={(e) => onFilterChange({ make: e.target.value, model: 'all' })}
                className="w-full appearance-none bg-[#0a1826] hover:bg-[#0f2438] text-white text-sm font-medium rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-3 px-4 pr-10 outline-none transition-all cursor-pointer"
              >
                {MAKES.map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#0b1b2d] text-white">
                    {lang === 'ar' ? m.nameAr : m.nameEn}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* 2. Model (الموديل) */}
          <div className="relative">
            <label
              htmlFor="filter-model-select"
              className="block text-xs font-bold text-slate-200 mb-1.5 text-right flex items-center justify-between"
            >
              <span>{lang === 'ar' ? 'الموديل' : 'Model'}</span>
              <Car className="w-3.5 h-3.5 text-lime-400" />
            </label>
            <div className="relative">
              <select
                id="filter-model-select"
                value={filters.model}
                onChange={(e) => onFilterChange({ model: e.target.value })}
                className="w-full appearance-none bg-[#0a1826] hover:bg-[#0f2438] text-white text-sm font-medium rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-3 px-4 pr-10 outline-none transition-all cursor-pointer"
              >
                {currentModels.map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#0b1b2d] text-white">
                    {lang === 'ar' ? m.nameAr : m.nameEn}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* 3. Year (السنة) */}
          <div className="relative">
            <label
              htmlFor="filter-year-select"
              className="block text-xs font-bold text-slate-200 mb-1.5 text-right flex items-center justify-between"
            >
              <span>{lang === 'ar' ? 'السنة' : 'Year'}</span>
              <Calendar className="w-3.5 h-3.5 text-lime-400" />
            </label>
            <div className="relative">
              <select
                id="filter-year-select"
                value={filters.year}
                onChange={(e) => onFilterChange({ year: e.target.value })}
                className="w-full appearance-none bg-[#0a1826] hover:bg-[#0f2438] text-white text-sm font-medium rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-3 px-4 pr-10 outline-none transition-all cursor-pointer"
              >
                {YEARS.map((y) => (
                  <option key={y} value={y} className="bg-[#0b1b2d] text-white">
                    {y === 'all' ? (lang === 'ar' ? 'جميع سنوات الصنع' : 'All Years') : y}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* 4. Category (قطع الغيار) */}
          <div className="relative">
            <label
              htmlFor="filter-category-select"
              className="block text-xs font-bold text-slate-200 mb-1.5 text-right flex items-center justify-between"
            >
              <span>{lang === 'ar' ? 'تصنيف قطع الغيار' : 'Part Category'}</span>
              <Wrench className="w-3.5 h-3.5 text-lime-400" />
            </label>
            <div className="relative">
              <select
                id="filter-category-select"
                value={filters.category}
                onChange={(e) => onFilterChange({ category: e.target.value })}
                className="w-full appearance-none bg-[#0a1826] hover:bg-[#0f2438] text-white text-sm font-medium rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-3 px-4 pr-10 outline-none transition-all cursor-pointer"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id} className="bg-[#0b1b2d] text-white">
                    {lang === 'ar' ? c.nameAr : c.nameEn}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom Search Bar & Submit Trigger Button */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
          {/* Keyword / OEM Number Live Input */}
          <div className="relative flex-1 w-full">
            <input
              id="part-search-input"
              type="text"
              value={filters.keyword}
              onChange={(e) => onFilterChange({ keyword: e.target.value })}
              placeholder={
                lang === 'ar'
                  ? 'أدخل اسم القطعة أو رقم OEM (مثال: 04465-0K260 أو فحمات هايلوكس)...'
                  : 'Search by part name or OEM number (e.g. 04465-0K260)...'
              }
              className="w-full bg-[#07131f] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-3.5 px-4 pr-11 outline-none transition-all"
            />
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            {filters.keyword && (
              <button
                onClick={() => onFilterChange({ keyword: '' })}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Big Green Submit Button matching the screenshot */}
          <button
            id="part-finder-submit-btn"
            onClick={onSearchSubmit}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-slate-950 font-black text-base shadow-xl shadow-lime-500/25 hover:shadow-lime-500/40 transition-all flex items-center justify-center gap-2 transform active:scale-95 shrink-0"
          >
            <Search className="w-5 h-5" />
            <span>{lang === 'ar' ? 'العثور على أجزاء' : 'Find Parts'}</span>
          </button>
        </div>

        {/* Popular Quick Filter Chips */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-300">
          <span className="font-bold text-slate-400">{lang === 'ar' ? 'أكثر بحثاً في القطع البلاستيكية:' : 'Popular Plastics:'}</span>
          {[
            { label: 'حوامل صدام هايلوكس', make: 'toyota', model: 'hilux', category: 'brackets' },
            { label: 'بطانات رفارف ديماكس', make: 'isuzu', model: 'dmax', category: 'liners' },
            { label: 'زوايا مرايات باترول', make: 'nissan', model: 'patrol', category: 'mirrors' },
            { label: 'شبوك وديكورات لاندكروزر', make: 'toyota', model: 'landcruiser', category: 'grilles_trims' },
            { label: 'أغطية أسفل المحرك', category: 'undercovers' },
          ].map((chip, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (chip.make) onFilterChange({ make: chip.make, model: chip.model || 'all' });
                if (chip.category) onFilterChange({ category: chip.category });
                onSearchSubmit();
              }}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-lime-500/20 hover:text-lime-300 border border-white/10 hover:border-lime-500/30 transition-colors cursor-pointer"
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
