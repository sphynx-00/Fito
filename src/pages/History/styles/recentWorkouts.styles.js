import { colors, fonts, radii } from './tokens';

export const row = {
  background: 'var(--bg-card)',
  border: '1px solid var(--border-color)',
  borderRadius: radii.xl,
  padding: '14px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  minHeight: 64,
  cursor: 'pointer',
};

export const dateCol = {
  width: 44, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,
  borderRight: `1px solid ${colors.border}`, paddingRight: 12,
};

export const month = { fontSize: 10, color: colors.muted, fontFamily: fonts.mono };

export const day = { fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', fontFamily: fonts.sans };

export const body = { flex: 1, display: 'flex', flexDirection: 'column', gap: 3 };

export const nameRow = { display: 'flex', alignItems: 'center', gap: 8 };

export const name = { fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', fontFamily: fonts.sans };

export const chevron = (rotated) => ({
  width: 32,
  height: 32,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
  color: rotated ? colors.accentText : colors.faint,
  cursor: 'pointer',
  transform: `rotate(${rotated ? 90 : 0}deg)`,
  transition: 'transform 220ms cubic-bezier(0.4, 0, 0.2, 1), color 160ms linear',
});