// 'use client';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// let queryClient: QueryClient | undefined = undefined;

// function createQueryClient() {
//   return new QueryClient({
//     defaultOptions: {
//       queries: {
//         staleTime: 60 * 1000,
//       },
//     },
//   });
// }

// function getQueryClient() {
//   if (typeof window === 'undefined') {
//     return createQueryClient();
//   } else {
//     if (!queryClient) {
//       queryClient = createQueryClient();
//     }
//     return queryClient;
//   }
// }

// export function QueryProvider({ children }: { children: React.ReactNode }) {
//   const queryClient = getQueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );
// }
