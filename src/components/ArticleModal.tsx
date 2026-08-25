import React from 'react';
import { X, Calendar, Clock, Share2, Tag, BookOpen, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { NewsItem, Language } from '../types';

interface ArticleModalProps {
  article: NewsItem | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="article-reader-modal"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-[#0e253d] to-[#081524] border border-lime-500/40 p-6 sm:p-8 shadow-2xl text-slate-100 text-right"
      >
        {/* Close */}
        <button
          onClick={onClose}
          id="close-article-modal"
          className="absolute top-5 left-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Image Banner */}
        <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-[#07131e]">
          <img
            src={article.image}
            alt={article.titleAr}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081524] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 right-4 px-3 py-1 rounded-md bg-lime-500 text-slate-950 font-black text-xs">
            {lang === 'ar' ? article.categoryAr : article.categoryEn}
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-lime-400" />
            {article.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-lime-400" />
            {lang === 'ar' ? article.readTimeAr : article.readTimeEn}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-black text-white leading-snug mb-4">
          {lang === 'ar' ? article.titleAr : article.titleEn}
        </h2>

        {/* Full Content */}
        <div className="space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed border-t border-white/10 pt-4">
          <p className="font-semibold text-lime-300">
            {lang === 'ar' ? article.summaryAr : article.summaryEn}
          </p>

          <p>
            {lang === 'ar'
              ? 'تواصل شركة أجزاء المركبة للصناعة (VPI) ترسيخ مكانتها كأحد أبرز قلاع التصنيع الوطني لقطع غيار وهياكل السيارات في المملكة العربية السعودية، مستندة إلى استثمارات نوعية في خطوط الروبوتات والذكاء الاصطناعي الصناعي بمجمعها في المدينة الصناعية بمحافظة الخرج.'
              : 'VPI continues to solidify its role as a premier national automotive parts manufacturer in Saudi Arabia, leveraging cutting-edge robotics and automated tooling at its Al-Kharj industrial complex.'}
          </p>

          <p>
            {lang === 'ar'
              ? 'وتؤكد الإدارة العليا للشركة أن المنتجات المصنعة محلياً تتمتع بقدرة استثنائية على تحمل درجات حرارة الصيف القصوى وعوامل التآكل الرملي، مما يجعلها الخيار الأول لشركات النقل والتوزيع وأساطيل الشاحنات الخفيفة.'
              : 'Executive management underscores that locally produced components feature unmatched thermal stability and sand-abrasion resistance, making them the preferred choice for commercial fleets.'}
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            {lang === 'ar' ? 'المركز الإعلامي - شركة أجزاء المركبة للصناعة' : 'VPI Media Hub'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-lime-500 text-slate-950 font-bold text-xs hover:bg-lime-400 transition-colors"
          >
            {lang === 'ar' ? 'إغلاق المقال' : 'Close Article'}
          </button>
        </div>
      </div>
    </div>
  );
};
