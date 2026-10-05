import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectView = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  const back = (
    <Link to="/projects" className="text-sm font-medium hover:underline mb-6 inline-block">&larr; Back to all projects</Link>
  );

  if (!project) {
    return (
      <div>
        {back}
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <div>
      {back}
      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-1">{project.title}</h1>
        {project.dates && <p className="text-sm my-0">{project.dates}</p>}
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2 my-3">
          {project.tags && project.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
        </div>
        <div className="flex gap-4 text-sm font-medium">
          {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer">View Demo</a>}
          {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>}
        </div>
      </div>
      {project.details && project.details.length > 0 && (
        <div className="card p-6">
          <h2 className="text-xl font-bold mb-3">Highlights</h2>
          <ul className="list-disc pl-5 space-y-2 text-text-secondary marker:text-primary/60">
            {project.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectView;
