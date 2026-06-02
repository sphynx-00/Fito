import { useEffect, useState } from "react";
import { programs } from "../../models/program";
import { getWorkoutStats, getTodayWithGreeting } from "../../utils/workoutUtils";
import StatCard from "../Dashboard/components/StatCard";
import TodaysWorkout from "../Dashboard/components/TodaysWorkout";
import WeeklyGoal from "../Dashboard/components/WeeklyGoal";
import HeroBanner from "../Dashboard/components/HeroBanner";
import './Dashboard.css';

function Dashboard() {
const { todaysWorkout, total, completed, percentage, } = getWorkoutStats(programs);

// function for Today's workout
const [completedList, setCompletedList] = useState(() => {
  const saved = JSON.parse(localStorage.getItem('completedList') || '[]');

  if (saved.length === 0) {
   // Will change this with a proper message or UI if it is newly opened
    return todaysWorkout?.exercises 
      ? todaysWorkout.exercises.map(e => e.completed) 
      : [];
  }

  return saved;
});

useEffect(() => {
  localStorage.setItem('completedList', JSON.stringify(completedList));
}, [completedList]);
// function for Today's workout

const handleToggle = (index) => {
  const updated = [...completedList];
  updated[index] = !updated[index];
  setCompletedList(updated);
};

const completedExercises = completedList.filter(c => c === true).length;
const totalExercises = completedList.length;
const { date, greeting } = getTodayWithGreeting();

  return (
      <main className="dashboard-content">
        {/* <SearchBar /> */}
        {/* <SemiCircleProgress /> */}
        <header className="dashboard-header">
          <p className="dashboard-date">{date}</p>
          <h3 className="dashboard-greeting">Good {greeting}, Sean!</h3>
        </header>
         <WeeklyGoal 
          program={todaysWorkout?.name}
          completed={completed}
          total={total}
          percentage={percentage}
         />
        <HeroBanner 
          workoutName={todaysWorkout?.name}
          exercises={todaysWorkout?.exercises?.length}
          completedExercises={completedExercises}
          totalExercises={totalExercises}
          percentage={percentage}
        />
        <h4>Current Stats</h4>
        <div className="stats-grid">
          <StatCard label="Start weight" value="72" unit="kg" />
          <StatCard label="Goal weight" value="62" unit="kg" />
          <StatCard label="Daily calories" value="1,400" unit="kcal" />
        </div>

        <div className="cards-row">
          <TodaysWorkout 
             exercises={todaysWorkout?.exercises}
             workoutName={todaysWorkout?.name}
             completedList={completedList}
             handleToggle={handleToggle} 
          />
        </div>
         {/* <WeeklyGoal 
            program={todaysWorkout?.name}
            completed={completed}
            total={total}
            percentage={percentage}
         /> */}
      </main>
  );
}
export default Dashboard;