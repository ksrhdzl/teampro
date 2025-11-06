import { cn } from '@/libraries/utilities';

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh w-full bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] px-5 pt-[70px] prose-h4:text-lg prose-h4:lg:text-xl prose-h4:xl:text-2xl">
      <div className="container mx-auto flex w-full flex-col gap-12 py-18 text-left text-foreground">
        {children}
      </div>
    </div>
  );
}

function PageHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'font-heading text-center text-2xl xl:text-3xl 2xl:text-4xl',
        className,
      )}
      {...props}
    />
  );
}

function PageHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      {children}
    </div>
  );
}

function PageDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'font-base mx-auto max-w-screen-lg text-center text-base sm:text-base md:text-base xl:text-lg 2xl:text-xl',
        className,
      )}
      {...props}
    />
  );
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-center gap-2 pt-2',
        className,
      )}
      {...props}
    />
  );
}

export { PageWrapper, PageActions, PageDescription, PageHeading, PageHeader };
