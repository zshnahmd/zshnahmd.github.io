import React from 'react';
import { profile } from '../../data/profile';
import ThemeToggle from '../common/ThemeToggle';

const Header = () => {
  return (
    <header className="container animate-rise">
      <div className="card relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-primary/25 to-transparent" />
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <div className="py-6 px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-28 h-28 rounded-full object-cover ring-4 ring-secondary shadow-sm"
            />
            <div className="text-center md:text-left md:pr-10">
              <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
              <h2 className="text-lg font-normal text-text-secondary mt-1 leading-snug">{profile.headline}</h2>
              <p className="text-sm my-2 flex items-center justify-center md:justify-start gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {profile.location}
              </p>
              <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-2">
                {profile.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="text-sm font-medium px-3 py-1 rounded-full border border-line text-text-secondary hover:text-primary hover:border-primary/50 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
