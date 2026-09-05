import * as st from './styles/historyPage.styles';
import HistorySummary from './components/HistorySummary';
import WorkoutCalendar from './components/WorkoutCalendar';
import ExerciseProgress from './components/ExerciseProgress';
import MuscleFrequency from './components/MuscleFrequency';
import BodyWeightChart from './components/BodyWeightChart';
import * as mock from './data';


export default function HistoryPage({
  pastWorkouts,
  summary = mock.monthSummary,
  calendar = mock.calendar,
  selectedDay = mock.selectedDay,
  exerciseProgress = mock.exerciseProgress,
  muscleFrequency = mock.muscleFrequency,
  bodyWeight = mock.bodyWeight,
  programFilters = ['ALL', 'UL/PPL'],
  activeProgram = 'ALL',
  onOpenWorkout,
  onSelectProgram,
}) {
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

        <HistorySummary pastWorkouts={pastWorkouts} summary={summary} />
        <WorkoutCalendar calendar={calendar} selected={selectedDay} onOpenWorkout={onOpenWorkout} />
        <ExerciseProgress progress={exerciseProgress} />
        <MuscleFrequency items={muscleFrequency} />
        <BodyWeightChart data={bodyWeight} />
      </div>
    </div>
  );
}
