import { Link } from 'react-router-dom';
import { FOOTER_COLUMNS, LEGAL_LINKS } from '../../data/footer';
import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top section-wrap">
        <div className="footer__grid">
          {FOOTER_COLUMNS.map(col => (
            <div key={col.title} className="footer__col">
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__col-links">
                {col.links.map(l => <li key={l}><Link to="/" className="footer__link">{l}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer__bottom section-wrap">
        <div className="footer__bottom-inner">
          <div className="footer__brand"><span className="footer__brand-dot" /><span className="footer__brand-name">Prompt Craft</span></div>
          <p className="footer__copy">© 2025 All Rights Reserved</p>
          <nav className="footer__legal">
            {LEGAL_LINKS.map(l => <Link key={l} to="/" className="footer__legal-link">{l}</Link>)}
          </nav>
          <button className="footer__lang-btn">🌐 English</button>
        </div>
      </div>
    </footer>
  );
}
