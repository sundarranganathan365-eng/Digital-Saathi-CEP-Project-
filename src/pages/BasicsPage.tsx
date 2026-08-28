import React, { useState } from 'react';
import { PageId, Language } from '../types';
import { VideoGuideSection } from '../components/VideoGuideSection';
import {
  Smartphone,
  Globe,
  Download,
  ShieldCheck,
  Search,
  Lock,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Eye,
  Wifi,
  KeyRound,
  ShieldAlert,
  AlertTriangle,
  CreditCard,
  Layers,
} from 'lucide-react';

interface BasicsPageProps {
  setCurrentPage: (page: PageId) => void;
  language: Language;
}

const basicsContent = {
  en: {
    moduleTag: 'Module 01',
    categoryTag: 'Foundation Skills',
    title: 'Digital Basics: Smartphone & Internet',
    subtitle: 'Master the fundamental building blocks of modern smartphones, secure PIN & password hygiene, SIM card ejection defense, and safe app permissions.',
    tabs: {
      smartphone: '1. Smartphone & Device Security',
      simLock: '2. SIM Card Lock & Eject Protection',
      internet: '3. Internet & Safe Browsing',
      apps: '4. App Management & Permissions',
    },
    s1: {
      tag: 'Concept 01',
      title: 'The Home Screen & Navigation',
      desc: "The home screen is your phone's main table. Touching an app icon opens it. Swiping up from the bottom (or pressing the center button) takes you right back home anytime.",
      steps: [
        'Tap once to open an application (WhatsApp, Phone, Camera).',
        'Swipe down from the top edge to view Wi-Fi, torch, and volume settings.',
        'Swipe up from the bottom edge to return to the home screen immediately.',
      ],
    },
    s2: {
      tag: 'Concept 02',
      title: 'Wi-Fi vs Mobile Cellular Data',
      desc: 'Mobile Data uses your SIM card telecom plan. Wi-Fi connects wirelessly to home or office routers without consuming SIM card daily data limits.',
      steps: [
        'Home Wi-Fi: Safe and password-protected for high-speed browsing.',
        'Mobile Data (4G/5G): Ideal for secure mobile banking and UPI payments.',
        'Open Public Wi-Fi: Dangerous for banking because passwords can be intercepted.',
      ],
    },
    s3: {
      tag: 'Concept 03',
      title: 'Screen Lock & PIN Hygiene (Why Weak PINs Fail)',
      desc: 'Never leave your phone unlocked. A 6-digit PIN, strong password, or biometric fingerprint prevents unauthorized access if your phone is lost or stolen.',
      steps: [
        'Set up a PIN or Fingerprint under Settings > Security > Screen Lock.',
        'Avoid predictable PINs like 1234, 0000, or your birth year.',
        'Set screen timeout to 30 seconds to lock automatically when not in use.',
      ],
      badPinHeader: 'DANGEROUS & PREDICTABLE PIN PATTERNS (AVOID AT ALL COSTS):',
      badPins: [
        { code: '1234 / 4321 / 123456', reason: 'Sequential numbers are the #1 combination tested by phone thieves.' },
        { code: '0000 / 1111 / 9999', reason: 'Repeated digits can be guessed in seconds by anyone holding the device.' },
        { code: '1985 / 2002 (Birth Year)', reason: 'If your wallet is lost with ID cards (Aadhaar/PAN), thieves immediately test your birth year.' },
        { code: '2580 / 0852', reason: 'Straight vertical/horizontal lines on the keypad are well-known shortcuts.' },
        { code: 'Vehicle / House Number', reason: 'Publicly visible numbers that acquaintances or strangers can easily discover.' },
        { code: 'Last 4 Digits of Mobile No.', reason: 'Your phone number is printed on your SIM and delivery packages.' },
      ],
      whyWeakPinsTitle: 'Why Weak PINs Are So Dangerous:',
      whyWeakPinsDesc: 'Your smartphone is the master key to your digital life — containing your bank apps, Google Pay, PhonePe, and WhatsApp. If a thief or malicious bystander guesses your screen lock, they can bypass app security and drain bank accounts before you can report the phone missing.',
      strongPinRuleTitle: 'The Golden Rules for a Strong Phone Lock:',
      strongPinRules: [
        'Use at least 6 random digits that have no connection to your personal life (not your birthday, anniversary, or bike number).',
        'Combine with Biometric Fingerprint or Face Recognition for fast and secure daily unlocking.',
        'Set the screen lock timer to "Immediately" or "After 30 seconds of inactivity".',
        'Never write down your lock PIN on a sticker pasted behind your phone case.',
      ],
    },
    sim: {
      tag: 'Critical Security Layer',
      title: 'SIM Card Lock & Eject Protection',
      subtitle: 'Why a phone screen lock is NOT enough — protect your SIM against physical ejection theft.',
      threatTitle: 'The Hidden Attack: Physical SIM Ejection Theft',
      threatDesc: 'Most people believe their screen lock makes their phone 100% safe. However, if a thief steals your smartphone, they can use a safety pin or SIM ejector tool to remove your SIM card in 5 seconds and insert it into their own unlocked phone.',
      threatPoints: [
        'The thief puts your SIM card into their phone — your telecom network immediately activates.',
        'They install PhonePe, Google Pay, or WhatsApp using your phone number.',
        'When they tap "Forgot UPI PIN", the Bank OTP arrives directly on their phone via your stolen SIM!',
        'They drain your bank accounts without ever needing to unlock your original smartphone.',
      ],
      defenseTitle: 'The Ultimate Defense: Enable SIM Card Lock PIN',
      defenseDesc: 'When SIM Lock is turned on, the SIM card itself is locked with a secret 4-digit PIN. If anyone ejects the SIM and inserts it into ANY other device (or reboots the phone), the SIM will remain completely dead and inactive until the SIM PIN is entered.',
      stepsTitle: 'How to Enable SIM Card Lock:',
      stepsAndroid: {
        platform: 'Android Setup (Samsung, Xiaomi, Vivo, Realme, OnePlus, etc.)',
        steps: [
          'Open Settings ➔ Security & Privacy (or Passwords & Security).',
          'Scroll down and tap "More Security Settings" (or "System Security").',
          'Tap "SIM Card Lock" (or "Set up SIM card lock").',
          'Toggle ON "Lock SIM Card". Enter your current telecom default PIN (usually 0000 or 1234).',
          'Tap "Change SIM PIN" and set a brand-new secret 4-digit PIN known only to you.',
        ],
      },
      stepsIos: {
        platform: 'iPhone Setup (Apple iOS)',
        steps: [
          'Open Settings ➔ Cellular (or Mobile Data).',
          'Tap "SIM PIN".',
          'Turn ON "SIM PIN". Enter the default PIN (usually 0000 or 1234).',
          'Tap "Change PIN" and enter your new personal 4-digit PIN.',
        ],
      },
      pukWarning: {
        title: 'Crucial Telecom Warning: Default PINs & PUK Code',
        desc: 'Default telecom SIM PINs are typically 0000 or 1234 for Jio, Airtel, Vi, and BSNL. You MUST change this default immediately to your own secret code. Important: If you enter the wrong SIM PIN 3 times, the SIM is temporarily blocked and asks for an 8-digit PUK (Personal Unblocking Key) code. You can easily view your PUK code inside your telecom app (Airtel Thanks, MyJio, Vi App) or by calling customer care. Keep your PUK code noted safely in a physical notebook at home.',
      },
    },
    i1: {
      tag: 'Safe Browsing',
      title: 'How to Search the Web Safely',
      desc: 'When using Google or web browsers, learn how to distinguish between genuine search results and sponsored advertisements.',
      points: [
        'Watch out for "Sponsored" or "Ad" tags on top of search results. Scammers pay for ads to promote fake helpline numbers.',
        'Always check the website domain. Indian government sites end with .gov.in, banks have official registered domains.',
        'Look for the secure padlock icon in the browser address bar before typing passwords.',
      ],
    },
    i2: {
      tag: 'Link Hygiene',
      title: 'Never Click Unknown Links',
      desc: 'Malicious links received via SMS, WhatsApp, or email are designed to hijack accounts or trigger silent file downloads.',
      points: [
        'Do not click links offering free gifts, lottery wins, or subsidized government laptops.',
        'Do not open file attachments ending with .apk or .exe from unknown senders.',
        'If a friend sends a weird link saying "Is this you?", verify with them on a phone call first.',
      ],
    },
    a1: {
      tag: 'Official Store',
      title: 'Only Install from Google Play Store / Apple App Store',
      desc: 'Official app stores screen applications for malware and viruses. Installing APK files from websites or WhatsApp bypasses all security defenses.',
    },
    a2: {
      tag: 'Permissions Check',
      title: 'Understanding Sensitive Permissions',
      desc: 'Apps often ask to access your Camera, Microphone, SMS, and Contacts. Only grant permissions that make sense for the app’s purpose.',
      items: [
        { name: 'SMS Access:', text: 'Highly Dangerous. Never give to calculators, games, or flashlight apps. Scammers use SMS access to read bank OTPs silently.' },
        { name: 'Contacts Access:', text: 'Only grant to messaging apps (like WhatsApp) or phone dialers.' },
        { name: 'Location Access:', text: 'Only grant "While using the app" to maps and delivery services.' },
        { name: 'Camera / Mic:', text: 'Grant only to video calling or camera apps.' },
      ],
    },
    dosTitle: 'Summary: Digital Basics Best Practices',
    dos: [
      'Use a 6-digit random non-sequential PIN for phone screen lock.',
      'Enable SIM Card PIN lock to protect against SIM ejection & OTP theft.',
      'Change default SIM PIN (0000 / 1234) immediately to a secret code.',
      'Always install applications strictly from official app stores (Google Play / App Store).',
      'Keep your operating system updated with latest security patches.',
    ],
    donts: [
      'Never use 1234, 0000, 2580, birth years, or vehicle numbers as your screen PIN or SIM PIN.',
      'Never leave your SIM card unlocked — thieves can intercept all bank OTPs on another phone.',
      'Never give SMS or Call Log permissions to utility, flashlight, or gaming apps.',
      'Never connect to password-less public Wi-Fi for mobile banking transactions.',
      'Never write your PINs on paper stored inside your phone cover or wallet.',
    ],
    nextCta: 'Next Module: Digital Payments & UPI Security',
  },
  hi: {
    moduleTag: 'मॉड्यूल 01',
    categoryTag: 'बुनियादी कौशल',
    title: 'डिजिटल बुनियादी बातें: स्मार्टफोन, पासवर्ड एवं सिम सुरक्षा',
    subtitle: 'स्मार्टफोन चलाने, मजबूत पासवर्ड व पिन चुनने, सिम कार्ड इजेक्ट चोरी से बचाव और ऐप परमिशन को समझने के लिए सरल मार्गदर्शन।',
    tabs: {
      smartphone: '1. स्मार्टफोन और डिवाइस सुरक्षा',
      simLock: '2. सिम कार्ड लॉक एवं इजेक्ट सुरक्षा',
      internet: '3. इंटरनेट और सुरक्षित ब्राउज़िंग',
      apps: '4. ऐप प्रबंधन और परमिशन',
    },
    s1: {
      tag: 'नियम 01',
      title: 'होम स्क्रीन और नेविगेशन (Navigation)',
      desc: 'होम स्क्रीन आपके फोन की मुख्य मेज की तरह है। किसी भी ऐप के आइकन को छूने पर वह खुल जाता है। नीचे से ऊपर स्वाइप करने (या बीच का बटन दबाने) पर आप तुरंत वापस होम स्क्रीन पर आ जाते हैं।',
      steps: [
        'किसी ऐप (व्हाट्सएप, फोन, कैमरा) को खोलने के लिए एक बार टैप करें।',
        'वाई-फाई, टॉर्च और वॉल्यूम देखने के लिए स्क्रीन के ऊपर से नीचे की ओर स्वाइप करें।',
        'तुरंत मुख्य स्क्रीन पर लौटने के लिए नीचे से ऊपर की ओर स्वाइप करें।',
      ],
    },
    s2: {
      tag: 'नियम 02',
      title: 'मोबाइल डेटा और वाई-फाई में अंतर',
      desc: 'मोबाइल डेटा आपके सिम कार्ड के रिचार्ज प्लान का उपयोग करता है। वाई-फाई घर या ऑफिस के ब्रॉडबैंड राउटर से बिना सिम डेटा खर्च किए कनेक्ट होता है।',
      steps: [
        'घर का वाई-फाई: पासवर्ड से सुरक्षित और तेज इंटरनेट के लिए सबसे अच्छा।',
        'मोबाइल डेटा (4G/5G): ऑनलाइन बैंकिंग और UPI पेमेंट के लिए सबसे सुरक्षित।',
        'खुला पब्लिक वाई-फाई: रेलवे स्टेशन या होटल के खुले वाई-फाई पर बैंक लेनदेन से बचें।',
      ],
    },
    s3: {
      tag: 'नियम 03',
      title: 'स्क्रीन लॉक और मजबूत पिन (कमजोर पिन क्यों खतरनाक हैं)',
      desc: 'अपने फोन को कभी भी बिना लॉक के न छोड़ें। 6-अंकों का पिन, मजबूत पासवर्ड या फिंगरप्रिंट लॉक फोन गुम होने पर आपके निजी डेटा और बैंक ऐप्स को सुरक्षित रखता है।',
      steps: [
        'सेटिंग्स > सुरक्षा > स्क्रीन लॉक में जाकर 6 अंकों का पिन या फिंगरप्रिंट सेट करें।',
        '1234, 0000 या अपने जन्म वर्ष जैसे आसान पिन रखने से बचें।',
        'स्क्रीन टाइमआउट को 30 सेकंड पर सेट करें ताकि इस्तेमाल न होने पर फोन तुरंत लॉक हो जाए।',
      ],
      badPinHeader: 'खतरनाक और आसानी से अनुमान लगाए जाने वाले पिन (इनसे बचें):',
      badPins: [
        { code: '1234 / 4321 / 123456', reason: 'क्रमबद्ध संख्याएं — चोर सबसे पहले यही नंबर डालकर फोन खोलने की कोशिश करते हैं।' },
        { code: '0000 / 1111 / 9999', reason: 'एक ही अंक बार-बार दोहराना सबसे कमजोर पिन माना जाता है।' },
        { code: '1985 / 2002 (जन्म वर्ष)', reason: 'यदि फोन के साथ पर्स या आधार कार्ड खो जाए, तो चोर तुरंत जन्म वर्ष डालकर फोन खोल लेते हैं।' },
        { code: '2580 / 0852', reason: 'कीपैड की सीधी ऊपर-नीचे की लाइन — यह बहुत आम और असुरक्षित पैटर्न है।' },
        { code: 'गाड़ी या मकान नंबर', reason: 'यह जानकारी आसानी से किसी भी परिचित या अजनबी को मिल सकती है।' },
        { code: 'मोबाइल नंबर के अंतिम 4 अंक', reason: 'आपका फोन नंबर सिम और कूरियर पार्सल पर आसानी से उपलब्ध होता है।' },
      ],
      whyWeakPinsTitle: 'कमजोर पिन रखना क्यों घातक साबित हो सकता है:',
      whyWeakPinsDesc: 'आपका स्मार्टफोन आपकी पूरी डिजिटल जिंदगी की चाबी है — जिसमें बैंक ऐप्स, गूगल पे, फोनपे और व्हाट्सएप होते हैं। यदि कोई चोर या अजनबी आपका स्क्रीन लॉक आसानी से खोल लेता है, तो आपके बैंक से पैसे तुरंत चोरी किए जा सकते हैं।',
      strongPinRuleTitle: 'सुरक्षित फोन लॉक के सुनहरे नियम:',
      strongPinRules: [
        'कम से कम 6 अंकों का ऐसा रैंडम पिन बनाएं जिसका आपकी निजी जानकारी (जन्मदिन, सालगिरह या गाड़ी नंबर) से कोई संबंध न हो।',
        'तेज और सुरक्षित अनलॉकिंग के लिए फिंगरप्रिंट या फेस अनलॉक चालू रखें।',
        'स्क्रीन लॉक टाइमर को 30 सेकंड पर सेट करें ताकि फोन छोड़ते ही अपने आप लॉक हो जाए।',
        'पिन को कभी भी फोन के पीछे या कवर में कागज पर लिखकर न चिपकाएं।',
      ],
    },
    sim: {
      tag: 'अति-महत्वपूर्ण सुरक्षा',
      title: 'सिम कार्ड लॉक (SIM Lock PIN) और इजेक्ट चोरी से बचाव',
      subtitle: 'सिर्फ स्क्रीन लॉक काफी नहीं है — अपने सिम कार्ड को किसी दूसरे फोन में लगने से बचाएं।',
      threatTitle: 'छिपा हुआ बड़ा खतरा: सिम कार्ड निकालकर (SIM Eject) होने वाली चोरी',
      threatDesc: 'अधिकांश लोग सोचते हैं कि फोन पर स्क्रीन लॉक लगा है तो सब सुरक्षित है। लेकिन यदि फोन चोरी होता है, तो चोर एक छोटी पिन से 5 सेकंड में आपका सिम कार्ड निकाल लेते हैं और अपने फोन में डाल लेते हैं।',
      threatPoints: [
        'चोर आपके सिम को अपने फोन में लगाते हैं — नेटवर्क तुरंत चालू हो जाता है।',
        'वे आपके मोबाइल नंबर से PhonePe, Google Pay या WhatsApp इंस्टॉल करते हैं।',
        'जैसे ही वे "Forgot UPI PIN" दबाते हैं, बैंक का OTP सीधे उनके फोन पर आ जाता है!',
        'वे आपके असली फोन को बिना खोले ही आपके बैंक खाते से सारे पैसे उड़ा लेते हैं।',
      ],
      defenseTitle: 'सबसे पक्का उपाय: सिम कार्ड लॉक (SIM Lock PIN) चालू करें',
      defenseDesc: 'जब सिम लॉक चालू होता है, तो सिम कार्ड खुद 4-अंकों के पिन से लॉक हो जाता है। यदि कोई सिम कार्ड निकालकर किसी भी दूसरे फोन में डालेगा (या फोन रीस्टार्ट करेगा), तो बिना सिम पिन डाले सिम पर कोई कॉल या बैंक OTP आ ही नहीं सकता।',
      stepsTitle: 'सिम कार्ड लॉक कैसे चालू करें:',
      stepsAndroid: {
        platform: 'एंड्रॉयड फोन में सेटिंग (Samsung, Xiaomi, Vivo, Realme, OnePlus आदि):',
        steps: [
          'फोन की सेटिंग्स (Settings) ➔ सुरक्षा एवं गोपनीयता (Security & Privacy) खोलें।',
          'नीचे स्क्रॉल करें और "More Security Settings" (या System Security) पर जाएं।',
          ' "SIM Card Lock" (सिम कार्ड लॉक) पर टैप करें।',
          '"Lock SIM Card" को चालू करें। कंपनी का डिफ़ॉल्ट पिन डालें (आमतौर पर 0000 या 1234)।',
          '"Change SIM PIN" पर टैप करें और अपना नया गोपनीय 4-अंकों का पिन सेट करें।',
        ],
      },
      stepsIos: {
        platform: 'आईफोन में सेटिंग (Apple iPhone):',
        steps: [
          'Settings ➔ Cellular (या Mobile Data) खोलें।',
          '"SIM PIN" पर टैप करें।',
          '"SIM PIN" को चालू करें और डिफ़ॉल्ट पिन (0000 या 1234) डालें।',
          '"Change PIN" पर टैप करके अपना नया 4-अंकों का पिन सेट करें।',
        ],
      },
      pukWarning: {
        title: 'टेलीकॉम डिफ़ॉल्ट पिन एवं PUK कोड की जरूरी चेतावनी:',
        desc: 'Jio, Airtel, Vi और BSNL का शुरुआती डिफ़ॉल्ट सिम पिन आमतौर पर 0000 या 1234 होता है। इसे तुरंत बदलकर अपना नया पिन जरूर बनाएं। ध्यान दें: यदि लगातार 3 बार गलत सिम पिन डाला जाए, तो सिम लॉक हो जाता है और 8-अंकों का PUK कोड चाहिए होता है। आप अपना PUK कोड टेलीकॉम ऐप (Airtel Thanks, MyJio, Vi App) में देख सकते हैं या कस्टमर केयर से ले सकते हैं। इसे घर की किसी डायरी में सुरक्षित लिख लें।',
      },
    },
    i1: {
      tag: 'सुरक्षित ब्राउज़िंग',
      title: 'इंटरनेट पर सुरक्षित सर्च कैसे करें',
      desc: 'गूगल या ब्राउज़र का उपयोग करते समय असली वेबसाइट और प्रायोजित विज्ञापनों (Ads) के बीच अंतर पहचानना सीखें।',
      points: [
        'सर्च रिजल्ट के ऊपर "Sponsored" या "Ad" लिखे विज्ञापनों से सावधान रहें। धोखेबाज फर्जी हेल्पलाइन नंबर प्रमोट करने के लिए विज्ञापन लगाते हैं।',
        'वेबसाइट का पता हमेशा जांचें। भारत सरकार की साइटें .gov.in पर और असली बैंक आधिकारिक डोमेन पर समाप्त होते हैं।',
        'पासवर्ड डालने से पहले ब्राउज़र के एड्रेस बार में सुरक्षित ताले (Padlock) का निशान अवश्य देखें।',
      ],
    },
    i2: {
      tag: 'लिंक से सावधानी',
      title: 'अनजान लिंक पर कभी क्लिक न करें',
      desc: 'SMS, व्हाट्सएप या ईमेल पर आए अनजान लिंक खाते को हैक करने या खतरनाक फाइलें डाउनलोड करने के लिए बनाए जाते हैं।',
      points: [
        'फ्री गिफ्ट, लॉटरी जीतने या फ्री सरकारी लैपटॉप देने वाले लुभावने लिंक पर क्लिक न करें।',
        '.apk या .exe पर समाप्त होने वाली फाइलों को कभी भी डाउनलोड न करें।',
        'यदि कोई परिचित भी अचानक अजीब लिंक भेजे, तो पहले फोन करके उनसे पुष्टि करें।',
      ],
    },
    a1: {
      tag: 'आधिकारिक स्टोर',
      title: 'केवल Google Play Store / Apple App Store से ही ऐप डाउनलोड करें',
      desc: 'आधिकारिक स्टोर ऐप्स की सुरक्षा जांच करते हैं। व्हाट्सएप या किसी वेबसाइट से सीधे APK फाइल डाउनलोड करने से फोन में वायरस आ सकता है।',
    },
    a2: {
      tag: 'परमिशन की जांच',
      title: 'संवेदनशील ऐप अनुमतियों (Permissions) को समझें',
      desc: 'ऐप्स अक्सर आपके कैमरे, माइक्रोफोन, SMS और कॉन्टैक्ट्स की अनुमति मांगते हैं। केवल वही अनुमति दें जो उस ऐप के काम के लिए जरूरी हो।',
      items: [
        { name: 'SMS अनुमति:', text: 'अत्यंत संवेदनशील। टॉर्च, गेम या कैलकुलेटर ऐप को SMS अनुमति कभी न दें। धोखेबाज इसका इस्तेमाल बैंक OTP चुपके से पढ़ने के लिए करते हैं।' },
        { name: 'कॉन्टैक्ट्स अनुमति:', text: 'केवल कॉलिंग या मैसेजिंग ऐप्स (जैसे व्हाट्सएप) को ही दें।' },
        { name: 'लोकेशन अनुमति:', text: 'मैप्स और डिलीवरी ऐप्स को केवल "ऐप उपयोग करते समय" की अनुमति दें।' },
        { name: 'कैमरा / माइक:', text: 'केवल वीडियो कॉल या कैमरा ऐप्स को दें।' },
      ],
    },
    dosTitle: 'डिजिटल बुनियादी बातों के महत्वपूर्ण नियम',
    dos: [
      'फोन लॉक करने के लिए 6-अंकों के रैंडम पिन या फिंगरप्रिंट का उपयोग करें।',
      'सिम कार्ड इजेक्ट चोरी से बचने के लिए SIM Card Lock PIN जरूर चालू करें।',
      'डिफ़ॉल्ट सिम पिन (0000 / 1234) को तुरंत अपने निजी पिन में बदलें।',
      'हमेशा आधिकारिक प्ले स्टोर से ही ऐप्स डाउनलोड करें।',
      'अपने फोन के सिस्टम और ऐप्स को नियमित रूप से अपडेट रखें।',
    ],
    donts: [
      '1234, 0000, 2580, जन्म वर्ष या गाड़ी नंबर को फोन या सिम का पिन कभी न बनाएं।',
      'सिम कार्ड को बिना लॉक के न छोड़ें — चोर दूसरे फोन में सिम डालकर बैंक OTP पा सकते हैं।',
      'साधारण गेम या टॉर्च ऐप को SMS या फोन कॉल की अनुमति कभी न दें।',
      'बैंक लेन-देन के लिए बिना पासवर्ड वाले खुले पब्लिक वाई-फाई का उपयोग न करें।',
      'पिन को फोन के कवर या पर्स में कागज पर लिखकर कभी न रखें।',
    ],
    nextCta: 'अगला मॉड्यूल: डिजिटल भुगतान और UPI सुरक्षा',
  },
  mr: {
    moduleTag: 'मॉड्यूल ०१',
    categoryTag: 'मूलभूत कौशल्ये',
    title: 'डिजिटल मूलभूत माहिती: स्मार्टफोन, पासवर्ड व सिम सुरक्षा',
    subtitle: 'स्मार्टफोन वापरणे, मजबूत पिन व पासवर्ड निवडणे, सिम कार्ड चोरीपासून संरक्षण आणि ॲप परवानग्या समजून घेण्यासाठी सोपे मार्गदर्शन.',
    tabs: {
      smartphone: '१. स्मार्टफोन व डिव्हाइस सुरक्षा',
      simLock: '२. सिम कार्ड लॉक व इजेक्ट सुरक्षा',
      internet: '३. इंटरनेट आणि सुरक्षित ब्राउझिंग',
      apps: '४. ॲप व्यवस्थापन आणि परवानग्या',
    },
    s1: {
      tag: 'नियम ०१',
      title: 'होम स्क्रीन आणि नेव्हिगेशन (Navigation)',
      desc: 'होम स्क्रीन म्हणजे तुमच्या मोबाईलचे मुख्य टेबल. कोणत्याही ॲपच्या चिन्हाला स्पर्श केल्यास ते उघडते. खालून वर स्वाइप केल्यावर तुम्ही थेट मुख्य स्क्रीनवर परत जाता.',
      steps: [
        'कोणतेही ॲप (व्हॉट्सॲप, फोन, कॅमेरा) उघडण्यासाठी त्यावर एकदा स्पर्श करा.',
        'वाय-फाय, टॉर्च आणि आवाज नियंत्रित करण्यासाठी स्क्रीनच्या वरून खाली ओढा.',
        'थेट मुख्य स्क्रीनवर परत जाण्यासाठी स्क्रीनच्या खालून वर स्वाइप करा.',
      ],
    },
    s2: {
      tag: 'नियम ०२',
      title: 'मोबाईल डेटा आणि वाय-फाय मधील फरक',
      desc: 'मोबाईल डेटा सिम कार्डच्या इंटरनेट पॅकचा वापर करतो. वाय-फाय घर किंवा ऑफिसमधील ब्रॉडबँडला बिनतारी जोडतो आणि सिम डेटा संपत नाही.',
      steps: [
        'घरातील वाय-फाय: पासवर्डने सुरक्षित आणि जलद इंटरनेटसाठी उत्तम.',
        'मोबाईल डेटा (4G/5G): ऑनलाईन बँक व्यवहार आणि UPI साठी सर्वात सुरक्षित.',
        'सार्वजनिक खुला वाय-फाय: रेल्वे स्टेशन किंवा हॉटेलमधील खुल्या वाय-फायवर बँक व्यवहार टाळावेत.',
      ],
    },
    s3: {
      tag: 'नियम ०३',
      title: 'स्क्रीन लॉक आणि मजबूत पिन (सोपा पिन का ठेवू नये)',
      desc: 'मोबाईल कधीही लॉक केल्याशिवाय सोडू नका. ६-अंकी पिन, मजबूत पासवर्ड किंवा फिंगरप्रिंट लॉकमुळे मोबाईल गहाळ झाल्यास तुमची खाजगी माहिती सुरक्षित राहते.',
      steps: [
        'सेटिंग्ज > सिक्युरिटी > स्क्रीन लॉक मध्ये जाऊन ६-अंकी पिन किंवा फिंगरप्रिंट लॉक सेट करा.',
        '१२३४, ०००० किंवा जन्मतारीख यांसारखा सहज ओळखता येणारा पिन ठेवू नका.',
        'मोबाईल वापरणे थांबवल्यावर ३० सेकंदात स्क्रीन आपोआप लॉक होईल अशी सेटिंग ठेवा.',
      ],
      badPinHeader: 'धोकादायक व सहज ओळखता येणारे पिन (हे अजिबात वापरू नका):',
      badPins: [
        { code: '१२३४ / ४३२१ / १२३४५६', reason: 'क्रमवार आकडे — मोबाईल चोरीला गेल्यास चोर सर्वात आधी हाच पिन टाकून पाहतात.' },
        { code: '०००० / ११११ / ९९९९', reason: 'एकाच आकड्याची पुनरावृत्ती सेकंदात उघडली जाऊ शकते.' },
        { code: '१९८५ / २००२ (जन्माचे वर्ष)', reason: 'मोबाईलसोबत पाकीट किंवा आधार कार्ड गहाळ झाल्यास चोर लगेच जन्मतारीख टाकून फोन उघडतात.' },
        { code: '२५८० / ०८५२', reason: 'कीपॅडवरील सरळ रेषेतील आकडे — हे अत्यंत असुरक्षित आहे.' },
        { code: 'गाडीचा किंवा घराचा नंबर', reason: 'ही माहिती अनोळखी व्यक्तींनाही सहज मिळू शकते.' },
        { code: 'मोबाईल नंबरचे शेवटचे ४ आकडे', reason: 'तुमचा मोबाईल नंबर सिम व पार्सलवर सहज उपलब्ध असतो.' },
      ],
      whyWeakPinsTitle: 'सोपा किंवा कमजोर पिन ठेवणे का महागात पडू शकते:',
      whyWeakPinsDesc: 'तुमचा स्मार्टफोन म्हणजे तुमच्या बँकेची व पैशांची तिजोरी आहे — यात Google Pay, PhonePe, Paytm आणि बँकिंग ॲप्स असतात. चोराने स्क्रीन लॉक उघडल्यास तो काही मिनिटांत तुमचे बँक खाते रिकामे करू शकतो.',
      strongPinRuleTitle: 'सुरक्षित मोबाईल लॉकचे सुवर्ण नियम:',
      strongPinRules: [
        'किमान ६ अंकांचा असा अनपेक्षित पिन ठेवा ज्याचा तुमच्या वाढदिवसाशी किंवा गाडी नंबरशी कोणताही संबंध नसेल.',
        'जलद आणि सुरक्षित वापरासाठी फिंगरप्रिंट किंवा फेस लॉक नक्की चालू ठेवा.',
        'स्क्रीन लॉक टायमर ३० सेकंदांवर ठेवा जेणेकरून फोन हाताबाहेर जाताच लगेच लॉक होईल.',
        'पिन कधीही फोनच्या कव्हरमध्ये किंवा पाकिटात कागदावर लिहून ठेवू नका.',
      ],
    },
    sim: {
      tag: 'अतिशय महत्त्वाची सुरक्षा',
      title: 'सिम कार्ड लॉक (SIM Lock PIN) व सिम चोरीपासून संरक्षण',
      subtitle: 'फक्त स्क्रीन लॉक पुरेसे नाही — सिम कार्ड बाहेर काढून होणाऱ्या फसवणुकीपासून स्वतःला वाचवा.',
      threatTitle: 'अदृश्य मोठा धोका: सिम कार्ड बाहेर काढून (SIM Eject) होणारी चोरी',
      threatDesc: 'अनेक लोकांना वाटते की स्क्रीन लॉक लावला म्हणजे फोन पूर्ण सुरक्षित झाला. परंतु चोर मोबाईल चोरल्यावर ५ सेकंदात एका सेफ्टी पिनने सिम कार्ड बाहेर काढतात आणि स्वतःच्या मोबाईलमध्ये टाकतात.',
      threatPoints: [
        'चोर तुमचे सिम त्यांच्या मोबाईलमध्ये टाकतात — नेटवर्क लगेच सुरू होते.',
        'ते तुमच्या नंबरवर PhonePe, Google Pay किंवा WhatsApp डाऊनलोड करतात.',
        'त्यांनी "Forgot UPI PIN" करताच बँकेचा OTP थेट त्यांच्या मोबाईलवर येतो!',
        'त्यांना तुमचा मूळ मोबाईल अनलॉक न करताही तुमच्या खात्यातील सर्व पैसे चोरता येतात.',
      ],
      defenseTitle: 'यावर रामबाण उपाय: सिम कार्ड लॉक (SIM PIN Lock) चालू करा',
      defenseDesc: 'सिम लॉक चालू केल्यास तुमचे सिम कार्ड स्वतः एका ४-अंकी गोपनीय पिनने सुरक्षित होते. कोणीही सिम कार्ड बाहेर काढून दुसऱ्या फोनमध्ये टाकल्यास किंवा फोन रीस्टार्ट केल्यास, सिम पिन टाकल्याशिवाय सिमवर एकही OTP किंवा कॉल येऊच शकत नाही.',
      stepsTitle: 'सिम कार्ड लॉक कसे सुरू करावे:',
      stepsAndroid: {
        platform: 'अँड्रॉइड मोबाईल सेटिंग (Samsung, Xiaomi, Vivo, Realme, OnePlus इत्यादी):',
        steps: [
          'Settings ➔ Security & Privacy (किंवा Passwords & Security) उघडा.',
          'खाली स्क्रोल करून "More Security Settings" (किंवा System Security) वर जा.',
          '"SIM Card Lock" (किंवा Set up SIM Card Lock) वर टॅप करा.',
          '"Lock SIM Card" चालू करा. कंपनीचा मूळ पिन टाका (सहसा 0000 किंवा 1234).',
          '"Change SIM PIN" वर क्लिक करा आणि तुमचा स्वतःचा नवा ४-अंकी गुप्त पिन सेट करा.',
        ],
      },
      stepsIos: {
        platform: 'आयफोन सेटिंग (Apple iPhone):',
        steps: [
          'Settings ➔ Cellular (किंवा Mobile Data) उघडा.',
          '"SIM PIN" पर्यायावर जा.',
          '"SIM PIN" चालू करा आणि मूळ पिन (0000 किंवा 1234) टाका.',
          '"Change PIN" वर क्लिक करून स्वतःचा नवा ४-अंकी गुप्त पिन सेट करा.',
        ],
      },
      pukWarning: {
        title: 'मूळ पिन व PUK कोडबाबत अत्यंत महत्त्वाची सूचना:',
        desc: 'Jio, Airtel, Vi आणि BSNL चे सुरुवातीचे मूळ सिम पिन सहसा 0000 किंवा 1234 असतात. तो लगेच स्वतःच्या नवीन पिनमध्ये बदला. सूचना: सलग ३ वेळा चुकीचा सिम पिन टाकल्यास सिम ब्लॉक होते आणि ८-अंकी PUK कोड लागतो. हा PUK कोड कंपनीच्या ॲपमध्ये (Airtel Thanks, MyJio, Vi App) मिळतो किंवा कस्टमर केअरकडून मिळवता येतो. हा कोड घरातील डायरीत लिहून ठेवा.',
      },
    },
    i1: {
      tag: 'सुरक्षित ब्राउझिंग',
      title: 'इंटरनेटवर सुरक्षित माहिती शोधणे',
      desc: 'गुगल किंवा ब्राउझर वापरताना अधिकृत वेबसाईट आणि बनावट जाहिरातींमधील फरक ओळखणे शिका.',
      points: [
        'सर्च रिझल्टमध्ये वर दिसणाऱ्या "Sponsored" किंवा "Ad" जाहिरातींपासून सावध राहा. गुन्हेगार खोटे फोन नंबर दाखवण्यासाठी जाहिरातींचा वापर करतात.',
        'वेबसाईटचा पत्ता नेहमी तपासा. सरकारी संकेतस्थळांच्या शेवटी .gov.in असते आणि बँकांचे अधिकृत डोमेन असते.',
        'पासवर्ड टाकण्यापूर्वी ब्राउझरच्या ॲड्रेस बारमध्ये सुरक्षित कुलूपाचे चिन्ह (Padlock) तपासा.',
      ],
    },
    i2: {
      tag: 'लिंक्सपासून सावध राहा',
      title: 'अनोळखी लिंक्सवर कधीही क्लिक करू नका',
      desc: 'SMS, व्हॉट्सॲप किंवा ईमेलवर आलेल्या खोट्या लिंक्समुळे मोबाईलमधील माहिती चोरीला जाऊ शकते.',
      points: [
        'मोफत बक्षिसे, लॉटरी किंवा मोफत सरकारी लॅपटॉप देण्याच्या खोट्या लिंक्सवर क्लिक करू नका.',
        '.apk किंवा .exe ने संपणाऱ्या फाईल्स कधीही डाऊनलोड करू नका.',
        'ओळखीच्या व्यक्तीने अचानक संशयास्पद लिंक पाठवली तरी आधी त्यांना फोन करून खात्री करा.',
      ],
    },
    a1: {
      tag: 'अधिकृत स्टोअर',
      title: 'फक्त Google Play Store किंवा Apple App Store वरूनच ॲप्स डाऊनलोड करा',
      desc: 'अधिकृत ॲप स्टोअर सर्व ॲप्सची सुरक्षितता तपासतात. कोणत्याही वेबसाईटवरून थेट APK फाईल डाऊनलोड केल्यास मोबाईलमध्ये व्हायरस येऊ शकतो.',
    },
    a2: {
      tag: 'परवानग्यांची तपासणी',
      title: 'संवेदनशील ॲप परवानग्या (Permissions) समजून घ्या',
      desc: 'ॲप्स अनेकदा कॅमेरा, मायक्रोफोन, SMS आणि फोनबुकची परवानगी मागतात. फक्त गरजेच्या परवानग्याच द्या.',
      items: [
        { name: 'SMS परवानगी:', text: 'अतिशय संवेदनशील. टॉर्च, गेम किंवा कॅल्क्युलेटर ॲपला SMS ची परवानगी कधीही देऊ नका. गुन्हेगार यामुळे बँकेचा OTP चोरू शकतात.' },
        { name: 'कॉन्टॅक्ट्स परवानगी:', text: 'फक्त कॉलिंग किंवा मेसेजिंग ॲप्सनाच (उदा. व्हॉट्सॲप) द्या.' },
        { name: 'लोकेशन परवानगी:', text: 'मॅप्स आणि डिलिव्हरी ॲप्सना फक्त "ॲप वापरताना" अशी परवानगी द्या.' },
        { name: 'कॅमेरा / मायक्रोफोन:', text: 'फक्त व्हिडिओ कॉलिंग किंवा कॅमेरा ॲप्सना द्या.' },
      ],
    },
    dosTitle: 'डिजिटल मूलभूत गोष्टींचे सुवर्ण नियम',
    dos: [
      'मोबाईल लॉक करण्यासाठी ६-अंकी अनपेक्षित पिन किंवा फिंगरप्रिंट वापरा.',
      'सिम कार्ड काढून होणाऱ्या OTP चोरीपासून वाचण्यासाठी SIM Card Lock चालू करा.',
      'कंपन्यांचा मूळ सिम पिन (0000 / 1234) लगेच स्वतःच्या नवीन पिनमध्ये बदला.',
      'नेहमी अधिकृत प्ले स्टोअरवरूनच ॲप्स डाऊनलोड करा.',
      'मोबाईलची ऑपरेटिंग सिस्टीम आणि ॲप्स नेहमी अपडेट ठेवा.',
    ],
    donts: [
      '१२३४, ००००, २५८०, जन्माचे वर्ष किंवा गाडीचा नंबर स्क्रीन पिन किंवा सिम पिन म्हणून ठेवू नका.',
      'सिम कार्ड लॉक न करता ठेवू नका — चोर दुसऱ्या मोबाईलमध्ये सिम टाकून बँकेचा OTP चोरू शकतात.',
      'साध्या गेम किंवा टॉर्च ॲपला SMS वाचण्याची परवानगी देऊ नका.',
      'बँक व्यवहारांसाठी पासवर्ड नसलेले मोफत सार्वजनिक वाय-फाय वापरू नका.',
      'पिन कधीही फोनच्या कव्हरमध्ये किंवा पाकिटात कागदावर लिहून ठेवू नका.',
    ],
    nextCta: 'पुढील मॉड्यूल: डिजिटल पेमेंट्स आणि UPI सुरक्षा',
  },
};

export const BasicsPage: React.FC<BasicsPageProps> = ({ setCurrentPage, language }) => {
  const [activeTab, setActiveTab] = useState<'smartphone' | 'simLock' | 'internet' | 'apps'>('smartphone');
  const b = basicsContent[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header / Intro */}
      <div className="max-w-3xl border-b border-[#E5E5E5] pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#171717] bg-[#EFEFED] px-2 py-0.5 rounded">
            {b.moduleTag}
          </span>
          <span className="text-xs text-[#737373] uppercase tracking-wider">{b.categoryTag}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] font-editorial">
          {b.title}
        </h1>
        <p className="text-base text-[#525252] mt-3 leading-relaxed">
          {b.subtitle}
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-px overflow-x-auto">
        <button
          id="tab-btn-smartphone"
          onClick={() => setActiveTab('smartphone')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'smartphone'
              ? 'border-[#171717] text-[#171717]'
              : 'border-transparent text-[#737373] hover:text-[#171717]'
          }`}
        >
          <Smartphone className="w-4 h-4" />
          <span>{b.tabs.smartphone}</span>
        </button>

        <button
          id="tab-btn-simlock"
          onClick={() => setActiveTab('simLock')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'simLock'
              ? 'border-[#171717] text-[#171717]'
              : 'border-transparent text-[#737373] hover:text-[#171717]'
          }`}
        >
          <CreditCard className="w-4 h-4 text-emerald-800" />
          <span>{b.tabs.simLock}</span>
        </button>

        <button
          id="tab-btn-internet"
          onClick={() => setActiveTab('internet')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'internet'
              ? 'border-[#171717] text-[#171717]'
              : 'border-transparent text-[#737373] hover:text-[#171717]'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>{b.tabs.internet}</span>
        </button>

        <button
          id="tab-btn-apps"
          onClick={() => setActiveTab('apps')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'apps'
              ? 'border-[#171717] text-[#171717]'
              : 'border-transparent text-[#737373] hover:text-[#171717]'
          }`}
        >
          <Download className="w-4 h-4" />
          <span>{b.tabs.apps}</span>
        </button>
      </div>

      {/* TAB CONTENT: 1. SMARTPHONE & DEVICE SECURITY */}
      {activeTab === 'smartphone' && (
        <div className="space-y-12 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-6 border border-[#E5E5E5] bg-white rounded-sm">
              <span className="text-xs font-mono font-semibold text-[#737373] uppercase tracking-wider block mb-3">
                {b.s1.tag}
              </span>
              <h3 className="text-lg font-bold text-[#171717] mb-2">{b.s1.title}</h3>
              <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mb-4">
                {b.s1.desc}
              </p>
              <ul className="space-y-2 text-xs text-[#333333]">
                {b.s1.steps.map((st, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 2 */}
            <div className="p-6 border border-[#E5E5E5] bg-white rounded-sm">
              <span className="text-xs font-mono font-semibold text-[#737373] uppercase tracking-wider block mb-3">
                {b.s2.tag}
              </span>
              <h3 className="text-lg font-bold text-[#171717] mb-2">{b.s2.title}</h3>
              <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mb-4">
                {b.s2.desc}
              </p>
              <ul className="space-y-2 text-xs text-[#333333]">
                {b.s2.steps.map((st, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 3 */}
            <div className="p-6 border border-[#E5E5E5] bg-white rounded-sm">
              <span className="text-xs font-mono font-semibold text-[#737373] uppercase tracking-wider block mb-3">
                {b.s3.tag}
              </span>
              <h3 className="text-lg font-bold text-[#171717] mb-2">{b.s3.title}</h3>
              <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mb-4">
                {b.s3.desc}
              </p>
              <ul className="space-y-2 text-xs text-[#333333]">
                {b.s3.steps.map((st, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* DEDICATED DEEP DIVE: SCREEN LOCK & PIN STRENGTH */}
          <div className="p-8 border border-[#E5E5E5] bg-[#FAF9F6] rounded-sm space-y-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <KeyRound className="w-5 h-5 text-[#171717]" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#737373]">
                    Device Security Breakdown
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#171717] font-editorial">
                  {b.s3.whyWeakPinsTitle}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#525252] leading-relaxed max-w-4xl">
              {b.s3.whyWeakPinsDesc}
            </p>

            {/* BAD PINS GRID */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-700 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>{b.s3.badPinHeader}</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {b.s3.badPins.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white border border-red-200 rounded space-y-1.5 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-bold text-red-900 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                        {item.code}
                      </span>
                      <XCircle className="w-4 h-4 text-red-600" />
                    </div>
                    <p className="text-xs text-red-950 leading-relaxed pt-1">
                      {item.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* STRONG PIN GOLDEN RULES */}
            <div className="p-6 bg-white border border-emerald-200 rounded-sm space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <span>{b.s3.strongPinRuleTitle}</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-emerald-950">
                {b.s3.strongPinRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: 2. SIM CARD LOCK & EJECT DEFENSE */}
      {activeTab === 'simLock' && (
        <div className="space-y-12 animate-in fade-in duration-200">
          {/* SIM HERO BANNER */}
          <div className="p-8 border border-red-200 bg-red-50/40 rounded-sm space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-red-900 bg-red-100 px-2 py-0.5 rounded border border-red-200">
                {b.sim.tag}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] font-editorial">
              {b.sim.title}
            </h2>
            <p className="text-sm sm:text-base text-[#525252] leading-relaxed max-w-3xl">
              {b.sim.subtitle}
            </p>
          </div>

          {/* THE HIDDEN DANGER: PHYSICAL SIM EJECTION */}
          <div className="p-8 border border-[#E5E5E5] bg-white rounded-sm space-y-6">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-600" />
              <h3 className="text-xl font-bold text-[#171717] font-editorial">
                {b.sim.threatTitle}
              </h3>
            </div>
            <p className="text-sm text-[#525252] leading-relaxed max-w-4xl">
              {b.sim.threatDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {b.sim.threatPoints.map((point, idx) => (
                <div key={idx} className="p-4 bg-[#FAF9F6] border border-[#E5E5E5] rounded flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">
                    !
                  </span>
                  <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* THE SOLUTION & STEP-BY-STEP GUIDES */}
          <div className="p-8 border border-emerald-200 bg-emerald-50/30 rounded-sm space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <h3 className="text-xl font-bold text-[#171717] font-editorial">
                  {b.sim.defenseTitle}
                </h3>
              </div>
              <p className="text-sm text-emerald-950 mt-2 leading-relaxed max-w-4xl">
                {b.sim.defenseDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Android Guide */}
              <div className="p-6 bg-white border border-[#E5E5E5] rounded space-y-3 shadow-2xs">
                <h4 className="text-sm font-bold text-[#171717] flex items-center gap-2 border-b border-[#F0F0EE] pb-2">
                  <Smartphone className="w-4 h-4 text-[#171717]" />
                  <span>{b.sim.stepsAndroid.platform}</span>
                </h4>
                <ol className="space-y-2.5 pt-1 text-xs text-[#333333]">
                  {b.sim.stepsAndroid.steps.map((st, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-mono font-bold text-[#171717] shrink-0 bg-[#F5F5F4] w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
                        {i + 1}
                      </span>
                      <span>{st}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* iPhone Guide */}
              <div className="p-6 bg-white border border-[#E5E5E5] rounded space-y-3 shadow-2xs">
                <h4 className="text-sm font-bold text-[#171717] flex items-center gap-2 border-b border-[#F0F0EE] pb-2">
                  <Smartphone className="w-4 h-4 text-[#171717]" />
                  <span>{b.sim.stepsIos.platform}</span>
                </h4>
                <ol className="space-y-2.5 pt-1 text-xs text-[#333333]">
                  {b.sim.stepsIos.steps.map((st, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-mono font-bold text-[#171717] shrink-0 bg-[#F5F5F4] w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
                        {i + 1}
                      </span>
                      <span>{st}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* PUK WARNING CALLOUT */}
            <div className="p-5 bg-white border border-amber-300 rounded space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{b.sim.pukWarning.title}</span>
              </div>
              <p className="text-xs text-amber-950 leading-relaxed">
                {b.sim.pukWarning.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: 3. INTERNET & SAFE BROWSING */}
      {activeTab === 'internet' && (
        <div className="space-y-12 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-sm space-y-4">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-[#171717]" />
                <span className="text-xs font-mono font-semibold text-[#737373] uppercase tracking-wider">
                  {b.i1.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#171717]">{b.i1.title}</h3>
              <p className="text-sm text-[#525252] leading-relaxed">
                {b.i1.desc}
              </p>
              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-[#333333]">
                {b.i1.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border border-[#E5E5E5] bg-white rounded-sm space-y-4">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#171717]" />
                <span className="text-xs font-mono font-semibold text-[#737373] uppercase tracking-wider">
                  {b.i2.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#171717]">{b.i2.title}</h3>
              <p className="text-sm text-[#525252] leading-relaxed">
                {b.i2.desc}
              </p>
              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-[#333333]">
                {b.i2.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: 4. APPS & PERMISSIONS */}
      {activeTab === 'apps' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="p-8 border border-[#E5E5E5] bg-white rounded-sm space-y-4">
            <span className="text-xs font-mono font-semibold text-[#737373] uppercase tracking-wider block">
              {b.a1.tag}
            </span>
            <h3 className="text-xl font-bold text-[#171717]">{b.a1.title}</h3>
            <p className="text-sm text-[#525252] leading-relaxed">
              {b.a1.desc}
            </p>
          </div>

          <div className="p-8 border border-[#E5E5E5] bg-white rounded-sm space-y-6">
            <div>
              <span className="text-xs font-mono font-semibold text-[#737373] uppercase tracking-wider block mb-1">
                {b.a2.tag}
              </span>
              <h3 className="text-xl font-bold text-[#171717]">{b.a2.title}</h3>
              <p className="text-sm text-[#525252] mt-1">
                {b.a2.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {b.a2.items.map((item, idx) => (
                <div key={idx} className="p-4 border border-[#E5E5E5] rounded bg-[#FAF9F6]">
                  <strong className="text-xs font-semibold text-[#171717] block mb-1">
                    {item.name}
                  </strong>
                  <p className="text-xs text-[#525252] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* OFFICIAL YOUTUBE VIDEO GUIDES & TUTORIALS */}
      <VideoGuideSection category="basics" language={language} />

      {/* DOs & DONTs CHECKLIST */}
      <section className="border-t border-[#E5E5E5] pt-12">
        <h2 className="text-xl sm:text-2xl font-bold text-[#171717] mb-6 font-editorial">
          {b.dosTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-emerald-200 bg-emerald-50/40 rounded-sm space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              <span>DO / हमेशा करें</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
              {b.dos.map((d, i) => (
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
              {b.donts.map((d, i) => (
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
            setCurrentPage('payments');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-white text-sm font-semibold rounded hover:bg-[#333333] transition-colors"
        >
          <span>{b.nextCta}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

