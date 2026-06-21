import { useMemo } from 'react';

const LEVELS = ['#1b1b22', '#0e3b2e', '#15814b', '#1fbf73', '#22e5a0'];

// 140-cell (20 weeks) slice of training consistency, intensity-colored.
export default function ActivityHeatmap({ cells = 140 }) {
  const data = useMemo(() => {
    const out = [];
    for (let i = 0; i < cells; i++) {
      const dow = i % 7;
      let lvl;
      if (dow === 6) lvl = Math.random() < 0.8 ? 0 : 1;        // Sundays mostly rest
      else if (dow === 3) lvl = Math.random() < 0.5 ? 0 : 2;   // mid-week lighter
      else {
        const r = Math.random();
        lvl = r < 0.18 ? 0 : r < 0.4 ? 2 : r < 0.7 ? 3 : 4;
      }
      out.push(lvl);
    }
    return out;
  }, [cells]);

  return (
    <div className="heat">
      {data.map((lvl, i) => (
        <i key={i} style={{ background: LEVELS[lvl] }} />
      ))}
    </div>
  );
}
