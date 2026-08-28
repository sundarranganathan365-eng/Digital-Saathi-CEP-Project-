import { Language } from '../types';

export interface TranslationDict {
  siteTitle: string;
  tagline: string;
  secondaryMessage: string;
  nav: {
    home: string;
    basics: string;
    payments: string;
    safety: string;
    services: string;
    quiz: string;
    about: string;
    startLearning: string;
    searchPlaceholder: string;
  };
  hero: {
    headingPart1: string;
    headingAccent: string;
    headingPart2: string;
    subheading: string;
    description: string;
    btnStart: string;
    btnSafety: string;
    badge: string;
    highlights: {
      freeTitle: string;
      freeSub: string;
      jargonTitle: string;
      jargonSub: string;
      indiaTitle: string;
      indiaSub: string;
    };
    compass: {
      title: string;
      badge: string;
      upiTitle: string;
      upiDesc: string;
      otpTitle: string;
      otpDesc: string;
      portalTitle: string;
      portalDesc: string;
      helplineLabel: string;
      dial: string;
    };
  };
  intentChooser: {
    heading: string;
    subheading: string;
    optionPhone: string;
    optionPhoneDesc: string;
    optionPayments: string;
    optionPaymentsDesc: string;
    optionSafety: string;
    optionSafetyDesc: string;
    optionServices: string;
    optionServicesDesc: string;
    ctaLabel: string;
  };
  whyMatters: {
    tag: string;
    heading: string;
    subheading: string;
    description: string;
    pillars: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  modules: {
    tag: string;
    heading: string;
    subheading: string;
    mod1Title: string;
    mod1Desc: string;
    mod1Cta: string;
    mod2Title: string;
    mod2Desc: string;
    mod2Cta: string;
    mod3Title: string;
    mod3Desc: string;
    mod3Cta: string;
    mod4Title: string;
    mod4Desc: string;
    mod4Cta: string;
  };
  spotScam: {
    tag: string;
    title: string;
    subtitle: string;
    question: string;
    promptDesc: string;
    btnSafe: string;
    btnScam: string;
    simulatedTag: string;
    incomingNotification: string;
    justNow: string;
    correctTitle: string;
    incorrectTitle: string;
    scamBadge: string;
    safeBadge: string;
    classLabel: string;
    warningSignsTitle: string;
    safetyRuleTitle: string;
    nextScenario: string;
    caseLabel: string;
    ofLabel: string;
  };
  quizBanner: {
    tag: string;
    title: string;
    description: string;
    btnText: string;
  };
  footer: {
    tagline: string;
    aboutCep: string;
    helplineAlertTitle: string;
    actFastBadge: string;
    helplineAlertDesc: string;
    helplineNum: string;
    curriculumTitle: string;
    essentialSafetyTitle: string;
    emergencyContactsTitle: string;
    safety1: string;
    safety2: string;
    safety3: string;
    safety4: string;
    disclaimer: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    siteTitle: 'Digital Saathi',
    tagline: 'Making Technology Easier for Everyone.',
    secondaryMessage: 'Learn. Understand. Stay Safe.',
    nav: {
      home: 'Home',
      basics: 'Digital Basics',
      payments: 'Digital Payments',
      safety: 'Online Safety',
      services: 'Digital Services',
      quiz: 'Learn & Test',
      about: 'About Project',
      startLearning: 'Start Learning',
      searchPlaceholder: 'Search topics (UPI, OTP, DigiLocker, Scams...)',
    },
    hero: {
      headingPart1: 'Making technology',
      headingAccent: 'easier & safer',
      headingPart2: 'for everyone.',
      subheading: 'Making Technology Easier for Everyone.',
      description: 'Learn how to use everyday digital services, make safer online payments, identify scams, and confidently navigate the digital world.',
      btnStart: 'Start Learning',
      btnSafety: 'Stay Safe Online',
      badge: 'Open-Source Social Initiative • BSc CS Project',
      highlights: {
        freeTitle: '100% Free',
        freeSub: 'Open Educational Access',
        jargonTitle: 'Zero Jargon',
        jargonSub: 'Clear Everyday Language',
        indiaTitle: 'India-Centric',
        indiaSub: 'UPI, DigiLocker & SMS',
      },
      compass: {
        title: 'Digital Safety Compass',
        badge: 'STEP-BY-STEP',
        upiTitle: 'UPI Safety Rule',
        upiDesc: 'Entering a PIN is only for sending money. Receiving money never needs a PIN.',
        otpTitle: 'OTP Confidentiality',
        otpDesc: 'Bank staff and customer care representatives will never ask you to read out an OTP.',
        portalTitle: 'Official Portals',
        portalDesc: 'Always check the browser URL. Indian government portals end with .gov.in.',
        helplineLabel: 'Need immediate cyber assistance?',
        dial: 'Dial 1930',
      },
    },
    intentChooser: {
      heading: 'What would you like help with?',
      subheading: 'Choose a topic to begin learning step-by-step. No technical knowledge required.',
      optionPhone: 'Learn to use my phone',
      optionPhoneDesc: 'Home screen, apps, Wi-Fi, searching the internet, and basic smartphone settings.',
      optionPayments: 'Understand digital payments',
      optionPaymentsDesc: 'Safe UPI payments, scanning QR codes, and Golden Rules for PIN security.',
      optionSafety: 'Stay safe from scams',
      optionSafetyDesc: 'How to spot fake SMS, emergency fraud helpline 1930, and checking before clicking.',
      optionServices: 'Use online services',
      optionServicesDesc: 'Official government documents on DigiLocker, Masked Aadhaar, and .gov.in portals.',
      ctaLabel: 'Open Guide',
    },
    whyMatters: {
      tag: 'Context & Relevance',
      heading: 'Why Digital Literacy Matters',
      subheading: 'Technology is becoming part of everyday life, but not everyone has the knowledge or confidence to use it safely. Digital Saathi provides simple, practical guidance for common digital tasks.',
      description: 'Simple guides built for elderly citizens, parents, and first-time smartphone users.',
      pillars: [
        {
          num: '01 / Independence',
          title: 'Everyday Autonomy',
          desc: 'Empowering senior citizens and first-time smartphone owners to recharge, book travel, and check information without relying on middlemen.',
        },
        {
          num: '02 / Financial Security',
          title: 'Safe Transactions',
          desc: 'Understanding UPI QR codes, debit card precautions, and transaction alerts prevents life savings from being siphoned by fraudulent payment requests.',
        },
        {
          num: '03 / Scam Defense',
          title: 'Fraud Immunity',
          desc: 'Recognizing manipulative social engineering, urgency tactics, fake KYC warnings, and malicious link attachments before clicking.',
        },
        {
          num: '04 / Civic Access',
          title: 'Public Services',
          desc: 'Accessing verified citizen documents, DigiLocker records, pension certificates, and government portals safely and officially.',
        },
      ],
    },
    modules: {
      tag: 'Curriculum Overview',
      heading: 'Structured Learning Modules',
      subheading: 'Step-by-step guides crafted with large readable typography and plain language.',
      mod1Title: 'Digital Basics',
      mod1Desc: 'Learn smartphone home screen navigation, touch gestures, volume & Wi-Fi management, safe web searching, and app permission controls.',
      mod1Cta: 'Explore Smartphone & Internet Basics',
      mod2Title: 'Digital Payments & UPI',
      mod2Desc: 'Understand how Unified Payments Interface (UPI) works, step-by-step QR code scanning, recipient verification, and the Golden Rules of PIN security.',
      mod2Cta: 'Explore Safe Payment Practices',
      mod3Title: 'Online Safety & Fraud Prevention',
      mod3Desc: 'Identify phishing messages, electricity bill cutoff scams, fake customer care numbers, suspicious APK installations, and comparative DO / DON\'T rules.',
      mod3Cta: 'Explore Fraud Defense & Helpline Rules',
      mod4Title: 'Digital Public Services',
      mod4Desc: 'Learn to access government records on DigiLocker, verify official .gov.in domains, practice Masked Aadhaar safety, and submit online forms securely.',
      mod4Cta: 'Explore Public Services & DigiLocker',
    },
    spotScam: {
      tag: 'Interactive Verification Exercise',
      title: 'Can You Spot the Scam?',
      subtitle: 'Test your scam-detection skills with simulated real-world messages. No real data is collected.',
      question: 'Is this message Safe or a Scam?',
      promptDesc: 'Analyze the sender, language, urgency, and links before deciding.',
      btnSafe: 'This is Legitimate / Safe',
      btnScam: 'This is a Scam',
      simulatedTag: 'Simulated Educational Example',
      incomingNotification: 'Incoming Notification',
      justNow: 'Just Now',
      correctTitle: 'Correct Analysis!',
      incorrectTitle: 'Careful — Review the Breakdown:',
      scamBadge: 'Scam / Fraudulent',
      safeBadge: 'Legitimate Notification',
      classLabel: 'Classification:',
      warningSignsTitle: 'Warning Signs Identified:',
      safetyRuleTitle: 'Key Safety Rule:',
      nextScenario: 'Try Next Scenario',
      caseLabel: 'Case',
      ofLabel: 'of',
    },
    quizBanner: {
      tag: 'Module 05 • Knowledge Assessment',
      title: 'Ready to test your digital literacy?',
      description: 'Take our interactive 10-question evaluation covering payments, password safety, and online verification. Instant score and detailed rationales provided.',
      btnText: 'Take Knowledge Test',
    },
    footer: {
      tagline: 'Making Technology Easier for Everyone.',
      aboutCep: 'An open-source digital literacy and safety educational platform built as a 3rd-Year BSc Computer Science Community Engagement Project (CEP) on the theme: “Building Open-Source Solutions for Social Problems.”',
      helplineAlertTitle: 'Victim of Online Financial Fraud?',
      actFastBadge: 'ACT WITHIN 2 HOURS',
      helplineAlertDesc: 'Immediately call the National Cyber Crime Helpline: 1930 or register an online complaint at cybercrime.gov.in to help freeze stolen bank funds during the crucial Golden Hour.',
      helplineNum: '1930',
      curriculumTitle: 'Curriculum',
      essentialSafetyTitle: 'Essential Safety Rules',
      emergencyContactsTitle: 'National Helplines (India)',
      safety1: 'Never enter UPI PIN to receive money',
      safety2: 'Never share OTP / CVV with anyone on call',
      safety3: 'Verify government domains end with .gov.in',
      safety4: 'Never install remote APK / screen-share apps',
      disclaimer: 'Educational Disclaimer: Digital Saathi is an independent social awareness project created solely for public education. It is not affiliated with any bank, commercial financial institution, or government agency.',
      copyright: '© 2026 Digital Saathi • Open-Source Educational Initiative',
    },
  },
  hi: {
    siteTitle: 'डिजिटल साथी',
    tagline: 'तकनीक को सभी के लिए आसान और सुरक्षित बनाना।',
    secondaryMessage: 'सीखें। समझें। सुरक्षित रहें।',
    nav: {
      home: 'मुख्य पृष्ठ',
      basics: 'डिजिटल बुनियादी बातें',
      payments: 'डिजिटल भुगतान (UPI)',
      safety: 'ऑनलाइन सुरक्षा व धोखाधड़ी बचाव',
      services: 'सरकारी डिजिटल सेवाएं',
      quiz: 'ज्ञान अभ्यास व टेस्ट',
      about: 'प्रोजेक्ट के बारे में',
      startLearning: 'सीखना शुरू करें',
      searchPlaceholder: 'विषय खोजें (UPI, OTP, डिजीलॉकर, फर्जी मैसेज...)',
    },
    hero: {
      headingPart1: 'तकनीक को सभी के लिए',
      headingAccent: 'आसान और सुरक्षित',
      headingPart2: 'बनाना।',
      subheading: 'तकनीक को सभी के लिए आसान और सुरक्षित बनाना।',
      description: 'रोजमर्रा की डिजिटल सेवाओं का उपयोग करना सीखें, सुरक्षित UPI भुगतान करें, धोखाधड़ी व स्कैम पहचानें और विश्वास के साथ स्मार्टफोन का उपयोग करें।',
      btnStart: 'सीखना शुरू करें',
      btnSafety: 'ऑनलाइन सुरक्षा सीखें',
      badge: 'ओपन-सोर्स सामाजिक पहल • BSc CS प्रोजेक्ट',
      highlights: {
        freeTitle: '100% निःशुल्क',
        freeSub: 'सार्वजनिक शैक्षणिक उपयोग',
        jargonTitle: 'सरल भाषा',
        jargonSub: 'बिना किसी तकनीकी उलझन के',
        indiaTitle: 'भारत-केंद्रित',
        indiaSub: 'UPI, डिजीलॉकर एवं SMS',
      },
      compass: {
        title: 'डिजिटल सुरक्षा दिशा-निर्देश',
        badge: 'चरणबद्ध नियम',
        upiTitle: 'UPI सुरक्षा नियम',
        upiDesc: 'UPI PIN केवल पैसे भेजने (कटने) के लिए होता है। पैसे प्राप्त करने के लिए PIN की आवश्यकता कभी नहीं होती।',
        otpTitle: 'OTP की गोपनीयता',
        otpDesc: 'बैंक कर्मचारी या अधिकारी कभी भी आपसे फोन पर OTP नहीं मांगते।',
        portalTitle: 'आधिकारिक वेबसाइट',
        portalDesc: 'हमेशा वेबसाइट का पता जांचें। भारत सरकार के पोर्टल के अंत में .gov.in होता है।',
        helplineLabel: 'साइबर धोखाधड़ी होने पर तुरंत सहायता?',
        dial: 'कॉल करें 1930',
      },
    },
    intentChooser: {
      heading: 'आप किस विषय में सहायता चाहते हैं?',
      subheading: 'चरण-दर-चरण सीखने के लिए एक विषय चुनें। किसी तकनीकी पूर्व-ज्ञान की आवश्यकता नहीं।',
      optionPhone: 'स्मार्टफोन चलाना सीखें',
      optionPhoneDesc: 'होम स्क्रीन, ऐप खोलना, इंटरनेट सर्च और बुनियादी फोन सेटिंग्स।',
      optionPayments: 'डिजिटल भुगतान (UPI) समझें',
      optionPaymentsDesc: 'सुरक्षित UPI लेनदेन, QR कोड स्कैन करना और PIN सुरक्षा के सुनहरे नियम।',
      optionSafety: 'ऑनलाइन धोखाधड़ी से सुरक्षित रहें',
      optionSafetyDesc: 'फर्जी SMS पहचानना, आपातकालीन हेल्पलाइन 1930 और क्लिक करने से पहले जांच।',
      optionServices: 'सरकारी डिजिटल सेवाएं इस्तेमाल करें',
      optionServicesDesc: 'डिजीलॉकर पर सरकारी दस्तावेज, मास्क आधार और .gov.in पोर्टल की पहचान।',
      ctaLabel: 'मार्गदर्शिका खोलें',
    },
    whyMatters: {
      tag: 'महत्व एवं प्रासंगिकता',
      heading: 'डिजिटल साक्षरता क्यों जरूरी है?',
      subheading: 'तकनीक हमारे दैनिक जीवन का हिस्सा बन रही है, लेकिन हर किसी के पास इसे सुरक्षित रूप से उपयोग करने का ज्ञान या आत्मविश्वास नहीं है। डिजिटल साथी सरल व व्यावहारिक मार्गदर्शन देता है।',
      description: 'बुजुर्गों, अभिभावकों और नए स्मार्टफोन उपयोगकर्ताओं के लिए तैयार की गई आसान मार्गदर्शिका।',
      pillars: [
        {
          num: '01 / आत्मनिर्भरता',
          title: 'दैनिक स्वतंत्रता',
          desc: 'वरिष्ठ नागरिकों और नए स्मार्टफोन उपयोगकर्ताओं को बिना किसी बिचौलिए या दूसरों पर निर्भर हुए रिचार्ज, टिकट बुकिंग और जानकारी प्राप्त करने में सक्षम बनाना।',
        },
        {
          num: '02 / वित्तीय सुरक्षा',
          title: 'सुरक्षित लेनदेन',
          desc: 'UPI QR कोड, डेबिट कार्ड सावधानियों और लेनदेन अलर्ट को समझना ताकि जीवन भर की कमाई को धोखाधड़ी से सुरक्षित रखा जा सके।',
        },
        {
          num: '03 / स्कैम से बचाव',
          title: 'धोखाधड़ी से सुरक्षा',
          desc: 'झूठे KYC संदेशों, फर्जी बिजली बिल चेतावनियों और अनजान लिंक को क्लिक करने से पहले पहचानना।',
        },
        {
          num: '04 / नागरिक सेवाएं',
          title: 'सरकारी डिजिटल सेवाएं',
          desc: 'डिजीलॉकर, आधार कार्ड और सरकारी सेवाओं का सुरक्षित व प्रामाणिक उपयोग करना।',
        },
      ],
    },
    modules: {
      tag: 'पाठ्यक्रम रूपरेखा',
      heading: 'संरचित अध्ययन मॉड्यूल',
      subheading: 'बड़े और स्पष्ट अक्षरों में तैयार की गई चरणबद्ध और आसान मार्गदर्शिका।',
      mod1Title: 'डिजिटल बुनियादी बातें',
      mod1Desc: 'स्मार्टफोन चलाना, होम स्क्रीन, वाई-फाई कनेक्ट करना, सुरक्षित इंटरनेट सर्च और ऐप परमिशन समझना सीखें।',
      mod1Cta: 'स्मार्टफोन व इंटरनेट की बुनियादी बातें देखें',
      mod2Title: 'डिजिटल भुगतान और UPI',
      mod2Desc: 'UPI कैसे काम करता है, QR कोड स्कैन करना, नाम की पुष्टि करना और PIN सुरक्षा के सुनहरे नियम सीखें।',
      mod2Cta: 'सुरक्षित भुगतान के नियम जानें',
      mod3Title: 'ऑनलाइन सुरक्षा एवं धोखाधड़ी से बचाव',
      mod3Desc: 'फिशिंग मैसेज, बिजली बिल स्कैम, फर्जी कस्टमर केयर नंबर और अनजान ऐप डाउनलोड से बचने के नियम।',
      mod3Cta: 'साइबर सुरक्षा व हेल्पलाइन नियम देखें',
      mod4Title: 'डिजिटल सरकारी सेवाएं',
      mod4Desc: 'डिजीलॉकर पर सरकारी दस्तावेज सुरक्षित रखना, .gov.in वेबसाइट पहचानना और मास्क आधार का उपयोग।',
      mod4Cta: 'सरकारी सेवाएं और डिजीलॉकर देखें',
    },
    spotScam: {
      tag: 'इंटरैक्टिव अभ्यास',
      title: 'क्या आप फर्जी मैसेज (स्कैम) पहचान सकते हैं?',
      subtitle: 'वास्तविक दुनिया के नकली संदेशों के उदाहरणों से अपनी सुरक्षा परखें।',
      question: 'यह संदेश सुरक्षित है या धोखाधड़ी (स्कैम)?',
      promptDesc: 'निर्णय लेने से पहले भेजने वाले का नाम, भाषा, जल्दबाजी और लिंक की जांच करें।',
      btnSafe: 'यह असली / सुरक्षित संदेश है',
      btnScam: 'यह धोखाधड़ी (स्कैम) है',
      simulatedTag: 'शैक्षणिक नकली उदाहरण (Simulated)',
      incomingNotification: 'प्राप्त हुआ संदेश',
      justNow: 'अभी-अभी',
      correctTitle: 'बिल्कुल सही विश्लेषण!',
      incorrectTitle: 'सावधान रहें — विश्लेषण देखें:',
      scamBadge: 'धोखाधड़ी / स्कैम',
      safeBadge: 'प्रामाणिक सुरक्षित संदेश',
      classLabel: 'प्रकार:',
      warningSignsTitle: 'पहचाने गए खतरे के संकेत:',
      safetyRuleTitle: 'मुख्य सुरक्षा नियम:',
      nextScenario: 'अगला उदाहरण देखें',
      caseLabel: 'केस',
      ofLabel: 'कुल',
    },
    quizBanner: {
      tag: 'मॉड्यूल 05 • ज्ञान मूल्यांकन',
      title: 'क्या आप अपनी डिजिटल जानकारी परखने के लिए तैयार हैं?',
      description: 'UPI भुगतान, पासवर्ड सुरक्षा और ऑनलाइन सत्यापन पर आधारित 10 प्रश्नों की अभ्यास परीक्षा दें। तुरंत परिणाम और कारण सहित उत्तर प्राप्त करें।',
      btnText: 'ज्ञान टेस्ट शुरू करें',
    },
    footer: {
      tagline: 'तकनीक को सभी के लिए आसान और सुरक्षित बनाना।',
      aboutCep: 'तृतीय वर्ष बीएससी कंप्यूटर साइंस सामुदायिक सहभागिता परियोजना (CEP) — “सामाजिक समस्याओं के लिए ओपन-सोर्स समाधान” विषय पर विकसित।',
      helplineAlertTitle: 'क्या आप ऑनलाइन वित्तीय धोखाधड़ी के शिकार हुए हैं?',
      actFastBadge: '2 घंटे के भीतर कार्रवाई करें',
      helplineAlertDesc: 'गोल्डन ऑवर में चुराए गए बैंक पैसों को फ्रीज कराने के लिए तुरंत राष्ट्रीय साइबर अपराध हेल्पलाइन: 1930 पर कॉल करें या cybercrime.gov.in पर शिकायत दर्ज करें।',
      helplineNum: '1930',
      curriculumTitle: 'पाठ्यक्रम',
      essentialSafetyTitle: 'अनिवार्य सुरक्षा नियम',
      emergencyContactsTitle: 'राष्ट्रीय हेल्पलाइन (भारत)',
      safety1: 'पैसे प्राप्त करने के लिए कभी भी UPI PIN न डालें',
      safety2: 'फोन पर किसी के साथ OTP या CVV साझा न करें',
      safety3: 'सरकारी वेबसाइट के अंत में .gov.in जांचें',
      safety4: 'स्क्रीन शेयर या अनजान APK ऐप कभी इंस्टॉल न करें',
      disclaimer: 'शैक्षणिक अस्वीकरण: डिजिटल साथी एक स्वतंत्र सामाजिक जागरूकता परियोजना है जो केवल सार्वजनिक शिक्षा के लिए बनाई गई है। यह किसी भी बैंक या सरकारी एजेंसी से संबद्ध नहीं है।',
      copyright: '© 2026 डिजिटल साथी • ओपन-सोर्स शैक्षणिक पहल',
    },
  },
  mr: {
    siteTitle: 'डिजिटल साथी',
    tagline: 'तंत्रज्ञान प्रत्येकासाठी सोपे आणि सुरक्षित बनवणे.',
    secondaryMessage: 'शिका. समजा. सुरक्षित राहा.',
    nav: {
      home: 'मुख्य पान',
      basics: 'डिजिटल मूलभूत माहिती',
      payments: 'डिजिटल पेमेंट्स (UPI)',
      safety: 'ऑनलाइन सुरक्षा व सायबर बचाव',
      services: 'शासकीय डिजिटल सेवा',
      quiz: 'ज्ञान चाचणी (क्विझ)',
      about: 'प्रकल्पाबद्दल',
      startLearning: 'शिकायला सुरुवात करा',
      searchPlaceholder: 'विषय शोधा (UPI, OTP, डिजीलॉकर, सायबर फसवणूक...)',
    },
    hero: {
      headingPart1: 'तंत्रज्ञान प्रत्येकासाठी',
      headingAccent: 'सोपे आणि सुरक्षित',
      headingPart2: 'बनवणे.',
      subheading: 'तंत्रज्ञान प्रत्येकासाठी सोपे आणि सुरक्षित बनवणे.',
      description: 'दैनंदिन डिजिटल सेवांचा वापर करणे शिका, सुरक्षित UPI व्यवहार करा, फसवणूक ओळखा आणि आत्मविश्वासाने स्मार्टफोनचा वापर करा.',
      btnStart: 'शिकायला सुरुवात करा',
      btnSafety: 'सुरक्षितता नियम पहा',
      badge: 'ओपन-सोर्स सामाजिक उपक्रम • BSc CS प्रकल्प',
      highlights: {
        freeTitle: '१००% मोफत',
        freeSub: 'सार्वजनिक शैक्षणिक वापर',
        jargonTitle: 'अतिशय सोपी भाषा',
        jargonSub: 'कोणत्याही कठीण शब्दांशिवाय',
        indiaTitle: 'भारत-केंद्रित माहिती',
        indiaSub: 'UPI, डिजीलॉकर आणि SMS',
      },
      compass: {
        title: 'डिजिटल सुरक्षा दिशादर्शक',
        badge: 'महत्त्वाचे नियम',
        upiTitle: 'UPI चा सुवर्ण नियम',
        upiDesc: 'पिन (PIN) फक्त पैसे पाठवण्यासाठी असतो. खात्यात पैसे येण्यासाठी पिन टाकण्याची अजिबात गरज नसते.',
        otpTitle: 'OTP ची गोपनीयता',
        otpDesc: 'बँक कर्मचारी किंवा अधिकारी कधीही फोनवर तुमचा OTP मागत नाहीत.',
        portalTitle: 'अधिकृत शासकीय वेबसाईट',
        portalDesc: 'नेहमी वेबसाईटचा पत्ता तपासा. सरकारी संकेतस्थळांच्या शेवटी .gov.in असते.',
        helplineLabel: 'सायबर फसवणूक झाल्यास त्वरित मदत?',
        dial: 'कॉल करा १९३०',
      },
    },
    intentChooser: {
      heading: 'तुम्हाला कोणत्या विषयात मदत हवी आहे?',
      subheading: 'सोप्या भाषेत शिकण्यासाठी खालीलपैकी एक पर्याय निवडा. कोणत्याही तांत्रिक ज्ञानाची गरज नाही.',
      optionPhone: 'स्मार्टफोन वापरायला शिका',
      optionPhoneDesc: 'होम स्क्रीन, ॲप्स उघडणे, इंटरनेट सर्च आणि फोनच्या सोप्या सेटिंग्स.',
      optionPayments: 'डिजिटल पेमेंट्स (UPI) समजून घ्या',
      optionPaymentsDesc: 'सुरक्षित UPI पेमेंट्स, QR कोड स्कॅनिंग आणि पिन (PIN) सुरक्षेचे नियम.',
      optionSafety: 'सायबर फसवणुकीपासून सुरक्षित राहा',
      optionSafetyDesc: 'बनावट SMS ओळखणे, सायबर हेल्पलाइन १९३० आणि क्लिक करण्यापूर्वी सावधगिरी.',
      optionServices: 'शासकीय डिजिटल सेवांचा वापर करा',
      optionServicesDesc: 'डिजीलॉकर, मास्क आधार आणि अधिकृत .gov.in सरकारी संकेतस्थळे.',
      ctaLabel: 'माहिती पहा',
    },
    whyMatters: {
      tag: 'महत्त्व आणि गरज',
      heading: 'डिजिटल साक्षरता का महत्त्वाची आहे?',
      subheading: 'तंत्रज्ञान आता आपल्या रोजच्या आयुष्याचा भाग झाले आहे, पण प्रत्येकाला त्याचा सुरक्षित वापर कसा करावा हे माहित नसते. डिजिटल साथी सोपे आणि व्यावहारिक मार्गदर्शन देते.',
      description: 'ज्येष्ठ नागरिक, पालक आणि नवीन स्मार्टफोन वापरकर्त्यांसाठी सोपी नियमावली.',
      pillars: [
        {
          num: '०१ / स्वावलंबन',
          title: 'दैनिक स्वावलंबन',
          desc: 'ज्येष्ठ नागरिक व नवीन स्मार्टफोन वापरकर्त्यांना कोणावरही अवलंबून न राहता स्वतःचे बिल भरणे, रिचार्ज आणि तिकीट बुक करण्यास सक्षम करणे.',
        },
        {
          num: '०२ / आर्थिक सुरक्षा',
          title: 'सुरक्षित आर्थिक व्यवहार',
          desc: 'UPI QR कोड, डेबिट कार्डचे नियम आणि मेसेज समजून घेतल्यास कष्टाची कमाई सायबर चोरांपासून सुरक्षित राहते.',
        },
        {
          num: '०३ / फसवणुकीपासून बचाव',
          title: 'स्कॅमपासून संरक्षण',
          desc: 'बनावट KYC मेसेज, वीज बिल कापण्याची भीती दाखवणारे मेसेज आणि संशयास्पद लिंक्स ओळखण्याची क्षमता निर्माण करणे.',
        },
        {
          num: '०४ / शासकीय सेवा',
          title: 'डिजिटल नागरिक सेवा',
          desc: 'डिजीलॉकर, आधार कार्ड आणि विविध शासकीय योजनांची कागदपत्रे सुरक्षितरीत्या मिळवणे.',
        },
      ],
    },
    modules: {
      tag: 'अभ्यासक्रम',
      heading: 'मार्गदर्शन विभाग (मॉड्यूल्स)',
      subheading: 'मोठ्या व स्पष्ट अक्षरांमध्ये तयार केलेल्या सोप्या पायऱ्या.',
      mod1Title: 'डिजिटल मूलभूत माहिती',
      mod1Desc: 'स्मार्टफोन चालवणे, होम स्क्रीन, सुरक्षित इंटरनेट शोध आणि ॲप परवानग्या समजून घ्या.',
      mod1Cta: 'स्मार्टफोन व इंटरनेटची माहिती पहा',
      mod2Title: 'डिजिटल पेमेंट्स आणि UPI',
      mod2Desc: 'UPI कसे चालते, QR कोड स्कॅन करणे, दुकानदाराचे नाव पडताळणे आणि UPI पिनचे सुरक्षा नियम.',
      mod2Cta: 'सुरक्षित पेमेंट्सचे नियम जाणून घ्या',
      mod3Title: 'ऑनलाइन सुरक्षा व सायबर फसवणूक बचाव',
      mod3Desc: 'फिशिंग मेसेज, वीज बिल स्कॅम, बनावट कस्टमर केअर नंबर आणि अनोळखी ॲप्सपासून संरक्षण.',
      mod3Cta: 'सायबर सुरक्षा व हेल्पलाइन नियम पहा',
      mod4Title: 'शासकीय डिजिटल सेवा',
      mod4Desc: 'डिजीलॉकरवर कागदपत्रे सुरक्षित ठेवणे, .gov.in वेबसाईट ओळखणे आणि मास्क आधार वापरणे.',
      mod4Cta: 'शासकीय सेवा आणि डिजीलॉकर पहा',
    },
    spotScam: {
      tag: 'सराव स्वाध्याय',
      title: 'तुम्ही बनावट मेसेज (स्कॅम) ओळखू शकता का?',
      subtitle: 'दैनंदिन खोट्या मेसेजच्या नमुन्यांवरून तुमची जागरूकता तपासा.',
      question: 'हा मेसेज सुरक्षित आहे की फसवणूक (स्कॅम)?',
      promptDesc: 'निर्णय घेण्यापूर्वी मेसेज पाठवणारा, भाषा आणि दिलेल्या लिंक्स काळजीपूर्वक तपासा.',
      btnSafe: 'हा खरा / सुरक्षित मेसेज आहे',
      btnScam: 'ही फसवणूक (स्कॅम) आहे',
      simulatedTag: 'शैक्षणिक नमुना उदाहरण (Simulated)',
      incomingNotification: 'आलेला मेसेज',
      justNow: 'आत्ताच',
      correctTitle: 'अगदी बरोबर ओळखले!',
      incorrectTitle: 'सावध राहा — खालील विश्लेषण वाचा:',
      scamBadge: 'फसवणूक / स्कॅम',
      safeBadge: 'अधिकृत सुरक्षित मेसेज',
      classLabel: 'प्रकार:',
      warningSignsTitle: 'ओळखलेली धोक्याची लक्षणे:',
      safetyRuleTitle: 'महत्त्वाचा सुरक्षा नियम:',
      nextScenario: 'पुढील उदाहरण पहा',
      caseLabel: 'केस',
      ofLabel: 'पैकी',
    },
    quizBanner: {
      tag: 'मॉड्यूल ०५ • ज्ञान चाचणी',
      title: 'तुमची डिजिटल माहिती तपासण्यासाठी तयार आहात का?',
      description: 'पेमेंट्स, पासवर्ड सुरक्षा आणि ऑनलाईन सुरक्षेवर आधारित १० सोप्या प्रश्नांची चाचणी द्या. तात्काळ गुण आणि कारणासह उत्तरे मिळवा.',
      btnText: 'ज्ञान चाचणी सुरू करा',
    },
    footer: {
      tagline: 'तंत्रज्ञान प्रत्येकासाठी सोपे आणि सुरक्षित बनवणे.',
      aboutCep: 'तृतीय वर्ष बीएससी कॉम्प्युटर सायन्स सामाजिक सहभाग प्रकल्प (CEP) — “सामाजिक समस्यांसाठी ओपन-सोर्स उपाय” या विषयांतर्गत विकसित.',
      helplineAlertTitle: 'सायबर किंवा ऑनलाईन आर्थिक फसवणूक झाली आहे का?',
      actFastBadge: '२ तासांच्या आत तक्रार करा',
      helplineAlertDesc: 'गोल्डन अवरमध्ये चोरी झालेले पैसे गोठवण्यासाठी त्वरित राष्ट्रीय सायबर क्राईम हेल्पलाइन: १९३० वर कॉल करा किंवा cybercrime.gov.in वर तक्रार नोंदवा.',
      helplineNum: '१९३०',
      curriculumTitle: 'अभ्यासक्रम',
      essentialSafetyTitle: 'महत्त्वाचे सुरक्षा नियम',
      emergencyContactsTitle: 'राष्ट्रीय हेल्पलाइन (भारत)',
      safety1: 'पैसे मिळवण्यासाठी कधीही UPI PIN टाकू नका',
      safety2: 'फोनवर कोणालाही OTP किंवा CVV सांगू नका',
      safety3: 'शासकीय संकेतस्थळाच्या शेवटी .gov.in तपासा',
      safety4: 'स्क्रीन शेअरिंग किंवा अनोळखी APK ॲप्स डाऊनलोड करू नका',
      disclaimer: 'शैक्षणिक सूचना: डिजिटल साथी हा केवळ लोकशिक्षणासाठी तयार केलेला स्वतंत्र सामाजिक प्रकल्प आहे. याचा कोणत्याही बँकेशी किंवा सरकारी यंत्रणेशी व्यावसायिक संबंध नाही.',
      copyright: '© २०२६ डिजिटल साथी • ओपन-सोर्स शैक्षणिक उपक्रम',
    },
  },
};
