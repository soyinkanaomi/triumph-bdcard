import { useMemo } from "react";

interface Floater {
  id: number;
  symbol: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

interface FloatingHeartsProps {
  count?: number;
  symbols?: string[];
}

const DEFAULT_SYMBOLS = ["♥", "✿", "❀", "✦", "♡"];

export default function FloatingHearts({
  count = 18,
  symbols = DEFAULT_SYMBOLS,
}: FloatingHeartsProps) {
  const floaters = useMemo<Floater[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        symbol: symbols[i % symbols.length],
        left: Math.random() * 100,
        size: 14 + Math.random() * 20,
        duration: 10 + Math.random() * 12,
        delay: Math.random() * 10,
      })),
    [count, symbols],
  );

  return (
    <div className="floaters" aria-hidden="true">
      {floaters.map((f) => (
        <span
          key={f.id}
          className="floater"
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}px`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
          }}
        >
          {f.symbol}
        </span>
      ))}
    </div>
  );
}
