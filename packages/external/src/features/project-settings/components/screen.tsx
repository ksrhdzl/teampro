'use client';

import { useEffect, useState } from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarInset,
} from '@/components/sidebar';
import { Users, Cog } from 'lucide-react';
import { GeneralTab } from './general-tab';
import { MembersTab } from './members-tab';
import { useSetAtom } from 'jotai';
import { breadcrumbAtom } from '@/libraries/jotai/atoms';

export const Screen = () => {
  const [tab, setTab] = useState('general');

  const setBreadcrumb = useSetAtom(breadcrumbAtom);
  useEffect(() => {
    setBreadcrumb([{ title: 'Home', url: '/' }]);
  }, [setBreadcrumb]);

  return (
    <div className="bg-muted/40 flex min-h-screen flex-col">
      <SidebarProvider>
        <div className="flex flex-1">
          <Sidebar
            className="hidden w-64 border-r md:flex"
            variant="sidebar"
            collapsible="none"
          >
            <SidebarHeader className="bg-background flex h-16 items-start gap-4 border-b px-4">
              <div className="flex flex-1 flex-col items-start justify-center">
                <h1 className="text-lg font-semibold">Project Settings</h1>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={tab === 'general'}
                        onClick={() => setTab('general')}
                      >
                        <Cog className="h-4 w-4" />
                        <span>General</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={tab === 'members'}
                        onClick={() => setTab('members')}
                      >
                        <Users className="h-4 w-4" />
                        <span>Members</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <SidebarInset className="flex-1">
            <div>
              {tab === 'general' && <GeneralTab />}
              {tab === 'members' && <MembersTab />}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};
