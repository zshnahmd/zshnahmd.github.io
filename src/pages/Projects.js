import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProjectView from '../components/project/ProjectView';
import { projects } from '../data/profile';

const ProjectCard = ({ id, title, dates, description, demoLink, githubLink, tags }) => (
  <div className="card card-hover p-6 mb-5">
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="text-xl font-semibold">
        <Link to={`/projects/${id}`} className="text-primary">{title}</Link>
      </h3>
      {dates && <span className="text-sm text-text-secondary whitespace-nowrap">{dates}</span>}
    </div>
    <p className="mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags && tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
    </div>
    <div className="flex gap-4 text-sm font-medium">
      <Link to={`/projects/${id}`}>Details &rarr;</Link>
      {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer">View Demo</a>}
      {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>}
    </div>
  </div>
);

const Projects = () => (
  <div className="max-w-3xl mx-auto animate-rise">
    <Routes>
      <Route path="/" element={
        <>
          <h2 className="section-title">Projects</h2>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </>
      } />
      <Route path=":projectId" element={<ProjectView projects={projects} />} />
    </Routes>
  </div>
);

export default Projects;
