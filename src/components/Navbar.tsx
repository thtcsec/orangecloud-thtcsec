import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  lang: 'vi' | 'en';
  setLang: (lang: 'vi' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cf-dark/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-semibold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cf-orange text-sm font-bold text-white">
            T
          </span>
          <span className="hidden sm:inline">
            {lang === 'vi' ? portfolioData.profile.name : portfolioData.profile.nameEn}
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex" aria-label="Main">
          <a href="#about" className="hover:text-cf-orange transition-colors">
            {lang === 'vi' ? 'Giới thiệu' : 'About'}
          </a>
          <a href="#projects" className="hover:text-cf-orange transition-colors">
            {lang === 'vi' ? 'Dự án' : 'Projects'}
          </a>
          <a href="#community" className="hover:text-cf-orange transition-colors">
            {lang === 'vi' ? 'Cộng đồng' : 'Community'}
          </a>
          <a href="#career" className="hover:text-cf-orange transition-colors">
            {lang === 'vi' ? 'Sự nghiệp' : 'Career'}
          </a>
          <a href="#skills" className="hover:text-cf-orange transition-colors">
            {lang === 'vi' ? 'Kỹ năng' : 'Skills'}
          </a>
          <a href="#mentor" className="hover:text-cf-orange transition-colors">
            {lang === 'vi' ? 'Mentor' : 'Mentor'}
          </a>
          <a href="#contact" className="hover:text-cf-orange transition-colors">
            {lang === 'vi' ? 'Liên hệ' : 'Contact'}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            className="rounded-md border border-white/10 px-2.5 py-1 text-xs font-medium text-gray-300 hover:border-cf-orange hover:text-cf-orange transition-colors uppercase"
            aria-label="Toggle language"
          >
            {lang === 'vi' ? 'EN' : 'VI'}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md border border-white/10 p-2 text-gray-300 md:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 bg-cf-surface px-4 py-3 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <a href="#about" onClick={() => setMobileOpen(false)} className="hover:text-cf-orange">
              {lang === 'vi' ? 'Giới thiệu' : 'About'}
            </a>
            <a href="#projects" onClick={() => setMobileOpen(false)} className="hover:text-cf-orange">
              {lang === 'vi' ? 'Dự án' : 'Projects'}
            </a>
            <a href="#community" onClick={() => setMobileOpen(false)} className="hover:text-cf-orange">
              {lang === 'vi' ? 'Cộng đồng' : 'Community'}
            </a>
            <a href="#career" onClick={() => setMobileOpen(false)} className="hover:text-cf-orange">
              {lang === 'vi' ? 'Sự nghiệp' : 'Career'}
            </a>
            <a href="#skills" onClick={() => setMobileOpen(false)} className="hover:text-cf-orange">
              {lang === 'vi' ? 'Kỹ năng' : 'Skills'}
            </a>
            <a href="#mentor" onClick={() => setMobileOpen(false)} className="hover:text-cf-orange">
              {lang === 'vi' ? 'Mentor' : 'Mentor'}
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="hover:text-cf-orange">
              {lang === 'vi' ? 'Liên hệ' : 'Contact'}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
