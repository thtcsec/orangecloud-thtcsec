import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface ProjectsProps {
  lang: 'vi' | 'en';
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {lang === 'vi' ? 'Dự án nổi bật' : 'Featured Projects'}
          </h2>
          <p className="mt-2 text-gray-400">
            {lang === 'vi'
              ? 'Side projects & production apps trên Cloudflare & Cloud'
              : 'Side projects & production apps on Cloudflare & Multi-Cloud'}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {portfolioData.projects.map((project) => (
            <article
              key={project.id}
              className="project-card flex flex-col rounded-xl border border-white/10 bg-cf-surface/60 p-5"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                {project.star && (
                  <span className="shrink-0 rounded-full bg-cf-orange/15 px-2 py-0.5 text-xs font-medium text-cf-orange">
                    {project.star}
                  </span>
                )}
              </div>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
                {lang === 'vi' ? project.descriptionVi : project.descriptionEn}
              </p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-cf-dark px-2 py-0.5 text-xs text-gray-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md bg-cf-orange/15 px-3 py-1.5 text-xs font-medium text-cf-orange hover:bg-cf-orange/25 transition-colors"
                  >
                    <span>Live demo</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-white/15 px-3 py-1.5 text-xs font-medium text-gray-300 hover:border-cf-orange hover:text-white transition-colors"
                  >
                    <span>GitHub</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
