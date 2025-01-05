import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      name: 'Ukiah',
      location: 'California',
      highlights: 'Luxury living with eco-friendly designs.',
      timeline: 'Completion by 2025',
      status: 'In Progress',
      image: '/images/ukiah.jpg',
    },
    {
      name: 'Petaluma',
      location: 'California',
      highlights: 'Affordable, sustainable housing in a prime location.',
      timeline: 'Planned for 2026',
      status: 'Planned',
      image: '/images/petaluma.jpg',
    },
  ];

  return (
    <div className="projects">
      <h1>Our Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.highlights}</p>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Timeline:</strong> {project.timeline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
