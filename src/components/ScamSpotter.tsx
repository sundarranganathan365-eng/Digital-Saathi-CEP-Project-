import React, { useState } from 'react';
import { scamScenarios } from '../data/scamScenarios';
import { ScamScenario, Language } from '../types';
import { translations } from '../data/translations';
import { ShieldCheck, ShieldAlert, CheckCircle2, XCircle, MessageSquare, Phone, Mail, ArrowRight, AlertTriangle } from 'lucide-react';

interface ScamSpotterProps {
  language?: Language;
}

export const ScamSpotter: React.FC<ScamSpotterProps> = ({ language = 'en' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userChoice, setUserChoice] = useState<'safe' | 'scam' | null>(null);

  const t = translations[language].spotScam;
  const scenario: ScamScenario = scamScenarios[currentIndex];

  const handleChoice = (choice: 'safe' | 'scam') => {
    setUserChoice(choice);
  };

  const handleNext = () => {
    setUserChoice(null);
    setCurrentIndex((prev) => (prev + 1) % scamScenarios.length);
  };

  const isAnswered = userChoice !== null;
  const isCorrect = isAnswered && ((userChoice === 'scam' && scenario.isScam) || (userChoice === 'safe' && !scenario.isScam));

  const getLocalizedSender = () => {
    if (language === 'hi' && scenario.senderHi) return scenario.senderHi;
    if (language === 'mr' && scenario.senderMr) return scenario.senderMr;
    return scenario.sender;
  };

  const getLocalizedMessage = () => {
    if (language === 'hi' && scenario.messageHi) return scenario.messageHi;
    if (language === 'mr' && scenario.messageMr) return scenario.messageMr;
    return scenario.message;
  };

  const getLocalizedType = () => {
    if (language === 'hi' && scenario.typeHi) return scenario.typeHi;
    if (language === 'mr' && scenario.typeMr) return scenario.typeMr;
    return scenario.type;
  };

  const getLocalizedRedFlags = () => {
    if (language === 'hi' && scenario.redFlagsHi?.length) return scenario.redFlagsHi;
    if (language === 'mr' && scenario.redFlagsMr?.length) return scenario.redFlagsMr;
    return scenario.redFlags;
  };

  const getLocalizedExplanation = () => {
    if (language === 'hi' && scenario.explanationHi) return scenario.explanationHi;
    if (language === 'mr' && scenario.explanationMr) return scenario.explanationMr;
    return scenario.explanation;
  };

  const getLocalizedSafetyTip = () => {
    if (language === 'hi' && scenario.safetyTipHi) return scenario.safetyTipHi;
    if (language === 'mr' && scenario.safetyTipMr) return scenario.safetyTipMr;
    return scenario.safetyTip;
  };

  const getChannelIcon = (channel: ScamScenario['channel']) => {
    switch (channel) {
      case 'SMS':
      case 'WhatsApp':
        return <MessageSquare className="w-5 h-5 text-[#4B5563]" />;
      case 'Call':
        return <Phone className="w-5 h-5 text-[#4B5563]" />;
      case 'Email':
        return <Mail className="w-5 h-5 text-[#4B5563]" />;
    }
  };

  return (
    <div className="border border-[#D1D5DB] bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-[#E5E7EB] bg-[#F9FAFB]">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-[#111827] bg-[#E5E7EB] px-3 py-1 rounded-md">
            {t.caseLabel} {currentIndex + 1} {t.ofLabel} {scamScenarios.length}
          </span>
          <span className="text-sm font-medium text-[#4B5563] hidden sm:inline">
            {language === 'hi' ? 'क्लिक करने से पहले जांचें' : language === 'mr' ? 'क्लिक करण्यापूर्वी तपासा' : 'Check Before You Click'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
            {t.simulatedTag}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Simulated Message Bubble */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280] block mb-2">
              {t.incomingNotification}
            </span>
            <div className="border-2 border-[#D1D5DB] rounded-xl bg-[#FAF8F5] p-5 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3 mb-4 text-sm text-[#4B5563]">
                <div className="flex items-center gap-2.5">
                  {getChannelIcon(scenario.channel)}
                  <span className="font-bold text-[#111827] text-base">{getLocalizedSender()}</span>
                </div>
                <span className="text-xs text-[#6B7280] font-semibold uppercase">{scenario.channel} • {t.justNow}</span>
              </div>
              <p className="text-base sm:text-lg text-[#111827] leading-relaxed font-medium whitespace-pre-line">
                {getLocalizedMessage()}
              </p>
            </div>
          </div>

          {/* Prompt Question */}
          <div className="text-center py-1">
            <h4 className="text-lg sm:text-xl font-bold text-[#111827]">
              {language === 'hi' ? 'क्या यह संदेश सुरक्षित है या कोई धोखाधड़ी (स्कैम)?' : language === 'mr' ? 'हा संदेश सुरक्षित आहे की सायबर फसवणूक?' : 'Could this be a scam?'}
            </h4>
            <p className="text-sm text-[#6B7280] mt-1">
              {t.promptDesc}
            </p>
          </div>

          {/* Decision Buttons */}
          {!isAnswered ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                id={`scam-choice-scam-${scenario.id}`}
                onClick={() => handleChoice('scam')}
                className="flex items-center justify-center gap-2.5 py-4 px-5 text-base font-bold text-red-900 bg-red-50 hover:bg-red-100 border-2 border-red-200 hover:border-red-400 rounded-lg transition-all shadow-xs min-h-[52px]"
              >
                <ShieldAlert className="w-5 h-5 text-red-700 shrink-0" />
                <span>{language === 'hi' ? 'यह संदिग्ध / स्कैम लगता है' : language === 'mr' ? 'हे संशयास्पद / फसवणूक वाटते' : 'This looks suspicious'}</span>
              </button>
              <button
                id={`scam-choice-safe-${scenario.id}`}
                onClick={() => handleChoice('safe')}
                className="flex items-center justify-center gap-2.5 py-4 px-5 text-base font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 hover:border-emerald-400 rounded-lg transition-all shadow-xs min-h-[52px]"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>{language === 'hi' ? 'यह सुरक्षित लगता है' : language === 'mr' ? 'हे सुरक्षित वाटते' : 'This looks safe'}</span>
              </button>
            </div>
          ) : (
            /* Result and Explanation */
            <div className="border border-[#D1D5DB] rounded-xl p-6 bg-[#FAF8F5] space-y-4 animate-in fade-in duration-200">
              <div className="flex items-start gap-3.5 pb-4 border-b border-[#E5E7EB]">
                {isCorrect ? (
                  <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-lg shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                ) : (
                  <div className="p-2.5 bg-amber-100 text-amber-900 rounded-lg shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                )}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h5 className="font-bold text-lg text-[#111827]">
                      {isCorrect ? t.correctTitle : t.incorrectTitle}
                    </h5>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full uppercase ${
                        scenario.isScam
                          ? 'bg-red-100 text-red-900 border border-red-200'
                          : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                      }`}
                    >
                      {scenario.isScam ? t.scamBadge : t.safeBadge}
                    </span>
                  </div>
                  <p className="text-sm text-[#4B5563] mt-1">
                    {t.classLabel} <strong>{getLocalizedType()}</strong>
                  </p>
                </div>
              </div>

              {/* Red Flags list if scam */}
              {getLocalizedRedFlags().length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#111827] uppercase tracking-wider block">
                    {t.warningSignsTitle}
                  </span>
                  <ul className="space-y-2">
                    {getLocalizedRedFlags().map((flag, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#374151]">
                        <span className="text-red-600 font-bold mt-0.5">•</span>
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Detailed Plain-Language Explanation */}
              <div className="pt-3 border-t border-[#E5E7EB]">
                <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                  {getLocalizedExplanation()}
                </p>
              </div>

              {/* Actionable Golden Safety Rule */}
              <div className="p-4 bg-white border border-[#D1D5DB] rounded-lg flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0D5C58] shrink-0 mt-0.5" />
                <div className="text-sm text-[#111827]">
                  <strong className="block font-bold text-base text-[#0D5C58] mb-0.5">{t.safetyRuleTitle}</strong>
                  <span className="leading-relaxed">{getLocalizedSafetyTip()}</span>
                </div>
              </div>

              {/* Next Scenario Button */}
              <div className="pt-3 flex justify-end">
                <button
                  id="btn-next-scam-scenario"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D5C58] text-white text-sm font-bold rounded-lg hover:bg-[#094744] transition-colors"
                >
                  <span>{t.nextScenario}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
