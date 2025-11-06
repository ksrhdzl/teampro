import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronLeftIcon,
  ChevronRight,
  CrownIcon,
  HeadsetIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export const NavMobile = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  return (
    <>
      {!open && (
        <MenuIcon
          className="block size-6 hover:cursor-pointer hover:opacity-80 lg:hidden"
          onClick={() => setOpen(true)}
        />
      )}
      {open && (
        <XIcon
          className="block size-6 hover:cursor-pointer hover:opacity-80 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="bg-main fixed inset-x-0 top-14 z-50 h-screen w-screen bg-background px-8 py-8 lg:hidden">
          <ul className="container mx-auto flex w-full flex-col items-start justify-center gap-2">
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
              <Link href={v.link} className="w-full">
                <li
                  key={i}
                  className="flex w-full items-center justify-start gap-2 rounded-xl px-4 py-2 text-lg text-foreground hover:cursor-pointer hover:bg-muted hover:opacity-80"
                  onClick={() => setOpen(false)}
                >
                  <v.icon className="size-4" />
                  <span className="flex-1 text-base font-normal">
                    {v.title}
                  </span>
                  <ChevronLeftIcon className="size-4" />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
