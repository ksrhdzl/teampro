// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { toast } from 'sonner';
// import { SignIn } from '../schemas';
// import { createSession } from '@/libraries/utilities';

// export const useSignIn = () => {
//   const query = useQueryClient();

//   return useMutation({
//     mutationFn: async ({ data }: { data: SignIn }) => {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       //   throw new Error("Ellol");
//       return 'token bla bla bla';
//     },
//     onSuccess: async (data) => {
//       await createSession(data);
//       toast.success('Signed in successfully! 🎉');
//       query.invalidateQueries({ queryKey: ['profile'] });
//     },
//     onError: () => {
//       toast.error('Sign in failed :(');
//     },
//   });
// };
