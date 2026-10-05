import React from 'react';
import { skills } from '../data/profile';

const Skills = () => (
  <ul className="flex flex-wrap gap-2.5">
    {skills.map((skill) => (
      <li
        key={skill}
        className="bg-surface border border-line text-text-secondary px-3 py-1.5 rounded-full text-sm transition hover:border-primary/50 hover:text-text-primary"
      >
        {skill}
      </li>
    ))}
  </ul>
);

export default Skills;
