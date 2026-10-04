import { getExercise, searchExercises, getAssetUrl } from '@bryllim/workout-guide';


const base = {
  width: 54,
  height: 54,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "var(--text-primary, currentColor)",
  strokeWidth: 1.3,
  strokeLinecap: "round",
};

export const ChestIcon = () => {
  const pecDeck = getExercise('pec-deck'); 

 
  if (!pecDeck) return null;

  return (
    <img
      src={getAssetUrl('pec-deck', 1)} // Frame 1 is the starting position
      width={150}
      height={130}
    />
  );
};

export const BackIcon = () => {
  const back = getExercise('machine-row');

  if (!back) return null;

  return (
    <img
      src={getAssetUrl('machine-row', 1)} // Frame 1 is the starting position
      width={150}
      height={130}
    />
  );
}

export const LegsIcon = () => {
  const legs = getExercise('smith-machine-romanian-deadlift');

  if (!legs) return null;

  return (
    <img
      src={getAssetUrl('smith-machine-romanian-deadlift', 1)} // Frame 1 is the starting position
      alt="Pec Deck"
      width={150}
      height={130}
    />
  );
}




export const ShouldersIcon = () => {
  const shoulder = getExercise('seated-dumbbell-press');

  if (!shoulder) return null;

  return (
    <img
      src={getAssetUrl('seated-dumbbell-press', 1)} // Frame 1 is the starting position
      width={150}
      height={130}
    />
  );
}

export const ArmsIcon = () => {
  const arms = getExercise('wrist-extension');

  if (!arms) return null;

  return (
    <img
      src={getAssetUrl('wrist-extension', 1)} // Frame 1 is the starting position
      width={150}
      height={130}
    />
  );
}

export const CoreIcon = () => {
  const core = getExercise('hanging-leg-raise');

  if (!core) return null;

  return (
    <img
      src={getAssetUrl('hanging-leg-raise', 1)} // Frame 1 is the starting position
      width={150}
      height={130}
    />
  );
}