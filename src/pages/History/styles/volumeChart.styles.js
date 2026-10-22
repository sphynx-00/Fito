import { colors, fonts } from './tokens';

export const totalRow = { display: 'flex', alignItems: 'baseline', gap: 10 };

export const total = { color: 'var(--text-primary)', fontSize: 26, fontWeight: 600, fontFamily: fonts.sans, letterSpacing: '-0.02em' };

export const delta = { fontSize: 12, color: colors.positive, fontFamily: fonts.mono };

// fixed height: percent heights below need something to measure against
export const bars = {
  display: 'flex',
  gap: 12,
  alignItems: 'flex-end',
  height: 120,
};

export const barCol = {
  flex: 1,                       // equal width for every bar
  minWidth: 0,
  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
  height: '100%',
};

// NEW: the space above the label; the bar's % height is measured against this
export const barTrack = {
  width: '100%',
  flex: 1,
  display: 'flex',
  alignItems: 'flex-end',        // bar sits at the bottom and grows upward
};

export const bar = ({ pct, current, grown, index = 0 }) => ({
  width: '100%',
  height: grown ? `${pct}%` : '0%',
  borderRadius: '8px 8px 3px 3px',
  background: current ? colors.accent : colors.barBg,
  transition: 'height 600ms ease-out',
  transitionDelay: `${index * 80}ms`,
});

export const barLabel = { fontSize: 10, color: colors.faint, fontFamily: fonts.mono };

export const ranges = { display: 'flex', gap: 6 };