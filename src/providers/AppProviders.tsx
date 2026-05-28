// ============================================================
// blog-client-web/src/providers/AppProviders.tsx
// Root provider tree — wraps the entire application
// Add new providers here (QueryClient, Theme, Router, etc.)
// ============================================================

import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// ThemeProvider will come from blog-ui-design-system
// Import path until package is published:
import { ThemeProvider } from '../../../blog-ui-design-system/src/providers/ThemeProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime:        60 * 1000,   // 1 minute
      retry:            1,
      refetchOnWindowFocus: false,
    },
  },
});

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default AppProviders;
