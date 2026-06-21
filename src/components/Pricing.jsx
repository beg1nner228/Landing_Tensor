const monthly = ['Unlimited projects & routines', 'Ghost Mode benchmarks', 'Full analytics dashboard', 'AI Quick-Input'];
const annual = ['Everything in Monthly', 'Priority feature requests', 'Early access to new tools', "Lock today's price forever"];

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing" data-screen-label="Pricing">
      <div className="wrap" style={{ textAlign: 'center' }}>
        <span className="kicker">Pricing</span>
        <h2 className="sect-title">Start free. Upgrade when it clicks.</h2>
        <p className="sect-lede" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Every install includes a full-featured 14-day trial. After that, keep your whole workspace for less than a protein shake a month.</p>

        <div className="price-grid">
          <div className="plan">
            <div className="pname">Monthly</div>
            <div className="amt"><span className="cur">$</span><span className="num tabnum">3.99</span><span className="per">/ month</span></div>
            <div className="note">Flexible, cancel anytime.</div>
            <ul>
              {monthly.map((f) => <li key={f}><span className="tick">✓</span> {f}</li>)}
            </ul>
            <a className="btn btn-ghost" href="#get">Start free trial</a>
          </div>
          <div className="plan best">
            <span className="best-tag">BEST VALUE</span>
            <div className="pname">Annual</div>
            <div className="amt"><span className="cur">$</span><span className="num tabnum">27.99</span><span className="per">/ year</span></div>
            <div className="note">Billed yearly · ≈ 2.30 CHF/mo</div>
            <span className="save">Save 41%</span>
            <ul>
              {annual.map((f) => <li key={f}><span className="tick">✓</span> {f}</li>)}
            </ul>
            <a className="btn btn-dark" href="#get">Start free trial</a>
          </div>
        </div>
        <p className="trial-note">14-day free trial · No credit card required · Cancel in two taps</p>
      </div>
    </section>
  );
}
