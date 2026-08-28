export type PageId = 'home' | 'basics' | 'payments' | 'safety' | 'services' | 'quiz' | 'about';

export type Language = 'en' | 'hi' | 'mr';

export type TextSize = 'normal' | 'large' | 'extra-large';

export interface ScamScenario {
  id: string;
  sender: string;
  senderHi?: string;
  senderMr?: string;
  channel: 'SMS' | 'WhatsApp' | 'Call' | 'Email';
  message: string;
  messageHi: string;
  messageMr: string;
  isScam: boolean;
  type: string;
  typeHi: string;
  typeMr: string;
  redFlags: string[];
  redFlagsHi: string[];
  redFlagsMr: string[];
  explanation: string;
  explanationHi: string;
  explanationMr: string;
  safetyTip: string;
  safetyTipHi: string;
  safetyTipMr: string;
}

export interface QuizQuestion {
  id: number;
  category: 'basics' | 'payments' | 'safety' | 'services';
  question: string;
  questionHi: string;
  questionMr: string;
  options: {
    text: string;
    textHi: string;
    textMr: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  explanationHi: string;
  explanationMr: string;
}

export interface SearchItem {
  id: string;
  title: string;
  titleHi?: string;
  titleMr?: string;
  category: string;
  categoryHi?: string;
  categoryMr?: string;
  page: PageId;
  sectionId?: string;
  keywords: string[];
  summary: string;
  summaryHi?: string;
  summaryMr?: string;
}

export interface VideoGuide {
  id: string;
  category: 'basics' | 'payments' | 'safety' | 'services';
  title: string;
  titleHi: string;
  titleMr: string;
  description: string;
  descriptionHi: string;
  descriptionMr: string;
  channel: string;
  channelTag: string;
  channelTagHi?: string;
  channelTagMr?: string;
  youtubeUrl: string;
  duration: string;
  languageNote: string;
  languageNoteHi: string;
  languageNoteMr: string;
}

