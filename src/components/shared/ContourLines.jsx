// Decorative wavy gold lines (from the BAGIRE design), drawn over photos and dark panels.
const PATHS = [
  'M-20 340 C 60 300, 100 380, 180 330 S 320 260, 420 330',
  'M-20 300 C 60 260, 110 330, 190 280 S 330 210, 420 280',
  'M-20 260 C 70 210, 120 280, 200 230 S 330 160, 420 230',
  'M-20 220 C 70 170, 130 230, 210 180 S 330 110, 420 180',
  'M-20 180 C 80 130, 140 180, 220 130 S 330 70, 420 130',
  'M-20 140 C 80 90, 150 130, 230 90 S 330 40, 420 90',
  'M-20 100 C 90 55, 160 90, 240 55 S 330 15, 420 55'
];
const OPACITIES = [0.5, 0.6, 0.5, 0.6, 0.5, 0.45, 0.4];

export default function ContourLines({ className = '', color = '#B8863A' }) {
  return (
    <svg viewBox="0 0 400 460" preserveAspectRatio="none" className={`pointer-events-none ${className}`} aria-hidden="true">
      {PATHS.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={color} strokeWidth="1" opacity={OPACITIES[i]} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}
