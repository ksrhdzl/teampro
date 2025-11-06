'use client';

import React from 'react';
import {
  ApolloClient,
  concat,
  HttpLink,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client';

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
