import React from 'react';
import { Users, Calendar, Clock, ArrowLeft, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { NEWS_ITEMS } from '../data/mockData';
import { Language, NewsItem } from '../types';

interface CommunitySectionProps {
  lang: Language;
  onReadArticle: (item: NewsItem) => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ lang, onReadArticle }) => {
  return (
    <section id="community" className="py-24 bg-[#081320] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/30 text-xs font-bold mb-3">
              <Users className="w-4 h-4" />
              <span>{lang === 'ar' ? 'المجتمع والمركز الإعلامي' : 'Community & Media Hub'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {lang === 'ar' ? 'أخبار الصناعة، الفعاليات، والنصائح الهندسية' : 'Industry News, Events & Technical Insights'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              {lang === 'ar'
                ? 'تابع أحدث التطورات في مصنع VPI ومشاركتنا في المعارض الدولية وإرشادات صيانة المركبات.'
                : 'Stay updated with VPI factory expansions, international exhibitions, and engineering maintenance guides.'}
            </p>
          </div>
        </div>

        {/* 3-Card News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <article
              key={item.id}
              id={`news-card-${item.id}`}
              className="rounded-3xl bg-gradient-to-b from-[#0e243a] to-[#0a1827] border border-white/10 overflow-hidden shadow-xl hover:border-lime-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-[#07131e]">
                  <img
                    src={item.image}
                    alt={item.titleAr}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-lime-500 text-slate-950 font-bold text-xs shadow-md">
                    {lang === 'ar' ? item.categoryAr : item.categoryEn}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-right space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-lime-400" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-lime-400" />
                      {lang === 'ar' ? item.readTimeAr : item.readTimeEn}
                    </span>
                  </div>

                  <h3
                    onClick={() => onReadArticle(item)}
                    className="text-lg font-bold text-white leading-snug group-hover:text-lime-300 transition-colors cursor-pointer"
                  >
                    {lang === 'ar' ? item.titleAr : item.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {lang === 'ar' ? item.summaryAr : item.summaryEn}
                  </p>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4">
                <button
                  onClick={() => onReadArticle(item)}
                  id={`read-article-btn-${item.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-lime-400 hover:text-lime-300 transition-colors cursor-pointer group/btn"
                >
                  <span>{lang === 'ar' ? 'قراءة التفاصيل كاملة' : 'Read Full Story'}</span>
                  {lang === 'ar' ? (
                    <ArrowLeft className="w-3.5 h-3.5 group-hover/btn:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
