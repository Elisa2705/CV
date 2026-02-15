import { useState } from 'react';
import { User } from 'lucide-react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = `I'm a passionate Full Stack Developer with a love for creating beautiful, 
    functional web applications. I specialize in modern JavaScript frameworks and 
    have experience building scalable solutions.`;

  const fullText = `I'm a passionate Full Stack Developer with a love for creating beautiful, 
    functional web applications. I specialize in modern JavaScript frameworks and 
    have experience building scalable solutions. My journey in web development started 
    with a curiosity about how websites work, and it has evolved into a career focused 
    on crafting exceptional user experiences. I believe in writing clean, maintainable 
    code and staying up-to-date with the latest technologies and best practices. When 
    I'm not coding, you can find me exploring new frameworks, contributing to open-source 
    projects, or sharing knowledge with the developer community.`;

  return (
    <section id="about" className="container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <User size={32} color="var(--accent)" />
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          About Me
        </h2>
      </div>
      <div
        className="card"
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'var(--text)',
            marginBottom: '1rem',
          }}
        >
          {isExpanded ? fullText : shortText}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="btn btn-secondary"
          style={{ marginTop: '1rem' }}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </section>
  );
};

export default About;
