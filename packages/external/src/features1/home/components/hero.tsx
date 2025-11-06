'use client';

import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/button';
import { Skeleton } from '@/components/skeleton';

export const Hero = () => {
  const t = useTranslations();

  return (
    <>
      <div className="w-full pt-24 pb-12">
        <div className="container mx-auto flex items-center justify-center gap-4">
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            <h1 className="max-w-(--breakpoint-lg) text-center text-7xl leading-tight font-black tracking-tight text-foreground">
              {t('home.sections.hero.title')}
            </h1>

            <p className="max-w-(--breakpoint-xl) text-center text-lg font-medium text-foreground/70">
              {t('home.sections.hero.description')}
            </p>
            <div className="flex flex-row items-center justify-center gap-4">
              <Button size={'lg'} className="rounded-lg px-16">
                {t('home.sections.hero.contact')}
              </Button>
              <Button
                variant={'outline'}
                size={'lg'}
                className="rounded-lg px-12"
              >
                {t('home.sections.hero.showcase')}
              </Button>
              {/* <div className="flex h-10 flex-row items-center justify-center rounded-xl bg-linear-to-br from-neutral-800 to-neutral-600 p-px">
                <button className="h-full w-full rounded-xl bg-neutral-900 px-4 text-white">
                  Start building a website
                </button>
              </div>
              <div className="flex h-10 flex-row items-center justify-center rounded-xl bg-linear-to-br from-neutral-400 to-neutral-600 p-px">
                <button className="h-full w-full rounded-xl bg-neutral-100 px-4 text-black">
                  Book an intro call
                </button>
              </div> */}
            </div>
            <Skeleton className="flex aspect-video w-full items-center justify-center rounded-3xl border">
              <Loader2 className="size-4 animate-spin text-foreground/70" />
            </Skeleton>
          </div>
        </div>
      </div>
    </>
  );
};
