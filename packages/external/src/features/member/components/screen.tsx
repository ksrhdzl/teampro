'use client';

import { useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import { UserPlusIcon } from 'lucide-react';
import { Button } from '@/components/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import { breadcrumbAtom } from '@/libraries/jotai/atoms';

import { useCreateMemberModal } from '../hooks/use-create-member-modal';
import { Activities } from './activities';
import { CreateMemberModal } from './create-member-modal';
import { EditMemberModal } from './edit-member-modal';
import { Members } from './members';

export const MembersScreen = () => {
  const [state, setState] = useState('members');

  const setBreadcrumb = useSetAtom(breadcrumbAtom);
  useEffect(() => {
    setBreadcrumb([
      { title: 'Home', url: '/' },
      { title: 'Members', url: '/members' },
    ]);
  }, [setBreadcrumb]);

  const { modal: createMemberModal, setModal: setCreateMemberModal } =
    useCreateMemberModal();

  return (
    <>
      <CreateMemberModal />
      <EditMemberModal />
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Tabs value={state} onValueChange={setState}>
          <header className="sticky top-16 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
            <div className="flex flex-1 items-center gap-2">
              <TabsList>
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
              </TabsList>
            </div>
            <div className="flex items-center gap-2">
              {state == 'members' && (
                <>
                  <Button size="sm" onClick={() => setCreateMemberModal(true)}>
                    <UserPlusIcon className="mr-2 h-4 w-4" />
                    Add Member
                  </Button>
                </>
              )}
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <TabsContent value="members">
              <Members />
            </TabsContent>
            <TabsContent value="activities">
              <Activities />
            </TabsContent>
          </main>
        </Tabs>
      </div>
    </>
  );
};
