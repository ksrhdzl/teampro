import { Button } from '@/components/button';
import { Members } from './members';
import { UserPlusIcon } from 'lucide-react';

export const MembersTab = () => {
  return (
    <>
      <div className="space-y-4">
        <header className="bg-background z-0 flex h-16 items-center gap-4 border-b px-4 sm:px-6">
          <div className="flex flex-1 flex-col items-start justify-center">
            <h1 className="text-lg font-semibold">Members</h1>
            <p className="text-secondary-foreground text-xs">
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
