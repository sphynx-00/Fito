import { colors, fonts, radii } from './tokens';

export const picker = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '12px 14px', borderRadius: radii.md, background: colors.raised,
  minHeight: 44, cursor: 'pointer',
};

export const pickerLabel = { fontSize: 15, fontWeight: 600 };

export const caret = { color: colors.muted, fontSize: 12 };

export const metrics = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 };

export const metric = { display: 'flex', flexDirection: 'column', gap: 3 };

export const metricValue = (accent) => ({
  fontSize: 19, fontWeight: 600, color: accent ? colors.accentText : colors.text,
});

export const chartBlock = { display: 'flex', flexDirection: 'column', gap: 8 };

export const axis = {
  display: 'flex', justifyContent: 'space-between',
  fontSize: 10, color: colors.faint, fontFamily: fonts.mono,
};

export const sessions = {
  borderTop: `1px solid ${colors.border}`, paddingTop: 12,
  display: 'flex', flexDirection: 'column', gap: 9,
  fontFamily: fonts.mono, fontSize: 13,
};

export const sessionRow = { display: 'flex', justifyContent: 'space-between' };

export const sessionDate = { color: colors.muted };
