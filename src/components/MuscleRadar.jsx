// Muscle-balance radar, drawn as a plain SVG (no chart lib).
const AXES = ['Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core'];
const VALS = [0.85, 0.92, 1.0, 0.62, 0.7, 0.55];
const COLORS = ['#22e5a0', '#5a8bff', '#b98bff', '#4be0e6', '#ff6fb5', '#ffd166'];

const CX = 95, CY = 82, R = 60, N = AXES.length;
const pt = (i, r) => {
  const a = (Math.PI * 2 * i) / N - Math.PI / 2;
  return [CX + Math.cos(a) * r, CY + Math.sin(a) * r];
};
const poly = (r, fn = (i) => r) => {
  let d = '';
  for (let i = 0; i < N; i++) {
    const [x, y] = pt(i, typeof fn === 'function' ? fn(i) : r);
    d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
  }
  return d + 'Z';
};

export default function MuscleRadar() {
  return (
    <svg width="190" height="170" viewBox="0 0 190 170" id="radar">
      {[0.33, 0.66, 1].map((rr) => (
        <path key={rr} d={poly(R * rr)} fill="none" stroke="#26262f" strokeWidth="1" />
      ))}
      {AXES.map((_, i) => {
        const [x, y] = pt(i, R);
        return <line key={i} x1={CX} y1={CY} x2={x.toFixed(1)} y2={y.toFixed(1)} stroke="#26262f" strokeWidth="1" />;
      })}
      <path d={poly(0, (i) => R * VALS[i])} fill="rgba(34,229,160,0.16)" stroke="#22e5a0" strokeWidth="2" />
      {AXES.map((_, i) => {
        const [x, y] = pt(i, R * VALS[i]);
        return <circle key={i} cx={x.toFixed(1)} cy={y.toFixed(1)} r="3.4" fill={COLORS[i]} stroke="#0b0b0f" strokeWidth="1.4" />;
      })}
      {AXES.map((label, i) => {
        const [x, y] = pt(i, R + 12);
        const anchor = Math.abs(x - CX) < 6 ? 'middle' : x < CX ? 'end' : 'start';
        return (
          <text key={label} x={x.toFixed(1)} y={(y + 3).toFixed(1)} fill="#9a9aa5" fontSize="9" fontWeight="600" textAnchor={anchor} fontFamily="-apple-system,sans-serif">
            {label}
          </text>
        );
      })}
    </svg>
  );
}
