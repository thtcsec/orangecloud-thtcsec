import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface CommunityProps {
  lang: 'vi' | 'en';
}

export const Community: React.FC<CommunityProps> = ({ lang }) => {
  return (
    <section id="community" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {lang === 'vi' ? 'Cộng đồng' : 'Community'}
          </h2>
          <p className="mt-2 text-gray-400">
            {lang === 'vi'
              ? 'Hoạt động cộng đồng & kết nối học tập'
              : 'Community engagement & learning'}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {portfolioData.community.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-white/10 bg-cf-surface/60 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-cf-orange">
                    {item.name}
                  </h3>
                  {item.stat && (
                    <span className="rounded-md bg-cf-dark px-2 py-0.5 text-xs text-gray-400 border border-white/10">
                      {item.stat}
                    </span>
                  )}
                </div>

                <p className="mt-1 text-sm font-medium text-gray-300">
                  {lang === 'vi' ? item.roleVi : item.roleEn}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {lang === 'vi' ? item.descVi : item.descEn}
                </p>
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cf-orange hover:text-cf-orange-light transition-colors"
                >
                  <span>{lang === 'vi' ? item.linkTextVi || 'Tìm hiểu thêm' : item.linkTextEn || 'Learn more'}</span>
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
