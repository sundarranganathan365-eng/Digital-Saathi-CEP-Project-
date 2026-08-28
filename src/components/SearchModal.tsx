import React, { useState, useEffect, useRef } from 'react';
import { PageId, Language } from '../types';
import { Search, X, ArrowRight, BookOpen, Shield, Smartphone, FileText, HelpCircle } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId, sectionId?: string) => void;
  language?: Language;
}

interface LocalizedSearchEntry {
  titleEn: string;
  titleHi: string;
  titleMr: string;
  categoryEn: string;
  categoryHi: string;
  categoryMr: string;
  page: PageId;
  sectionId?: string;
  summaryEn: string;
  summaryHi: string;
  summaryMr: string;
  icon: React.ReactNode;
}

const SEARCH_DATABASE: LocalizedSearchEntry[] = [
  {
    titleEn: 'UPI Payment Fundamentals',
    titleHi: 'UPI भुगतान की बुनियादी बातें',
    titleMr: 'UPI पेमेंट्स मूलभूत माहिती',
    categoryEn: 'Digital Payments',
    categoryHi: 'डिजिटल भुगतान (UPI)',
    categoryMr: 'डिजिटल पेमेंट्स',
    page: 'payments',
    sectionId: 'what-is-upi',
    summaryEn: 'What Unified Payments Interface is, how VPA IDs work, and real-time bank transfers.',
    summaryHi: 'UPI क्या है, VPA आईडी कैसे काम करती है और 24/7 बैंक लेनदेन।',
    summaryMr: 'UPI काय आहे, VPA आयडी कसा चालतो आणि बँक व्यवहार.',
    icon: <BookOpen className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'How to make a UPI Payment (7-Step Guide)',
    titleHi: 'सुरक्षित UPI भुगतान करने के 7 चरण',
    titleMr: 'सुरक्षित UPI पेमेंटच्या ७ पायऱ्या',
    categoryEn: 'Digital Payments',
    categoryHi: 'डिजिटल भुगतान (UPI)',
    categoryMr: 'डिजिटल पेमेंट्स',
    page: 'payments',
    sectionId: 'how-to-pay',
    summaryEn: 'Scanning QR codes, entering amounts, verifying recipient names, and typing UPI PIN safely.',
    summaryHi: 'QR कोड स्कैन करना, राशि डालना, नाम जांचना और गोपनीय पिन डालना।',
    summaryMr: 'QR कोड स्कॅन करणे, नाव तपासणे आणि सुरक्षितपणे पिन टाकणे.',
    icon: <BookOpen className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'UPI PIN Golden Rules (Never required to receive money)',
    titleHi: 'UPI PIN के सुनहरे नियम (पैसे पाने के लिए पिन की जरूरत नहीं)',
    titleMr: 'UPI PIN चे सुवर्ण नियम (पैसे मिळवण्यासाठी पिन लागत नाही)',
    categoryEn: 'Digital Payments',
    categoryHi: 'डिजिटल भुगतान (UPI)',
    categoryMr: 'डिजिटल पेमेंट्स',
    page: 'payments',
    sectionId: 'golden-rules',
    summaryEn: 'Crucial distinction: Entering PIN only debits money. Receiving money never requires a PIN.',
    summaryHi: 'पिन डालने से हमेशा पैसे कटते हैं। पैसे प्राप्त करने के लिए पिन नहीं लगता।',
    summaryMr: 'पिन टाकल्याने पैसे कट होतात. पैसे मिळवण्यासाठी पिन टाकावा लागत नाही.',
    icon: <Shield className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'Phishing & Fake SMS Links',
    titleHi: 'फर्जी SMS एवं फेक KYC लिंक से बचाव',
    titleMr: 'बनावट SMS आणि खोट्या KYC लिंक्स',
    categoryEn: 'Online Safety',
    categoryHi: 'ऑनलाइन सुरक्षा',
    categoryMr: 'सायबर सुरक्षा',
    page: 'safety',
    sectionId: 'phishing',
    summaryEn: 'Recognizing fake bank KYC warnings, electricity cutoff SMS, and malicious URLs.',
    summaryHi: 'बैंक KYC और बिजली बिल कटने के फर्जी संदेशों को पहचानना।',
    summaryMr: 'वीज बिल व बँक KYC च्या बनावट मेसेजपासून संरक्षण.',
    icon: <Shield className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'OTP Scams & Never Sharing Passwords',
    titleHi: 'OTP स्कैम एवं पासवर्ड की गोपनीयता',
    titleMr: 'OTP फसवणूक आणि पासवर्ड सुरक्षा',
    categoryEn: 'Online Safety',
    categoryHi: 'ऑनलाइन सुरक्षा',
    categoryMr: 'सायबर सुरक्षा',
    page: 'safety',
    sectionId: 'otp-scams',
    summaryEn: 'Why One-Time Passwords must never be read out over phone calls or entered into unverified forms.',
    summaryHi: 'फोन कॉल पर किसी के साथ भी OTP या पासवर्ड साझा न करने के नियम।',
    summaryMr: 'फोनवर कोणालाही OTP का सांगू नये याचे नियम.',
    icon: <Shield className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'Fake Customer Care & Helpline Numbers',
    titleHi: 'गूगल सर्च पर फर्जी कस्टमर केयर नंबर से बचाव',
    titleMr: 'गुगल सर्चवरील बनावट कस्टमर केअर नंबर',
    categoryEn: 'Online Safety',
    categoryHi: 'ऑनलाइन सुरक्षा',
    categoryMr: 'सायबर सुरक्षा',
    page: 'safety',
    sectionId: 'fake-helplines',
    summaryEn: 'Avoiding tampered Google Maps helpline numbers; where to find genuine bank phone numbers.',
    summaryHi: 'सर्च इंजन के विज्ञापनों में फर्जी नंबरों से बचें; असली बैंक नंबर कहां देखें।',
    summaryMr: 'पासबुकवरून किंवा कार्डवरूनच अधिकृत नंबर कसा मिळवावा.',
    icon: <Shield className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'Cyber Crime Helpline 1930 & Golden Hour',
    titleHi: 'राष्ट्रीय साइबर अपराध हेल्पलाइन 1930 और गोल्डन ऑवर',
    titleMr: 'राष्ट्रीय सायबर हेल्पलाइन १९३० आणि गोल्डन अवर',
    categoryEn: 'Online Safety',
    categoryHi: 'ऑनलाइन सुरक्षा',
    categoryMr: 'सायबर सुरक्षा',
    page: 'safety',
    sectionId: 'cyber-helpline',
    summaryEn: 'Immediate steps after financial fraud: dialing 1930 within 2 hours to freeze illicit transfers.',
    summaryHi: 'धोखाधड़ी होने पर 2 घंटे के भीतर 1930 पर कॉल करके पैसे फ्रीज कराना।',
    summaryMr: 'पैसे चोरी झाल्यास २ तासांत १९३० वर फोन करून पैसे गोठवणे.',
    icon: <Shield className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'Smartphone & Home Screen Basics',
    titleHi: 'स्मार्टफोन और होम स्क्रीन की बुनियादी बातें',
    titleMr: 'स्मार्टफोन व होम स्क्रीन मूलभूत माहिती',
    categoryEn: 'Digital Basics',
    categoryHi: 'डिजिटल बुनियादी बातें',
    categoryMr: 'डिजिटल मूलभूत माहिती',
    page: 'basics',
    sectionId: 'smartphone-basics',
    summaryEn: 'Touch gestures, managing volume, quick settings, Wi-Fi connections, and mobile cellular data.',
    summaryHi: 'स्क्रीन छूना, वॉल्यूम, वाई-फाई और मोबाइल डेटा का उपयोग।',
    summaryMr: 'टच स्क्रीन, आवाज, वाय-फाय आणि मोबाईल डेटा कसा वापरावा.',
    icon: <Smartphone className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'Screen Lock & Strong PIN Hygiene (Why Weak PINs Fail)',
    titleHi: 'स्क्रीन लॉक और मजबूत पिन (1234 व जन्म वर्ष से बचाव)',
    titleMr: 'स्क्रीन लॉक व मजबूत पिन (१२३४ व वाढदिवस का टाळावा)',
    categoryEn: 'Digital Basics',
    categoryHi: 'डिजिटल बुनियादी बातें',
    categoryMr: 'डिजिटल मूलभूत माहिती',
    page: 'basics',
    sectionId: 'screen-lock',
    summaryEn: 'Why weak PINs like 1234, 0000, or birth years fail; setting 6-digit random PINs and biometrics.',
    summaryHi: '1234, 0000 या जन्म वर्ष जैसे कमजोर पिन के खतरे और 6-अंकों के सुरक्षित पिन के नियम।',
    summaryMr: '१२३४, ०००० किंवा वाढदिवसाचा पिन का ठेवू नये आणि सुरक्षित ६-अंकी पिन कसा ठेवावा.',
    icon: <Shield className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'SIM Card Lock PIN & Eject Theft Defense',
    titleHi: 'सिम कार्ड लॉक पिन एवं इजेक्ट चोरी से सुरक्षा',
    titleMr: 'सिम कार्ड लॉक पिन व सिम चोरीपासून संरक्षण',
    categoryEn: 'Digital Basics',
    categoryHi: 'डिजिटल बुनियादी बातें',
    categoryMr: 'डिजिटल मूलभूत माहिती',
    page: 'basics',
    sectionId: 'sim-lock',
    summaryEn: 'Why thieves steal SIM cards to bypass screen locks & intercept Bank OTPs; enabling SIM PIN on Android/iOS.',
    summaryHi: 'सिम कार्ड निकालकर बैंक OTP चुराने के खतरे और एंड्रॉयड/आईफोन में SIM Lock PIN चालू करने का तरीका।',
    summaryMr: 'सिम कार्ड काढून बँकेचा OTP चोरण्यापासून संरक्षण आणि मोबाईलमध्ये सिम लॉक कसा चालू करावा.',
    icon: <Shield className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'Safe App Installation & Permissions',
    titleHi: 'सुरक्षित ऐप डाउनलोड और परमिशन की जांच',
    titleMr: 'सुरक्षित ॲप डाऊनलोड व परवानग्या',
    categoryEn: 'Digital Basics',
    categoryHi: 'डिजिटल बुनियादी बातें',
    categoryMr: 'डिजिटल मूलभूत माहिती',
    page: 'basics',
    sectionId: 'app-basics',
    summaryEn: 'Installing only from Google Play Store, avoiding unknown APK files, and checking app permissions.',
    summaryHi: 'केवल प्ले स्टोर से ऐप लेना, APK फाइलों से बचना और SMS परमिशन न देना।',
    summaryMr: 'फक्त अधिकृत प्ले स्टोअर वापरणे आणि संशयास्पद परवानग्या नाकारणे.',
    icon: <Smartphone className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'DigiLocker & Cloud Document Storage',
    titleHi: 'डिजीलॉकर (DigiLocker) और सरकारी दस्तावेज',
    titleMr: 'डिजीलॉकर (DigiLocker) शासकीय कागदपत्रे',
    categoryEn: 'Digital Services',
    categoryHi: 'सरकारी डिजिटल सेवाएं',
    categoryMr: 'शासकीय डिजिटल सेवा',
    page: 'services',
    sectionId: 'digilocker',
    summaryEn: 'Government-issued digital documents: Aadhaar, Driving License, RC, and legal validity under IT Act.',
    summaryHi: 'आधार, ड्राइविंग लाइसेंस आदि डिजिटल रूप से सुरक्षित रखने की सरकारी सेवा।',
    summaryMr: 'आधार, ड्रायव्हिंग लायसन्स डिजिटल स्वरूपात सुरक्षित ठेवणे.',
    icon: <FileText className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'Official Government Domains (.gov.in & .nic.in)',
    titleHi: 'असली सरकारी वेबसाइट्स की पहचान (.gov.in)',
    titleMr: 'अधिकृत सरकारी संकेतस्थळे (.gov.in)',
    categoryEn: 'Digital Services',
    categoryHi: 'सरकारी डिजिटल सेवाएं',
    categoryMr: 'शासकीय डिजिटल सेवा',
    page: 'services',
    sectionId: 'gov-portals',
    summaryEn: 'How to verify genuine central and state government portals and avoid fake clones.',
    summaryHi: 'वेबसाइट के अंत में .gov.in या .nic.in जांचकर फर्जी साइटों से बचना।',
    summaryMr: 'वेबसाईटच्या शेवटी .gov.in तपासून खोट्या संकेतस्थळांपासून संरक्षण.',
    icon: <FileText className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'Masked Aadhaar Safety Practice',
    titleHi: 'मास्क आधार (Masked Aadhaar) सुरक्षा नियम',
    titleMr: 'मास्क आधार (Masked Aadhaar) सुरक्षितता',
    categoryEn: 'Digital Services',
    categoryHi: 'सरकारी डिजिटल सेवाएं',
    categoryMr: 'शासकीय डिजिटल सेवा',
    page: 'services',
    sectionId: 'masked-aadhaar',
    summaryEn: 'Protecting your identity by sharing copies with first 8 digits hidden.',
    summaryHi: 'होटल या निजी जगहों पर पहले 8 अंक छिपे हुए आधार का उपयोग करना।',
    summaryMr: 'पहिले ८ आकडे लपलेले सुरक्षित आधार कार्ड वापरणे.',
    icon: <FileText className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'Interactive 10-Question Knowledge Quiz',
    titleHi: '10 प्रश्नों का इंटरैक्टिव ज्ञान क्विज़',
    titleMr: '१० प्रश्नांची ज्ञान चाचणी (क्विझ)',
    categoryEn: 'Learn & Test',
    categoryHi: 'ज्ञान अभ्यास व टेस्ट',
    categoryMr: 'ज्ञान चाचणी',
    page: 'quiz',
    summaryEn: 'Test your understanding of digital literacy, UPI precautions, and online scam identification.',
    summaryHi: 'डिजिटल साक्षरता, UPI सुरक्षा और ऑनलाइन स्कैम पहचानने की अपनी समझ परखें।',
    summaryMr: 'UPI सुरक्षा, पासवर्ड आणि सायबर फसवणूक ओळखण्याची माहिती तपासा.',
    icon: <HelpCircle className="w-4 h-4 text-[#525252]" />,
  },
  {
    titleEn: 'Official YouTube Video Guides & Tutorials (RBI, CyberDost, UIDAI)',
    titleHi: 'आधिकारिक यूट्यूब वीडियो ट्यूटोरियल (RBI, साइबर दोस्त, UIDAI)',
    titleMr: 'अधिकृत यूट्यूब व्हिडिओ मार्गदर्शन (RBI, सायबर दोस्त, UIDAI)',
    categoryEn: 'Video Tutorials',
    categoryHi: 'वीडियो ट्यूटोरियल',
    categoryMr: 'व्हिडिओ मार्गदर्शन',
    page: 'basics',
    summaryEn: 'Watch direct step-by-step video explainers for SIM lock, UPI safety, 1930 Helpline, and DigiLocker.',
    summaryHi: 'सिम लॉक, UPI सुरक्षा, 1930 हेल्पलाइन और डिजीलॉकर के लिए सीधे यूट्यूब वीडियो ट्यूटोरियल।',
    summaryMr: 'सिम लॉक, UPI सुरक्षा, १९३० हेल्पलाईन आणि डिजीलॉकरचे थेट यूट्यूब व्हिडिओ.',
    icon: <Shield className="w-4 h-4 text-red-600" />,
  },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate, language = 'en' }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else inputRef.current?.focus();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getEntryTitle = (item: LocalizedSearchEntry) => {
    if (language === 'hi') return item.titleHi;
    if (language === 'mr') return item.titleMr;
    return item.titleEn;
  };

  const getEntryCategory = (item: LocalizedSearchEntry) => {
    if (language === 'hi') return item.categoryHi;
    if (language === 'mr') return item.categoryMr;
    return item.categoryEn;
  };

  const getEntrySummary = (item: LocalizedSearchEntry) => {
    if (language === 'hi') return item.summaryHi;
    if (language === 'mr') return item.summaryMr;
    return item.summaryEn;
  };

  const placeholderText = language === 'hi'
    ? 'विषय खोजें (उदा. UPI, OTP, डिजीलॉकर, आधार, स्कैम...)'
    : language === 'mr'
    ? 'विषय शोधा (उदा. UPI, OTP, डिजीलॉकर, सायबर फसवणूक...)'
    : 'Search topics (e.g. UPI, OTP, DigiLocker, KYC, Scams...)';

  const clearText = language === 'hi' ? 'साफ़ करें' : language === 'mr' ? 'हटवा' : 'Clear';

  const filtered = query.trim() === ''
    ? SEARCH_DATABASE.slice(0, 6)
    : SEARCH_DATABASE.filter(item => {
        const q = query.toLowerCase();
        return (
          item.titleEn.toLowerCase().includes(q) ||
          item.titleHi.toLowerCase().includes(q) ||
          item.titleMr.toLowerCase().includes(q) ||
          item.summaryEn.toLowerCase().includes(q) ||
          item.summaryHi.toLowerCase().includes(q) ||
          item.summaryMr.toLowerCase().includes(q) ||
          item.categoryEn.toLowerCase().includes(q) ||
          item.categoryHi.toLowerCase().includes(q) ||
          item.categoryMr.toLowerCase().includes(q)
        );
      });

  const handleSelect = (item: LocalizedSearchEntry) => {
    onNavigate(item.page, item.sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white border border-[#D4D4D4] rounded shadow-xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Search input header */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E5E5E5] gap-3">
          <Search className="w-5 h-5 text-[#737373] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholderText}
            className="w-full bg-transparent border-none text-sm sm:text-base text-[#171717] placeholder:text-[#A3A3A3] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#737373] hover:text-[#171717] px-1.5 py-0.5"
            >
              {clearText}
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#737373] hover:text-[#171717] rounded hover:bg-[#F5F5F4]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-[#F5F5F4]">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item)}
                className="w-full text-left p-3 rounded hover:bg-[#FAF9F6] transition-colors flex items-start justify-between gap-3 group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#F5F5F4] border border-[#E5E5E5] rounded group-hover:bg-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-[#737373] uppercase tracking-wider">
                        {getEntryCategory(item)}
                      </span>
                    </div>
                    <h5 className="text-sm font-semibold text-[#171717] group-hover:text-blue-900 transition-colors">
                      {getEntryTitle(item)}
                    </h5>
                    <p className="text-xs text-[#525252] mt-0.5 line-clamp-1">
                      {getEntrySummary(item)}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#171717] group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
              </button>
            ))
          ) : (
            <div className="py-12 text-center text-xs text-[#737373]">
              {language === 'hi'
                ? `"${query}" के लिए कोई परिणाम नहीं मिला। UPI, OTP या डिजीलॉकर खोज कर देखें।`
                : language === 'mr'
                ? `"${query}" साठी कोणतीही माहिती आढळली नाही. UPI, OTP किंवा डिजीलॉकर शोधा.`
                : `No matching guides found for "${query}". Try searching for UPI, OTP, or DigiLocker.`}
            </div>
          )}
        </div>

        {/* Search Footer */}
        <div className="px-4 py-2.5 bg-[#FAF9F6] border-t border-[#E5E5E5] flex items-center justify-between text-[11px] text-[#737373]">
          <span>
            {language === 'hi'
              ? 'टिप: नेविगेट करने के लिए ↑ ↓ का उपयोग करें • बंद करने के लिए ESC दबाएं'
              : language === 'mr'
              ? 'टीप: निवडण्यासाठी ↑ ↓ वापरा • बंद करण्यासाठी ESC दाबा'
              : 'Tip: Use ↑ ↓ to navigate • ESC to close'}
          </span>
          <span>Digital Saathi Public Knowledge Base</span>
        </div>
      </div>
    </div>
  );
};
