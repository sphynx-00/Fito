import { colors, fonts, radii } from './tokens';

export const page = { background: colors.bg, color: colors.text, fontFamily: fonts.sans, minHeight: '100vh' };

export const scroll = { padding: '56px 20px 24px', display: 'flex', flexDirection: 'column', gap: 22 };

export const back = {
  display: 'flex', alignItems: 'center', gap: 14,
  color: colors.muted, fontSize: 14, minHeight: 44, cursor: 'pointer',
};

export const backIcon = {
  width: 36, height: 36, borderRadius: radii.md,
  border: `1px solid ${colors.border}`,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

export const backLabel = {
  fontFamily: fonts.mono, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
};

export const titleBlock = { display: 'flex', flexDirection: 'column', gap: 6 };

export const title = { fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em' };

export const program = { fontSize: 13, color: colors.muted, fontFamily: fonts.mono };

export const statCell = {
  background: colors.card, padding: '16px 12px',
  display: 'flex', flexDirection: 'column', gap: 4,
};

export const statValue = (accent) => ({
  fontSize: 22, fontWeight: 600, color: accent ? colors.accentText : colors.text,
});

export const statUnit = { fontSize: 12, color: colors.muted };

export const prCard = {
  border: `1px solid ${colors.accentLine}`,
  background: colors.accentFill,
  borderRadius: radii.lg,
  padding: '14px 16px',
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
};

export const prInfo = { display: 'flex', flexDirection: 'column', gap: 2 };

export const prLabel = {
  fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
  color: colors.accentText, fontFamily: fonts.mono,
};

export const prValue = { fontSize: 15, fontWeight: 600 };

export const prPrevious = { fontSize: 12, color: colors.muted, fontFamily: fonts.mono };

export const exerciseList = { display: 'flex', flexDirection: 'column', gap: 12 };

export const exerciseCard = {
  background: colors.card, border: `1px solid ${colors.border}`, borderRadius: radii.xl,
  padding: 16, display: 'flex', flexDirection: 'column', gap: 12,
};

export const exerciseHeader = { display: 'flex', alignItems: 'center', justifyContent: 'space-between' };

export const exerciseName = { fontSize: 16, fontWeight: 600 };

export const historyLink = { fontSize: 11, color: colors.accentText, fontFamily: fonts.mono, cursor: 'pointer' };

export const setList = { display: 'flex', flexDirection: 'column', gap: 8, fontFamily: fonts.mono, fontSize: 14 };

export const setRow = { display: 'flex', alignItems: 'center', gap: 12 };

export const setIndex = { color: colors.faint, width: 16 };

export const more = {
  textAlign: 'center', fontSize: 12, color: colors.faint, fontFamily: fonts.mono, padding: '6px 0',
};

export const readonlyNote = {
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 14,
  borderRadius: 14, border: `1px solid ${colors.border}`, color: colors.muted,
  fontSize: 13, fontFamily: fonts.mono, minHeight: 44,
};
