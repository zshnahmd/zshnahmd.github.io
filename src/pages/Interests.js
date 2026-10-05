import React from 'react';
import { interests } from '../data/profile';

// Each item gets a stable color from its title, used for its cover tile.
const hues = [212, 160, 28, 340, 265, 190, 8, 45];
const hueFor = (s) => hues[[...s].reduce((a, c) => a + c.charCodeAt(0), 0) % hues.length];

const Cover = ({ title, image }) => {
  if (image) {
    return (
      <img
        src={image}
        alt={`${title} cover`}
        loading="lazy"
        className="w-20 h-[120px] shrink-0 rounded-md object-cover shadow-md ring-1 ring-black/5"
      />
    );
  }
  const h = hueFor(title);
  return (
    <div
      className="w-20 h-[120px] shrink-0 rounded-md shadow-md flex items-end p-1.5 relative overflow-hidden"
      style={{ background: `linear-gradient(160deg, hsl(${h} 45% 42%), hsl(${h} 50% 26%))` }}
      aria-hidden="true"
    >
      <div className="absolute left-1.5 top-0 bottom-0 w-px bg-white/20" />
      <span className="text-[8px] leading-tight font-semibold break-words hyphens-auto text-white/90 line-clamp-4">{title}</span>
    </div>
  );
};

const Item = ({ title, subtitle, by, note, status, link, image }) => {
  const heading = link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">{title}</a>
  ) : title;
  return (
    <div className="card card-hover p-4 flex gap-4">
      <Cover title={title} image={image} />
      <div className="min-w-0">
        <h4 className="text-base font-semibold leading-snug">{heading}</h4>
        {subtitle && <p className="text-xs italic my-0.5">{subtitle}</p>}
        {by && <p className="text-sm my-1">{by}</p>}
        {status && <span className="chip inline-block mt-1">{status}</span>}
        {note && <p className="text-sm mt-2 mb-0">{note}</p>}
      </div>
    </div>
  );
};

const Interests = () => (
  <div className="max-w-3xl mx-auto animate-rise">
    {interests.map((section) => {
      const groups = section.groups.filter((g) => g.items.length > 0);
      if (groups.length === 0) return null;
      return (
        <section key={section.title} className="mb-12">
          <h2 className="section-title">{section.title}</h2>
          {groups.map((group) => (
            <div key={group.name} className="mb-8 last:mb-0">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-3">{group.name}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.items.map((item) => <Item key={item.title} {...item} />)}
              </div>
            </div>
          ))}
        </section>
      );
    })}
  </div>
);

export default Interests;
