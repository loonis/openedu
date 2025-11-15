# OpenEdu

Plateforme d'exercices éducatifs gratuite et open source pour les enfants de la maternelle au CM2.

## 🎯 Objectif

Créer un site web :
- Dédié aux enfants de maternelle et primaire
- Regroupant des exercices pour progresser dans différentes matières
- Responsive : compatible smartphone, tablette, PC
- Open source et facilement extensible
- Sans inscription, gratuit, accessible à tous

## 🛠️ Stack technique

- **React** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** v4 (styles)
- **React Router** (navigation)

## 📦 Installation

```bash
npm install
```

## 🚀 Développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`

## 📁 Structure du projet

```
src/
├── components/
│   ├── layout/          # Composants de mise en page (Header, Footer, BurgerMenu)
│   ├── ui/              # Composants UI réutilisables (Button, Card, Icon, Loader)
│   └── exercises/       # Exercices (chaque exercice dans son propre dossier)
│       └── tables-multiplication/
├── data/                # Configuration et données
│   ├── exercises.ts     # Liste des exercices
│   └── navigation.ts    # Structure de navigation
├── pages/               # Pages principales
│   ├── HomePage.tsx
│   └── ExercisePage.tsx
├── router/              # Configuration du routage
│   └── routes.tsx
├── types/               # Types TypeScript
│   └── index.ts
└── styles/              # Styles globaux
    └── index.css
```

## 🧩 Ajouter un nouvel exercice

1. Créer un nouveau dossier dans `src/components/exercises/nom-exercice/`
2. Créer les fichiers nécessaires :
   - `NomExercise.tsx` (composant principal)
   - `types.ts` (types TypeScript)
   - `utils.ts` (fonctions utilitaires)
3. Ajouter l'exercice dans `src/data/exercises.ts`
4. Ajouter le mapping dans `src/pages/ExercisePage.tsx`

## 📝 Exercices disponibles

### Tables de multiplication
- **Niveau** : CE2
- **Matière** : Mathématiques
- **Fonctionnalités** :
  - Sélection des tables à réviser (1 à 10)
  - Choix du nombre de questions
  - Feedback visuel immédiat (animations)
  - Écran de résultats avec détails

## 🎨 Design

- Interface minimaliste et kid-friendly
- Pas de publicités, pas de distractions
- Animations douces pour le feedback
- Responsive design (mobile, tablette, desktop)

## 🤝 Contribuer

Ce projet est open source ! Vous pouvez :
- Ajouter de nouveaux exercices
- Améliorer l'interface
- Corriger des bugs
- Proposer de nouvelles fonctionnalités

## 📄 Licence

Projet open source - Licence à définir

## 🌟 Roadmap

- [ ] Ajouter plus d'exercices de mathématiques
- [ ] Ajouter des exercices de français
- [ ] Système de progression (optionnel)
- [ ] Mode hors ligne (PWA)
- [ ] Accessibilité améliorée
