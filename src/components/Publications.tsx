import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface PublicationsProps {
  lang: 'vi' | 'en';
}

const statusClass = (status: string) => {
  if (status === 'Accepted') return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20';
  if (status === 'Under Review') return 'bg-amber-500/15 text-amber-300 border-amber-500/20';
  return 'bg-white/5 text-gray-400 border-white/10';
};

export const Publications: React.FC<PublicationsProps> = ({ lang }) => {
  return (
    <section id="publications" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {lang === 'vi' ? 'Công bố' : 'Publications'}
          </h2>
          <p className="mt-2 text-gray-400">
            {lang === 'vi'
              ? 'Ba bài đã chấp nhận, một bài đang phản biện. Không trộn claim giữa các bài.'
              : 'Three accepted papers and one under review. Claims are not mixed across papers.'}
          </p>
        </div>

        <div className="space-y-4">
          {portfolioData.publications.map((paper) => (
            <article
              key={paper.id}
              className="rounded-xl border border-white/10 bg-cf-surface/60 p-5 sm:p-6"
            >
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-md border px-2 py-0.5 text-xs font-medium ${statusClass(paper.status)}`}
                >
                  {lang === 'vi' ? paper.statusVi : paper.status}
                </span>
                <span className="text-xs text-gray-500">{paper.venue}</span>
              </div>
              <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
                {paper.title}
              </h3>
              {(paper.noteVi || paper.noteEn) && (
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {lang === 'vi' ? paper.noteVi : paper.noteEn}
                </p>
              )}
              {paper.github && (
                <a
                  href={paper.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 rounded-md border border-white/15 px-3 py-1.5 text-xs font-medium text-gray-300 hover:border-cf-orange hover:text-white transition-colors"
                >
                  <span>GitHub</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
