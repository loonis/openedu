import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout';
import { HomePage } from '../pages/HomePage';
import { ExercisePage } from '../pages/ExercisePage';

/**
 * Configuration des routes de l'application
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: '/exercice/:exerciseId',
    element: (
      <Layout hideFooter>
        <ExercisePage />
      </Layout>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6">Page non trouvée</p>
            <a
              href="/"
              className="text-blue-600 hover:text-blue-700 font-medium text-lg"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </Layout>
    ),
  },
]);
