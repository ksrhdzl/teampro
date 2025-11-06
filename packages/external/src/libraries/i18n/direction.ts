import { useLocale as useLanguage } from 'next-intl';

export type Direction = 'ltr' | 'rtl';

const directions: Record<string, Direction> = {
  ar: 'rtl',
  en: 'ltr',
  fa: 'rtl',
  ku: 'rtl',
};

export const getDirection = (locale: string): Direction => directions[locale];

export const useDirection = (): Direction => {
  const language = useLanguage();
  return getDirection(language);
};
