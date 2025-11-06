'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GalleryVerticalEnd, GalleryVerticalEndIcon } from 'lucide-react';
import { Button } from '@/components/button';
import { AuthFlow } from '@/features/auth/types';

import { SignInForm } from './sign-in-form';

export const AuthScreen = () => {
  const [state, setState] = useState<AuthFlow>('signIn');

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex w-full justify-between gap-2">
          <Link href={'#'} className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            MELORIN
          </Link>

          <Button variant={'ghost'} size={'icon'}>
            EN
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {state === 'signIn' && <SignInForm setState={setState} />}
            {/* {state === 'signUp' && <SignUpForm setState={setState} />} */}
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <GalleryVerticalEndIcon
          strokeWidth={1}
          className="absolute inset-0 m-auto h-1/5 w-1/5 object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};
