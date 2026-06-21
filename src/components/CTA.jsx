import { AppStoreBadge, GooglePlayBadge } from './Icons.jsx';

export default function CTA() {
  return (
    <section className="section cta-band" id="get" data-screen-label="Get the app">
      <div className="wrap">
        <div className="cta-inner">
          <div className="cta-glow" />
          <div style={{ position: 'relative' }}>
            <h2>Your next personal record<br />starts with the first log.</h2>
            <p>Download Tensor and turn training into something you can actually see.</p>
            <div className="badges">
              <AppStoreBadge light />
              <GooglePlayBadge light />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
