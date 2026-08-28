import React, { useState } from 'react';
import { PageId, Language, QuizQuestion } from '../types';
import { quizQuestions } from '../data/quizQuestions';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  Award,
  BookOpen,
} from 'lucide-react';

interface QuizPageProps {
  setCurrentPage: (page: PageId) => void;
  language: Language;
}

const quizPageTranslations = {
  en: {
    moduleTag: 'Module 05',
    categoryTag: 'Interactive Assessment',
    title: 'Digital Literacy & Safety Quiz',
    subtitle: 'Evaluate your knowledge on UPI payments, password security, fake SMS alerts, and DigiLocker public services. Instant scoring with rationale provided.',
    questionLabel: 'Question',
    ofLabel: 'of',
    categoryLabels: {
      basics: 'Digital Basics',
      payments: 'Digital Payments',
      safety: 'Online Safety',
      services: 'Public Services',
    },
    submitPrompt: 'Select an answer to reveal explanation:',
    correctBanner: 'Correct Answer!',
    incorrectBanner: 'Incorrect — Review the Explanation:',
    explanationTitle: 'Key Safety Learning:',
    nextQuestion: 'Next Question',
    seeResults: 'See Final Results',
    results: {
      title: 'Assessment Complete!',
      yourScore: 'Your Final Score:',
      outOf: 'out of 10 questions correct',
      highScoreMsg: 'Excellent! You possess a solid foundation in digital safety and literacy.',
      midScoreMsg: 'Good effort! Review the modules you found challenging to strengthen your safety reflexes.',
      lowScoreMsg: 'We recommend reading through the Digital Basics and Safety modules again.',
      btnRetake: 'Retake Quiz',
      btnReviewModules: 'Return to Home',
    },
  },
  hi: {
    moduleTag: 'मॉड्यूल 05',
    categoryTag: 'ज्ञान मूल्यांकन',
    title: 'डिजिटल साक्षरता और सुरक्षा क्विज़ (Quiz)',
    subtitle: 'UPI भुगतान, पासवर्ड सुरक्षा, फर्जी SMS पहचान और डिजीलॉकर पर आधारित 10 प्रश्नों की अभ्यास परीक्षा दें। तुरंत परिणाम और कारण सहित उत्तर देखें।',
    questionLabel: 'प्रश्न',
    ofLabel: 'कुल',
    categoryLabels: {
      basics: 'डिजिटल बुनियादी बातें',
      payments: 'डिजिटल भुगतान (UPI)',
      safety: 'ऑनलाइन सुरक्षा',
      services: 'सरकारी डिजिटल सेवाएं',
    },
    submitPrompt: 'उत्तर देखने के लिए एक विकल्प चुनें:',
    correctBanner: 'बिल्कुल सही उत्तर!',
    incorrectBanner: 'गलत उत्तर — कारण समझें:',
    explanationTitle: 'मुख्य सुरक्षा सीख:',
    nextQuestion: 'अगला प्रश्न',
    seeResults: 'अंतिम परिणाम देखें',
    results: {
      title: 'क्विज़ पूरा हुआ!',
      yourScore: 'आपका कुल स्कोर:',
      outOf: '10 में से सही प्रश्न',
      highScoreMsg: 'उत्कृष्ट! आपके पास डिजिटल सुरक्षा और लेनदेन की बहुत अच्छी समझ है।',
      midScoreMsg: 'अच्छा प्रयास! अपनी सुरक्षा को और मजबूत करने के लिए उन मॉड्यूल्स को दोबारा पढ़ें जहाँ गलती हुई।',
      lowScoreMsg: 'हम अनुशंसा करते हैं कि आप डिजिटल बुनियादी बातें और सुरक्षा मॉड्यूल को एक बार फिर ध्यान से पढ़ें।',
      btnRetake: 'क्विज़ फिर से दें',
      btnReviewModules: 'मुख्य पृष्ठ पर लौटें',
    },
  },
  mr: {
    moduleTag: 'मॉड्यूल ०५',
    categoryTag: 'ज्ञान चाचणी',
    title: 'डिजिटल साक्षरता व सुरक्षा चाचणी (क्विझ)',
    subtitle: 'UPI पेमेंट्स, पासवर्ड सुरक्षा, बनावट SMS आणि डिजीलॉकरवर आधारित १० प्रश्नांची सोपी परीक्षा द्या. तात्काळ गुण आणि कारणासह उत्तरे पहा.',
    questionLabel: 'प्रश्न',
    ofLabel: 'पैकी',
    categoryLabels: {
      basics: 'डिजिटल मूलभूत माहिती',
      payments: 'डिजिटल पेमेंट्स (UPI)',
      safety: 'सायबर सुरक्षा',
      services: 'शासकीय डिजिटल सेवा',
    },
    submitPrompt: 'उत्तर तपासण्यासाठी एक पर्याय निवडा:',
    correctBanner: 'अगदी बरोबर उत्तर!',
    incorrectBanner: 'चूक उत्तर — स्पष्टीकरण वाचा:',
    explanationTitle: 'महत्त्वाची सुरक्षा शिकवण:',
    nextQuestion: 'पुढील प्रश्न',
    seeResults: 'अंतिम निकाल पहा',
    results: {
      title: 'चाचणी पूर्ण झाली!',
      yourScore: 'तुमचे एकूण गुण:',
      outOf: '१० पैकी बरोबर उत्तरे',
      highScoreMsg: 'उत्कृष्ट! तुम्हाला डिजिटल व्यवहार आणि सुरक्षेची उत्तम माहिती आहे.',
      midScoreMsg: 'छान प्रयत्न! ज्या प्रश्नांची उत्तरे चुकली त्या विषयांची उजळणी नक्की करा.',
      lowScoreMsg: 'आम्ही सुचवतो की तुम्ही डिजिटल मूलभूत माहिती आणि सुरक्षा विभाग पुन्हा एकदा काळजीपूर्वक वाचा.',
      btnRetake: 'पुन्हा चाचणी द्या',
      btnReviewModules: 'मुख्य पानावर जा',
    },
  },
};

export const QuizPage: React.FC<QuizPageProps> = ({ setCurrentPage, language }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const t = quizPageTranslations[language];
  const q: QuizQuestion = quizQuestions[currentIdx];

  const getLocalizedQuestion = (item: QuizQuestion) => {
    if (language === 'hi' && item.questionHi) return item.questionHi;
    if (language === 'mr' && item.questionMr) return item.questionMr;
    return item.question;
  };

  const getLocalizedOptionText = (opt: QuizQuestion['options'][0]) => {
    if (language === 'hi' && opt.textHi) return opt.textHi;
    if (language === 'mr' && opt.textMr) return opt.textMr;
    return opt.text;
  };

  const getLocalizedExplanation = (item: QuizQuestion) => {
    if (language === 'hi' && item.explanationHi) return item.explanationHi;
    if (language === 'mr' && item.explanationMr) return item.explanationMr;
    return item.explanation;
  };

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return; // already answered this question
    setSelectedOption(idx);
    setAnswers((prev) => ({ ...prev, [currentIdx]: idx }));
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      setSelectedOption(answers[nextIdx] !== undefined ? answers[nextIdx] : null);
    } else {
      setIsFinished(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setAnswers({});
    setIsFinished(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((ques, idx) => {
      const userAns = answers[idx];
      if (userAns !== undefined && ques.options[userAns]?.isCorrect) {
        score++;
      }
    });
    return score;
  };

  if (isFinished) {
    const score = calculateScore();
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 animate-in fade-in duration-200">
        <div className="p-8 sm:p-12 border border-[#E5E5E5] bg-white rounded-sm text-center space-y-6 shadow-xs">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#737373] block mb-1">
              {t.results.title}
            </span>
            <h2 className="text-3xl font-bold text-[#171717] font-editorial">
              {t.results.yourScore}
            </h2>
            <div className="text-5xl font-extrabold text-[#171717] my-4 font-mono">
              {score} <span className="text-2xl text-[#737373] font-normal">/ {quizQuestions.length}</span>
            </div>
            <p className="text-sm text-[#525252] max-w-md mx-auto">
              {score >= 8 ? t.results.highScoreMsg : score >= 5 ? t.results.midScoreMsg : t.results.lowScoreMsg}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-[#F0F0EE]">
            <button
              id="quiz-btn-retake"
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] text-white text-sm font-semibold rounded hover:bg-[#333333] transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.results.btnRetake}</span>
            </button>
            <button
              id="quiz-btn-home"
              onClick={() => {
                setCurrentPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#171717] border border-[#D4D4D4] hover:bg-[#F5F5F4] text-sm font-semibold rounded transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.results.btnReviewModules}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isAnswered = selectedOption !== null;
  const isOptionCorrect = isAnswered && q.options[selectedOption]?.isCorrect;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header / Intro */}
      <div className="border-b border-[#E5E5E5] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#171717] bg-[#EFEFED] px-2 py-0.5 rounded">
            {t.moduleTag}
          </span>
          <span className="text-xs text-[#737373] uppercase tracking-wider">{t.categoryTag}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] font-editorial">
          {t.title}
        </h1>
        <p className="text-sm sm:text-base text-[#525252] mt-2">
          {t.subtitle}
        </p>
      </div>

      {/* Progress & Category Bar */}
      <div className="flex items-center justify-between text-xs border-b border-[#F0F0EE] pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-[#171717]">
            {t.questionLabel} {currentIdx + 1} {t.ofLabel} {quizQuestions.length}
          </span>
          <span className="text-[#A3A3A3]">•</span>
          <span className="text-[#737373] font-medium uppercase">
            {t.categoryLabels[q.category] || q.category}
          </span>
        </div>
        {/* Visual Progress Bar */}
        <div className="w-32 h-2 bg-[#E5E5E5] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#171717] transition-all duration-300"
            style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Box */}
      <div className="p-6 sm:p-8 border border-[#E5E5E5] bg-white rounded-sm space-y-6">
        <h3 className="text-lg sm:text-xl font-bold text-[#171717] leading-snug">
          {getLocalizedQuestion(q)}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {q.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            let optionStyles = 'border-[#E5E5E5] bg-white hover:border-[#737373] text-[#333333]';

            if (isAnswered) {
              if (opt.isCorrect) {
                optionStyles = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium';
              } else if (isSelected && !opt.isCorrect) {
                optionStyles = 'border-red-500 bg-red-50 text-red-950 font-medium';
              } else {
                optionStyles = 'border-[#E5E5E5] bg-gray-50 opacity-60 text-gray-500';
              }
            }

            return (
              <button
                key={idx}
                id={`quiz-option-${currentIdx}-${idx}`}
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`w-full p-4 border rounded text-left text-xs sm:text-sm transition-all flex items-start justify-between gap-3 ${optionStyles}`}
              >
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[11px] font-mono shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{getLocalizedOptionText(opt)}</span>
                </div>

                {isAnswered && (
                  <div className="shrink-0 mt-0.5">
                    {opt.isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                    {isSelected && !opt.isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Answer Breakdown Explanation */}
        {isAnswered && (
          <div className="p-5 border border-[#E5E5E5] bg-[#FAF9F6] rounded space-y-2 animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              {isOptionCorrect ? (
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>{t.correctBanner}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-xs font-bold text-red-800">
                  <XCircle className="w-4 h-4 text-red-600" />
                  <span>{t.incorrectBanner}</span>
                </div>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#333333] leading-relaxed pt-1">
              <strong>{t.explanationTitle} </strong>
              {getLocalizedExplanation(q)}
            </p>

            <div className="flex justify-end pt-4">
              <button
                id="quiz-btn-next"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-white text-xs font-semibold rounded hover:bg-[#333333] transition-colors"
              >
                <span>{currentIdx < quizQuestions.length - 1 ? t.nextQuestion : t.seeResults}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
