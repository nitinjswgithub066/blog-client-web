// ============================================================
// blog-client-web/src/router.tsx
// React Router DOM — route definitions
// Pages added in Phase 3+
// ============================================================

import { createBrowserRouter } from 'react-router-dom';

// Placeholder — populated in Phase 3 (Homepage) onwards
export const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('./pages/Home').then((m) => ({ Component: m.default })),
  },
]);

export default router;
