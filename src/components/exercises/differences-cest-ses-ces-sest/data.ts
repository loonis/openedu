import type { PhraseQuestion, AnswerType } from './types';

/**
 * Liste de phrases à compléter pour l'exercice
 * Chaque phrase contient ___ à remplacer par la bonne réponse
 */
const phrasesData: Array<{ phrase: string; answer: AnswerType }> = [
  // Phrases avec "c'est"
  { phrase: "___ mon ami.", answer: "c'est" },
  { phrase: "___ une belle journée.", answer: "c'est" },
  { phrase: "___ très joli.", answer: "c'est" },
  { phrase: "___ toi qui as raison.", answer: "c'est" },
  { phrase: "___ un chien noir.", answer: "c'est" },
  { phrase: "___ vraiment intéressant.", answer: "c'est" },
  { phrase: "___ ma maison.", answer: "c'est" },
  { phrase: "___ lui qui a gagné.", answer: "c'est" },
  { phrase: "___ une bonne idée.", answer: "c'est" },
  { phrase: "___ trop difficile pour moi.", answer: "c'est" },
  { phrase: "___ bientôt terminé.", answer: "c'est" },
  { phrase: "___ pour toi que je fais ça.", answer: "c'est" },
  { phrase: "___ à gauche de l'école.", answer: "c'est" },
  { phrase: "___ normal d'avoir peur.", answer: "c'est" },
  { phrase: "___ incroyable !", answer: "c'est" },
  { phrase: "___ là que j'habite.", answer: "c'est" },
  { phrase: "___ le dernier jour.", answer: "c'est" },
  { phrase: "___ juste un jeu.", answer: "c'est" },
  { phrase: "___ dommage.", answer: "c'est" },
  { phrase: "___ maintenant ou jamais.", answer: "c'est" },

  // Phrases avec "ses"
  { phrase: "Il a rangé ___ jouets.", answer: "ses" },
  { phrase: "Elle aime ___ amis.", answer: "ses" },
  { phrase: "Il a perdu ___ clés.", answer: "ses" },
  { phrase: "Elle range ___ affaires.", answer: "ses" },
  { phrase: "Il a pris ___ manteaux.", answer: "ses" },
  { phrase: "Elle a retrouvé ___ chaussures.", answer: "ses" },
  { phrase: "Il montre ___ dessins.", answer: "ses" },
  { phrase: "Elle cherche ___ crayons.", answer: "ses" },
  { phrase: "Il a perdu ___ cahiers.", answer: "ses" },
  { phrase: "Elle nettoie ___ lunettes.", answer: "ses" },
  { phrase: "Il range ___ jouets dans la boîte.", answer: "ses" },
  { phrase: "Elle a oublié ___ devoirs.", answer: "ses" },
  { phrase: "Il accroche ___ dessins au mur.", answer: "ses" },
  { phrase: "Elle montre ___ photos.", answer: "ses" },
  { phrase: "Il cherche ___ vêtements.", answer: "ses" },
  { phrase: "Elle a pris ___ feutres.", answer: "ses" },
  { phrase: "Il a perdu ___ gants.", answer: "ses" },
  { phrase: "Elle protège ___ oreilles du froid.", answer: "ses" },
  { phrase: "Il réunit ___ amis pour jouer.", answer: "ses" },
  { phrase: "Elle a préparé ___ affaires pour demain.", answer: "ses" },

  // Phrases avec "ces"
  { phrase: "Regarde ___ fleurs.", answer: "ces" },
  { phrase: "J'aime ___ couleurs.", answer: "ces" },
  { phrase: "Prends ___ livres.", answer: "ces" },
  { phrase: "Regarde ___ oiseaux.", answer: "ces" },
  { phrase: "Range ___ jeux.", answer: "ces" },
  { phrase: "Je veux ___ bonbons.", answer: "ces" },
  { phrase: "Observe ___ nuages.", answer: "ces" },
  { phrase: "Écoute ___ musiques.", answer: "ces" },
  { phrase: "Regarde ___ étoiles dans le ciel.", answer: "ces" },
  { phrase: "J'aime beaucoup ___ animaux.", answer: "ces" },
  { phrase: "On va goûter ___ biscuits.", answer: "ces" },
  { phrase: "Peux-tu ranger ___ papiers ?", answer: "ces" },
  { phrase: "Je préfère ___ chaussures-là.", answer: "ces" },
  { phrase: "Tu peux prendre ___ crayons ?", answer: "ces" },
  { phrase: "___ pommes sont délicieuses.", answer: "ces" },
  { phrase: "Choisis ___ images pour ton cahier.", answer: "ces" },
  { phrase: "Rassemble ___ objets sur la table.", answer: "ces" },
  { phrase: "Je voudrais ___ cartes, s'il te plaît.", answer: "ces" },
  { phrase: "Observe bien ___ traces dans la neige.", answer: "ces" },
  { phrase: "___ maisons ont été rénovées.", answer: "ces" },
  { phrase: "Ne touche pas ___ fils.", answer: "ces" },

  // Phrases avec "s'est"
  { phrase: "Il ___ levé tôt.", answer: "s'est" },
  { phrase: "Elle ___ trompée.", answer: "s'est" },
  { phrase: "Il ___ blessé au genou.", answer: "s'est" },
  { phrase: "Elle ___ endormie vite.", answer: "s'est" },
  { phrase: "Il ___ arrêté en chemin.", answer: "s'est" },
  { phrase: "Elle ___ réveillée tard.", answer: "s'est" },
  { phrase: "Il ___ lavé les mains.", answer: "s'est" },
  { phrase: "Elle ___ amusée au parc.", answer: "s'est" },
  { phrase: "Il ___ caché derrière la porte.", answer: "s'est" },
  { phrase: "Elle ___ mise à rire.", answer: "s'est" },
  { phrase: "Il ___ approché du chien.", answer: "s'est" },
  { phrase: "Elle ___ coupée en cuisinant.", answer: "s'est" },
  { phrase: "Il ___ enfui très vite.", answer: "s'est" },
  { phrase: "Elle ___ préparée pour sortir.", answer: "s'est" },
  { phrase: "Il ___ trompé de chemin.", answer: "s'est" },
  { phrase: "Elle ___ sentie mieux après.", answer: "s'est" },
  { phrase: "Il ___ souvenu de son rêve.", answer: "s'est" },
  { phrase: "Elle ___ fâchée pour rien.", answer: "s'est" },
  { phrase: "Il ___ calmé après quelques minutes.", answer: "s'est" },
  { phrase: "Elle ___ approchée du chat doucement.", answer: "s'est" },
  { phrase: "Il ___ glissé sur une feuille.", answer: "s'est" },
];

/**
 * Mélange un tableau de manière aléatoire (algorithme Fisher-Yates)
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Génère une liste de questions pour l'exercice
 * @param count Nombre de questions à générer (par défaut : toutes)
 */
export function generateQuestions(count?: number): PhraseQuestion[] {
  const shuffledPhrases = shuffleArray(phrasesData);
  const selectedPhrases = count ? shuffledPhrases.slice(0, count) : shuffledPhrases;

  return selectedPhrases.map((item) => ({
    phrase: item.phrase,
    correctAnswer: item.answer,
  }));
}

/**
 * Toutes les réponses possibles dans l'ordre
 */
export const ALL_ANSWERS: AnswerType[] = ["c'est", 'ses', 'ces', "s'est"];
