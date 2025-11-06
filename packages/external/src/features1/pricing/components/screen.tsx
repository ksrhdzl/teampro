'use client';

import { useTranslations } from 'next-intl';

export const PricingScreen = () => {
  const t = useTranslations();

  return (
    <>
      <div className="absolute top-0 container mx-auto flex min-h-svh w-full flex-col items-center justify-start">
        <div className="w-full rounded-3xl py-2">
          <div className="flex w-full flex-col items-center justify-start gap-8 rounded-3xl border-[0.5px] bg-white pt-32 pb-8 dark:bg-black">
            <h1 className="text-7xl font-semibold text-foreground">
              {t('pricing.summary')}
            </h1>
            <p className="max-w-(--breakpoint-lg) text-center text-xl font-medium text-foreground/70">
              {t('pricing.description')}
            </p>

            <div className="flex w-full flex-row items-center justify-center gap-4 px-8">
              <div className="flex flex-1 flex-col items-center justify-start gap-4 rounded-2xl border p-4">
                <span className="w-full text-lg font-medium text-foreground">
                  پایه
                </span>
                <span className="w-full text-5xl font-semibold text-foreground">
                  ۴ میلیون تومان درماه
                </span>
                <p className="w-full text-justify text-lg font-light text-foreground/70">
                  تا Next.js خود را به صورت پویا رندر کنید کاربرد.مقیاس خودکار
                  توابع بدون سرورتا Next.js خود را به صورت پویا رندر کنید
                  کاربرد.
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start gap-4 rounded-2xl border p-4">
                <span className="w-full text-lg font-medium text-foreground">
                  حرفه‌ای
                </span>
                <span className="w-full text-5xl font-semibold text-foreground">
                  ۸ میلیون تومان درماه
                </span>
                <p className="w-full text-justify text-lg font-light text-foreground/70">
                  تا Next.js خود را به صورت پویا رندر کنید کاربرد.مقیاس خودکار
                  توابع بدون سرورتا Next.js خود را به صورت پویا رندر کنید
                  کاربرد.
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start gap-4 rounded-2xl border bg-secondary p-4">
                <span className="w-full text-lg font-medium text-foreground">
                  سازمانی
                </span>
                <span className="w-full text-5xl font-semibold text-foreground">
                  ۱۶ میلیون تومان درماه
                </span>
                <p className="w-full text-justify text-lg font-light text-foreground/70">
                  تا Next.js خود را به صورت پویا رندر کنید کاربرد.مقیاس خودکار
                  توابع بدون سرورتا Next.js خود را به صورت پویا رندر کنید
                  کاربرد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-96"></div>
      <div className="pt-96"></div>
      <div className="pt-96"></div>
    </>
  );
};
