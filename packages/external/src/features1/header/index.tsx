'use client';

import {
  CrownIcon,
  HeadsetIcon,
  HomeIcon,
  MessagesSquareIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/button';
import { Link } from '@/libraries/i18n/navigation';

import { Language } from './components/language';
import { NavMobile } from './components/nav-mobile';
import { Theme } from './components/theme';

export const Header = () => {
  const t = useTranslations();

  // const count = (17800 / 1000).toFixed(1) + 'k';

  return (
    <nav className="sticky top-0 left-0 z-50 mx-auto flex h-14 w-full items-center border-b border-border bg-background/20 px-6 backdrop-blur-md">
      <div className="container mx-auto flex w-full items-center justify-between text-foreground">
        <div className="flex items-center gap-6 xl:gap-10">
          <NavMobile />

          <Link
            className="bg-main font-heading text-main-foreground flex size-8 items-center justify-center rounded-none border-2 border-foreground px-2 font-sans text-xl font-medium"
            href={'/'}
          >
            M
          </Link>

          <div className="font-base hidden items-center gap-8 text-base lg:flex">
            {[
              {
                title: t('common.header.start.home'),
                link: '/',
                icon: HomeIcon,
              },
              {
                title: t('common.header.start.showcase'),
                link: '/showcase',
                icon: CrownIcon,
              },
              // {
              //   title: t('common.header.start.pricing'),
              //   link: '/pricing',
              //   icon: DollarSignIcon,
              // },
              // {
              //   title: t('common.header.start.blog'),
              //   link: '/blog',
              //   icon: NewspaperIcon,
              // },
              {
                title: t('common.header.start.contact'),
                link: '/contact',
                icon: HeadsetIcon,
              },
            ].map((v, i) => (
              <Link
                key={i}
                href={v.link}
                className="flex items-center gap-1 text-foreground hover:cursor-pointer hover:text-emerald-600"
              >
                <v.icon className="size-4" />
                <span className="text-base font-normal">{v.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* <Search /> */}

          <div className="flex items-center justify-end gap-2">
            {/* <a
              target="_blank"
              href="https://github.com/ekmas/neobrutalism-components"
              className="shadow-nav dark:shadow-navDark dark:border-darkBorder flex h-9 items-center justify-center gap-2 rounded-base border-2 border-border px-1.5 transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none dark:hover:shadow-none"
            >
              <p className="hidden font-semibold sm:inline">{count}</p>

              <Twitter className="stroke-foreground" />
            </a> */}
            <Button
              variant={'outline'}
              className="h-8 border-emerald-600 text-emerald-600 hover:translate-x-[2px]! hover:translate-y-[2px]! hover:cursor-pointer hover:bg-emerald-100 hover:text-emerald-600 dark:hover:bg-emerald-900"
            >
              <MessagesSquareIcon />
              {t('common.header.end.faq')}
            </Button>
            <Language />
            <Theme />
          </div>
        </div>
      </div>
    </nav>
  );
};
