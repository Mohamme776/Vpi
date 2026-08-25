import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  Search,
  Calculator,
  ShieldCheck,
  MapPin,
  MessageCircle,
  Truck,
  ArrowUpRight,
  RefreshCw,
  Award,
} from 'lucide-react';
import { SAMPLE_PARTS, BRANCH_LOCATIONS } from '../data/mockData';
import { Language, VehiclePart } from '../types';

interface SmartAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectPart: (part: VehiclePart) => void;
  onOpenDealerModal: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  textAr: string;
  textEn: string;
  timestamp: string;
  action?: {
    type: 'part' | 'catalog' | 'dealer' | 'whatsapp' | 'locations' | 'tracking';
    partData?: VehiclePart;
    btnLabelAr?: string;
    btnLabelEn?: string;
  };
}

export const SmartAssistantModal: React.FC<SmartAssistantModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectPart,
  onOpenDealerModal,
  onNavigateToSection,
}) => {
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-msg',
      sender: 'bot',
      textAr:
        'مرحباً بك في «مساعد خدمتك الذكي» من مصنع أجزاء المركبة VPI! 🚗\nأنا هنا لمساعدتك في مطابقة أرقام القطع، حساب أسعار الجملة للوكلاء والمستودعات، وشرح المواصفات الهندسية للبلاستيك. كيف يمكنني خدمتك اليوم؟',
      textEn:
        'Welcome to VPI Smart Service Assistant! 🚗\nI can assist you with OEM part matching, bulk wholesale quotations, and polymer engineering specifications. How may I help you today?',
      timestamp: 'الآن',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const quickPrompts = [
    {
      labelAr: '🔍 حوامل صدام كامري 2024',
      labelEn: '🔍 Camry 2024 Brackets',
      query: 'كامري 2024',
    },
    {
      labelAr: '💰 ما هي خصومات الجملة للوكلاء؟',
      labelEn: '💰 Wholesale discounts?',
      query: 'خصومات الجملة',
    },
    {
      labelAr: '🛡️ ما هي مواصفات بلاستيك VPI؟',
      labelEn: '🛡️ Polymer & thermal specs?',
      query: 'مواصفات البلاستيك',
    },
    {
      labelAr: '📍 فروع ومستودعات التوزيع',
      labelEn: '📍 Distribution Hubs',
      query: 'أين الفروع والمستودعات',
    },
    {
      labelAr: '🚚 كيف أتتبع شحنتي؟',
      labelEn: '🚚 Track my order?',
      query: 'تتبع الشحنة',
    },
  ];

  const processUserQuery = (query: string) => {
    const q = query.toLowerCase().trim();
    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      textAr: query,
      textEn: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse: Message;

      // 1. Check for specific car models in parts list
      const matchedPart = SAMPLE_PARTS.find(
        (p) =>
          p.nameAr.toLowerCase().includes(q) ||
          p.nameEn.toLowerCase().includes(q) ||
          p.partNumber.toLowerCase().includes(q) ||
          p.oemNumber.toLowerCase().includes(q) ||
          p.make.toLowerCase().includes(q) ||
          p.models.some((m) => m.toLowerCase().includes(q))
      );

      if (matchedPart) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          textAr: `وجدت لك القطعة المطابقة تماماً بمواصفات الوكالة:
📦 **${matchedPart.nameAr}**
🔢 كود VPI: \`${matchedPart.partNumber}\`
🏷️ رقم OEM الأصلي: \`${matchedPart.oemNumber}\`
🌡️ المادة: ${matchedPart.specifications.materialAr} (مقاومة للحرارة حتى 130°C)
💵 السعر التقديري: ${matchedPart.priceEstSAR} ر.س مع ضمان 36 شهراً واستبدال فوري.`,
          textEn: `Found exact matching OEM standard part:
📦 **${matchedPart.nameEn}**
🔢 VPI SKU: \`${matchedPart.partNumber}\`
🏷️ OEM Ref: \`${matchedPart.oemNumber}\`
🌡️ Material: ${matchedPart.specifications.materialEn} (Thermal resistance 130°C)
💵 Est. Price: ${matchedPart.priceEstSAR} SAR with 36 Months Warranty.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: {
            type: 'part',
            partData: matchedPart,
            btnLabelAr: 'عرض التفاصيل والطلب الفوري',
            btnLabelEn: 'View Full Specs & Order',
          },
        };
      } else if (q.includes('خصم') || q.includes('جملة') || q.includes('سعر') || q.includes('price') || q.includes('wholesale') || q.includes('توزيع')) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          textAr: `يقدم مصنع VPI شرائح خصم تصاعدية للموزعين ومستودعات الجملة بالمملكة والخليج:
✨ **50 - 99 قطعة:** خصم 10%
✨ **100 - 249 قطعة:** خصم 18%
✨ **250 - 499 قطعة:** خصم 25%
✨ **500+ قطعة:** خصم مصنعي خاص يصل إلى 35% مع توصيل مجاني.
يمكنك استخدام حاسبة العروض الذكية لتوليد أمر توريد فوري.`,
          textEn: `VPI offers tiered wholesale discounts for dealers and fleet networks:
✨ 50-99 pcs: 10% OFF
✨ 100-249 pcs: 18% OFF
✨ 250-499 pcs: 25% OFF
✨ 500+ pcs: 35% Special Factory Pricing with Free Fleet Shipping.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: {
            type: 'dealer',
            btnLabelAr: 'طلب الانضمام كوكيل معتمد',
            btnLabelEn: 'Apply as Authorized Dealer',
          },
        };
      } else if (q.includes('بلاستيك') || q.includes('حرارة') || q.includes('مواصفات') || q.includes('جودة') || q.includes('polymer') || q.includes('quality')) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          textAr: `🔬 **المواصفات الهندسية لبوليمرات VPI:**
1. نصنع حصرياً من بولي بروبيلين بكر (Virgin PP) مدعم بمطاط EPDM الصناعي.
2. مرونة كلبسات فائقة تمنع الكسر أثناء التركيب والفك في الورش.
3. تحمل حراري حتى 130°C مع مثبتات الأشعة فوق البنفسجية (Anti-UV) لمقاومة شمس الخليج.
4. حاصلون على شهادات الجودة والمطابقة السعودية SASO و ISO 9001.`,
          textEn: `🔬 **VPI Polymer Engineering Standards:**
1. 100% Virgin Polypropylene with EPDM Elastomer reinforcement.
2. Direct clip-in flexibility with zero snap risk during mechanic fitting.
3. Heat tolerance up to 130°C with UV stabilizers against Gulf heat.
4. Certified by SASO and ISO 9001 quality compliance.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
      } else if (q.includes('فرع') || q.includes('مكان') || q.includes('موقع') || q.includes('رياض') || q.includes('جدة') || q.includes('branch') || q.includes('location')) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          textAr: `📍 **شبكة مصنع وفروع VPI بالمملكة:**
🏢 **المصنع الرئيسي والإدارة:** الرياض - المدينة الصناعية الثانية (طريق الخرج).
🏬 **مركز التوزيع الغربي:** جدة - حي النزهة / شارع بني مالك.
🏬 **مستودع المنطقة الشرقية:** الدمام - الخالدية الجنوبية.
🏬 **مستودعات الشركاء:** القصيم، عسير، والمدينة المنورة.
أوقات العمل: من السبت إلى الخميس 8:00 صباحاً - 5:30 مساءً.`,
          textEn: `📍 **VPI Factory & Hub Locations:**
🏢 Headquarters & Factory: Riyadh 2nd Industrial City.
🏬 Western Distribution Hub: Jeddah, An Nuzhah District.
🏬 Eastern Hub: Dammam, South Khalidiyah.
Business Hours: Sat-Thu 8:00 AM - 5:30 PM.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: {
            type: 'locations',
            btnLabelAr: 'عرض خريطة الفروع والاتصال المباشر',
            btnLabelEn: 'View Hubs on Map',
          },
        };
      } else if (q.includes('تتبع') || q.includes('شحن') || q.includes('track') || q.includes('order')) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          textAr: `🚚 يمكنك تتبع شحنتك فوراً عبر إدخال رقم الطلب في قسم «متتبع الشحنات الذكي».
أرقام تجريبية للتتبع:
• \`VPI-2026-8942\` (شحنة الرياض - في الطريق للتسليم)
• \`VPI-SA-5510\` (شحنة الدمام - قيد الحقن والتصنيع)
• \`VPI-2026-3108\` (شحنة الجنوب - تم التسليم بنجاح)`,
          textEn: `🚚 You can track your shipment live using the Smart Order Tracker.
Demo tracking IDs:
• \`VPI-2026-8942\` (Out for delivery)
• \`VPI-SA-5510\` (In factory production)
• \`VPI-2026-3108\` (Delivered)`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: {
            type: 'tracking',
            btnLabelAr: 'الانتقال لمتتبع الشحنات',
            btnLabelEn: 'Go to Order Tracker',
          },
        };
      } else {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          textAr: `شكراً لاستفسارك! نحن متخصصون في تصنيع حوامل الصدامات، بطانات الرفارف، زوايا المرايا، وشبوك السيارات بجودة الوكالة.
يمكنك أيضاً التحدث مباشرة مع المهندس الفني عبر واتساب للحصول على استشارة متخصصة فورية.`,
          textEn: `Thank you for your inquiry! We specialize in direct OEM-fit bumper brackets, splash shields, and automotive plastic trims.
You can also chat directly with our technical engineering team via WhatsApp.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: {
            type: 'whatsapp',
            btnLabelAr: 'تحدث مع مهندس VPI عبر واتساب',
            btnLabelEn: 'Chat with Engineer on WhatsApp',
          },
        };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 650);
  };

  const handleActionClick = (action: Message['action']) => {
    if (!action) return;
    onClose();
    if (action.type === 'part' && action.partData) {
      onSelectPart(action.partData);
    } else if (action.type === 'dealer') {
      onOpenDealerModal();
    } else if (action.type === 'locations') {
      onNavigateToSection('locations');
    } else if (action.type === 'tracking') {
      onNavigateToSection('smart-service');
    } else if (action.type === 'whatsapp') {
      window.open('https://wa.me/966552809632?text=السلام%20عليكم%D8%8C%20أود%20استشارة%20فنية%20بخصوص%20قطع%20VPI', '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl h-[90vh] max-h-[700px] rounded-3xl bg-[#091522] border border-lime-500/40 shadow-2xl flex flex-col overflow-hidden text-right">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#0b1b2d] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-lime-500 to-emerald-400 text-slate-950 flex items-center justify-center shadow-lg shadow-lime-500/20">
              <Sparkles className="w-5 h-5 fill-current animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-white text-base sm:text-lg">
                  {lang === 'ar' ? 'مساعد خدمتك الذكي' : 'VPI Smart Assistant'}
                </h3>
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
              </div>
              <p className="text-[11px] text-lime-400 font-semibold">
                {lang === 'ar' ? 'مستشار قطع وهياكل المركبات الآلي' : 'Automotive AI Specialist • Online'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2.5 bg-slate-950/60 border-b border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {quickPrompts.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => processUserQuery(chip.query)}
              className="px-3 py-1 rounded-xl bg-white/5 hover:bg-lime-500 hover:text-slate-950 text-slate-300 text-xs font-semibold whitespace-nowrap border border-white/10 transition-colors shrink-0"
            >
              {lang === 'ar' ? chip.labelAr : chip.labelEn}
            </button>
          ))}
        </div>

        {/* Chat Stream Window */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-lime-500 text-slate-950 font-bold'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-md ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-slate-900/90 text-slate-200 border border-white/10 rounded-tl-none'
                }`}
              >
                <div>{lang === 'ar' ? msg.textAr : msg.textEn}</div>

                {/* Interactive Action Button */}
                {msg.action && (
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
                    <button
                      onClick={() => handleActionClick(msg.action)}
                      className="px-4 py-2 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-xs transition-all shadow-md flex items-center gap-1.5"
                    >
                      <span>{lang === 'ar' ? msg.action.btnLabelAr : msg.action.btnLabelEn}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                <div className="text-[9px] text-slate-500 mt-1.5 text-left font-mono">
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-slate-400 text-xs py-2">
              <Bot className="w-4 h-4 text-lime-400 animate-spin" />
              <span>{lang === 'ar' ? 'المساعد الذكي يقوم بفحص البيانات والمواصفات...' : 'AI is querying specifications...'}</span>
            </div>
          )}
          <div ref={chatBottomRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (inputQuery.trim()) {
              processUserQuery(inputQuery);
            }
          }}
          className="p-3 sm:p-4 bg-[#0b1b2d] border-t border-white/10 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={
              lang === 'ar'
                ? 'اكتب سؤالك (مثال: ابحث عن حوامل كامري، أو شروط الوكالة، أو خصم 200 قطعة)...'
                : 'Ask anything (e.g. Camry brackets, dealer discounts, polymer specs)...'
            }
            className="flex-1 bg-slate-900 border border-white/15 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-lime-400"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim()}
            className="w-12 h-12 rounded-2xl bg-lime-500 hover:bg-lime-400 disabled:opacity-40 disabled:hover:bg-lime-500 text-slate-950 flex items-center justify-center transition-all shadow-lg shadow-lime-500/20"
          >
            <Send className="w-5 h-5 rtl:rotate-180" />
          </button>
        </form>
      </div>
    </div>
  );
};
