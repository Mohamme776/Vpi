import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Award, ShieldCheck, Truck, Wrench } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';
import { Language } from '../types';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredFaqs = filterCategory === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((f) => f.category === filterCategory);

  const categories = [
    { id: 'all', labelAr: 'جميع الأسئلة', labelEn: 'All Questions' },
    { id: 'dealers', labelAr: 'الوكالة والتوزيع', labelEn: 'Dealership' },
    { id: 'quality', labelAr: 'الجودة والمواصفات', labelEn: 'Quality & SASO' },
    { id: 'warranty', labelAr: 'الضمان والاستبدال', labelEn: 'Warranty' },
    { id: 'ordering', labelAr: 'التوريد والشحن', labelEn: 'Supply & Freight' },
  ];

  return (
    <section id="faq" className="py-24 bg-[#06101c] text-slate-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/30 text-xs font-bold mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>{lang === 'ar' ? 'مركز المساعدة والإجابات' : 'Help & Answers Center'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {lang === 'ar' ? 'الأسئلة الأكثر شيوعاً' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            {lang === 'ar'
              ? 'كل ما تود معرفته حول إجراءات الوكالة، معايير الجودة، الضمان المصنعي، وسياسات التوريد.'
              : 'Everything you need to know about our dealership process, SASO compliance, warranty, and supply logistics.'}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filterCategory === cat.id
                  ? 'bg-lime-500 text-slate-950 font-black shadow-md'
                  : 'bg-[#0a1b2d] text-slate-300 hover:bg-[#0e243a] hover:text-white border border-white/10'
              }`}
            >
              {lang === 'ar' ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-gradient-to-b from-[#0f2842] to-[#0a1c2f] border-lime-400/50 shadow-xl'
                    : 'bg-[#0a1827] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {lang === 'ar' ? faq.questionAr : faq.questionEn}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-lime-500 text-slate-950' : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-right border-t border-white/10 text-slate-200 text-sm sm:text-base leading-relaxed animate-in fade-in duration-300">
                    <p>{lang === 'ar' ? faq.answerAr : faq.answerEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
