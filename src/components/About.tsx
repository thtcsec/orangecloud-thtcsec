import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface AboutProps {
  lang: 'vi' | 'en';
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const { profile } = portfolioData;

  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {lang === 'vi' ? 'Giới thiệu' : 'About'}
          </h2>
          <p className="mt-2 text-gray-400">
            {lang === 'vi' ? profile.about.subVi : profile.about.subEn}
          </p>
        </div>

        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-gray-300 sm:text-lg">
          {(lang === 'vi' ? profile.about.paragraphsVi : profile.about.paragraphsEn).map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {profile.about.stats.map((stat, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-cf-surface/60 p-5 text-center">
              <p className="text-2xl font-bold text-cf-orange sm:text-3xl">{stat.num}</p>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                {lang === 'vi' ? stat.labelVi : stat.labelEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
