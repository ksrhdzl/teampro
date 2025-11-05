'use client';

import React from 'react';
import { ApolloProvider as Provider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { concat, HttpLink } from '@apollo/client';
import { authMiddleware } from './middlewares';
import { getApolloClient } from './utilities';

export const ApolloProvider = ({
  children,
  uri,
}: {
  children: React.ReactNode;
  uri: string;
}) => {
  const client = getApolloClient(uri);

  return <Provider client={client}>{children}</Provider>;
};
