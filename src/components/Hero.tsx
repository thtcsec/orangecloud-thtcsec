import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  lang: 'vi' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const { profile } = portfolioData;

  return (
    <section className="gradient-mesh">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-20 sm:px-6 md:flex-row md:py-28">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cf-orange/40 to-transparent opacity-60 blur-md" />
          <img
            src={profile.avatar}
            alt={profile.name}
            width={160}
            height={160}
            className="relative h-36 w-36 rounded-full object-cover sm:h-44 sm:w-44 object-top ring-1 ring-white/10"
            loading="eager"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/academic_portrait.jpg';
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Top Category Tag */}
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cf-orange">
            {lang === 'vi' ? profile.tagVi : profile.tagEn}
          </p>

          {/* Name */}
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {lang === 'vi' ? profile.name : profile.nameEn}
          </h1>

          {/* Positions Line */}
          <p className="mt-3 text-lg text-gray-300 sm:text-xl">
            <span>{lang === 'vi' ? profile.rolePlainVi : profile.rolePlainEn}</span>{' '}
            <span className="text-gray-400">{lang === 'vi' ? 'tại' : 'at'}</span>{' '}
            <span className="font-semibold text-cf-orange">{profile.company}</span>
            <span className="text-gray-500 mx-2 hidden sm:inline">·</span>
            <span className="block sm:inline mt-1 sm:mt-0">
              <span>{lang === 'vi' ? profile.secondRolePlainVi : profile.secondRolePlainEn}</span>{' '}
              <span className="text-gray-400">{lang === 'vi' ? 'tại' : 'at'}</span>{' '}
              <span className="font-semibold text-cf-orange">{profile.secondCompany}</span>
            </span>
          </p>

          {/* Location */}
          <p className="mt-2 text-sm text-gray-400">
            {lang === 'vi' ? profile.locationVi : profile.locationEn}
          </p>

          {/* Aim & Vision Tagline */}
          <p className="mt-4 max-w-2xl text-base text-gray-400">
            {lang === 'vi' ? profile.taglineVi : profile.taglineEn}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-cf-orange px-5 py-2.5 text-sm font-semibold text-white hover:bg-cf-orange-light transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:border-gray-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:border-gray-400 transition-colors"
            >
              Facebook
            </a>
            <a
              href={profile.social.email}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-transparent px-5 py-2.5 text-sm font-semibold text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
