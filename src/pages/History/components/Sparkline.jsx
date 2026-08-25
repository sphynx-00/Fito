import React from 'react';
import { colors } from '../styles/tokens';

/** Normalized 0..1 points rendered as a polyline. */
export default function Sparkline({ points, stroke = colors.accent, height = 110, grid = false, endDot = false }) {
  const width = 320;
  const padX = 8;
  const top = 14;
  const bottom = height - 16;
  const step = points.length > 1 ? (width - padX * 2) / (points.length - 1) : 0;
  const coords = points.map((p, i) => [padX + i * step, bottom - p * (bottom - top)]);
  const last = coords[coords.length - 1];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height, overflow: 'visible' }}>
      {grid && [top, (top + bottom) / 2, bottom].map((y) => (
        <line key={y} x1="0" y1={y} x2={width} y2={y} stroke='var(--border-color)' strokeWidth="1" />
      ))}
      <polyline
        points={coords.map((p) => p.join(',')).join(' ')}
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {endDot && <circle cx={last[0]} cy={last[1]} r="4.5" fill={stroke} />}
    </svg>
  );
}
