import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects, focusing on user experience and performance optimization.',
    },
    {
      title: 'Frontend Developer',
      company: 'Web Creations',
      period: '2018 - 2020',
      description: 'Built responsive web interfaces and collaborated with design teams to implement pixel-perfect UI components.',
    },
  ];

  return (
    <section id="experience" className="container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Briefcase size={32} color="var(--accent)" />
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Experience
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="card"
            style={{
              position: 'relative',
              paddingLeft: '3rem',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '1rem',
                top: '1.5rem',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                border: '3px solid var(--card)',
                boxShadow: '0 0 0 3px var(--accent)',
              }}
            />
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'var(--text)',
              }}
            >
              {exp.title}
            </h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ color: 'var(--accent)', fontWeight: '500' }}>{exp.company}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)', opacity: 0.7 }}>
                <Calendar size={16} />
                <span>{exp.period}</span>
              </div>
            </div>
            <p style={{ color: 'var(--text)', opacity: 0.9, lineHeight: '1.6' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
