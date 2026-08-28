/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Language, TextSize } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { BasicsPage } from './pages/BasicsPage';
import { PaymentsPage } from './pages/PaymentsPage';
import { SafetyPage } from './pages/SafetyPage';
import { ServicesPage } from './pages/ServicesPage';
import { QuizPage } from './pages/QuizPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [textSize, setTextSize] = useState<TextSize>('normal');
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove('text-scale-normal', 'text-scale-large', 'text-scale-extra-large');
    document.documentElement.classList.add(`text-scale-${textSize}`);
  }, [textSize]);

  const handleNavigate = (page: PageId, sectionId?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F2937]">
      {/* Top Accessible Navbar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={(page) => handleNavigate(page)}
        language={language}
        setLanguage={setLanguage}
        textSize={textSize}
        setTextSize={setTextSize}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage setCurrentPage={(page) => handleNavigate(page)} language={language} />
        )}
        {currentPage === 'basics' && (
          <BasicsPage setCurrentPage={(page) => handleNavigate(page)} language={language} />
        )}
        {currentPage === 'payments' && (
          <PaymentsPage setCurrentPage={(page) => handleNavigate(page)} language={language} />
        )}
        {currentPage === 'safety' && (
          <SafetyPage setCurrentPage={(page) => handleNavigate(page)} language={language} />
        )}
        {currentPage === 'services' && (
          <ServicesPage setCurrentPage={(page) => handleNavigate(page)} language={language} />
        )}
        {currentPage === 'quiz' && (
          <QuizPage setCurrentPage={(page) => handleNavigate(page)} language={language} />
        )}
        {currentPage === 'about' && (
          <AboutPage setCurrentPage={(page) => handleNavigate(page)} language={language} />
        )}
      </main>

      {/* Structured Minimal Editorial Footer */}
      <Footer setCurrentPage={(page) => handleNavigate(page)} language={language} />

      {/* Client-side Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={(page, sectionId) => handleNavigate(page, sectionId)}
        language={language}
      />
    </div>
  );
}

