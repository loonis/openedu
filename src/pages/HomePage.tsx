import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from '../components/ui';
import { exercises } from '../data/exercises';
import { LEVEL_LABELS, SUBJECT_LABELS } from '../types';

/**
 * Page d'accueil du site
 */
export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Bienvenue sur <span className="text-blue-600">OpenEdu</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Plateforme d'exercices éducatifs gratuite et open source pour les enfants de la
            maternelle au CM2
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
              Découvrir les exercices
            </Button>
            <Button size="lg" variant="secondary">
              Ouvrir le menu
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Gratuit</h3>
              <p className="text-gray-600">
                Aucune inscription requise, aucun paiement. Accessible à tous les enfants.
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="text-4xl mb-4">🌈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pour tous les niveaux</h3>
              <p className="text-gray-600">
                De la petite section au CM2, des exercices adaptés à chaque niveau.
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Open Source</h3>
              <p className="text-gray-600">
                Projet ouvert, chacun peut contribuer et ajouter de nouveaux exercices.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Exercices disponibles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Exercices disponibles
        </h2>

        {exercises.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise) => (
              <Card key={exercise.id}>
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exercise.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{exercise.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">{LEVEL_LABELS[exercise.level]}</span>
                      <span className="mx-2">•</span>
                      <span>{SUBJECT_LABELS[exercise.subject]}</span>
                    </div>
                  </div>
                  <Link to={exercise.path} className="mt-4">
                    <Button className="w-full">Commencer</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucun exercice disponible pour le moment. Revenez bientôt !
            </p>
          </div>
        )}
      </section>

      {/* Call to action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-xl mb-8">
            Ouvrez le menu pour explorer tous les exercices par niveau et par matière
          </p>
          <Button size="lg" variant="secondary">
            Explorer les exercices
          </Button>
        </div>
      </section>
    </div>
  );
};
