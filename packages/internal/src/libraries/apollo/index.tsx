'use server';

import { getBackendURL } from '../utilities/envs.utility';
import { ApolloProvider as Provider } from './provider';

export const ApolloProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const backendURL = await getBackendURL();

  return <Provider uri={backendURL!}>{children}</Provider>;
};
