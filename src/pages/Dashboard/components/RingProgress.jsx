import './RingProgress.css';

function RingProgress({ progress, total, size = 142, strokeWidth = 12, padding = 2 }) {
  // progress: 0 to 100
  const effectiveSize = size - (padding * 2);
  const radius = (effectiveSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / total) * circumference;

  return (
  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
    <defs>
      <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D8B4FE" />  {/* Purple-300 */}
        <stop offset="50%" stopColor="#A855F7" />  {/* Purple-500 */}
        <stop offset="100%" stopColor="#7C3AED" /> {/* Your background color */}
      </linearGradient>
      
      {/* Glow filter */}
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <circle
      cx={size / 2}
      cy={size / 2}
      r={radius}
      stroke="#e3d2ff"
      strokeWidth={strokeWidth}
      fill="none"
    />
    
    <circle
      cx={size / 2}
      cy={size / 2}
      r={radius}
      stroke="url(#ringGradient)"
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
      strokeDasharray={circumference}
      strokeDashoffset={offset}
      transform={`rotate(-90 ${size / 2} ${size / 2})`}
      className="ring-progress"
    />
      {/* Optional: Percentage text inside */}
      <text
        x={size / 2}
        y={size / 2 + 8}
        textAnchor="middle"
        fill="#7C3AED"
        fontSize={size * 0.3}
        fontWeight="bold"
      >
        {progress}
      </text>
      
      <text
        x={size / 2}
        y={size / 2 + 22}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#888888"
        fontSize={size * 0.09}
        fontWeight="500"
      >
        of {total}
      </text>
    </svg>
  );
}

export default RingProgress;

// Usage
<RingProgress progress={65} color="#00F5D4" />