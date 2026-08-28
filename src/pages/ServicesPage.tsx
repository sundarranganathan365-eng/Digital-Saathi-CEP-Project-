import React from 'react';
import { PageId, Language } from '../types';
import { VideoGuideSection } from '../components/VideoGuideSection';
import {
  FileText,
  ShieldCheck,
  Building2,
  Lock,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ExternalLink,
  Eye,
} from 'lucide-react';

interface ServicesPageProps {
  setCurrentPage: (page: PageId) => void;
  language: Language;
}

const servicesContent = {
  en: {
    moduleTag: 'Module 04',
    categoryTag: 'Public Services',
    title: 'Digital Public Services & DigiLocker',
    subtitle: 'Learn how to securely access genuine government portals, utilize DigiLocker for legally valid digital documents, and practice Masked Aadhaar privacy.',
    digilocker: {
      tag: 'Official Platform',
      title: 'What is DigiLocker?',
      desc: 'DigiLocker is an official flagship initiative by the Ministry of Electronics and IT (Govt. of India). It provides every Indian citizen with a secure cloud storage account linked directly to their Aadhaar number to access authentic electronic documents.',
      points: [
        'Legal Recognition: Documents in DigiLocker are treated at par with original physical documents under Rule 9A of IT Rules 2016.',
        'Accepted by Traffic Police, Railways (IRCTC), and Airports for identity verification.',
        'Eliminates the risk of losing or damaging original paper certificates.',
      ],
      stepsTitle: '3 Steps to Get Started with DigiLocker',
      steps: [
        { num: 1, title: 'Install Official App or Visit digilocker.gov.in', desc: 'Ensure you are on the verified government domain.' },
        { num: 2, title: 'Register Using Aadhaar & Mobile OTP', desc: 'Enter your 12-digit Aadhaar number and verify with the OTP sent to your linked phone.' },
        { num: 3, title: 'Fetch Issued Documents', desc: 'Search for your state Driving License, Vehicle RC, or Class 10/12 Marksheet to add authentic digital copies.' },
      ],
    },
    maskedAadhaar: {
      tag: 'Identity Privacy',
      title: 'Masked Aadhaar: Protect Your Identity',
      desc: 'Whenever an unverified service (like a private hotel, gym, or apartment security gate) demands an Aadhaar photocopy, do NOT provide a full copy. Use Masked Aadhaar instead.',
      fullLabel: 'Standard Full Aadhaar (Vulnerable)',
      fullDesc: 'Displays all 12 digits: 1234 5678 9012. If stolen or photocopied, scammers can misuse your Aadhaar number for SIM swapping.',
      maskedLabel: 'Masked Aadhaar (Recommended & Safe)',
      maskedDesc: 'Hides the first 8 digits: XXXX-XXXX-9012. Fully valid for identity verification, but prevents identity theft.',
      howTo: 'Download your Masked Aadhaar anytime from the official UIDAI portal: eaadhaar.uidai.gov.in by selecting the "Masked Aadhaar" checkbox before downloading.',
    },
    govDomains: {
      tag: 'Web Domain Verification',
      title: 'How to Recognize Real Government Websites',
      desc: 'Never submit citizen details or payment information on suspicious commercial domain extensions.',
      officialBadge: 'Official Government Domains',
      officialList: [
        'ends with .gov.in (e.g. incometax.gov.in, parivahan.gov.in)',
        'ends with .nic.in (e.g. epfindia.gov.in, sbi.co.in)',
        'uses HTTPS encryption with a closed padlock in browser bar',
      ],
      fakeBadge: 'Fraudulent & Cloned Domains (AVOID)',
      fakeList: [
        'ends with .xyz, .top, .online, or .club',
        'uses free blog platforms like .blogspot.com or .wordpress.com',
        'misspells official names (e.g. uidaii-update-portal.com)',
      ],
    },
    dosTitle: 'Summary: Digital Public Services Best Practices',
    dos: [
      'Store your Driving License and Vehicle RC in the official DigiLocker app.',
      'Always download Masked Aadhaar for non-statutory offline verification.',
      'Check the website address ends with .gov.in before filling application forms.',
      'Use the UMANG mobile app to access multiple state and central government services in one place.',
    ],
    donts: [
      'Never laminate or carry original Aadhaar cards everywhere when DigiLocker is accepted.',
      'Never pay money on third-party unofficial websites claiming to "fast-track" PAN or Aadhaar corrections.',
      'Never enter your Aadhaar number or OTP into random Google Forms or WhatsApp links.',
      'Never trust sponsored search ads offering government subsidy schemes.',
    ],
    nextCta: 'Module 05: Test Your Knowledge (Interactive Quiz)',
  },
  hi: {
    moduleTag: 'मॉड्यूल 04',
    categoryTag: 'सरकारी सेवाएं',
    title: 'सरकारी डिजिटल सेवाएं और डिजीलॉकर',
    subtitle: 'आधिकारिक सरकारी पोर्टल का उपयोग करना, डिजीलॉकर पर वैध डिजिटल दस्तावेज रखना और मास्क आधार (Masked Aadhaar) की सुरक्षा सीखें।',
    digilocker: {
      tag: 'आधिकारिक सरकारी सेवा',
      title: 'डिजीलॉकर (DigiLocker) क्या है?',
      desc: 'डिजीलॉकर भारत सरकार के इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय की एक आधिकारिक पहल है। यह प्रत्येक भारतीय नागरिक को आधार से जुड़ा एक सुरक्षित क्लाउड स्टोरेज खाता प्रदान करता है जिसमें सभी सरकारी दस्तावेज सुरक्षित रहते हैं।',
      points: [
        'कानूनी मान्यता: आईटी नियम 2016 के तहत डिजीलॉकर के दस्तावेज मूल कागजी दस्तावेजों के समान पूरी तरह मान्य हैं।',
        'ट्रैफिक पुलिस, रेलवे (IRCTC) और हवाई अड्डों पर पहचान के लिए आधिकारिक रूप से स्वीकार्य।',
        'कागजी प्रमाण पत्र खोने, फटने या चोरी होने का जोखिम समाप्त होता है।',
      ],
      stepsTitle: 'डिजीलॉकर शुरू करने के 3 आसान चरण',
      steps: [
        { num: 1, title: 'आधिकारिक ऐप इंस्टॉल करें या digilocker.gov.in पर जाएं', desc: 'सुनिश्चित करें कि आप असली सरकारी वेबसाइट पर हैं।' },
        { num: 2, title: 'आधार और मोबाइल OTP से खाता बनाएं', desc: 'अपना 12 अंकों का आधार नंबर दर्ज करें और फोन पर आए OTP से पुष्टि करें।' },
        { num: 3, title: 'दस्तावेज जारी (Fetch) करवाएं', desc: 'ड्राइविंग लाइसेंस, गाड़ी की RC या 10वीं/12वीं की मार्कशीट सर्च करके डिजिटल कॉपी जोड़ें।' },
      ],
    },
    maskedAadhaar: {
      tag: 'पहचान की सुरक्षा',
      title: 'मास्क आधार (Masked Aadhaar): अपनी पहचान सुरक्षित रखें',
      desc: 'जब भी किसी निजी होटल, जिम या सुरक्षा गेट पर आधार की फोटोकॉपी मांगी जाए, तो कभी भी पूरा आधार न दें। इसके बजाय मास्क आधार का उपयोग करें।',
      fullLabel: 'सामान्य पूरा आधार (जोखिम भरा)',
      fullDesc: 'इसमें सभी 12 अंक दिखाई देते हैं: 1234 5678 9012। फोटोकॉपी लीक होने पर इसका गलत इस्तेमाल किया जा सकता है।',
      maskedLabel: 'मास्क आधार (सुरक्षित एवं अनुशंसित)',
      maskedDesc: 'इसमें पहले 8 अंक छिपे रहते हैं: XXXX-XXXX-9012। यह पहचान के लिए पूरी तरह वैध है और धोखाधड़ी से बचाता है।',
      howTo: 'आप UIDAI के आधिकारिक पोर्टल: eaadhaar.uidai.gov.in से "Masked Aadhaar" बॉक्स पर टिक करके कभी भी मास्क आधार डाउनलोड कर सकते हैं।',
    },
    govDomains: {
      tag: 'वेबसाइट की प्रामाणिकता',
      title: 'असली सरकारी वेबसाइट की पहचान कैसे करें',
      desc: 'फर्जी या व्यावसायिक वेबसाइटों पर कभी भी अपनी व्यक्तिगत जानकारी या बैंक विवरण दर्ज न करें।',
      officialBadge: 'असली सरकारी वेबसाइट का पता',
      officialList: [
        'वेबसाइट का पता .gov.in पर समाप्त होता है (जैसे incometax.gov.in, parivahan.gov.in)',
        '.nic.in पर समाप्त होने वाली साइटें भी आधिकारिक हैं',
        'ब्राउज़र के एड्रेस बार में सुरक्षित ताले का निशान (HTTPS) होता है',
      ],
      fakeBadge: 'फर्जी व नकली वेबसाइट (इनसे बचें)',
      fakeList: [
        'पता .xyz, .top, .online या .club पर समाप्त होता है',
        'फ्री ब्लॉग जैसे .blogspot.com का उपयोग करते हैं',
        'सरकारी नाम की गलत स्पेलिंग (जैसे uidaii-portal.com)',
      ],
    },
    dosTitle: 'सरकारी डिजिटल सेवाओं के महत्वपूर्ण नियम',
    dos: [
      'अपना ड्राइविंग लाइसेंस और गाड़ी की RC डिजीलॉकर ऐप में सुरक्षित रखें।',
      'होटल या निजी जगहों पर हमेशा मास्क आधार (Masked Aadhaar) की कॉपी दें।',
      'फॉर्म भरने से पहले वेबसाइट के पते में .gov.in की जांच अवश्य करें।',
      'विभिन्न सरकारी योजनाओं के लिए UMANG ऐप का उपयोग करें।',
    ],
    donts: [
      'डिजीलॉकर होने पर हमेशा असली मूल कागजात साथ लेकर घूमने की जरूरत नहीं है।',
      'पैन या आधार सुधार के नाम पर फर्जी निजी वेबसाइटों को पैसे न दें।',
      'व्हाट्सएप लिंक या गूगल फॉर्म में अपना आधार नंबर और OTP कभी न भरें।',
      'सरकारी सब्सिडी का लालच देने वाले गूगल विज्ञापनों पर भरोसा न करें।',
    ],
    nextCta: 'मॉड्यूल 05: अपनी जानकारी परखें (ज्ञान क्विज़)',
  },
  mr: {
    moduleTag: 'मॉड्यूल ०४',
    categoryTag: 'शासकीय सेवा',
    title: 'शासकीय डिजिटल सेवा आणि डिजीलॉकर',
    subtitle: 'अधिकृत सरकारी संकेतस्थळांचा वापर, डिजीलॉकरवर कायदेशीर कागदपत्रे ठेवणे आणि मास्क आधार (Masked Aadhaar) ची सुरक्षा जाणून घ्या.',
    digilocker: {
      tag: 'अधिकृत शासकीय व्यासपीठ',
      title: 'डिजीलॉकर (DigiLocker) म्हणजे काय?',
      desc: 'डिजीलॉकर हा भारत सरकारच्या इलेक्ट्रॉनिक्स आणि माहिती तंत्रज्ञान मंत्रालयाचा एक अधिकृत उपक्रम आहे. यात प्रत्येक नागरिकाला आधार क्रमांकाशी जोडलेले एक सुरक्षित क्लाउड स्टोरेज मिळते, ज्यामध्ये सरकारी कागदपत्रे डिजिटल स्वरूपात सुरक्षित राहतात.',
      points: [
        'कायदेशीर मान्यता: आयटी नियम २०१६ नुसार डिजीलॉकरमधील कागदपत्रे मूळ प्रत्यक्ष कागदपत्रांइतकीच सर्वत्र कायदेशीररीत्या ग्राह्य धरली जातात.',
        'वाहतूक पोलीस, रेल्वे (IRCTC) आणि विमानतळावर ओळखपत्र म्हणून अधिकृतपणे स्वीकारले जाते.',
        'मूळ कागदपत्रे गहाळ होणे, फाटणे किंवा चोरीला जाण्याची भीती राहत नाही.',
      ],
      stepsTitle: 'डिजीलॉकर सुरू करण्याच्या ३ सोप्या पायऱ्या',
      steps: [
        { num: 1, title: 'अधिकृत ॲप डाऊनलोड करा किंवा digilocker.gov.in ला भेट द्या', desc: 'अधिकृत सरकारी वेबसाईटवर असल्याची खात्री करा.' },
        { num: 2, title: 'आधार आणि मोबाईल OTP द्वारे खाते तयार करा', desc: '१२-अंकी आधार नंबर टाका आणि फोनवर आलेल्या OTP ने पडताळणी करा.' },
        { num: 3, title: 'कागदपत्रे जोडा (Fetch Documents)', desc: 'ड्रायव्हिंग लायसन्स, वाहनाचे RC किंवा गुणपत्रिका शोधून डिजिटल प्रत साठवा.' },
      ],
    },
    maskedAadhaar: {
      tag: 'ओळखपत्राची गोपनीयता',
      title: 'मास्क आधार (Masked Aadhaar): स्वतःची माहिती सुरक्षित ठेवा',
      desc: 'हॉटेल, खाजगी कार्यालय किंवा इतर ठिकाणी आधार कार्डची झेरॉक्स मागितली तर पूर्ण आधार न देता मास्क आधार द्या.',
      fullLabel: 'सर्वसामान्य पूर्ण आधार (धोकादायक)',
      fullDesc: 'यात सर्व १२ आकडे दिसतात: १२३४ ५६७८ ९०१२. झेरॉक्स गहाळ झाल्यास माहितीचा गैरवापर होऊ शकतो.',
      maskedLabel: 'मास्क आधार (सुरक्षित आणि शिफारस केलेले)',
      maskedDesc: 'यात पहिले ८ आकडे लपलेले असतात: XXXX-XXXX-९०१२. हे सर्वत्र ओळखीसाठी कायदेशीररीत्या वैध आहे.',
      howTo: 'तुम्ही UIDAI च्या अधिकृत संकेतस्थळावरून (eaadhaar.uidai.gov.in) "Masked Aadhaar" या पर्यायावर टिक करून मास्क आधार डाऊनलोड करू शकता.',
    },
    govDomains: {
      tag: 'संकेतस्थळाची सत्यता',
      title: 'खरे सरकारी संकेतस्थळ कसे ओळखाल?',
      desc: 'बनावट किंवा खाजगी संकेतस्थळांवर कधीही स्वतःची खाजगी किंवा बँक माहिती भरू नका.',
      officialBadge: 'अधिकृत सरकारी संकेतस्थळांचा पत्ता',
      officialList: [
        'पत्ता .gov.in ने समाप्त होतो (उदा. incometax.gov.in, maharashtra.gov.in)',
        '.nic.in ने समाप्त होणारी संकेतस्थळे देखील अधिकृत असतात',
        'ब्राउझरच्या ॲड्रेस बारमध्ये कुलूपाचे चिन्ह (HTTPS) असते',
      ],
      fakeBadge: 'बनावट व खोट्या वेबसाईट (टाळा)',
      fakeList: [
        'पत्ता .xyz, .top किंवा .online ने संपतो',
        'मोफत ब्लॉग्स जसे की .blogspot.com वापरतात',
        'सरकारी नावांमध्ये स्पेलिंगच्या चुका (उदा. uidaii-online.com)',
      ],
    },
    dosTitle: 'शासकीय डिजिटल सेवांचे सुवर्ण नियम',
    dos: [
      'ड्रायव्हिंग लायसन्स आणि वाहनाची RC डिजीलॉकरमध्ये सुरक्षित ठेवा.',
      'हॉटेल किंवा इतर ठिकाणी नेहमी मास्क आधार (Masked Aadhaar) ची प्रत द्या.',
      'फॉर्म भरण्यापूर्वी वेबसाईटच्या शेवटी .gov.in असल्याची खात्री करा.',
      'विविध योजनांसाठी केंद्र व राज्य सरकारच्या UMANG ॲपचा वापर करा.',
    ],
    donts: [
      'डिजीलॉकर उपलब्ध असताना मूळ कागदपत्रे सतत सोबत घेऊन फिरू नका.',
      'पॅन किंवा आधार दुरुस्तीच्या नावाखाली खाजगी खोट्या वेबसाईटवर पैसे भरू नका.',
      'व्हॉट्सॲपवरील अनोळखी लिंक्समध्ये आधार नंबर किंवा OTP टाकू नका.',
      'सरकारी योजनांच्या नावाखाली येणाऱ्या खोट्या जाहिरातींवर विश्वास ठेवू नका.',
    ],
    nextCta: 'मॉड्यूल ०५: ज्ञान चाचणी (क्विझ)',
  },
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentPage, language }) => {
  const s = servicesContent[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header / Intro */}
      <div className="max-w-3xl border-b border-[#E5E5E5] pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#171717] bg-[#EFEFED] px-2 py-0.5 rounded">
            {s.moduleTag}
          </span>
          <span className="text-xs text-[#737373] uppercase tracking-wider">{s.categoryTag}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] font-editorial">
          {s.title}
        </h1>
        <p className="text-base text-[#525252] mt-3 leading-relaxed">
          {s.subtitle}
        </p>
      </div>

      {/* 1. DIGILOCKER */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 p-8 border border-[#E5E5E5] bg-white rounded-sm space-y-4">
          <span className="text-xs font-mono font-semibold text-[#737373] uppercase tracking-wider block">
            {s.digilocker.tag}
          </span>
          <h2 className="text-2xl font-bold text-[#171717] font-editorial">
            {s.digilocker.title}
          </h2>
          <p className="text-sm text-[#525252] leading-relaxed">
            {s.digilocker.desc}
          </p>
          <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#333333]">
            {s.digilocker.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 p-8 border border-[#E5E5E5] bg-[#FAF9F6] rounded-sm space-y-4">
          <h3 className="text-base font-bold text-[#171717]">{s.digilocker.stepsTitle}</h3>
          <div className="space-y-3 pt-2">
            {s.digilocker.steps.map((st) => (
              <div key={st.num} className="p-3.5 bg-white border border-[#E5E5E5] rounded flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">
                  {st.num}
                </span>
                <div>
                  <strong className="text-xs font-semibold text-[#171717] block">{st.title}</strong>
                  <p className="text-xs text-[#525252] mt-0.5">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. MASKED AADHAAR */}
      <section className="p-8 sm:p-10 border border-[#E5E5E5] bg-white rounded-sm space-y-6">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#737373] block mb-1">
            {s.maskedAadhaar.tag}
          </span>
          <h2 className="text-2xl font-bold text-[#171717] font-editorial">
            {s.maskedAadhaar.title}
          </h2>
          <p className="text-sm text-[#525252] mt-2 max-w-3xl leading-relaxed">
            {s.maskedAadhaar.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 border border-red-200 bg-red-50/40 rounded space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-red-900 uppercase">
              <XCircle className="w-4 h-4 text-red-600" />
              <span>{s.maskedAadhaar.fullLabel}</span>
            </div>
            <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
              {s.maskedAadhaar.fullDesc}
            </p>
          </div>

          <div className="p-5 border border-emerald-200 bg-emerald-50/40 rounded space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>{s.maskedAadhaar.maskedLabel}</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {s.maskedAadhaar.maskedDesc}
            </p>
          </div>
        </div>

        <div className="p-4 bg-[#FAF9F6] border border-[#E5E5E5] rounded text-xs text-[#171717]">
          <strong>How to download: </strong>
          <span>{s.maskedAadhaar.howTo}</span>
        </div>
      </section>

      {/* 3. VERIFYING GOV DOMAINS */}
      <section className="p-8 sm:p-10 border border-[#E5E5E5] bg-[#FAF9F6] rounded-sm space-y-6">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#737373] block mb-1">
            {s.govDomains.tag}
          </span>
          <h2 className="text-2xl font-bold text-[#171717] font-editorial">
            {s.govDomains.title}
          </h2>
          <p className="text-sm text-[#525252] mt-2">
            {s.govDomains.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 bg-white border border-[#E5E5E5] rounded space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
              ✓ {s.govDomains.officialBadge}
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#333333]">
              {s.govDomains.officialList.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 bg-white border border-[#E5E5E5] rounded space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 block">
              ✕ {s.govDomains.fakeBadge}
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#333333]">
              {s.govDomains.fakeList.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OFFICIAL YOUTUBE VIDEO GUIDES & TUTORIALS */}
      <VideoGuideSection category="services" language={language} />

      {/* 4. DOs and DONTs */}
      <section className="border-t border-[#E5E5E5] pt-12">
        <h2 className="text-xl sm:text-2xl font-bold text-[#171717] mb-6 font-editorial">
          {s.dosTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-emerald-200 bg-emerald-50/40 rounded-sm space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              <span>DO / हमेशा करें</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
              {s.dos.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-red-200 bg-red-50/40 rounded-sm space-y-3">
            <div className="flex items-center gap-2 text-red-800 font-bold text-sm">
              <XCircle className="w-5 h-5 text-red-600" />
              <span>DON'T / कभी न करें</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-red-950">
              {s.donts.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NEXT MODULE CTA */}
      <div className="flex justify-end pt-6">
        <button
          onClick={() => {
            setCurrentPage('quiz');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-white text-sm font-semibold rounded hover:bg-[#333333] transition-colors"
        >
          <span>{s.nextCta}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
