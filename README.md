# 🎓 OpenEdu

**Une plateforme d'exercices éducatifs gratuite, open source et sans inscription pour les enfants de 3 à 11 ans.**

OpenEdu propose des exercices interactifs pour accompagner les enfants de la maternelle (PS) au CM2 dans leur apprentissage du français, des mathématiques, des sciences, de l'histoire et de la géographie, en suivant le programme de l'Éducation nationale française.

🌐 **[Accéder à l'application](https://openedu-e5d63.web.app/)**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8.svg)](https://tailwindcss.com/)

---

## ✨ Caractéristiques

- **🔓 Accès libre** : Aucune inscription requise, totalement gratuit
- **📱 Responsive** : Fonctionne sur smartphone, tablette et ordinateur
- **🎨 Interface kid-friendly** : Design minimaliste et sans distractions
- **🧩 Modulaire** : Architecture en plugins pour faciliter l'ajout d'exercices
- **🌐 Open source** : Code ouvert et contributif
- **🚫 Sans publicité** : Expérience d'apprentissage pure
- **♿ Accessible** : Conçu pour être utilisable par tous

## 🛠️ Stack technique

- **React 19** + **TypeScript** - Interface utilisateur moderne et typée
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS v4** - Styles utilitaires
- **React Router v7** - Navigation côté client

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ et npm

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/openedu.git
cd openedu

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur **http://localhost:5173**

### Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile le projet pour la production (dossier `dist/`) |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Analyse le code avec ESLint |

## 📁 Structure du projet

```
src/
├── components/
│   ├── layout/              # Composants de mise en page
│   │   ├── Layout.tsx       # Layout principal avec header et footer
│   │   ├── Header.tsx       # Barre de navigation
│   │   ├── Footer.tsx       # Pied de page
│   │   └── BurgerMenu.tsx   # Menu mobile
│   ├── ui/                  # Composants UI réutilisables
│   │   ├── Button.tsx       # Bouton (primary, secondary, danger)
│   │   ├── Card.tsx         # Carte conteneur
│   │   ├── Icon.tsx         # Composant d'icônes
│   │   └── Loader.tsx       # Indicateur de chargement
│   └── exercises/           # Exercices (architecture en plugins)
│       ├── tables-multiplication/
│       │   ├── TablesMultiplicationExercise.tsx  # Machine à états
│       │   ├── ConfigScreen.tsx                  # Écran de configuration
│       │   ├── QuizScreen.tsx                    # Écran de questions
│       │   ├── ResultsScreen.tsx                 # Écran de résultats
│       │   ├── types.ts                          # Types spécifiques
│       │   └── data.ts                           # Génération de questions
│       └── [autres-exercices]/
├── data/
│   ├── exercises.ts         # Registre central des exercices
│   └── navigation.ts        # Navigation générée automatiquement
├── pages/
│   ├── HomePage.tsx         # Page d'accueil (sélection d'exercices)
│   └── ExercisePage.tsx     # Page d'exercice (chargement dynamique)
├── router/
│   └── routes.tsx           # Configuration des routes
├── types/
│   └── index.ts             # Types globaux (LevelId, SubjectId, etc.)
└── index.css                # Styles globaux
```

## 🧩 Architecture des exercices

OpenEdu utilise une **architecture en plugins** où chaque exercice est un module autonome qui s'enregistre dans le système central.

### Cycle de vie d'un exercice

Chaque exercice suit un **pattern de machine à états** en 3 étapes :

1. **Configuration** (`ConfigScreen`) - L'utilisateur configure l'exercice
2. **Quiz** (`QuizScreen`) - L'utilisateur répond aux questions
3. **Résultats** (`ResultsScreen`) - Affichage du score et des corrections

### Ajouter un nouvel exercice

**Étape 1 : Créer les fichiers**

Créer un dossier `src/components/exercises/mon-exercice/` avec :

```typescript
// types.ts - Types TypeScript spécifiques
// data.ts - Données et fonction generateQuestions()
// ConfigScreen.tsx - Écran de configuration
// QuizScreen.tsx - Écran de questions avec feedback
// ResultsScreen.tsx - Écran de résultats
// MonExerciseExercise.tsx - Composant principal (machine à états)
```

Le fichier `data.ts` doit exporter une fonction `generateQuestions()` :
```typescript
export function generateQuestions(config?: Config): Question[] {
  // Logique de génération
}
```

**Étape 2 : Enregistrer dans le registre**

Ajouter l'exercice dans `src/data/exercises.ts` :

```typescript
{
  id: 'mon-exercice',
  title: 'Mon Exercice',
  description: 'Description de l\'exercice',
  level: 'ce1',
  subject: 'maths',
  path: '/exercice/mon-exercice'
}
```

**Étape 3 : Mapper le composant**

Importer et ajouter dans `src/pages/ExercisePage.tsx` :

```typescript
import MonExerciseExercise from '../components/exercises/mon-exercice/MonExerciseExercise';

const exerciseComponents: Record<string, React.ComponentType> = {
  // ...
  'mon-exercice': MonExerciseExercise,
};
```

✅ **La navigation se met à jour automatiquement** grâce au registre !

## 📚 Exercices disponibles

| Exercice | Niveau | Matière | Fonctionnalités |
|----------|--------|---------|-----------------|
| **Tables de multiplication** | CE2 | Mathématiques | ✓ Sélection des tables (1-10)<br>✓ Nombre de questions personnalisable<br>✓ Feedback visuel immédiat<br>✓ Écran de résultats détaillé |
| **C'est/Ces/Ses/S'est** | CM1 | Français | ✓ Exercices de distinction<br>✓ Explications contextuelles<br>✓ Correction détaillée |

**Plus d'exercices à venir !** Consultez la [roadmap](#-roadmap) pour voir les prochaines fonctionnalités.

## 🎨 Principes de design

- **Minimaliste** : Interface épurée pour éviter la surcharge cognitive
- **Kid-friendly** : Couleurs vives, polices lisibles, feedback positif
- **Accessible** : Contrastes respectés, navigation au clavier
- **Sans distractions** : Zéro publicité, zéro tracking
- **Feedback immédiat** : Animations douces pour valider/corriger
- **Responsive** : Adapté à tous les écrans (mobile, tablette, desktop)

## 🤝 Contribuer

Les contributions sont les bienvenues ! Voici comment vous pouvez aider :

### Types de contributions

- 🧩 **Ajouter des exercices** - Créez de nouveaux exercices éducatifs
- 🐛 **Corriger des bugs** - Signalez ou corrigez des problèmes
- 🎨 **Améliorer le design** - Proposez des améliorations d'interface
- 📝 **Documentation** - Améliorez la documentation
- 🌍 **Traductions** - Ajoutez le support d'autres langues (futures fonctionnalités)

### Processus de contribution

1. **Fork** le projet
2. Créez une branche (`git checkout -b feature/NouvelExercice`)
3. Committez vos changements (`git commit -m 'feat: Ajout exercice de conjugaison'`)
4. Pushez vers la branche (`git push origin feature/NouvelExercice`)
5. Ouvrez une **Pull Request**

### Guidelines

- Respectez l'architecture existante (pattern de machine à états pour les exercices)
- Testez votre code sur mobile, tablette et desktop
- Assurez-vous que le code est accessible (navigation au clavier, contrastes)
- Documentez les nouveaux exercices

Pour plus de détails, consultez le fichier [CLAUDE.md](./CLAUDE.md).

## 📄 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

Cela signifie que vous êtes libre de :
- ✅ Utiliser le code pour un usage commercial ou personnel
- ✅ Modifier le code
- ✅ Distribuer le code
- ✅ Utiliser le code dans des projets privés

Sous réserve de conserver la notice de copyright et la licence.

## 🌟 Roadmap

- [ ] Ajouter plus d'exercices de mathématiques
- [ ] Ajouter des exercices de français
- [ ] Système de progression (optionnel)
- [ ] Mode hors ligne (PWA)
- [ ] Accessibilité améliorée
