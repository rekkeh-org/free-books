"use client";

import { useEffect, useState, type CSSProperties } from "react";

const COLORS = [
  "#1B2A4A",
  "#C27803",
  "#3a5a8c",
  "#0a6b3d",
  "#7a3b2e",
  "#252525",
  "#D9A441",
  "#5b3f8c",
];

const POSITIONS: [number, number, number][] = [
  [-155, -130, -8],
  [130, -150, 6],
  [-175, 20, 5],
  [170, 10, -6],
  [-110, 150, -4],
  [115, 155, 8],
  [0, -185, 3],
  [0, 190, -3],
];

const TITLES = [
  "Stories",
  "History",
  "Science",
  "Poetry",
  "Research",
  "Business",
  "Culture",
  "Learning",
];

export function FloatingBooks() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => setScale(window.innerWidth < 600 ? 0.7 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div id="floats">
      {POSITIONS.map(([x, y, r], i) => (
        <div
          key={TITLES[i]}
          className="float"
          style={
            {
              "--x": `${x * scale * 0.9}px`,
              "--y": `${y * scale * 0.9}px`,
              "--r": `${r}deg`,
              "--d": i,
              background: COLORS[i],
            } as CSSProperties
          }
        >
          <span className="bob" style={{ "--d": i } as CSSProperties}>
            {TITLES[i]}
          </span>
        </div>
      ))}
    </div>
  );
}
