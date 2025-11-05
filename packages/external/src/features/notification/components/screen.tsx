import { useSetAtom } from 'jotai';
import { breadcrumbAtom } from '@/libraries/jotai/atoms';
import { usePathname } from 'next/navigation';
import { CrmErpNotificationPage } from './asd';
import { useEffect } from 'react';

export const Screen = () => {
  const pathname = usePathname();
  const setBreadcrumb = useSetAtom(breadcrumbAtom);
  useEffect(() => {
    setBreadcrumb([
      { title: 'Home', url: '/' },
      { title: 'Notifications', url: pathname },
    ]);
  }, [setBreadcrumb]);

  return (
    <>
      <div className="bg-muted/40 flex min-h-screen w-full flex-col">
        <div className="flex flex-col">
          <header className="bg-background flex h-16 items-center gap-4 border-b px-4 sm:px-6">
            <div className="flex flex-1 flex-col items-start justify-center">
              <h1 className="text-lg font-semibold">Notifications</h1>
              <p className="text-secondary-foreground text-xs">
                Manage your notifications here
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* <Button variant="outline" size="sm">
                <UserPlusIcon className="mr-2 h-4 w-4" />
                Invite Team
              </Button> */}
            </div>
          </header>
        </div>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <CrmErpNotificationPage />
        </main>
      </div>
    </>
  );
};
