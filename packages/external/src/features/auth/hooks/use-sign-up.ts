// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { toast } from 'sonner';
// import { SignUp } from '../schemas';
// import { createSession } from '@/libraries/utilities';
// import { UseFormReturn } from 'react-hook-form';
// import { useRouter } from 'next/navigation';

// export const useSignUp = () => {
//   const query = useQueryClient();
//   const router = useRouter();

//   return useMutation({
//     mutationFn: async ({
//       data,
//       form,
//     }: {
//       data: SignUp;
//       form: UseFormReturn<SignUp>;
//     }) => {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       //   throw new Error("Ellol");
//       return 'token bla bla bla';
//     },
//     onSuccess: async (data) => {
//       await createSession(data);
//       toast.success('Signed in successfully! 🎉');
//       query.invalidateQueries({ queryKey: ['profile'] });
//       router.replace('/');
//     },
//     onError: (error, { data, form }) => {
//       toast.error('Sign in failed :(');
//       // form.setError("identifier", {
//       //   message: "Invalid email or password.",
//       // });
//       // form.setError("password", {
//       //   message: "Invalid email or password.",
//       // });
//     },
//   });
// };
