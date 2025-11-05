'use client';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form';
import { useForm } from 'react-hook-form';
import { AuthFlow } from '../types';
import { SignIn, singInSchema } from '../schemas';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { createSession } from '@/libraries/utilities';
import { useLoginMutation } from '@/libraries/graphql';

export const SignInForm = ({
  setState,
}: {
  setState: (state: AuthFlow) => void;
}) => {
  const router = useRouter();
  const [
    loginMutation,
    { data: dataLogin, loading: loadingLogin, error: errorLogin },
  ] = useLoginMutation();

  const form = useForm<SignIn>({
    resolver: zodResolver(singInSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignIn) => {
    loginMutation({
      variables: {
        input: { identifier: data.identifier, password: data.password },
      },
      async onCompleted(data, clientOptions) {
        console.log(11, data.login.token);
        if (data.login.token) {
          await createSession(data.login.token);
          toast.success('Signed in successfully! 🎉');
          form.reset();
          router.replace(`/`);
        }
      },
      onError(error, clientOptions) {
        form.setError('identifier', {
          message: 'Invalid email or password.',
        });
        form.setError('password', {
          message: 'Invalid email or password.',
        });
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Welcome</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Sign in to access your account
          </p>
        </div>
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="identifier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="m@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel>Password</FormLabel>
                  <button
                    type="button"
                    onClick={() => {
                      // setState("forgot");
                    }}
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </button>
                </div>

                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={false} type="submit" className="w-full">
            Continue
          </Button>
        </div>
        <div className="text-center text-sm">
          Don&apos;t have an account?{' '}
          <button
            type="button"
            onClick={() => setState('signIn')}
            className="underline underline-offset-4"
          >
            Sign up
          </button>
        </div>
      </form>
    </Form>
  );
};
