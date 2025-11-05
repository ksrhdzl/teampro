import '@/assets/styles/globals.css';
import type { Viewport, Metadata } from 'next';
import { cn, inter } from '@/libraries/utilities';

export const metadata: Metadata = {
  title: 'TeamPro',
  description: 'Manage your teams with power',
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
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning={true} {...props}>
      <body
        className={cn(
          inter.variable,
          'font-inter bg-background relative min-h-svh w-full antialiased transition-all duration-300',
        )}
      >
        {children}
      </body>
    </html>
  );
}
