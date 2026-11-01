interface TeddyFairyProps {
  casting: boolean;
  onCast: () => void;
}

const SPARKLES = [
  { x: 40, y: 70, d: 0 },
  { x: 258, y: 205, d: 0.6 },
  { x: 55, y: 240, d: 1.1 },
  { x: 272, y: 125, d: 0.3 },
  { x: 28, y: 155, d: 1.5 },
  { x: 205, y: 38, d: 0.9 },
];

const BURST = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * Math.PI * 2;
  return {
    id: i,
    dx: Math.round(Math.cos(angle) * (70 + (i % 3) * 25)),
    dy: Math.round(Math.sin(angle) * (70 + (i % 3) * 25)),
  };
});

export default function TeddyFairy({ casting, onCast }: TeddyFairyProps) {
  return (
    <div
      className={`fairy-wrap ${casting ? "casting" : ""}`}
      onClick={onCast}
      role="button"
      aria-label="Tap the teddy fairy to open your card"
    >
      <svg
        className="fairy-svg"
        viewBox="0 0 300 340"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wingGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffe3f1" />
            <stop offset="100%" stopColor="#e5c6ff" />
          </linearGradient>
        </defs>

        {/* Wings */}
        <g className="wing wing-l">
          <ellipse
            cx="92"
            cy="165"
            rx="48"
            ry="78"
            transform="rotate(-20 92 165)"
            fill="url(#wingGrad)"
            opacity="0.85"
            stroke="#fff"
            strokeWidth="2"
          />
        </g>
        <g className="wing wing-r">
          <ellipse
            cx="208"
            cy="165"
            rx="48"
            ry="78"
            transform="rotate(20 208 165)"
            fill="url(#wingGrad)"
            opacity="0.85"
            stroke="#fff"
            strokeWidth="2"
          />
        </g>

        {/* Legs */}
        <ellipse cx="118" cy="294" rx="22" ry="17" fill="#c68a5a" />
        <ellipse cx="182" cy="294" rx="22" ry="17" fill="#c68a5a" />
        <ellipse cx="118" cy="298" rx="11" ry="8" fill="#e8c39e" />
        <ellipse cx="182" cy="298" rx="11" ry="8" fill="#e8c39e" />

        {/* Body */}
        <ellipse cx="150" cy="215" rx="52" ry="60" fill="#c68a5a" />
        <ellipse cx="150" cy="225" rx="32" ry="38" fill="#e8c39e" />

        {/* Tutu */}
        <path
          d="M105 228 Q150 248 195 228 L222 284 Q150 304 78 284 Z"
          fill="#ff8fbf"
        />
        <path
          d="M112 236 Q150 254 188 236"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          opacity="0.7"
        />

        {/* Left arm */}
        <ellipse
          cx="98"
          cy="205"
          rx="14"
          ry="27"
          transform="rotate(25 98 205)"
          fill="#c68a5a"
        />

        {/* Ears */}
        <circle cx="105" cy="78" r="21" fill="#c68a5a" />
        <circle cx="195" cy="78" r="21" fill="#c68a5a" />
        <circle cx="105" cy="78" r="11" fill="#e8c39e" />
        <circle cx="195" cy="78" r="11" fill="#e8c39e" />

        {/* Head */}
        <circle cx="150" cy="120" r="55" fill="#c68a5a" />
        <ellipse cx="150" cy="138" rx="24" ry="19" fill="#e8c39e" />
        <circle cx="115" cy="136" r="9" fill="#ff9ec7" opacity="0.55" />
        <circle cx="185" cy="136" r="9" fill="#ff9ec7" opacity="0.55" />

        {/* Face */}
        <g className="eyes">
          <circle cx="130" cy="112" r="6" fill="#3b1a2b" />
          <circle cx="170" cy="112" r="6" fill="#3b1a2b" />
          <circle cx="132" cy="110" r="2" fill="#fff" />
          <circle cx="172" cy="110" r="2" fill="#fff" />
        </g>
        <ellipse cx="150" cy="130" rx="8" ry="6" fill="#5a2a41" />
        <path
          d="M150 136 v6 M150 142 q-8 8 -14 2 M150 142 q8 8 14 2"
          fill="none"
          stroke="#5a2a41"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Tiara */}
        <path
          d="M127 70 L134 50 L150 63 L166 50 L173 70 Z"
          fill="#f6c667"
          stroke="#e9a93a"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="150" cy="60" r="3" fill="#ff6fa5" />

        {/* Right arm + wand */}
        <ellipse
          cx="215"
          cy="168"
          rx="14"
          ry="28"
          transform="rotate(40 215 168)"
          fill="#c68a5a"
        />
        <g className="wand">
          <line
            x1="230"
            y1="146"
            x2="264"
            y2="70"
            stroke="#f6c667"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="231" cy="142" r="13" fill="#c68a5a" />
          <g className="star-glow">
            <polygon
              points="266,40 271,53 285,53 274,62 278,76 266,68 254,76 258,62 247,53 261,53"
              fill="#ffe27a"
              stroke="#f6c667"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>
        </g>

        {/* Sparkles */}
        {SPARKLES.map((s, i) => (
          <path
            key={i}
            className="twinkle"
            style={{ animationDelay: `${s.d}s` }}
            transform={`translate(${s.x} ${s.y})`}
            d="M0 -9 L2.5 -2.5 L9 0 L2.5 2.5 L0 9 L-2.5 2.5 L-9 0 L-2.5 -2.5 Z"
            fill="#ffd36e"
          />
        ))}
      </svg>

      {/* Magic burst from the wand star */}
      {BURST.map((b) => (
        <span
          key={b.id}
          className="burst"
          style={
            { "--dx": `${b.dx}px`, "--dy": `${b.dy}px` } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
