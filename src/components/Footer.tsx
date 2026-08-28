import React from 'react';
import { PageId, Language } from '../types';
import { translations } from '../data/translations';
import { PhoneCall, ShieldAlert, BookOpen, ExternalLink, Heart, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  language: Language;
}

const footerLabels = {
  en: {
    curriculumTitle: 'Learning Guides',
    mod1: '01. Digital Basics',
    mod2: '02. Safe UPI Payments',
    mod3: '03. Scam & Fraud Defense',
    mod4: '04. Government Digital Services',
    practiceTitle: 'Interactive Practice',
    toolScam: 'Scam Spotter Simulator',
    toolQuiz: 'Knowledge Test (10 Questions)',
    toolChecklist: "Safety DOs & DON'Ts",
    toolRules: 'Golden Rules of UPI',
    projectTitle: 'Project Information',
    aboutInit: 'About Digital Saathi',
    problemState: 'Social Mission & CEP',
    batch: 'BSc Computer Science Initiative',
    openSourceTag: 'Free Public Educational Resource',
    callBtn: 'Call 1930 Helpline',
    inclusion: 'Created for Digital Literacy & Inclusion',
    noAffiliation: 'Independent Educational Initiative',
  },
  hi: {
    curriculumTitle: 'अध्ययन मार्गदर्शिका',
    mod1: '01. डिजिटल बुनियादी बातें',
    mod2: '02. सुरक्षित UPI भुगतान',
    mod3: '03. धोखाधड़ी व स्कैम बचाव',
    mod4: '04. सरकारी डिजिटल सेवाएं',
    practiceTitle: 'अभ्यास व परीक्षण',
    toolScam: 'स्कैम पहचान सिम्युलेटर',
    toolQuiz: 'ज्ञान टेस्ट (10 प्रश्न)',
    toolChecklist: 'क्या करें / क्या न करें नियम',
    toolRules: 'UPI के सुनहरे नियम',
    projectTitle: 'प्रोजेक्ट जानकारी',
    aboutInit: 'डिजिटल साथी के बारे में',
    problemState: 'सामाजिक उद्देश्य व CEP',
    batch: 'बीएससी कंप्यूटर साइंस पहल',
    openSourceTag: 'निःशुल्क सार्वजनिक शैक्षणिक मंच',
    callBtn: '1930 पर कॉल करें',
    inclusion: 'डिजिटल साक्षरता हेतु निर्मित',
    noAffiliation: 'स्वतंत्र शैक्षणिक पहल',
  },
  mr: {
    curriculumTitle: 'मार्गदर्शन विषय',
    mod1: '०१. डिजिटल मूलभूत माहिती',
    mod2: '०२. सुरक्षित UPI पेमेंट्स',
    mod3: '०३. सायबर फसवणूक व बचाव',
    mod4: '०४. शासकीय डिजिटल सेवा',
    practiceTitle: 'सराव व चाचणी',
    toolScam: 'स्कॅम ओळख सिम्युलेटर',
    toolQuiz: 'ज्ञान चाचणी (१० प्रश्न)',
    toolChecklist: 'काय करावे / काय करू नये',
    toolRules: 'UPI चे सुवर्ण नियम',
    projectTitle: 'प्रकल्पाबद्दल माहिती',
    aboutInit: 'डिजिटल साथीबद्दल',
    problemState: 'सामाजिक उद्दिष्ट व CEP',
    batch: 'बी.एस्सी. कॉम्प्युटर सायन्स उपक्रम',
    openSourceTag: 'मोफत सार्वजनिक शैक्षणिक मंच',
    callBtn: '१९३० वर कॉल करा',
    inclusion: 'डिजिटल साक्षरतेसाठी विकसित',
    noAffiliation: 'स्वतंत्र शैक्षणिक उपक्रम',
  },
};

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, language }) => {
  const t = translations[language];
  const f = footerLabels[language];

  return (
    <footer className="bg-[#1E293B] text-[#94A3B8] pt-14 pb-12 border-t border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgent Helpline Banner */}
        <div className="bg-[#0F172A] border-2 border-red-500/40 rounded-xl p-6 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-900/40 border border-red-500/50 text-red-400 rounded-lg shrink-0">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white font-bold text-lg">{t.footer.helplineAlertTitle}</span>
                <span className="bg-red-500/20 text-red-300 text-xs font-bold px-2.5 py-0.5 rounded-full border border-red-500/40">
                  {t.footer.actFastBadge}
                </span>
              </div>
              <p className="text-sm text-[#CBD5E1] mt-1.5 max-w-2xl leading-relaxed">
                {t.footer.helplineAlertDesc}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="tel:1930"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-base rounded-lg transition-colors w-full sm:w-auto shadow-sm"
            >
              <PhoneCall className="w-5 h-5" />
              <span>{f.callBtn}</span>
            </a>
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-[#334155] hover:bg-[#475569] text-white text-sm font-semibold rounded-lg transition-colors border border-[#475569] w-full sm:w-auto"
            >
              <span>cybercrime.gov.in</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4 Clean Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#334155]">
          {/* Col 1: Brand & Purpose */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0D5C58] text-white flex items-center justify-center font-bold text-sm">
                DS
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Digital Saathi</span>
            </div>
            <p className="text-sm text-[#F1F5F9] font-medium">
              “{t.tagline}”
            </p>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              {t.footer.aboutCep}
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-[#E2E8F0] bg-[#0F172A] px-3 py-1.5 rounded-md border border-[#334155]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0D5C58]" />
              <span>{f.openSourceTag}</span>
            </div>
          </div>

          {/* Col 2: Learning Guides */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {f.curriculumTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => { setCurrentPage('basics'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-left"
                >
                  {f.mod1}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentPage('payments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-left"
                >
                  {f.mod2}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentPage('safety'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-left"
                >
                  {f.mod3}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentPage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-left"
                >
                  {f.mod4}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Interactive Practice */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {f.practiceTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-left"
                >
                  {f.toolScam}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentPage('quiz'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-left"
                >
                  {f.toolQuiz}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentPage('safety'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-left"
                >
                  {f.toolChecklist}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentPage('payments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-left"
                >
                  {f.toolRules}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Project Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {f.projectTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => { setCurrentPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-left"
                >
                  {f.aboutInit}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-left"
                >
                  {f.problemState}
                </button>
              </li>
              <li>
                <span className="text-[#64748B] block">{f.batch}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-3 text-xs text-[#94A3B8]">
          <p className="leading-relaxed text-[#64748B]">
            {t.footer.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-[#94A3B8]">
            <div>{t.footer.copyright}</div>
            <div className="flex items-center gap-3">
              <span>{f.inclusion}</span>
              <span>•</span>
              <span>{f.noAffiliation}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
