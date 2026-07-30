import './ExerciseRow.css';
import squat from '../../../assets/squat.png';

function ExerciseRow({ name, sets, reps, completed, toggle }) {
  return (
    <div className="exercise-row">
      <span className="ex-name">{name}</span>
      <div className="ex-done">
        <span className="ex-sets">{sets} sets × {reps} reps</span>
        <div className={`check ${completed ? 'completed' : ''}`}
          onClick={toggle}
         />
      </div>
    </div>

    // <div class="exercise-row">
    //   {/* <div class="exercise-row__badge">...</div> */}
    //   <img class="exercise-row__photo" src={squat} alt="..."/>
    //   <div class="exercise-row__body">
    //     <div class="exercise-title">
    //       <h3 class="exercise-row__name">{name}</h3>
    //       <div className={`check ${completed ? 'completed' : ''}`}
    //         onClick={toggle}
    //      />
    //     </div>
    //     {/* <p class="exercise-row__handle">@jacobjones</p> */}
    //     <span class="exercise-row__category">Category: Legs</span>
    //     <div class="exercise-row__tags">
    //       <span class="tag">Weight - 70kg</span>
    //       <span class="tag">Repetition - {reps}</span>
    //       <span class="tag">Sets - {sets}</span>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ExerciseRow;