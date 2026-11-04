import * as st from './styles/historyPage.styles';
import HistorySummary from './components/HistorySummary';
import WorkoutCalendar from './components/WorkoutCalendar';
import ExerciseProgress from './components/ExerciseProgress';
import MuscleFrequency from './components/MuscleFrequency';
import BodyWeightChart from './components/BodyWeightChart';
import * as historyData from './data';
import { useState } from 'react';

export default function HistoryPage({
  isCompleted,
  totalVolume,
  pastWorkouts,
  summary = historyData.monthSummary,
  selectedDay = historyData.selectedDay,
  programFilters = ['ALL', 'UL/PPL'],
  activeProgram = 'ALL',
  onOpenWorkout,
  onSelectProgram,
}) {
  const [viewDate, setViewDate] = useState(() => new Date());

  const onPrev = () =>
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));

  const onNext = () =>
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));


  const pad = (n) => String(n).padStart(2, '0');
  const prefix = `${viewDate.getFullYear()}-${pad(viewDate.getMonth() + 1)}`; // e.g. "2026-10"

  const workoutDays = pastWorkouts
    .filter((w) => w.date.startsWith(prefix))
    .map((w) => Number(w.day));

  const calendar = historyData.buildCalendar(viewDate, workoutDays);

  return (
    <div className="history-content page-transition" style={st.page}>
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

        <HistorySummary totalVolume={totalVolume} pastWorkouts={pastWorkouts} summary={summary} />
        <WorkoutCalendar
          isCompleted={isCompleted} 
          calendar={calendar} 
          selected={selectedDay} 
          onOpenWorkout={onOpenWorkout} 
          onPrev={onPrev}
          onNext={onNext}
        />
        {/* <ExerciseProgress progress={exerciseProgress} />
        <MuscleFrequency items={muscleFrequency} />
        <BodyWeightChart data={bodyWeight} /> */}
      </div>
    </div>
  );
}
