'use client';

import { useLocale } from 'next-intl';
import { IPost } from '@/assets/data';
import { useRouter } from '@/libraries/i18n/navigation';

export const Post = ({ post }: { post: IPost }) => {
  const router = useRouter();
  const l = useLocale();

  return (
    <div
      onClick={() => router.push(`/blog/${post.slug}`)}
      className="flex w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border-[0.5px] bg-background p-4 hover:cursor-pointer hover:opacity-90"
    >
      <div className="aspect-video w-full rounded-xl bg-neutral-300" />
      <div className="flex w-full flex-col items-center justify-start gap-1">
        <h1 className="w-full text-start text-lg font-semibold">
          {post.locales.find((v) => v.language == l)?.name}
        </h1>
        <p className="line-clamp-3 text-justify text-sm font-light text-foreground/70">
          {post.locales.find((v) => v.language == l)?.summary}
        </p>
      </div>
      <div className="flex w-full items-center justify-between">
        <span>{post.locales.find((v) => v.language == l)?.author}</span>

        <div className="flex items-center gap-2">
          {post.tags
            .filter((v) => v.locales.some((v) => v.language == l))
            ?.map((tag, i) => (
              <span
                key={i}
                className="rounded border-[0.5px] bg-secondary px-4 text-foreground"
              >
                {tag.locales.find((v) => v.language == l)?.name}
              </span>
            ))}
          <span className="rtl:pt-1">{post.createdAt.getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};
