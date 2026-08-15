import { colors, fonts, radii } from './tokens';

export const card = {
  background: colors.card,
  border: `1px solid ${colors.border}`,
  borderRadius: radii.xxl,
  padding: '18px 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
};

export const nav = { display: 'flex', alignItems: 'center', justifyContent: 'space-between' };

export const navButton = {
  width: 32, height: 32, borderRadius: 10,
  border: `1px solid ${colors.border}`,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: colors.muted, cursor: 'pointer',
};

export const monthLabel = {
  fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: fonts.mono,
};

export const weekdayRow = {
  display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6,
  fontSize: 10, color: colors.muted, fontFamily: fonts.mono, textAlign: 'center',
};

export const grid = { display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6 };

export const pad = { aspectRatio: '1' };

export const day = ({ done, today, faded }) => {
  const base = {
    aspectRatio: '1', borderRadius: radii.md, display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', gap: 3, fontSize: 13, cursor: 'pointer',
  };
  if (today) return { ...base, background: colors.accent, color: colors.onAccent, fontWeight: 600 };
  if (done) return { ...base, background: colors.raised, color: colors.text };
  return { ...base, color: faded ? colors.dim : colors.faint };
};

export const dot = (today) => ({
  width: 4, height: 4, borderRadius: radii.pill,
  background: today ? colors.onAccent : colors.accent,
});

export const selected = {
  borderTop: `1px solid ${colors.border}`, paddingTop: 14,
  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, cursor: 'pointer',
};

export const selectedInfo = { display: 'flex', flexDirection: 'column', gap: 4 };

export const selectedDate = {
  fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
  color: colors.muted, fontFamily: fonts.mono,
};

export const selectedName = { fontSize: 17, fontWeight: 600 };

export const selectedRight = { display: 'flex', alignItems: 'center', gap: 10 };

export const selectedPr = {
  fontSize: 11, padding: '6px 10px', borderRadius: radii.pill,
  background: colors.accentSoft, color: colors.accentText,
  fontFamily: fonts.mono, whiteSpace: 'nowrap',
};
