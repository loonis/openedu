import { RouterProvider } from 'react-router-dom';
import { router } from './router/routes';

/**
 * Composant principal de l'application OpenEdu
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
