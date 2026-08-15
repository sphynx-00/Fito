import { colors, fonts, radii } from './tokens';

export const bar = {
  position: 'sticky', bottom: 0,
  background: colors.tabBg,
  backdropFilter: 'blur(12px)',
  borderTop: `1px solid ${colors.border}`,
  display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
  padding: '12px 8px 26px',
};

export const tab = (active) => ({
  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
  minHeight: 44, justifyContent: 'center', cursor: 'pointer',
  color: active ? colors.accentText : colors.faint,
});

export const icon = ({ active, shape }) => ({
  width: 18, height: 18,
  borderRadius: shape === 'circle' ? radii.pill : 5,
  background: active ? colors.accent : 'transparent',
  border: active ? 'none' : `2px solid ${colors.faint}`,
});

export const label = { fontSize: 10, fontFamily: fonts.mono };
