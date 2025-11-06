import { UserPlusIcon } from 'lucide-react';
import { Button } from '@/components/button';

import { Members } from './members';

export const MembersTab = () => {
  return (
    <>
      <div className="space-y-4">
        <header className="z-0 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <div className="flex flex-1 flex-col items-start justify-center">
            <h1 className="text-lg font-semibold">Members</h1>
            <p className="text-xs text-secondary-foreground">
              Manage your members of access project
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              // onClick={() => setCreateMemberModal(true)}
            >
              <UserPlusIcon className="mr-2 h-4 w-4" />
              Add Member
            </Button>
          </div>
        </header>
        <div className="flex flex-col space-y-4 px-4">
          <Members />
        </div>
      </div>
    </>
  );
};
