import { colors, fonts, radii } from './tokens';

export const list = {
  background: colors.card,
  border: `1px solid ${colors.border}`,
  borderRadius: radii.xl,
  overflow: 'hidden',
};

export const row = (last) => ({
  padding: '14px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: last ? 'none' : `1px solid ${colors.border}`,
});

export const exercise = { color: 'var(--text-primary)', fontSize: 15, fontWeight: 600 };

export const date = { fontSize: 11, color: colors.muted, fontFamily: fonts.mono };

export const result = { fontSize: 15, fontWeight: 600, color: colors.accentText, fontFamily: fonts.mono };

export const filters = { display: 'flex', gap: 6 };
