// Shared inline SVG icons + brand mark for the Tensor landing.

export function Mark() {
  return (
    <span className="mark">
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
        <defs>
          <linearGradient id="tensorPureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#7BFF00" />
            <stop offset="35%" stop-color="#39FF14" />
            <stop offset="75%" stop-color="#00E5FF" />
            <stop offset="100%" stop-color="#00B0FF" />
          </linearGradient>
        </defs>

        <g>
          <path d="M 80 140 
                  L 130 190 
                  L 210 190 
                  L 210 380 
                  L 290 380 
                  L 290 190 
                  L 370 190 
                  L 420 140 
                  Z" 
                fill="url(#tensorPureGradient)" />
        </g>
      </svg>

    </span>
  );
}

export function Dumbbell({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M5.5 9v6M8 7.5v9M18.5 9v6M16 7.5v9M8 12h8" />
    </svg>
  );
}

export function Chevron({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function Check({ size = 14, color = '#fff', width = 3.4 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function Ghost({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export function Spark({ size = 17, color = 'var(--accent)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <path d="M5 3l1.5 4L11 8.5 6.5 10 5 14l-1.5-4L-1 8.5 3.5 7 5 3z" transform="translate(6 2)" />
    </svg>
  );
}

// store badges — original wordmarks/glyphs, swap for official badges at launch
export function AppStoreBadge({ light = false }) {
  const fill = light ? '#2c2a26' : '#fff';
  return (
    <a className={`store${light ? ' light' : ''}`} href="#" aria-label="Download on the App Store">
      <svg width="22" height="26" viewBox="0 0 24 28" fill={fill}>
        <path d="M17.05 14.86c-.03-2.7 2.2-4 2.3-4.06-1.25-1.84-3.2-2.09-3.9-2.12-1.66-.17-3.24.97-4.08.97-.84 0-2.14-.95-3.52-.92-1.81.03-3.48 1.05-4.41 2.67-1.88 3.27-.48 8.1 1.35 10.76.9 1.3 1.96 2.76 3.35 2.71 1.35-.05 1.86-.87 3.49-.87 1.62 0 2.08.87 3.5.84 1.45-.03 2.36-1.32 3.24-2.63 1.02-1.51 1.44-2.97 1.46-3.04-.03-.01-2.8-1.07-2.83-4.26zM14.4 6.86c.74-.9 1.24-2.14 1.1-3.38-1.07.04-2.36.71-3.12 1.6-.68.79-1.28 2.06-1.12 3.27 1.19.09 2.41-.6 3.14-1.49z" />
      </svg>
      <span className="lbl"><small>Download on the</small><b>App Store</b></span>
    </a>
  );
}

export function GooglePlayBadge({ light = false }) {
  const c = light
    ? { a: '#1f9d57', b: '#c8902c', c: '#3a6df0', d: '#d24a6a' }
    : { a: '#22e5a0', b: '#ffd166', c: '#5a8bff', d: '#ff6f91' };
  return (
    <a className={`store${light ? ' light' : ''}`} href="#" aria-label="Get it on Google Play">
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
        <path d="M2 2.2v19.6c0 .5.3.8.6.9L13.4 12 2.6 1.3c-.3.1-.6.4-.6.9z" fill={c.a} />
        <path d="M17.3 8.1 14 6.2 11 9.1l2.4 2.9 3.9-2.2c.7-.4.7-1.3 0-1.7z" fill={c.b} />
        <path d="M2.6 1.3 13.4 12l-2.4 2.9L2.6 1.3z" fill={c.c} />
        <path d="M2.6 22.7 11 14.9l2.4-2.9L2.6 22.7z" fill={c.d} />
      </svg>
      <span className="lbl"><small>GET IT ON</small><b>Google Play</b></span>
    </a>
  );
}
