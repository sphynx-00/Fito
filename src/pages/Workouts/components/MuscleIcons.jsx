const base = {
  width: 54,
  height: 54,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "var(--text-primary, currentColor)",
  strokeWidth: 1.3,
  strokeLinecap: "round",
};

export const ChestIcon = () => (
  <svg {...base}>
    <path d="M5 8c0-1.5 2-2.5 3.5-2.5S11 6.5 12 6.5s2-1 3.5-1S19 6.5 19 8c0 2-1.5 3.5-3.5 3.5-1.5 0-2.5-.8-3.5-.8s-2 .8-3.5.8C6.5 11.5 5 10 5 8z"/>
    <path d="M9 12v4M15 12v4M10.5 16h3"/>
  </svg>
);

export const BackIcon = () => (
  <svg {...base}>
    <path d="M12 4v14"/>
    <path d="M12 6c-2 0-5 1-6 3.5S5 15 7 16.5"/>
    <path d="M12 6c2 0 5 1 6 3.5S19 15 17 16.5"/>
    <path d="M12 10c-1.5 0-3 .5-3.5 2M12 10c1.5 0 3 .5 3.5 2"/>
  </svg>
);

export const LegsIcon = () => (
  <svg {...base}>
    <path d="M9 3c-1 3-1.5 6-1 9 .3 2 .5 5 .3 8"/>
    <path d="M15 3c1 3 1.5 6 1 9-.3 2-.5 5-.3 8"/>
    <path d="M8.5 12c1 .5 2 .5 3 0M15.5 12c-1 .5-2 .5-3 0"/>
    <path d="M7.5 20h2.5M14 20h2.5"/>
  </svg>
);

export const ShouldersIcon = () => (
  <svg {...base}>
    <circle cx="12" cy="6" r="2.2"/>
    <path d="M6 11c0-1.8 1.5-2.5 3-2.5h6c1.5 0 3 .7 3 2.5"/>
    <ellipse cx="5.5" cy="12.5" rx="2.3" ry="2.8"/>
    <ellipse cx="18.5" cy="12.5" rx="2.3" ry="2.8"/>
    <path d="M9 11v7M15 11v7"/>
  </svg>
);

export const ArmsIcon = () => (
  <svg {...base}>
    <path d="M7 4c-1.5 1-2 3-2 5s.5 3.5 1.5 4.5"/>
    <path d="M7 4c2 0 3.5 1.5 3.5 4S9 12.5 7 13"/>
    <path d="M6.5 13.5c0 3 .5 5 1 6.5"/>
    <path d="M17 4c1.5 1 2 3 2 5s-.5 3.5-1.5 4.5"/>
    <path d="M17 4c-2 0-3.5 1.5-3.5 4s1.5 4.5 3.5 5"/>
    <path d="M17.5 13.5c0 3-.5 5-1 6.5"/>
  </svg>
);

export const CoreIcon = () => (
  <svg {...base}>
    <path d="M7 4c0 4 .5 10 1.5 16M17 4c0 4-.5 10-1.5 16"/>
    <path d="M12 5v14"/>
    <path d="M8 8h8M8.3 11.5h7.4M8.8 15h6.4"/>
  </svg>
);