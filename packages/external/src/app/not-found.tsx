'use client';

import { Metadata } from 'next';
import Error from 'next/error';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Document from '@/app/document';
import { language } from '@/libraries/i18n/languages';

export const metadata: Metadata = {
  title: '404',
  description: 'Something went wrong',
};

export default function NotFound() {
  return (
    <Document language={language}>
      {/* <Error statusCode={404} /> */}
      <div className="prose-headings:font-heading flex h-dvh max-h-dvh w-full items-center justify-center bg-background text-foreground portrait:h-dvh portrait:max-h-dvh prose-h1:text-3xl prose-h1:md:text-5xl">
        <div className="flex max-w-(--breakpoint-xl) flex-col items-center px-5 text-center">
          <h1 className="leading-normal">404 Not Found</h1>

          <p className="font-base my-9 w-full text-xl leading-snug sm:mt-[30px] sm:mb-10 sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
            Could not find requested resource.
          </p>

          <Link
            className="rounded-base bg-main font-base text-main-foreground shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY flex w-max items-center gap-2.5 border-2 border-border px-4 py-2 text-base transition-all hover:shadow-none md:px-10 md:py-3 md:text-[22px]"
            href={'/'}
          >
            Return home
            <ArrowUpRight className="size-5 md:size-[30px]" />
          </Link>
        </div>
      </div>
    </Document>
  );
}
