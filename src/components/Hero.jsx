import PhoneMock from './PhoneMock.jsx';
import { AppStoreBadge, GooglePlayBadge } from './Icons.jsx';

export default function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="hero-bg" />
      <div className="wrap hero-in">
        <div className="hero-text">
          <span className="eyebrow"><span className="dot" /> Now on iOS &amp; Android</span>
          <h1 className="title">Train like it's<br /><span className="accent">a project.</span></h1>
          <p className="lede">Tensor turns scattered workouts into clean, organized projects. Plan your week, log every set, and benchmark against your past self — even with no signal.</p>
          <div className="hero-cta badges">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
          <div className="trust">
            <span className="stars" aria-label="4.0 out of 5">★★★★★</span>
            <span><b style={{ color: 'var(--ink)' }}>0.0</b> · 0 ratings</span>
            <span className="sep" />
            <span>Free 14-day trial · No card</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="float float-ghost">
            <div className="fl-k">GHOST MODE</div>
            <div className="ghosttext">Past self: 80kg × 8</div>
          </div>
          <div className="float float-pr">
            <div className="fl-k">NEW PR ★</div>
            <div className="fl-v">Squat · 102.5kg</div>
          </div>
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}
