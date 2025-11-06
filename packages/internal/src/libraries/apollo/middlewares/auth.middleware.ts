import { verifySession } from '@/libraries/utilities';
import { ApolloLink, Observable } from '@apollo/client';

export const authMiddleware = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      (async () => {
        try {
          const session = await verifySession();

          operation.setContext(({ headers = {} }) => ({
            headers: {
              ...headers,
              authorization: session ? `Bearer ${session}` : undefined,
              'Content-Type': 'application/json',
            },
          }));

          const subscriber = forward(operation).subscribe({
            next: (result) => observer.next(result),
            error: (error) => observer.error(error),
            complete: () => observer.complete(),
          });

          return () => {
            if (subscriber) subscriber.unsubscribe();
          };
        } catch (error) {
          observer.error(error);
        }
      })();
    }),
);
