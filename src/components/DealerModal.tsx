import React, { useState } from 'react';
import { X, Award, ShieldCheck, CheckCircle2, Building, MapPin, Phone, Mail, FileText, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';

interface DealerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DealerModal: React.FC<DealerModalProps> = ({ isOpen, onClose, lang }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    crNumber: '',
    city: 'الرياض',
    phone: '',
    email: '',
    storeType: 'retail_shop',
    estimatedMonthlyVolume: '50k_100k',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#8bc34a', '#1a3a5c', '#ffffff'],
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="dealer-application-modal"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-[#0e253d] to-[#081524] border border-lime-500/40 p-6 sm:p-8 shadow-2xl text-slate-100 text-right"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-dealer-modal"
          className="absolute top-5 left-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-lime-500/20 text-lime-400 border border-lime-400 flex items-center justify-center mx-auto shadow-lg">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {lang === 'ar' ? 'تم استلام طلب الوكالة بنجاح!' : 'Dealership Application Submitted!'}
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              {lang === 'ar'
                ? `شكراً لاهتمامك بالانضمام لشبكة موزعي شركة أجزاء المركبة للصناعة (VPI). تم تعيين رقم الطلب المرجعي: VPI-REQ-${Math.floor(100000 + Math.random() * 900000)}، وسيقوم مسؤول تطوير الوكلاء بالتواصل معك خلال 48 ساعة.`
                : 'Thank you for your interest. Your application reference code has been generated. Our team will review your business credentials and reach out within 48h.'}
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-xl bg-lime-500 text-slate-950 font-bold text-sm hover:bg-lime-400 transition-all shadow-md"
              >
                {lang === 'ar' ? 'إغلاق والعودة للموقع' : 'Close and Return'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Header */}
            <div className="border-b border-white/10 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/20 text-lime-400 text-xs font-bold mb-2">
                <Award className="w-4 h-4" />
                <span>{lang === 'ar' ? 'طلب اعتماد موزع / وكيل معتمد' : 'VPI Authorized Dealership Application'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {lang === 'ar' ? 'انضم لشبكة وكلاء VPI في المملكة' : 'Join the VPI Dealer Network'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {lang === 'ar'
                  ? 'يرجى تقديم بيانات المنشأة لنتمكن من دراسة التغطية الجغرافية وتقديم باقة الأسعار والامتيازات المناسبة.'
                  : 'Please provide your entity details to assess territorial distribution and wholesale tiers.'}
              </p>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Business Name */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">
                  {lang === 'ar' ? 'اسم المنشأة / الشركة / المعرض *' : 'Business / Store Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder={lang === 'ar' ? 'مثال: شركة الرواد لقطع الغيار' : 'e.g. Al-Rowad Auto Parts'}
                  className="w-full bg-[#06121f] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-2.5 px-3.5 outline-none"
                />
              </div>

              {/* Owner / Contact Name */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">
                  {lang === 'ar' ? 'اسم المسؤول أو المدير التنفيذي *' : 'Contact Person / Manager *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.ownerName}
                  onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                  placeholder={lang === 'ar' ? 'مثال: فيصل الحربي' : 'e.g. Faisal'}
                  className="w-full bg-[#06121f] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-2.5 px-3.5 outline-none"
                />
              </div>

              {/* CR Number */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">
                  {lang === 'ar' ? 'رقم السجل التجاري (CR Number) *' : 'Commercial Registration No. *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.crNumber}
                  onChange={(e) => setFormData({ ...formData, crNumber: e.target.value })}
                  placeholder="1010XXXXXX"
                  className="w-full bg-[#06121f] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-2.5 px-3.5 outline-none font-mono"
                />
              </div>

              {/* City / Target Region */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">
                  {lang === 'ar' ? 'المدينة المستهدفة للتوزيع *' : 'Target City / Region *'}
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-[#06121f] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-2.5 px-3.5 outline-none"
                >
                  <option value="الرياض">الرياض (Riyadh)</option>
                  <option value="الخرج">الخرج وضواحيها (Al-Kharj)</option>
                  <option value="جدة">جدة والمنطقة الغربية (Jeddah & West)</option>
                  <option value="الدمام">الدمام والخبر والأحساء (Eastern)</option>
                  <option value="خميس مشيط">خميس مشيط وعسير وجازان (South)</option>
                  <option value="القصيم">القصيم وحائل (Qassim & Hail)</option>
                  <option value="المدينة المنورة">المدينة المنورة وينبع (Madinah & Yanbu)</option>
                  <option value="تبوك">تبوك والشمال (Tabuk & North)</option>
                  <option value="دول الخليج">دولة خليجية / تصدير (GCC / Export)</option>
                </select>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">
                  {lang === 'ar' ? 'رقم الجوال للتواصل المباشر *' : 'Mobile / WhatsApp *'}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="05XXXXXXXX"
                  className="w-full bg-[#06121f] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-2.5 px-3.5 outline-none font-mono"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">
                  {lang === 'ar' ? 'البريد الإلكتروني الرسمي *' : 'Official Email *'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="info@company.com"
                  className="w-full bg-[#06121f] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-2.5 px-3.5 outline-none font-mono"
                />
              </div>
            </div>

            {/* Type of Business */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">
                  {lang === 'ar' ? 'نوع النشاط التجاري:' : 'Business Activity:'}
                </label>
                <select
                  value={formData.storeType}
                  onChange={(e) => setFormData({ ...formData, storeType: e.target.value })}
                  className="w-full bg-[#06121f] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-2.5 px-3.5 outline-none"
                >
                  <option value="retail_shop">محل / متجر قطع غيار تجزئة</option>
                  <option value="wholesale">مؤسسة تجارة وتوزيع جملة</option>
                  <option value="workshop_chain">مجمع ورش وصيانة سيارات</option>
                  <option value="fleet_operator">شركة تشغيل أساطيل ونقليات</option>
                  <option value="government_contractor">مقاولات وتوريدات حكومية</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">
                  {lang === 'ar' ? 'حجم الطلبيات المتوقع شهرياً:' : 'Estimated Monthly Volume:'}
                </label>
                <select
                  value={formData.estimatedMonthlyVolume}
                  onChange={(e) => setFormData({ ...formData, estimatedMonthlyVolume: e.target.value })}
                  className="w-full bg-[#06121f] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-2.5 px-3.5 outline-none font-mono"
                >
                  <option value="20k_50k">20,000 - 50,000 ر.س</option>
                  <option value="50k_100k">50,000 - 150,000 ر.س</option>
                  <option value="150k_500k">150,000 - 500,000 ر.س</option>
                  <option value="500k_plus">+500,000 ر.س (عقد حصري)</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1">
                {lang === 'ar' ? 'ملاحظات إضافية أو قطع ذات أولوية:' : 'Additional Notes / Priority Categories:'}
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder={
                  lang === 'ar'
                    ? 'مثال: نرغب بالتركيز على قطع الهايلوكس واللاندكروزر والشاحنات الخفيفة...'
                    : 'e.g. Focus on Toyota Hilux, Land Cruiser, and commercial fleet lines...'
                }
                className="w-full bg-[#06121f] text-white text-sm rounded-xl border border-white/20 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 py-2.5 px-3.5 outline-none resize-none"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                id="submit-dealer-application"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-slate-950 font-black text-base shadow-xl shadow-lime-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{lang === 'ar' ? 'جاري معالجة الطلب...' : 'Submitting...'}</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{lang === 'ar' ? 'إرسال طلب الاعتماد رسمياً' : 'Submit Dealership Request'}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
