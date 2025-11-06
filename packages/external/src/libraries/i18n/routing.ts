import { defineRouting } from 'next-intl/routing';

import { language, languages } from './languages';

export const routing = defineRouting({
  localeCookie: { name: 'language' },
  locales: languages,
  defaultLocale: language,
  // maxAge: 60 * 60 * 24 * 365,
  localeDetection: true,
  alternateLinks: true,
  localePrefix: 'never',
});
