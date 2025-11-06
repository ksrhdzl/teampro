import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Document, {
  metadata as metadataDefault,
  viewport as viewportDefault,
} from '@/app/document';
import { languages } from '@/libraries/i18n/languages';
import { Providers } from '@/libraries/providers';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    ...metadataDefault,
    title: t('title'),
  };
}

export const viewport: Viewport = {
  ...viewportDefault,
};

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale: language } = await params;
  if (!hasLocale(languages, language)) {
    notFound();
  }

  setRequestLocale(language);

  return (
    <Document language={language}>
      <Providers>{children}</Providers>
    </Document>
  );
}
