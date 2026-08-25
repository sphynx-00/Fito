import { colors, fonts, radii } from './tokens';

export const card = { gap: 13 };

export const row = { display: 'flex', flexDirection: 'column', gap: 6 };

export const labelRow = { display: 'flex', justifyContent: 'space-between', fontSize: 13 };

export const muscle = { color: 'var(--text-primary)', fontFamily: fonts.sans };

export const meta = { color: colors.muted, fontFamily: fonts.mono };

export const track = { height: 6, borderRadius: radii.pill, background: colors.border };

export const fill = ({ pct, current }) => ({
  width: `${pct}%`, height: '100%', borderRadius: radii.pill,
  background: current ? colors.accent : colors.bar,
});
