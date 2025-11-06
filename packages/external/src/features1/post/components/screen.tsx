'use client';

import { useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { posts } from '@/assets/data';
import { useRouter } from '@/libraries/i18n/navigation';

export const PostScreen = () => {
  const router = useRouter();
  const t = useTranslations();
  const l = useLocale();
  const { slug }: { slug: string } = useParams();
  const post = posts.find(
    (v) => v.locales.some((v) => v.language == l) && v.slug == slug,
  );
  if (!post) router.back();

  return (
    <>
      <div className="absolute top-0 container mx-auto flex min-h-svh w-full flex-col items-center justify-start">
        <div className="w-full rounded-3xl py-2">
          <div className="flex w-full flex-col items-center justify-start gap-8 rounded-3xl border-[0.5px] bg-white pt-32 pb-8 dark:bg-black">
            <h1 className="text-7xl font-semibold text-foreground">
              {post?.locales.find((v) => v.language == l)?.name}
            </h1>
            <p className="max-w-(--breakpoint-lg) text-justify text-base font-medium text-foreground/70">
              {post?.locales.find((v) => v.language == l)?.summary}
            </p>
            <div className="w-full px-24">
              <div className="aspect-video w-full rounded-xl bg-neutral-300" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-60" />
      <div className="pt-60" />
      <div className="pt-28" />
      <div className="pt-60" />
      <div className="pt-60" />
    </>
  );
};
