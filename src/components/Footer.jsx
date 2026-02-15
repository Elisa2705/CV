import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, label: 'GitHub', href: '#' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: '#' },
    { icon: <Twitter size={20} />, label: 'Twitter', href: '#' },
    { icon: <Mail size={20} />, label: 'Email', href: 'mailto:contact@example.com' },
  ];

  return (
    <footer
      style={{
        backgroundColor: 'var(--card)',
        borderTop: `1px solid var(--border)`,
        padding: '2rem 0',
        marginTop: '4rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                style={{
                  color: 'var(--text)',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p
            style={{
              color: 'var(--text)',
              opacity: 0.7,
              fontSize: '0.9rem',
              textAlign: 'center',
            }}
          >
            © {currentYear} Livia Lesnic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
