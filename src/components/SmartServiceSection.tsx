import React, { useState } from 'react';
import {
  Cpu,
  Search,
  Calculator,
  Truck,
  ShieldCheck,
  Calendar,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  Printer,
  MessageCircle,
  Clock,
  MapPin,
  Flame,
  Layers,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ExternalLink,
  Plus,
  Minus,
  Trash2,
  Download,
} from 'lucide-react';
import { SAMPLE_PARTS, MAKES, MOCK_TRACKING_ORDERS } from '../data/mockData';
import { Language, VehiclePart, SmartOrderTrackResult } from '../types';

interface SmartServiceSectionProps {
  lang: Language;
  onSelectPart: (part: VehiclePart) => void;
  onOpenDealerModal: () => void;
  onOpenAssistant: () => void;
}

export const SmartServiceSection: React.FC<SmartServiceSectionProps> = ({
  lang,
  onSelectPart,
  onOpenDealerModal,
  onOpenAssistant,
}) => {
  const [activeTab, setActiveTab] = useState<'matcher' | 'quote' | 'engineering' | 'tracking' | 'booking'>('matcher');

  // --- 1. MATCHER STATE ---
  const [matcherMake, setMatcherMake] = useState<string>('toyota');
  const [matcherQuery, setMatcherQuery] = useState<string>('');
  const [matchedPart, setMatchedPart] = useState<VehiclePart | null>(SAMPLE_PARTS[0]);

  const handleMatcherSearch = () => {
    if (!matcherQuery.trim()) {
      const byMake = SAMPLE_PARTS.find((p) => p.make === matcherMake);
      setMatchedPart(byMake || SAMPLE_PARTS[0]);
      return;
    }
    const q = matcherQuery.toLowerCase().trim();
    const found = SAMPLE_PARTS.find(
      (p) =>
        p.partNumber.toLowerCase().includes(q) ||
        p.oemNumber.toLowerCase().includes(q) ||
        p.nameAr.toLowerCase().includes(q) ||
        p.nameEn.toLowerCase().includes(q)
    );
    if (found) {
      setMatchedPart(found);
    } else {
      const byMake = SAMPLE_PARTS.find((p) => p.make === matcherMake);
      setMatchedPart(byMake || null);
    }
  };

  // --- 2. QUOTE CALCULATOR STATE ---
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({
    'vpi-camry-brk-2024': 100,
    'vpi-elantra-brk-2023': 50,
    'vpi-hilux-brk-2024': 60,
  });
  const [quoteRegion, setQuoteRegion] = useState<'riyadh' | 'western' | 'eastern' | 'southern' | 'gcc'>('riyadh');
  const [quoteNotes, setQuoteNotes] = useState<string>('');

  const calculateTotalQuantity = (): number => {
    return Object.values(selectedItems).reduce<number>((sum, q) => sum + (Number(q) || 0), 0);
  };

  const getDiscountPercent = (totalQty: number): number => {
    if (totalQty >= 500) return 35;
    if (totalQty >= 250) return 25;
    if (totalQty >= 100) return 18;
    if (totalQty >= 50) return 10;
    return 0;
  };

  const totalQty = calculateTotalQuantity();
  const discountPercent = getDiscountPercent(totalQty);

  const rawSubtotal = Object.entries(selectedItems).reduce((sum: number, [partId, qty]) => {
    const part = SAMPLE_PARTS.find((p) => p.id === partId);
    return sum + (part ? part.priceEstSAR * (Number(qty) || 0) : 0);
  }, 0);

  const discountSAR = (rawSubtotal * discountPercent) / 100;
  const subtotalAfterDiscount = rawSubtotal - discountSAR;
  const vatSAR = subtotalAfterDiscount * 0.15;
  const grandTotalSAR = subtotalAfterDiscount + vatSAR;

  const handleUpdateItemQty = (partId: string, delta: number) => {
    setSelectedItems((prev) => {
      const current = prev[partId] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[partId];
        return copy;
      }
      return { ...prev, [partId]: next };
    });
  };

  const handleAddItemToQuote = (partId: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [partId]: (prev[partId] || 0) + 25,
    }));
  };

  // --- 3. TRACKING STATE ---
  const [trackInput, setTrackInput] = useState<string>('VPI-2026-8942');
  const [trackResult, setTrackResult] = useState<SmartOrderTrackResult | null>(
    MOCK_TRACKING_ORDERS['VPI-2026-8942']
  );
  const [trackError, setTrackError] = useState<string>('');

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackError('');
    const cleaned = trackInput.trim().toUpperCase();
    if (MOCK_TRACKING_ORDERS[cleaned]) {
      setTrackResult(MOCK_TRACKING_ORDERS[cleaned]);
    } else {
      setTrackResult(null);
      setTrackError(
        lang === 'ar'
          ? 'لم يتم العثور على الشحنة. يرجى التأكد من الرقم (مثال تجريبي: VPI-2026-8942 أو VPI-SA-5510)'
          : 'Order tracking number not found. Try demo IDs: VPI-2026-8942 or VPI-SA-5510'
      );
    }
  };

  // --- 4. BOOKING STATE ---
  const [bookingType, setBookingType] = useState<'factory_tour' | 'custom_mold' | 'distributor_meeting'>('factory_tour');
  const [bookingName, setBookingName] = useState('');
  const [bookingCompany, setBookingCompany] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('2026-08-28');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const generateWhatsAppQuote = () => {
    const lines = Object.entries(selectedItems).map(([id, qty]) => {
      const part = SAMPLE_PARTS.find((p) => p.id === id);
      return `- ${part?.nameAr || id}: ${qty} قطعة`;
    });
    const msg = encodeURIComponent(
      `*طلب عرض سعر جملة - منصة خدمتك الذكي VPI*\n` +
      `--------------------------------\n` +
      `إجمالي الكمية: ${totalQty} قطعة\n` +
      `نسبة خصم الجملة: ${discountPercent}%\n` +
      `المبلغ التقريبي بعد الخصم: ${subtotalAfterDiscount.toLocaleString()} ر.س\n` +
      `المنطقة: ${quoteRegion}\n\n` +
      `*القطع المطلوبة:*\n${lines.join('\n')}\n\n` +
      `يرجى تزويدي بعرض السعر الرسمي وموعد التوريد.`
    );
    window.open(`https://wa.me/966552809632?text=${msg}`, '_blank');
  };

  return (
    <section
      id="smart-service"
      className="py-20 bg-gradient-to-b from-[#07111c] via-[#0b1726] to-[#07111c] relative overflow-hidden border-b border-lime-500/20"
    >
      {/* Ambient Tech Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/15 text-lime-400 border border-lime-500/30 text-xs font-bold mb-4 shadow-lg shadow-lime-500/10">
            <Cpu className="w-4 h-4 text-lime-400 animate-spin-slow" />
            <span className="tracking-wide">
              {lang === 'ar' ? 'منظومة VPI المتطورة | خدمتك الذكي' : 'VPI Smart Service Hub'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {lang === 'ar' ? (
              <>
                شركة <span className="text-lime-400">خدمتك الذكي</span> لقطع وهياكل المركبات
              </>
            ) : (
              <>
                VPI <span className="text-lime-400">Smart Service Center</span> & Solutions
              </>
            )}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            {lang === 'ar'
              ? 'حلول تقنية ورقمية متكاملة للموزعين، وكلاء الجملة، ومراكز الصيانة؛ تشمل المطابقة الفورية للقطع، حساب عروض الأسعار التلقائية، الاستشارات الهندسية، وتتبع الشحنات المباشر.'
              : 'End-to-end intelligent engineering & logistics platform for auto parts distributors, wholesale networks, and fleet workshops across Saudi Arabia.'}
          </p>

          {/* Quick AI Assistant Launch Pill */}
          <div className="mt-5 flex items-center justify-center">
            <button
              onClick={onOpenAssistant}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-lime-500 to-emerald-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-lime-500/25 hover:shadow-lime-500/40 hover:scale-105 transition-all transform active:scale-95"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>{lang === 'ar' ? 'تحدث مع مساعد خدمتك الذكي الآن (محادثة تفاعلية)' : 'Open AI Automotive Specialist'}</span>
            </button>
          </div>
        </div>

        {/* 5 Interactive Tabs Navigation */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 sm:gap-3 no-scrollbar">
          <button
            onClick={() => setActiveTab('matcher')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-300 border ${
              activeTab === 'matcher'
                ? 'bg-lime-500 text-slate-950 border-lime-400 shadow-xl shadow-lime-500/20 scale-105'
                : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-lime-500/40 hover:bg-slate-800'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>{lang === 'ar' ? 'فاحص المطابقة ورقم OEM' : 'OEM Matcher'}</span>
          </button>

          <button
            onClick={() => setActiveTab('quote')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-300 border ${
              activeTab === 'quote'
                ? 'bg-lime-500 text-slate-950 border-lime-400 shadow-xl shadow-lime-500/20 scale-105'
                : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-lime-500/40 hover:bg-slate-800'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>{lang === 'ar' ? 'حاسبة عروض الجملة الذكية' : 'Smart B2B Quote'}</span>
          </button>

          <button
            onClick={() => setActiveTab('engineering')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-300 border ${
              activeTab === 'engineering'
                ? 'bg-lime-500 text-slate-950 border-lime-400 shadow-xl shadow-lime-500/20 scale-105'
                : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-lime-500/40 hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{lang === 'ar' ? 'المستشار الهندسي للبوليمر' : 'Polymer Specs'}</span>
          </button>

          <button
            onClick={() => setActiveTab('tracking')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-300 border ${
              activeTab === 'tracking'
                ? 'bg-lime-500 text-slate-950 border-lime-400 shadow-xl shadow-lime-500/20 scale-105'
                : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-lime-500/40 hover:bg-slate-800'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>{lang === 'ar' ? 'متتبع الشحنات الذكي' : 'Order Tracking'}</span>
          </button>

          <button
            onClick={() => setActiveTab('booking')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-300 border ${
              activeTab === 'booking'
                ? 'bg-lime-500 text-slate-950 border-lime-400 shadow-xl shadow-lime-500/20 scale-105'
                : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-lime-500/40 hover:bg-slate-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>{lang === 'ar' ? 'حجز موعد وقوالب مخصصة' : 'Factory Booking'}</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="bg-[#0b1726]/90 border border-lime-500/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md relative">
          {/* TAB 1: SMART OEM & VIN PART MATCHER */}
          {activeTab === 'matcher' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Search className="w-6 h-6 text-lime-400" />
                    <span>{lang === 'ar' ? 'فاحص المطابقة الفورية لرقم القطعة ورقم الهيكل' : 'Instant OEM Fitment & CAD Verification'}</span>
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1">
                    {lang === 'ar'
                      ? 'أدخل رقم القطعة الأصلي (OEM) أو اختر الشركة المصنعة لمطابقة أبعاد CAD ونقاط التثبيت بدون تعديل.'
                      : 'Input OEM Part Number or vehicle model to verify exact clip-in CAD alignment and polymer specifications.'}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                    {lang === 'ar' ? 'دقة مطابقة 100%' : '100% Direct Fit'}
                  </span>
                </div>
              </div>

              {/* Search Inputs Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-4">
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    {lang === 'ar' ? 'الشركة الصانعة:' : 'Select Make:'}
                  </label>
                  <select
                    value={matcherMake}
                    onChange={(e) => setMatcherMake(e.target.value)}
                    className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white font-semibold focus:outline-none focus:border-lime-400"
                  >
                    {MAKES.filter((m) => m.id !== 'all').map((make) => (
                      <option key={make.id} value={make.id} className="bg-slate-900 text-white">
                        {lang === 'ar' ? make.nameAr : make.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-6">
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    {lang === 'ar' ? 'رقم القطعة أو OEM أو اسم الموديل:' : 'OEM Number or Model Keyword:'}
                  </label>
                  <input
                    type="text"
                    value={matcherQuery}
                    onChange={(e) => setMatcherQuery(e.target.value)}
                    placeholder={lang === 'ar' ? 'مثال: 52115-06280 أو كامري أو سوناتا...' : 'e.g. 52115-06280 or Camry...'}
                    className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white font-mono placeholder:font-sans placeholder:text-slate-500 focus:outline-none focus:border-lime-400"
                  />
                </div>

                <div className="sm:col-span-2 flex items-end">
                  <button
                    onClick={handleMatcherSearch}
                    className="w-full py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-sm shadow-lg shadow-lime-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'فحص' : 'Verify'}</span>
                  </button>
                </div>
              </div>

              {/* Matched Part Result Card */}
              {matchedPart ? (
                <div className="bg-slate-900/90 border border-lime-500/40 rounded-2xl p-5 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-xl">
                  <div className="lg:col-span-4 bg-white/5 rounded-2xl p-4 flex items-center justify-center border border-white/10 relative overflow-hidden group">
                    <img
                      src={matchedPart.image}
                      alt={matchedPart.nameAr}
                      className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-lime-500 text-slate-950 font-black text-xs shadow-md">
                      {lang === 'ar' ? 'مطابق للأصل' : 'OEM Direct Clip'}
                    </span>
                  </div>

                  <div className="lg:col-span-8 space-y-4 text-right">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-black text-white">
                          {lang === 'ar' ? matchedPart.nameAr : matchedPart.nameEn}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-lime-400 font-mono mt-1">
                          <span>VPI SKU: {matchedPart.partNumber}</span>
                          <span>•</span>
                          <span>OEM Ref: {matchedPart.oemNumber}</span>
                        </div>
                      </div>

                      <div className="text-left">
                        <span className="text-xs text-slate-400 block">{lang === 'ar' ? 'السعر التقديري (قطاعي)' : 'Est. Price'}</span>
                        <span className="text-2xl font-black text-lime-400 font-mono">
                          {matchedPart.priceEstSAR} {lang === 'ar' ? 'ر.س' : 'SAR'}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-black/40 rounded-xl p-3.5 border border-white/10 text-xs">
                      <div>
                        <span className="text-slate-400 block">{lang === 'ar' ? 'المادة البوليمرية:' : 'Material:'}</span>
                        <span className="font-bold text-slate-200">
                          {lang === 'ar' ? matchedPart.specifications.materialAr : matchedPart.specifications.materialEn}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">{lang === 'ar' ? 'المتانة الحرارية:' : 'Thermal Spec:'}</span>
                        <span className="font-bold text-lime-400">130°C مضاد للشمس</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">{lang === 'ar' ? 'الضمان المصنعي:' : 'Factory Warranty:'}</span>
                        <span className="font-bold text-slate-200">{matchedPart.warrantyMonths} {lang === 'ar' ? 'شهراً' : 'Months'}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">{lang === 'ar' ? 'حالة التوفر:' : 'Stock Status:'}</span>
                        <span className="font-bold text-emerald-400">
                          {matchedPart.inStock ? (lang === 'ar' ? 'متوفر بالمستودع' : 'In Stock') : (lang === 'ar' ? 'تحت التصنيع' : 'In Production')}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {lang === 'ar' ? matchedPart.descriptionAr : matchedPart.descriptionEn}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => onSelectPart(matchedPart)}
                        className="px-5 py-2.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md"
                      >
                        {lang === 'ar' ? 'عرض المواصفات الفنية الكاملة' : 'View Full CAD Specs'}
                      </button>
                      <button
                        onClick={() => handleAddItemToQuote(matchedPart.id)}
                        className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/15 transition-all flex items-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" />
                        <span>{lang === 'ar' ? 'إضافة إلى حاسبة عروض الجملة (+25 قطعة)' : 'Add to Wholesale Quote'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center bg-slate-900/60 rounded-2xl border border-white/10 text-slate-400">
                  <AlertCircle className="w-8 h-8 mx-auto text-amber-400 mb-2" />
                  <p>{lang === 'ar' ? 'لم يتم العثور على نتائج. يرجى تجربة بحث آخر.' : 'No parts matched your query. Try another search.'}</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SMART B2B WHOLESALE QUOTE CALCULATOR */}
          {activeTab === 'quote' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-lime-400" />
                    <span>{lang === 'ar' ? 'حاسبة عروض الأسعار الذكية للجملة والوكلاء' : 'Smart Wholesale & Fleet Quotation Estimator'}</span>
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1">
                    {lang === 'ar'
                      ? 'حدد كميات القطع المطلوبة للورش والمستودعات واستفد من شرائح الخصم المصنعي التلقائية حتى 35%.'
                      : 'Estimate instant volume pricing tiers and export an official quotation with SASO certification.'}
                  </p>
                </div>

                {/* Discount Tier Badge */}
                <div className="flex items-center gap-2 bg-lime-500/10 border border-lime-500/30 px-4 py-2 rounded-2xl text-xs font-bold text-lime-400">
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {lang === 'ar'
                      ? `نسبة الخصم المكتسبة: ${discountPercent}% (${totalQty} قطعة)`
                      : `Applied Volume Discount: ${discountPercent}% (${totalQty} pcs)`}
                  </span>
                </div>
              </div>

              {/* Items List in Quote */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-2">
                  <span>{lang === 'ar' ? 'القطع المختارة في العرض:' : 'Selected Parts in RFQ:'}</span>
                  <span>{lang === 'ar' ? 'الكمية والتحكم' : 'Quantity Controls'}</span>
                </div>

                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {Object.entries(selectedItems).map(([partId, qty]) => {
                    const part = SAMPLE_PARTS.find((p) => p.id === partId);
                    if (!part) return null;
                    const numQty = Number(qty) || 0;
                    const itemTotal = part.priceEstSAR * numQty;
                    return (
                      <div
                        key={partId}
                        className="bg-slate-900/90 border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                          <img
                            src={part.image}
                            alt={part.nameAr}
                            className="w-12 h-12 object-cover rounded-xl border border-white/10"
                          />
                          <div>
                            <div className="font-bold text-white text-sm">
                              {lang === 'ar' ? part.nameAr : part.nameEn}
                            </div>
                            <div className="text-xs text-slate-400 font-mono">
                              SKU: {part.partNumber} • {part.priceEstSAR} SAR/pc
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                          <div className="flex items-center gap-2 bg-black/50 rounded-xl p-1 border border-white/10">
                            <button
                              onClick={() => handleUpdateItemQty(partId, -10)}
                              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center font-bold text-sm"
                            >
                              -10
                            </button>
                            <button
                              onClick={() => handleUpdateItemQty(partId, -1)}
                              className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center text-xs"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-12 text-center font-mono font-black text-lime-400 text-sm">
                              {qty}
                            </span>
                            <button
                              onClick={() => handleUpdateItemQty(partId, 1)}
                              className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center text-xs"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleUpdateItemQty(partId, 10)}
                              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center font-bold text-sm"
                            >
                              +10
                            </button>
                          </div>

                          <div className="text-left w-24">
                            <span className="text-sm font-black text-white font-mono block">
                              {itemTotal.toLocaleString()} {lang === 'ar' ? 'ر.س' : 'SAR'}
                            </span>
                          </div>

                          <button
                            onClick={() => handleUpdateItemQty(partId, -qty)}
                            className="text-slate-500 hover:text-red-400 p-1.5 transition-colors"
                            title="حذف"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Quick Add More Parts Dropdown */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-400">{lang === 'ar' ? 'إضافة سريعة لقطع أخرى:' : 'Quick Add More:'}</span>
                  {SAMPLE_PARTS.slice(0, 4).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleAddItemToQuote(p.id)}
                      className="px-3 py-1 rounded-xl bg-white/5 hover:bg-lime-500 hover:text-slate-950 text-slate-300 text-xs font-semibold border border-white/10 transition-colors"
                    >
                      + {lang === 'ar' ? p.nameAr.slice(0, 22) : p.nameEn.slice(0, 22)}...
                    </button>
                  ))}
                </div>
              </div>

              {/* Quotation Summary & Region Selector */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950/80 rounded-2xl p-6 border border-white/10">
                <div className="lg:col-span-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      {lang === 'ar' ? 'منطقة التوريد والتسليم بالمملكة:' : 'Destination Region:'}
                    </label>
                    <select
                      value={quoteRegion}
                      onChange={(e: any) => setQuoteRegion(e.target.value)}
                      className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white font-semibold focus:outline-none focus:border-lime-400"
                    >
                      <option value="riyadh">{lang === 'ar' ? 'الرياض والمنطقة الوسطى (توريد خلال 24 ساعة)' : 'Riyadh & Central (24h Delivery)'}</option>
                      <option value="western">{lang === 'ar' ? 'جدة ومكة والمنطقة الغربية (توريد خلال 48 ساعة)' : 'Jeddah & Western (48h Delivery)'}</option>
                      <option value="eastern">{lang === 'ar' ? 'الدمام والخبر والمنطقة الشرقية (توريد خلال 48 ساعة)' : 'Dammam & Eastern (48h Delivery)'}</option>
                      <option value="southern">{lang === 'ar' ? 'عسير والجنوب والقصيم والشمال (توريد خلال 72 ساعة)' : 'Southern & Northern Regions (72h Delivery)'}</option>
                      <option value="gcc">{lang === 'ar' ? 'دول مجلس التعاون الخليجي (شحن تصدير رسمي)' : 'GCC Countries (Export Logistics)'}</option>
                    </select>
                  </div>

                  <div className="bg-slate-900/90 rounded-xl p-4 border border-white/10 text-xs space-y-2 text-slate-300">
                    <div className="flex items-center gap-2 text-lime-400 font-bold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{lang === 'ar' ? 'مزايا عروض الجملة والوكلاء من مصنع VPI:' : 'VPI Factory Wholesale Perks:'}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      <li>{lang === 'ar' ? 'ضمان استبدال فوري 36 شهراً ضد عيوب التصنيع.' : '36-month full factory replacement warranty.'}</li>
                      <li>{lang === 'ar' ? 'تغليف آلي متين ومقاوم للشحن والتخزين الطويل.' : 'Heavy-duty export-ready protective packaging.'}</li>
                      <li>{lang === 'ar' ? 'شهادة مطابقة وتوافق معايير الهيئة السعودية للمواصفات SASO.' : 'SASO and ISO quality compliance certificate.'}</li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between space-y-4 border-t lg:border-t-0 lg:border-r border-white/10 lg:pr-6">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>{lang === 'ar' ? 'المجموع الإجمالي قبل الخصم:' : 'Gross Subtotal:'}</span>
                      <span className="font-mono text-white font-bold">{rawSubtotal.toLocaleString()} SAR</span>
                    </div>
                    <div className="flex items-center justify-between text-emerald-400 font-semibold">
                      <span>{lang === 'ar' ? `خصم الجملة التراكمي (${discountPercent}%):` : `Volume Discount (${discountPercent}%):`}</span>
                      <span className="font-mono">- {discountSAR.toLocaleString()} SAR</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>{lang === 'ar' ? 'ضريبة القيمة المضافة (15% VAT):' : 'VAT (15%):'}</span>
                      <span className="font-mono text-white font-bold">{vatSAR.toLocaleString(undefined, { maximumFractionDigits: 2 })} SAR</span>
                    </div>
                    <div className="h-px bg-white/10 my-2" />
                    <div className="flex items-center justify-between text-base sm:text-lg font-black text-white">
                      <span>{lang === 'ar' ? 'المبلغ التقديري الإجمالي:' : 'Total Estimated Quote:'}</span>
                      <span className="font-mono text-lime-400 text-2xl">
                        {grandTotalSAR.toLocaleString(undefined, { maximumFractionDigits: 2 })} {lang === 'ar' ? 'ر.س' : 'SAR'}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      onClick={generateWhatsAppQuote}
                      className="w-full sm:flex-1 py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-lime-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>{lang === 'ar' ? 'طلب التسعيرة عبر واتساب فوراً' : 'Send RFQ via WhatsApp'}</span>
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/15 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Printer className="w-4 h-4" />
                      <span>{lang === 'ar' ? 'طباعة / PDF' : 'Print Quote'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: POLYMER & ENGINEERING ADVISOR */}
          {activeTab === 'engineering' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-lime-400" />
                  <span>{lang === 'ar' ? 'المستشار الهندسي لمواصفات البوليمر وجودة الحقن' : 'Polymer Engineering & Thermal Specifications'}</span>
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  {lang === 'ar'
                    ? 'فارق الجودة الهندسية بين بوليمرات VPI البكر المقواة بالمطاط الصناعي EPDM وبين القطع المقلدة الرديئة.'
                    : 'Engineering comparison between VPI high-grade Virgin PP+EPDM composite and low-cost brittle recycled plastics.'}
                </p>
              </div>

              {/* Interactive Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* VPI Quality Card */}
                <div className="rounded-2xl bg-gradient-to-b from-lime-950/40 to-slate-900 border-2 border-lime-500/60 p-6 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-lime-500 text-slate-950 font-black text-xs">
                      {lang === 'ar' ? 'معايير مصنع VPI السعودية' : 'VPI Factory Standards'}
                    </span>
                    <CheckCircle2 className="w-6 h-6 text-lime-400" />
                  </div>

                  <h4 className="text-lg font-black text-white">
                    {lang === 'ar' ? 'بوليمر بولي بروبيلين بكر مدعم بـ EPDM' : 'Virgin Polypropylene + EPDM Elastomer'}
                  </h4>

                  <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                    <li className="flex items-start gap-2">
                      <Flame className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">تحمل حراري حتى 130°C:</strong> لا يرتخي أو يتشوه تحت شمس الصيف الحارقة بالمملكة والخليج.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Layers className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">مرونة عالية لشنابر التثبيت:</strong> لا تنكسر الكلبسات عند الفك والتركيب في الورش ومحلات السمكرة.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">مطابقة معايير SASO ISO 9001:</strong> كليبس مباشر بدون حفر أو تخريم في بدي السيارة.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Commercial Competitor Card */}
                <div className="rounded-2xl bg-slate-950/60 border border-red-500/30 p-6 space-y-4 opacity-85">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 font-bold text-xs border border-red-500/30">
                      {lang === 'ar' ? 'القطع التجارية المعاد تدويرها' : 'Cheap Recycled Commercial'}
                    </span>
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>

                  <h4 className="text-lg font-black text-slate-300">
                    {lang === 'ar' ? 'بلاستيك رديء معاد تدويره (Recycled)' : 'Low-Grade Recycled Regrind'}
                  </h4>

                  <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <Flame className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-300">تشوه سريع عند 75°C:</strong> سقوط الصدام وارتخاء زوايا الرفارف بعد أشهر قليلة.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Layers className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-300">بلاستيك هش وقابل للكسر:</strong> انكسار السنون أثناء التركيب الأول وتكبد خسائر إضافية.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-300">بدون ضمان معتمد:</strong> صعوبة الاسترجاع واختلاف المسافات بين الفواصل (Panel Gaps).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SMART ORDER TRACKING */}
          {activeTab === 'tracking' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <Truck className="w-6 h-6 text-lime-400" />
                  <span>{lang === 'ar' ? 'متتبع الشحنات والطلبات اللوجستية الذكي' : 'Live Order & Shipment Tracking System'}</span>
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  {lang === 'ar'
                    ? 'تابع حالة تصنيع وفحص وشحن طلبياتك لحظة بلحظة عبر أسطول VPI اللوجستي المباشر.'
                    : 'Track manufacturing progress, QA verification, and regional delivery status in real-time.'}
                </p>
              </div>

              {/* Tracking Lookup Box */}
              <form onSubmit={handleTrackSubmit} className="max-w-2xl mx-auto space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={trackInput}
                    onChange={(e) => setTrackInput(e.target.value)}
                    placeholder={lang === 'ar' ? 'أدخل رقم الطلب (مثال: VPI-2026-8942)' : 'Order ID (e.g. VPI-2026-8942)'}
                    className="flex-1 bg-slate-900 border border-white/20 rounded-2xl px-5 py-3.5 text-white font-mono text-sm focus:outline-none focus:border-lime-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-2xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-sm transition-all shadow-lg shadow-lime-500/20"
                  >
                    {lang === 'ar' ? 'تتبع الطلب' : 'Track Order'}
                  </button>
                </div>

                {/* Demo Quick Chips */}
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>{lang === 'ar' ? 'أرقام شحنات تجريبية:' : 'Try Demo Orders:'}</span>
                  {Object.keys(MOCK_TRACKING_ORDERS).map((id) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => {
                        setTrackInput(id);
                        setTrackResult(MOCK_TRACKING_ORDERS[id]);
                        setTrackError('');
                      }}
                      className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-lime-400 font-mono border border-white/10"
                    >
                      {id}
                    </button>
                  ))}
                </div>
              </form>

              {trackError && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center">
                  {trackError}
                </div>
              )}

              {/* Order Result Timeline */}
              {trackResult && (
                <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-lime-500/30 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <span className="text-xs font-bold text-slate-400 block">{lang === 'ar' ? 'رقم أمر التوريد:' : 'Order Number:'}</span>
                      <span className="text-xl font-black text-white font-mono">{trackResult.orderId}</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 block">{lang === 'ar' ? 'العميل / المستودع:' : 'Client:'}</span>
                      <span className="text-sm font-bold text-lime-400">{trackResult.clientName} ({trackResult.city})</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 block">{lang === 'ar' ? 'الناقل اللوجستي:' : 'Logistics Carrier:'}</span>
                      <span className="text-sm font-bold text-slate-200">{trackResult.carrier}</span>
                    </div>
                    <div>
                      <span className="px-3 py-1.5 rounded-full bg-lime-500 text-slate-950 font-black text-xs shadow-md">
                        {lang === 'ar' ? trackResult.statusAr : trackResult.statusEn}
                      </span>
                    </div>
                  </div>

                  {/* Visual 5-step timeline */}
                  <div className="relative pl-6 pr-6 space-y-6">
                    {trackResult.timeline.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4 relative">
                        {/* Dot indicator */}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                            step.done
                              ? 'bg-lime-500 text-slate-950 font-black shadow-lg shadow-lime-500/30'
                              : 'bg-slate-800 border-2 border-slate-600 text-slate-400'
                          }`}
                        >
                          {step.done ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                        </div>

                        <div className="flex-1">
                          <div className={`font-bold text-sm ${step.done ? 'text-white' : 'text-slate-400'}`}>
                            {lang === 'ar' ? step.titleAr : step.titleEn}
                          </div>
                          <div className="text-xs text-slate-500 font-mono mt-0.5">{step.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: FACTORY VISIT & CUSTOM INJECTION MOLD BOOKING */}
          {activeTab === 'booking' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-lime-400" />
                  <span>{lang === 'ar' ? 'حجز موعد استشارة فنية وتصنيع قوالب حقن مخصصة' : 'Factory Visit & Custom Injection Mold Consultation'}</span>
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  {lang === 'ar'
                    ? 'نرحب بكبرى شركات قطع الغيار وأساطيل النقل لزيارة خطوط الإنتاج بالرياض وتصميم قوالب مخصصة لأي طراز سيارة.'
                    : 'Schedule a VIP factory tour at our Riyadh facility or consult with mold design engineers for custom OEM automotive projects.'}
                </p>
              </div>

              {bookingSubmitted ? (
                <div className="p-8 text-center bg-emerald-950/30 rounded-2xl border border-emerald-500/40 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-lime-400 mx-auto" />
                  <h4 className="text-xl font-black text-white">
                    {lang === 'ar' ? 'تم استلام طلب الحجز بنجاح!' : 'Consultation Booked Successfully!'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
                    {lang === 'ar'
                      ? `شكراً لك يا ${bookingName}. سيتواصل معك مدير العلاقات الصناعية والتوريد خلال ساعتي عمل لتأكيد جدول الزيارة في ${bookingDate}.`
                      : `Thank you ${bookingName}. Our industrial relations manager will contact you shortly to confirm the appointment for ${bookingDate}.`}
                  </p>
                  <button
                    onClick={() => setBookingSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs mt-3"
                  >
                    {lang === 'ar' ? 'حجز موعد آخر' : 'Book Another Session'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      {lang === 'ar' ? 'نوع الزيارة أو الاستشارة المطلوبة:' : 'Meeting Category:'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setBookingType('factory_tour')}
                        className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                          bookingType === 'factory_tour'
                            ? 'bg-lime-500 text-slate-950 border-lime-400 font-black'
                            : 'bg-slate-900 text-slate-300 border-white/10'
                        }`}
                      >
                        {lang === 'ar' ? 'زيارة خطوط الإنتاج' : 'Factory Floor Tour'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setBookingType('custom_mold')}
                        className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                          bookingType === 'custom_mold'
                            ? 'bg-lime-500 text-slate-950 border-lime-400 font-black'
                            : 'bg-slate-900 text-slate-300 border-white/10'
                        }`}
                      >
                        {lang === 'ar' ? 'تصنيع قوالب حقن مخصصة' : 'Custom Injection Molds'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setBookingType('distributor_meeting')}
                        className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                          bookingType === 'distributor_meeting'
                            ? 'bg-lime-500 text-slate-950 border-lime-400 font-black'
                            : 'bg-slate-900 text-slate-300 border-white/10'
                        }`}
                      >
                        {lang === 'ar' ? 'اجتماع وكالة وتوزيع' : 'Distributor Partnership'}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      {lang === 'ar' ? 'الاسم الكريم:' : 'Full Name:'}
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      placeholder={lang === 'ar' ? 'مثال: م. فهد القحطاني' : 'e.g. Eng. Fahad'}
                      className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-lime-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      {lang === 'ar' ? 'اسم المؤسسة أو الشركة:' : 'Company / Entity:'}
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingCompany}
                      onChange={(e) => setBookingCompany(e.target.value)}
                      placeholder={lang === 'ar' ? 'مثال: شركة ليدر لقطع الغيار' : 'e.g. Leader Auto Parts'}
                      className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-lime-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      {lang === 'ar' ? 'رقم الجوال أو واتساب:' : 'Mobile / WhatsApp:'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-lime-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      {lang === 'ar' ? 'تاريخ الزيارة المقترح:' : 'Preferred Date:'}
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-lime-400"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-sm shadow-xl shadow-lime-500/20 transition-all transform active:scale-95"
                    >
                      {lang === 'ar' ? 'تأكيد إرسال طلب الحجز المباشر' : 'Confirm Consultation Request'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
