'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/button';

export const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="flex w-full flex-col items-center justify-start">
      <section className="w-full border-y-[0.5px] bg-background">
        <div className="container mx-auto flex flex-col gap-2 py-2">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-2">
              <Link
                className="bg-main font-heading text-main-foreground flex size-8 items-center justify-center rounded-none border-2 border-foreground px-2 font-sans text-xl font-medium"
                href={'/'}
              >
                M
              </Link>

              <span className="font-bold">{t('common.title')}</span>
            </div>
            <p className="">{t('common.description')}</p>
          </div>
          <div className="h-[0.5px] w-full bg-border" />
          <div className="flex w-full flex-row items-center justify-between gap-8">
            <div className="flex flex-row items-center justify-start gap-2">
              <Button variant={'link'} className="">
                {t('common.footer.menu.home')}
              </Button>
              <Button variant={'link'} className="">
                {t('common.footer.menu.contact')}
              </Button>
              <Button variant={'link'} className="">
                {t('common.footer.menu.about')}
              </Button>
            </div>
            <div className="relative flex items-center">
              <Button className="h-8 rounded-md px-8 py-0 text-xs font-normal">
                {t('common.footer.button')}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-transparent dark:bg-black">
        <div className="container mx-auto">
          <div className="flex w-full flex-col items-center justify-center gap-1 py-6">
            <div className="w-full text-start text-xs text-neutral-300">
              {t('common.footer.pp.title')}
            </div>
            <div className="w-full text-justify text-xs font-light text-neutral-400">
              {t('common.footer.pp.description')}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full border-y-[0.5px] bg-background">
        <div className="container mx-auto">
          <div className="flex h-10 w-full flex-row items-center justify-between">
            <div className="text-xs text-foreground">
              {t('common.footer.bottom.start')}
            </div>
            <div className="text-xs text-foreground">
              {t('common.footer.bottom.end')}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
