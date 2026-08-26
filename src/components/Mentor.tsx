import React from 'react';

interface MentorProps {
  lang: 'vi' | 'en';
}

export const Mentor: React.FC<MentorProps> = ({ lang }) => {
  return (
    <section id="mentor" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {lang === 'vi' ? 'Mentor' : 'Mentor'}
          </h2>
          <p className="mt-2 text-gray-400">
            {lang === 'vi'
              ? 'Cố vấn & người đồng hành tại OrangeCloud'
              : 'Advisor & mentor at OrangeCloud'}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-cf-surface/60 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cf-orange text-lg font-bold text-white">
              S
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-white">Cuong Le Sy</h3>
                <span className="rounded-full bg-cf-orange/15 px-2 py-0.5 text-xs font-medium text-cf-orange">
                  Mentor
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-0.5">
                Territory Account Executive @ <span className="text-cf-orange font-medium">Cloudflare</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://sycule.orangecloud.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md bg-cf-orange/15 px-3.5 py-1.5 text-xs font-medium text-cf-orange hover:bg-cf-orange/25 transition-colors"
            >
              <span>sycule.orangecloud.vn</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sycule/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-white/15 px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:border-cf-orange hover:text-white transition-colors"
            >
              <span>LinkedIn</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
