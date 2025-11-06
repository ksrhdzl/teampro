'use client';

import { GlobeIcon } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { usePathname, useRouter } from '@/libraries/i18n/navigation';

export const Language = () => {
  const locale = useLocale();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          {/* <Button variant="ghost"> */}
          <Button
            size={'icon'}
            variant={'outline'}
            className="h-8 hover:translate-x-[2px]! hover:translate-y-[2px]!"
          >
            <GlobeIcon className="stroke-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup
            value={locale}
            onValueChange={(v) => {
              router.push(pathname, { locale: v });
            }}
          >
            {['ar', 'en', 'fa', 'ku'].map((vv, i) => (
              <DropdownMenuRadioItem key={i} value={vv}>
                {t(`common.locales.${vv}`)}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
