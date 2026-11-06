import { AlignCenter, Rotate3D } from 'lucide-react';
import { colors, fonts, radii } from './tokens';

export const section = { display: 'flex', flexDirection: 'column', gap: 10, };

export const sectionHeader = { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' };

export const sectionLabel = {
  fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
  color: colors.muted, fontFamily: fonts.mono,
};

export const card = {
  background: 'var(--bg-card)',
  border: '1px solid var(--border-color)',
  borderRadius: radii.xxl,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
};

export const statGrid = (columns) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns},1fr)`,
  gap: 1,
  background: 'var(--border-color)',
  borderRadius: radii.lg,
  overflow: 'hidden',
});

export const statCell = {
  background: 'var(--bg-card)', padding: '16px 10px',
  display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center',
  cursor: 'pointer',
};

export const statValue = () => ({
  fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em',
  color: 'var(--text-primary)',
});

export const statUnit = { fontSize: 13, color: 'var(--text-secondary)' };

export const statLabel = {
  fontSize: 10, letterSpacing: '0.1em', color: 'var(--text-secondary)', textTransform: 'uppercase',
};

export const pill = (active) => ({
  padding: '5px 9px',
  borderRadius: radii.pill,
  fontSize: 11,
  fontFamily: fonts.mono,
  cursor: 'pointer',
  background: active ? colors.raised : 'transparent',
  color: active ? 'var(--text-primary)' : colors.muted,
});

export const prBadge = {
  fontSize: 10, padding: '3px 7px', borderRadius: radii.sm,
  background: colors.accentSoft, color: colors.accentText, fontFamily: fonts.mono,
};

export const monoMeta = { fontSize: 12, color: colors.muted, fontFamily: fonts.mono };

export const chevron = { color: colors.faint, fontSize: 18, transition: 'transform 0.2s ease' };

export const link = { fontSize: 12, color: colors.accentText, cursor: 'pointer' };

export const column = (gap) => ({ display: 'flex', flexDirection: 'column', gap });

export const historyOpen = { transform: 'rotate(90deg)' };

