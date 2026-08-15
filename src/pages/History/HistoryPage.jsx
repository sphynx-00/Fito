import React from 'react';
import * as st from './styles/historyPage.styles';
import HistorySummary from './components/HistorySummary';
import WorkoutCalendar from './components/WorkoutCalendar';
import RecentWorkouts from './components/RecentWorkouts';
import ExerciseProgress from './components/ExerciseProgress';
import PersonalRecords from './components/PersonalRecords';
import VolumeChart from './components/VolumeChart';
import MuscleFrequency from './components/MuscleFrequency';
import BodyWeightChart from './components/BodyWeightChart';
import TabBar from './components/TabBar';
import * as mock from './data';

export default function HistoryPage({
  summary = mock.monthSummary,
  calendar = mock.calendar,
  selectedDay = mock.selectedDay,
  recentWorkouts = mock.recentWorkouts,
  exerciseProgress = mock.exerciseProgress,
  muscleFrequency = mock.muscleFrequency,
  bodyWeight = mock.bodyWeight,
  programFilters = ['ALL', 'UL/PPL'],
  activeProgram = 'ALL',
  onOpenWorkout,
  onSelectProgram,
}) {
  return (
    <div style={st.page}>
      <div style={st.scroll}>
        <div style={st.header}>
          <div>
            <div style={st.title}>History</div>
            <div style={st.subtitle}>{summary.period}</div>
          </div>
          <div style={st.filterRow}>
            {programFilters.map((p) => (
              <div key={p} style={st.filter(p === activeProgram)} onClick={() => onSelectProgram && onSelectProgram(p)}>
                {p}
              </div>
            ))}
          </div>
        </div>

        <HistorySummary summary={summary} />
        <WorkoutCalendar calendar={calendar} selected={selectedDay} onOpenWorkout={onOpenWorkout} />
        <RecentWorkouts workouts={recentWorkouts} onOpen={onOpenWorkout} />
        <ExerciseProgress progress={exerciseProgress} />
        <MuscleFrequency items={muscleFrequency} />
        <BodyWeightChart data={bodyWeight} />
      </div>
    </div>
  );
}
