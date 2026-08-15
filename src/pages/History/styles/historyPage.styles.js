import { colors, fonts, radii } from './tokens';

export const page = {
  background: colors.bg,
  color: colors.text,
  fontFamily: fonts.sans,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

export const scroll = { display: 'flex', flexDirection: 'column', gap: 22, flex: 1 };

export const header = { display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' };

export const title = { fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em' };

export const subtitle = { fontSize: 14, color: colors.muted, marginTop: 2 };

export const filterRow = { display: 'flex', gap: 8 };

export const filter = (active) => ({
  padding: '8px 12px',
  borderRadius: radii.pill,
  fontSize: 12,
  fontFamily: fonts.mono,
  cursor: 'pointer',
  background: active ? colors.accentSoft : 'transparent',
  color: active ? colors.accentText : colors.muted,
  border: active ? 'none' : `1px solid ${colors.border}`,
});
