import { useMemo } from "react";

interface Piece {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  round: boolean;
}

interface ConfettiProps {
  count?: number;
}

const COLORS = ["#ff6fa5", "#c77dff", "#e9b872", "#ffd9e8", "#ff9ec7"];

export default function Confetti({ count = 70 }: ConfettiProps) {
  const pieces = useMemo<Piece[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 6 + Math.random() * 8,
        duration: 3 + Math.random() * 3,
        delay: Math.random() * 1.2,
        color: COLORS[i % COLORS.length],
        round: Math.random() > 0.5,
      })),
    [count],
  );

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            background: p.color,
            borderRadius: p.round ? "50%" : "2px",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
