/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PartFinderWidget } from './components/PartFinderWidget';
import { PartsCatalogSection } from './components/PartsCatalogSection';
import { AboutSection } from './components/AboutSection';
import { StrategicClientsSection } from './components/StrategicClientsSection';
import { SmartServiceSection } from './components/SmartServiceSection';
import { DealerSection } from './components/DealerSection';
import { LocationsSection } from './components/LocationsSection';
import { CommunitySection } from './components/CommunitySection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DealerModal } from './components/DealerModal';
import { PartDetailsModal } from './components/PartDetailsModal';
import { SearchModal } from './components/SearchModal';
import { ArticleModal } from './components/ArticleModal';
import { SmartAssistantModal } from './components/SmartAssistantModal';
import { SAMPLE_PARTS } from './data/mockData';
import { Language, SearchFilterState, VehiclePart, NewsItem } from './types';
import { MessageCircle, Phone, Award, Sparkles, Bot } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Modals state
  const [isDealerModalOpen, setIsDealerModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [isSmartAssistantOpen, setIsSmartAssistantOpen] = useState<boolean>(false);
  const [selectedPart, setSelectedPart] = useState<VehiclePart | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  // Search and Filter state
  const [filters, setFilters] = useState<SearchFilterState>({
    make: 'all',
    model: 'all',
    year: 'all',
    category: 'all',
    keyword: '',
  });

  // Sync document language and direction
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleFilterChange = (newFilters: Partial<SearchFilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters({
      make: 'all',
      model: 'all',
      year: 'all',
      category: 'all',
      keyword: '',
    });
  };

  // Filter parts logic
  const filteredParts = useMemo(() => {
    return SAMPLE_PARTS.filter((part) => {
      // Make filter
      if (filters.make !== 'all' && part.make !== filters.make) {
        return false;
      }
      // Model filter
      if (filters.model !== 'all' && !part.models.includes(filters.model)) {
        return false;
      }
      // Year filter
      if (filters.year !== 'all' && !part.years.includes(parseInt(filters.year, 10))) {
        return false;
      }
      // Category filter
      if (filters.category !== 'all' && part.category !== filters.category) {
        return false;
      }
      // Keyword search
      if (filters.keyword.trim() !== '') {
        const query = filters.keyword.toLowerCase();
        const matchesNameAr = part.nameAr.toLowerCase().includes(query);
        const matchesNameEn = part.nameEn.toLowerCase().includes(query);
        const matchesPartNo = part.partNumber.toLowerCase().includes(query);
        const matchesOem = part.oemNumber.toLowerCase().includes(query);
        const matchesDesc = part.descriptionAr.toLowerCase().includes(query);
        if (!matchesNameAr && !matchesNameEn && !matchesPartNo && !matchesOem && !matchesDesc) {
          return false;
        }
      }
      return true;
    });
  }, [filters]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = sectionId === 'hero' ? 0 : element.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleSearchSubmit = () => {
    scrollToSection('products');
  };

  const handleSelectCategory = (catId: string) => {
    setFilters((prev) => ({ ...prev, category: catId }));
  };

  const handleOpenInquiry = (part: VehiclePart) => {
    scrollToSection('contact');
    const contactMsg = document.querySelector('textarea');
    if (contactMsg) {
      contactMsg.value = `أود الاستفسار وطلب تسعيرة للقطعة: ${part.nameAr} (${part.partNumber}) - OEM: ${part.oemNumber}`;
      contactMsg.focus();
    }
  };

  return (
    <div className={`min-h-screen bg-[#07111c] text-slate-100 font-['Cairo',sans-serif] selection:bg-lime-500 selection:text-slate-950`}>
      {/* 1. Sticky Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenDealerModal={() => setIsDealerModalOpen(true)}
        onOpenSmartAssistant={() => setIsSmartAssistantOpen(true)}
      />

      {/* 2. Hero Banner Section */}
      <HeroSection
        lang={lang}
        onOpenDealerModal={() => setIsDealerModalOpen(true)}
        onExploreCatalog={() => scrollToSection('products')}
      />

      {/* 3. Part Finder Filter Widget (Trapezoid Navy Banner sitting on Hero bottom) */}
      <PartFinderWidget
        lang={lang}
        filters={filters}
        onFilterChange={handleFilterChange}
        onSearchSubmit={handleSearchSubmit}
        onResetFilters={handleResetFilters}
        matchingCount={filteredParts.length}
      />

      {/* 4. Products & Auto Parts Catalog */}
      <PartsCatalogSection
        lang={lang}
        parts={filteredParts}
        selectedCategory={filters.category}
        onSelectCategory={handleSelectCategory}
        onSelectPart={(part) => setSelectedPart(part)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* 5. Smart Service Hub & AI Solutions Section ("بوابة خدمتك الذكي") */}
      <SmartServiceSection
        lang={lang}
        onSelectPart={(part) => setSelectedPart(part)}
        onOpenDealerModal={() => setIsDealerModalOpen(true)}
        onOpenAssistant={() => setIsSmartAssistantOpen(true)}
      />

      {/* 6. About VPI Section */}
      <AboutSection
        lang={lang}
        onOpenDealerModal={() => setIsDealerModalOpen(true)}
      />

      {/* 7. Strategic Clients & Partners Carousel Section ("عملاؤنا الاستراتيجيون") */}
      <StrategicClientsSection
        lang={lang}
        onOpenDealerModal={() => setIsDealerModalOpen(true)}
        onExploreCatalog={() => scrollToSection('products')}
      />

      {/* 8. Become a Dealer Section */}
      <DealerSection
        lang={lang}
        onOpenDealerModal={() => setIsDealerModalOpen(true)}
      />

      {/* 9. Locations & Factory Network ("تجدنا بالقرب منك") */}
      <LocationsSection lang={lang} />

      {/* 10. Community & News Section ("المجتمع") */}
      <CommunitySection
        lang={lang}
        onReadArticle={(article) => setSelectedArticle(article)}
      />

      {/* 11. FAQ Section ("الأسئلة الشائعة") */}
      <FAQSection lang={lang} />

      {/* 12. Contact Us & RFQ Form ("الاتصال") */}
      <ContactSection lang={lang} />

      {/* 13. Corporate Footer */}
      <Footer
        lang={lang}
        onNavigate={scrollToSection}
        onOpenDealerModal={() => setIsDealerModalOpen(true)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-3">
        {/* Smart AI Assistant Floating Button */}
        <button
          onClick={() => setIsSmartAssistantOpen(true)}
          id="floating-smart-assistant-btn"
          className="relative px-4 py-3 rounded-full bg-gradient-to-r from-lime-500 to-emerald-400 hover:from-lime-400 hover:to-emerald-300 text-slate-950 flex items-center gap-2 shadow-2xl shadow-lime-500/50 transition-all hover:scale-105 active:scale-95 group font-black text-xs sm:text-sm border-2 border-slate-950/20"
          title="مساعد خدمتك الذكي الفوري"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-950"></span>
          </span>
          <Sparkles className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform" />
          <span>{lang === 'ar' ? 'مساعد خدمتك الذكي' : 'Smart Assistant'}</span>
        </button>

        {/* Quick WhatsApp Float */}
        <a
          href="https://wa.me/966552809632?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%82%D8%B7%D8%B9%20%D8%BA%D9%8A%D8%A7%D8%B1%20VPI"
          target="_blank"
          rel="noreferrer"
          id="floating-whatsapp-btn"
          className="w-12 h-12 rounded-full bg-slate-900/90 hover:bg-lime-500 text-lime-400 hover:text-slate-950 border border-lime-500/40 flex items-center justify-center shadow-xl transition-all hover:scale-110 active:scale-95 group"
          title="محادثة فورية عبر واتساب (+966 55 280 9632)"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>
      </div>

      {/* Modals */}
      <SmartAssistantModal
        isOpen={isSmartAssistantOpen}
        onClose={() => setIsSmartAssistantOpen(false)}
        lang={lang}
        onSelectPart={(part) => setSelectedPart(part)}
        onOpenDealerModal={() => setIsDealerModalOpen(true)}
        onNavigateToSection={scrollToSection}
      />

      <DealerModal
        isOpen={isDealerModalOpen}
        onClose={() => setIsDealerModalOpen(false)}
        lang={lang}
      />

      <PartDetailsModal
        isOpen={!!selectedPart}
        part={selectedPart}
        onClose={() => setSelectedPart(null)}
        lang={lang}
        onOpenInquiry={handleOpenInquiry}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        lang={lang}
        onSelectPart={(part) => setSelectedPart(part)}
      />

      <ArticleModal
        isOpen={!!selectedArticle}
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        lang={lang}
      />
    </div>
  );
}
