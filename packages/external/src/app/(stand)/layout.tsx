import { Button } from '@/components/button';
import { verifySession } from '@/libraries/utilities';
import { GalleryVerticalEnd } from 'lucide-react';
import Link from 'next/link';
import { redirect, RedirectType } from 'next/navigation';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await verifySession();
  if (!session) redirect('/auth', RedirectType.replace);

  return (
    <main className="bg-muted/40 min-h-screen w-full">
      <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-start gap-4">
        <div className="flex h-24 w-full items-center justify-between gap-2">
          <Link href={'#'} className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            TEAMPRO
          </Link>

          <div className="flex items-center justify-center gap-2">
            <Button
              variant={'outline'}
              size={'sm'}
              className="flex items-center gap-2 font-medium"
            >
              EN
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </main>
  );
}
