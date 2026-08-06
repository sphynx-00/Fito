import { useEffect, useState } from "react";
import { ChartNoAxesColumnIncreasing, Cookie, Goal } from 'lucide-react';
import { getWorkoutStats, getTodayWithGreeting, getAdjustedDate } from "../../utils/workoutUtils";
import StatCard from "../Dashboard/components/StatCard";
import TodaysWorkout from "../Dashboard/components/TodaysWorkout";
import WeeklyGoal from "../Dashboard/components/WeeklyGoal";
import HeroBanner from "../Dashboard/components/HeroBanner";
import './Dashboard.css';
import { loadFromStorage } from "../../models/completedWorkouts";
import { calculateDayStreak } from "../History/historyUtils";
import WeekStrip from "./components/WeekStrip";
import { loadUser } from "../Profile/profileUtils";



function Dashboard() {
const { todaysWorkout, total, completed, percentage } = getWorkoutStats();
const [workoutHistory, setWorkoutHistory] = useState(() => loadFromStorage());
const userStats = loadUser();
const isRecovery = todaysWorkout?.name === 'Recovery';

const getBadgeStatus = () => {
  if (isRecovery) return null
  if (completedExercises === totalExercises && totalExercises > 0) return 'Done'
  if (completedExercises > 0) return 'In Progress'
  return 'Pending';
};

const getBadgeClass = () => {
  if (isRecovery) return '';
  if (completedExercises === totalExercises && totalExercises > 0) return 'badge-done'
  if (completedExercises > 0) return 'badge-progress'
  return 'badge-pending';
};


// Save Weight //
const [exercises, setExercises] = useState(() => {
  const saved = JSON.parse(localStorage.getItem('exercises') || '[]');
  return saved.length > 0 ? saved : (todaysWorkout?.exercises || []);
});

const handleUpdateWeight = (order, newWeight) => {
  const updated = exercises.map(exercise =>
    exercise.order === order
      ? { ...exercise, weight: Number(newWeight) }
      : exercise
  );
  setExercises(updated);
};

useEffect(() => {
  localStorage.setItem('exercises', JSON.stringify(exercises));
}, [exercises]);

// Save Weight //


const dayStreak = calculateDayStreak(workoutHistory);

// function for Today's workout
const [completedList, setCompletedList] = useState(() => {
  const today = getAdjustedDate().toLocaleDateString('en-ca');
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
          <h1 className="dashboard-greeting">Good {greeting}, Sean</h1>
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
          <StatCard logo={ChartNoAxesColumnIncreasing} color="#1F1B29;" variant="Start-weight" label="Start weight" value={userStats.weight} unit="kg" />
          <StatCard logo={Cookie} color="#1F1B29;" variant="Daily-calories" label="Daily calories" value={userStats.dailyCalories} unit="kcal" />
          <StatCard logo={Goal} color="#1F1B29;" variant="Goal-weight" label="Goal weight" value={userStats.goalWeight} unit="kg" />
        </div>

        <div className="workout-log-container">
          <h4>Workout Log</h4>
          <span className={isRecovery ? 'badge-hidden' :`badge ${getBadgeClass()}`}>
            <span className="badge-dot" />
            {getBadgeStatus()}
          </span>
        </div>
        <div className="cards-row">
          <TodaysWorkout 
             exercises={exercises}
             workoutName={todaysWorkout?.name}
             completedList={completedList}
             handleToggle={handleToggle} 
             onComplete={setWorkoutHistory}
             onUpdatedWeight={handleUpdateWeight}
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