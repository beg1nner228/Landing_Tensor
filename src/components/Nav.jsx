import { Mark } from './Icons.jsx';

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="brand" href="#top" aria-label="Tensor home">
          <Mark /> Tensor
        </a>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#analytics">Analytics</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-cta">
          <a className="btn btn-ghost btn-sm" href="#pricing">Pricing</a>
          <a className="btn btn-dark btn-sm" href="#get">Get the app</a>
        </div>
      </div>
    </header>
  );
}
