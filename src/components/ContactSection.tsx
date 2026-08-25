import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Building,
  Clock,
  FileText,
  Sparkles,
  Headphones,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: 'الرياض',
    phone: '',
    email: '',
    inquiryType: 'wholesale',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#8bc34a', '#ffffff', '#1a3a5c'],
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#081320] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/30 text-xs font-bold mb-4">
            <Phone className="w-4 h-4" />
            <span>{lang === 'ar' ? 'تواصل مع فريق VPI' : 'Connect with VPI Team'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            {lang === 'ar' ? 'يسعدنا تواصلك واستقبال استفساراتك' : 'We Are Here to Assist Your Business'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            {lang === 'ar'
              ? 'سواء كنت ترغب بطلب عروض أسعار كميات، الاستفسار عن كود قطعة، أو التقديم للوكالة.'
              : 'Whether you need wholesale quotes, OEM part verification, or regional dealership inquiries.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Info Cards (Right in RTL) */}
          <div className="lg:col-span-5 space-y-6 text-right">
            {/* Quick Contact Cards */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#0e243a] to-[#0a1827] border border-white/10 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                {lang === 'ar' ? 'قنوات الاتصال المباشرة' : 'Direct Contact Channels'}
              </h3>

              <div className="space-y-4">
                {/* 1. Main Phone / الهاتف الرئيسي */}
                <a
                  href="tel:+966552809664"
                  id="contact-main-phone-link"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-lime-500/20 border border-white/5 hover:border-lime-400/30 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-lime-500/20 text-lime-400 group-hover:bg-lime-500 group-hover:text-slate-950 flex items-center justify-center shrink-0 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-slate-300 font-bold">{lang === 'ar' ? 'الهاتف الرئيسي' : 'Main Phone'}</p>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-lime-500/20 text-lime-300 font-semibold">
                        {lang === 'ar' ? 'الإدارة العامة' : 'HQ Main'}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center justify-end">
                      <span dir="ltr" className="text-base font-bold text-white font-mono tracking-wider inline-block">
                        +966 55 280 9664
                      </span>
                    </div>
                  </div>
                </a>

                {/* 2. Contact Us / اتصل بنا */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-300 font-bold">{lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}</p>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {lang === 'ar' ? 'الإثنين - الجمعة | 6 ص - 5 م' : 'Mon - Fri | 6 AM - 5 PM'}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center justify-end">
                        <a
                          href="tel:+966552809632"
                          dir="ltr"
                          className="text-base font-bold text-white hover:text-lime-400 font-mono tracking-wider inline-block transition-colors"
                        >
                          +966 55 280 9632
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Customer Care & Email / خدمة العملاء */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-lime-500/20 text-lime-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-300 font-bold">{lang === 'ar' ? 'خدمة العملاء' : 'Customer Service'}</p>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {lang === 'ar' ? 'الإثنين - الجمعة | 8 ص - 5 م' : 'Mon - Fri | 8 AM - 5 PM'}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center justify-end">
                        <a
                          href="tel:+966552809632"
                          dir="ltr"
                          className="text-base font-bold text-white hover:text-lime-400 font-mono tracking-wider inline-block transition-colors"
                        >
                          +966 55 280 9632
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                      <span>{lang === 'ar' ? 'البريد الإلكتروني:' : 'Email:'}</span>
                    </div>
                    <a
                      href="mailto:info@vpi.com.sa"
                      id="contact-email-link"
                      dir="ltr"
                      className="text-xs sm:text-sm font-bold text-lime-400 hover:text-lime-300 font-mono"
                    >
                      info@vpi.com.sa
                    </a>
                  </div>
                </div>

                {/* 4. WhatsApp Direct */}
                <a
                  href="https://wa.me/966552809632"
                  target="_blank"
                  rel="noreferrer"
                  id="contact-whatsapp-link"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-lime-500/10 hover:bg-lime-500/20 border border-lime-400/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-lime-500 text-slate-950 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-lime-300 font-bold">{lang === 'ar' ? 'واتساب المبيعات وخدمة العملاء:' : 'WhatsApp Sales & Support:'}</p>
                      <p dir="ltr" className="text-sm font-bold text-white font-mono text-right mt-0.5">
                        +966 55 280 9632
                      </p>
                    </div>
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-lime-500/20 text-lime-300 font-bold">
                      {lang === 'ar' ? 'تواصل الآن' : 'Chat Now'}
                    </span>
                  </div>
                </a>

                {/* 5. Plant Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-lime-500/20 text-lime-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold">{lang === 'ar' ? 'مقر المجمع والمصنع:' : 'Factory & Industrial Complex:'}</p>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-0.5">
                      {lang === 'ar'
                        ? 'المملكة العربية السعودية، الخرج، المدينة الصناعية، المرحلة الثانية'
                        : 'Kingdom of Saudi Arabia, Al-Kharj Industrial City, Phase 2'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Form (Left in RTL) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0f2842] to-[#0a1c2f] border border-lime-500/30 shadow-2xl text-right">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-lime-500/20 text-lime-400 border border-lime-400/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    {lang === 'ar' ? 'تم استلام استفسارك بنجاح!' : 'Your Inquiry Received Successfully!'}
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    {lang === 'ar'
                      ? 'شكراً لتواصلك مع شركة أجزاء المركبة للصناعة (VPI). سيقوم ممثل المبيعات بالتواصل معك خلال ساعات العمل الرسمية.'
                      : 'Thank you for reaching out to VPI. Our regional sales manager will contact you promptly.'}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        city: 'الرياض',
                        phone: '',
                        email: '',
                        inquiryType: 'wholesale',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-lime-500 text-slate-950 font-bold text-sm hover:bg-lime-400 transition-colors"
                  >
                    {lang === 'ar' ? 'إرسال طلب آخر' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                    {lang === 'ar' ? 'نموذج طلب تسعيرة أو استفسار' : 'Request a Quote or Inquiry'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-6">
                    {lang === 'ar'
                      ? 'يرجى تعبئة الحقول وسيقوم فريق المبيعات بتزويدك بكتالوج الأسعار وجداول التوافق.'
                      : 'Fill in your details and our team will provide wholesale catalogs and compatibility charts.'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1.5">
                        {lang === 'ar' ? 'الاسم الكريم *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'ar' ? 'مثال: محمد القحطاني' : 'e.g. Mohammed'}
                        className="w-full bg-[#07131e] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-3 px-4 outline-none"
                      />
                    </div>

                    {/* Company / Garage */}
                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1.5">
                        {lang === 'ar' ? 'اسم المؤسسة / المتجر / الورشة' : 'Company / Store Name'}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={lang === 'ar' ? 'مثال: مؤسسة قمة المحركات' : 'e.g. Motors Hub'}
                        className="w-full bg-[#07131e] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-3 px-4 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1.5">
                        {lang === 'ar' ? 'رقم الجوال (واتساب) *' : 'Phone Number (WhatsApp) *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="05XXXXXXXX"
                        className="w-full bg-[#07131e] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-3 px-4 outline-none font-mono"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1.5">
                        {lang === 'ar' ? 'المدينة أو المنطقة *' : 'City / Region *'}
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#07131e] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-3 px-4 outline-none"
                      >
                        <option value="الرياض">الرياض (Riyadh)</option>
                        <option value="الخرج">الخرج (Al-Kharj)</option>
                        <option value="جدة">جدة (Jeddah)</option>
                        <option value="الدمام">الدمام والخبر (Eastern)</option>
                        <option value="خميس مشيط">خميس مشيط وأبها (South)</option>
                        <option value="القصيم">القصيم وبريدة (Qassim)</option>
                        <option value="المدينة المنورة">المدينة المنورة (Madinah)</option>
                        <option value="أخرى">مدينة أخرى (Other)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      {lang === 'ar' ? 'تفاصيل الطلب أو القطع المطلوبة *' : 'Inquiry Details or Required Parts *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'ar'
                          ? 'اذكر أرقام OEM للقطع أو الموديلات والكميات المطلوبة...'
                          : 'Mention OEM numbers, vehicle models, or required quantity...'
                      }
                      className="w-full bg-[#07131e] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-3 px-4 outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-slate-950 font-black text-base shadow-xl shadow-lime-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{lang === 'ar' ? 'جاري الإرسال...' : 'Submitting...'}</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{lang === 'ar' ? 'إرسال طلب التسعيرة' : 'Send Inquiry'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
