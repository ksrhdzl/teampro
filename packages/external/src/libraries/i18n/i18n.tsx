'use server';

import { NextIntlClientProvider } from 'next-intl';

// import type { RichTranslationValues } from 'next-intl';

export const I18NProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
};

// export const i18nComponents: RichTranslationValues = {
//   br: () => <br />,
// };
