import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Globe,
  Search,
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
  Sparkles,
  Award,
  Layers,
  ArrowUpRight,
  Cpu,
} from 'lucide-react';
import { VpiLogo } from './VpiLogo';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  activeSection,
  onNavigate,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'about', labelAr: 'من نحن', labelEn: 'About Us' },
    { id: 'products', labelAr: 'منتجاتنا', labelEn: 'Products & Parts' },
    { id: 'clients', labelAr: 'عملاؤنا الاستراتيجيون', labelEn: 'Clients' },
    { id: 'community', labelAr: 'المجتمع', labelEn: 'Community' },
    { id: 'locations', labelAr: 'تجدنا بالقرب منك', labelEn: 'Find Us' },
    { id: 'contact', labelAr: 'الاتصال', labelEn: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-['Cairo',sans-serif]">
      {/* 1. Top Bar */}
      <div
        id="vpi-top-bar"
        className={`bg-[#0b141e]/95 text-slate-300 text-xs border-b border-white/10 transition-all duration-300 ${
          isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden border-none' : 'py-2 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Social Icons & Hotline (Right in RTL) */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              {lang === 'ar' ? 'تابعنا على:' : 'Follow Us:'}
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                id="top-social-fb"
                aria-label="Facebook"
                className="w-6 h-6 rounded-full bg-white/5 hover:bg-lime-500 hover:text-slate-950 flex items-center justify-center transition-colors text-slate-300"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                id="top-social-x"
                aria-label="X Twitter"
                className="w-6 h-6 rounded-full bg-white/5 hover:bg-lime-500 hover:text-slate-950 flex items-center justify-center transition-colors text-slate-300"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                id="top-social-ig"
                aria-label="Instagram"
                className="w-6 h-6 rounded-full bg-white/5 hover:bg-lime-500 hover:text-slate-950 flex items-center justify-center transition-colors text-slate-300"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                id="top-social-yt"
                aria-label="YouTube"
                className="w-6 h-6 rounded-full bg-white/5 hover:bg-lime-500 hover:text-slate-950 flex items-center justify-center transition-colors text-slate-300"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/966552809632"
                target="_blank"
                rel="noreferrer"
                id="top-social-wa"
                aria-label="WhatsApp"
                className="w-6 h-6 rounded-full bg-lime-500/20 text-lime-400 hover:bg-lime-500 hover:text-slate-950 flex items-center justify-center transition-colors"
                title="تواصل مباشر عبر واتساب (+966 55 280 9632)"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links (Center) */}
          <div className="hidden md:flex items-center gap-6 text-[12px] font-medium text-slate-300">
            <button
              id="top-link-about"
              onClick={() => onNavigate('about')}
              className="hover:text-lime-400 transition-colors"
            >
              {lang === 'ar' ? 'من نحن' : 'About Us'}
            </button>
            <span className="text-white/20">|</span>
            <button
              id="top-link-contact"
              onClick={() => onNavigate('contact')}
              className="hover:text-lime-400 transition-colors"
            >
              {lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </button>
            <span className="text-white/20">|</span>
            <button
              id="top-link-faq"
              onClick={() => onNavigate('faq')}
              className="hover:text-lime-400 transition-colors"
            >
              {lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
            </button>
          </div>

          {/* Location Badge (Left in RTL) */}
          <div className="flex items-center gap-2 text-slate-300 text-xs">
            <MapPin className="w-3.5 h-3.5 text-lime-400 shrink-0 animate-pulse" />
            <span className="truncate max-w-[220px] sm:max-w-none text-[11px] sm:text-xs">
              {lang === 'ar'
                ? '📍 المدينة الصناعية، الخرج، المملكة العربية السعودية'
                : '📍 Industrial City, Al-Kharj, Saudi Arabia'}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav
        id="vpi-main-navbar"
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b1622]/95 backdrop-blur-md shadow-2xl py-2.5 border-b border-lime-500/20'
            : 'bg-gradient-to-b from-[#0b1622]/90 via-[#0b1622]/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div
            id="navbar-brand"
            className="cursor-pointer flex items-center gap-3"
            onClick={() => onNavigate('hero')}
          >
            <VpiLogo variant="light" size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-3 py-2 text-[14px] xl:text-[15px] font-semibold transition-all duration-200 rounded-lg group flex items-center gap-1.5 ${
                    isActive
                      ? 'text-lime-400 font-bold'
                      : 'text-slate-100 hover:text-lime-300 hover:bg-white/5'
                  }`}
                >
                  <span>{lang === 'ar' ? item.labelAr : item.labelEn}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-lime-400 rounded-full shadow-[0_0_8px_rgba(139,195,74,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Tools (Language, Search, Dealer CTA) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              aria-label="Search parts"
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white/10 hover:bg-lime-500/20 hover:text-lime-400 text-slate-200 border border-white/10 hover:border-lime-500/30 transition-all flex items-center gap-2 text-sm"
              title="بحث سريع عن قطع الغيار برقم القطعة أو الموديل"
            >
              <Search className="w-4 h-4 text-lime-400" />
              <span className="hidden xl:inline text-xs font-medium">
                {lang === 'ar' ? 'بحث قطع الغيار...' : 'Search Parts...'}
              </span>
            </button>

            {/* Language Toggle */}
            <button
              id="header-lang-toggle"
              onClick={onToggleLang}
              className="px-2.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 transition-all flex items-center gap-1.5 text-xs font-bold"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-lime-400" />
              <span>{lang === 'ar' ? 'EN' : 'العربية'}</span>
            </button>

            {/* Request Quote Button (Header CTA) */}
            <button
              id="header-contact-cta"
              onClick={() => onNavigate('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-slate-950 font-bold text-sm shadow-lg shadow-lime-500/20 hover:shadow-lime-500/35 transition-all transform active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{lang === 'ar' ? 'طلب تسعيرة' : 'Request RFQ'}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 text-slate-200 hover:text-lime-400 hover:bg-white/20 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0b1622]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl px-5 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all text-right ${
                    isActive
                      ? 'bg-lime-500/20 text-lime-400 border border-lime-500/40'
                      : 'text-slate-200 hover:bg-white/5 hover:text-lime-300'
                  }`}
                >
                  <span>{lang === 'ar' ? item.labelAr : item.labelEn}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-lime-400" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              id="mobile-contact-btn"
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-lime-500 text-slate-950 font-bold text-center text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{lang === 'ar' ? 'طلب تسعيرة وتوريد مباشر' : 'Request RFQ & Supply'}</span>
            </button>
            <div className="flex items-center justify-between text-xs text-slate-400 px-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-lime-400" />
                الخرج، المملكة العربية السعودية
              </span>
              <a
                href="tel:+966115448890"
                className="text-lime-400 hover:underline flex items-center gap-1 font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                +966 11 544 8890
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
