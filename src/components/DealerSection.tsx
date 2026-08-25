import React from 'react';
import { Award, Shield, CheckCircle, Percent, Headset, Truck, ArrowRight, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface DealerSectionProps {
  lang: Language;
  onOpenDealerModal: () => void;
}

export const DealerSection: React.FC<DealerSectionProps> = ({ lang, onOpenDealerModal }) => {
  const benefits = [
    {
      icon: Percent,
      titleAr: 'أسعار جملة تفضيلية وهوامش ربحية عالية',
      titleEn: 'Preferential Wholesale Margins',
      descAr: 'خصومات حجمية وتسهيلات دفع مرنة تضمن أعلى عائد استثماري لنشاطك التجاري.',
      descEn: 'High-volume tier discounts and flexible credit facilities maximizing your ROI.',
    },
    {
      icon: Shield,
      titleAr: 'حصرية التوزيع الجغرافي للمناطق',
      titleEn: 'Territorial Exclusivity',
      descAr: 'فرص الحصول على حقوق التوزيع الحصري في مدينتك أو منطقتك لتعزيز حصتك السوقية.',
      descEn: 'Exclusive regional territory rights protecting your market share.',
    },
    {
      icon: Truck,
      titleAr: 'أولوية التوريد والشحن السريع',
      titleEn: 'Priority Dispatch & Logistics',
      descAr: 'شحن مباشر من مصنع الخرج ومستودعاتنا المركزية خلال 24 - 48 ساعة مجاناً للطلبيات المعتمدة.',
      descEn: 'Direct fast shipping from our Al-Kharj plant and central hubs within 24-48 hours.',
    },
    {
      icon: Headset,
      titleAr: 'دعم تسويقي وتقني مخصص',
      titleEn: 'Dedicated Marketing & Tech Support',
      descAr: 'كتالوجات رقمية ومطبوعة، مواد دعائية لمعرضك، وتدريب مستمر لفريق المبيعات لديك.',
      descEn: 'Full POS branding kits, digital catalogs, and continuous technical training.',
    },
  ];

  return (
    <section id="dealers" className="py-20 bg-gradient-to-b from-[#081320] via-[#0d2238] to-[#081320] text-slate-100 relative overflow-hidden">
      {/* Decorative styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#102d4b] via-[#0a1e33] to-[#071626] border border-lime-500/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Light accents */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Right text in RTL */}
            <div className="lg:col-span-7 text-right space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/20 text-lime-300 border border-lime-400/40 text-xs font-bold">
                <Award className="w-4 h-4 text-lime-400" />
                <span>{lang === 'ar' ? 'برنامج الوكلاء والموزعين المعتمدين' : 'Authorized Dealer Network Program'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {lang === 'ar' ? (
                  <>
                    كن شريكاً استراتيجياً وانضم لشبكة وكلاء <span className="text-lime-400">VPI</span>
                  </>
                ) : (
                  <>
                    Become a Strategic Partner & Join the <span className="text-lime-400">VPI</span> Network
                  </>
                )}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {lang === 'ar'
                  ? 'سواء كنت تدير متجر قطع غيار، مجمع ورش وصيانة، أو شركة تشغيل أساطيل، نوفر لك حلول توريد مباشرة من المصنع السعودي بجودة معتمدة وضمان استبدال فوري.'
                  : 'Whether you run auto parts retailers, maintenance chains, or fleet operations, we supply direct factory parts backed by instant warranties.'}
              </p>

              {/* 4 Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {benefits.map((b, idx) => {
                  const Icon = b.icon;
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-right">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-8 h-8 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                          {lang === 'ar' ? b.titleAr : b.titleEn}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed pr-10">
                        {lang === 'ar' ? b.descAr : b.descEn}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  id="dealer-section-cta-btn"
                  onClick={onOpenDealerModal}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-slate-950 font-black text-base shadow-xl shadow-lime-500/30 hover:shadow-lime-500/50 transition-all flex items-center gap-2 transform active:scale-95 cursor-pointer"
                >
                  <Award className="w-5 h-5" />
                  <span>{lang === 'ar' ? 'تقديم طلب الانضمام كوكيل الآن' : 'Apply for Dealership Now'}</span>
                </button>
                <span className="text-xs text-slate-400">
                  {lang === 'ar' ? '⚡ دراسة الطلب والرد خلال 48 ساعة' : '⚡ Application reviewed within 48h'}
                </span>
              </div>
            </div>

            {/* Left Preview / Dealer Badge Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl bg-[#091a2b] border border-lime-500/30 p-6 shadow-xl space-y-5 text-right">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-lime-400 animate-pulse" />
                    <span className="text-xs font-bold text-slate-200">
                      {lang === 'ar' ? 'حالة التسجيل: مفتوح حالياً' : 'Registration: Open'}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-lime-500/20 text-lime-400 font-mono text-xs font-bold">
                    VPI-DEALER-2026
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <p className="font-bold text-white text-sm">
                    {lang === 'ar' ? 'المتطلبات الأساسية للوكالة:' : 'Key Qualification Requirements:'}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-lime-400 shrink-0" />
                      <span>سجل تجاري ساري في نشاط تجارة قطع غيار السيارات أو الصيانة.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-lime-400 shrink-0" />
                      <span>موقع معرض أو مستودع مناسب في المدينة المستهدفة.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-lime-400 shrink-0" />
                      <span>الالتزام بمعايير خدمة العملاء وسياسة الضمان المصنعي لـ VPI.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-lime-500/10 border border-lime-500/20 text-center">
                  <p className="text-xs text-lime-300 font-bold">
                    {lang === 'ar'
                      ? 'خصومات تصل إلى 35% لطلبيات الجملة السنوية والعقود المؤسسية'
                      : 'Up to 35% discount for annual wholesale contracts'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
