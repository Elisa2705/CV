import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that displays current conditions and forecasts using weather APIs with beautiful data visualizations.',
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics platform for tracking social media metrics, generating reports, and visualizing engagement data.',
    },
    {
      title: 'Learning Management System',
      description: 'An educational platform for online courses with video streaming, quizzes, progress tracking, and certificate generation.',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects, skills, and experience with smooth animations and dark mode support.',
    },
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Projects</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
        }}
      >
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--text)',
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                color: 'var(--text)',
                opacity: 0.8,
                lineHeight: '1.6',
                marginBottom: '1.5rem',
              }}
            >
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                className="btn btn-secondary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  fontSize: '0.9rem',
                }}
              >
                <Github size={18} />
                Code
              </button>
              <button
                className="btn btn-secondary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  fontSize: '0.9rem',
                }}
              >
                <ExternalLink size={18} />
                Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
