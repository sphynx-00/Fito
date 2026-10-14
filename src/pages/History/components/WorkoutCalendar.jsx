import React from 'react';
import * as shared from '../styles/shared.styles';
import * as st from '../styles/workoutCalendar.styles';
import { getWorkoutStats } from '../../../utils/workoutUtils';

const WEEKDAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export default function WorkoutCalendar({ isCompleted, calendar, selected, onPrev, onNext, onSelectDay, onOpenWorkout }) {
  const cells = [];

  for (let i = 0; i < calendar.firstWeekdayOffset; i += 1) {
    cells.push(<div key={`pad-${i}`} style={st.pad} />);
  }

  const { todaysWorkout } = getWorkoutStats();
  
  for (let d = 1; d <= calendar.daysInMonth; d += 1) {
    const isRecovery = todaysWorkout?.name === 'Recovery';

    const state = {
      done: calendar.workoutDays.includes(d),
      today: d === calendar.today,
      faded: d > calendar.today,
      isRecovery: isRecovery
    };
    
    let dotType = null;

    if (state.today) {
      if (state.isRecovery) dotType = 'recovery';   // state.isRecovery, not isRecovery
      else if (isCompleted) dotType = 'done';
    } else if (state.done) {
      dotType = 'done';
    }

    cells.push(
      <div key={d} style={st.day(state)} onClick={() => onSelectDay && onSelectDay(d)}>
        {d}
        {dotType && <div style={st.dot(state.today, dotType)} />}
      </div>,
    );
  }

  return (
    <div style={st.card}>
      <div style={st.nav}>
        <div style={st.navButton} onClick={onPrev}>‹</div>
        <div style={st.monthLabel}>{calendar.month}</div>
        <div style={st.navButton} onClick={onNext}>›</div>
      </div>

      <div style={st.weekdayRow}>
        {WEEKDAYS.map((d, i) => <div key={i}>{d}</div>)}
      </div>

      <div style={st.grid}>{cells}</div>

      {selected && (
        <div style={st.selected} onClick={onOpenWorkout}>
          <div style={st.selectedInfo}>
            <div style={st.selectedDate}>{selected.dateLabel}</div>
            <div style={st.selectedName}>{selected.name}</div>
            <div style={shared.monoMeta}>{selected.meta}</div>
          </div>
          <div style={st.selectedRight}>
            {selected.prs > 0 && (
              <div style={st.selectedPr}>{selected.prs} PR{selected.prs > 1 ? 's' : ''}</div>
            )}
            <div style={shared.chevron}>›</div>
          </div>
        </div>
      )}
    </div>
  );
}
