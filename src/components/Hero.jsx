import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="fade-in"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, var(--accent) 0%, var(--card) 100%)',
      }}
    >
      <div className="container">
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            color: 'white',
          }}
        >
          Livia Lesnic
        </h1>
        <p
          style={{
            fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          Full Stack Developer & Creative Problem Solver
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn"
            style={{ backgroundColor: 'white', color: 'var(--accent)' }}
          >
            Get In Touch
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="btn btn-secondary"
            style={{ borderColor: 'white', color: 'white' }}
          >
            View Projects
          </button>
        </div>
        <div
          style={{
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={() => scrollToSection('about')}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              animation: 'bounce 2s infinite',
            }}
            aria-label="Scroll to about"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
