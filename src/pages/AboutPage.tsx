import React from 'react';
import { PageId, Language } from '../types';
import {
  BookOpen,
  Users,
  Code2,
  ShieldCheck,
  Heart,
  ExternalLink,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

interface AboutPageProps {
  setCurrentPage: (page: PageId) => void;
  language: Language;
}

const aboutContent = {
  en: {
    tag: 'Academic Initiative',
    title: 'About Digital Saathi',
    subtitle: 'An open-source educational platform created as a 3rd-Year BSc Computer Science Community Engagement Project (CEP) on the theme: “Building Open-Source Solutions for Social Problems.”',
    missionTitle: 'Our Mission & Motivation',
    missionDesc: 'India’s rapid digital transformation has revolutionized banking, governance, and daily communication. However, millions of senior citizens, parents, and first-time internet adopters face acute anxiety, digital exclusion, and vulnerability to financial fraud. Digital Saathi bridges this gap through dignified, jargon-free education.',
    pillars: [
      {
        icon: Users,
        title: 'Target Audience',
        desc: 'Designed especially for senior citizens, rural internet adopters, and anyone who feels intimidated by digital technologies.',
      },
      {
        icon: ShieldCheck,
        title: 'Safety by Design',
        desc: 'Focuses heavily on scam identification, OTP confidentiality, and UPI PIN rules to safeguard life savings.',
      },
      {
        icon: Code2,
        title: 'Open Source Initiative',
        desc: 'Free to use, share, and adapt for public digital literacy workshops and non-profit community education.',
      },
    ],
    themeTitle: 'CEP Project Information',
    themeInfo: [
      { label: 'Theme:', val: 'Building Open-Source Solutions for Social Problems' },
      { label: 'Degree & Program:', val: '3rd-Year B.Sc. Computer Science (CEP)' },
      { label: 'Platform Type:', val: 'Client-Side Educational Awareness Resource' },
      { label: 'Access Model:', val: 'Open-Access Public Educational Platform' },
    ],
    disclaimerTitle: 'Non-Commercial Disclaimer',
    disclaimerDesc: 'Digital Saathi is strictly an independent academic and social awareness initiative. It does not collect user bank details, passwords, or personal credentials. It is not affiliated with any bank, commercial financial company, or government agency.',
  },
  hi: {
    tag: 'शैक्षणिक पहल',
    title: 'डिजिटल साथी के बारे में',
    subtitle: 'तृतीय वर्ष बीएससी कंप्यूटर साइंस सामुदायिक सहभागिता परियोजना (CEP) — “सामाजिक समस्याओं के लिए ओपन-सोर्स समाधान” विषय पर विकसित एक खुला शैक्षणिक मंच।',
    missionTitle: 'हमारा उद्देश्य एवं प्रेरणा',
    missionDesc: 'भारत के तीव्र डिजिटल विकास ने बैंकिंग, सरकारी सेवाओं और दैनिक संचार को बहुत आसान बना दिया है। लेकिन वरिष्ठ नागरिकों, अभिभावकों और नए स्मार्टफोन उपयोगकर्ताओं को तकनीकी उलझनों और ऑनलाइन धोखाधड़ी के डर का सामना करना पड़ता है। डिजिटल साथी सरल व सम्मानजनक भाषा में ज्ञान देकर इस अंतर को पाटता है।',
    pillars: [
      {
        icon: Users,
        title: 'लक्षित दर्शक',
        desc: 'विशेष रूप से वरिष्ठ नागरिकों, ग्रामीण नए स्मार्टफोन उपयोगकर्ताओं और तकनीक से झिझकने वाले लोगों के लिए तैयार।',
      },
      {
        icon: ShieldCheck,
        title: 'सुरक्षा सर्वोपरि',
        desc: 'स्कैम पहचानने, OTP गोपनीयता और UPI PIN के नियमों पर विशेष ध्यान ताकि मेहनत की कमाई सुरक्षित रहे।',
      },
      {
        icon: Code2,
        title: 'ओपन-सोर्स पहल',
        desc: 'सार्वजनिक डिजिटल साक्षरता कार्यशालाओं और गैर-लाभकारी शिक्षा के लिए पूरी तरह निःशुल्क।',
      },
    ],
    themeTitle: 'CEP परियोजना विवरण',
    themeInfo: [
      { label: 'परियोजना विषय:', val: 'सामाजिक समस्याओं के लिए ओपन-सोर्स समाधान (CEP)' },
      { label: 'डिग्री एवं वर्ष:', val: 'तृतीय वर्ष बी.एससी. कंप्यूटर साइंस' },
      { label: 'प्लेटफॉर्म प्रकार:', val: 'सार्वजनिक शैक्षणिक जागरूकता वेबसाइट' },
      { label: 'उपलब्धता:', val: 'खुला शैक्षणिक मंच (Open-Access)' },
    ],
    disclaimerTitle: 'गैर-व्यावसायिक अस्वीकरण',
    disclaimerDesc: 'डिजिटल साथी विशुद्ध रूप से एक स्वतंत्र शैक्षणिक और सामाजिक जागरूकता परियोजना है। यह उपयोगकर्ताओं के बैंक विवरण, पासवर्ड या व्यक्तिगत डेटा एकत्र नहीं करता है। यह किसी भी बैंक या सरकारी एजेंसी से संबद्ध नहीं है।',
  },
  mr: {
    tag: 'शैक्षणिक उपक्रम',
    title: 'डिजिटल साथी प्रकल्पाबद्दल',
    subtitle: 'तृतीय वर्ष बीएससी कॉम्प्युटर सायन्स सामाजिक सहभाग प्रकल्प (CEP) — “सामाजिक समस्यांसाठी ओपन-सोर्स उपाय” या संकल्पनेवर आधारित लोकशिक्षणाचा खुला मंच.',
    missionTitle: 'आमचा उद्देश आणि प्रेरणा',
    missionDesc: 'भारतातील डिजिटल क्रांतीमुळे बँकिंग आणि शासकीय सेवा सोप्या झाल्या असल्या, तरी लाखो ज्येष्ठ नागरिक, पालक आणि नवीन स्मार्टफोन वापरकर्त्यांना फसवणुकीची भीती वाटते. डिजिटल साथी अतिशय सोप्या आणि सुलभ भाषेत मार्गदर्शन करून प्रत्येकाला आत्मनिर्भर बनवते.',
    pillars: [
      {
        icon: Users,
        title: 'लक्षित वाचक',
        desc: 'विशेषतः ज्येष्ठ नागरिक, ग्रामीण भागातील नवीन स्मार्टफोन वापरकर्ते आणि तंत्रज्ञानाची भीती वाटणाऱ्या प्रत्येकासाठी उपयुक्त.',
      },
      {
        icon: ShieldCheck,
        title: 'सुरक्षा सर्वोपरि',
        desc: 'सायबर चोऱ्या ओळखणे, OTP ची गोपनीयता आणि UPI PIN च्या नियमांवर विशेष भर जेणेकरून कष्टाचा पैसा सुरक्षित राहील.',
      },
      {
        icon: Code2,
        title: 'ओपन-सोर्स उपक्रम',
        desc: 'सार्वजनिक साक्षरता शिबिरे आणि सामाजिक शिक्षणासाठी सर्वांसाठी पूर्णपणे मोफत उपलब्ध.',
      },
    ],
    themeTitle: 'CEP प्रकल्प तपशील',
    themeInfo: [
      { label: 'प्रकल्पाचा विषय:', val: 'सामाजिक समस्यांसाठी ओपन-सोर्स उपाय (CEP)' },
      { label: 'शिक्षण व वर्ष:', val: 'तृतीय वर्ष बी.एस्सी. कॉम्प्युटर सायन्स' },
      { label: 'व्यासपीठाचा प्रकार:', val: 'सार्वजनिक शैक्षणिक प्रबोधन संकेतस्थळ' },
      { label: 'उपलब्धता:', val: 'मुक्त शैक्षणिक उपक्रम (Open-Access)' },
    ],
    disclaimerTitle: 'गैर-व्यावसायिक सूचना (अस्वीकरण)',
    disclaimerDesc: 'डिजिटल साथी हा केवळ शैक्षणिक आणि सामाजिक प्रबोधनासाठी तयार केलेला प्रकल्प आहे. येथे कोणतीही बँक माहिती, पासवर्ड किंवा वैयक्तिक माहिती घेतली जात नाही. याचा कोणत्याही बँकेशी किंवा सरकारी यंत्रणेशी व्यावसायिक संबंध नाही.',
  },
};

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage, language }) => {
  const a = aboutContent[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header / Intro */}
      <div className="max-w-3xl border-b border-[#E5E5E5] pb-8">
        <div className="flex items-center gap-2 mb-3">
          <GraduationCap className="w-4 h-4 text-[#171717]" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#737373]">{a.tag}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] font-editorial">
          {a.title}
        </h1>
        <p className="text-base text-[#525252] mt-3 leading-relaxed">
          {a.subtitle}
        </p>
      </div>

      {/* Mission */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 p-8 border border-[#E5E5E5] bg-white rounded-sm space-y-4">
          <h2 className="text-2xl font-bold text-[#171717] font-editorial">
            {a.missionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
            {a.missionDesc}
          </p>
        </div>

        <div className="lg:col-span-5 p-8 border border-[#E5E5E5] bg-[#FAF9F6] rounded-sm space-y-4">
          <h3 className="text-lg font-bold text-[#171717]">{a.themeTitle}</h3>
          <div className="space-y-3 pt-1 text-xs">
            {a.themeInfo.map((item, idx) => (
              <div key={idx} className="flex flex-col border-b border-[#EBEBEA] pb-2 last:border-b-0">
                <span className="text-[#737373] font-medium">{item.label}</span>
                <span className="font-semibold text-[#171717] mt-0.5">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {a.pillars.map((pil, idx) => {
          const IconComp = pil.icon;
          return (
            <div key={idx} className="p-6 border border-[#E5E5E5] bg-white rounded-sm space-y-3">
              <div className="p-2.5 bg-[#FAF9F6] border border-[#E5E5E5] w-fit rounded text-[#171717]">
                <IconComp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#171717]">{pil.title}</h3>
              <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                {pil.desc}
              </p>
            </div>
          );
        })}
      </section>

      {/* Non Commercial Disclaimer */}
      <section className="p-6 border border-[#E5E5E5] bg-[#FAF9F6] rounded-sm space-y-2">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717]">
          {a.disclaimerTitle}
        </h4>
        <p className="text-xs text-[#737373] leading-relaxed">
          {a.disclaimerDesc}
        </p>
      </section>
    </div>
  );
};
