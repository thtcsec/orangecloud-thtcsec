import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  lang: 'vi' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="border-t border-cf-border bg-cf-surface/40 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-gray-500 sm:flex-row sm:px-6">
        <p>
          © 2026 {lang === 'vi' ? portfolioData.profile.name : portfolioData.profile.nameEn}.{' '}
          <span>{lang === 'vi' ? 'Bảo lưu mọi quyền' : 'All rights reserved'}</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-cf-orange" />
          <span>Built on Cloudflare Pages</span>
        </p>
      </div>
    </footer>
  );
};
