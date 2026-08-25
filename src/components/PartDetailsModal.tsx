import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  Award,
  CheckCircle2,
  FileCheck,
  Send,
  Share2,
  Printer,
  Car,
  Layers,
  Scale,
  Sparkles,
  Phone,
  MessageCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VehiclePart, Language } from '../types';

interface PartDetailsModalProps {
  part: VehiclePart | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onOpenInquiry: (part: VehiclePart) => void;
}

export const PartDetailsModal: React.FC<PartDetailsModalProps> = ({
  part,
  isOpen,
  onClose,
  lang,
  onOpenInquiry,
}) => {
  if (!isOpen || !part) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="part-details-modal"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-[#0e253d] to-[#081524] border border-lime-500/40 p-6 sm:p-8 shadow-2xl text-slate-100 text-right"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-part-modal"
          className="absolute top-5 left-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body Grid */}
        <div className="space-y-6">
          {/* Top Section: Image + Primary Details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Image */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-[#06121f] border border-white/10 h-64 md:h-full min-h-[220px]">
              <img
                src={part.image}
                alt={part.nameAr}
                className="w-full h-full object-cover"
              />
              {part.badge && (
                <span className="absolute top-3 right-3 px-3 py-1 rounded-md bg-lime-500 text-slate-950 font-black text-xs shadow-md">
                  {lang === 'ar' ? part.badge : part.badgeEn}
                </span>
              )}
              <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm text-xs font-bold text-slate-200 border border-white/10">
                صناعة سعودية 🇸🇦
              </span>
            </div>

            {/* Main Info */}
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-lime-400">
                <span className="bg-lime-500/10 px-2 py-0.5 rounded border border-lime-500/30">
                  {part.partNumber}
                </span>
                <span>•</span>
                <span className="text-slate-300">OEM: {part.oemNumber}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">
                {lang === 'ar' ? part.nameAr : part.nameEn}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'ar' ? part.descriptionAr : part.descriptionEn}
              </p>

              {/* Price and Warranty Info Bar */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">{lang === 'ar' ? 'السعر التقديري للمستهلك' : 'Est. Price'}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-lime-400 font-mono">{part.priceEstSAR}</span>
                    <span className="text-xs text-white font-bold">ر.س / SAR</span>
                  </div>
                </div>

                <div className="text-left">
                  <span className="text-xs text-slate-400 block">{lang === 'ar' ? 'فترة الضمان' : 'Warranty'}</span>
                  <span className="text-sm font-bold text-white bg-lime-500/20 px-2.5 py-1 rounded border border-lime-500/30 inline-block text-lime-300">
                    {part.warrantyMonths} شهر مصنعي
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Sheet */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-lime-400 uppercase tracking-wider flex items-center gap-2">
              <FileCheck className="w-4 h-4" />
              <span>{lang === 'ar' ? 'المواصفات الفنية والهندسية:' : 'Technical Specifications:'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-400 block mb-0.5">{lang === 'ar' ? 'الخامة والمكونات:' : 'Material:'}</span>
                <p className="font-bold text-white">{lang === 'ar' ? part.specifications.materialAr : part.specifications.materialEn}</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-400 block mb-0.5">{lang === 'ar' ? 'الوزن التقريبي:' : 'Weight:'}</span>
                <p className="font-bold text-white font-mono">{part.specifications.weightKg} كجم (kg)</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-400 block mb-0.5">{lang === 'ar' ? 'بلد المنشأ والمصنع:' : 'Origin:'}</span>
                <p className="font-bold text-lime-300">{lang === 'ar' ? part.specifications.originAr : part.specifications.originEn}</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-400 block mb-0.5">{lang === 'ar' ? 'شهادات الجودة والمطابقة:' : 'Certifications:'}</span>
                <p className="font-bold text-white">{part.specifications.testingCert}</p>
              </div>
            </div>
          </div>

          {/* Compatible Vehicles Matrix */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-lime-400 uppercase tracking-wider flex items-center gap-2">
              <Car className="w-4 h-4" />
              <span>{lang === 'ar' ? 'المركبات المتوافقة والموديلات المدعومة:' : 'Vehicle Compatibility Matrix:'}</span>
            </h3>

            <div className="space-y-2">
              {part.compatibleVehicles.map((v, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#06121f] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                    <span className="font-bold text-white">
                      {v.make} {v.model}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300 font-mono text-[11px]">
                    <span className="bg-white/5 px-2 py-0.5 rounded">سنوات: {v.years}</span>
                    <span className="bg-lime-500/10 text-lime-300 px-2 py-0.5 rounded">المحرك: {v.engine}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(part);
              }}
              className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-slate-950 font-black text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{lang === 'ar' ? 'طلب تسعيرة كميات جملة للقطعة' : 'Request Wholesale Quote'}</span>
            </button>

            <a
              href={`https://wa.me/966552809632?text=${encodeURIComponent(
                `السلام عليكم، أود الاستفسار عن توفر وسعر القطعة: ${part.nameAr} - كود: ${part.partNumber}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="py-3.5 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-lime-400" />
              <span>واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
