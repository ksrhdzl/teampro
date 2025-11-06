'use client';

import { Locale, useLocale, useTranslations } from 'next-intl';

import { Post } from './post';

export const ShowcaseScreen = () => {
  const t = useTranslations();
  const l = useLocale() as Locale;

  return (
    <>
      <div className="absolute top-0 container mx-auto flex min-h-svh w-full flex-col items-center justify-start">
        <div className="w-full rounded-3xl py-2">
          <div className="flex w-full flex-col items-center justify-start gap-8 rounded-3xl border-[0.5px] bg-white pt-32 pb-8 dark:bg-black">
            <h1 className="text-7xl font-semibold text-foreground">
              {t('showcase.summary')}
            </h1>
            <p className="max-w-(--breakpoint-lg) text-center text-xl font-medium text-foreground/70">
              {t('showcase.description')}
            </p>
          </div>
        </div>
      </div>
      <div className="-z-10 pt-60" />

      <div className="pt-96"></div>
    </>
  );
};
