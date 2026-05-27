import './SemiCircleProgress.css';

function SemiCircleProgress() {
  return (
    <div className="semi-wrapper">
      <h4 className='title'>Food Log Focus</h4>
      <div className="semi-circle">
        <svg viewBox="-20 -1 240 135" width="240" height="135">
          <path
            d="M15,100 A85,85 0 0,1 185,100"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="14"
            strokeLinecap="round"
          />

          <path
            d="M15,100 A85,85 0 0,1 185,100"
            fill="none"
            stroke="#1c80f3"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray="267"
            strokeDashoffset="25"
          />

          <text
          className='calories-value' x="15" y="119" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#000000">
            564
          </text>

          <text className='calories-label' x="15" y="130"   textAnchor="middle" fontSize="8" fill="#888">
            Remaining
          </text>

          <text className='calories-value' x="185" y="119" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#000000">
            1220
          </text>

          <text className='calories-label' x="185" y="130" textAnchor="middle" fontSize="8" fill="#888">
            Target
          </text>
        </svg>

        <div className="semi-text">
          <span className="semi-value">75%</span>
          <span className="semi-unit">Consumed</span>
        </div>
      </div>
    </div>
  );
}

export default SemiCircleProgress;