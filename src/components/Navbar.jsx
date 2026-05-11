import { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { label: '소개', href: '#about' },
  { label: '철학', href: '#philosophy' },
  { label: '프로젝트', href: '#projects' },
  { label: '문의', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map(n => document.querySelector(n.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          KIM <span>MARKETER</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={active === item.href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              문의하기
            </a>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="메뉴 열기"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
