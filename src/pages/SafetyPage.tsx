import React, { useState } from 'react';
import { PageId, Language } from '../types';
import { VideoGuideSection } from '../components/VideoGuideSection';
import {
  ShieldAlert,
  PhoneCall,
  Lock,
  ExternalLink,
  Smartphone,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  FileWarning,
} from 'lucide-react';

interface SafetyPageProps {
  setCurrentPage: (page: PageId) => void;
  language: Language;
}

const safetyContent = {
  en: {
    moduleTag: 'Module 03',
    categoryTag: 'Cyber Defense',
    title: 'Online Safety & Cyber Fraud Prevention',
    subtitle: 'Learn to recognize psychological manipulation, identify modern digital scam vectors, and master the exact emergency protocols when financial fraud occurs.',
    threatsTitle: '5 Most Common Digital Scams in India',
    threats: [
      {
        id: 'phishing',
        title: '1. Phishing SMS & Fake KYC Alerts',
        desc: 'Fraudsters send urgent SMS claiming your bank account, SIM card, or electricity will be suspended unless you click an unverified link.',
        tactic: 'Creates artificial panic and urgency to force instant action without thinking.',
        rule: 'Banks and utility boards NEVER send links to update KYC via ordinary SMS.',
      },
      {
        id: 'otp',
        title: '2. OTP & Social Engineering Fraud',
        desc: 'Callers impersonating bank officials, lottery managers, or police officers demand the 6-digit OTP received on your mobile.',
        tactic: 'Pretends to offer help or threatens account freezing unless you read out the code.',
        rule: 'An OTP is meant ONLY for your eyes. Real bank employees never ask for OTPs.',
      },
      {
        id: 'helpline',
        title: '3. Fake Customer Care Numbers on Search Engines',
        desc: 'Scammers modify phone numbers on Google search listings for courier companies, airlines, and banks to route calls to fraudulent call centers.',
        tactic: 'You call looking for genuine help, but the scammer asks for remote access or payment.',
        rule: 'Only obtain helpline numbers directly from the back of your debit card or official mobile apps.',
      },
      {
        id: 'jobs',
        title: '4. Telegram Part-Time Review & Investment Scams',
        desc: 'Unsolicited WhatsApp messages promising ₹3,000–₹8,000/day for rating hotels, subscribing to YouTube channels, or trading crypto.',
        tactic: 'Pays a small token amount (₹150) first to build trust, then demands large prepaid deposits.',
        rule: 'Real companies never hire via WhatsApp and never ask you to pay money to work.',
      },
      {
        id: 'remote',
        title: '5. Remote Screen-Share Apps (AnyDesk, TeamViewer)',
        desc: 'Callers instruct you to download screen-sharing tools from the Play Store to "fix a technical error" or "process a refund".',
        tactic: 'Once installed, the scammer can see your live phone screen and steal your passwords as you type.',
        rule: 'Never install remote desktop apps on instructions from unknown phone callers.',
      },
    ],
    rulesTitle: 'The 4 Core Safety Principles',
    rules: [
      {
        num: '01',
        title: 'PIN is for DEBIT Only',
        desc: 'Entering UPI PIN always sends money. Receiving money never requires a PIN or QR scan.',
      },
      {
        num: '02',
        title: 'Zero OTP Sharing',
        desc: 'Never read out OTPs or passwords over phone calls, SMS, or social media forms.',
      },
      {
        num: '03',
        title: 'Verify Official Domains',
        desc: 'Check that government portals end with .gov.in and banks use verified HTTPS domains.',
      },
      {
        num: '04',
        title: 'No Remote Control Apps',
        desc: 'Refuse requests from strangers to install screen-sharing software on your smartphone.',
      },
    ],
    emergency: {
      tag: 'EMERGENCY ACTION PROTOCOL',
      title: 'What to Do If You Lose Money to an Online Scam',
      badge: 'GOLDEN HOUR PROTOCOL',
      desc: 'The first 2 hours after a fraudulent transaction are critical. Quick reporting enables the National Cyber Crime Reporting Portal to coordinate with payment gateways and freeze stolen funds before the criminal withdraws them.',
      steps: [
        {
          num: 1,
          title: 'Dial 1930 Immediately',
          desc: 'Call the National Cyber Crime Helpline at 1930 (Toll-Free). Provide transaction ID, date, time, and recipient UPI ID or account number.',
        },
        {
          num: 2,
          title: 'Contact Your Bank to Freeze Cards & Accounts',
          desc: 'Call your bank’s official 24x7 toll-free helpline (found on your ATM card) and request immediate temporary blocking of netbanking and cards.',
        },
        {
          num: 3,
          title: 'File an Online Complaint at cybercrime.gov.in',
          desc: 'Submit full transaction screenshots, SMS alerts, call recordings, and scammer phone numbers for formal investigation.',
        },
      ],
    },
    dosTitle: 'Summary: Cyber Defense Checklist',
    dos: [
      'Call 1930 immediately if money is deducted unauthorizedly.',
      'Check browser URL bar for the secure padlock icon before entering credentials.',
      'Save official bank customer care numbers from your passbook into your phone.',
      'Block and report spam SMS messages in your phone dialer app.',
    ],
    donts: [
      'Never read OTP or CVV over phone calls to anyone.',
      'Never search for customer care numbers on random Google image searches.',
      'Never transfer money to "activate" prizes, lotteries, or job offers.',
      'Never install screen-sharing apps like AnyDesk on a caller’s demand.',
    ],
    nextCta: 'Next Module: Government Digital Public Services',
  },
  hi: {
    moduleTag: 'मॉड्यूल 03',
    categoryTag: 'साइबर सुरक्षा',
    title: 'ऑनलाइन सुरक्षा एवं साइबर धोखाधड़ी से बचाव',
    subtitle: 'धोखेबाजों की चालों को पहचानना सीखें, आधुनिक डिजिटल स्कैम के तौर-तरीके समझें और धोखाधड़ी होने पर आपातकालीन नियम जानें।',
    threatsTitle: 'भारत में होने वाले 5 सबसे आम डिजिटल स्कैम',
    threats: [
      {
        id: 'phishing',
        title: '1. फर्जी SMS एवं फेक KYC चेतावनी',
        desc: 'धोखेबाज बैंक खाता, सिम कार्ड या बिजली कटने का डर दिखाकर अनजान लिंक पर क्लिक करने के लिए कहते हैं।',
        tactic: 'झूठी जल्दबाजी और डर पैदा करना ताकि आप बिना सोचे तुरंत क्लिक कर दें।',
        rule: 'असली बैंक या सरकारी विभाग कभी भी साधारण SMS लिंक भेजकर KYC नहीं मांगते।',
      },
      {
        id: 'otp',
        title: '2. फोन कॉल पर OTP पूछने का स्कैम',
        desc: 'बैंक अधिकारी, लॉटरी प्रबंधक या पुलिस बनकर कॉल करने वाले लोग आपके फोन पर आया 6-अंकों का OTP मांगते हैं।',
        tactic: 'मदद करने का नाटक करना या खाता बंद करने की धमकी देकर पासवर्ड पूछना।',
        rule: 'OTP केवल आपके लिए है। बैंक कर्मचारी कभी भी फोन पर OTP नहीं मांगते।',
      },
      {
        id: 'helpline',
        title: '3. गूगल सर्च पर फर्जी कस्टमर केयर नंबर',
        desc: 'धोखेबाज कूरियर, एयरलाइंस या बैंक के नाम से गूगल सर्च विज्ञापनों में अपने फर्जी नंबर डाल देते हैं।',
        tactic: 'जब आप मदद के लिए कॉल करते हैं, तो वे पैसे ट्रांसफर करने या ऐप डाउनलोड करने को कहते हैं।',
        rule: 'हेल्पलाइन नंबर हमेशा अपनी पासबुक, एटीएम कार्ड के पीछे या आधिकारिक ऐप से ही लें।',
      },
      {
        id: 'jobs',
        title: '4. टेलीग्राम पार्ट-टाइम नौकरी और रेटिंग स्कैम',
        desc: 'होटल को रेटिंग देकर या वीडियो लाइक करके रोज ₹3,000–₹8,000 कमाने के फर्जी व्हाट्सएप मैसेज।',
        tactic: 'पहले भरोसा जीतने के लिए ₹150 जैसी छोटी रकम देते हैं, फिर लाखों रुपये का निवेश करवाकर भाग जाते हैं।',
        rule: 'असली कंपनियां व्हाट्सएप पर नौकरी नहीं देतीं और काम देने के लिए कभी पैसे नहीं मांगतीं।',
      },
      {
        id: 'remote',
        title: '5. रिमोट स्क्रीन शेयरिंग ऐप्स (AnyDesk, TeamViewer)',
        desc: 'समस्या ठीक करने या रिफंड देने के बहाने फोन में स्क्रीन-शेयरिंग ऐप डाउनलोड करवाना।',
        tactic: 'ऐप चालू होते ही धोखेबाज आपकी स्क्रीन देख लेते हैं और टाइप किया जाने वाला पासवर्ड चुरा लेते हैं।',
        rule: 'अंजान कॉलर्स के कहने पर फोन में कभी भी स्क्रीन-शेयर ऐप इंस्टॉल न करें।',
      },
    ],
    rulesTitle: 'सुरक्षा के 4 मूल सिद्धांत',
    rules: [
      {
        num: '01',
        title: 'PIN केवल पैसे भेजने के लिए है',
        desc: 'UPI पिन डालने से हमेशा पैसे कटते हैं। पैसे प्राप्त करने के लिए कभी पिन या QR की जरूरत नहीं होती।',
      },
      {
        num: '02',
        title: 'OTP किसी को न बताएं',
        desc: 'फोन कॉल, SMS या सोशल मीडिया पर किसी के साथ भी OTP या पासवर्ड साझा न करें।',
      },
      {
        num: '03',
        title: 'आधिकारिक वेबसाइट पहचानें',
        desc: 'जांचें कि सरकारी पोर्टल .gov.in पर समाप्त होते हैं और बैंक सुरक्षित HTTPS लिंक का उपयोग करते हैं।',
      },
      {
        num: '04',
        title: 'रिमोट ऐप डाउनलोड न करें',
        desc: 'अजनबियों के कहने पर कभी भी AnyDesk या TeamViewer जैसे स्क्रीन-शेयरिंग सॉफ्टवेयर इंस्टॉल न करें।',
      },
    ],
    emergency: {
      tag: 'आपातकालीन कार्रवाई',
      title: 'यदि ऑनलाइन धोखाधड़ी में पैसे कट जाएं तो क्या करें?',
      badge: 'गोल्डन ऑवर नियम (2 घंटे)',
      desc: 'धोखाधड़ी के पहले 2 घंटे सबसे महत्वपूर्ण होते हैं। तुरंत रिपोर्ट करने से राष्ट्रीय साइबर अपराध पोर्टल बैंक से संपर्क करके चुराए गए पैसों को आगे ट्रांसफर होने से रोक (फ्रीज) सकता है।',
      steps: [
        {
          num: 1,
          title: 'तुरंत 1930 पर कॉल करें',
          desc: 'राष्ट्रीय साइबर अपराध हेल्पलाइन 1930 (टोल-फ्री) पर फोन करें। लेन-देन का समय, राशि और बैंक विवरण बताएं।',
        },
        {
          num: 2,
          title: 'बैंक को सूचित करके कार्ड और नेटबैंकिंग ब्लॉक करें',
          desc: 'अपने एटीएम कार्ड के पीछे दिए गए बैंक हेल्पलाइन नंबर पर कॉल करके तुरंत अपने खाते को सुरक्षित करें।',
        },
        {
          num: 3,
          title: 'cybercrime.gov.in पर ऑनलाइन शिकायत दर्ज करें',
          desc: 'SMS, धोखाधड़ी वाले नंबर और बैंक लेन-देन के स्क्रीनशॉट के साथ आधिकारिक पोर्टल पर रिपोर्ट दर्ज करें।',
        },
      ],
    },
    dosTitle: 'साइबर सुरक्षा चेकलिस्ट',
    dos: [
      'अनधिकृत रूप से पैसे कटने पर तुरंत 1930 पर कॉल करें।',
      'पासवर्ड डालने से पहले ब्राउज़र में सुरक्षित ताले का निशान जांचें।',
      'अपनी पासबुक से बैंक के असली टोल-फ्री नंबर फोन में सेव रखें।',
      'संदिग्ध और फर्जी SMS को अपने फोन में ब्लॉक और रिपोर्ट करें।',
    ],
    donts: [
      'फोन कॉल पर किसी को भी अपना OTP या CVV न बताएं।',
      'गूगल इमेज सर्च से कभी भी कस्टमर केयर नंबर न निकालें।',
      'लॉटरी या नौकरी पाने के लिए किसी को भी एडवांस पैसे न भेजें।',
      'कॉल करने वाले के कहने पर AnyDesk जैसा स्क्रीन शेयरिंग ऐप डाउनलोड न करें।',
    ],
    nextCta: 'अगला मॉड्यूल: सरकारी डिजिटल सेवाएं (डिजीलॉकर)',
  },
  mr: {
    moduleTag: 'मॉड्यूल ०३',
    categoryTag: 'सायबर सुरक्षा',
    title: 'ऑनलाइन सुरक्षा व सायबर फसवणूक बचाव',
    subtitle: 'सायबर चोरांच्या खोट्या युक्त्या ओळखा, आधुनिक स्कॅम समजून घ्या आणि फसवणूक झाल्यास त्वरित करावयाची कायदेशीर प्रक्रिया शिका.',
    threatsTitle: 'भारतातील ५ सर्वात मोठे सायबर स्कॅम',
    threats: [
      {
        id: 'phishing',
        title: '१. बनावट SMS आणि खोटे KYC मेसेज',
        desc: 'बँक खाते, सिम कार्ड किंवा वीज पुरवठा बंद होण्याची भीती दाखवून संशयास्पद लिंकवर क्लिक करायला लावणे.',
        tactic: 'विचार न करता लगेच क्लिक करण्यासाठी खोटी घाई आणि भीती निर्माण करणे.',
        rule: 'बँका किंवा सरकारी विभाग कधीही साध्या SMS मधील लिंकवरून KYC मागत नाहीत.',
      },
      {
        id: 'otp',
        title: '२. फोनवर OTP विचारण्याची फसवणूक',
        desc: 'बँक अधिकारी, पोलीस किंवा लॉटरी अधिकारी असल्याचे भासवून फोनवर आलेला ६-अंकी OTP विचारणे.',
        tactic: 'मदत करण्याचे नाटक करून किंवा खाते बंद होण्याची भीती दाखवून पासवर्ड विचारणे.',
        rule: 'OTP फक्त तुमच्यासाठी असतो. बँकेचे कर्मचारी कधीही फोनवर OTP मागत नाहीत.',
      },
      {
        id: 'helpline',
        title: '३. गुगल सर्चवरील बनावट कस्टमर केअर नंबर',
        desc: 'गुन्हेगार कुरिअर, विमान कंपन्या किंवा बँकांच्या नावाने गुगल सर्च जाहिरातींमध्ये स्वतःचे बनावट नंबर टाकतात.',
        tactic: 'तुम्ही मदतीसाठी फोन करता, तेव्हा ते ॲप डाऊनलोड करायला किंवा पैसे भरायला सांगतात.',
        rule: 'कस्टमर केअर नंबर नेहमी तुमच्या पासबुकवरून, एटीएम कार्डच्या मागून किंवा अधिकृत ॲपमधूनच घ्या.',
      },
      {
        id: 'jobs',
        title: '४. टेलिग्राम पार्ट-टाईम काम आणि रेटिंग स्कॅम',
        desc: 'हॉटेल्सना रेटिंग देऊन किंवा व्हिडिओ लाईक करून रोज ₹३,०००–₹८,००० कमवण्याचे व्हॉट्सॲप मेसेज.',
        tactic: 'आधी विश्वास बसण्यासाठी ₹१५० देतात, नंतर मोठी रक्कम गुंतवायला लावून फसवणूक करतात.',
        rule: 'मोठ्या कंपन्या व्हॉट्सॲपवर नोकऱ्या देत नाहीत आणि काम देण्यासाठी कधीही पैसे मागत नाहीत.',
      },
      {
        id: 'remote',
        title: '५. स्क्रीन शेअरिंग ॲप्स (AnyDesk, TeamViewer)',
        desc: 'तांत्रिक अडचण सोडवण्यासाठी किंवा रिफंड मिळवण्यासाठी फोनमध्ये स्क्रीन शेअरिंग ॲप डाऊनलोड करायला लावणे.',
        tactic: 'ॲप सुरू होताच चोरांना तुमच्या मोबाईलची स्क्रीन थेट दिसते आणि ते पासवर्ड चोरतात.',
        rule: 'अनोळखी व्यक्तीच्या सांगण्यावरून फोनमध्ये स्क्रीन शेअरिंग ॲप्स इन्स्टॉल करू नका.',
      },
    ],
    rulesTitle: 'सुरक्षिततेचे ४ मूलभूत सुवर्ण नियम',
    rules: [
      {
        num: '०१',
        title: 'पिन (PIN) फक्त पैसे पाठवण्यासाठी',
        desc: 'UPI पिन टाकल्याने नेहमी पैसे कट होतात. पैसे मिळवण्यासाठी पिन किंवा QR कोडची अजिबात गरज नसते.',
      },
      {
        num: '०२',
        title: 'OTP कधीही सांगू नका',
        desc: 'फोनवर, SMS मध्ये किंवा सोशल मीडियावर कोणालाही तुमचा OTP किंवा पासवर्ड सांगू नका.',
      },
      {
        num: '०३',
        title: 'अधिकृत संकेतस्थळ तपासा',
        desc: 'सरकारी संकेतस्थळे .gov.in ने संपतात आणि बँका सुरक्षित HTTPS लिंक वापरतात.',
      },
      {
        num: '०४',
        title: 'स्क्रीन शेअर ॲप्स टाळा',
        desc: 'अनोळखी लोकांच्या सांगण्यावरून AnyDesk किंवा TeamViewer सारखी ॲप्स मोबाईलमध्ये घेऊ नका.',
      },
    ],
    emergency: {
      tag: 'तातडीची मदत व उपाययोजना',
      title: 'ऑनलाईन फसवणुकीत खात्यातून पैसे गेल्यास काय करावे?',
      badge: 'गोल्डन अवर नियम (२ तासांच्या आत)',
      desc: 'फसवणूक झाल्यानंतर पहिले २ तास अत्यंत महत्त्वाचे असतात. त्वरित तक्रार केल्यास सायबर पोलीस आणि बँक चोरी झालेले पैसे पुढे जाण्यापूर्वी रोखू (फ्रीज करू) शकतात.',
      steps: [
        {
          num: 1,
          title: 'ताबडतोब १९३० वर कॉल करा',
          desc: 'राष्ट्रीय सायबर क्राईम हेल्पलाइन १९३० (टोल-फ्री) वर कॉल करा. व्यवहाराची वेळ, रक्कम आणि बँक तपशील सांगा.',
        },
        {
          num: 2,
          title: 'बँकेशी संपर्क साधून कार्ड व खाते ब्लॉक करा',
          desc: 'एटीएम कार्डच्या मागे दिलेल्या अधिकृत हेल्पलाइन नंबरवर फोन करून तात्काळ व्यवहार बंद करा.',
        },
        {
          num: 3,
          title: 'cybercrime.gov.in वर ऑनलाईन तक्रार नोंदवा',
          desc: 'SMS, खोटे फोन नंबर आणि व्यवहारांच्या स्क्रीनशॉटसह अधिकृत पोर्टलवर रीतसर तक्रार दाखल करा.',
        },
      ],
    },
    dosTitle: 'सायबर सुरक्षा चेकलिस्ट',
    dos: [
      'अनपेक्षितपणे पैसे कट झाल्यास ताबडतोब १९३० वर फोन करा.',
      'पासवर्ड टाकण्यापूर्वी ब्राउझरमध्ये सुरक्षित कुलूपाचे चिन्ह तपासा.',
      'पासबुकवरून बँकेचा अधिकृत टोल-फ्री नंबर फोनमध्ये सेव्ह करून ठेवा.',
      'संशयास्पद SMS फोनमध्ये ब्लॉक आणि रिपोर्ट करा.',
    ],
    donts: [
      'फोनवर कोणालाही स्वतःचा OTP किंवा CVV सांगू नका.',
      'गुगल इमेज सर्चवरून कधीही कस्टमर केअर नंबर शोधू नका.',
      'लॉटरी किंवा बक्षीस मिळवण्यासाठी कोणालाही ॲडव्हान्स पैसे पाठवू नका.',
      'कोणाच्याही सांगण्यावरून AnyDesk सारखे स्क्रीन शेअरिंग ॲप इन्स्टॉल करू नका.',
    ],
    nextCta: 'पुढील मॉड्यूल: शासकीय डिजिटल सेवा (डिजीलॉकर)',
  },
};

export const SafetyPage: React.FC<SafetyPageProps> = ({ setCurrentPage, language }) => {
  const s = safetyContent[language];

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

      {/* 1. TOP 5 SCAMS */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#737373] block mb-1">
            Common Threats
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] font-editorial">
            {s.threatsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.threats.map((th) => (
            <div key={th.id} className="p-6 border border-[#E5E5E5] bg-white rounded-sm space-y-3 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#171717]">{th.title}</h3>
                <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mt-2">
                  {th.desc}
                </p>
                <div className="mt-3 p-2.5 bg-[#FAF9F6] border border-[#E5E5E5] rounded text-xs text-[#171717]">
                  <strong>Scammer Tactic: </strong>
                  <span>{th.tactic}</span>
                </div>
              </div>
              <div className="pt-3 border-t border-[#F0F0EE] flex items-start gap-2 text-xs font-medium text-emerald-900 bg-emerald-50/60 p-2.5 rounded border border-emerald-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{th.rule}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. THE 4 GOLDEN RULES */}
      <section className="p-8 sm:p-10 border border-[#E5E5E5] bg-[#FAF9F6] rounded-sm space-y-8">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#737373] block mb-1">
            Core Foundations
          </span>
          <h2 className="text-2xl font-bold text-[#171717] font-editorial">
            {s.rulesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {s.rules.map((r, i) => (
            <div key={i} className="p-5 bg-white border border-[#E5E5E5] rounded">
              <span className="text-xs font-mono font-bold text-[#737373] uppercase tracking-wider block mb-2">
                RULE {r.num}
              </span>
              <h4 className="text-sm font-bold text-[#171717] mb-1.5">{r.title}</h4>
              <p className="text-xs text-[#525252] leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EMERGENCY RESPONSE — 1930 & Golden Hour */}
      <section className="p-8 sm:p-10 border-2 border-[#171717] bg-[#171717] text-white rounded-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-amber-400" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#A3A3A3]">
              {s.emergency.tag}
            </span>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-amber-400 text-black rounded font-mono">
            {s.emergency.badge}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white font-editorial">
          {s.emergency.title}
        </h3>

        <p className="text-sm text-[#D4D4D4] max-w-3xl leading-relaxed">
          {s.emergency.desc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {s.emergency.steps.map((st) => (
            <div key={st.num} className="p-5 bg-[#262626] border border-[#404040] rounded space-y-2">
              <span className="w-6 h-6 rounded-full bg-white text-[#171717] font-bold text-xs flex items-center justify-center font-mono">
                {st.num}
              </span>
              <h4 className="text-base font-bold text-white">{st.title}</h4>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFICIAL YOUTUBE VIDEO GUIDES & TUTORIALS */}
      <VideoGuideSection category="safety" language={language} />

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
            setCurrentPage('services');
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
