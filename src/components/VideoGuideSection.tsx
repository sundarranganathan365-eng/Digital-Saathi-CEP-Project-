import React from 'react';
import { Language, VideoGuide } from '../types';
import { videoGuides } from '../data/videoGuides';
import { ExternalLink, Play, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

interface VideoGuideSectionProps {
  category: 'basics' | 'payments' | 'safety' | 'services' | 'all';
  language: Language;
  title?: string;
  subtitle?: string;
  limit?: number;
}

const sectionTranslations = {
  en: {
    headerBadge: 'Curated Video Guides',
    defaultTitle: 'Official Video Tutorials & Awareness Guides',
    defaultSubtitle: 'Watch direct, step-by-step video explainers from verified institutions including RBI, CyberDost (MHA), UIDAI, and Digital India.',
    watchBtn: 'Watch on YouTube',
    durationLabel: 'Duration',
    verifiedSource: 'Verified Source',
    directNotice: 'Direct links open official educational channels on YouTube in a new tab.',
  },
  hi: {
    headerBadge: 'प्रमाणित वीडियो गाइड',
    defaultTitle: 'आधिकारिक वीडियो ट्यूटोरियल एवं जागरूकता गाइड',
    defaultSubtitle: 'भारतीय रिज़र्व बैंक (RBI), गृह मंत्रालय (CyberDost), UIDAI और डिजिटल इंडिया द्वारा जारी किए गए सीधे वीडियो देखें।',
    watchBtn: 'यूट्यूब (YouTube) पर देखें',
    durationLabel: 'समय',
    verifiedSource: 'प्रमाणित स्रोत',
    directNotice: 'सभी लिंक सीधे यूट्यूब पर आधिकारिक व सुरक्षित चैनलों में नए टैब में खुलते हैं।',
  },
  mr: {
    headerBadge: 'प्रमाणित व्हिडिओ मार्गदर्शक',
    defaultTitle: 'अधिकृत व्हिडिओ ट्यूटोरियल व मार्गदर्शन',
    defaultSubtitle: 'RBI, गृह मंत्रालय (CyberDost), UIDAI आणि डिजिटल इंडियाचे अधिकृत व्हिडिओ मार्गदर्शक थेट पहा.',
    watchBtn: 'यूट्यूबवर (YouTube) पहा',
    durationLabel: 'कालावधी',
    verifiedSource: 'अधिकृत स्रोत',
    directNotice: 'हे सर्व दुवे (Links) यूट्यूबवरील अधिकृत व सुरक्षित व्हिडिओ नवीन टॅबमध्ये उघडतात.',
  },
};

export const VideoGuideSection: React.FC<VideoGuideSectionProps> = ({
  category,
  language,
  title,
  subtitle,
  limit,
}) => {
  const t = sectionTranslations[language];
  const filtered =
    category === 'all'
      ? videoGuides
      : videoGuides.filter((v) => v.category === category);

  const items = limit ? filtered.slice(0, limit) : filtered;

  if (items.length === 0) return null;

  return (
    <div className="p-6 sm:p-8 border border-[#E5E5E5] bg-[#FAF9F6] rounded-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#E5E5E5] pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold tracking-wider uppercase bg-red-100 text-red-900 border border-red-200">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              {t.headerBadge}
            </span>
            <span className="text-xs text-[#737373] hidden sm:inline-block">• YouTube Direct Links</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#171717] font-editorial">
            {title || t.defaultTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#525252] mt-1 max-w-2xl leading-relaxed">
            {subtitle || t.defaultSubtitle}
          </p>
        </div>
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((video) => {
          const videoTitle =
            language === 'hi'
              ? video.titleHi
              : language === 'mr'
              ? video.titleMr
              : video.title;

          const videoDesc =
            language === 'hi'
              ? video.descriptionHi
              : language === 'mr'
              ? video.descriptionMr
              : video.description;

          const channelTag =
            language === 'hi'
              ? video.channelTagHi || video.channelTag
              : language === 'mr'
              ? video.channelTagMr || video.channelTag
              : video.channelTag;

          const langNote =
            language === 'hi'
              ? video.languageNoteHi
              : language === 'mr'
              ? video.languageNoteMr
              : video.languageNote;

          return (
            <div
              key={video.id}
              className="bg-white border border-[#E5E5E5] rounded p-5 flex flex-col justify-between hover:border-red-300 hover:shadow-sm transition-all group"
            >
              <div className="space-y-3">
                {/* Channel & Tag info */}
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-mono font-semibold text-[11px] text-red-900 bg-red-50 border border-red-100 px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-red-700" />
                    {channelTag}
                  </span>
                  <div className="flex items-center gap-1 text-[#737373] text-[11px] font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Channel Name */}
                <div className="text-xs font-semibold text-[#525252]">
                  {video.channel}
                </div>

                {/* Video Title */}
                <h4 className="text-sm sm:text-base font-bold text-[#171717] group-hover:text-red-900 transition-colors leading-snug">
                  {videoTitle}
                </h4>

                {/* Description */}
                <p className="text-xs text-[#525252] leading-relaxed line-clamp-3">
                  {videoDesc}
                </p>
              </div>

              {/* Action and Language Footer */}
              <div className="pt-4 mt-4 border-t border-[#F0F0EE] flex items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-[#737373]">
                  {langNote}
                </span>

                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors shadow-2xs group-hover:scale-[1.02]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{t.watchBtn}</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer notice */}
      <div className="flex items-center gap-2 text-xs text-[#737373] pt-1">
        <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0" />
        <span>{t.directNotice}</span>
      </div>
    </div>
  );
};
