import React from 'react';
import {
  Factory,
  ShieldCheck,
  Award,
  Cpu,
  CheckCircle2,
  TrendingUp,
  Truck,
  Users,
  Compass,
  FileCheck,
} from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  lang: Language;
  onOpenDealerModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenDealerModal }) => {
  const stats = [
    { number: '+500,000', labelAr: 'قطعة غيار سنوياً', labelEn: 'Parts Produced Annually' },
    { number: '+45', labelAr: 'وكيل وموزع معتمد', labelEn: 'Authorized Distributors' },
    { number: '+15', labelAr: 'عاماً من الخبرة الصناعية', labelEn: 'Years Industrial Experience' },
    { number: '99.8%', labelAr: 'دقة المطابقة والجودة', labelEn: 'Quality Pass Rate' },
  ];

  const pillars = [
    {
      icon: Factory,
      titleAr: 'خطوط إنتاج مؤتمتة وروبوتية',
      titleEn: 'Automated Robotic Lines',
      descAr: 'مجمع صناعي متطور بالخرج مجهز بماكينات حقن صلب وقوالب CNC فائقة الدقة لمعالجة المواد البلاستيكية والمعادن.',
      descEn: 'State-of-the-art Al-Kharj facility equipped with ultra-precision CNC tooling and heavy robotic molding presses.',
    },
    {
      icon: ShieldCheck,
      titleAr: 'مطابقة قياسية ومعايير SASO',
      titleEn: 'SASO & ISO 9001 Certified',
      descAr: 'فحص دوري واختبارات إجهاد حراري وميكانيكي تضمن تحمل أقصى درجات حرارة الصيف وظروف الصحراء الوعرة.',
      descEn: 'Stringent thermal and mechanical stress testing ensuring peak reliability in harsh desert conditions.',
    },
    {
      icon: Truck,
      titleAr: 'شبكة لوجستية وتوريد فوري',
      titleEn: 'Nationwide Logistics Network',
      descAr: 'مستودعات إقليمية في الرياض، جدة، الدمام، وخميس مشيط لتلبية طلبات التوريد والقطع خلال 24 - 48 ساعة.',
      descEn: 'Strategic regional distribution hubs across Riyadh, Jeddah, Dammam, and Southern provinces.',
    },
    {
      icon: TrendingUp,
      titleAr: 'تمكين مستهدفات رؤية 2030',
      titleEn: 'Saudi Vision 2030 Enabler',
      descAr: 'المساهمة الفعالة في توطين سلاسل إمداد صناعة السيارات ورفع نسبة المحتوى المحلي للمملكة.',
      descEn: 'Pioneering local automotive manufacturing and expanding Saudi industrial capabilities.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#06101a] text-slate-100 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/30 text-xs font-bold mb-4">
            <Factory className="w-4 h-4" />
            <span>{lang === 'ar' ? 'نبذة عن الشركة ومصنعنا' : 'About VPI & Our Plant'}</span>
          </div>
          
          {/* Main Title matching Screenshot */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.15] tracking-tight mb-6">
            {lang === 'ar' ? (
              <>
                التميز في قطع <br />
                <span className="text-white">غيار المركبات</span>
              </>
            ) : (
              <>
                Excellence in Vehicle <br />
                <span className="text-lime-400">Spare Parts</span>
              </>
            )}
          </h2>

          {/* Exact Narrative Text from Screenshot */}
          <div className="bg-[#0a1b2d]/80 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-sm shadow-xl text-right max-w-3xl mx-auto space-y-4">
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
              {lang === 'ar'
                ? 'في شركة أجزاء المركبة (VPI)، نختص في تصنيع وتوزيع القطع البلاستيكية عالية الجودة للمركبات، بما في ذلك حوامل الصدامات الامامية و الخلفية والبطانات وزوايا المرايات والديكورات البلاستيكية للمركبات بجودة عالية، التي تم تصميمها لتكون متينة ودقيقة.'
                : 'At Vehicle Parts Industry (VPI), we specialize in manufacturing and distributing high-quality automotive plastic components, including front and rear bumper brackets, fender liners, side mirror corners, and precision exterior plastic trims engineered for maximum durability and fit.'}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {lang === 'ar'
                ? 'من خلال استخدام تكنولوجيا متقدمة وحلول مبتكرة، نحن نقدّم مجموعة واسعة من نماذج المركبات محليًا وعالميًا. تتمثّل مهمتنا في تقديم أجزاء موثوقة وفعالة من حيث التكلفة تلبيةً للمتطلبات المتطورة لصناعة قطع غيار السيارات.'
                : 'Through advanced manufacturing technologies and innovative tooling solutions, we supply an extensive catalog for local and international vehicle models. Our mission is delivering reliable, cost-effective replacement components meeting the evolving demands of the automotive aftermarket industry.'}
            </p>

            <div className="pt-2 flex justify-start">
              <a
                href="#about"
                className="px-8 py-3 rounded-xl bg-[#8bc34a] hover:bg-[#7cb342] text-slate-950 font-black text-base shadow-lg shadow-lime-500/20 transition-all transform hover:-translate-y-0.5 inline-block text-center"
              >
                {lang === 'ar' ? 'من نحن' : 'About Us'}
              </a>
            </div>
          </div>
        </div>

        {/* 2-Column Story Grid: Image & Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Left / Top Media Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#091827]">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                alt="VPI Automotive Manufacturing Robotics"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06101a] via-transparent to-transparent opacity-80" />

              {/* Floating Industrial Badge */}
              <div className="absolute bottom-6 right-6 left-6 p-4 rounded-2xl bg-[#0a1b2d]/90 backdrop-blur-md border border-lime-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-lime-500/20 text-lime-400 flex items-center justify-center border border-lime-500/40">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">المدينة الصناعية - الخرج</p>
                    <p className="text-xs text-lime-400 font-mono">Saudi Industrial City, Al-Kharj</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-lime-500 text-slate-950 font-bold text-xs">
                  معتمد 🇸🇦
                </span>
              </div>
            </div>
          </div>

          {/* Right / Text Narrative & Values */}
          <div className="lg:col-span-6 space-y-6 text-right">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {lang === 'ar' ? 'ريادة في الجودة وضمان معتمد للأداء' : 'Pioneering Quality with Certified Performance'}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {lang === 'ar'
                  ? 'منذ تأسيسنا، وضعنا معايير الجودة والأمان في صدارة أولوياتنا. يعتمد مصنعنا في الخرج على أحدث خطوط الإنتاج الذكية لتقديم بدائل قطع غيار تطابق المواصفات الأصلية للمصنعين (OEM Quality) بأسعار تنافسية تمكن وكلاءنا من الريادة.'
                  : 'Since our establishment, safety and uncompromised precision have been our driving forces. Our plant produces OEM-matching replacement assemblies that empower our dealer network with competitive margins and zero warranty friction.'}
              </p>
            </div>

            {/* Checklist of Guarantees */}
            <div className="space-y-3 pt-2">
              {[
                { ar: 'اختبارات إجهاد حراري ومقاومة أشعة الشمس والصحراء حتى 60 درجة مئوية', en: 'Thermal & UV degradation tests exceeding 60°C for automotive polymers' },
                { ar: 'بوليمرات هندسية (POM / ABS / HDPE) غير قابلة للاصفرار أو التصدع الصدمي', en: 'Virgin impact-grade polymers with UV resistance and anti-brittleness' },
                { ar: 'مطابقة دقيقة لنقاط التثبيت والكلبسات الأصلية بنسبة 100% دون تعديل', en: '100% OEM clip retention and direct drop-in bolt alignment' },
                { ar: 'ضمان استبدال مباشر وسريع وتوريد جملة لجميع وكلاء المملكة', en: 'Direct swift replacement guarantee and wholesale supply across KSA' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-200">
                    {lang === 'ar' ? item.ar : item.en}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenDealerModal}
                className="px-6 py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-sm shadow-lg shadow-lime-500/20 transition-all cursor-pointer"
              >
                {lang === 'ar' ? 'طلب شراكة وتوزيع كوكيل' : 'Request Dealer Partnership'}
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#0b1c2e] to-[#07131f] border border-white/10 hover:border-lime-500/30 transition-all duration-300 text-right group"
              >
                <div className="w-12 h-12 rounded-xl bg-lime-500/10 text-lime-400 group-hover:bg-lime-500 group-hover:text-slate-950 flex items-center justify-center mb-4 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {lang === 'ar' ? p.titleAr : p.titleEn}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'ar' ? p.descAr : p.descEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Numbers & Stats Counter Bar */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0d2238] via-[#102d4b] to-[#0d2238] border border-lime-500/30 p-8 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="pt-4 lg:pt-0">
                <p className="text-3xl sm:text-5xl font-black text-lime-400 tracking-tight font-mono">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-200 mt-2">
                  {lang === 'ar' ? stat.labelAr : stat.labelEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
