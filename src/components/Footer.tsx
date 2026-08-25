import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Award,
  ShieldCheck,
  Factory,
  ArrowUp,
  Send,
  Heart,
} from 'lucide-react';
import { VpiLogo } from './VpiLogo';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
  onOpenDealerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate, onOpenDealerModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050c14] text-slate-300 font-['Cairo',sans-serif] border-t border-white/10 relative overflow-hidden">
      {/* Top Banner Accent */}
      <div className="h-1.5 bg-gradient-to-r from-lime-500 via-[#1a3a5c] to-lime-500" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info & Vision 2030 Badge (4 cols) */}
          <div className="lg:col-span-4 space-y-5 text-right">
            <div className="cursor-pointer" onClick={() => onNavigate('hero')}>
              <VpiLogo variant="light" size="md" showSubtitle={false} />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {lang === 'ar'
                ? 'شركة أجزاء المركبة (VPI) - نختص في تصنيع وتوزيع القطع البلاستيكية عالية الجودة للمركبات، بما في ذلك حوامل الصدامات الامامية والخلفية والبطانات وزوايا المرايات والديكورات البلاستيكية للمركبات المصممة بدقة ومتانة فائقة.'
                : 'Vehicle Parts Industry Co. (VPI) - Specializing in manufacturing & distributing high-quality automotive plastic parts including bumper brackets, fender liners, mirror corners, and precision trims.'}
            </p>

            {/* Saudi Made & SASO Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                <span className="text-base">🇸🇦</span>
                <span className="text-xs font-bold text-white">صناعة سعودية معتمدة</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SASO Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-lime-400 transition-colors"
                >
                  {lang === 'ar' ? 'الصفحة الرئيسية' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-lime-400 transition-colors"
                >
                  {lang === 'ar' ? 'من نحن والمصنع' : 'About VPI Plant'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('smart-service')}
                  className="text-lime-400 font-bold hover:underline flex items-center gap-1"
                >
                  <span>{lang === 'ar' ? 'منظومة خدمتك الذكي' : 'Smart Service Hub'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-lime-400 transition-colors"
                >
                  {lang === 'ar' ? 'كتالوج قطع الغيار' : 'Parts Catalog'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('clients')}
                  className="hover:text-lime-400 transition-colors"
                >
                  {lang === 'ar' ? 'عملاؤنا الاستراتيجيون' : 'Strategic Clients'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('community')}
                  className="hover:text-lime-400 transition-colors"
                >
                  {lang === 'ar' ? 'المجتمع والأخبار' : 'Community & Media'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('locations')}
                  className="hover:text-lime-400 transition-colors"
                >
                  {lang === 'ar' ? 'تجدنا بالقرب منك' : 'Find Us & Branches'}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDealerModal}
                  className="text-lime-400 font-bold hover:underline flex items-center gap-1"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'كن وكيلاً معتمداً' : 'Become a Dealer'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Coordinates (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              {lang === 'ar' ? 'المقر الرئيسي والمصنع' : 'Factory & HQ'}
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>المدينة الصناعية، المرحلة الثانية، الخرج 16278، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {lang === 'ar' ? 'الرئيسي:' : 'Main:'}
                    </span>
                    <a href="tel:+966552809664" className="hover:text-lime-300 font-mono">
                      <span dir="ltr" className="inline-block tracking-wider font-semibold text-white">
                        +966 55 280 9664
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {lang === 'ar' ? 'خدمة العملاء:' : 'Care:'}
                    </span>
                    <a href="tel:+966552809632" className="hover:text-lime-300 font-mono">
                      <span dir="ltr" className="inline-block tracking-wider text-slate-200">
                        +966 55 280 9632
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-lime-400 shrink-0" />
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {lang === 'ar' ? 'واتساب:' : 'WhatsApp:'}
                  </span>
                  <a
                    href="https://wa.me/966552809632"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-lime-300 font-mono"
                  >
                    <span dir="ltr" className="inline-block tracking-wider text-slate-200">
                      +966 55 280 9632
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                <a href="mailto:info@vpi.com.sa" dir="ltr" className="hover:text-lime-300 font-mono text-slate-200">
                  info@vpi.com.sa
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              {lang === 'ar' ? 'النشرة البريدية الصناعية' : 'Industrial Newsletter'}
            </h4>
            <p className="text-xs text-slate-400">
              {lang === 'ar'
                ? 'اشترك ليصلك جديد كتالوجات القطع وعروض التوريد الموسمية للوكلاء.'
                : 'Subscribe for latest parts releases and seasonal dealer wholesale updates.'}
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-lime-500/20 text-lime-400 text-xs font-bold text-center border border-lime-500/40">
                {lang === 'ar' ? '✓ تم الاشتراك بنجاح!' : '✓ Successfully Subscribed!'}
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#081524] text-white text-xs rounded-xl border border-white/20 focus:border-lime-400 focus:ring-1 focus:ring-lime-400/30 py-2.5 px-3 outline-none font-mono"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'اشتراك' : 'Subscribe'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} {lang === 'ar' ? 'شركة أجزاء المركبة للصناعة (VPI). جميع الحقوق محفوظة.' : 'Vehicle Parts Industry Co. (VPI). All Rights Reserved.'}
          </p>

          <button
            onClick={scrollToTop}
            id="scroll-to-top-btn"
            className="flex items-center gap-1 text-slate-400 hover:text-lime-400 transition-colors p-1"
          >
            <span>{lang === 'ar' ? 'العودة للأعلى' : 'Back to Top'}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
