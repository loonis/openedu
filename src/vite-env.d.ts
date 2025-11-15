/// <reference types="vite/client" />

// Variables de build injectées par Vite
declare global {
  const __BUILD_DATE__: string;
  const __GIT_COMMIT__: string;
}

export {};
