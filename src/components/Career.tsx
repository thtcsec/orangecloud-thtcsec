import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface CareerProps {
  lang: 'vi' | 'en';
}

export const Career: React.FC<CareerProps> = ({ lang }) => {
  return (
    <section id="career" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {lang === 'vi' ? 'Hành trình & Kinh nghiệm' : 'Experience & Education'}
          </h2>
          <p className="mt-2 text-gray-400">
            {lang === 'vi'
              ? 'Quá trình thực tập, nghiên cứu và học vấn'
              : 'Internships, research, and education'}
          </p>
        </div>

        <div className="relative ml-4 border-l border-white/10 pl-8">
          {portfolioData.career.map((item, idx) => (
            <div key={idx} className="timeline-dot relative mb-10 last:mb-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium uppercase tracking-wide text-cf-orange">
                  {item.period}
                </span>
                {item.isCurrent && (
                  <span className="rounded-full bg-cf-orange/15 px-2 py-0.5 text-xs font-medium text-cf-orange">
                    {lang === 'vi' ? 'Hiện tại' : 'Current'}
                  </span>
                )}
              </div>

              <h3 className="mt-1 text-lg font-semibold text-white">
                <span>{lang === 'vi' ? item.roleVi : item.roleEn}</span>
                <span className="text-gray-400"> · </span>
                <span className="text-cf-orange">{lang === 'vi' ? item.companyVi : item.companyEn}</span>
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {(lang === 'vi' ? item.descVi : item.descEn)
                  .split(/(Prof\. Kris Singh|GS\. Kris Singh)/)
                  .map((part, i) =>
                    part === 'Prof. Kris Singh' || part === 'GS. Kris Singh' ? (
                      <a
                        key={i}
                        href="https://bigdata.tsinghua.edu.cn/Iiede/nstructor/Index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-200 underline-offset-2 hover:text-cf-orange hover:underline transition-colors"
                      >
                        {part}
                      </a>
                    ) : (
                      <React.Fragment key={i}>{part}</React.Fragment>
                    )
                  )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
