import { ApolloClient, InMemoryCache } from '@apollo/client';
import { concat, HttpLink } from '@apollo/client';
import { authMiddleware } from './middlewares';

let apolloClient: ApolloClient<any> | undefined = undefined;

export function createApolloClient(uri: string) {
  const httpLink = new HttpLink({
    uri: uri,
    fetchOptions: { cache: 'no-store' },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
    ssrMode: typeof window === 'undefined',
  });
}

export function getApolloClient(uri: string) {
  if (typeof window === 'undefined') {
    return createApolloClient(uri);
  } else {
    if (!apolloClient) {
      apolloClient = createApolloClient(uri);
    }
    return apolloClient;
  }
}
