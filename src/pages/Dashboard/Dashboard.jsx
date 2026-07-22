import { useEffect, useState } from "react";
import { getWorkoutStats, getTodayWithGreeting } from "../../utils/workoutUtils";
import StatCard from "../Dashboard/components/StatCard";
import TodaysWorkout from "../Dashboard/components/TodaysWorkout";
import WeeklyGoal from "../Dashboard/components/WeeklyGoal";
import HeroBanner from "../Dashboard/components/HeroBanner";
import './Dashboard.css';
import { loadFromStorage } from "../../models/completedWorkouts";
import { calculateDayStreak } from "../History/historyUtils";
import { loadUser } from "../Profile/profileUtils";


function Dashboard() {
const userStats = loadUser();

const { todaysWorkout, total, completed, percentage } = getWorkoutStats();

const [workoutHistory, setWorkoutHistory] = useState(() => loadFromStorage());

const dayStreak = calculateDayStreak(workoutHistory);

// function for Today's workout
const [completedList, setCompletedList] = useState(() => {
  const today = new Date().toLocaleDateString();
  const savedDate = localStorage.getItem('workoutDate');
  
  if (savedDate !== today) {
    localStorage.setItem('workoutDate', today);
    localStorage.setItem('completedList', '[]');
    localStorage.setItem('isCompleted', false);
    return todaysWorkout?.exercises?.map(() => false) || [];
  // Will change this with a proper message or UI if it is newly opened //
  }
  

  const saved = JSON.parse(localStorage.getItem('completedList') || '[]');

  if (saved.length > 0) {
    return saved;
  }

  return todaysWorkout?.exercises?.map(() => false) || [];
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
      <main className="dashboard-content page-transition">
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
          dayStreak={dayStreak}
        />
        <h4>Current Stats</h4>
        <div className="stats-grid">
          <StatCard label="Start weight" value={userStats.weight} unit="kg" />
          <StatCard label="Goal weight" value={userStats.goalWeight} unit="kg" />
          <StatCard label="Daily calories" value={userStats.dailyCalories} unit="kcal" />
        </div>

        <div className="cards-row">
          <TodaysWorkout 
             exercises={todaysWorkout?.exercises}
             workoutName={todaysWorkout?.name}
             completedList={completedList}
             handleToggle={handleToggle} 
             onComplete={setWorkoutHistory}
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