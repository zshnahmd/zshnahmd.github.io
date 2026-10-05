import React from 'react';
import { Link } from 'react-router-dom';
import Skills from './Skills';
import { profile, experience, education, projects } from '../data/profile';

const CompactProjectCard = ({ id, title, dates, description, tags }) => (
  <Link to={`/projects/${id}`} className="card card-hover block p-5 group">
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      {dates && <span className="text-xs text-text-secondary whitespace-nowrap">{dates}</span>}
    </div>
    <p className="text-sm text-text-secondary my-2">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags && tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
    </div>
  </Link>
);

const About = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="max-w-3xl mx-auto animate-rise">
      <section className="mb-12">
        <h2 className="section-title">About Me</h2>
        {profile.about.map((para, i) => (
          <p key={i} className="mb-4">{para}</p>
        ))}
      </section>

      {featured.length > 0 && (
        <section className="mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((project) => (
              <CompactProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>
      )}

      {profile.documents.length > 0 && (
        <section className="mb-12">
          <h2 className="section-title">Documents</h2>
          {profile.documents.map((doc) => (
            <div key={doc.file} className="mb-2">
              <a href={`/assets/PDF/${doc.file}`} target="_blank" rel="noopener noreferrer" className="font-medium">
                {doc.label}
              </a>
              {doc.lastUpdated && (
                <span className="text-xs text-text-secondary">&#160; Last updated: {doc.lastUpdated}</span>
              )}
            </div>
          ))}
        </section>
      )}

      <section className="mb-12">
        <h2 className="section-title">Work Experience</h2>
        <ol className="relative border-l border-line ml-1.5">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="mb-8 last:mb-0 pl-6 relative">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-surface border-2 border-primary" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-xl font-semibold">{job.company}</h3>
                <span className="text-sm text-text-secondary">{job.dates}</span>
              </div>
              <h4 className="text-base font-medium text-text-primary">{job.role}</h4>
              {job.location && <p className="text-sm text-text-secondary my-1">{job.location}</p>}
              <ul className="list-disc pl-5 mt-2 space-y-1 text-text-secondary marker:text-primary/60">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="section-title">Education</h2>
        {education.map((ed) => (
          <div key={ed.school} className="card p-5 mb-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-xl font-semibold">{ed.school}</h3>
              <span className="text-sm text-text-secondary">{ed.dates}</span>
            </div>
            <h4 className="text-base font-medium">{ed.degree}</h4>
            {ed.details && <p className="mt-2 mb-0 text-sm">{ed.details}</p>}
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="section-title">Skills</h2>
        <Skills />
      </section>
    </div>
  );
};

export default About;
