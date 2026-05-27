import './MuscleGroup.css';

function MuscleGroup({ muscleImage, muscleName, isActive, onClick }) {
  return (
      <div 
        className={`muscle-card ${isActive ? 'active' : ''}`}
        onClick={onClick}
      >
        <div className='muscle-image'>{muscleImage}</div>
        <div className='muscle-name'>{muscleName}</div>
    </div>
  );
}

export default MuscleGroup;
