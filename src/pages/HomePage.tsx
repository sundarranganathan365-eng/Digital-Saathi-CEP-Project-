import React from 'react';
import { PageId, Language } from '../types';
import { translations } from '../data/translations';
import { ScamSpotter } from '../components/ScamSpotter';
import { VideoGuideSection } from '../components/VideoGuideSection';
import {
  ArrowRight,
  Shield,
  Smartphone,
  CreditCard,
  Building2,
  Lock,
  Eye,
  HelpCircle,
  CheckCircle2,
  PhoneCall,
  Sparkles,
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: PageId) => void;
  language: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, language }) => {
  const t = translations[language];

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-14">
      {/* 1. HERO SECTION — Calm, Human, Welcoming */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0D5C58] bg-[#E6F4F1] border border-[#BCE3DD] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#0D5C58]" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827] leading-[1.2]">
              {language === 'en' ? (
                <>
                  Making technology <br className="hidden sm:inline" />
                  <span className="text-[#0D5C58]">easier & safer</span> for everyone.
                </>
              ) : (
                t.hero.headingPart1 + ' ' + t.hero.headingAccent + ' ' + t.hero.headingPart2
              )}
            </h1>

            <p className="text-lg sm:text-xl text-[#4B5563] max-w-2xl leading-relaxed font-normal">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                id="hero-btn-start-learning"
                onClick={() => handleNavigate('basics')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0D5C58] text-white text-base font-bold rounded-lg hover:bg-[#094744] active:bg-[#073836] transition-all shadow-sm group min-h-[50px]"
              >
                <span>{t.hero.btnStart}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-btn-online-safety"
                onClick={() => handleNavigate('safety')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white text-[#1F2937] hover:bg-[#F3F4F6] border-2 border-[#D1D5DB] hover:border-[#9CA3AF] text-base font-bold rounded-lg transition-all shadow-xs min-h-[50px]"
              >
                <Shield className="w-5 h-5 text-[#0D5C58]" />
                <span>{t.hero.btnSafety}</span>
              </button>
            </div>

            {/* Reassuring note */}
            <div className="flex items-center gap-2 text-sm text-[#374151] pt-2 font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#0D5C58] shrink-0" />
              <span>
                {language === 'hi'
                  ? 'सरल मार्गदर्शन • स्पष्ट कदम • किसी तकनीकी ज्ञान की आवश्यकता नहीं।'
                  : language === 'mr'
                  ? 'सोपे मार्गदर्शन • स्पष्ट पायऱ्या • कोणत्याही तांत्रिक ज्ञानाची गरज नाही.'
                  : 'Simple guides. Clear steps. No technical knowledge required.'}
              </span>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 border-t border-[#E5E7EB] grid grid-cols-3 gap-4 text-sm text-[#4B5563]">
              <div>
                <strong className="block text-[#111827] font-bold text-base">{t.hero.highlights.freeTitle}</strong>
                <span className="text-xs sm:text-sm">{t.hero.highlights.freeSub}</span>
              </div>
              <div>
                <strong className="block text-[#111827] font-bold text-base">{t.hero.highlights.jargonTitle}</strong>
                <span className="text-xs sm:text-sm">{t.hero.highlights.jargonSub}</span>
              </div>
              <div>
                <strong className="block text-[#111827] font-bold text-base">{t.hero.highlights.indiaTitle}</strong>
                <span className="text-xs sm:text-sm">{t.hero.highlights.indiaSub}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Single, Calm, Trustworthy Compass Card */}
          <div className="lg:col-span-5">
            <div className="border border-[#D1D5DB] bg-white rounded-xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#0D5C58]" />
                  <span className="text-sm font-bold text-[#111827] uppercase tracking-wider">{t.hero.compass.title}</span>
                </div>
                <span className="text-xs text-[#0D5C58] font-bold bg-[#E6F4F1] px-2.5 py-0.5 rounded-full">
                  {t.hero.compass.badge}
                </span>
              </div>

              {/* 3 Essential Daily Rules */}
              <div className="space-y-4">
                <div className="p-4 border border-[#E5E7EB] rounded-lg bg-[#FAF8F5] flex items-start gap-3.5">
                  <div className="p-2.5 bg-white border border-[#D1D5DB] rounded-lg text-[#0D5C58] shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm sm:text-base font-bold text-[#111827] block">{t.hero.compass.upiTitle}</span>
                    <p className="text-xs sm:text-sm text-[#4B5563] mt-1 leading-relaxed">
                      {t.hero.compass.upiDesc}
                    </p>
                  </div>
                </div>

                <div className="p-4 border border-[#E5E7EB] rounded-lg bg-[#FAF8F5] flex items-start gap-3.5">
                  <div className="p-2.5 bg-white border border-[#D1D5DB] rounded-lg text-[#0D5C58] shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm sm:text-base font-bold text-[#111827] block">{t.hero.compass.otpTitle}</span>
                    <p className="text-xs sm:text-sm text-[#4B5563] mt-1 leading-relaxed">
                      {t.hero.compass.otpDesc}
                    </p>
                  </div>
                </div>

                <div className="p-4 border border-[#E5E7EB] rounded-lg bg-[#FAF8F5] flex items-start gap-3.5">
                  <div className="p-2.5 bg-white border border-[#D1D5DB] rounded-lg text-[#0D5C58] shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm sm:text-base font-bold text-[#111827] block">{t.hero.compass.portalTitle}</span>
                    <p className="text-xs sm:text-sm text-[#4B5563] mt-1 leading-relaxed">
                      {t.hero.compass.portalDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Helpline banner */}
              <div className="mt-5 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-sm">
                <span className="text-[#6B7280] font-medium">{t.hero.compass.helplineLabel}</span>
                <a
                  href="tel:1930"
                  className="font-bold text-[#B91C1C] hover:underline flex items-center gap-1"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{t.hero.compass.dial}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. USER INTENT CHOOSER — "What would you like help with?" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E5E7EB] pt-12 sm:pt-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D5C58] block mb-1">
              {language === 'hi' ? 'सीधे विषय चुनें' : language === 'mr' ? 'विषय निवडा' : 'Step-by-Step Learning'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827]">
              {t.intentChooser.heading}
            </h2>
            <p className="text-base text-[#4B5563] mt-2">
              {t.intentChooser.subheading}
            </p>
          </div>

          {/* 4 Large Intent Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* 1. Learn to use my phone */}
            <button
              id="intent-card-phone"
              onClick={() => handleNavigate('basics')}
              className="p-6 sm:p-7 border-2 border-[#D1D5DB] hover:border-[#0D5C58] bg-white rounded-xl text-left transition-all group flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#E6F4F1] text-[#0D5C58] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#0D5C58]">
                  📱 {t.intentChooser.optionPhone}
                </h3>
                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  {t.intentChooser.optionPhoneDesc}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-[#0D5C58] pt-4 mt-4 border-t border-[#F3F4F6]">
                <span>{t.intentChooser.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            {/* 2. Understand digital payments */}
            <button
              id="intent-card-payments"
              onClick={() => handleNavigate('payments')}
              className="p-6 sm:p-7 border-2 border-[#D1D5DB] hover:border-[#0D5C58] bg-white rounded-xl text-left transition-all group flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#E6F4F1] text-[#0D5C58] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#0D5C58]">
                  💳 {t.intentChooser.optionPayments}
                </h3>
                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  {t.intentChooser.optionPaymentsDesc}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-[#0D5C58] pt-4 mt-4 border-t border-[#F3F4F6]">
                <span>{t.intentChooser.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            {/* 3. Stay safe from scams */}
            <button
              id="intent-card-safety"
              onClick={() => handleNavigate('safety')}
              className="p-6 sm:p-7 border-2 border-[#D1D5DB] hover:border-[#0D5C58] bg-white rounded-xl text-left transition-all group flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#E6F4F1] text-[#0D5C58] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#0D5C58]">
                  🛡️ {t.intentChooser.optionSafety}
                </h3>
                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  {t.intentChooser.optionSafetyDesc}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-[#0D5C58] pt-4 mt-4 border-t border-[#F3F4F6]">
                <span>{t.intentChooser.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            {/* 4. Use online services */}
            <button
              id="intent-card-services"
              onClick={() => handleNavigate('services')}
              className="p-6 sm:p-7 border-2 border-[#D1D5DB] hover:border-[#0D5C58] bg-white rounded-xl text-left transition-all group flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#E6F4F1] text-[#0D5C58] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#0D5C58]">
                  📄 {t.intentChooser.optionServices}
                </h3>
                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  {t.intentChooser.optionServicesDesc}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-[#0D5C58] pt-4 mt-4 border-t border-[#F3F4F6]">
                <span>{t.intentChooser.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 3. WHY DIGITAL LITERACY MATTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E5E7EB] pt-12 sm:pt-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280] block mb-1">
              {t.whyMatters.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827]">
              {t.whyMatters.heading}
            </h2>
            <p className="text-base text-[#4B5563] mt-2 leading-relaxed">
              {t.whyMatters.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.whyMatters.pillars.map((pillar, idx) => (
              <div key={idx} className="p-6 border border-[#E5E7EB] bg-white rounded-lg space-y-2">
                <span className="text-xs font-bold text-[#0D5C58] uppercase tracking-wider block">
                  {pillar.num}
                </span>
                <h3 className="text-base font-bold text-[#111827]">{pillar.title}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SCAM SPOTTER SECTION — "Before You Click" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E5E7EB] pt-12 sm:pt-16">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0D5C58] bg-[#E6F4F1] rounded-full mb-2">
              <Eye className="w-4 h-4" />
              <span>{t.spotScam.tag}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827]">
              {t.spotScam.title}
            </h2>
            <p className="text-base text-[#4B5563] mt-2">
              {t.spotScam.subtitle}
            </p>
          </div>

          {/* Interactive Scam Spotter Component */}
          <ScamSpotter language={language} />
        </div>
      </section>

      {/* 5. OFFICIAL YOUTUBE VIDEO TUTORIALS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VideoGuideSection category="all" language={language} limit={6} />
      </section>

      {/* 6. TEST YOUR KNOWLEDGE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 border border-[#0D5C58] bg-[#0D5C58] text-white rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A7F3D0]">
              {t.quizBanner.tag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {t.quizBanner.title}
            </h3>
            <p className="text-base text-[#E6F4F1] leading-relaxed">
              {t.quizBanner.description}
            </p>
          </div>
          <button
            id="home-cta-quiz"
            onClick={() => handleNavigate('quiz')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#0D5C58] hover:bg-[#F3F4F6] font-bold text-base rounded-lg transition-colors shrink-0 shadow-sm"
          >
            <HelpCircle className="w-5 h-5 text-[#0D5C58]" />
            <span>{t.quizBanner.btnText}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};
