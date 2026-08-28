import React, { useState } from 'react';
import { PageId, Language } from '../types';
import { VideoGuideSection } from '../components/VideoGuideSection';
import {
  CreditCard,
  QrCode,
  ShieldCheck,
  ShieldAlert,
  Lock,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Smartphone,
  Eye,
  AlertTriangle,
} from 'lucide-react';

interface PaymentsPageProps {
  setCurrentPage: (page: PageId) => void;
  language: Language;
}

const paymentsContent = {
  en: {
    moduleTag: 'Module 02',
    categoryTag: 'Financial Safety',
    title: 'Digital Payments & UPI Security',
    subtitle: 'Learn how Unified Payments Interface (UPI) functions, master the 7-step transaction flow, and internalize the golden rules that protect your bank account from fraud.',
    whatIsUpi: {
      tag: 'Plain Language Explanation',
      title: 'What is UPI (Unified Payments Interface)?',
      desc: 'Think of UPI as a digital courier system built by the National Payments Corporation of India (NPCI). Instead of sharing your 16-digit bank account number and IFSC code, UPI lets you transfer money directly between bank accounts instantly using just a phone number, QR code, or simple UPI ID (like name@upi).',
      points: [
        'Instant 24/7 bank-to-bank settlement (even on bank holidays and Sundays).',
        'Operates through verified apps: BHIM, Google Pay, PhonePe, Paytm, or official bank apps.',
        'Zero charges for standard everyday peer-to-merchant consumer transactions.',
      ],
      qrTitle: 'Understanding QR Codes',
      qrDesc: 'A QR (Quick Response) code is simply a scannable picture containing the merchant’s UPI ID. Scanning a QR code auto-fills who you are paying so you do not have to type their mobile number manually.',
    },
    sevenStepsTitle: '7-Step Interactive Guide: Making a Safe UPI Payment',
    stepLabel: 'Step',
    steps: [
      {
        num: 1,
        title: 'Open Your UPI App',
        desc: 'Unlock your phone and open your authorized UPI application (such as BHIM, Google Pay, PhonePe, or Paytm).',
        tip: 'Ensure the app is protected with biometric fingerprint or device passcode lock.',
      },
      {
        num: 2,
        title: 'Select Payment Option',
        desc: 'Tap "Scan QR code" or "Pay to Mobile Number / UPI ID".',
        tip: 'Only use the camera scanner directly inside your verified payment app.',
      },
      {
        num: 3,
        title: 'Scan QR or Enter Recipient',
        desc: 'Point your camera steadily at the merchant QR code stand, or carefully type the recipient’s 10-digit mobile number.',
        tip: 'Look closely at the merchant stand to ensure no fraudulent sticker is pasted over the original QR code.',
      },
      {
        num: 4,
        title: 'Enter the Exact Amount',
        desc: 'Type the exact amount in Rupees (₹) you intend to pay.',
        tip: 'Always double-check the zeros and decimal points (e.g. ₹50 vs ₹500).',
      },
      {
        num: 5,
        title: 'Verify the Recipient Name',
        desc: 'Crucial verification checkpoint: Check the official name that appears on the screen above the amount.',
        tip: 'Never proceed if the displayed name does not match the shop or person you are paying.',
      },
      {
        num: 6,
        title: 'Enter Your Secret UPI PIN',
        desc: 'Type your 4-digit or 6-digit UPI PIN on the secure black keyboard.',
        tip: 'Shield your phone screen so bystanders or store clerks cannot observe your PIN digits.',
      },
      {
        num: 7,
        title: 'Transaction Confirmation',
        desc: 'A green checkmark will appear with the transaction reference number and bank confirmation SMS.',
        tip: 'Wait for the sound confirmation box or show the green tick screen to the merchant.',
      },
    ],
    goldenRule: {
      tag: 'THE ABSOLUTE GOLDEN RULE',
      title: 'Entering Your PIN Always SENDS (Debits) Money',
      subtitle: 'To RECEIVE money into your bank account, you NEVER need to enter your UPI PIN, scan a QR code, or accept a payment request.',
      rule1Title: 'Sending Money (You are paying someone)',
      rule1Desc: 'You MUST enter your 4 or 6-digit secret UPI PIN to authorize money leaving your account.',
      rule2Title: 'Receiving Money (Someone is paying you)',
      rule2Desc: 'Money arrives automatically into your bank account. You do NOT enter PIN, do NOT scan QR codes, and do NOT click approve.',
    },
    pinVsOtp: {
      title: 'UPI PIN vs OTP (One-Time Password)',
      pinTitle: 'UPI PIN (Personal Identification Number)',
      pinDesc: 'Created by you during setup. Stays the same for every transaction. Never changes unless you reset it.',
      pinAlert: 'Never share with anyone. Only typed on the secure black bank keyboard.',
      otpTitle: 'OTP (One-Time Password)',
      otpDesc: 'Generated randomly by your bank and sent via SMS. Valid for only 5–10 minutes for a single transaction.',
      otpAlert: 'Never read out loud or share over phone calls, even if caller claims to be bank manager.',
    },
    dosTitle: 'Summary: Digital Payments Safety Checklist',
    dos: [
      'Always verify recipient name on screen before typing your PIN.',
      'Check transaction confirmation SMS sent directly by your bank.',
      'Keep your daily UPI transaction limit set to a safe amount in your banking app.',
      'Cover your screen when typing PIN in crowded grocery stores.',
    ],
    donts: [
      'Never enter your UPI PIN to "receive", "claim", or "refund" money.',
      'Never scan a QR code sent by a stranger on WhatsApp claiming to send advance payments.',
      'Never use simple PINs like 1111, 1234, or your birth year.',
      'Never make payments while on a phone call with someone instructing you step-by-step.',
    ],
    nextCta: 'Next Module: Online Safety & Cyber Threat Defense',
  },
  hi: {
    moduleTag: 'मॉड्यूल 02',
    categoryTag: 'वित्तीय सुरक्षा',
    title: 'डिजिटल भुगतान और UPI सुरक्षा',
    subtitle: 'UPI कैसे काम करता है, 7-चरणों की सुरक्षित भुगतान प्रक्रिया और अपने बैंक खाते को धोखाधड़ी से बचाने के सुनहरे नियम सीखें।',
    whatIsUpi: {
      tag: 'सरल भाषा में समझें',
      title: 'UPI (यूनिफाइड पेमेंट्स इंटरफेस) क्या है?',
      desc: 'UPI को नेशनल पेमेंट्स कॉर्पोरेशन ऑफ इंडिया (NPCI) द्वारा बनाई गई एक सुरक्षित डिजिटल कूरियर प्रणाली समझें। 16-अंकों का खाता नंबर और IFSC कोड साझा किए बिना, UPI आपको केवल एक फोन नंबर, QR कोड या UPI ID (जैसे name@upi) के माध्यम से सीधे एक बैंक खाते से दूसरे खाते में तुरंत पैसे भेजने की सुविधा देता है।',
      points: [
        '24 घंटे और सातों दिन तुरंत बैंक-से-बैंक भुगतान (रविवार और छुट्टियों में भी)।',
        'प्रमाणित ऐप्स के माध्यम से संचालित: BHIM, Google Pay, PhonePe, Paytm या आपके बैंक का आधिकारिक ऐप।',
        'सामान्य दैनिक खरीदारी और उपभोक्ता भुगतानों पर शून्य शुल्क।',
      ],
      qrTitle: 'QR कोड को समझें',
      qrDesc: 'QR कोड एक स्कैन करने योग्य चौकोर चित्र होता है जिसमें दुकानदार की UPI ID छुपी होती है। QR कोड स्कैन करने से प्राप्तकर्ता का नाम अपने आप भर जाता है, जिससे मोबाइल नंबर टाइप करने की गलती नहीं होती।',
    },
    sevenStepsTitle: 'सुरक्षित UPI भुगतान के 7 चरण (इंटरैक्टिव गाइड)',
    stepLabel: 'चरण',
    steps: [
      {
        num: 1,
        title: 'अपना UPI ऐप खोलें',
        desc: 'अपने फोन को अनलॉक करें और अपना प्रमाणित UPI ऐप (जैसे BHIM, Google Pay, PhonePe या Paytm) खोलें।',
        tip: 'सुनिश्चित करें कि ऐप फिंगरप्रिंट या स्क्रीन लॉक पासवर्ड से सुरक्षित है।',
      },
      {
        num: 2,
        title: 'भुगतान विकल्प चुनें',
        desc: '"Scan QR code" (QR कोड स्कैन करें) या "Pay to Mobile Number" (नंबर पर भेजें) पर टैप करें।',
        tip: 'हमेशा अपने प्रमाणित पेमेंट ऐप के अंदर दिए गए कैमरे का ही उपयोग करें।',
      },
      {
        num: 3,
        title: 'QR कोड स्कैन करें या नंबर डालें',
        desc: 'दुकानदार के QR कोड पर कैमरा सीधा रखें, या प्राप्तकर्ता का 10-अंकों का मोबाइल नंबर ध्यानपूर्वक दर्ज करें।',
        tip: 'दुकान के स्टैंड पर ध्यान से देखें कि असली QR कोड पर कोई फर्जी स्टिकर तो नहीं चिपकाया गया है।',
      },
      {
        num: 4,
        title: 'सही राशि (रुपये ₹) दर्ज करें',
        desc: 'जितने रुपये आप भेजना चाहते हैं, वह सटीक राशि टाइप करें।',
        tip: 'शून्य और दशमलव का विशेष ध्यान रखें (जैसे ₹50 बनाम ₹500)।',
      },
      {
        num: 5,
        title: 'प्राप्तकर्ता का नाम अवश्य जांचें',
        desc: 'सबसे महत्वपूर्ण सुरक्षा जांच: राशि के ऊपर स्क्रीन पर दिखने वाले दुकानदार/व्यक्ति का नाम ध्यान से पढ़ें।',
        tip: 'यदि स्क्रीन पर दिखने वाला नाम उस दुकान या व्यक्ति से मेल नहीं खाता, तो कभी आगे न बढ़ें।',
      },
      {
        num: 6,
        title: 'अपना गोपनीय UPI PIN डालें',
        desc: 'सुरक्षित काले कीबोर्ड पर अपना 4 या 6 अंकों का गुप्त UPI PIN दर्ज करें।',
        tip: 'पिन डालते समय स्क्रीन को थोड़ा छुपा लें ताकि कोई दूसरा व्यक्ति आपके पिन के अंक न देख सके।',
      },
      {
        num: 7,
        title: 'भुगतान सफलता की पुष्टि',
        desc: 'स्क्रीन पर हरे रंग का टिक मार्क (✓) और बैंक से SMS का अलर्ट दिखाई देगा।',
        tip: 'दुकानदार के साउंड बॉक्स की आवाज सुनें या स्क्रीन पर हरा टिक दुकानदार को दिखाएं।',
      },
    ],
    goldenRule: {
      tag: 'UPI का सबसे बड़ा सुनहरा नियम',
      title: 'PIN दर्ज करने का अर्थ हमेशा पैसे भेजना (कटना) होता है',
      subtitle: 'अपने बैंक खाते में पैसे प्राप्त (Receive) करने के लिए कभी भी UPI PIN डालने, QR कोड स्कैन करने या रिक्वेस्ट स्वीकार करने की आवश्यकता नहीं होती।',
      rule1Title: 'पैसे भेजते समय (जब आप किसी को भुगतान कर रहे हैं)',
      rule1Desc: 'अपने खाते से पैसे काटने की अनुमति देने के लिए आपको अपना 4 या 6 अंकों का गोपनीय UPI PIN डालना अनिवार्य है।',
      rule2Title: 'पैसे प्राप्त करते समय (जब कोई आपको पैसे भेज रहा है)',
      rule2Desc: 'पैसे सीधे आपके बैंक खाते में जमा हो जाते हैं। आपको कोई PIN नहीं डालना है, न ही कोई QR स्कैन करना है।',
    },
    pinVsOtp: {
      title: 'UPI PIN और OTP (वन-टाइम पासवर्ड) में अंतर',
      pinTitle: 'UPI PIN (गोपनीय पिन)',
      pinDesc: 'यह आपके द्वारा खुद बनाया जाता है। यह हर लेन-देन के लिए एक समान रहता है और जब तक आप न बदलें, नहीं बदलता।',
      pinAlert: 'इसे किसी के साथ कभी साझा न करें। इसे केवल सुरक्षित काले कीबोर्ड पर खुद टाइप करें।',
      otpTitle: 'OTP (वन-टाइम पासवर्ड)',
      otpDesc: 'यह बैंक द्वारा SMS के माध्यम से भेजा जाता है। यह केवल एक बार के लेनदेन के लिए 5–10 मिनट तक वैध रहता है।',
      otpAlert: 'फोन कॉल पर किसी को भी OTP बोलकर न बताएं, भले ही वह बैंक मैनेजर होने का दावा करे।',
    },
    dosTitle: 'डिजिटल भुगतान सुरक्षा चेकलिस्ट',
    dos: [
      'पिन डालने से पहले स्क्रीन पर दिखने वाले दुकानदार का नाम हमेशा जांचें।',
      'लेनदेन के बाद अपने बैंक से आए आधिकारिक SMS को जरूर पढ़ें।',
      'अपने बैंकिंग ऐप में दैनिक UPI लेन-देन की सीमा सुरक्षित रखें।',
      'भीड़भाड़ वाली दुकानों में पिन डालते समय स्क्रीन को अपने हाथ से ढक लें।',
    ],
    donts: [
      'पैसे "प्राप्त करने", "इनाम पाने" या "रिफंड" के लिए कभी UPI PIN न डालें।',
      'व्हाट्सएप पर किसी अनजान व्यक्ति द्वारा भेजे गए QR कोड को पैसे पाने के लिए स्कैन न करें।',
      '1111, 1234 या अपनी जन्मतिथि जैसा आसान पिन कभी न बनाएं।',
      'फोन कॉल पर किसी के निर्देशानुसार कभी पेमेंट न करें।',
    ],
    nextCta: 'अगला मॉड्यूल: ऑनलाइन सुरक्षा एवं साइबर धोखाधड़ी से बचाव',
  },
  mr: {
    moduleTag: 'मॉड्यूल ०२',
    categoryTag: 'आर्थिक सुरक्षा',
    title: 'डिजिटल पेमेंट्स आणि UPI सुरक्षा',
    subtitle: 'UPI कसे चालते, ७-पायऱ्यांची सुरक्षित व्यवहार पद्धत आणि बँक खाते सुरक्षित ठेवण्याचे सुवर्ण नियम जाणून घ्या.',
    whatIsUpi: {
      tag: 'अतिशय सोप्या भाषेत',
      title: 'UPI (युनिफाइड पेमेंट्स इंटरफेस) म्हणजे काय?',
      desc: 'UPI म्हणजे भारतीय राष्ट्रीय देयक महामंडळ (NPCI) ने तयार केलेली एक सुरक्षित डिजिटल व्यवस्था. १६-अंकी बँक खाते क्रमांक किंवा IFSC कोड न देता, फक्त मोबाईल नंबर, QR कोड किंवा UPI ID (उदा. name@upi) वापरून थेट एका खात्यातून दुसऱ्या खात्यात तात्काळ पैसे पाठवता येतात.',
      points: [
        '२४ तास आणि ३६५ दिवस बँक-ते-बँक व्यवहार (सुट्टीच्या दिवशीही तात्काळ पैसे जमा).',
        'अधिकृत ॲप्सद्वारे सुरक्षित: BHIM, Google Pay, PhonePe, Paytm किंवा बँकेचे स्वतःचे ॲप.',
        'दैनंदिन किरकोळ खरेदी आणि सर्वसामान्य व्यवहारांसाठी कोणतेही शुल्क नाही.',
      ],
      qrTitle: 'QR कोड समजून घ्या',
      qrDesc: 'QR कोड म्हणजे एक स्कॅन करता येणारे चौकोनी चित्र ज्यामध्ये दुकानदाराचा UPI ID असतो. QR कोड स्कॅन केल्यावर दुकानदाराचे नाव आपोआप येते, त्यामुळे मोबाईल नंबर टाईप करण्याची चूक टळते.',
    },
    sevenStepsTitle: 'सुरक्षित UPI पेमेंटच्या ७ सोप्या पायऱ्या (मार्गदर्शिका)',
    stepLabel: 'पायरी',
    steps: [
      {
        num: 1,
        title: 'तुमचे UPI ॲप उघडा',
        desc: 'मोबाईल अनलॉक करा आणि तुमचे अधिकृत UPI ॲप (उदा. BHIM, Google Pay, PhonePe, Paytm) उघडा.',
        tip: 'ॲपला फिंगरप्रिंट किंवा पासवर्ड लॉक असल्याची खात्री करा.',
      },
      {
        num: 2,
        title: 'पेमेंटचा पर्याय निवडा',
        desc: '"Scan QR code" (QR स्कॅन करा) किंवा "Pay to Mobile Number" (नंबरवर पाठवा) निवडा.',
        tip: 'नेहमी अधिकृत पेमेंट ॲपमधीलच कॅमेरा स्कॅनर वापरा.',
      },
      {
        num: 3,
        title: 'QR कोड स्कॅन करा किंवा नंबर टाका',
        desc: 'दुकानदाराच्या QR कोडवर कॅमेरा स्थिर धरा किंवा १०-अंकी मोबाईल नंबर काळजीपूर्वक टाईप करा.',
        tip: 'दुकानदाराच्या मूळ QR कोडवर कोणी बनावट स्टिकर चिकटवले नाही ना, हे तपासा.',
      },
      {
        num: 4,
        title: 'अचूक रक्कम (₹) टाका',
        desc: 'तुम्हाला जेवढे पैसे पाठवायचे आहेत तेवढी रक्कम अचूक टाईप करा.',
        tip: 'शून्य (०) आणि दशांश व्यवस्थित तपासा (उदा. ५० रुपये की ५०० रुपये).',
      },
      {
        num: 5,
        title: 'दुकानदार / व्यक्तीचे नाव तपासा',
        desc: 'सर्वात महत्त्वाची पडताळणी: रकमेच्या वर स्क्रीनवर येणारे अधिकृत नाव नीट वाचा.',
        tip: 'दिसणारे नाव त्या दुकानाशी किंवा व्यक्तीशी जुळत नसेल तर पुढे जाऊ नका.',
      },
      {
        num: 6,
        title: 'तुमचा गोपनीय UPI PIN टाका',
        desc: 'सुरक्षित काळ्या कीबोर्डवर तुमचा ४ किंवा ६ अंकी गुप्त UPI PIN टाईप करा.',
        tip: 'पिन टाकताना स्क्रीन थोडी झाकून घ्या जेणेकरून कोणालाही तुमचे आकडे दिसणार नाहीत.',
      },
      {
        num: 7,
        title: 'व्यवहार पूर्ण झाल्याची खात्री',
        desc: 'स्क्रीनवर हिरवी बरोबरची खूण (✓) दिसेल आणि बँकेचा SMS मेसेज येईल.',
        tip: 'दुकानदाराच्या साऊंड बॉक्सचा आवाज ऐका किंवा स्क्रीनवरील हिरवी खूण दुकानदाराला दाखवा.',
      },
    ],
    goldenRule: {
      tag: 'UPI चा सर्वात महत्त्वाचा सुवर्ण नियम',
      title: 'पिन (PIN) टाकणे म्हणजे नेहमी खात्यातून पैसे जाणे (कट होणे)',
      subtitle: 'खात्यात पैसे मिळवण्यासाठी (Receive) कधीही UPI PIN टाकावा लागत नाही, QR स्कॅन करावा लागत नाही किंवा कोणतीही रिक्वेस्ट मान्य करावी लागत नाही.',
      rule1Title: 'पैसे पाठवताना (जेव्हा तुम्ही कोणाला पैसे देत आहात)',
      rule1Desc: 'खात्यातून पैसे कट होण्याची परवानगी देण्यासाठी तुम्हाला तुमचा गोपनीय UPI PIN टाकावाच लागतो.',
      rule2Title: 'पैसे मिळवताना (जेव्हा कोणी तुम्हाला पैसे पाठवत आहे)',
      rule2Desc: 'पैसे थेट तुमच्या बँक खात्यात आपोआप जमा होतात. तुम्हाला कोणताही पिन टाकायचा नसतो.',
    },
    pinVsOtp: {
      title: 'UPI PIN आणि OTP (वन-टाइम पासवर्ड) मधील फरक',
      pinTitle: 'UPI PIN (गोपनीय पिन)',
      pinDesc: 'हा तुम्ही स्वतः तयार केलेला असतो. प्रत्येक व्यवहारासाठी हा एकच असतो आणि तुम्ही बदलत नाही तोपर्यंत तोच राहतो.',
      pinAlert: 'हा कोणालाही सांगू नये. हा फक्त सुरक्षित काळ्या कीबोर्डवर स्वतःच टाईप करावा.',
      otpTitle: 'OTP (वन-टाइम पासवर्ड)',
      otpDesc: 'हा बँकेकडून SMS द्वारे येतो. हा फक्त एका व्यवहारासाठी ५ ते १० मिनिटांसाठी वैध असतो.',
      otpAlert: 'फोनवर कोणालाही OTP वाचून दाखवू नका, अगदी बँकेच्या अधिकाऱ्यालाही नाही.',
    },
    dosTitle: 'डिजिटल पेमेंट सुरक्षेची नियमावली',
    dos: [
      'पिन टाकण्यापूर्वी स्क्रीनवर दिसणारे नाव नेहमी तपासा.',
      'व्यवहार झाल्यावर बँकेकडून आलेला अधिकृत SMS मेसेज वाचा.',
      'मोबाईल बँकिंग ॲपमध्ये दैनंदिन UPI खर्चाची मर्यादा सुरक्षित ठेवा.',
      'गर्दीच्या ठिकाणी पिन टाकताना स्क्रीन हाताने झाकून घ्या.',
    ],
    donts: [
      'पैसे "मिळवण्यासाठी", "रिफंड" किंवा "बक्षीस" मिळवण्यासाठी कधीही PIN टाकू नका.',
      'व्हॉट्सॲपवर अनोळखी व्यक्तीने पाठवलेला QR कोड पैसे मिळवण्यासाठी स्कॅन करू नका.',
      '११११, १२३४ किंवा जन्मतारीख असा सोपा पिन ठेवू नका.',
      'फोनवर कोणाच्या तरी सांगण्यावरून स्टेप-बाय-स्टेप पेमेंट करू नका.',
    ],
    nextCta: 'पुढील मॉड्यूल: ऑनलाइन सुरक्षा आणि सायबर गुन्हेगारी बचाव',
  },
};

export const PaymentsPage: React.FC<PaymentsPageProps> = ({ setCurrentPage, language }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const p = paymentsContent[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header / Intro */}
      <div className="max-w-3xl border-b border-[#E5E5E5] pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#171717] bg-[#EFEFED] px-2 py-0.5 rounded">
            {p.moduleTag}
          </span>
          <span className="text-xs text-[#737373] uppercase tracking-wider">{p.categoryTag}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] font-editorial">
          {p.title}
        </h1>
        <p className="text-base text-[#525252] mt-3 leading-relaxed">
          {p.subtitle}
        </p>
      </div>

      {/* 1. What is UPI? Concept Explanation */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 p-8 border border-[#E5E5E5] bg-white rounded-sm space-y-4">
          <span className="text-xs font-mono font-semibold text-[#737373] uppercase tracking-wider block">
            {p.whatIsUpi.tag}
          </span>
          <h2 className="text-2xl font-bold text-[#171717] font-editorial">
            {p.whatIsUpi.title}
          </h2>
          <p className="text-sm text-[#525252] leading-relaxed">
            {p.whatIsUpi.desc}
          </p>
          <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#333333]">
            {p.whatIsUpi.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 p-8 border border-[#E5E5E5] bg-[#FAF9F6] rounded-sm space-y-4">
          <div className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-[#171717]" />
            <h3 className="text-lg font-bold text-[#171717]">{p.whatIsUpi.qrTitle}</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
            {p.whatIsUpi.qrDesc}
          </p>
          <div className="p-4 bg-white border border-[#E5E5E5] rounded flex items-center justify-between text-xs font-mono">
            <span className="text-[#737373]">Merchant Name:</span>
            <span className="font-bold text-[#171717]">SHREE_PROVISION_STORE</span>
          </div>
        </div>
      </section>

      {/* 2. 7-Step Interactive Payment Guide */}
      <section className="border-t border-[#E5E5E5] pt-12 space-y-8">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#737373] block mb-1">
            Step-by-Step Flow
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] font-editorial">
            {p.sevenStepsTitle}
          </h2>
        </div>

        {/* Step Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {p.steps.map((st) => (
            <button
              key={st.num}
              onClick={() => setActiveStep(st.num)}
              className={`p-3 border text-left rounded transition-all ${
                activeStep === st.num
                  ? 'border-[#171717] bg-[#171717] text-white shadow-xs'
                  : 'border-[#E5E5E5] bg-white text-[#525252] hover:border-[#737373]'
              }`}
            >
              <span className="block text-[11px] font-mono opacity-80">{p.stepLabel} {st.num}</span>
              <strong className="block text-xs truncate mt-0.5">{st.title}</strong>
            </button>
          ))}
        </div>

        {/* Active Step Viewer */}
        {(() => {
          const cur = p.steps.find((s) => s.num === activeStep) || p.steps[0];
          return (
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-sm space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-[#F0F0EE] pb-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#737373]">
                  {p.stepLabel} {cur.num} of 7
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded">
                  Active Instruction
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#171717]">{cur.title}</h3>
              <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
                {cur.desc}
              </p>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E5E5] rounded flex items-start gap-2.5 text-xs text-[#171717]">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Pro-Tip: </strong>
                  <span>{cur.tip}</span>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* 3. The Golden Rule of UPI PIN */}
      <section className="p-8 sm:p-10 border-2 border-[#171717] bg-[#FAF9F6] rounded-sm space-y-6">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
          <div>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-amber-900 block">
              {p.goldenRule.tag}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#171717] font-editorial">
              {p.goldenRule.title}
            </h3>
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#171717] font-medium leading-relaxed">
          {p.goldenRule.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 border border-[#E5E5E5] bg-white rounded">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#171717] mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>{p.goldenRule.rule1Title}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
              {p.goldenRule.rule1Desc}
            </p>
          </div>

          <div className="p-5 border border-[#E5E5E5] bg-white rounded">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#171717] mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{p.goldenRule.rule2Title}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
              {p.goldenRule.rule2Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 4. PIN vs OTP */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 border border-[#E5E5E5] bg-white rounded-sm space-y-4">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#171717]" />
            <h3 className="text-lg font-bold text-[#171717]">{p.pinVsOtp.pinTitle}</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
            {p.pinVsOtp.pinDesc}
          </p>
          <div className="p-3 bg-[#FAF9F6] border border-[#E5E5E5] rounded text-xs text-[#171717] font-medium">
            {p.pinVsOtp.pinAlert}
          </div>
        </div>

        <div className="p-8 border border-[#E5E5E5] bg-white rounded-sm space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-[#171717]" />
            <h3 className="text-lg font-bold text-[#171717]">{p.pinVsOtp.otpTitle}</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
            {p.pinVsOtp.otpDesc}
          </p>
          <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-900 font-medium">
            {p.pinVsOtp.otpAlert}
          </div>
        </div>
      </section>

      {/* OFFICIAL YOUTUBE VIDEO GUIDES & TUTORIALS */}
      <VideoGuideSection category="payments" language={language} />

      {/* 5. DOs and DONTs */}
      <section className="border-t border-[#E5E5E5] pt-12">
        <h2 className="text-xl sm:text-2xl font-bold text-[#171717] mb-6 font-editorial">
          {p.dosTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-emerald-200 bg-emerald-50/40 rounded-sm space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              <span>DO / हमेशा करें</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
              {p.dos.map((d, i) => (
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
              {p.donts.map((d, i) => (
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
            setCurrentPage('safety');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-white text-sm font-semibold rounded hover:bg-[#333333] transition-colors"
        >
          <span>{p.nextCta}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
