const items = [
  {
    title: 'Offline-first',
    body: "Built on local SQLite. Log on the subway, the gym basement, anywhere — it syncs nothing it doesn't need to.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-6.2-8.6" /><path d="M21 4v5h-5" />
      </svg>
    ),
  },
  {
    title: 'Yours, privately',
    body: 'Your training history lives on your device by default. No feed, no followers, no noise. Just the work.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
  {
    title: 'Fast, always',
    body: 'No spinners between you and your next set. Forge opens to your workout in under a second.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4.5 13H11l-1 9 8.5-11H12l1-9z" />
      </svg>
    ),
  },
];

export default function Trio() {
  return (
    <section className="section tight" data-screen-label="Why Forge">
      <div className="wrap">
        <div className="trio">
          {items.map((it) => (
            <div className="card" key={it.title}>
              <div className="ic">{it.icon}</div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
