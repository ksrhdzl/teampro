import '@/assets/styles/marquee.css';

import Star9 from '@/features1/stars/s9';

export default function Page() {
  return (
    <div className="font-base prose-headings:font-heading text-foreground prose-h1:text-3xl prose-h1:sm:text-4xl prose-h1:md:text-5xl prose-h1:xl:text-5xl prose-h1:2xl:text-6xl prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:lg:text-4xl prose-h2:2xl:text-4xl prose-h3:sm:text-xl prose-h3:md:text-2xl prose-h3:lg:text-3xl prose-h3:xl:text-3xl prose-h3:2xl:text-4xl">
      <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:10px_10px] px-5 py-[100px] md:py-[200px]">
        <div className="w-container mx-auto max-w-full">
          <div className="flex flex-col items-center gap-6 text-center font-mono">
            <h1 className="leading-normal">
              We Build Your <br />
              <span className="rounded-base bg-main/50 relative mr-0 border-2 border-foreground/40 px-2 sm:mr-2 dark:border-foreground/70 sm:[&_svg]:size-7 md:[&_svg]:size-[45px]">
                Digital Future
                <Star9
                  className="absolute -right-2.5 -bottom-2.5 hidden sm:block md:-right-5 md:-bottom-4"
                  color="var(--main)"
                  pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
                />
                <Star9
                  className="absolute -top-2.5 -left-2.5 hidden sm:block md:-top-4 md:-left-5"
                  color="var(--main)"
                  pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
                />
              </span>
              <br />
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
