# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OpenEdu is a free, open-source educational exercise platform for children from preschool to elementary school (ages 3-11, French education system: PS to CM2). The platform is registration-free, ad-free, and responsive (mobile, tablet, desktop).

**Stack**: React 19 + TypeScript + Vite + Tailwind CSS v4 + React Router v7

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production (output to dist/)
npm run build

# Lint code
npm run lint

# Preview production build
npm preview
```

## Architecture

### Exercise System

The application uses a **plugin-based exercise architecture** where exercises are self-contained modules that plug into a central registry system:

1. **Exercise Registry** (`src/data/exercises.ts`):
   - Central list of all available exercises as `ExerciseMeta[]`
   - Each exercise defines: `id`, `title`, `description`, `level`, `subject`, `path`
   - Provides utility functions: `getExerciseById()`, `getExercisesByLevel()`, `getExercisesBySubject()`, `searchExercises()`

2. **Exercise Component Mapping** (`src/pages/ExercisePage.tsx`):
   - Maps exercise IDs to their React components in the `exerciseComponents` record
   - Uses URL parameter `exerciseId` to load the correct exercise
   - **CRITICAL**: When adding a new exercise, you MUST update both `src/data/exercises.ts` AND the `exerciseComponents` mapping in `ExercisePage.tsx`

3. **Navigation Generation** (`src/data/navigation.ts`):
   - Automatically builds navigation structure from the exercise registry
   - Organizes exercises by level (PS, MS, GS, CP, CE1, CE2, CM1, CM2) and subject (maths, francais, sciences, histoire, geographie)
   - Filters out empty levels/subjects automatically

### Exercise Structure Pattern

Each exercise lives in its own folder: `src/components/exercises/{exercise-name}/`

**Standard file structure**:
```
{exercise-name}/
├── {ExerciseName}Exercise.tsx   # Main component (manages state machine)
├── ConfigScreen.tsx              # Configuration/setup screen
├── QuizScreen.tsx                # Question/interaction screen
├── ResultsScreen.tsx             # Results/feedback screen
├── types.ts                      # TypeScript types
└── utils.ts                      # Utility functions (question generation, etc.)
```

**State machine pattern** (see `TablesMultiplicationExercise.tsx`):
- Uses a single state object with `step: 'config' | 'quiz' | 'results'`
- Manages exercise flow: configuration → questions → results
- Stores: config, questions array, current question index, score

### Type System

**Core types** (`src/types/index.ts`):
- `LevelId`: 'ps' | 'ms' | 'gs' | 'cp' | 'ce1' | 'ce2' | 'cm1' | 'cm2'
- `SubjectId`: 'francais' | 'maths' | 'sciences' | 'histoire' | 'geographie'
- `ExerciseMeta`: Exercise metadata structure
- `NavigationConfig`, `NavigationLevel`, `NavigationSubject`: Navigation hierarchy

Labels are provided via `LEVEL_LABELS` and `SUBJECT_LABELS` constants.

### Routing

Routes are defined in `src/router/routes.tsx`:
- `/` - HomePage (exercise selection)
- `/exercice/:exerciseId` - ExercisePage (dynamic exercise loader)
- `*` - 404 page

The `Layout` component wraps all pages. Use `<Layout hideFooter>` for exercise pages to maximize screen space.

## Adding a New Exercise

1. **Create exercise folder**: `src/components/exercises/{exercise-id}/`
2. **Create files**: Follow the standard structure (see Exercise Structure Pattern above)
3. **Add to registry**: Add entry to `exercises` array in `src/data/exercises.ts`
4. **Map component**: Import and add to `exerciseComponents` record in `src/pages/ExercisePage.tsx`
5. **Navigation automatically updates** from the registry data

## Component Library

Reusable UI components are in `src/components/ui/`:
- `Button`: Variant prop ('primary', 'secondary', 'danger'), size prop
- `Card`: Container with consistent styling
- `Icon`: Icon component (uses `name` prop for icon selection)
- `Loader`: Loading spinner with size variants

Layout components in `src/components/layout/`:
- `Layout`: Main layout wrapper with header, footer, burger menu
- `Header`: Top navigation bar
- `Footer`: Footer (can be hidden with `hideFooter` prop)
- `BurgerMenu`: Mobile navigation menu

## Styling

- **Tailwind CSS v4** is used for styling (via `@tailwindcss/vite` plugin)
- Global styles in `src/index.css`
- Kid-friendly design: minimal, colorful, no distractions
- Use smooth animations for feedback (see QuizScreen for examples)

## Project Goals

- **Accessibility**: No registration required, free for all
- **Educational**: Quality exercises for French primary school curriculum
- **Open source**: Easy to extend with new exercises
- **Child-friendly**: Simple, intuitive, distraction-free interface