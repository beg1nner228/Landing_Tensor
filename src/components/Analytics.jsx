import ActivityHeatmap from './ActivityHeatmap.jsx';
import MuscleRadar from './MuscleRadar.jsx';

const prs = [
  { tag: 'Legs', bg: 'rgba(34,229,160,.14)', color: '#22e5a0', w: '102.5', name: 'Back Squat' },
  { tag: 'Chest', bg: 'rgba(90,139,255,.16)', color: '#5a8bff', w: '86', name: 'Bench Press' },
  { tag: 'Back', bg: 'rgba(185,139,255,.18)', color: '#b98bff', w: '140', name: 'Deadlift' },
];

export default function Analytics() {
  return (
    <section className="section dark" id="analytics" data-screen-label="Analytics">
      <div className="wrap">
        <span className="kicker neon">Analytics dashboard</span>
        <h2 className="sect-title">See your strength compound.</h2>
        <p className="sect-lede">A dashboard that earns its place: personal-record timeline, a year of consistency at a glance, and per-muscle balance — all computed on-device.</p>

        <div className="an-grid">
          <div className="an-card pr-span span2">
            <div className="ac-h">PERSONAL RECORDS</div>
            <div className="pr-cards">
              {prs.map((p) => (
                <div className="prc" key={p.name}>
                  <span className="tag" style={{ background: p.bg, color: p.color }}>{p.tag}</span>
                  <div className="w tabnum">{p.w}<small>kg</small></div>
                  <div className="nm">{p.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="an-card span2">
            <div className="ac-h">ACTIVITY · 365 DAYS</div>
            <ActivityHeatmap />
          </div>
          <div className="an-card">
            <div className="ac-h">MUSCLE BALANCE</div>
            <div className="radar-wrap"><MuscleRadar /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
