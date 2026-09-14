import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface ContactProps {
  lang: 'vi' | 'en';
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const { profile } = portfolioData;

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {lang === 'vi' ? 'Liên hệ' : 'Contact'}
          </h2>
          <p className="mt-2 text-gray-400">
            {lang === 'vi'
              ? 'Kết nối trao đổi về engineering hoặc cộng tác'
              : 'Reach out about engineering work or collaboration'}
          </p>
        </div>

        <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-cf-surface/60 p-8 text-center">
          <p className="mb-6 text-sm text-gray-400">
            {lang === 'vi' ? 'Kết nối với tôi' : 'Connect with me'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0A66C2] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-700 transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Facebook
            </a>
            <a
              href={profile.social.email}
              className="inline-flex items-center gap-2 rounded-lg border border-cf-orange px-5 py-2.5 text-sm font-semibold text-cf-orange hover:bg-cf-orange/10 transition-colors"
            >
              Email
            </a>
          </div>

          <p className="mt-8 text-xs text-gray-500">
            {lang === 'vi'
              ? 'Trang cá nhân — không phải trang chính thức của Cloudflare.'
              : 'Personal site — not an official Cloudflare page.'}
          </p>
        </div>
      </div>
    </section>
  );
};
