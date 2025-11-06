import '@/assets/styles/globals.css';

import type { Metadata, Viewport } from 'next';
import { getDirection } from '@/libraries/i18n/direction';
import { cn, inter } from '@/libraries/utilities';

export const metadata: Metadata = {
  title: 'TeamPro',
  description: 'Manage your business and teams with power',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  // colorScheme: 'dark',
};

export default function Document({
  children,
  language,
  ...props
}: {
  children: React.ReactNode;
  language: string;
}) {
  const direction = getDirection(language);

  return (
    <html
      lang={language}
      dir={direction}
      suppressHydrationWarning={true}
      {...props}
    >
      <body
        className={cn(
          'relative min-h-svh w-full bg-background font-inter antialiased transition-all duration-300',
          direction == 'ltr' && [inter.variable, 'font-inter'],
          // direction == 'rtl' && [dana.variable, 'font-dana'],
        )}
      >
        {children}
      </body>
    </html>
  );
}
