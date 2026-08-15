import { colors, fonts } from './tokens';

export const totalRow = { display: 'flex', alignItems: 'baseline', gap: 10 };

export const total = { color: 'var(--text-primary)', fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em' };

export const delta = { fontSize: 12, color: colors.positive, fontFamily: fonts.mono };

export const bars = (count) => ({
  display: 'grid', gridTemplateColumns: `repeat(${count},1fr)`,
  gap: 12, alignItems: 'end', height: 120,
});

export const barCol = {
  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
  height: '100%', justifyContent: 'flex-end',
};

export const bar = ({ pct, current }) => ({
  width: '100%',
  height: `${pct}%`,
  borderRadius: '8px 8px 3px 3px',
  background: current ? colors.accent : colors.barBg,
});

export const barLabel = { fontSize: 10, color: colors.faint, fontFamily: fonts.mono };

export const ranges = { display: 'flex', gap: 6 };
