'use client';

import { useTranslations } from 'next-intl';

export const Nav = () => {
  const t = useTranslations();
  return (
    <div className="flex h-10 w-full animate-pulse items-center justify-center border-y-[0.5px] bg-secondary">
      <div className="container mx-auto flex h-full w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center gap-6">
          <h2 className="text-sm font-normal text-foreground/70 hover:cursor-pointer hover:text-foreground">
            {t('home.sections.nav.start')}
          </h2>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="flex flex-row items-center justify-center gap-1">
            <span className="size-1.5 rounded-full bg-primary" />
            <h2 className="text-xs font-medium text-foreground/70">
              {t('home.sections.nav.end')}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
