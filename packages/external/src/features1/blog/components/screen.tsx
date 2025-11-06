'use client';

import { useLocale, useTranslations } from 'next-intl';
import { posts } from '@/assets/data';

import { Post } from './post';

export const BlogScreen = () => {
  const t = useTranslations();
  const l = useLocale();

  return (
    <>
      <div className="sticky top-14 z-50 flex h-12 w-full items-center justify-center border-b bg-muted/60 backdrop-blur-md">
        <div className="container flex h-full w-full items-center justify-between gap-6">
          <div className="flex items-center justify-start gap-6">
            {['All', '2026', '2025', '2024', 'Extra'].map((v) => (
              <span className="text-sm hover:cursor-pointer hover:text-emerald-600 hover:underline">
                {v}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-end gap-2">
            <span className="size-2 animate-pulse rounded-full bg-emerald-600" />
            <span className="animate-pulse text-sm font-light">
              PROJECTS : 4
            </span>
          </div>
        </div>
      </div>

      <div className="py-2" />
      <div className="z-10 container mx-auto h-svh w-full">
        <div className="grid w-full grid-cols-1 items-center justify-start gap-8 md:grid-cols-2 xl:grid-cols-3">
          {/* {posts
            .filter(
              (v) =>
                v.locales.some((v) => v.language == l) &&
                v.tags.some((v) => v.slug !== 'project'),
            )
            .map((post, i) => {
              return <Post key={i} post={post} />;
            })} */}
          {posts
            .filter(
              (v) =>
                v.locales.some((v) => v.language == l) &&
                v.tags.some((v) => v.slug == 'project'),
            )
            .map((post, i) => {
              return <Post key={i} post={post} />;
            })}
        </div>
      </div>
    </>
  );
};
