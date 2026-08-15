# History tab — React components

Drop the `react/` folder into your `src/`. **No component holds styling** —
every style object lives in `styles/`.

```
react/
  HistoryPage.jsx              the History tab (composes all sections)
  WorkoutDetailPage.jsx        read-only completed-workout snapshot
  data.js                      mock data matching the brief's entities
  components/
    HistorySummary.jsx  WorkoutCalendar.jsx  RecentWorkouts.jsx
    ExerciseProgress.jsx  PersonalRecords.jsx  VolumeChart.jsx
    MuscleFrequency.jsx  BodyWeightChart.jsx  Sparkline.jsx  TabBar.jsx
  styles/
    tokens.js                  colors, fonts, radii, spacing
    shared.styles.js           section / card / stat / pill primitives
    historyPage.styles.js      historySummary.styles.js
    workoutCalendar.styles.js  recentWorkouts.styles.js
    exerciseProgress.styles.js personalRecords.styles.js
    volumeChart.styles.js      muscleFrequency.styles.js
    bodyWeightChart.styles.js  tabBar.styles.js
    workoutDetailPage.styles.js
```

## Usage

```jsx
import HistoryPage from './react/HistoryPage';
import WorkoutDetailPage from './react/WorkoutDetailPage';

<HistoryPage onOpenWorkout={(w) => navigate(`/history/${w.id}`)} />
```

Every component takes its data as props and falls back to the mock data in
`data.js`, so the screen renders before the backend exists.

## Style conventions

- Static styles are plain objects: `export const card = {...}`.
- State-dependent styles are functions: `st.day({ done, today, faded })`,
  `shared.pill(active)`, `st.bar({ pct, current })`.
- Colors, fonts and radii come only from `styles/tokens.js` — change the accent
  there and it propagates to PRs, today's date, the active tab and the charts.

## Fonts

Add once to `index.html`:

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## React Native migration

Only the style files change: each `*.styles.js` becomes a `StyleSheet.create`
call (drop `cursor`, use `aspectRatio: 1`). Components map `div` → `View`,
text → `Text`, and `Sparkline` → `react-native-svg` with the same props.
