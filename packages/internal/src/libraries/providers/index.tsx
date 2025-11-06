import * as React from 'react';
import { Toaster } from '@/components/sonner';

import { ApolloProvider } from '../apollo';
import { JotaiProvider } from '../jotai';
import { NuqsProvider } from './nuqs.provider';
import { ThemeProvider } from './theme.provider';

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <NuqsProvider>
        <JotaiProvider>
          <ApolloProvider>
            <ThemeProvider>
              <Toaster expand={true} />
              {children}
            </ThemeProvider>
          </ApolloProvider>
        </JotaiProvider>
      </NuqsProvider>
    </React.Fragment>
  );
}
