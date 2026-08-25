import React, { useState } from 'react';
import { X, Search, Car, ArrowLeft, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { SAMPLE_PARTS } from '../data/mockData';
import { VehiclePart, Language } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectPart: (part: VehiclePart) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectPart,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const results = searchTerm.trim()
    ? SAMPLE_PARTS.filter(
        (p) =>
          p.nameAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.oemNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.models.some((m) => m.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : SAMPLE_PARTS.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="global-search-modal"
        className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-b from-[#0e253d] to-[#081524] border border-lime-500/40 p-6 shadow-2xl text-slate-100 text-right animate-in zoom-in-95 duration-200"
      >
        {/* Top Search Input */}
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center transition-colors shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative flex-1">
            <input
              autoFocus
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={
                lang === 'ar'
                  ? 'ابحث باسم القطعة، الموديل (هايلوكس، لاندكروزر...) أو رقم OEM...'
                  : 'Search by part name, car model, or OEM code...'
              }
              className="w-full bg-[#06121f] text-white text-base rounded-2xl border border-lime-500/30 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-3.5 px-4 pr-11 outline-none font-medium"
            />
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-lime-400" />
          </div>
        </div>

        {/* Quick Tag Pills */}
        <div className="flex items-center gap-2 py-3 overflow-x-auto text-xs text-slate-400">
          <span className="font-bold shrink-0">{lang === 'ar' ? 'اقتراحات سريعة:' : 'Suggestions:'}</span>
          {['هايلوكس', 'لاندكروزر', 'فرامل', 'صدام', 'رادياتير', 'ايسوزو'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-lime-500/20 hover:text-lime-300 border border-white/10 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-96 overflow-y-auto space-y-2 pt-2 scrollbar-thin scrollbar-thumb-white/10">
          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm">{lang === 'ar' ? 'لا توجد نتائج مطابقة لبحثك' : 'No matching parts found'}</p>
            </div>
          ) : (
            results.map((part) => (
              <div
                key={part.id}
                onClick={() => {
                  onSelectPart(part);
                  onClose();
                }}
                className="p-3 rounded-2xl bg-white/5 hover:bg-lime-500/15 border border-white/5 hover:border-lime-400/40 transition-all flex items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={part.image}
                    alt={part.nameAr}
                    className="w-14 h-14 rounded-xl object-cover bg-black/40 shrink-0"
                  />
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-lime-400">
                      <span>{part.partNumber}</span>
                      <span>•</span>
                      <span className="text-slate-400">{part.make.toUpperCase()}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-lime-300 transition-colors line-clamp-1">
                      {lang === 'ar' ? part.nameAr : part.nameEn}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1">{part.descriptionAr}</p>
                  </div>
                </div>

                <div className="text-left shrink-0">
                  <span className="text-sm font-bold text-white font-mono">{part.priceEstSAR} ر.س</span>
                  <span className="block text-[10px] text-lime-400">{lang === 'ar' ? 'عرض المواصفات' : 'View'}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
