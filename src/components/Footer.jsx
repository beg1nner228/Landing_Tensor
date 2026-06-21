import { Link } from 'react-router-dom';
import { Mark } from './Icons.jsx';

const cols = [
  {
    h: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Analytics', href: '#analytics' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Download', href: '#' },
    ],
  },
  {
    h: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    h: 'Legal',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href="#top"><Mark /> Tensor</a>
            <p>The fitness workspace for people who'd rather train than fiddle with spreadsheets.</p>
          </div>
          {cols.map((c) => (
            <div className="foot-col" key={c.h}>
              <h4>{c.h}</h4>
              {c.links.map((l) =>
                l.to
                  ? <Link to={l.to} key={l.label}>{l.label}</Link>
                  : <a href={l.href} key={l.label}>{l.label}</a>
              )}
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© 2026 Tensor Labs. Made for lifters.</span>
          <span>iOS · Android · Built with Capacitor</span>
        </div>
      </div>
    </footer>
  );
}
