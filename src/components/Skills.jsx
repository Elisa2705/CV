import { Code, Database, Palette, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedSkills(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      icon: <Database size={24} />,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'SQL', level: 80 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      icon: <Palette size={24} />,
      title: 'Design',
      skills: [
        { name: 'UI/UX Design', level: 75 },
        { name: 'Figma', level: 80 },
        { name: 'Adobe XD', level: 70 },
      ],
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile',
      skills: [
        { name: 'React Native', level: 70 },
        { name: 'Flutter', level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-title">Skills</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}
      >
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="card">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
                color: 'var(--accent)',
              }}
            >
              {category.icon}
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text)' }}>{category.title}</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <span style={{ fontWeight: '500', color: 'var(--text)' }}>{skill.name}</span>
                    <span style={{ color: 'var(--text)', opacity: 0.7 }}>{skill.level}%</span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: '8px',
                      backgroundColor: 'var(--border)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: animatedSkills ? `${skill.level}%` : '0%',
                        backgroundColor: 'var(--accent)',
                        borderRadius: '4px',
                        transition: 'width 1.5s ease-out',
                        transitionDelay: `${(catIndex * 0.1 + skillIndex * 0.1)}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
