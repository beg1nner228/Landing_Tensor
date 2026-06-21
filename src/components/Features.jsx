import { Dumbbell, Check, Ghost, Spark } from './Icons.jsx';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const onDays = ['Mon', 'Wed', 'Fri'];

export default function Features() {
  return (
    <section className="section" id="features" data-screen-label="Features">
      <div className="wrap">
        <span className="kicker">The workspace</span>
        <h2 className="sect-title">Your training, finally organized.</h2>
        <p className="sect-lede">Stop scrolling endless feeds and half-finished notes. Tensor gives every goal its own project — routines, schedule, and history in one calm place.</p>

        {/* Feature 1: projects */}
        <div className="feature" style={{ marginTop: 48 }}>
          <div className="feat-text">
            <span className="kicker">Projects &amp; routines</span>
            <h2 className="sect-title" style={{ fontSize: 'clamp(24px,5vw,32px)' }}>Group workouts the way you think.</h2>
            <p className="sect-lede">Create a project for each goal — “Summer Shred”, “Strength 5×5”, “Marathon Base”. Build a weekly schedule with a tap and drop routines inside.</p>
            <ul className="feat-list">
              <li><span className="tick">✓</span> Day-of-week schedule builder</li>
              <li><span className="tick">✓</span> Reorder, rename, and archive routines</li>
              <li><span className="tick">✓</span> Everything stored locally — works offline</li>
            </ul>
          </div>
          <div className="visual-card">
            <div className="sect-label" style={{ marginTop: 0 }}>SUMMER SHRED · SCHEDULE</div>
            <div style={{ display: 'flex', gap: 7, margin: '6px 0 18px' }}>
              {days.map((d) => (
                <span key={d} className={`pillday${onDays.includes(d) ? ' on' : ''}`}>{d}</span>
              ))}
            </div>
            <Routine color="rgba(58,109,240,.12)" ink="#3a6df0" name="Push A — Chest & Triceps" meta="6 exercises · ~52 min" />
            <Routine color="rgba(31,157,87,.12)" ink="#1f9d57" name="Pull A — Back & Biceps" meta="6 exercises · ~48 min" />
            <Routine color="rgba(185,139,255,.16)" ink="#7c4ddb" name="Legs — Quads & Hamstrings" meta="7 exercises · ~58 min" last />
          </div>
        </div>

        {/* Feature 2: Ghost Mode */}
        <div className="feature reverse">
          <div className="feat-text">
            <span className="kicker gold">Ghost Mode</span>
            <h2 className="sect-title" style={{ fontSize: 'clamp(24px,5vw,32px)' }}>Race the only rival that matters.</h2>
            <p className="sect-lede">As you log a set, Tensor quietly surfaces what you lifted on this exact movement 30 days ago. Progressive overload becomes obvious — no spreadsheets.</p>
            <ul className="feat-list">
              <li><span className="tick">✓</span> 30-day benchmark on every lift</li>
              <li><span className="tick">✓</span> Subtle, never in the way</li>
              <li><span className="tick">✓</span> Instant “did I beat it?” feedback</li>
            </ul>
          </div>
          <div className="visual-card">
            <div className="sect-label" style={{ marginTop: 0 }}>BARBELL SQUAT</div>
            <div className="logrow">
              <span className="idx">1</span>
              <div className="cell on">100<span style={{ color: 'var(--ink3)', fontWeight: 500 }}>kg</span></div>
              <div className="cell">8</div>
              <div className="tickbox done"><Check /></div>
            </div>
            <div className="ghost-line">
              <Ghost /> Your past self did: <b style={{ color: 'var(--ink2)' }}>80kg × 8</b> &nbsp;·&nbsp; <span style={{ color: 'var(--green)' }}>+20kg</span>
            </div>
            <div className="logrow">
              <span className="idx">2</span>
              <div className="cell on">102<span style={{ color: 'var(--ink3)', fontWeight: 500 }}>kg</span></div>
              <div className="cell">6</div>
              <div className="tickbox done"><Check /></div>
            </div>
            <div className="logrow">
              <span className="idx">3</span>
              <div className="cell">—</div>
              <div className="cell">—</div>
              <div className="tickbox idle" />
            </div>
          </div>
        </div>

        {/* Feature 3: AI Quick-Input */}
        <div className="feature">
          <div className="feat-text">
            <span className="kicker">AI Quick-Input</span>
            <h2 className="sect-title" style={{ fontSize: 'clamp(24px,5vw,32px)' }}>Log a whole session in one line.</h2>
            <p className="sect-lede">Type the way you talk. Tensor parses natural shorthand into structured exercises, sets, and reps — instantly written to your log.</p>
            <ul className="feat-list">
              <li><span className="tick">✓</span> Understands “squat 100 3x10, bench 80 4x8”</li>
              <li><span className="tick">✓</span> Multi-exercise, multi-set in one go</li>
              <li><span className="tick">✓</span> Edit anything after — it's just data</li>
            </ul>
          </div>
          <div className="visual-card">
            <div className="ai-input">
              <Spark />
              <span className="ph">squat 100 3x10, bench 80 4x8</span>
              <span className="caret" />
            </div>
            <div className="ai-out">
              <span className="chip">Squat <b>100kg</b> <span className="x">×</span> 3×10</span>
              <span className="chip">Bench <b>80kg</b> <span className="x">×</span> 4×8</span>
            </div>
            <div style={{ marginTop: 14, fontSize: 12.5, color: 'var(--ink3)', display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ color: 'var(--green)' }}>●</span> 2 exercises · 7 sets added to today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Routine({ color, ink, name, meta, last }) {
  return (
    <div className="proj" style={{ marginBottom: last ? 0 : 9 }}>
      <div className="ic" style={{ background: color, color: ink }}><Dumbbell size={20} /></div>
      <div><div className="nm">{name}</div><div className="meta">{meta}</div></div>
    </div>
  );
}
