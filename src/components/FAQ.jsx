import { useState } from 'react';

const faqs = [
  { q: 'Does Tensor work without internet?', a: 'Yes. Tensor is offline-first — your projects, routines and logs are stored locally on your phone with SQLite. You can train in a basement gym with zero signal and nothing is lost.' },
  { q: 'What happens after the 14-day trial?', a: 'Your data stays put. Advanced features like Ghost Mode, the analytics dashboard and unlimited projects lock until you upgrade, but you keep full access to your history.' },
  { q: 'Can I import my existing log?', a: 'You can paste a whole session with AI Quick-Input — type your sets in plain shorthand and Tensor structures them. Bulk CSV import is on the roadmap.' },
  { q: 'Is it really on both iOS and Android?', a: 'Yes — Tensor ships natively to both, built with Capacitor on top of the same offline-first core.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq" data-screen-label="FAQ">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <span className="kicker">FAQ</span>
        <h2 className="sect-title">Good questions, answered.</h2>
        <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((f, i) => (
            <details className="faq" key={f.q} open={open === i}
              onToggle={(e) => { if (e.currentTarget.open) setOpen(i); else if (open === i) setOpen(-1); }}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
