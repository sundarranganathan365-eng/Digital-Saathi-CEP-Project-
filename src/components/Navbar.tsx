import React, { useState } from 'react';
import { PageId, Language, TextSize } from '../types';
import { translations } from '../data/translations';
import { Menu, X, Search, ArrowRight, Globe, Shield, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  language,
  setLanguage,
  textSize,
  setTextSize,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'basics', label: t.nav.basics },
    { id: 'payments', label: t.nav.payments },
    { id: 'safety', label: t.nav.safety },
    { id: 'services', label: t.nav.services },
    { id: 'quiz', label: t.nav.quiz },
    { id: 'about', label: t.nav.about },
  ];

  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languageLabels: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'mr', name: 'मराठी' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5E7EB] transition-all">
      {/* Top Accessibility & Support Bar */}
      <div className="bg-[#F3F4F6] border-b border-[#E5E7EB] text-xs text-[#4B5563] py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Reassuring Left Note */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0D5C58]" />
            <span className="font-medium text-[#374151]">
              {language === 'hi' ? 'निःशुल्क सार्वजनिक डिजिटल साक्षरता पहल' : language === 'mr' ? 'मोफत सार्वजनिक डिजिटल साक्षरता उपक्रम' : 'Free Public Digital Literacy & Safety Guide'}
            </span>
          </div>

          {/* Right Accessibility Controls: Text Scaling & Language */}
          <div className="flex items-center gap-4">
            {/* Text Size Accessibility Controls */}
            <div className="flex items-center gap-1 bg-white border border-[#D1D5DB] rounded px-1.5 py-0.5">
              <span className="text-[11px] font-semibold text-[#6B7280] mr-1 hidden sm:inline">
                {language === 'hi' ? 'अक्षर आकार:' : language === 'mr' ? 'अक्षर आकार:' : 'Text Size:'}
              </span>
              <button
                id="text-size-normal-btn"
                onClick={() => setTextSize('normal')}
                aria-label="Normal text size"
                className={`px-1.5 py-0.5 rounded text-xs font-semibold transition-all ${
                  textSize === 'normal'
                    ? 'bg-[#0D5C58] text-white'
                    : 'text-[#4B5563] hover:text-[#111827]'
                }`}
                title="Normal text size (16px)"
              >
                A
              </button>
              <button
                id="text-size-large-btn"
                onClick={() => setTextSize('large')}
                aria-label="Large text size"
                className={`px-1.5 py-0.5 rounded text-sm font-bold transition-all ${
                  textSize === 'large'
                    ? 'bg-[#0D5C58] text-white'
                    : 'text-[#4B5563] hover:text-[#111827]'
                }`}
                title="Large text size (18px)"
              >
                A+
              </button>
              <button
                id="text-size-xlarge-btn"
                onClick={() => setTextSize('extra-large')}
                aria-label="Extra large text size"
                className={`px-1.5 py-0.5 rounded text-base font-extrabold transition-all ${
                  textSize === 'extra-large'
                    ? 'bg-[#0D5C58] text-white'
                    : 'text-[#4B5563] hover:text-[#111827]'
                }`}
                title="Extra large text size (20px)"
              >
                A++
              </button>
            </div>

            {/* Helpline quick link */}
            <a
              href="tel:1930"
              className="hidden md:inline-flex items-center gap-1.5 font-bold text-[#0D5C58] hover:underline"
              title="National Cyber Fraud Helpline"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>1930 Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none py-2"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0D5C58] text-white flex items-center justify-center font-bold text-base shadow-sm">
              DS
            </div>
            <div>
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-[#111827] block leading-tight">
                Digital Saathi
              </span>
              <span className="text-xs text-[#6B7280] font-medium block">
                {language === 'hi' ? 'डिजिटल साथी • आसान और सुरक्षित तकनीक' : language === 'mr' ? 'डिजिटल साथी • सुलभ व सुरक्षित तंत्रज्ञान' : 'Technology Made Simple & Safe'}
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-md text-base font-semibold transition-all relative ${
                    isActive
                      ? 'text-[#0D5C58] bg-[#E6F4F1]'
                      : 'text-[#4B5563] hover:text-[#111827] hover:bg-[#F3F4F6]'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Search, Language Pills, Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              id="search-open-btn"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#4B5563] hover:text-[#111827] border border-[#D1D5DB] hover:border-[#9CA3AF] rounded-md bg-white transition-all shadow-xs"
              title="Search topics"
            >
              <Search className="w-4 h-4 text-[#6B7280]" />
              <span className="font-medium">
                {language === 'hi' ? 'खोजें' : language === 'mr' ? 'शोधा' : 'Search'}
              </span>
            </button>

            {/* Language Switcher with Clear Full Labels */}
            <div className="flex items-center border border-[#D1D5DB] rounded-md bg-white p-0.5 shadow-xs">
              <Globe className="w-4 h-4 text-[#6B7280] ml-2 mr-1" />
              {languageLabels.map((item) => (
                <button
                  key={item.code}
                  id={`lang-btn-${item.code}`}
                  onClick={() => setLanguage(item.code)}
                  className={`px-2.5 py-1 text-xs sm:text-sm font-semibold rounded transition-all ${
                    language === item.code
                      ? 'bg-[#0D5C58] text-white shadow-xs'
                      : 'text-[#4B5563] hover:text-[#111827] hover:bg-[#F3F4F6]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Start Learning CTA */}
            <button
              id="nav-cta-start"
              onClick={() => handleNavClick('basics')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-[#0D5C58] hover:bg-[#094744] active:bg-[#073836] rounded-md transition-all shadow-xs"
            >
              <span>{t.nav.startLearning}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger & Search */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-search-btn"
              onClick={onOpenSearch}
              className="p-2.5 text-[#4B5563] border border-[#D1D5DB] rounded-md bg-white"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#111827] border border-[#D1D5DB] rounded-md bg-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF8F5] border-b border-[#E5E7EB] px-5 pt-4 pb-8 space-y-5 animate-in fade-in duration-200">
          {/* Language Selector */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280] block mb-2">
              {language === 'hi' ? 'भाषा चुनें (Language)' : language === 'mr' ? 'भाषा निवडा (Language)' : 'Select Language'}
            </span>
            <div className="grid grid-cols-3 gap-2">
              {languageLabels.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLanguage(item.code)}
                  className={`py-2 text-center text-sm font-bold rounded-md border ${
                    language === item.code
                      ? 'bg-[#0D5C58] text-white border-[#0D5C58]'
                      : 'bg-white text-[#374151] border-[#D1D5DB]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1.5 pt-2 border-t border-[#E5E7EB]">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-base font-bold rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#0D5C58] text-white'
                      : 'text-[#1F2937] hover:bg-[#E5E7EB] bg-white border border-[#E5E7EB]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </button>
              );
            })}
          </div>

          {/* Primary Action & Helpline */}
          <div className="pt-3 border-t border-[#E5E7EB] space-y-3">
            <button
              onClick={() => handleNavClick('basics')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-[#0D5C58] text-white font-bold text-base rounded-md shadow-sm"
            >
              <span>{t.nav.startLearning}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:1930"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 text-red-800 border border-red-200 font-bold text-sm rounded-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>National Cyber Fraud Helpline: 1930</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
