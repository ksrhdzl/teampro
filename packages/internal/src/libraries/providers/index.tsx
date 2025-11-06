import * as React from 'react';
import { ThemeProvider } from './theme.provider';
import { Toaster } from '@/components/sonner';
import { JotaiProvider } from '../jotai';
import { NuqsProvider } from './nuqs.provider';
import { ApolloProvider } from '../apollo';

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
