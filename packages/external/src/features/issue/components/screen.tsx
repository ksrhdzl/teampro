import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useSetAtom } from 'jotai';
import { CalendarRangeIcon, Columns3Icon, Rows3Icon } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import { breadcrumbAtom } from '@/libraries/jotai/atoms';

import { CreateIssueModal } from './create-issue-modal';
import { EditIssueModal } from './edit-issue-modal';
import { TaskViewSwitcher } from './task-view-switcher';

export const Screen = () => {
  const pathname = usePathname();

  const setBreadcrumb = useSetAtom(breadcrumbAtom);
  useEffect(() => {
    setBreadcrumb([
      { title: 'Home', url: '/' },
      { title: 'Issues', url: pathname },
    ]);
  }, [setBreadcrumb]);

  const [view, setView] = useQueryState('view', {
    defaultValue: 'table',
  });

  return (
    <>
      <CreateIssueModal />
      <EditIssueModal />
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col">
          <header className="flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
            <div className="flex flex-1 flex-col items-start justify-center">
              <h1 className="text-lg font-semibold">Issues</h1>
              <p className="text-xs text-secondary-foreground">
                Manage your issues here
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
          <TaskViewSwitcher memberId={1} />
        </main>
      </div>
    </>
  );
};
