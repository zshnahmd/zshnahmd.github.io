// All personal content for the site lives here.
// Edit this file to update your info. The pages read from it.

export const profile = {
  name: 'Zeshan Ahmed',
  headline: 'Consultant, Business Systems Analysis @ CIBC Wealth Management Tech',
  location: 'Greater Toronto Area, Canada',
  photo: '/assets/zeshan-headshot.png',
  links: [
    { label: 'Email', href: 'mailto:zeshan.ahmed@outlook.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zeshanahmed' },
    { label: 'GitHub', href: 'https://github.com/zshnahmd' },
  ],
  about: [
    "I'm a Business Systems Analyst at CIBC, on the Client Management team in Private Wealth Management Technology. I turn business needs into clear requirements, map processes, and work between stakeholders and delivery teams to get systems built right.",
    "I studied Computer Science at Western University, and I'm now building toward Cloud Engineering, working through AWS certifications and applying cloud fundamentals to the systems I work on.",
  ],
  // Leave empty ([]) to hide the Documents section.
  // To add your resume: put the PDF in public/assets/PDF/ and add
  // { label: 'Resume', file: 'Zeshan_Ahmed_Resume.pdf', lastUpdated: '2026-10-05' }
  documents: [],
};

export const experience = [
  {
    company: 'CIBC',
    role: 'Consultant, Business Systems Analysis',
    type: 'Permanent Full-time',
    dates: 'Jun 2026 - Present',
    location: 'Toronto, ON · Hybrid',
    bullets: [
      'Business systems analyst on the Client Management team in Private Wealth Management Technology.',
      'Gather and document requirements for client-facing wealth management platforms, including a website platform migration and third-party vendor integrations.',
      'Author Solution Requirements Documents (SRDs) for Wealth Management Technology applications.',
      'Work in Agile delivery teams with business stakeholders, developers, and vendors.',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'Business Systems Analyst',
    type: 'Contract Full-time',
    dates: 'Oct 2025 - May 2026',
    location: 'Toronto, ON · Hybrid',
    bullets: [
      'Developed integrated requirements documentation for a large-scale migration project, aligning business and technology stakeholders.',
      'Created onboarding documents to support knowledge transfer and streamline team integration.',
      'Conducted a comprehensive gap analysis for the migration, identifying process discrepancies and documenting findings to support solution design.',
    ],
  },
  {
    company: 'Canada Life',
    role: 'Business Systems Analyst (Internship)',
    dates: 'Jan 2025 - Apr 2025',
    location: 'Toronto, ON · Hybrid',
    bullets: [
      'Executed a comprehensive gap analysis for a project, aligning features with new regulations and reaching a 100% compliance rate.',
      'Mapped business processes and gathered requirements from stakeholders.',
    ],
  },
  {
    company: 'Canada Life',
    role: 'Associate Business Systems Analyst (Internship)',
    dates: 'May 2023 - May 2024',
    location: 'London, ON · Hybrid',
    bullets: [
      'Gathered stakeholder requirements and developed vendor-facing documentation, improving cross-team communication and accelerating project delivery.',
      'Queried and analyzed large operational datasets with SQL to uncover insights, support data-driven decisions, and maintain data accuracy.',
      'Designed and deployed an interactive Power BI dashboard to track KPIs, giving internal teams real-time visibility and streamlined reporting.',
    ],
  },
];

export const education = [
  {
    school: 'Western University',
    degree: 'Bachelor of Science, Computer Science',
    dates: '2021 - 2025',
    details:
      'Relevant courses: Data Structures and Algorithms, Databases, Software Engineering, Operating Systems, Software Tools and Systems Programming, Object-Oriented Design and Analysis, Computer Organization and Architecture, Discrete Structures.',
  },
];

// `featured: true` shows the project on the About page as well.
export const projects = [
  {
    id: 'western-navigation-app',
    title: 'WesternNavigationApp',
    dates: 'Sep 2022 - Dec 2022',
    description:
      'Desktop app that lets users search and explore interior spaces and rooms in Western University buildings through interactive maps.',
    tags: ['Java', 'JavaFX', 'Maven', 'JSON'],
    githubLink: 'https://github.com/zshnahmd',
    featured: true,
    details: [
      'Built searchable, interactive floor maps of Western University buildings.',
      'Produced UML class diagrams and user interface mockups in Balsamiq, leading to an efficient implementation of each class.',
      'Integrated the OpenWeather API to show location weather forecasts for more practical use.',
    ],
  },
  {
    id: 'forbattra-fitness-app',
    title: 'ForbattraFitnessApp',
    dates: 'Aug 2024',
    description:
      'Cross-platform fitness tracker built with Qt for managing workouts, logging food, tracking weight, and monitoring progress visually.',
    tags: ['C++', 'Qt 5.15', 'Qt Charts', 'Google Test', 'JSON'],
    featured: true,
    details: [
      'Built custom Qt widgets and integrated Qt Charts for intuitive data visualization and progress tracking.',
      'Applied core design patterns including Singleton, Factory, and Observer for a scalable, modular architecture.',
      'Unit tested core logic with Google Test.',
    ],
  },
  {
    id: 'web-calculator',
    title: 'WebCalculator',
    dates: 'Nov 2023',
    description: 'Responsive browser calculator built with vanilla JavaScript and Flexbox.',
    tags: ['JavaScript', 'HTML/CSS', 'Node.js'],
    githubLink: 'https://github.com/zshnahmd',
    details: [
      'Applied in-depth JavaScript knowledge, including DOM manipulation and event handling.',
      'Used Flexbox to build a clean, responsive calculator layout.',
    ],
  },
];

export const skills = [
  'Requirements Gathering',
  'Process Mapping',
  'Gap Analysis',
  'Stakeholder Management',
  'Agile',
  'Technical Documentation',
  'AWS',
  'SQL',
  'Python',
  'Java',
  'JavaScript',
  'C++',
  'Power BI',
  'Git & GitHub',
  'Jira & Confluence',
  'Figma',
];
