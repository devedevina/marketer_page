import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#hero" className="footer-logo">
          KIM <span>MARKETER</span>
        </a>
        <p className="footer-copy">© 2025 김마케터. All rights reserved.</p>
        <nav className="footer-nav">
          {['#about', '#philosophy', '#projects', '#contact'].map((href, i) => (
            <a key={href} href={href}>
              {['소개', '철학', '프로젝트', '문의'][i]}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
