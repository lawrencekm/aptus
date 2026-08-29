/**
 * Engraved medallion used in place of stock photography.
 *
 * The site deliberately ships no photographs of gold, vaults or trade floors
 * that the company cannot evidence as its own. Until first-party photography
 * is supplied, hero and section imagery is drawn — inline, ~2KB, resolution
 * independent, and impossible to mistake for a claim about operations.
 */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 420"
      className={className}
      role="img"
      aria-label="Engraved medallion in the Aptus Group house style"
    >
      <defs>
        <linearGradient id="orn-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E7CC85" />
          <stop offset="45%" stopColor="#E3BA5C" />
          <stop offset="72%" stopColor="#B08631" />
          <stop offset="100%" stopColor="#E3BA5C" />
        </linearGradient>
        <radialGradient id="orn-fade" cx="50%" cy="42%" r="58%">
          <stop offset="0%" stopColor="#E3BA5C" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#E3BA5C" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="210" cy="210" r="200" fill="url(#orn-fade)" />

      {/* Concentric guilloché rings */}
      {[196, 178, 150].map((r, i) => (
        <circle
          key={r}
          cx="210"
          cy="210"
          r={r}
          fill="none"
          stroke="url(#orn-gold)"
          strokeWidth={i === 1 ? 0.6 : 1}
          opacity={i === 1 ? 0.45 : 0.7}
          strokeDasharray={i === 2 ? "1 5" : undefined}
        />
      ))}

      {/* Radial engraving */}
      <g opacity="0.35" stroke="url(#orn-gold)" strokeWidth="0.6">
        {Array.from({ length: 72 }, (_, i) => {
          const a = (i / 72) * Math.PI * 2;
          const inner = i % 6 === 0 ? 150 : 168;
          return (
            <line
              key={i}
              x1={210 + Math.cos(a) * inner}
              y1={210 + Math.sin(a) * inner}
              x2={210 + Math.cos(a) * 178}
              y2={210 + Math.sin(a) * 178}
            />
          );
        })}
      </g>

      {/* Abstracted mark: three ascending forms echoing the logo geometry */}
      <g stroke="url(#orn-gold)" strokeWidth="2.4" fill="none" strokeLinejoin="miter">
        <path d="M152 268V186l26-26v108" />
        <path d="M210 268V150l0-0 0 0" />
        <path d="M196 268V164l14-14 14 14v104" />
        <path d="M242 268V160l26 26v82" />
        <path d="M242 236h26" />
      </g>

      <circle cx="210" cy="210" r="118" fill="none" stroke="url(#orn-gold)" strokeWidth="0.6" opacity="0.5" />
    </svg>
  );
}
