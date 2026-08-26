import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface SkillsProps {
  lang: 'vi' | 'en';
}

export const Skills: React.FC<SkillsProps> = ({ lang }) => {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {lang === 'vi' ? 'Kỹ năng & Chứng chỉ' : 'Skills & Certifications'}
          </h2>
          <p className="mt-2 text-gray-400">
            {lang === 'vi'
              ? 'Cloud, cybersecurity, AI & development'
              : 'Cloud, cybersecurity, AI & development'}
          </p>
        </div>

        {/* 4 Skill Category Boxes */}
        <div className="grid gap-6 sm:grid-cols-2">
          {portfolioData.skills.groups.map((group, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-cf-surface/60 p-6">
              <h3 className="mb-4 font-semibold text-white">
                {lang === 'vi' ? group.nameVi : group.nameEn}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-md border border-white/10 bg-cf-dark px-2.5 py-1 text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications List */}
        <div className="mt-10">
          <h3 className="mb-4 text-lg font-semibold text-white">
            {lang === 'vi' ? 'Chứng chỉ' : 'Certifications'}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {portfolioData.skills.certs.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-cf-surface/40 p-4"
              >
                <span className="mt-0.5 text-cf-orange font-bold" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-200">{cert.title}</p>
                  <p className="text-xs text-gray-500">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
