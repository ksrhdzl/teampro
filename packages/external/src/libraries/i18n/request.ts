import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }: any) => {
  // const language = (await getSetting("language")) || Language;
  let language = await requestLocale;

  language = hasLocale(routing.locales, language)
    ? language
    : routing.defaultLocale;

  // // Ensure that a valid locale is used
  // if (!language || !routing.locales.includes(locale as any)) {
  //   locale = routing.defaultLocale;
  // }

  return {
    locale: language,
    messages: (await import(`@/assets/dictionaries/${language}.json`)).default,
  };
});
