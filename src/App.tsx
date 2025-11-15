import { RouterProvider } from 'react-router-dom';
import { router } from './router/routes';
import { MenuProvider } from './contexts/MenuContext';

/**
 * Composant principal de l'application OpenEdu
 */
function App() {
  return (
    <MenuProvider>
      <RouterProvider router={router} />
    </MenuProvider>
  );
}

export default App;
